define(['app/views/BaseView', 'template', 'underscore', 'jquery', 'app/views/collect/SearchTwitterAdvanced'], function(BaseView, Template, _, $, SearchTwitterAdvanced) {

  return BaseView.extend({

    template: Template['collect/searchForm'],

    initialize: function() {

      // this.on('afterRender', _.bind(this.onAfterRender, this));
    },

    events: {
      'click #advanced-twitter-search-trigger': 'onAdvancedTwitterSearchTriggerClicked',
      'click input[name="platform"]': 'onPlatformChoice'
    },

    // onAfterRender: function(view){

    // },

    views: {
      '#advanced-twitter-search-wrapper': new SearchTwitterAdvanced()

    },

    onAdvancedTwitterSearchTriggerClicked: function(evt) {
      this.$('#advanced-twitter-search').modal();
    },

    onPlatformChoice: function(evt){
      var currPlatform = $(evt.currentTarget).attr('value');
      $('.form-group.search-options').hide();
      $('#search-options-'+currPlatform).show();
      $('input[name="channel"]').prop('checked',false);
      $('#search-options-'+currPlatform+ ' input[name="channel"]').first().prop('checked',true);
    }



  });

});