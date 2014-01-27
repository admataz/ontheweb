/**
 * Ember.js application for managing Web Items
 */
window.Webitemsapp = Ember.Application.create();


Webitemsapp.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8001'
});

Webitemsapp.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id'
});
