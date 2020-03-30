const requestSuccess = (config) => {
    //请求之前可在这里更改默认配置
    alert('请求之前')
    console.log(config);
    return config;
}
const requestFail = (error) => {
    // 请求前失败逻辑，断网，请求发送监控等
    return Promise.reject(error);
}

const responseSuccess = (result) => {
    return  Promise.resolve(result);
}

const responseFail = (error) => {
    return Promise.reject(error);
}

export default  {
    requestSuccess,
    requestFail,
    responseSuccess,
    responseFail,
}

