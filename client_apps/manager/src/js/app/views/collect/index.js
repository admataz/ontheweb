/**
 * Collect items from the web
 *
 * TODO: check for duplicates based on URL - don't save the same item twice - this should be done server side
 *
 */

define(['app/config', 'app/views/BaseView', 'underscore', 'jquery', 'template', 'app/collections/collectItemResults',
    './searchResultItem', './searchResultFacebookPage', './searchResultGoogleplusPeople', './searchForm', './resultsForm', 
    'app/models/itemCollection', 'app/collections/itemCollections',
    'app/models/webItem', 'app/ui/bootbox', 'app/ui/dd'
  ],
  function(config, BaseView, _, $, Template, CollectItemResults, SearchResultItem, SearchResultFacebookPage, SearchResultGoogleplusPeople, SearchForm, SaveForm, ItemCollectionModel,
    ItemCollectionCollection, WebItemModel, bootbox) {

    return BaseView.extend({
      template: Template['collect/index'],
      collection: new CollectItemResults(),
      collection_selected: new CollectItemResults(),
      itemCollection_collection: new ItemCollectionCollection(),
      saveForm: false,
      searchParams: null,

      initialize: function() {
        this.on('afterRender', _.bind(this.onAfterRender, this));
        this.listenTo(this.pubSub, 'collect:save', _.bind(this.onTriggerSave, this));
        this.listenTo(this.pubSub, 'webitem:deleted', _.bind(this.onWebItemDeleted, this));
        this.listenTo(this.pubSub, 'itemCollection:selected', _.bind(this.onItemCollectionSelected, this));
        this.listenTo(this.pubSub, 'itemCollection:empty', _.bind(this.onItemCollectionEmpty, this));
        this.listenTo(this.pubSub, 'advancedSearch:submitted', _.bind(this.onAdvancedSearchSubmitted, this));
        this.listenTo(this.pubSub, 'facebookPage:loadPosts', _.bind(this.onLoadFacebookPagePosts, this));
        this.listenTo(this.pubSub, 'facebookPage:loadFeed', _.bind(this.onLoadFacebookPageFeed, this));
        this.listenTo(this.pubSub, 'googleplusPeople:loadPosts', _.bind(this.onLoadGoogleplusPeoplePosts, this));
        this.listenTo(this.pubSub, 'resultItem:showReplies', _.bind(this.onShowReplies, this));

        // doing this explicitly here - as a poperty, views are not always inserted it seems
        this.searchForm = new SearchForm();
        this.insertView('.search-panel', this.searchForm);

      },

      events: {
        'submit #collectForm': 'onSearchFormSubmitted',
        'submit #alreadySavedForm': 'onAlreadysavedFormSubmitted'
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

      /**
       * Do stuff once the view has rendered (i.e. you now have access to the DOM)
       */
      onAfterRender: function(view) {
        this.setPanelHeights();

        // no save form has been added to the view - get the data required for the item selector and generate the form
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

      // collections have been loaded for the select element in the save form = can now render the save form
      onItemCollectionsFetched: function(collection, response, options) {
        this.saveForm = this.insertView('.save-panel', new SaveForm({
          collection: collection
        }));
        this.saveForm.render();
      },

      // event handler for when the user selects a new option in the Collection selector on the save form
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

      // Load an item collection's web items and attach them to the right hand column
      loadItemCollection: function(id) {
        var c, items;
        var app = this;
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

      // User has dragged-and-dropped an item on the RHC to selected 
      onItemDropSelected: function(evt, ui) {
        var model = this.collection.get($(ui.item).data('itemid'));
        this.collection_selected.add(model);
        model.save();
        $(ui.item).removeClass('list-group-item-success');
      },

      // User has dragged-and-dropped an item on the LHC to deselected 
      onItemDropDeselected: function(evt, ui) {
        var model = this.collection.get($(ui.item).data('itemid'));
        // console.log(model);
        $(ui.item).addClass('list-group-item-success');
        $('.save-btn', ui.item).text('Delete');
      },

      // Event handler for when an item has been deleted (user unselects by clicking the star)
      onWebItemDeleted: function(model) {
        this.collection.add(model);
      },

      // Save the current selection to a new or existing Item Collection
      onTriggerSave: function(data) {
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

      // Saving is complete
      onItemCollectionSaved: function(xhrdata, textStatus, jqXHR) {
        var confirm = $('<div class="alert alert-success status-message">Item Collection Saved</div>');
        // confirm.alert
        this.$('.selected-panel').prepend(confirm);
      },

      // Empty the collection
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

      onAlreadysavedFormSubmitted: function(evt){
        var data = this.formToData(evt.target);
        this.searchParams = data;
        evt.preventDefault();

        data.platform = 'alreadySaved';
        this.collection.setURL(config.api.url + 'webitem?' + $.param(data));
        this.collection.reset();
        this.$('.results-panel').html('<p>fetching content...</p>');
        this.collection.fetch({
          success: _.bind(this.onCollectionLoaded, this)
        });

      },

      // Take the user input and start searching the selected platform
      onSearchFormSubmitted: function(evt) {
        var data = this.formToData(evt.target);
        this.doPlatformSearch(data);
        this.pubSub.trigger("collectForm:submit", data);
        evt.preventDefault();
      },


      onAdvancedSearchSubmitted: function(advanced_data){
        // var normaldata = this.formToData(this.searchForm.$('form'));
        var data = {};//_.merge(normaldata, advanced_data);
        var q = this.searchForm.$('#collectForm input[name=q]');
        q.attr('value',advanced_data.q);
        data.platform = 'twitter';
        data.channel = 'search';
        data.q = advanced_data.q;
        this.doPlatformSearch(data);
      },

      doPlatformSearch: function(data, cb) {
        if(!cb){
          cb = this.onCollectionLoaded;
        }
        this.searchParams = data;
        this.collection.setURL(config.api.url + 'socialmedia?' + $.param(data));
        this.collection.reset();
        this.$('.results-panel').html('<p>fetching content...</p>');
        this.collection.fetch({
          success: _.bind(cb, this)
        });
      },

      // Search data has loaded - show it in the view
      onCollectionLoaded: function(collection, response, options) {
        this.$('.results-panel').empty();
        collection.each(_.bind(this.addItemView, this));
        this.setPanelHeights();
      },



      onLoadFacebookPagePosts: function(id){
        this.doPlatformSearch({
          'platform': 'facebook',
          'channel': 'pageposts',
          'pageid': id
        });

      },
      onLoadFacebookPageFeed: function(id){
        this.doPlatformSearch({
          'platform': 'facebook',
          'channel': 'pagefeed',
          'pageid': id
        });

      },

      onLoadGoogleplusPeoplePosts: function(id){
        this.doPlatformSearch({
          'platform': 'googleplus',
          'channel': 'user',
          'q': id
        });

      },


      onShowReplies: function(initialItem){
        var replies = initialItem.model.get('replies'); 
        var insertReplies = function(replies){
          var rs = this.collection.add(replies);
          _.each(rs, function(itm){
            this.addItemReplyView(initialItem.$el, itm);
          }, this);
        };
        var searchparams;
        if(!replies){
          searchparams = $.param({
            'platform': 'googleplus',
            'channel': 'activity-comments',
            'q': initialItem.model.get('sourceId')
          });
          $.getJSON(config.api.url + 'socialmedia?' + searchparams, _.bind(function(data, textStatus, jqXHR){
            _.bind(insertReplies,this)(data);
          }, this));
          return;
        }
        _.bind(insertReplies,this)(replies);
      },


      addItemReplyView: function(container, model) {
        var ItemView = SearchResultItem;
        var view = new ItemView({
          model: model,
          el: false,
          searchParams: this.searchParams
        });
        view.$el.insertAfter(container);
        view.render();
        view.$el.addClass('reply');
      },



      // Add item to the DOM LHC (search result)
      addItemView: function(model) {
        var ItemView = SearchResultItem;

        if(this.searchParams.platform === 'facebook' && this.searchParams.channel === 'page'){
          ItemView = SearchResultFacebookPage;
        }

        if(this.searchParams.platform === 'googleplus' && this.searchParams.channel === 'search-people'){
          ItemView = SearchResultGoogleplusPeople;
        }


        var view = this.insertView('.results-panel', new ItemView({
          model: model,
          el: false,
          searchParams: this.searchParams
        }));
        view.render();
      },

      // Add item to the DOM RHC (select items into collection)
      addItemView2: function(model) {
        if (this.collection_selected.get(model.id)) {
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