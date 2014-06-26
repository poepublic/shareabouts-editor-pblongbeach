/*global jQuery, Backbone */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.PlaceListItemView = Backbone.Marionette.ItemView.extend({
    className: 'panel radius',
    template: NS.Templates['place-list-item']
  });

  NS.PlaceListView = Backbone.Marionette.CompositeView.extend({
    template: NS.Templates['place-list'],
    itemView: NS.PlaceListItemView,
    itemViewContainer: '.place-items'
  });

}(Shareabouts, jQuery, Shareabouts.Util.console));