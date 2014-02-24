define(['app/config', './BaseView', '../collections/webItems', './webItemsSearchResultsView', 'template', 'underscore', 'jquery'], function(config, BaseView, WebItems, WebItemsSearchResultsView, Template, _, $){

  return BaseView.extend({

    template: Template.collateItems,
    el: '#ontheweb-container',

    collection: new WebItems(),

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

      this.resultsView = new WebItemsSearchResultsView();
      
    },

    onFormSubmitted: function(evt){

      evt.preventDefault();

     var theform = evt.target;
      var arr = $(theform).serializeArray();
      var data = _(arr).reduce(function(acc, field) {
        acc[field.name] = field.value;
        return acc;
      }, {});
      console.log(data);
// q=thatha&page=1&per_page=30&total_pages=1&total_entries=29
      data.page=1;
      data.per_page=10;
      this.current_results = [];
      // this.collection.setURL( config.api.url+'webitem?'+$.param(data));
      this.collection.reset();
      this.collection.fetch({
        data: {q:data.q},
        success: _.bind(function(collection, response, options){
          this.current_results = response;
          this.resultsView.render({items:response.webitem});
        },this)
      });


      this.pubSub.trigger("seachForm:submit", data);

      // this.resultsView.render({items:response});

    }









  });

});