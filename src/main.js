s.init(function () {

  var routerConfig = [
    {route: 'parent', moduleId: '/src/views/parent',  title: 'Parent'},
    {route: 'child',  moduleId: '/src/views/child',   title: 'Child'}
  ];

  s.router.configure(routerConfig);

  s.router.navigate('parent');

});