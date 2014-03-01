define(['app/views/BaseView', 'template', 'underscore'], function(BaseView, Template, _) {

  return BaseView.extend({

    template: Template['collect/saveForm'],


    initialize: function(){
      this.on('afterRender', _.bind(this.onAfterRender, this));
    },


    events: {
      'change #saveTo-selector': 'onSelectSaveToChanged',
      'submit form': 'onSaveFormSubmitted'
    },


    onAfterRender: function(view){
      this.$('#collectionName-formgroup').hide();
    },

    onSelectSaveToChanged: function(evt){
      if(evt.target.value === 'new'){
        this.$('#collectionName-formgroup').show();
      } else {
        this.$('#collectionName-formgroup').hide();
      }
    },

    onSaveFormSubmitted: function(evt){
      evt.preventDefault();
      
      var data = this.formToData(evt.target);

      this.pubSub.trigger('collect:save',data);

      console.log('we are saving');
    }



  });


});
