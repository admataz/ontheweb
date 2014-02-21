define(['backbone', '../ui/basegrid', '../collections/webItems', 'template'], function(Backbone, Backgrid, WebItemsCollection, Template) {
  var app = {};

  var columns = [{

      // name is a required parameter, but you don't really want one on a select all column
      name: "",

      // Backgrid.Extension.SelectRowCell lets you select individual rows
      cell: "select-row",

      // Backgrid.Extension.SelectAllHeaderCell lets you select all the row on a page
      headerCell: "select-all",

    }, {
      name: "updatedAt",
      label: "Updated",
      editable: false,
      cell: "date"
    }, {
      name: "title",
      label: "Title",
      cell: "string"
    }, {
      name: "url",
      label: "URL",
      cell: "uri"
    }, {
      name: "content",
      label: "Excerpt",
      cell: "text"
    }, {
      name: "comment",
      label: "Comment",
      cell: "text"
    }, {
      name: "tags",
      label: "Tags",
      cell: "string"
    }

  ];

  return Backbone.View.extend({
    
    template: Template.webItemsList,
    
    initialize: function() {
      
      this.data = new WebItemsCollection();

      this.grid = new Backgrid.Grid({
        columns: columns,
        collection: this.data
      });

      this.listenTo(this.data, "backgrid:edited", function(evt) {
        // console.log(evt);
      });

      this.init();
    },

    

    init: function() {

      this.setElement(this.template());
      this.$("#itemsgrid").append(this.grid.render().el);

      var paginator = new Backgrid.Extension.Paginator({
        windowSize: 10,
        slideScale: 1,
        goBackFirstOnSort: true,
        collection: this.data
      });

      this.grid.$el.after(paginator.render().el);
      // ServerSideFilter delegates the searching to the server by submitting a query.
      var serverSideFilter = new Backgrid.Extension.ServerSideFilter({
        collection: this.data,
        // the name of the URL query parameter
        name: "q",
        placeholder: "search" // HTML5 placeholder for the search box
      });
      this.$("#itemsgrid").before(serverSideFilter.render().el);
      this.data.fetch();


    },


    render: function(){
      // console.log($('#ontheweb-container'));
      $('#ontheweb-container').empty();
      $('#ontheweb-container').append(this.$el);
    }

  });

});