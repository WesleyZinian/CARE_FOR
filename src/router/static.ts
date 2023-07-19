import {RouteRecordRaw} from "vue-router";
import Layouts from '@/layouts/index.vue'

/**
 * 静态路由
 * 登录、404、401
 */

const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {title: '登录'}
    },
]

/**
 * 菜单
 */
const menuRoutes: Array<RouteRecordRaw> = [
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
]


export {staticRoutes, menuRoutes}
