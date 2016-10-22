# vue-fancy-form


## Usage
For a full example checkout go [here](./example/index.html)

### HTML
```html
<div id="app">
    <vue-fancy-form :options.sync='form'></vue-fancy-form>
</div>
```

### PUG
```html
#app
    vue-fancy-form(:options.sync='form')
```

### ES5
```javascript
new Vue({
    el: '#app',
    components: {
        'VueFancyForm': window['vue-fancy-form'].VueFancyForm,
    },
    data: [
        form: [ ... ],
    ],
});
```

### ES6
```javascript
import {VueFancyForm} from 'vue-fancy-form';

new Vue({
    el: '#app',
    components: [
        VueFancyForm,
    ],
    data: [
        form: [ ... ],
    ],
});
```


Initial development: https://codepen.io/Index/pen/WxxYGV

[LICENSE](./LICENSE)
