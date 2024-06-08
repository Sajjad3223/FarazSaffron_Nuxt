<script setup lang="ts">
const swiper = useSwiper();

</script>

<template>
  <div class="inset-0 flex flex-col items-center justify-between absolute z-10 pointer-events-none">
    <button @click.prevent="swiper.slidePrev(200)" class="pointer-events-auto w-full bg-white flex justify-center rounded-t-md" style="box-shadow: 0 3px 3px 0 rgba(0,0,0,0.15)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 14L12 9L17 14" stroke="#4A4A4A" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button @click.prevent="swiper.slideNext(200)" class="pointer-events-auto w-full bg-white flex justify-center rounded-b-md" style="box-shadow: 0 -3px 3px 0 rgba(0,0,0,0.15)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 10L12 15L7 10" stroke="#4A4A4A" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>

</template>
