define(['app/config', 'backbone', 'underscore', 'app/models/itemCollection', 'backbone-pageable'], function(config, Backbone, _, model) {

    return Backbone.Collection.extend({

      model: model,
      url: config.api.url + 'itemcollection',

    });

  });