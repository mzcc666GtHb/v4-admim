import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
    },
    {
        path: '/drag',
        name: 'drag',
        component: () => import(/* webpackChunkName: "about" */ '../views/drag.vue')
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import(/* webpackChunkName: "about" */ '../views/tree.vue')
    },
    {
        path: '/sort',
        name: 'sort',
        component: () => import(/* webpackChunkName: "about" */ '../views/sort.vue')
    },
    {
        path: '/goods',
        name: 'goods',
        meta: {
            keepAlive: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/goods.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
