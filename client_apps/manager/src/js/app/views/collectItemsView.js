define(['backbone', 'template', 'app/events'],function(Backbone, AppTemplate, Events){
  return Backbone.View.extend({
    template: AppTemplate.social_media_collect,
    el: '#ontheweb-container',
    
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.replaceWith(this.template());
    },
   


  });


});