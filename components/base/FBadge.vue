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
  @apply bg-warning/20 border-warning text-black;
}
.badge-danger{
  @apply bg-danger/20 border-danger text-danger;
}
.badge-primary{
  @apply bg-primary/20 border-primary text-primary;
}
.badge-brandOrange{
  @apply bg-brandOrange/20 border-brandOrange text-brandOrange;
}
.badge-secondary{
  @apply bg-secondary/20 border-secondary text-secondary;
}

.badge-outline{
  @apply border;
  background-color: transparent !important;
  color: black;
}

</style>