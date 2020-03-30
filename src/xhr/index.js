import axios from 'axios';
import config from './config';
import interceptors from './interceptors';
import apis from '@/api';

const axiosInstance = axios.create(config);

// 请求拦截
axiosInstance.interceptors.request.use(interceptors.requestSuccess, interceptors.requestFail);
// 响应拦截
axiosInstance.interceptors.response.use(interceptors.responseSuccess, interceptors.responseFail);


const apiFac = (url = '', params = {}) => {
    const [api, ...rest] = apis.filter(item => item.name.trim() === url.trim());
    if(!api) {
        console.error(`${url} dose not exist in api modules.`);
        return;
    }
    if(rest.length) {
        console.error(`${url} is not unique.`);
        return;
    }
    api.url = api.path;
    return axiosInstance(Object.assign(api,params));
}
export default {
    install(Vue) {
        Vue.prototype.$axios = apiFac;
    }
}
