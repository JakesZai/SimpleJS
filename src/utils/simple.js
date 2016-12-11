var SimpleJs = function () {

  // Private
  var self = this;

  function loadModule(url, module, callback) {

    var script = document.createElement('script')

    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' ||
        script.readyState == 'complete' ){
        callback(module);
      }
    };

    script.onload = function () {
      callback(module)
    };

    script.src = url;
    document.body.appendChild(script);
  }

  function loaded(module) {

    self[module + 'Ready'] = true;

    if (self.getParamReady && self.routerReady && self.httpRequestReady) {

      self.getParam = new GetParam();
      self.router = new Router();
      self.http = new HttpRequest();

      self.readyCallback();

    }

  }

  // Public
  var init = function(callback){

    self.readyCallback = callback;

    loadModule('./src/utils/getParam.js', 'getParam', loaded);
    loadModule('./src/utils/router.js', 'router', loaded);
    loadModule('./src/utils/httpRequest.js', 'httpRequest', loaded);
  };

  var router = function() {

    return self.router;
  };

  var http = function() {

    return self.http;
  };

  var getParam = function() {

    return self.getParam;
  };

  return {
    init: init,
    get getParam() {  return getParam() },
    get router() { return router() },
    get http() {  return http() }
  }

};
/*
*/
var s = new SimpleJs();