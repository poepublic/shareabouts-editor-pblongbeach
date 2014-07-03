/*global jQuery, Backbone */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.app = new Backbone.Marionette.Application();

  // Add the main region
  NS.app.addRegions({
    headerRegion: '#header-region',
    mainRegion: '#main-region'
  });

  // Initialize the dataset collection
  NS.app.addInitializer(function(options){
    NS.datasetCollection = new Backbone.Collection([
      { id: 'abandoned-bikes', name: 'Abandoned Bikes', url: 'http://data.shareabouts.org/api/v2/chicagobikes/datasets/chicago-abandoned-bikes'},
      { id: 'bike-parking', name: 'Bike Parking', url: 'http://data.shareabouts.org/api/v2/chicagobikes/datasets/chicago-bike-parking'}
    ]);
  });

  // Initialize the place collection
  NS.app.addInitializer(function(options){
    NS.placeCollection = new NS.PlaceCollection();
    // NS.placeCollection.url = 'http://data.shareabouts.org/api/v2/demo-user/datasets/demo-data/places';
  });

  // Initialize the user authentication
  NS.app.addInitializer(function(options){
    NS.auth = new NS.Auth();
  });

  // Show the header region
  NS.app.addInitializer(function(options){
    var view = new NS.HeaderBarView();
    NS.app.headerRegion.show(view);
  });

  // Initialize the router and history on start
  NS.app.addInitializer(function(options){
    NS.router = new NS.Router();
    Backbone.history.start();
  });

}(Shareabouts, jQuery, Shareabouts.Util.console));