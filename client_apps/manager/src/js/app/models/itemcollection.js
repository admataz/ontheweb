/**
 *
 */
define(['app/config','backbone', 'underscore'], function(config, Backbone, _) {

  return Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: config.api.url+'itemcollection',
    initialize: function() {
      
   
      
    }
  });

});