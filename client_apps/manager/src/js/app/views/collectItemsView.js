define(['./BaseView', 'template', 'underscore', 'jquery'], function(BaseView, AppTemplate, _, $) {
  return BaseView.extend({
    template: AppTemplate.collectItems,
    el: '#ontheweb-container',

    initialize: function() {
      // this.render();
    },

    events: {
      'submit #collectForm': 'onFormSubmitted'
    },

    render: function() {
      this.$el.empty();
      this.$el.append(this.template());
    },

    onFormSubmitted: function(evt) {
      var theform = evt.target;
      var arr = $(theform).serializeArray();
      
      var data = _(arr).reduce(function(acc, field) {
        acc[field.name] = field.value;
        return acc;
      }, {});
        


      console.log($.param(data));
      evt.preventDefault();

      this.pubSub.trigger("collectForm:submit", data);
    }

  });

});