<script setup lang="ts">
const swiper = useSwiper();

</script>

<template>
  <div class="mx-auto flex gap-1 mt-4">
    <button v-for="i in swiper.slides.length"
            :class="['h-2 text-[5px] rounded-full transition-all duration-200',
            swiper.activeIndex + 1 == i ? 'w-6 bg-brandOrange' : 'w-2 bg-brandOrange/20']"
            @click="swiper.slideTo(i,200,false)">
    </button>
  </div>
</template>
