define(['app/views/BaseView', 'template', 'underscore', 'jquery'], function(BaseView, Template, _, $) {

  return BaseView.extend({

    template: Template['collect/searchForm'],

    initialize: function(){
      this.on('afterRender', _.bind(this.onAfterRender, this));
    },



    onAfterRender: function(view){

      

    }


  });


});
