define(['app/config', 'app/views/BaseView', 'app/collections/webItems', './searchResultItem', 'template', 'underscore', 'jquery'], function(config, BaseView, WebItems, SearchResultsItem, Template, _, $) {

  return BaseView.extend({
    template: Template['collate/index'],
    collection: new WebItems(),

    initialize: function() {
      this.added_items = [];
      this.listenTo(this.pubSub, 'webitem:selected', _.bind(this.onItemSelected, this));
    },

    events: {
      'submit #searchItems': 'onFormSubmitted'
    },

    onFormSubmitted: function(evt) {
      var theform = evt.target;
      var arr = $(theform).serializeArray();
      var data = _(arr).reduce(function(acc, field) {
        acc[field.name] = field.value;
        return acc;
      }, {});
      data.page = 1;
      data.per_page = 100;
      // TODO: add the platform filters to the query on the server (and here)
      this.current_results = [];
      this.collection.reset();
      this.$('.results-panel').empty();
      this.collection.fetch({
        data: {
          q: data.q
        },
        success: _.bind(this.onCollectionLoaded, this)
      });
      this.pubSub.trigger("seachForm:submit", data);
      evt.preventDefault();
    },

    onCollectionLoaded: function(collection, response, options) {
      collection.each(_.bind(this.addItemView,this));
    },

    onItemSelected: function(id) {
      console.log(this.collection.at(id));
    },


    addItemView: function(model){
      var view = this.insertView('.results-panel', new SearchResultsItem({model:model}));
      view.render();
    }

  });

});