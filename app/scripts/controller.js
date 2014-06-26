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
    placeList: function(datasetSlug) {
      var view = new NS.PlaceListView({
        collection: NS.placeCollection
      });

      NS.app.mainRegion.show(view);

      NS.placeCollection.fetch();
    }
  };


}(Shareabouts, jQuery, Shareabouts.Util.console));