/**
 * 
 */

define(['backbone','underscore'], function(Backbone, _){

  return Backbone.Model.extend({
    idAttribute: '_id',
    initialize: function () {
      Backbone.Model.prototype.initialize.apply(this, arguments);
      this.on("change", function (model, options) {
      if (options && options.save === false) return;
        model.save();
      });
    }
  });

});