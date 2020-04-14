import axios from 'axios';
import config from './config';
import interceptors from './interceptors';
import apis from '@/api';

const axiosInstance = axios.create(config);

// 请求拦截
axiosInstance.interceptors.request.use(interceptors.requestSuccess, interceptors.requestFail);
// 响应拦截
axiosInstance.interceptors.response.use(interceptors.responseSuccess, interceptors.responseFail);

/**
 * 根据 用户传入的url 和 参数 返回axiosInstance的调用结果,并对url的唯一性和存在性,进行校验,不满足条件promise抛出异常;
 * @param url 由模块名称(api 目录中modules文件夹下面的文件名) 和 每个api的name 组成,如果是动态路径,用户可通过':'进行拼接;通过 '/' 链接 ,例如:'movie/top250:2312'(其中movie就是api目录中movie.js的文件名,2312为动态路径);
 * @param params 用户传向后端传递的参数对象形式;
 * @returns {*}  返回axiosInstance的调用结果;
 */
export const request = (url = '', params = {}) => {
    const [apiName, pathParams] = url.split(':');
    const [api, ...rest] = apis.filter(item => item.name.trim() === apiName.trim());
    if (!api) {
        return Promise.reject(`${url} dose not exist in api modules.`);
    }
    if (rest.length) {
        return Promise.reject(`${url} is not unique.`);
    }
    api.url = api.path + (pathParams ? '/' + pathParams.trim() : '');
    return axiosInstance(normoalizeParams(api, params));
}
const normoalizeParams = (api, data) => {
    switch (api.method) {
        case 'POST':
        case 'PUT':
        case 'PATCH':
            api.data = data;
            break;
        default:
            api.params = data;
    }
    return api;
}

export default {
    install(Vue) {
        Vue.prototype.$request = request;
    }
}
