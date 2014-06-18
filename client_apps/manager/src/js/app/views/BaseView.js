define(['backbone', 'underscore', 'app/events', 'layoutmanager', 'jquery'], function(Backbone, _, Events, LayoutManager, $) {

  return Backbone.View.extend({
    
    manage: true,
    
    constructor: function() {
      if (arguments.length) {
        this.pubSub = arguments[0].pubSub || Events;
      } else {
        this.pubSub = Events;
      }
      Backbone.View.apply(this, arguments);
    },


    formToData: function(formObj) {
      var arr = $(formObj).serializeArray();
      var data = _(arr).reduce(function(acc, field) {
        acc[field.name] = field.value;
        return acc;
      }, {});
      return data;
    }
  });

});