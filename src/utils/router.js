function Router() {

  var config;

  // Public methods
  var configure = function (conf) {

    var location = window.location.hash.split('#/')[1]; // Get current location (to cater for refresh or bookmarks)

    config = {};

    for(var routeConf of conf){
      
      config[routeConf.route] = routeConf;
    }

    if (location)
      navigate(location);

  };

  var navigate = function (route) {

    var partialRoute = route.indexOf('?') > -1 ? route.split('?')[0] : route;
    var routeConfig = config[partialRoute];
    var routerView = document.getElementsByTagName('router-view')[0];

    if (!config) {

      console.warn('router not configured!');
      return;
    }

    if (!routerView) {

      console.warn('no router-view found!');
      return;
    }

    if (!routeConfig) {

      console.warn('no router configuration found for ', partialRoute);
      return;
    }
    
    var moduleId = routeConfig.moduleId;
    var moduleView = moduleId + '.html';
    var moduleSource = moduleId + '.js';
    var moduleTitle = routeConfig.title;

    s.http.get(moduleView, function (view) {

      // Load View
      routerView.innerHTML = view;

      // Load ViewModel
      var vm = document.createElement('script');
      vm.src = moduleSource;
      routerView.appendChild(vm);

      // Set Title
      document.title = moduleTitle;

      // Set URL
      history.pushState({}, moduleTitle, '#/' + route)
    });
  };

  return {
    configure: configure,
    navigate: navigate
  };
}
/*
*/

// Router related Event handlers
window.onhashchange = function() {
  var location = window.location.hash.split('#/')[1];
  router.navigate(location);
};