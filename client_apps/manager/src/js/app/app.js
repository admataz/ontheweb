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

define(['app/config', 'backbone', 'underscore', './events', 'app/router', 'app/views/layoutView', 'bootstrap', 'helpers'], function(config, Backbone, _, Events, AppRouter, LayoutView) {

  var app, layout, router, loadedStates, currentState;
  // Backbone.Layout.configure({manage:true});

  app = _.extend({}, Backbone.Events);
  layout = new LayoutView();
  router = new AppRouter();
  loadedStates = {};
  currentState = null;

  layout.render();

  /**
   * Event handler - when the navigation is selected
   */
  function onNavClicked(nav) {
    router.navigate(nav);
    loadView(nav);
  }

  function onViewLoaded(TheView) {
    var v = new TheView();
    layout.setView('#ontheweb-container', v);
    v.render();
  }

  /**
   * Load a view
   */
  function loadView(whichview) {
    if (whichview === 'index') {
      require(['app/views/dashboardView'], onViewLoaded);
    }

    if (whichview === 'webitems') {
      require(['app/views/webitems/index'], onViewLoaded);
    }

    if (whichview === 'collect') {
      require(['app/views/collect/index'], onViewLoaded);
    }

    if (whichview === 'collate') {
      require(['app/views/collate/index'], onViewLoaded);
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