<template>
  <div :class="['badge',{'badge-square':isSquare},
              `badge-${color}`,`text-${size}`,`text-${foreColor}`]">
    <slot/>
  </div >
</template>

<script setup lang="ts">

const props = defineProps<{
  color:'danger'|'warning'|'primary'|'brandOrange'|'secondary',
  size:'xs'|'sm'|'base'|'lg'|'xl',
  foreColor?:string,
  isSquare?:boolean
}>()

</script>

<style scoped lang="scss">

/* Badges */
.badge {
  @apply grid place-items-center rounded-full px-3 py-[2px] w-max;

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