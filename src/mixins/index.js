import Vue from 'vue';
import {camelCase} from 'lodash';

const importAll = require.context('./', true, /\.js$/);
const mixins = {};
const globalMixins = [];

importAll.keys().filter(item => item !== './index.js').map(filePath => {
    const mixinConfig = importAll(filePath).default;
    const mixinName = camelCase(filePath.replace(/^\.*\/(.*).js$/, '$1'));
    mixins[mixinName] = mixinConfig;
});
//全局混入,所有组件都会混入,谨慎使用,需要在上面globalMixins 手动写入 驼峰命名;
Object.keys(mixins).map(key =>{
    if(globalMixins.includes(key)) {
        Vue.mixin(mixins[key]);
    }
});
export default mixins;
