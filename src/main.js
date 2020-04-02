import Vue from 'vue';
import App from './App.vue';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import store from './store';
import router from './router';

import Xhr from './xhr';
Vue.use(Xhr);

//生产环境阻止vue提示;
Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
