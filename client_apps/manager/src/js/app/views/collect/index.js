/**
 * Collect items from the web
 *
 * TODO: check for duplicates based on URL - don't save the same item twice - this should be done server side
 *
 */

define(['app/config', 'app/views/BaseView', 'underscore', 'jquery', 'template', 'app/collections/collectItemResults',
    './searchResultItem', './searchForm', './resultsForm', 'app/models/itemCollection', 'app/collections/itemCollections',
    'app/models/webItem', 'app/ui/bootbox', 'app/ui/dd'
  ],
  function(config, BaseView, _, $, Template, CollectItemResults, SearchResultItem, SearchForm, SaveForm, ItemCollectionModel,
    ItemCollectionCollection, WebItemModel, bootbox) {
    return BaseView.extend({

      template: Template['collect/index'],

      // el: '#ontheweb-container',

      collection: new CollectItemResults(),
      collection_selected: new CollectItemResults(),
      itemCollection_collection: new ItemCollectionCollection(),
      saveForm: false,

      initialize: function() {
        this.on('afterRender', _.bind(this.onAfterRender, this));
        this.listenTo(this.pubSub, 'collect:save', _.bind(this.onTriggerSave, this));
        this.listenTo(this.pubSub, 'webitem:deleted', _.bind(this.onWebItemDeleted, this));
        this.listenTo(this.pubSub, 'itemCollection:selected', _.bind(this.onItemCollectionSelected, this));
        this.listenTo(this.pubSub, 'itemCollection:empty', _.bind(this.onItemCollectionEmpty, this));

      },

      events: {
        'submit #collectForm': 'onSearchFormSubmitted'
      },

      views: {
        '.search-panel': new SearchForm()
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
        if (!this.saveForm) {
          this.itemCollection_collection.fetch({
            success: _.bind(this.onItemCollectionsFetched, this)
          });
        }

        // set up the drag and drop via jquery UI
        $('.selected-panel').sortable({
          connectWith: '.results-panel',
          receive: _.bind(this.onItemDropSelected, this)
        });

        $('.results-panel').sortable({
          connectWith: '.selected-panel',
          receive: _.bind(this.onItemDropDeselected, this)

        });
      },

      onItemCollectionsFetched: function(collection, response, options) {
        this.saveForm = this.insertView('.save-panel', new SaveForm({
          collection: collection
        }));

        this.saveForm.render();

      },

      onItemCollectionSelected: function(id) {
        if (!id) {
          return;
        }

         this.$('.selected-panel .status-message').remove();
       

        if (this.collection_selected.length) {

          var app = this;

          bootbox.dialog({
            message: "What do you want to do with selected items",
            title: "Please confim",

            buttons: {
              danger: {
                label: "Empty selection",
                className: "btn-danger",
                callback: _.bind(function() {
                  app.onItemCollectionEmpty();
                  app.loadItemCollection(id);
                }, app)
              },
              main: {
                label: "Merge with existing",
                className: "btn-primary",
                callback: _.bind(function() {
                  app.loadItemCollection(id);
                }, app)
              }
            }
          });

        } else {
          this.loadItemCollection(id);
        }

      },

      loadItemCollection: function(id) {
        var c, items;
        var app = this;

        if(id==='new'){
          return;
        }



        c = this.itemCollection_collection.get(id);
        c.fetch().done(function(){
          items = c.get('items');
          _.each(items, _.bind(function(itm) {
            app.addItemView2(new WebItemModel(itm));
          }, app));
        });


        
      },



      onItemDropSelected: function(evt, ui) {
        var model = this.collection.get($(ui.item).data('itemid'));
        this.collection_selected.add(model);
        model.save();
        $(ui.item).removeClass('list-group-item-success');

      },

      onItemDropDeselected: function(evt, ui) {
        var model = this.collection.get($(ui.item).data('itemid'));
        // console.log(model);
        $(ui.item).addClass('list-group-item-success');
        $('.save-btn', ui.item).text('Delete');
      },

      onWebItemDeleted: function(model) {
        this.collection.add(model);
      },

      onTriggerSave: function(data) {
        console.log(data);
        var items_tosave = this.getSelectedItems();
        var itemCollection;
        this.$('.selected-panel .status-message').remove();
        if (data.saveTo === '') {
          itemCollection = this.itemCollection_collection.add({
            title: data.saveToNewName,
            items: items_tosave
          });
        } else {
          itemCollection = this.itemCollection_collection.get(data.saveTo);
          itemCollection.set({
            items: items_tosave
          });
        }


        itemCollection.save().done(_.bind(this.onItemCollectionSaved, this));
      },

      onItemCollectionSaved: function(xhrdata, textStatus, jqXHR) {
        var confirm = $('<div class="alert alert-success status-message">Item Collection Saved</div>');
        // confirm.alert
        this.$('.selected-panel').prepend(confirm);
      },

      onItemCollectionEmpty: function() {
        this.collection_selected.reset();
        this.$('.selected-panel').empty();
      },

      /**
       * Get the model IDs
       * we don't have the model - because this state is stored in the DOM - but we do have the view CID stored as a data attribute
       *
       */
      getSelectedItems: function() {
        var selected = ($('.selected-panel .list-group-item'));
        var tosave = _.pluck(selected, _.bind(function(itm) {
          var cid = $(itm).data('itemid');
          var model = this.collection_selected.get(cid);
          return model.id;
        }, this));
        return tosave;
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
          model: model,
          el: false
        }));
        view.render();
      },

      addItemView2: function(model) {
        if(this.collection_selected.get(model.id)){
          return;
        }
        this.collection_selected.add(model);
        var view = this.insertView('.selected-panel', new SearchResultItem({
          model: model,
          el: false
        }));
        view.render();
      }
    });

  });