
var app, router;

require(['jquery','backbone','bootstrap', 'app/views/webitemsView'],function($,Backbone){
  

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

