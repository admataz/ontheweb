/**
 * Router for WebItems ember.js app
 */

Webitemsapp.Router.reopen({
  rootURL: '/manager/'
});

Webitemsapp.Router.map(function(){
  this.resource('webitem',{path: '/'});

})

Webitemsapp.WebitemRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('webitem');
  }
})

// WebItems.WebitemsRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('webitems');
//   }
// });