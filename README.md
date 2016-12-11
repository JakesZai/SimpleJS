# SimpleJS
SimpleJS js an extremely lightweight Single Page Application (SPA) framework.

Ceating an SPA with modern SPA frameworks such as Aurelia, Anglar or React can be a daunting task.
The idea behind SimpleJS is to make it easy for developers to create modern SPA applications without the hassle of setting up any extra dependencies such as NodeJS, NPM, Gulp, Babel etc..

<b>Simply include simpleJS in your application and you're all set!</b>

SimpleJS is in early development stage, so please bare with us.

<b>Roadmap:</b><br>
1. Router: version 0.0.1<br>
2. HttpClient: version 0.0.1<br>
3. Bindisng: Feb 2017<br>
4. Templating: Mar 2017<br>
5. Custom Components: Apr 2017<br>
6. Eventing: May 2017

## Code Example

### index.html
```html
<body>

  <p>Navigation</p>
  <button onclick="s.router.navigate('parent')">Parent</button>
  <button onclick="s.router.navigate('child')">Child</button>
  <hr/>

  <router-view></router-view>

  <script src="src/utils/simple.js"></script>
  <script src="src/main.js"></script>
</body>

```

### main.js
```js
s.init(function () {

  var routerConfig = [
    {route: 'parent', moduleId: '/src/views/parent',  title: 'Parent'},
    {route: 'child',  moduleId: '/src/views/child',   title: 'Child'}
  ];

  s.router.configure(routerConfig);

  s.router.navigate('parent');

});
```
