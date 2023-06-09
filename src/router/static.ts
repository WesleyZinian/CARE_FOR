import { RouteRecordRaw } from "vue-router";

/**
 * 静态路由
 */

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
    }
  },
  {
    path: '/layouts',
    name: 'layouts',
    component: () => import('@/layouts/index.vue'),
    meta: {
      title: 'layouts',
    }
  }
]

export { staticRoutes }
