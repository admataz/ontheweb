define(['app/views/BaseView', 'template', 'underscore', 'jquery'], function(BaseView, Template, _, $) {

  return BaseView.extend({

    template: Template['collect/searchResultFacebookPage'],


    events: {
      'click .show-page-posts': 'onClickShowPosts',
      'click .show-page-feed': 'onClickShowFeed'

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
      var pageid = $(evt.target).data('pageid');
      this.pubSub.trigger('facebookPage:loadPosts', pageid);
      evt.preventDefault();
    },

    onClickShowFeed: function(evt){
      var pageid = $(evt.target).data('pageid');
      this.pubSub.trigger('facebookPage:loadFeed', pageid);
      evt.preventDefault();
    }


  });

});