module.exports = {
    publicPath:"./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: false, //是否自动弹出浏览器页面
        host: "0.0.0.0",
        // https: true,   //是否使用https协议
        hotOnly: true, //是否开启热更新
        // proxy: {
        //     '/api': {
        //         target: 'https://douban.uieee.com/v2', //API服务器的地址
        //         ws: true,  //代理websockets
        //         changeOrigin: true, // 虚拟的站点需要更管origin
        //         pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
        //             '^/api': ''
        //         }
        //     }
        // },
    }
}
