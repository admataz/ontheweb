define(['backbone', 'template', './mainNavView', 'underscore'], function(Backbone, AppTemplate, MainNav, _) {

  return Backbone.View.extend({

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