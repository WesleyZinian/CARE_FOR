import {createRouter, createWebHashHistory} from "vue-router";
import {staticRoutes, menuRoutes} from "./static";
import NProgress from 'nprogress'
import {appStore} from '@/store/app'


NProgress.configure({showSpinner: false})

const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes.concat(menuRoutes)
})

router.beforeEach(async (to, from, next) => {
    const app = appStore()
    NProgress.start()
    if (app.routes.length === 0) {
        app.setRoutes(menuRoutes)
    }
    next()
})

router.afterEach(() => {
    NProgress.done()
})
export default router
