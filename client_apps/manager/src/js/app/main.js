
var app, router;

require(['bootstrap', 'app/views/webitemsView', 'app/ui/sortable', 'app/ui/resizable'],function(){
     $(function(){
        // $('#testdiv ul').sortable();
        // $('#testdiv2').resizable();

    });


  function init() {
    // app = {
    //   loadData: loadData
    // };
    // _.extend(app, Backbone.Events);
    // router = new Router({
    //   app: app
    // });
    // app.listenTo(router, 'router:newURL', routeURL);

    // //doing this early so clicking tags is disbaled until data is loaded
  
    // initInterfaces();
  
    // initListeners();

    // Backbone.history.start({
    //   pushState: true,
    //   silent: true,
    //   root: 'news-media'
    // });
  }


  init();

  return app;
});

