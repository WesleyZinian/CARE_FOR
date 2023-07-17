import {isNavigationFailure, NavigationFailureType, RouteLocationRaw} from "vue-router";
import {ElNotification} from "element-plus";
import router from "@/router";

export const routerPush = async (to: RouteLocationRaw) => {
    try {
        const failure = await router.push(to)
        if (isNavigationFailure(failure, NavigationFailureType.aborted)) {
            ElNotification({
                message: '跳转失败1',
                type: 'error',
            })
        } else if (isNavigationFailure(failure, NavigationFailureType.duplicated)) {
            ElNotification({
                message: '跳转失败2',
                type: 'warning',
            })
        }
    } catch (error) {
        ElNotification({
            message: '跳转失败3',
            type: 'error',
        })
        console.error(error)
    }
}
