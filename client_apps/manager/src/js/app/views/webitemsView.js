define(['backbone', '../ui/basegrid', 'app/collections/webitems'], function(Backbone, Backgrid, WebItemsCollection) {
  var app = {};

  _.extend(app, Backbone.Events);

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


  var data = new WebItemsCollection();

  var grid = new Backgrid.Grid({
    columns: columns,
    collection: data
  });


  $(function() {
    $("#itemsgrid").append(grid.render().el);

    var paginator = new Backgrid.Extension.Paginator({
      windowSize: 10,
      slideScale: 1,
      goBackFirstOnSort: true,
      collection: data
    });
    grid.$el.after(paginator.render().el);


    // ServerSideFilter delegates the searching to the server by submitting a query.
    var serverSideFilter = new Backgrid.Extension.ServerSideFilter({
      collection: data,
      // the name of the URL query parameter
      name: "q",
      placeholder: "search" // HTML5 placeholder for the search box
    });

    $("#itemsgrid").before(serverSideFilter.render().el);


    data.fetch();
  });

  app.listenTo(data,"backgrid:edited",function(evt){
    console.log(evt);
  })


})