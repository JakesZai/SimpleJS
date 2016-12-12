var SimpleJs = function () {

  // Private
  var self = this;
  self.modulesLoaded = 0;

  function loadModule(module, callback) {

    var script = document.createElement('script')

    script.onreadystatechange = function () {
      if (script.readyState == 'loaded' || script.readyState == 'complete'){
        callback(module[1]);
      }
    };

    script.onload = function () {
      callback(module[1])
    };

    script.src = module[0];
    document.body.appendChild(script);
  }

  self.load = function(module){

    var moduleInstance;

    var loadedCallback = function() {
      self[module[1]] = new window[module]()
    };

    var setDirectory = function(directory){
      loadModule([directory, module], loadedCallback);
    }

    return {
      from: setDirectory
    }
  }

  function loaded(module) {

    self.modulesLoaded++;

    if(self.modules.length === self.modulesLoaded) {
      self.readyCallback();
    }

  }

  // Public
  self.init = function(callback){

    self.modules = [['./src/utils/router.js', 'router'], ['./src/utils/httpRequest.js', 'httpRequest']];

    self.readyCallback = function() {

      for(var module of self.modules) {
        self[module[1]] = new window[module[1]]();
      }
    }

    for(var module of self.modules) {
      loadModule(module, loaded)
    }

  }();

  return {
    get self() { return self }
  }

};
/*
*/
window.sim = new SimpleJs().self;
window.load = window.sim.load;
