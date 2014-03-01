define(['backbone', './events'], function(Backbone, Events) {
 

  var AppRouter =  Backbone.Router.extend({
    
    initialize: function(){
      
    },

    routes: {
      '': 'index',
      'collect(/)': 'collect',
      'collate': 'collate',
      'webitems': 'webitems'
    },

    index: function() {
      Events.trigger('nav:loaded','index')
    },

    collect: function(){
      Events.trigger('nav:loaded','collect')      
    },

    webitems: function(){
      Events.trigger('nav:loaded','webitems')
    },

    collate: function(){
      Events.trigger('nav:loaded','collate')

    }

  });


  return AppRouter;

  
});