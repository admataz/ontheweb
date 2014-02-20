define(['./BaseView', 'underscore', 'jquery', 'template'], function(BaseView, _, $, AppTemplate) {


  return BaseView.extend({
    template: AppTemplate.collectItemsResults,
    el: '#collect-items-results',

    render: function(data){
      this.$el.empty();
      this.$el.append(this.template(data));
    }

  });

});