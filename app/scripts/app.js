/*global jQuery, Backbone */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.app = new Backbone.Marionette.Application();

  // Add the main region
  NS.app.addRegions({
    mainRegion: '#main-region'
  });

  // Initialize the place collection
  NS.app.addInitializer(function(options){
    NS.placeCollection = new NS.PlaceCollection();
    NS.placeCollection.url = 'http://data.shareabouts.org/api/v2/admin/datasets/dev-chicago-bike-parking/places';
  });

  // Initialize the router and history on start
  NS.app.addInitializer(function(options){
    new NS.Router();
    Backbone.history.start();
  });

}(Shareabouts, jQuery, Shareabouts.Util.console));