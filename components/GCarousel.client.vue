<template>
  <div class="w-full relative overflow-hidden">

    <div class="hidden md:block">
      <Swiper :modules="[SwiperAutoplay]" dir="rtl"
              :slides-per-view="1" loop :space-between="20"
              class="overflow-hidden imagesCarousel" :autoplay="{
          delay:3000
        }">
        <SwiperSlide v-for="b in banners.sort((a,b)=>a.order - b.order)" :key="b.id">
          <NuxtLink :to="b.url" class="w-full shrink-0 relative">
            <img :src="`${SITE_URL}/banners/${b.image.src}`"
                 :alt="b.image.alt"
                 class="w-full  object-cover">
          </NuxtLink>
        </SwiperSlide>
        <SwiperControls class="absolute left-8 bottom-8 z-20" v-if="showArrows"/>
      </Swiper>
    </div>
    <div class="md:hidden ">
      <Swiper :modules="[SwiperAutoplay]" dir="rtl"
              :slides-per-view="1" loop :space-between="20"
              class="overflow-hidden imagesCarousel" :autoplay="{
          delay:3000
        }">
        <SwiperSlide>
          <NuxtLink class="w-full shrink-0 relative">
            <img src="~/assets/images/banners/img.png"

                 class="w-full object-cover">
          </NuxtLink>
        </SwiperSlide>
        <SwiperSlide>
          <NuxtLink class="w-full shrink-0 relative">
            <img src="~/assets/images/banners/img_1.png"

                 class="w-full object-cover">
          </NuxtLink>
        </SwiperSlide>
        <SwiperControls class="absolute left-8 bottom-8 z-20" v-if="showArrows"/>
      </Swiper>
    </div>

  </div>
</template>
<script setup lang="ts">
import type {Banner} from "~/models/mainPage/dataTemplate";
import {SITE_URL} from "~/utilities/api.config";
import {bool} from "yup";

const props = withDefaults(defineProps<{
  banners:Banner[],
  showArrows?:boolean
}>(),{
  showArrows:true
});

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