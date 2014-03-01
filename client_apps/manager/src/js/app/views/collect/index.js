/**
 * Collect items from the web
 *
 * TODO: check for duplicates based on URL - don't save the same item twice - this should be done server side
 *
 */

define(['app/config', 'app/views/BaseView', 'underscore', 'jquery', 'template', 'app/collections/collectItemResults',
    './searchResultItem', './searchForm', './resultsForm', 'app/models/itemCollection', 'app/ui/dd'
  ],
  function(config, BaseView, _, $, Template, CollectItemResults, SearchResultItem, SearchForm, SaveForm, ItemCollectionModel) {
    return BaseView.extend({

      template: Template['collect/index'],

      // el: '#ontheweb-container',

      collection: new CollectItemResults(),
      collection_tosave: new CollectItemResults(),

      initialize: function() {
        this.on('afterRender', _.bind(this.onAfterRender, this));
        this.listenTo(this.pubSub, 'collect:save', _.bind(this.onTriggerSave, this));

        
      },

      events: {
        'submit #collectForm': 'onSearchFormSubmitted'
        // ,
        // 'submit #resultsForm': 'onSaveFormSubmitted'
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

      onAfterRender: function(view) {

        this.setPanelHeights();

        // set up the drag and drop via jquery UI
        $('.selected-panel').sortable({
          connectWith: '.results-panel',
        });

        $('.results-panel').sortable({
          connectWith: '.selected-panel'
        });
      },

      saveSelection: function(data, saved_data, cb) {
        var btn = this.$('#save-items-btn');
        if(!saved_data){
          saved_data = [];
        }
        
        if(!data.length){
          btn.button('reset');
          if(cb){
            cb(saved_data);
          }
          return;
        }

        var itm = this.collection.get(data.pop());

        var xhr;
        this.collection.setURL(config.api.url + 'webitem');
        xhr = itm.save();

        xhr.fail(function( jqXHR, textStatus, errorThrown){
          console.log('fail');
          console.log(textStatus);
          console.log(errorThrown);
        });

        
        btn.button('loading');
        xhr.done(_.bind(function(xhrdata, textStatus, jqXHR){
          saved_data.push(xhrdata._id);
          this.saveSelection(data, saved_data, cb);
        }, this));

      },


      onTriggerSave: function(data) {
        var tosave = this.getSelectedItems();

        // ok this is a clever callback, but it smells a little
        // need to let this perculate... we have to get the model ids post save
        // plus some other data in closure - a callback makes sense - I think?
        var cb = function(related_items){
          if (data.saveTo === 'new') {
            var itemCollection = new ItemCollectionModel({
              title: data.collectionName,
              items: related_items
            });
            itemCollection.save().done(_.bind(this.onItemCollectionSaved,this));
          }
        };

        this.saveSelection(tosave, [], _.bind(cb, this));
      },

      onItemCollectionSaved: function(xhrdata, textStatus, jqXHR){
        console.log(xhrdata);
        // alert('item collection saved');
      },

      getSelectedItems: function() {
        var selected = ($('.selected-panel .list-group-item'));
        var tosave = _.pluck(selected, function(itm) {
          return $(itm).data('itemid');
        });

        return tosave;

      },

      onSaveFormSubmitted: function(evt) {

        evt.preventDefault();
        this.saveSelection(tosave);
      },

      onSearchFormSubmitted: function(evt) {

        var data = this.formToData(evt.target);

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
        collection.each(_.bind(this.addItemView, this));
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