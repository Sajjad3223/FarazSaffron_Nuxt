<template>
  <main class="w-screen h-screen overflow-hidden relative grid place-items-center">
    <Head>
      <Title>به زودی برمیگردیم ...</Title>
    </Head>
    <img src="~/assets/images/orange.jpg" alt="orange" class="absolute h-screen w-full object-cover lg:inset-0 aspect-video  md:-top-1/4">
    <div class="absolute inset-0 z-10 bg-gradient-to-b from-black/70 to-black-10"></div>
    
    <div class="relative z-20 text-white flex flex-col items-center -mt-72 xl:-mt-96 lg:-translate-y-16" style="font-family: 'Epic Ravi'">
      <img src="~/assets/images/gp-white.png" alt="" class="max-w-16 lg:max-w-24 mb-24 lg:mb-24">
      <strong class="text-2xl lg:text-5xl" style="font-family: 'Epic Ravi Medium','Vazir FD' !important;">به زودی برمیگردیم</strong>
      <span class="text-xs lg:text-2xl font-light opacity-70 mt-2 lg:mt-8" style="font-family: 'Epic Ravi Regular','Vazir FD' !important;">در دست ساخت توسط تیم جــی پــی</span>
    </div>
  </main>
<!--  <main class="h-screen container flex flex-col items-center justify-center m-auto space-y-16 -translate-y-16">
    <Head>
      <Title>به زودی برمیگردیم ...</Title>
    </Head>
    <div class="w-full overflow-visible flex items-center">
      <div class="h-px bg-[#D8D8D8] w-full flex items-center justify-center"></div>
      <img src="~/assets/images/gp-orange.png" alt="gp orange" class="w-[130px] mx-12">
      <div class="h-px bg-[#D8D8D8] w-full overflow-visible flex items-center justify-center"></div>
    </div>
    <div class="w-full grid grid-cols-2 gap-4 items-center">
      <div class="flex flex-col items-start ">
        <strong class="text-7xl flex items-center space-x-2 space-x-reverse" >
          <span class="relative after:w-full after:h-1.5 after:rounded-full after:absolute after:inset-x-0 after:-bottom-6 after:bg-[#D8D8D8]" style="font-family: 'Epic Ravi Black' !important;" >به</span>
          <span class="relative after:w-full after:h-1.5 after:rounded-full after:absolute after:inset-x-0 after:-bottom-6 after:bg-brandOrange " style="font-family: 'Epic Ravi Black' !important;" >زودی</span>
          <span class="pb-2 border-b-transparent border-b-4" style="font-family: 'Epic Ravi Black' !important;" >...</span>
        </strong>
        <p class="text-3xl mt-16 font-normal opacity-70 leading-relaxed font-bold" style="font-family: 'Epic Ravi' !important;">
          تیم جی پی در حال توسعه این سایت می باشد <br> و در طی چند روز آینده در دسترس خواهد بود.
        </p>
        <a href="https://farazsaffron.com" target="_blank" class="bg-brandOrange p-6 rounded-2xl flex items-center space-x-4 space-x-reverse text-white mt-24 justify-center text-2xl tracking-wider w-1/2" >
          <span style="font-family: 'Epic Ravi medium' !important;">بازدید از سایت فراز زعفران</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-150">
            <path d="M11.1667 16.375L7 12M7 12L11.1667 7.625M7 12H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <img src="~/assets/images/Maintenance.svg" alt="Maintenance" class="w-full">
    </div>
  </main>-->
</template>

<script setup lang="ts">
definePageMeta({
  layout: ''
})
</script>

<style scoped>

</style>