<script setup lang="ts">
const props = defineProps<{
  color:{
    type:String,
    default:'primary'|'brand'|'warning'|'danger'|'black',
  },
  transparent:{
    type:Boolean,
    default:false,
  },
  outline:{
    type:Boolean,
    default:false
  },
}>();
</script>

<template>
  <div :class="['alert',`alert-${color}`,{'alert-transparent':transparent},{'alert-bordered':outline}]">
    <span class="opacity-50">
      <slot name="icon"></slot>
    </span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.alert{
  @apply p-3 text-sm font-light rounded-lg dark:bg-gray-800 dark:text-blue-400 flex items-center space-x-2 space-x-reverse;
}

.alert-primary{
  @apply text-primary border-primary bg-primary/10;
}
.alert-brand{
  @apply text-brandOrange border-brandOrange bg-brandOrange/10;
}
.alert-warning{
  @apply text-black/80 border-warning bg-warning/10;
}
.alert-danger{
  @apply text-danger border-danger bg-danger/10;
}
.alert-transparent{
  @apply text-black bg-transparent;
}
.alert-black{
  @apply text-gray-800 border-gray-800 bg-gray-50;
}

.alert-bordered{
  @apply border;
  background-color: transparent !important;
}
</style>