
export  default  [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName:'index' */ '@/views/index'),
        meta:{
            title:'首页'
        }
    }
]
