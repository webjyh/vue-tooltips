import Vue from 'vue';
import TooltipsVue from './tooltips.vue';
let TooltipsConstructor = Vue.extend(TooltipsVue);

let Tooltips = (message, options) => {
    let instance;

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

['success', 'warning', 'error'].forEach((type) => {
    Tooltips[type] = (message, options) => {
        options = options || {};
        if (typeof options === 'number') {
            options = {
                duration: options
            };
        }
        options.type = type === 'error' ? 'danger' : type;
        return Tooltips(message, options);
    };
});

// install
Tooltips.install = (Vue) => {
    Vue.prototype.$tooltips = Tooltips
};

export default Tooltips;
