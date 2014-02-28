define(['./BaseView', 'template', './mainNavView'], function(BaseView, Template, MainNav) {

  return BaseView.extend({
    
    template: Template['global/layout'],

    el: '#ontheweb-adminapp',

    initialize: function() {
      this.on('afterRender', this.onAfterRender);
    },


    
    views: {
      '#mainNav' : new MainNav()
    },


    onAfterRender: function(view){
      

      
    }
    
  });

});