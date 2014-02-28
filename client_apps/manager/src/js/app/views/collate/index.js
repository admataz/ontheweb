/**
 * Main state for compiling existing web items that already collected from the web and in the local database into groups, or ItemCollections
 * Sets up a 2 panel layout, with left for searching  - and drag and drop items into the right to select them and save them as a collection
 *
 *
 * TODO: better touch behaviour - the drag and drop may need to be replaced by a touch
 * TODO: save the ItemCollection
 * TODO: reload saved the ItemCollection
 * TODO: select from a list of existing ItemCollections
 * TODO: add metadata and comments to an ItemCollection
 * TODO: provide a status for published/unpublished to an ItemCollection
 * TODO: output the public URL 
 * TODO: add the platform filters to the query  
 * 
 * 
 */
define(['app/config', 'app/views/BaseView', 'app/collections/webItems', './searchResultItem', './searchForm', './saveForm', 'template', 'underscore', 'jquery', 'app/ui/dd'],
  function(config, BaseView, WebItems, SearchResultsItem, SearchForm, SaveForm, Template, _, $) {

    return BaseView.extend({
      template: Template['collate/index'],
      collection: new WebItems(),
      collection_selected: new WebItems(),


      /**
       * Initialize
       */
      initialize: function() {
        this.added_items = [];
        this.on('afterRender', _.bind(this.onAfterRender, this));
      },


      /**
       * DOM events
       */
      events: {
        'submit #searchItems': 'onFormSubmitted',
        'submit #saveCollection': 'onSaveFormSubmitted'
      },


      /**
       * Layout Manager sub-views
       */
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


      /**
       * Set up some interface stuff once the view is ready
       */
      onAfterRender: function() {
        // set the panel heights
        this.setPanelHeights();

        // set up the drag and drop via jquery UI
        $('.selected-panel').sortable({
          'connectWith': '.results-panel'
        });

        $('.results-panel').sortable({
          'connectWith': '.selected-panel'
        });
      },



      /**
       * Capture the search form submission
       * TODO: split this  -  the event handler into the FormView - and keep the data processing here - via pubsub
       */
      onFormSubmitted: function(evt) {
        var theform = evt.target;
        var arr = $(theform).serializeArray();
        var data = _(arr).reduce(function(acc, field) {
          acc[field.name] = field.value;
          return acc;
        }, {});
        data.page = 1;
        data.per_page = 100;
        this.collection.reset();
        this.$('.results-panel').empty();
        this.collection.fetch({
          data: {
            q: data.q
          },
          success: _.bind(this.onSearchResultsLoaded, this)
        });
        this.pubSub.trigger("seachForm:submit", data);
        evt.preventDefault();
      },


      onSaveFormSubmitted: function(evt){
        alert('sorry - saving collated collection not working yet!');
        evt.preventDefault();
      },


      /**
       * we have the results! - display them and set some DOM values
       */
      onSearchResultsLoaded: function(collection, response, options) {
        collection.each(_.bind(this.addResultItem, this));
        this.setPanelHeights();
      },


      /**
       * Render individual elements to the DOM
       * TODO: decouple this from the specific panel so we can reuse it in the loading of the saved collection items
       */
      addResultItem: function(model) {
        var view = this.insertView('.results-panel', new SearchResultsItem({
          model: model,
          el: false
        }));
        view.render();
      }


    });

  });