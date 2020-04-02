import Vue from 'vue';
import VueRouter from 'vue-router';
import config from './config';
import {routerBeforeEach,routerAfterEach} from './interceptors';
Vue.use(VueRouter);

const importAll = require.context('./modules', true, /\.js$/);
const routes = [];
importAll.keys().map(item=> {
    const  routeModule =  importAll(item).default;
    routes.push(...routeModule);
});
const routerInstance = new VueRouter({
    routes,
    ...config
});
// 拦截器
routerInstance.beforeEach(routerBeforeEach);
routerInstance.afterEach(routerAfterEach);

export default routerInstance;
