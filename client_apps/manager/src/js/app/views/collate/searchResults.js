define(['app/views/BaseView', 'template', './searchResultItem', 'underscore', 'jquery','bootstrap'], function(BaseView, Template, SearchResultItem, _, $) {

  return BaseView.extend({
    el: '#collate-items .results-panel',
    template: Template['collate/searchResults'],

    initialize: function() {

    },

    render: function(data) {
      var items = [];
      var output = '';
      var itemObj = new SearchResultItem();

      items = _.map(data, function(item){
        return  itemObj.render(item);
      });


      this.$el.empty();

      output= this.template({items:items});
      console.log(items);

      this.$el.append(output);
    },

  });

});