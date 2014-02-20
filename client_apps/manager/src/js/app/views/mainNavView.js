define(['./BaseView', 'template', 'app/events'],function(BaseView, AppTemplate, Events){

  return BaseView.extend({
    template: AppTemplate.mainNav,
    el: '#mainNav',
    events: {
      'click a': 'onclick'
    },
    initialize: function(){
      this.render();

    },
    render: function(){
      this.$el.append(this.template());
    },
    onclick: function(evt){
      evt.preventDefault();
      this.pubSub.trigger("nav:clicked", this.$(evt.target).attr('href'));
    }


  });
});