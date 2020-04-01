const requestSuccess = (config) => {
    //请求之前可在这里更改默认配置
    alert('请求之前')
    console.log(config);
    return config;
}
const requestFail = (result) => {
    // 请求前失败逻辑，断网，请求发送监控等
    return Promise.reject(result);
}

const responseSuccess = (result) => {
    console.log(result);
    return  Promise.resolve(result);
}

const responseFail = (result) => {
    console.log('result',result);
    // const {status} = result;
    // switch (status) {
    //     case 404 :
    //     case 403 :
    //         break;
    // }
    return Promise.reject(result);
}

export default  {
    requestSuccess,
    requestFail,
    responseSuccess,
    responseFail,
}

