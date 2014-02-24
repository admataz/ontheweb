/**
 * The app is where it all starts and ends - the central controller to everything
 * Responsible for instantiating the view-controllers and responding to events in the events hub that affect the whole app
 *
 * Someone has to instantiate the views!
 *  - we are using requirejs, so I am instantiating them lazily
 *  - this needs to be accounted for in our r.js build:
 *  - remember to set the build option findNestedDependencies:true, so the lazily loaded modules get included in the build.
 *
 */

define(['app/config','backbone', 'underscore', './events', 'app/router', 'app/views/layoutView'], function(config, Backbone, _, Events, AppRouter, LayoutView) {

  var app = _.extend({}, Backbone.Events);

  var layout = new LayoutView();
  var router = new AppRouter();
  var loadedStates={};
  var currentState = null;



/**
 * Event handler - when the navigation is selected
 */
  function onNavClicked(nav) {
    router.navigate(nav);
    loadView(nav);
  }


/**
 * Load a view
 */
  function loadView(whichview) {
    // for now I'm going to simply map the incoming ID to a View Object - it's like we usually use routing
    // we can get more specific for a view if required
    var views = {
      'index': 'app/views/dashboardView',
      'webitems': 'app/views/webItemsListView',
      'collect': 'app/views/collectItemsView',
      'collate': 'app/views/collateItemsView'
    };


// Don't repeat oureselves
    if(loadedStates[whichview]){
      currentState = loadedStates[whichview];
      currentState.render();
      return;
    }



    if(whichview ==='index'){
      require(['app/views/dashboardView'], function(TheView) {
        loadedStates[whichview] = new TheView();
        currentState = loadedStates[whichview];
        currentState.render();
      });
    }

    if(whichview ==='webitems'){
      require(['app/views/webItemsListView'], function(TheView) {
        loadedStates[whichview] = new TheView();
        currentState = loadedStates[whichview];
        currentState.render();
      });
    }

    if(whichview ==='collect'){
      require(['app/views/collectItemsView'], function(TheView) {
        loadedStates[whichview] = new TheView();
        currentState = loadedStates[whichview];

        // attaching this here to see if it helps  - can't attach it to the initialiser - 
        // TO: this feels messy - the question is how can I access properties defined in the super constructor as initialisers? 
        loadedStates[whichview].listenTo(Events,'collectItems:save',_.bind(loadedStates[whichview].onSaveSelection,loadedStates[whichview]));

        currentState.render();
      });
    }

    if(whichview ==='collate'){
      require(['app/views/collateItemsView'], function(TheView) {
        loadedStates[whichview] = new TheView();
        currentState = loadedStates[whichview];
        currentState.render();
      });
    }

    



  }







// Set up the app-level listeners
  app.listenTo(Events, 'nav:clicked nav:loaded', onNavClicked);


// Start the Backbone history
  Backbone.history.start({
    pushState: true,
    root: config.admin.path
  });


// Requirejs maintains the same instance wherever it is loaded in the app
  return app;
});