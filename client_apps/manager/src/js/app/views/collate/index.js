/**
 * List, load and view existing ItemCollections
 * 
 * TODO: select from a list of existing ItemCollections
 * TODO: add metadata and comments to an ItemCollection
 * TODO: provide a status for published/unpublished to an ItemCollection
 * TODO: output the public URL 
 *  * 
 */


define(['app/config', 'app/views/BaseView', 'app/collections/webItems', 'app/collections/collectItemResults', '../collect/searchResultItem', 'app/models/webItem', 'app/models/itemCollection', 
  'app/collections/itemCollections', './collectionItem', 'template', 'underscore', 'jquery', 'app/ui/dd'],
  function(config, BaseView, WebItems, CollectItemResults, SearchResultItem, WebItemModel, ItemCollectionModel, ItemCollectionCollection, CollectionItemView, Template, _, $) {

    return BaseView.extend({
      template: Template['collate/index'],

      itemCollection_collection: new ItemCollectionCollection(),
      collection_selected: new CollectItemResults(),


      /**
       * Initialize
       */
      initialize: function() {
        this.on('afterRender', _.bind(this.onAfterRender, this));

        this.listenTo(this.pubSub, 'collectionItem:clicked', this.onCollectionClicked);
      },


      /**
       * DOM events
       */
      events: {
      
      },


      /**
       * Layout Manager sub-views
       */
      views: {
      
      },


      /**
       * Layout the drag and drop panels
       */
      setPanelHeights: function() {
        var pheight = ($(window).height() - this.$('.dd-panels').offset().top);
        var theight = Math.max(this.$('.dd-panels').height(), pheight);
        $('.items-panel, .collections-panel').css({
          'min-height': theight + 'px',
        });
      },


      /**
       * Set up some interface stuff once the view is ready
       */
      onAfterRender: function() {
        this.setPanelHeights();
        this.loadCollections();
        // set up the drag and drop via jquery UI
        $('.items-panel').sortable();
      },

      loadCollections: function(){
        this.itemCollection_collection.fetch({
          success: _.bind(this.onItemCollectionsFetched, this)
        });
      },

      onCollectionClicked: function(id){
        this.loadItemCollection(id);
      },

      onItemCollectionsFetched: function(collection, response, options) {
        collection.each(_.bind(this.addCollectionItemView, this));
        this.setPanelHeights();
      },

      addCollectionItemView: function(model, i){
        var view = this.insertView('.collections-panel', new CollectionItemView({
          model: model,
          el: false
        }));
        view.render();
      },

      onSaveFormSubmitted: function(evt){
        evt.preventDefault();
      },


      /**
       * we have the results! - display them and set some DOM values
       */
      onSearchResultsLoaded: function(collection, response, options) {
      },

      loadItemCollection: function(id) {
        var c, items;
        var app = this;

        this.onItemCollectionEmpty();

        if (id === 'new') {
          return;
        }


        c = this.itemCollection_collection.get(id);
        c.fetch().done(function() {
          items = c.get('items');
          _.each(items, _.bind(function(itm) {
            app.addItemView2(new WebItemModel(itm));
          }, app));
        });

      },

       // Add item to the DOM RHC (select items into collection)
      addItemView2: function(model) {
        if (this.collection_selected.get(model.id)) {
          return;
        }
        this.collection_selected.add(model);
        var view = this.insertView('.items-panel', new SearchResultItem({
          model: model,
          el: false
        }));
        view.render();
      },

      /**
       * Render individual elements to the DOM
       * TODO: decouple this from the specific panel so we can reuse it in the loading of the saved collection items
       */
      addResultItem: function(model) {
      },

      // Empty the collection
      onItemCollectionEmpty: function() {
        this.collection_selected.reset();
        this.$('.items-panel').empty();
      },

    });

  });