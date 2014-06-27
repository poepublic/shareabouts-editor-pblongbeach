/*global jQuery, Backbone */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.controller = {
    index: function() {
      console.log('show the index');
    },
    datasetList: function() {
      console.log('list of datasets');
    },
    placeList: function(datasetSlug, page) {
      var view = new NS.PlaceListLayout({
        collection: NS.placeCollection
      });

      NS.app.mainRegion.show(view);

      NS.placeCollection.fetch({
        reset: true,
        data: {
          page: parseInt(page, 10) || 1
        }
      });
    }
  };


}(Shareabouts, jQuery, Shareabouts.Util.console));