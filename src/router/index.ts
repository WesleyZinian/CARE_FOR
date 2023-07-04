import { createRouter, createWebHashHistory } from "vue-router";
import { staticRoutes } from "./static";
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(()=> {
  NProgress.done()
})
export default router
