define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';
  var events = {};
  _.extend(events, Backbone.Events);
  return events;
});