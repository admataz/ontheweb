define(['app/config', 'app/views/BaseView', 'app/collections/webItems', './searchResultItem', './searchForm', './saveForm', 'template', 'underscore', 'jquery','app/ui/dd'], 
  function(config, BaseView, WebItems, SearchResultsItem, SearchForm, SaveForm, Template, _, $) {

  return BaseView.extend({
    template: Template['collate/index'],
    collection: new WebItems(),
    collection_selected: new WebItems(),

    initialize: function() {
      this.added_items = [];
      this.listenTo(this.pubSub, 'webitem:selected', _.bind(this.onItemSelected, this));
      this.listenTo(this.pubSub, 'collate:addItem', _.bind(this.onItemAdded, this));
      this.on('afterRender', _.bind(this.onAfterRender,this));
    },

    events: {
      'submit #searchItems': 'onFormSubmitted'
    },

    views: {
      '.search-panel': new SearchForm(),
      '.save-panel': new SaveForm()
    },

    setPanelHeights: function(){
       var pheight = ($(window).height() - this.$('.dd-panels').offset().top);
      var theight = Math.max(this.$('.dd-panels').height(), pheight);
      $('.selected-panel, .results-panel').css({
        'min-height':theight+'px',
      });
    },

    onAfterRender:function(view){
      this.setPanelHeights();

      $('.selected-panel').sortable({
        'connectWith': '.results-panel'
      });
      $('.results-panel').sortable({
        'connectWith': '.selected-panel'
      })

      


      // console.log($(window).height());
      // console.log($('#mainNav').height());


      // $('.results-panel div')
      // $('.results-panel>div.ist-group-item').draggable();
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
      this.setPanelHeights();

    },

    onItemSelected: function(id) {
      console.log(this.collection.at(id));
    },

    onItemAdded: function(obj){
      var view = this.insertView('.selected-panel', new SearchResultsItem({model:obj.options.model}));
      this.collection_selected.add(obj.options.model);
      this.collection.remove(obj);
      this.removeView(obj);
      view.render();
    },


    addItemView: function(model){
      var view = this.insertView('.results-panel', new SearchResultsItem({model:model, el:false}));
      view.render();
    }




  });

});