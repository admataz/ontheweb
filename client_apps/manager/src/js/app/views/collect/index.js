define(['app/config', 'app/views/BaseView', 'underscore', 'jquery', 'template', 'app/collections/collectItemResults', './collectItemsResultsView'], function(config, BaseView, _, $, AppTemplate, CollectItemResults, CollectItemsResultsView) {
  return BaseView.extend({
    template: AppTemplate.collectItems,
    el: '#ontheweb-container',
    collection: new CollectItemResults(),

    initialize: function() {
      // this.render();
      this.listenTo(this.pubSub, 'collectItems:save', _.bind(this.onSaveSelection, this));
    },

    events: {
      'submit #collectForm': 'onFormSubmitted'
    },

    render: function() {
      this.$el.empty();
      this.$el.append(this.template());
      this.resultsView = new CollectItemsResultsView();

    },

    onSaveSelection: function(data) {

      this.collection.setURL(config.api.url + 'webitem');

      var models = _.map(data, _.bind(function(itm) {
        return this.collection.at(itm).save();
      }, this));

    },

    onFormSubmitted: function(evt) {

      var theform = evt.target;
      var arr = $(theform).serializeArray();
      var data = _(arr).reduce(function(acc, field) {
        acc[field.name] = field.value;
        return acc;
      }, {});

      this.current_results = [];
      this.collection.setURL(config.api.url + 'socialmedia?' + $.param(data));
      this.collection.reset();
      this.collection.fetch({
        success: _.bind(function(collection, response, options) {
          this.current_results = response;
          this.resultsView.render({
            items: response
          });
        }, this)
      });

      this.pubSub.trigger("collectForm:submit", data);
      evt.preventDefault();
    }

  });

});