function Child() {

  var back = function () {

    sim.router.navigate('parent');
  };

  return {
    back: back
  }
}
/*
*/
var child = new Child();