define(['app/views/BaseView', 'template', 'underscore', 'jquery'], function(BaseView, Template, _, $) {

  return BaseView.extend({

    template: Template['collect/searchResultGoogleplusPeople'],


    events: {
      'click .show-page-posts': 'onClickShowPosts'
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
    
    },

    onClickShowPosts: function(evt){
      var personid = $(evt.target).data('personid');
      this.pubSub.trigger('googleplusPeople:loadPosts', personid);
      evt.preventDefault();
    }




  });

});