window.onload = function() {

  load('getParam').from('./src/utils/getParam.js');

  var routerConfig = [
    {route: 'parent', moduleId: '/src/views/parent',  title: 'Parent'},
    {route: 'child',  moduleId: '/src/views/child',   title: 'Child'}
  ];

  sim.router.configure(routerConfig);

  sim.router.navigate('parent');

};