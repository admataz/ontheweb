define(['app/views/BaseView', 'template'], function(BaseView, Template) {

  return BaseView.extend({

    template: Template['collect/searchResultItem'],
    

    serialize: function(){
      console.log(this.model);
      return{
        atts: this.model.attributes,
        cid: this.model.cid
      }

    }


  });

});