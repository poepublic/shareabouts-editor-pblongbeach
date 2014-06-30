/*global jQuery, Backbone, _ */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.TemplateView = Backbone.Marionette.View.extend({
    serializeData: function() {
      return {};
    },

    render: function() {
      this.isClosed = false;

      this.triggerMethod('before:render', this);

      var data = this.serializeData();
      data = this.mixinTemplateHelpers(data);

      var template = this.getTemplate();
      var html = Backbone.Marionette.Renderer.render(template, data);

      this.$el.html(html);
      this.bindUIElements();

      this.triggerMethod('render', this);

      return this;
    }
  });

}(Shareabouts, jQuery, Shareabouts.Util.console));