import { defineStore } from "pinia";

export const configStore = defineStore('config', {
  state: () => ({
    count: 120
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++
    },
  }

})