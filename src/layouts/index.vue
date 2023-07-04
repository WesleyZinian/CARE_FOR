<template>
  <div id="layouts">
    <div class="layouts-top">
      <navBar></navBar>
    </div>
    <div class="main-container">
      <siderBar></siderBar>
      <div class="content"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import navBar from './components/navBar.vue';
import siderBar from './components/siderBar/index.vue'
import { configStore } from '@/store/config';
const config = configStore()
const changeSiderBar = () => {
  config.expandSiderBar()
}
const arr: Array<number> = []
</script>
<style lang="scss">
@import url('@/style/layouts.scss');
</style>
