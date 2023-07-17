<template>
  <section id="layouts">
    <div class="layouts_header">
      <navBar></navBar>
    </div>
    <div class="main-container" :class="{ 'aside-hidden':config.getCollapse }">
      <siderBar></siderBar>
      <div class="content_warp">
        <div class="page_title">{{ route.currentRoute.value.meta.title }}</div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import navBar from './components/navBar.vue';
import siderBar from './components/siderBar/index.vue'
import {configStore} from "@/store/config";
import {useRouter} from 'vue-router'

const route = useRouter()
const config = configStore()

</script>
<style lang="scss">
@use '@/style/layouts.scss';
</style>
