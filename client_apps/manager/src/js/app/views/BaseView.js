

define(['backbone', 'underscore', '../events'], function(Backbone, _, Events){

  return Backbone.View.extend({
    constructor: function() {
      if(arguments.length){
        this.pubSub = arguments[0].pubSub || Events;
      } else {
        this.pubSub = Events;
      }
      Backbone.View.apply(this,arguments);
    }
  });


});