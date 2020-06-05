export  default  [
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName:'user' */ '@/views/user/register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName:'user' */ '@/views/user/login.vue')
    },
    {
        path: '/user/detail',
        name: 'userDetail',
        component: () => import(/* webpackChunkName:'user' */ '@/views/user/detail.vue')
    }
]
