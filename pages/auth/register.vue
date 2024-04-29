<script setup lang="ts">
definePageMeta({
  layout:'mobile-layout-just-footer'
})
</script>

<template>
  <div >
    <header class="w-full h-[80px] px-4 flex items-center justify-center relative">
      <NuxtLink to="/" class="absolute right-7">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.8" d="M1 13L6 7L1 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
      <NuxtLink to="/" class="flex items-center gap-4">
        <div class="w-max relative">
          <div class="w-[25px] h-[25px] rounded-full bg-brandOrange grid place-items-center "
               style="box-shadow: 0 0 15px 0 #F0462380;">
            <img src="~/assets/images/gp-alone-white.png" alt="gp alone white" class="w-4">
          </div>
        </div>
        <div class="flex flex-col items-start">
          <strong>زعفران <span class="text-brandOrange">جــــــی پــــــی</span></strong>
        </div>
      </NuxtLink>
    </header>
    <main class="mx-4 mb-[90px] flex flex-col space-y-4">
      <auth-register />
    </main>
  </div>
</template>
