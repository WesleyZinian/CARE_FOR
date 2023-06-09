<template>
  <div id="layouts">
    <div class="layouts-top">
      <navBar></navBar>
    </div>
    <div class="main-container">
      <siderBar></siderBar>
      <el-button type="primary" @click="changeSiderBar">Primary</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import navBar from './components/navBar.vue';
import siderBar from './components/siderBar/index.vue'
import { configStore } from '@/store/modules/config';
const config = configStore()
const changeSiderBar = () => {
  config.expandSiderBar()
}
</script>
<style lang="scss">
@import url('@/style/layouts.scss');
</style>