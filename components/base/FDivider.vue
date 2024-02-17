<template>
  <div :class="['h-px w-full flex items-center justify-center opacity-50',color,`my-${verticalMargin}`]">
    <img src="~/assets/images/en-GP-filled.png" alt="gp" class="w-9 bg-bgWhite px-2" v-if="color != 'white' ">
    <img src="~/assets/images/en-GP-filled-white.png" alt="gp" class="w-9 bg-brandOrange px-2" v-else>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color:{
    type:String,
    default:'black'
  },
  verticalMargin:{
    type:String,
    required:false
  },
})
</script>

<style scoped>
.black{
  @apply bg-black/50;
}
.white{
  @apply bg-white/50;
}
.brand{
  @apply bg-brandOrange/50;
}
</style>