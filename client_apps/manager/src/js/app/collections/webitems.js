define(['app/config', 'backbone', 'underscore', 'app/models/webItem', 'backbone-pageable'], function(config, Backbone, _, model) {


  return Backbone.PageableCollection.extend({
    model: model,
    url: config.api.url+'webitem',

    queryParams: {

      // `Backbone.PageableCollection#queryParams` converts to ruby's
      // will_paginate keys by default.
      currentPage: "page",
      pageSize: "per_page"
    },

    state: {
      pageSize: 30
    },

    parseState: function(resp, queryParams, state, options) {
      return {
        totalRecords: resp.total_items
      };
    },

    parseRecords: function(resp, options) {
      return resp.webitem;
    }
  });

});