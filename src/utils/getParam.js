function getParam() {

  var byName = function (name, url) {

    url = !url ? window.location.href : url;

    name = name.replace(/[\[\]]/g, '\\$&');

    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  return {
    byName: byName
  };
}