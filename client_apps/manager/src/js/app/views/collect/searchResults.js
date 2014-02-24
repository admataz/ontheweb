define(['app/views/BaseView', 'underscore', 'jquery', 'template'], function(BaseView, _, $, Template) {


  return BaseView.extend({
    
    template: Template['collect/searchResults'],

    el: '#collect-items-results',

    events: {
      'submit #resultsForm': 'onFormSubmit'
    },

    render: function(data){
      this.$el.empty();
      this.$el.append(this.template(data));
    },

    onFormSubmit: function(evt){

      var tosave  = _.map(this.$('input:checked'), function(itm,i){
        return $(itm).attr('value');
      });

      this.pubSub.trigger('collectItems:save', tosave);
     
      evt.preventDefault();
    }



  });

});