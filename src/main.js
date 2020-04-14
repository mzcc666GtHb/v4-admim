import Vue from 'vue';
import App from './App.vue';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import store from './store';
import router from './router';

import request from './api-request';
Vue.use(request);

import './components';
import './filters';
import './mixins';
import './directives';
import './utils';

//生产环境阻止vue提示;
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
