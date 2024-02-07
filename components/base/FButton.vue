<template>
  <button v-if="!isLink" :type="type" :class="['button',{'button-outline':bordered},!bordered ? `button-${color}` : `button-${color}-outline`,{'w-full':wFull},{'h-full':hFull},customClass]">
    <slot></slot>
  </button>
  <NuxtLink v-else :to="to">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">

const props = defineProps({
  isLink:{
    type:Boolean,
    default:false
  },
  to:{
    type:String,
    required:false
  },
  type:{
    type:String,
    default:'button'
  },
  color:{
    type:String,
    required:true
  },
  wFull:{
    type:Boolean,
    default:false,
  },
  hFull:{
    type:Boolean,
    default:false,
  },
  bordered:{
    type:Boolean,
    default:false,
  },
  customClass:{
    type:String,
    required:false,
  }
})
</script>

<style>
.button{
  @apply px-4 py-2 flex items-center space-x-2 space-x-reverse text-white rounded-lg justify-center hover:drop-shadow transition duration-75 active:scale-90;
}
.button-primary{
  @apply bg-primary;
}
.button-brand{
  @apply bg-brandOrange;
}
.button-warning{
  @apply bg-warning text-black;
}
.button-secondary{
  @apply bg-secondary;
}
.button-danger{
  @apply bg-danger;
}
.button-white{
  @apply bg-bgWhite text-black;
}
.button-transparent{
  @apply bg-transparent text-black;
}
.button-outline{
  @apply border text-black;
}
.button-primary-outline{
  @apply border-primary;
}
.button-brand-outline{
  @apply border-brandOrange;
}
.button-warning-outline{
  @apply border-warning;
}
.button-secondary-outline{
  @apply border-secondary;
}
.button-danger-outline{
  @apply border-danger;
}
.button-white-outline{
  @apply border-bgWhite;
}
.button-transparent-outline{
  @apply border-transparent text-black;
}
</style>