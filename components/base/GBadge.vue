<template>
  <div :class="['badge',{'badge-square':isSquare}
              `badge-${color}`,`text-${size}`,`text-${foreColor}`]">
    <slot/>
  </div >
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
  isSquare:{
    type:boolean,
    default:false
  }
}>()

</script>

<style scoped>

/* Badges */
.badge {
  @apply grid place-items-center rounded-full px-2;

  font-size: 12px;

  &-square {
    padding: 0;
    width: 20px;
    height: 20px;
  }

  &-primary {
    background-color: var(--primary);
    color: var(--primary-text)
  }

  &-danger {
    background-color: var(--danger);
    color: var(--danger-text)
  }

  &-secondary {
    background-color: var(--secondary);
    color: var(--secondary-text)
  }

  &-success {
    background-color: var(--success);
    color: var(--success-text)
  }

  &-info {
    background-color: var(--info);
    color: var(--info-text)
  }

  &-warning {
    background-color: var(--warning);
    color: var(--warning-text)
  }
}

</style>