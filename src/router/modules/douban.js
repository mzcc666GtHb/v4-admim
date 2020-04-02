/**
 * 豆瓣模块
 */
export  default  [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about.vue')
    },
    {
        path: '/drag',
        name: 'drag',
        component: () => import('@/views/drag.vue')
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import('@/views/tree.vue')
    },
    {
        path: '/sort',
        name: 'sort',
        component: () => import('@/views/sort.vue')
    },
    {
        path: '/goods',
        name: 'goods',
        meta: {
            keepAlive: true
        },
        component: () => import('@/views/goods.vue')
    }
]
