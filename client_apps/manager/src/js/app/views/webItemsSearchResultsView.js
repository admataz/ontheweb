define(['./BaseView', 'template'], function(BaseView, Template){


  return BaseView.extend({
    el: '#collate-items .results-panel',
    template: Template.collectItemsResults,

    initialize: function(){

    },

    render: function(data){
      this.$el.empty();
      this.$el.append(this.template(data));
    },

  });


});