/**
 * 全局组件
 * 所有全局组件写在modules中, 组件文件夹名称必须为kebab-case(短横线)命名方式,输出文件必须为index.vue,且在当前根目录下;
 * 自动注册时,会将组件名称自动转换为 首字母大写 KebabCase,且注册到全局; 在vue文件中直接调用即可,无需引入;
 */

import Vue from  'vue';
import _ from 'lodash';
const importAll = require.context('./modules', true, /index\.vue$/);

// 遍历获取到的文件名，依次进行全局注册
importAll.keys().map(filePath => {
    const pathLevel = filePath.split('/').length || 0;
    if(pathLevel === 3) {
        const componentConfig = importAll(filePath);
        const componentName = _.upperFirst(_.camelCase(filePath.replace(/^\.*\/(.*)index\.vue$/, '$1')));
        // 全局注册组件
        Vue.component(componentName, componentConfig.default || componentConfig)
    }else{
        console.error('');
    }

})
