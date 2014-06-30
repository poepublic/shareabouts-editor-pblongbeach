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
      var dataset = NS.datasetCollection.findWhere({ id: datasetSlug });
      NS.placeCollection.url = dataset.get('url') + '/places';

      var view = new NS.PlaceListLayout({
        model: dataset,
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
    }
  };


}(Shareabouts, jQuery, Shareabouts.Util.console));