<template>
  <div class="w-full relative rounded-2xl overflow-hidden">
<!--    <GPCarousel ref="carousel" :items-to-show="1" class="rounded-xl overflow-hidden imagesCarousel" :autoplay="5000" wrap-around>
      <GPSlide v-for="i in 1" :key="i">
        <NuxtLink to="/market" class="w-full shrink-0 relative">
          <img src="~/assets/images/banner1.png" alt="banner" class="w-full">
        </NuxtLink>
      </GPSlide>
      <GPSlide v-for="i in 1" :key="i">
        <NuxtLink to="/market" class="w-full shrink-0 relative">
          <img src="~/assets/images/banner2.png" alt="banner" class="w-full">
        </NuxtLink>
      </GPSlide>
    </GPCarousel>-->
    <Swiper :modules="[SwiperAutoplay]" dir="rtl"
        :slides-per-view="1" loop :space-between="20"
        class="rounded-xl overflow-hidden imagesCarousel" :autoplay="{
          delay:5000
        }">
<!--      <SwiperSlide >
        <NuxtLink to="/market" class="w-full shrink-0 relative">
          <img src="~/assets/images/03.png" alt="banner" class="w-full max-h-[68vh] object-cover">
        </NuxtLink>
      </SwiperSlide>
      <SwiperSlide >
        <NuxtLink to="/market" class="w-full shrink-0 relative">
          <img src="~/assets/images/04.jpg" alt="banner" class="w-full max-h-[68vh] object-cover">
        </NuxtLink>
      </SwiperSlide>-->
      <SwiperSlide >
        <NuxtLink to="/market" class="w-full shrink-0 relative">
          <img src="~/assets/images/05.jpg" alt="banner" class="w-full max-h-[68vh] object-cover">
        </NuxtLink>
      </SwiperSlide>
      <SwiperControls class="absolute left-8 bottom-8 z-20" />
<!--      <div class=" h-2 bg-white absolute inset-x-12 bottom-4 z-20 rounded-full origin-right progress-animate"></div>-->
    </Swiper>

  </div>
</template>
<script setup lang="ts">
</script>

<style>
.progress-animate{
  animation: progress 5s linear ;
}

@keyframes progress {
  0%{
    scale: 0;
  }
  100%{
    scale: 100%;
  }
}
</style>