<template>
  <div :class="['badge',{'badge-square':isSquare},
              `badge-${color}`,`text-${size}`,`text-${foreColor}`]">
    <slot/>
  </div >
</template>

<script setup lang="ts">

const props = defineProps<{
  color:'danger'|'warning'|'primary'|'info'|'secondary'|'success',
  size:'xs'|'sm'|'base'|'lg'|'xl',
  foreColor?:string,
  isSquare?:boolean
}>()

</script>

<style scoped lang="scss">

/* Badges */
.badge {
  @apply grid place-items-center rounded-full px-3 py-[2px] w-max relative overflow-hidden;
  &:before{
    @apply absolute inset-0 z-0;
    content: '';
  }
  & > *{
    z-index: 1;
  }

  font-size: 12px;

  &-square {
    padding: 0;
    width: 20px;
    height: 20px;
  }

  &-primary {
    &:before{
      background-color: var(--primary);
      opacity: 0.2;
    }
    color: var(--primary-text)
  }

  &-danger {
    &:before{
      background-color: var(--danger);
      opacity: 0.2;
    }
    color: var(--danger-text)
  }

  &-secondary {
    &:before{
      background-color: var(--secondary);
      opacity: 0.2;
    }
    color: var(--secondary-text)
  }

  &-success {
    &:before{
      background-color: var(--success);
      opacity: 0.2;
    }
    color: var(--success-text)
  }

  &-info {
    &:before{
      background-color: var(--info);
      opacity: 0.2;
    }
    color: var(--info-text)
  }

  &-warning {
    &:before{
      background-color: var(--warning);
      opacity: 0.2;
    }
    color: var(--warning-text)
  }
}

</style>