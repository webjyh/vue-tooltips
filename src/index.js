/*!
 * @name vue-tooltips 信息提示
 * @author M.J
 * @date 2017-7-5
 * @GitHub https://github.com/webjyh/vue-tooltips
 */
import Tooltips from './tooltips.js';

// auto-install
let globalVue = null;
if (typeof window !== 'undefined') {
    globalVue = window.Vue
} else if (typeof global !== 'undefined') {
    globalVue = global.Vue
}
if (globalVue) {
    globalVue.use(Tooltips)
}

export default Tooltips;
