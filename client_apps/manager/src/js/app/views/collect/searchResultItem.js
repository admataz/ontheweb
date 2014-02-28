define(['app/views/BaseView', 'template', 'underscore', 'jquery'], function(BaseView, Template, _, $) {

  return BaseView.extend({

    template: Template['collect/searchResultItem'],

    initialize: function() {
      this.on('afterRender', _.bind(this.onAfterRender, this));
    },

    serialize: function() {
      return {
        atts: this.model.attributes,
        cid: this.model.cid
      };

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

  });

});