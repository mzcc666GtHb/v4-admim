import bodyImg from  '../../assets/images/bedroom-1920.jpg';
export  default  [
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName:'user' */ '@/views/user/register.vue'),
        meta:{
            title:'注册',
            bodyBackgroundImg:bodyImg
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName:'user' */ '@/views/user/login.vue'),
        meta:{
            title:'登录',
            bodyBackgroundImg:bodyImg
        }
    },
    {
        path: '/user/detail',
        name: 'userDetail',
        component: () => import(/* webpackChunkName:'user' */ '@/views/user/detail.vue')
    },
    {
        path: '/user/list',
        name: 'userList',
        component: () => import(/* webpackChunkName:'user' */ '@/views/user/list.vue')
    }
]
