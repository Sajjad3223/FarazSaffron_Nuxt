<template>
<div class="flex gap-1 items-center">
  <strong :class="[`priceSize-${mobileSize} lg-priceSize-${size}`]">{{roundPrice(price).toLocaleString()}}</strong>
  <base-g-tooman/>
</div>
</template>

<script setup lang="ts">
import {roundPrice} from "~/utilities/priceUtils";

withDefaults(defineProps<{
  price:number,
  size?:'xs' | 'sm' | 'base' | 'lg' | 'xl',
  mobileSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}>(),{
  size:'lg',
  mobileSize:'sm'
});
</script>

<style scoped>
.priceSize-xs{
  @apply text-xs;
}
.priceSize-sm{
  @apply text-sm;
}
.priceSize-base{
  @apply text-base;
}
.priceSize-lg{
  @apply text-lg;
}
.priceSize-xl{
  @apply text-xl;
}

.lg-priceSize-xs{
  @apply text-xs;
}
.lg-priceSize-sm{
  @apply text-sm;
}
.lg-priceSize-base{
  @apply text-base;
}
.lg-priceSize-lg{
  @apply text-lg;
}
.lg-priceSize-xl{
  @apply text-xl;
}
</style>