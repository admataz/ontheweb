define(['./BaseView', 'underscore', 'jquery', 'template', '../collections/collectItemResults', './collectItemsResultsView'], function(BaseView, _, $, AppTemplate, CollectItemResults, CollectItemsResultsView) {
  return BaseView.extend({
    template: AppTemplate.collectItems,
    el: '#ontheweb-container',
    collection: new CollectItemResults(),

    initialize: function() {
      // this.render();
    },

    events: {
      'submit #collectForm': 'onFormSubmitted'
    },

    render: function() {
      this.$el.empty();
      this.$el.append(this.template());
      this.resultsView = new CollectItemsResultsView();

    },

    onFormSubmitted: function(evt) {

      var theform = evt.target;
      var arr = $(theform).serializeArray();
      var data = _(arr).reduce(function(acc, field) {
        acc[field.name] = field.value;
        return acc;
      }, {});
      // TODO: make this externally configurable 
      this.collection.setURL('http://localhost:8001/socialmedia?'+$.param(data));
      this.collection.reset();
      this.collection.fetch({
        success: _.bind(function(collection, response, options){
          this.resultsView.render({items:response});
        },this)
      });
      this.pubSub.trigger("collectForm:submit", data);
      evt.preventDefault();
    }

  });

});