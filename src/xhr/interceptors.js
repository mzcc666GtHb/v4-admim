const requestSuccess = (config) => {
    //请求之前可在这里更改默认配置
    console.log('请求前配置',config);
    return config;
}
const requestFail = (result) => {
    // 请求前失败逻辑，断网，请求发送监控等
    console.log('请求前失败',result);
    return Promise.reject(result);
}

const responseSuccess = (result) => {
    console.log('成功回调',result);
    return  Promise.resolve(result);
}

const responseFail = (result) => {
    let errorRes  = result.response;
    console.log('失败回调',errorRes);
    return Promise.reject(result);
}

export default  {
    requestSuccess,
    requestFail,
    responseSuccess,
    responseFail,
}

