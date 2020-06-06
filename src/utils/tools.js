import plugins from "./plugins";
export default {
    /**
     * 检测图片是否已经加载完成
     * @param url 图片地址
     */
    imgIsLoaded (url) {
        return new Promise((resolve) => {
            let img = new Image();
            img.src = url;
            img.onload = function () {
                if (this.complete == true){
                    resolve(true);
                    img = null;
                }
            }
            img.onerror = function () {
                resolve(false);
                img = null;
            }
        })
    },
    setBodyBackgroundImg (imgSrc = '') {
        document.body.style.backgroundImage = `url("${imgSrc}")`;
    },
    getToken() {
        return  plugins.storage.get('token');
    }
}
