/*global jQuery, Backbone */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.app = new Backbone.Marionette.Application();

  // Add the main region
  NS.app.addRegions({
    mainRegion: '#main-region'
  });

  // Initialize the router and history on start
  NS.app.addInitializer(function(options){
    new NS.Router();
    Backbone.history.start();
  });

}(Shareabouts, jQuery, Shareabouts.Util.console));