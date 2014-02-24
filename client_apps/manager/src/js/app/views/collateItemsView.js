define(['./BaseView', 'template'], function(BaseView, Template){

  return BaseView.extend({

    template: Template.collateItems,
    el: '#ontheweb-container',

    initialize: function() {
      this.render();
      // this.listenTo(this.pubSub,'collectItems:save',_.bind(this.onSaveSelection,this));
    },
    
    events: {
      'submit #searchItems': 'onFormSubmitted'
    },

    render: function() {
      this.$el.empty();
      this.$el.append(this.template());
      
    },

    onFormSubmitted: function(evt){

      evt.preventDefault();

    }









  });

});