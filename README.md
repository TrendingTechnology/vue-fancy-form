# vue-fancy-form
Vue component for forms and inline validation


## Usage

### HTML
```html
<div id="app">
    <vue-fancy-form :options.sync='form'></vue-fancy-form>
</div>
```

### ES5 without module loader
For a full example checkout go [here](./example/es5)

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

### ES6 with module loader
`npm install --save vue-fancy-form`

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


[LICENSE](./LICENSE)
