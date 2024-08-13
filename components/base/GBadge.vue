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
  font-size: 12px;
  color: var(--primary-text);
  &:before{
    @apply absolute inset-0 z-0;
    content: '';
  }
  & > *{
    z-index: 1;
  }


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
  }

  &-danger {
    color: var(--danger-text);
    &:before{
      background-color: var(--danger);
      opacity: 0.2;
    }
  }

  &-secondary {
    color: var(--secondary-text);
    &:before{
      background-color: var(--secondary);
      opacity: 0.2;
    }
  }

  &-success {
    color: var(--success-text);
    &:before{
      background-color: var(--success);
      opacity: 0.2;
    }
  }

  &-info {
    color: var(--info-text);
    &:before{
      background-color: var(--info);
      opacity: 0.2;
    }
  }

  &-warning {
    color: var(--warning-text);
    &:before{
      background-color: var(--warning);
      opacity: 0.2;
    }
  }
}

</style>