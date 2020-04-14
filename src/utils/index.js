import Vue from  'vue'
import {camelCase} from "lodash";

const importAll = require.context('./modules', true, /\.js$/);
const utils = {};
importAll.keys().map(filePath=> {
    const utilFn =  importAll(filePath).default;
    const utilNameSpace = camelCase(filePath.replace(/^\.*\/(.*).js$/, '$1'));
    utils[utilNameSpace] = utilFn;
    Vue.prototype[`$${utilNameSpace}`] = utilFn
});
export default {
    ...utils
}
