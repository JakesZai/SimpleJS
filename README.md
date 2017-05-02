# SimpleJS
SimpleJS js an extremely lightweight Single Page Application (SPA) framework.

Ceating an SPA with modern SPA frameworks such as Aurelia, Anglar or React can be a daunting task.
The idea behind SimpleJS is to make it easy for developers to create modern SPA applications without the hassle of setting up any extra dependencies such as NodeJS, NPM, Gulp, Babel etc..

<b>Simply include simpleJS in your application and you're all set!</b>

SimpleJS is in early development stage, so please bare with us.

<b>Roadmap:</b><br>
1. Router: version 0.0.1<br>
2. HttpClient: version 0.0.1<br>
3. Binding: Coming Soon<br>
4. Templating: Coming Soon<br>
5. Custom Components: Coming Soon<br>
6. Eventing: Coming Soon

## Code Example

### index.html
```html
<body>

  <p>Navigation</p>
  <button onclick="sim.router.navigate('parent')">Parent</button>
  <button onclick="sim.router.navigate('child')">Child</button>
  <hr/>

  <router-view></router-view>

  <script src="src/utils/simple.js"></script>
  <script src="src/main.js"></script>
</body>

```

### main.js
```js
window.onload = function() {

  load('getParam').from('./src/utils/getParam.js');

  var routerConfig = [
    {route: 'parent', moduleId: '/src/views/parent',  title: 'Parent'},
    {route: 'child',  moduleId: '/src/views/child',   title: 'Child'}
  ];

  sim.router.configure(routerConfig);

  sim.router.navigate('parent');

};
```
