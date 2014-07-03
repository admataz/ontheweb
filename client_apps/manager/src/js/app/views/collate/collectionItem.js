define(['app/views/BaseView', 'template', 'underscore', 'jquery'], function(BaseView, Template, _, $) {

  return BaseView.extend({

    template: Template['collate/collectionItem'],

    initialize: function() {
      this.on('afterRender', _.bind(this.onAfterRender, this));
      this.on('beforeRender', _.bind(this.onBeforeRender, this));
    },

    events: {
      'click .media-heading': 'onClickHeading'

    },


    onClickHeading: function(evt){
      

      this.pubSub.trigger('collectionItem:clicked', this.model.id);

      evt.preventDefault();



    },

    onBeforeRender: function(view) {

    },
    onAfterRender: function(view) {

    },

  });

});