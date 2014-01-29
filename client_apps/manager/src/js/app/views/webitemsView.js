define(['backbone','backgrid', 'backgrid-paginator', 'app/collections/webitems'], function(Backbone, Backgrid, BackgridPaginator, WebItemsCollection){
  


  var columns = [{
    name: "_id", 
    label: "ID", 
    editable: false,
    cell: "string"  
     }, {
    name: "title",
    label: "Title",
    cell: "string" 
  }, {
    name: "url",
    label: "URL",
    cell: "uri" 
  },
  {
    name: "content",
    label: "Excerpt", 
    cell: "string" 
  }

  ];

var data = new WebItemsCollection();

var grid = new Backgrid.Grid({
  columns: columns,
  collection: data
});



$(function(){



// Render the grid and attach the root to your HTML document
$("#itemsgrid").append(grid.render().el);

var paginator = new Backgrid.Extension.Paginator({

  // If you anticipate a large number of pages, you can adjust
  // the number of page handles to show. The sliding window
  // will automatically show the next set of page handles when
  // you click next at the end of a window.
  windowSize: 10, // Default is 10

  // Used to multiple windowSize to yield a number of pages to slide,
  // in the case the number is 5
  slideScale: 0.5, // Default is 0.5

  // Whether sorting should go back to the first page
  goBackFirstOnSort: false, // Default is true

  collection: data
});


data.fetch();
grid.$el.append(paginator.render().el);





});

})