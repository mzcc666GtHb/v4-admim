import Vue from  'vue';
const importAll = require.context('./', true, /\.js$/);
const modulesKeys = importAll.keys().filter(item => item != './index.js');

let utils = {};
modulesKeys.map(filePath=> {
    const utilFn =  importAll(filePath).default;
    utils = Object.assign(utils, utilFn);
});
Object.keys(utils).map( key =>{
    Vue.prototype[`$${key}`] = utils[key];
})

export default {
    ...utils
}
