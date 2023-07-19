<template>
  <div class="siderBar">
    <div class="siderBar-title">
      <span class="icon_warp" @click="operationSider">
            <el-icon><Fold/></el-icon>
      </span>
    </div>
    <div class="siderBar__body">
      <el-menu :default-active="route.currentRoute.value.path" class="layouts-siderBar-menu"
               :collapse="config.getCollapse">
        <siderbar-item :item="route" v-for="(route, index) in app.getRoutes" :key="`route_${index}`"></siderbar-item>
      </el-menu>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {configStore} from "@/store/config";
import {appStore} from "@/store/app";
import {useRouter} from 'vue-router'
import SiderbarItem from "@/layouts/components/siderBar/siderbarItem.vue";

const app = appStore()
const config = configStore()
const route = useRouter()
const operationSider = () => {
  config.expandSiderBar()
}
</script>
