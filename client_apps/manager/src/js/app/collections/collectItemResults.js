define(['backbone', 'app/models/webitem'], function(Backbone, WebItem) {

  return Backbone.Collection.extend({
    model: WebItem,
    url: null,



    setURL: function(url){
      this.url = url;


    }
    
  });

});