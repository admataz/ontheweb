define(['app/views/BaseView', 'template', 'underscore', 'jquery','helpers'], function(BaseView, Template, _, $) {

  return BaseView.extend({

    template: Template['collate/searchResultItem'],

    initialize: function() {
      this.on('afterRender', _.bind(this.onAfterRender, this));
      this.on('beforeRender', _.bind(this.onBeforeRender, this));
    },

   
   

    onBeforeRender: function(view){
      // console.log(view);
      // view.options.model.set( { content : this.linkify(view.options.model.get('content')) });

    },
    onAfterRender: function(view) {
      this.$('.more-info-button').on('click', _.bind(function(evt) {
        evt.preventDefault();
        this.$('.postdata').toggle();
      }, this));

       this.$('.reveal-media-button').on('click', _.bind(function(evt) {
        evt.preventDefault();
        this.$('.mediadata').toggle();
      }, this));
      
      this.$('.postdata').hide();
      this.$('.mediadata').hide();

      // this.$('.add-this-item-button').on('click', _.bind(this.onAddButtonClicked, this));
    },

    onAddButtonClicked: function(evt) {
      this.pubSub.trigger('collate:addItem', this);
      evt.preventDefault();
    }

  });

});