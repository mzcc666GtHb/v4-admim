import Vue from  'vue';

const filters= {
    numFilter (value) {
        // 截取当前数据到小数点后两位
        let realVal = Number(value).toFixed(2)
        return realVal
    },
    placeholder (value,placeholder = '--') {
      return (value !== 0 && !value) ? placeholder : value;
    }
}

Object.keys(filters).map(key =>{
    Vue.filter(key,filters[key]);
})
