import {createRouter, createWebHashHistory} from "vue-router";
import {staticRoutes} from "./static";
import NProgress from 'nprogress'
import {useAdminInfo} from '@/store/adminInfo'


NProgress.configure({showSpinner: false})

const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes
})

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    if (useAdminInfo().routes.length === 0) {
        useAdminInfo().setRoutes(staticRoutes)
    }
    console.log('useAdminInfo=>', useAdminInfo().routes)
    next()
})

router.afterEach(() => {
    NProgress.done()
})
export default router
