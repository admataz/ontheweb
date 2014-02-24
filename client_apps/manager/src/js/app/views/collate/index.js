define(['app/config', 'app/views/BaseView', 'app/collections/webItems', './webItemsSearchResultsView', 'template', 'underscore', 'jquery'], function(config, BaseView, WebItems, WebItemsSearchResultsView, Template, _, $) {

  return BaseView.extend({

    template: Template.collateItems,
    el: '#ontheweb-container',

    collection: new WebItems(),

    initialize: function() {
      this.added_items = [];
      this.render();
      this.listenTo(this.pubSub, 'webitem:selected', _.bind(this.onItemSelected, this));
    },

    events: {
      'submit #searchItems': 'onFormSubmitted'
    },

    render: function() {
      this.$el.empty();
      this.$el.append(this.template());

      this.resultsView = new WebItemsSearchResultsView();

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
      this.collection.fetch({
        data: {
          q: data.q
        },
        success: _.bind(function(collection, response, options) {
          this.current_results = response;
          this.resultsView.render({
            items: response.webitem
          });
        }, this)
      });
      this.pubSub.trigger("seachForm:submit", data);
      evt.preventDefault();
    },

    onItemSelected: function(id) {
      console.log(this.collection.at(id));
    }

  });

});