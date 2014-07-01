/*global jQuery, Backbone */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.controller = {
    index: function() {
      console.log('show the index');
    },
    datasetList: function() {
      var view = new NS.DatasetListView({
        collection: NS.datasetCollection
      });

      NS.app.mainRegion.show(view);
    },
    placeList: function(datasetSlug, page) {
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
          page_size: 25,
          page: parseInt(page, 10) || 1
        }
      });
    },
    placeForm: function(datasetSlug, placeId) {
      // Set the dataset url on the place collection
      NS.currentDataset = NS.datasetCollection.findWhere({ id: datasetSlug });
      NS.placeCollection.url = NS.currentDataset.get('url') + '/places';

      var model = NS.placeCollection.get(placeId),
          showPlaceForm = function(model) {
            var view = new NS.PlaceFormView({
              model: model,
              collection: NS.placeCollection,
              template: NS.Templates['place-form']
            });

            NS.app.mainRegion.show(view);
          };

      if (model) {
        showPlaceForm(model);
      } else {
        NS.placeCollection.fetchById(placeId, {
          success: showPlaceForm,
          error: function() {
            window.alert('Place ' + placeId + ' can not be found.');
            NS.router.navigate('', {trigger: true});
          }
        });
      }

    }
  };


}(Shareabouts, jQuery, Shareabouts.Util.console));