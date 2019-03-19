# Vue-Tooltips <small>Vue 2.x</small>

### [English](https://github.com/webjyh/vue-tooltips) | [中文](https://github.com/webjyh/vue-tooltips/blob/master/README.zh_CN.md)

### Demo
http://demo.webjyh.com/vue-tooltips

![http://cdn.webjyh.com/vue_tooltips_qrcode.png](http://cdn.webjyh.com/vue_tooltips_qrcode.png)

### Build
``` bash
# or `npm i rollup -g` for short
npm install rollup --global

# install dependencies
npm install

# build for production with minification
npm run build
```

### Install
``` bash
# npm install
npm install vue-tooltips --save-dev

# or download vue-tooltips.js
https://github.com/webjyh/vue-tooltips/releases
```

### Use
```javascript
// *.vue file
import Vue from 'vue';
import 'vue-tooltips/dist/tooltips.css';
import Tooltips from 'vue-tooltips';

Vue.use(Tooltips);

export default {
    data() {
        return {}
    },
    mounted() {
        this.$tooltips('vue-Tooltips !!!');
    }
}
```

```html
*.js file

<!-- css -->
<link rel="stylesheet" href="dist/tooltips.css">

<!-- js -->
<script src="//cdn.bootcss.com/vue/2.3.4/vue.js"></script>
<script src="dist/tooltips.min.js"></script>
<script>
new Vue({
    el: '#app',
    data: function() {
        return {}
    },
    mounted: function() {
        this.$tooltips('vue-Tooltips !!!');
    }
});
</script>
```

### Example
```javascript
this.$tooltips('Tooltips !!!');

// set duration
this.$tooltips('Tooltips !!!', 5000);

// set Options
this.$tooltips('Tooltips !!!', {
    type: 'danger',
    duration: 3000,
    callback: function() {
        alert(1);
    }
});

/* type = 'success' */
this.$tooltips.success(msg, [, options]);

/* type = 'warning' */
this.$tooltips.warning(msg, [, options]);

/* type = 'danger' */
this.$tooltips.error(msg, [, options]);
```

### Options
Attribute  | Default | Type | Description
------- | ------ | ---- | --------
type |  `success` | {String} | message type `default`, `success`, `warning`, `danger`
duration | `3000` | {Number} | display duration, millisecond. default 3000 ms.
callback | `function()` | {Function} | callback function when closed with the message instance as the parameter

### Author
[M.J](http://webjyh.com)
