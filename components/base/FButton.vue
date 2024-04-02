<template>
  <button v-if="!isLink" :type="type" @click="emits('clicked')"
          :class="['button',{'button-outline':bordered}, `textColor-${textColor}`,!bordered ? `button-${color}` : `button-${color}-outline`,{'w-full':wFull},{'h-full':hFull},`px-${px} py-${py}`,customClass]">
    <slot v-if="!loading"></slot>
    <span v-else class="animate-spin">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px"
           viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
           style="display:block;background-color:transparent;"><circle
          cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="35"
          stroke-dasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"
          style="transform:matrix(1, 0, 0, 1, 0, 0);"></circle>
      </svg>
    </span>
  </button>
  <NuxtLink v-else :to="to"
            :class="['button',{'button-outline':bordered},!bordered ? `button-${color}` : `button-${color}-outline`,{'w-full':wFull},{'h-full':hFull},`textColor-${textColor}`,`px-${px} py-${py}`,customClass]">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">

const props = defineProps({
  isLink: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    required: false
  },
  type: {
    type: String,
    default: 'button'
  },
  color: {
    type: String,
    required: true
  },
  textColor:{
    type:String,
    required:false,
    default:'inherit'
  },
  wFull: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  hFull: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    required: false,
  },
  px:{
    type:String,
    default:'4'
  },
  py:{
    type:String,
    default:'2'
  },
})

const emits = defineEmits(['clicked']);

</script>

<style>
.button {
  @apply flex items-center space-x-2 space-x-reverse text-white rounded-lg justify-center hover:drop-shadow transition duration-75 active:scale-90;
}

.button-primary {
  @apply bg-primary text-white;
  color:white !important;
}

.button-brand {
  @apply bg-brandOrange text-white;
  color:white !important;
}

.button-warning {
  @apply bg-warning;
}

.button-secondary {
  @apply bg-secondary;
}

.button-danger {
  @apply bg-danger;
}

.button-white {
  @apply bg-bgWhite text-black;
}

.button-transparent {
  @apply bg-transparent;
}

.button-outline {
  @apply border text-black;
}

.button-primary-outline {
  @apply border-primary;
}

.button-brand-outline {
  @apply border-brandOrange;
}

.button-warning-outline {
  @apply border-warning;
}

.button-secondary-outline {
  @apply border-secondary;
}

.button-danger-outline {
  @apply border-danger;
}

.button-white-outline {
  @apply border-bgWhite;
}

.button-transparent-outline {
  @apply border-transparent text-black;
}

.textColor-black {
  @apply text-black;
}

.textColor-primary {
  @apply text-indigo-600;
}

.textColor-brand {
  @apply text-brandOrange;
}

.textColor-warning {
  @apply text-warning;
}

.textColor-secondary {
  @apply text-secondary;
}

.textColor-danger {
  @apply text-danger;
}

.textColor-white {
  @apply text-bgWhite;
}
.textColor-inherit {
  @apply text-inherit;
}
.textColor-responsive {
  @apply text-black dark:text-white;
}

</style>