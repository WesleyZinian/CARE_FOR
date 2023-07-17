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
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
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
