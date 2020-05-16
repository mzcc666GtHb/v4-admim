/**
 * 商品
 */
export  default  [
    {
        path: '/goods/list',
        name: '/goods/list',
        component: () => import(/* webpackChunkName:'goods' */ '@/views/goods/list.vue')
    },
    {
        path: '/goods/detail',
        name: '/goods/detail',
        component: () => import(/* webpackChunkName:'goods' */ '@/views/goods/detail.vue')
    }
]
