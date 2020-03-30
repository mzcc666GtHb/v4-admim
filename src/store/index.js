import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        'goodsNum': 1,
    },
    mutations: {
        increment(state) {
            // 变更状态
            state.goodsNum++
        }
    },
    actions: {},
    modules: {}
})
