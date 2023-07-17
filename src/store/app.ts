import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {RouteRecordRaw} from "vue-router";
// setup模式
export const appStore = defineStore('app', () => {

    const routes = ref<Array<RouteRecordRaw>>([])
    const state = ref<Boolean>(false)
    const setRoutes = (data: Array<RouteRecordRaw>) => {
        routes.value = data
    }
    const changeState = () => {
        state.value = !state.value
    }
    const getRoutes = computed(() => {
        return routes.value
    })
    const getState = computed(() => {
        return state.value
    })
    return {routes, setRoutes, getRoutes, changeState, getState, state}
})
