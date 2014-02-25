define(['./BaseView', 'template'], function(BaseView, Template) {

  return BaseView.extend({

    template: Template['global/mainNav'],

    // el: '',

    events: {
      'click a': 'onclick'
    },

    // initialize: function() {
    //   this.render();

    // },

    // render: function() {
    //   this.$el.append(this.template());
    // },

    onclick: function(evt) {
      evt.preventDefault();
      this.pubSub.trigger("nav:clicked", this.$(evt.target).attr('href'));
    }

  });
});