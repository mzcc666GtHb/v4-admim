export default {
    /* 手机号校验 由以1开头的11位数字组成  */
    validateMobile(str) {
        const reg = /^1\d{10}$/;
        return reg.test(str);
    },
    /* 邮箱校验 */
    validateEmail(str) {
        const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return reg.test(str);
    }
}
