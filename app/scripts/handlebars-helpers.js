/*global jQuery, Handlebars */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  Handlebars.registerHelper('currentDataset', function(prop, options) {
    if (!options) {
      options = prop;
      prop = null;
    }

    if (prop) {
      return NS.currentDataset.get(prop);
    }
    return NS.currentDataset.get('id');
  });


}(Shareabouts, jQuery, Shareabouts.Util.console));