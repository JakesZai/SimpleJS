function HttpRequest() {

  // GET
  var get = function (uri, callback) {
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(uri));
    
    xhr.onload = function () {
      
      if (xhr.status === 200) {
        callback(xhr.responseText);
      } else {

        callback('Content unavailable > xhr.status > Error: ' + xhr.status);
      }
    };
    xhr.send();
  };

  // PUT
  var put = function (uri, payload, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('PUT', encodeURI(uri), true);
    
    xhr.onload = function () {
      
      if (xhr.status === 200) {
        callback(xhr.responseText);
      };
    };
    xhr.send(payload);
  }
  return {
    get: get,
    put: put
  }

}