/*global jQuery, Backbone */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.Router = Backbone.Marionette.AppRouter.extend({
    controller: NS.controller,
    appRoutes: {
      '': 'index'
    }
  });
}(Shareabouts, jQuery, Shareabouts.Util.console));