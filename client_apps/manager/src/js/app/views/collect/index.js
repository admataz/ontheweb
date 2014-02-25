define(['app/config', 'app/views/BaseView', 'underscore', 'jquery', 'template', 'app/collections/collectItemResults', './searchResultItem'],
  function(config, BaseView, _, $, Template, CollectItemResults, SearchResultItem) {
    return BaseView.extend({

      template: Template['collect/index'],

      // el: '#ontheweb-container',

      collection: new CollectItemResults(),

      initialize: function() {
        // this.listenTo(this.pubSub, 'collectItems:save', _.bind(this.onSaveSelection, this));
        this.on('afterRender', function(view){
            $('#resultsForm').hide();
        });
      },



      events: {
        'submit #collectForm': 'onSearchFormSubmitted',
        'submit #resultsForm': 'onSaveFormSubmitted'
      },

      saveSelection: function(data) {
        this.collection.setURL(config.api.url + 'webitem');
        
        
        var models = _.map(data, _.bind(function(itm) {
          return this.collection.get(itm).save();
        }, this));
        console.log(models);
      },

      onSaveFormSubmitted: function(evt){
        var tosave  = _.map($('input:checked', $(evt.target)), function(itm,i){
          return $(itm).attr('value');
        });
        this.saveSelection(tosave);
        evt.preventDefault();
      },

      onSearchFormSubmitted: function(evt) {
        var theform = evt.target;
        var arr = $(theform).serializeArray();
        var data = _(arr).reduce(function(acc, field) {
          acc[field.name] = field.value;
          return acc;
        }, {});

        this.current_results = [];
        $('#collect-items-results').empty();
        this.collection.setURL(config.api.url + 'socialmedia?' + $.param(data));
        this.collection.reset();
        this.collection.fetch({
          success: _.bind(this.onCollectionLoaded, this)
        });

        this.pubSub.trigger("collectForm:submit", data);
        evt.preventDefault();
      },

      onCollectionLoaded: function(collection, response, options) {
        this.$('#resultsForm').show();
        collection.each(_.bind(this.addItemView,this));
      },

      addItemView: function(model) {
        console.log(model);
        var view = this.insertView('#collect-items-results', new SearchResultItem({
          model: model
        }));
        view.render();
      }

    });

  });