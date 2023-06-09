import { defineStore } from "pinia";

export const configStore = defineStore('config', {
  state: () => ({
    isCollapse: false,
  }),
  getters: {
    getCollapse: (state) => state.isCollapse
  },
  actions: {
    expandSiderBar() {
      this.isCollapse = !this.isCollapse
    }
  }
})