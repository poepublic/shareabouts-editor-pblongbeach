/*global jQuery, Backbone */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.Router = Backbone.Marionette.AppRouter.extend({
    controller: NS.controller,
    appRoutes: {
      '': 'index',
      ':dataset_slug': 'placeList'
    }
  });
}(Shareabouts, jQuery, Shareabouts.Util.console));