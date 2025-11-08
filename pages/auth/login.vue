<script setup lang="ts">
definePageMeta({
  layout:'mobile-layout-just-footer'
})
</script>

<template>
  <div class="flex flex-col items-center w-full py-10 h-[50svh]">
    <Head>
      <Title>ورود به حساب</Title>
    </Head>
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
    <main class="w-[90%] flex flex-col gap-4 mt-20">
<!--      <auth-login />-->
      <div class="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12H14.88" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.6499 8.6499L15.9999 11.9999L12.6499 15.3499" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <strong class="text-2xl">ورود به حساب</strong>
      </div>
      <auth-container />
    </main>
  </div>
</template>
