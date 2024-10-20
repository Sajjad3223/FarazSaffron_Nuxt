<script setup lang="ts">
const props = defineProps<{
  src:string,
  placeholder:string,
  class:string,
  alt?:string
}>()
</script>

<template>
  <img :src="src" :alt="alt" :class="props.class">
</template>

<style scoped>

</style>