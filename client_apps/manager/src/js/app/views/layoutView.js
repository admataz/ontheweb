define(['./BaseView', 'template', './mainNavView', 'underscore'], function(BaseView, AppTemplate, MainNav, _) {

  return BaseView.extend({

    template: AppTemplate.layout,

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