<template>
  <template v-if="!item.meta.hidden">
    <template v-if="item.children">
      <el-sub-menu :index="item.path">
        <template #title>
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <siderbarItem v-for="child in item.children" :key="child.path" :item="child"></siderbarItem>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.path" @click="routerPush(item.path)">
        <template #title>
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>

<script lang="ts" setup>
import siderbarItem from './siderbarItem.vue'
import {routerPush} from '@/utils/router'

const {item} = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss"></style>
