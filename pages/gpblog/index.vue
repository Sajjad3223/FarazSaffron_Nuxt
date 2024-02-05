
<template>

  <Head>
    <Title>مقالات جی پی</Title>
  </Head>

  <div class="flex flex-col mt-12">
    <h2 class="font-black text-3xl">
      مقالات جی پی
    </h2>
    <div class="flex space-x-4 space-x-reverse mt-12">
      <div class="flex-1">
        <form class="flex items-stretch space-x-2 space-x-reverse">
          <input type="text" class="bg-bgWhite border rounded-lg p-4 flex-1 " placeholder="به دنبال چه مقاله ای هستید؟ ">
          <button class="w-1/5 bg-primary text-white h-auto rounded-lg text-lg flex items-center justify-center space-x-2 space-x-reverse" >
            <span>جستجو</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 22L20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </form>
        <hr class="my-4">
        <ul class="grid grid-cols-3 gap-4">
          <li class="flex flex-col bg-bgWhite rounded-xl drop-shadow overflow-hidden" v-for="i in 10" :key="i">
            <NuxtLink to="/gpblog/post">
              <img src="~/assets/images/blogBanner.jpg" alt="blog banner" class="w-full object-cover rounded-xl">
            </NuxtLink>
            <div class="p-4 flex flex-col">
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2 space-x-reverse text-sm opacity-70">
                  <div class="flex items-center space-x-1 space-x-reverse">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.6667 1.33325H5.33337C2.66671 1.33325 1.33337 2.66659 1.33337 5.33325V13.9999C1.33337 14.3666 1.63337 14.6666 2.00004 14.6666H10.6667C13.3334 14.6666 14.6667 13.3333 14.6667 10.6666V5.33325C14.6667 2.66659 13.3334 1.33325 10.6667 1.33325Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.66663 6.33325H11.3333" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.66663 9.6665H9.33329" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="text-xs">5</span>
                  </div>
                  <div class="flex items-center space-x-1 space-x-reverse">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.00002 13.5133C10.3534 13.5133 12.5467 12.1266 14.0734 9.72665C14.6734 8.78665 14.6734 7.20665 14.0734 6.26665C12.5467 3.86665 10.3534 2.47998 8.00002 2.47998C5.64668 2.47998 3.45335 3.86665 1.92668 6.26665C1.32668 7.20665 1.32668 8.78665 1.92668 9.72665C3.45335 12.1266 5.64668 13.5133 8.00002 13.5133Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="text-xs">27</span>
                  </div>
                </div>
                <time class="text-sm opacity-70">1402/08/01</time>
              </div>
              <NuxtLink to="/gpblog/post" class="text-xl text-brandOrange hover:underline underline-offset-4 my-4">
                زعفران در چه محیطی به عمل می‌آید؟
              </NuxtLink>
              <p class="text-sm font-light text-justify truncate ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-1/4 flex flex-col space-y-4">
        <div class="w-full p-4 border rounded-xl flex flex-col">
          <h4 class="text-lg font-bold">
            مقالات اخیر
          </h4>
          <hr class="my-3">
          <ul class="space-y-4">
            <li class="flex flex-col items-center pb-4 border-b">
              <NuxtLink to="/gpblog/post" class="w-1/2">
                <img src="~/assets/images/blogBanner.jpg" alt="blog banner" class="w-full aspect-square object-cover rounded-xl">
              </NuxtLink>
              <div class="flex items-center space-x-1 space-x-reverse opacity-50 mt-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2498 12C21.2498 17.108 17.1088 21.25 11.9998 21.25C6.8918 21.25 2.7498 17.108 2.7498 12C2.7498 6.891 6.8918 2.75 11.9998 2.75C17.1088 2.75 21.2498 6.891 21.2498 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.1907 12.7672L11.6607 12.6932V7.84619" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <time class="text-sm">1402/08/01</time>
              </div>
              <NuxtLink to="/gpblog/post" class=" font-bold text-brandOrange hover:underline underline-offset-4">
                زعفران در چه محیطی به عمل می‌آید؟
              </NuxtLink>
            </li>
            <li class="flex items-center overflow-hidden " v-for="i in 3" :key="i">
              <NuxtLink to="/gpblog/post" class="w-1/5">
                <img src="~/assets/images/blogBanner.jpg" alt="blog banner" class="w-full aspect-square object-cover rounded-xl">
              </NuxtLink>
              <div class="flex-1 p-1 px-2 flex flex-col space-y-1 overflow-hidden">
                <NuxtLink to="/gpblog/post" class="text-sm font-bold text-brandOrange hover:underline underline-offset-4">
                  زعفران در چه محیطی به عمل می‌آید؟
                </NuxtLink>
                <div class="flex items-center space-x-1 space-x-reverse opacity-50">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2498 12C21.2498 17.108 17.1088 21.25 11.9998 21.25C6.8918 21.25 2.7498 17.108 2.7498 12C2.7498 6.891 6.8918 2.75 11.9998 2.75C17.1088 2.75 21.2498 6.891 21.2498 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.1907 12.7672L11.6607 12.6932V7.84619" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <time class="text-xs">1402/08/01</time>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="w-full p-4 border rounded-xl flex flex-col">
          <h4 class="text-lg font-bold">
            دسته بندی ها
          </h4>
          <hr class="my-3">
          <ul class="space-y-6 list-disc mr-6">
            <li class="font-light space-y-2" v-for="x in 3" :key="x">
              <span>زعفران (5)</span>
              <ul class="space-y-3 list-disc mr-6">
                <li class="font-light text-sm" v-for="i in 3" :key="i">
                  زعفران (3)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>