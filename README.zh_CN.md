# Vue-Tooltips <small>Vue 2.x</small>

依赖于 Vue 的简单简洁的信息提示框，支持移动端。

### Demo 预览
http://demo.webjyh.com/vue-tooltips

![http://cdn.webjyh.com/vue_tooltips_qrcode.png](http://cdn.webjyh.com/vue_tooltips_qrcode.png)

### 源码说明
1. `./src/` 为源码目录
2. `./dist/` 为打包后输出目录
3. 请使用 `dist` 目录下的 `css` 和 `js`

### 源码打包
``` bash
# or `npm i rollup -g` for short
npm install rollup --global

# install dependencies
npm install

# build for production with minification
npm run build
```

### 安装
``` bash
# npm install
npm install vue-tooltips --save-dev

# 或下载 vue-tooltips.js
https://github.com/webjyh/vue-tooltips/releases
```


### 使用
```javascript
// *.vue 引用
import Vue from 'vue';
import 'vue-tooltips/dist/tooltips.css';
import Tooltips from 'vue-tooltips';

Vue.use(Tooltips);

// .vue 使用
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
*.js 使用

<!-- 引入样式 -->
<link rel="stylesheet" href="dist/tooltips.css">

<!-- 引入组件库 -->
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


### 调用
```javascript
// 直接调用
this.$tooltips('Tooltips !!!');

// 设置消失时间
this.$tooltips('Tooltips !!!', 5000);

// 配置 options
this.$tooltips('Tooltips !!!', {
    type: 'danger',
    duration: 3000,
    callback: function() {
        alert(1);
    }
});

// 快捷调用
/* type = 'success' */
this.$tooltips.success(msg, [, options]);

/* type = 'warning' */
this.$tooltips.warning(msg, [, options]);

/* type = 'danger' */
this.$tooltips.error(msg, [, options]);
```

### options  说明
参数名  | 默认值 | 类型 | 参数说明
------- | ------ | ---- | --------
type |  `success` | {String} | 提示框的类型，可填写参数 `default`, `success`, `warning`, `danger`
duration | `3000` | {Number} | 设置提示框消失时间，默认 `3000` 毫秒
callback | `function()` | {Function} | 提示框关闭时所调用的回调法。

### Author
[M.J](http://webjyh.com)

#### 关于 Demo 提示框中的 `icon`
Demo 中带 `icon` 的提示框均是使用 字体图标加样式完成，图标来自 `iconfont`，具体可查看 Demo 源码
