'use strict';

var Admitoneproject = Ember.Application.create();

Admitoneproject.Router.reopen({
  location: 'history'
});

Admitoneproject.ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1'
});

// expose Admitoneproject globally
window.Admitoneproject = Admitoneproject;
