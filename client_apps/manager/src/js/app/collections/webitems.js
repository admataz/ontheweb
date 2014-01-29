define(['backbone','lodash','app/models/webitem'], function(Backbone, _, model){

  return Backbone.Collection.extend({
    mode: model,
    url: 'http://localhost:8001/webitem',

    initialize: function(){
      // console.log(this.fetch);
      this.fetch();
    }


  });

});