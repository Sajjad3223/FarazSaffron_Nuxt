<template>
<div :class="['badge',
              `badge-${color}`,`text-${size}`,`text-${foreColor}`]">
  <slot/>
</div>
</template>

<script setup lang="ts">

const props = defineProps<{
  color:{
    type:String,
    default:'danger'|'warning'|'primary'|'brandOrange'|'secondary',
  },
  size:{
    type:String,
    default:'xs'|'sm'|'base'|'lg'|'xl',
  },
  foreColor:{
    type:String,
    default:'white'
  },
}>()

</script>

<style scoped>

.badge{
  @apply px-3 rounded-full w-max;
}

.badge-warning{
  @apply bg-warning text-black;
}
.badge-danger{
  @apply bg-danger text-white;
}
.badge-primary{
  @apply bg-primary text-white;
}
.badge-brandOrange{
  @apply bg-brandOrange text-white;
}
.badge-secondary{
  @apply bg-secondary text-white;
}

</style>