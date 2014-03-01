/**
 *
 */

define(['app/config','backbone', 'underscore'], function(config, Backbone, _) {

  return Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: config.api.url+'webitem',
    initialize: function() {
      
      // Backbone.Model.prototype.initialize.apply(this, arguments);
      // this.on("change", function(model, options) {
      //   if (options && options.save === false) {
      //     return;
      //   }
      //   model.save();
      // });
      
    }
  });

});