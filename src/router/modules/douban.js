/**
 * 豆瓣模块
 */
export  default  [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName:'douban' */ '@/views/douban/home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName:'douban' */ '@/views/douban/about.vue')
    }
]
