/**
 * rollup.config.js
 */
import fs from 'fs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import vue from 'rollup-plugin-vue';

let reg = new RegExp(/production/);
let plugins = [
    vue({
        css (style, styles, compiler) {
            if (!fs.existsSync('dist')) {
                fs.mkdirSync('dist');
            }
            fs.writeFileSync('dist/tooltips.css', style);
        }
    }),
    babel()
];

if (reg.test(process.env.NODE_ENV)) {
    plugins.push(uglify());
}

export default {
    globals: {
        vue: 'Vue'
    },
    entry: './src/index.js',
    dest: reg.test(process.env.NODE_ENV) ? 'dist/tooltips.min.js' : 'dist/tooltips.js',
    plugins: plugins,
    moduleName: 'VueToolTips',
    format: 'umd',
    external: ['vue']
};
