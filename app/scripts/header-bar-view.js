/*global jQuery, Backbone, _ */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.HeaderBarView = NS.TemplateView.extend({
    template: NS.Templates['header-bar'],

    events: {
      'click .sign-out-link': 'onSignOutClick'
    },

    serializeData: function() {
      return {user: NS.auth.getUserSession()};
    },

    onRender: function() {
      var self = this;
      $(NS.auth).on('authsuccess', function(evt, data) {
        self.$('.sign-out-link').toggleClass('hide-for-small-up', !data);
      });
    },

    onSignOutClick: function(evt) {
      evt.preventDefault();

      NS.auth.requestNewUserSession({
        success: function() {
          window.location.reload();
        },
        error: function() {
          window.alert('There was an error logging out.\n\n' +
                       'This is probably a temporary problem.\n' +
                       'Please try again in a moment.');
        }
      });
    }
  });

}(Shareabouts, jQuery, Shareabouts.Util.console));