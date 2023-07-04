<template>
  <div id="siderbarItem" class="siderbarItem" v-if="item.hidden">
    <template v-if="item.children">
      <el-sub-menu :index="item!.meta!.title">
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
      <router-link :to="item.path">
        <el-menu-item :index="item.meta.title">
          <template #title>
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script lang="ts" setup>
import siderbarItem from './siderbarItem.vue'
const { item } = defineProps({
  item: {
    type: Object,
    required: true,
  }
})
</script>

<style lang="scss"></style>
