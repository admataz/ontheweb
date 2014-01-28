/**
 * Router for WebItems ember.js app
 */

Webitemsapp.Router.reopen({
  rootURL: '/admin/'
});


Webitemsapp.Router.map(function(){
  this.resource('webitems');
  this.resource('webitem', {path:'webitem/:_id'});

})


Webitemsapp.WebitemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('webitem');
  }
})

Webitemsapp.WebitemRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('webitem', params._id);
  }
})