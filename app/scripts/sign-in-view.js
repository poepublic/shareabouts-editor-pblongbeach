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

      self.$('.error').remove();
      self.$('.sign-in-button').attr('disabled', 'disabled');

      NS.auth.requestNewUserSession(username, password, {
        success: function() {
          // Run the redirect callback
          self.redirect();
        },
        error: function($xhr) {
          if ($xhr.status === 400 || $xhr.status === 401) {
            var data = $xhr.responseJSON;
            if (data.errors['__all__']) {
              self.$('.sign-in-form').prepend('<small class="error">Incorrect username or password.</small>');
            } else if (data.errors['username']) {
              self.$('#username').after('<small class="error">You must enter a username.</small>');
            } else if (data.errors['password']) {
              self.$('#password').after('<small class="error">You must enter a password.</small>');
            }
          }
        },
        complete: function() {
          self.$('.sign-in-button').removeAttr('disabled');
        }
      });
    }
  });

}(Shareabouts, jQuery, Shareabouts.Util.console));