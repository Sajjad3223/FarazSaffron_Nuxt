<template>
  <div class="w-full relative rounded-2xl overflow-hidden">
    <GPCarousel ref="carousel" :items-to-show="1" class="rounded-xl overflow-hidden imagesCarousel">
      <GPSlide v-for="i in 4" :key="i">
        <NuxtLink to="/market" class="w-full shrink-0 relative">
          <img src="~/assets/images/banner.png" alt="banner" class="w-full">
          <span class="absolute right-4 top-4 bg-gray-200 rounded-full w-6 h-6 grid place-items-center pt-0.5">{{ i }}</span>
        </NuxtLink>
      </GPSlide>
    </GPCarousel>

    <div class="absolute left-14 bottom-9 flex items-center gap-2">
      <button class="w-8 h-8 rounded-md border border-[#EBEBEB] hover:bg-[#EBEBEB] text-[#EBEBEB] transition-colors duration-200 hover:text-black grid place-items-center"
              @click="nextSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="w-8 h-8 rounded-md border border-[#EBEBEB] hover:bg-[#EBEBEB] text-[#EBEBEB] transition-colors duration-200 hover:text-black grid place-items-center"
              @click="prevSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 17L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

const carousel = ref();

const nextSlide = ()=>{
  carousel.value.next();
}
const prevSlide = ()=>{
  carousel.value.prev();
}

</script>

<style>
.imagesCarousel ol{
  padding: 0 !important;
}
</style>