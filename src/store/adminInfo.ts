import { defineStore } from "pinia";
import { ref } from "vue";
import { RouteRecordRaw } from "vue-router";
// setup模式
export const useAdminInfo = defineStore('useAdminInfo', () => {

  const routes = ref<Array<RouteRecordRaw>>([])
  const setRoutes = (data: Array<RouteRecordRaw>) => {
    routes.value = data
  }
  return { routes, setRoutes }
})
