<template>
  <div :class="['h-px w-full flex items-center justify-center opacity-50',color,`my-${verticalMargin}`]" v-if="logoDivider">
    <img src="~/assets/images/en-GP-filled.png" alt="gp" class="w-9 bg-bgWhite px-2" v-if="color != 'white' ">
    <img src="~/assets/images/en-GP-filled-white.png" alt="gp" class="w-9 bg-brandOrange px-2" v-else>
  </div>
  <div class="flex items-center w-full my-4" v-else>
    <span class="dark:text-white font-thin">{{ title }}</span>
    <div class="h-px flex-1 bg-white mx-4"></div>
    <slot name="left"></slot>
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
  logoDivider:{
    type:Boolean,
    default:true
  },
  title:{
    type:String,
    required:false
  }
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