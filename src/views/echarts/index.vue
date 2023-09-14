<script lang="ts" setup>
import { ref } from 'vue';
import draggable from 'vuedraggable'
const myArray = ref<Array<any>>(['Item 1', 'Item 2', 'Item 3'])
const drag = ref<Boolean>(false)
</script>

<template>
  <div id="echarts">
    <draggable v-model="myArray" group="people" @start="drag = true" @end="drag = false" item-key="id">
      <template v-for="(ele, index) in myArray" :key="index" #item="{ ele }">
        <div class="halfDiv">{{ ele }}</div>
      </template>
    </draggable>

  </div>
</template>

<style lang="scss">
#echarts {
  width: 100%;
  height: 100%;
  .halfDiv {
    width: 200px;
    height: 400px;
    border-radius: 4px;
    display: inline-block;
  }

  .halfDiv:nth-child(odd) {
    background-color: aqua;
  }

  .halfDiv:nth-child(even) {
    background-color: aquamarine;
  }
}
</style>
