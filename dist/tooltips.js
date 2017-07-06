(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
	typeof define === 'function' && define.amd ? define(['vue'], factory) :
	(global.VueToolTips = factory(global.Vue));
}(this, (function (Vue) { 'use strict';

Vue = Vue && 'default' in Vue ? Vue['default'] : Vue;

var TooltipsVue = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "vue-ui-tooltips", class: [_vm.className, { 'is-show': _vm.isShow }] }, [_c('span', { domProps: { "innerHTML": _vm._s(_vm.message) } })]);
    }, staticRenderFns: [],
    name: 'tooltips',
    data: function data() {
        return {
            timeout: null,
            isShow: false,
            message: '',
            type: 'success',
            duration: 3000,
            callback: function callback() {}
        };
    },

    computed: {
        className: function className() {
            var type = '';
            switch (this.type) {
                case 'default':
                    type = 'vue-ui-tooltips-default';break;
                case 'success':
                    type = 'vue-ui-tooltips-success';break;
                case 'warning':
                    type = 'vue-ui-tooltips-warning';break;
                case 'danger':
                    type = 'vue-ui-tooltips-danger';break;
                default:
                    type = 'vue-ui-tooltips-success';
            }
            return type;
        }
    },
    mounted: function mounted() {
        this.show().bind();
    },

    methods: {
        bind: function bind() {
            var _this = this;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                _this.hide();
            }, this.duration);

            return this;
        },
        hide: function hide() {
            var _this = this;
            var remove = function remove() {
                _this.$el.parentNode.removeChild(_this.$el);
                _this.callback && _this.callback.apply(_this);
            };

            this.isShow = false;
            this.$el.addEventListener('transitionend', remove, { once: true });

            return this;
        },
        show: function show() {
            var _this = this;

            setTimeout(function () {
                _this.isShow = true;
            }, 100);

            return this;
        }
    }
};

var TooltipsConstructor = Vue.extend(TooltipsVue);

var Tooltips$1 = function Tooltips(message, options) {
    var instance = void 0;

    options = options || {};
    if (typeof options === 'number') {
        options = {
            duration: options
        };
    }
    options.message = message;

    instance = new TooltipsConstructor({
        data: options
    });

    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);

    return instance.vm;
};

['success', 'warning', 'error'].forEach(function (type) {
    Tooltips$1[type] = function (message, options) {
        options = options || {};
        if (typeof options === 'number') {
            options = {
                duration: options
            };
        }
        options.type = type === 'error' ? 'danger' : type;
        return Tooltips$1(message, options);
    };
});

// install
Tooltips$1.install = function (Vue$$1) {
    Vue$$1.prototype.$tooltips = Tooltips$1;
};

/*!
 * @name vue-tooltips 信息提示
 * @author M.J
 * @date 2017-7-5
 * @GitHub https://github.com/webjyh/vue-tooltips
 */
// auto-install
var globalVue = null;
if (typeof window !== 'undefined') {
    globalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    globalVue = global.Vue;
}
if (globalVue) {
    globalVue.use(Tooltips$1);
}

return Tooltips$1;

})));
