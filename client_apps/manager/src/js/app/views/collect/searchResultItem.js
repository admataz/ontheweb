define(['app/views/BaseView', 'template', 'underscore', 'jquery'], function(BaseView, Template, _, $) {

  return BaseView.extend({

    template: Template['collect/searchResultItem'],


    events: {
      'click .save-btn': 'onClickSaveButton'

    },

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


    onClickSaveButton: function(evt){
      if(!this.model.id){
        this.model.save({silent:true}).done(_.bind(this.onModelSaved,this));
      } else {
        this.model.destroy({silent:true}).done(_.bind(this.onModelDeleted,this))
      }
      evt.preventDefault();
    },


    onModelSaved: function(xhrdata, textStatus, jqXHR){
      this.model.id=xhrdata._id;
      this.$el.addClass('list-group-item-success');
      this.$('.save-btn').text('Delete');
    },

    onModelDeleted: function(xhrdata, textStatus, jqXHR){
      this.model.unset('_id');

      this.pubSub.trigger('webitem:deleted', this.model);
      this.$el.removeClass('list-group-item-success');
      this.$('.save-btn').text('Save');
    }



  });

});