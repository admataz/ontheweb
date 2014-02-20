

define(['backbone', 'underscore', '../events'], function(Backbone, _, Events){

  return Backbone.View.extend({
    constructor: function() {
      Backbone.View.apply(this,arguments);
      if(arguments.length){
        this.pubSub = arguments[0].pubSub || Events;
      } else {
        this.pubSub = Events;
      }
    }
  });


});