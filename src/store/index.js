import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        'goodsNum': 0,
    },
    mutations: {
        increment(state,num) {
            // 变更状态
            state.goodsNum += num;
        }
    },
    actions: {},
    modules: {}
})
