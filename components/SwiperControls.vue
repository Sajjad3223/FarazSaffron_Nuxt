<script setup lang="ts">
const swiper = useSwiper();

</script>

<template>
  <div class="flex items-center gap-2 mt-12 ">
    <button :class="['w-8 h-8 rounded-md border border-black/50 hover:bg-gray-200 text-black/50 hover:text-black transition-colors duration-200 grid place-items-center ']"
            @click="swiper.slidePrev(200)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button :class="['w-8 h-8 rounded-md border border-black/50 hover:bg-gray-200 text-black/50 hover:text-black transition-colors duration-200 grid place-items-center ']"
            @click="swiper.slideNext(200)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 17L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>
