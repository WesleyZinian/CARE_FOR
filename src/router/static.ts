import {RouteRecordRaw} from "vue-router";

/**
 * 静态路由
 */

const staticRoutes: Array<RouteRecordRaw> = [
    // {
    //   path: '/',
    //   name: '首页',
    //   component: () => import('@/views/home/index.vue'),
    //   meta: {
    //     title: '首页',
    //   }
    // },
    {
        path: '/',
        name: 'layouts',
        component: () => import('@/layouts/index.vue'),
        meta: {
            title: 'layouts',
        }
    },
    {
        path: '/myEcharts',
        name: 'myEcharts',
        component: () => import('@/views/echarts/index.vue')
    }
]

export {staticRoutes}
