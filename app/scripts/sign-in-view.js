/*global jQuery, Backbone, _ */

var Shareabouts = Shareabouts || {};

(function(NS, $, console){
  'use strict';

  NS.SignInView = NS.TemplateView.extend({
    template: NS.Templates['sign-in'],

    events: {
      'submit .sign-in-form': 'onSignInFormSubmit'
    },

    initialize: function(options) {
      options = options || {};

      if (!options.redirect || !_.isFunction(options.redirect)) {
        console.error('You must supply a redirect function to the sign in view.');
      }

      this.redirect = options.redirect;
    },

    onSignInFormSubmit: function(evt) {
      evt.preventDefault();

      var self = this,
          username = this.$('#username').val(),
          password = this.$('#password').val();

      NS.auth.requestNewUserSession(username, password, {
        success: function() {
          // Run the redirect callback
          self.redirect();
        }
      });

    }
  });

}(Shareabouts, jQuery, Shareabouts.Util.console));