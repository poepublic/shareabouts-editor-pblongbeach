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
      { id: 'Long-Beach-Dev', name: 'PB Long Beach 2015/16', url: 'https://shareaboutsapi2.herokuapp.com/api/v2/PBP/datasets/pb-long-beach-2015', dataUrl: 'https://shareaboutsapi2.herokuapp.com/api/v2/PBP/datasets/pb-long-beach/places?include_invisible&include_private&page_size=5000&format=csv'}
    ]);
  });

  // Initialize the place collection
  NS.app.addInitializer(function(options){
    NS.placeCollection = new NS.PlaceCollection();
    // NS.placeCollection.url = 'http://data.shareabouts.org/api/v2/demo-user/datasets/demo-data/places';
  });

  // Initialize the user authentication
  NS.app.addInitializer(function(options){
    NS.auth = new NS.Auth({
      apiRoot: 'https://shareaboutsapi2.herokuapp.com/api/v2/'
    });
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

    // Scroll to the top of the page on route changes
    NS.router.on('route', function() {
      window.scrollTo(0,0);
    });
  });
}(Shareabouts, jQuery, Shareabouts.Util.console));
