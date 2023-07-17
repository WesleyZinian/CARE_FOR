import {RouteRecordRaw} from "vue-router";
import Layouts from '@/layouts/index.vue'

/**
 * 静态路由
 */

const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'admin',
        component: Layouts,
        meta: {
            title: '首页',
            hidden: false,
        },
        redirect: '/myEcharts',
        children: [
            {
                path: '/myEcharts',
                name: 'myEcharts',
                meta: {
                    title: 'myEcharts',
                    hidden: false,
                },
                component: () => import('@/views/echarts/index.vue')
            },
            {
                path: '/indexDB',
                name: 'indexDB',
                meta: {
                    title: 'indexDB',
                    hidden: false,
                },
                component: () => import('@/views/home/index.vue')
            }
        ]
    },
    // {
    //     path: '/',
    //     name: 'layouts',
    //     component: () => import('@/layouts/index.vue'),
    //     meta: {
    //         title: 'layouts',
    //     }
    // },
    // {
    //     path: '/myEcharts',
    //     name: 'myEcharts',
    //     component: () => import('@/views/echarts/index.vue')
    // }
]

export {staticRoutes}
