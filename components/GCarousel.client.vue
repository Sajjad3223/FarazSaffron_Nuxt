<template>
  <div class="w-full relative rounded-2xl overflow-hidden">

    <Swiper :modules="[SwiperAutoplay]" dir="rtl"
        :slides-per-view="1" loop :space-between="20"
        class="rounded-xl overflow-hidden imagesCarousel" :autoplay="{
          delay:5000
        }">
      <SwiperSlide v-for="b in banners.sort((a,b)=>a.order - b.order)" :key="b.id">
        <NuxtLink :to="b.url" class="w-full shrink-0 relative">
          <img :src="`${SITE_URL}/banners/${b.image.src}`"
               :alt="b.image.alt"
               class="w-full max-h-[68vh] object-cover">
        </NuxtLink>
      </SwiperSlide>
      <SwiperControls class="absolute left-8 bottom-8 z-20" />
    </Swiper>

  </div>
</template>
<script setup lang="ts">
import type {Banner} from "~/models/mainPage/dataTemplate";
import {SITE_URL} from "~/utilities/api.config";

const props = defineProps<{
  banners:Banner[]
}>();

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