import Vue from  'vue';
import {camelCase} from 'lodash';
const importAll = require.context('./', true, /\.js$/);
const modulesKeys = importAll.keys().filter(item => item != './index.js');

const utils = {};
modulesKeys.map(filePath=> {
    const utilFn =  importAll(filePath).default;
    const utilNameSpace = camelCase(filePath.replace(/^\.*\/(.*).js$/, '$1'));
    utils[utilNameSpace] = utilFn;
    Vue.prototype[`$${utilNameSpace}`] = utilFn;
});
export default {
    ...utils
}
