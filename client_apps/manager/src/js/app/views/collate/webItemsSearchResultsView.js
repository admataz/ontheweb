define(['app/views/BaseView', 'template', 'underscore', 'jquery'], function(BaseView, Template, _, $) {

  return BaseView.extend({
    el: '#collate-items .results-panel',
    template: Template.webItemsSearchResults,

    initialize: function() {

    },

    render: function(data) {
      this.$el.empty();
      this.$el.append(this.template(data));

      var addlink = $('<a href="#">add</a>');
      var pubsub = this.pubSub;
      addlink.on('click', function(evt) {
        var index = ($(this).parent().data('itemid'));
        pubsub.trigger("webitem:selected", index);
        evt.preventDefault();
      });

      this.$('.list-group-item').append(addlink);

    },

  });

});