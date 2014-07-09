/*global jQuery, Backbone, _ */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  var signInRequired = function(f) {
    var wrapper = function() {
      var wrapperArgs = arguments,
          successRedirect = function() { f.apply(this, wrapperArgs); },
          user;

      // Check whether the user is logged in
      user = NS.auth.getUserSession();

      if (!user) {
        // If not, run the sign in with the success redirect
        NS.controller.signin(successRedirect);
      } else {
        // If so then just run the wrapped function
        NS.user = user;
        f.apply(this, wrapperArgs);
      }
    };

    return wrapper;
  };

  NS.controller = {
    index: function() {
      console.log('show the index');
    },
    signin: function(redirect) {
      var view = new NS.SignInView({
        redirect: redirect
      });
      NS.app.mainRegion.show(view);
    },
    datasetList: signInRequired(function() {
      var view = new NS.DatasetListView({
        collection: NS.datasetCollection
      });

      NS.app.mainRegion.show(view);
    }),
    placeList: signInRequired(function(datasetSlug, page) {
      // Set the dataset url on the place collection
      NS.currentDataset = NS.datasetCollection.findWhere({ id: datasetSlug });
      NS.placeCollection.url = NS.currentDataset.get('url') + '/places';

      var view = new NS.PlaceListLayout({
        model: NS.currentDataset,
        collection: NS.placeCollection
      });

      NS.app.mainRegion.show(view);

      NS.placeCollection.fetch({
        reset: true,
        data: {
          include_private: true,
          include_invisible: true,
          page_size: 25,
          page: parseInt(page, 10) || 1
        }
      });
    }),
    placeForm: signInRequired(function(datasetSlug, placeId) {
      // Set the dataset url on the place collection
      NS.currentDataset = NS.datasetCollection.findWhere({ id: datasetSlug });
      NS.placeCollection.url = NS.currentDataset.get('url') + '/places';

      var model = NS.placeCollection.get(placeId),
          showPlaceForm = function(model) {
            var $alert = $('.save-message'),
                template = model.get('location_type') === 'bikeparking' ?
                              'bike-parking-form' : 'abandoned-bike-form',
                view = new NS.PlaceFormView({
                  model: model,
                  collection: NS.placeCollection,
                  template: NS.Templates[template],
                  silent: true,
                  include_invisible: true,
                  success: function() {
                    $alert.removeClass('alert').addClass('success show');
                    _.delay(function() {
                      $alert.removeClass('show');
                    }, 3000);
                  },
                  error: function() {
                    $alert.removeClass('success').addClass('alert show');
                    _.delay(function() {
                      $alert.removeClass('show');
                    }, 3000);
                  }
                });

            NS.app.mainRegion.show(view);
          };

      if (model) {
        showPlaceForm(model);
      } else {
        NS.placeCollection.fetchById(placeId, {
          data: {
            include_private: true,
            include_invisible: true
          },
          success: showPlaceForm,
          error: function() {
            window.alert('Place ' + placeId + ' can not be found.');
            NS.router.navigate('', {trigger: true});
          }
        });
      }
    })
  };


}(Shareabouts, jQuery, Shareabouts.Util.console));