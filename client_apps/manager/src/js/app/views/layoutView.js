define(['./BaseView', 'template', './mainNavView'], function(BaseView, Template, MainNav) {

  return BaseView.extend({
    
    template: Template['global/layout'],

    el: '#ontheweb-adminapp',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.append(this.template());
      new MainNav();
    }
    
  });

});