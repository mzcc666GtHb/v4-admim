import  Vue from  'vue';
const baseURL = process.env.VUE_APP_BASE_URL;
Vue.prototype.baseURL = baseURL;
export  default  {
    baseURL:baseURL,
    timeout:1000
}
