function Child() {

  var back = function () {

    s.router.navigate('parent');
  };

  return {
    back: back
  }
}
/*
*/
var child = new Child();