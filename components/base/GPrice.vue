<template>
<div class="flex gap-1 items-center">
  <strong class="text-xl">{{price.toLocaleString()}}</strong>
  <base-g-tooman/>
</div>
</template>

<script setup lang="ts">
defineProps<{
  price:number
}>();
</script>