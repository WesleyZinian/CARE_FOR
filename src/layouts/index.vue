<template>
  <section id="layouts">
    <div class="layouts_header">
      <navBar></navBar>
    </div>
    <div class="main-container">
      <siderBar></siderBar>
      <div class="content_warp">
        <div class="page_title">1111111111</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import navBar from './components/navBar.vue';
import siderBar from './components/siderBar/index.vue'
import {configStore} from '@/store/config';

const config = configStore()
const changeSiderBar = () => {
  config.expandSiderBar()
}
const arr: Array<number> = []
</script>
<style lang="scss">
@use '@/style/layouts.scss';
</style>
