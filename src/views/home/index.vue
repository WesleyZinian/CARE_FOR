<template>
  <div>
    11111111111
    {{ panduan }}{{ obj.pa }}
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const panduan = ref(false)
const obj = reactive({
  pa: 1123
})
</script>