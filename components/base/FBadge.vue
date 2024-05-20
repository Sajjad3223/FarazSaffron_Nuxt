<template>
<div :class="['badge',
              `badge-${color}`,`text-${size}`,`text-${foreColor}`,{'badge-outline':outline}]">
  <slot/>
</div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  color:'danger'|'warning'|'primary'|'brandOrange'|'secondary',
  size?:'xs'|'sm'|'base'|'lg'|'xl',
  foreColor?:string,
  outline?:boolean
}>(),{
  color:'primary',
  size:'sm',
  foreColor:'white',
  outline:false
})

</script>

<style scoped>

.badge{
  @apply px-3 rounded-full w-max;
}

.badge-warning{
  @apply bg-warning border-warning text-black;
}
.badge-danger{
  @apply bg-danger border-danger text-white;
}
.badge-primary{
  @apply bg-primary border-primary text-white;
}
.badge-brandOrange{
  @apply bg-brandOrange border-brandOrange text-white;
}
.badge-secondary{
  @apply bg-secondary border-secondary text-white;
}

.badge-outline{
  @apply border;
  background-color: transparent !important;
  color: black;
}

</style>