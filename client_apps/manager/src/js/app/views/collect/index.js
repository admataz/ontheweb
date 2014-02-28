/**
 * Collect items from the web
 *
 * TODO: check for duplicates based on URL - don't save the same item twice - this should be done server side
 * 
 */

define(['app/config', 'app/views/BaseView', 'underscore', 'jquery', 'template', 'app/collections/collectItemResults', './searchResultItem', './searchForm', './resultsForm', 'app/ui/dd' ],
  function(config, BaseView, _, $, Template, CollectItemResults, SearchResultItem, SearchForm, SaveForm) {
    return BaseView.extend({

      template: Template['collect/index'],

      // el: '#ontheweb-container',

      collection: new CollectItemResults(),
      collection_tosave: new CollectItemResults(),

      initialize: function() {
        this.on('afterRender', _.bind(this.onAfterRender, this));
      },

      events: {
        'submit #collectForm': 'onSearchFormSubmitted',
        'submit #resultsForm': 'onSaveFormSubmitted'
      },

      views: {
         '.search-panel': new SearchForm(),
        '.save-panel': new SaveForm()
      },


      /**
       * Layout the drag and drop panels
       */
      setPanelHeights: function() {
        var pheight = ($(window).height() - this.$('.dd-panels').offset().top);
        var theight = Math.max(this.$('.dd-panels').height(), pheight);
        $('.selected-panel, .results-panel').css({
          'min-height': theight + 'px',
        });
      },

      onAfterRender: function(view){

        this.setPanelHeights();


         // set up the drag and drop via jquery UI
        $('.selected-panel').sortable({
          connectWith: '.results-panel',
        });

        $('.results-panel').sortable({
          connectWith: '.selected-panel'
        });
      },



      saveSelection: function(data) {
        var btn = this.$('#save-items-btn');

        btn.button('loading');


        this.collection.setURL(config.api.url + 'webitem');
        
        var models = _.map(data, _.bind(function(itm) {
          return this.collection.get(itm).save();
        }, this));

         btn.button('reset');
      },



      onSaveFormSubmitted: function(evt){


        var selected = ($('.selected-panel .list-group-item'));
        var tosave = _.pluck(selected, function(itm){
          return $(itm).data('itemid');
        });



        evt.preventDefault();
        // console.log(tosave);

        this.saveSelection(tosave);


        // var tosave  = _.map($('input:checked', $(evt.target)), function(itm,i){
        //   return $(itm).attr('value');
        // });
      },



      onSearchFormSubmitted: function(evt) {
        var theform = evt.target;
        var arr = $(theform).serializeArray();
        var data = _(arr).reduce(function(acc, field) {
          acc[field.name] = field.value;
          return acc;
        }, {});

        this.current_results = [];
        this.collection.setURL(config.api.url + 'socialmedia?' + $.param(data));
        this.collection.reset();
        this.$('.results-panel').html('<p>fetching content...</p>');
        this.collection.fetch({
          success: _.bind(this.onCollectionLoaded, this)
        });

        this.pubSub.trigger("collectForm:submit", data);
        evt.preventDefault();
      },

      onCollectionLoaded: function(collection, response, options) {
        this.$('.results-panel').empty();
        collection.each(_.bind(this.addItemView,this));
        this.setPanelHeights();
      },

      addItemView: function(model) {
        var view = this.insertView('.results-panel', new SearchResultItem({
          model: model
        }));
        view.render();
      }

    });

  });