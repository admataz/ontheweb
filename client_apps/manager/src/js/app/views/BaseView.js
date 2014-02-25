

define(['backbone', 'underscore', 'app/events', 'layoutmanager'], function(Backbone, _, Events, LayoutManager){




  return Backbone.View.extend({
    manage:true,
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