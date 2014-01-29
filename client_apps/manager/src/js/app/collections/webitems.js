define(['backbone','underscore','app/models/webitem', 'backbone-pageable'], function(Backbone, _, model){

  return Backbone.PageableCollection.extend({
    model: model,
    url: 'http://localhost:8001/webitem',

    

    queryParams: {

      // `Backbone.PageableCollection#queryParams` converts to ruby's
      // will_paginate keys by default.
      currentPage: "page",
      pageSize: "per_page"
    },

  state: {
    pageSize: 3
  },

    parseState: function (resp, queryParams, state, options) {
      return {totalRecords: resp.total_items};
    },

    parseRecords: function (resp, options) {
      return resp.webitem;
    }
  });

});