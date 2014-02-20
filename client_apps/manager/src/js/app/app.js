/**
 * The app is where it all starts and ends - the central controller to everything
 * Responsible for instantiating the view-controllers and responding to events in the events hub that affect the whole app
 *
 * 
 */


define(['backbone', 'underscore', './events', 'app/router', 'app/views/layoutView'], function(Backbone, _, Events, AppRouter, LayoutView) {

  var app = _.extend({},Backbone.Events);


   var layout = new LayoutView();
   var router = new AppRouter();

  function onNavClicked(nav){
    router.navigate(nav);
    
    console.log(nav);


  }

  app.listenTo(Events, 'nav:clicked nav:loaded', onNavClicked);
  // app.listenTo(Events, '', onNavClicked);







  Backbone.history.start({
    pushState: true
  });


  return app;
});



// require(['app/views/collectItemsView'],function(view){
//         new view();
//       });
//       require(['app/views/webItemsView'],function(view){
//         new view();
//       });