
<template>

  <Head>
    <Title>مقالات جی پی</Title>
  </Head>

  <div class="flex flex-col mt-12 mx-6 lg:mx-0">
    <h2 class="font-black dark:text-white text-3xl">
      مقالات جی پی
    </h2>
    <div class="flex flex-col lg:flex-row lg:space-x-4 lg:space-x-reverse mt-12">
      <div class="flex-1">
        <form class="flex items-stretch space-x-2 space-x-reverse">
          <base-f-input name="search" id="search" place-holder="به دنبال چه مقاله ای هستید؟" :py="3">
            <template v-slot:inputIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" fill="currentColor"/>
                <path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" fill="currentColor"/>
              </svg>
            </template>
          </base-f-input>
<!--          <input type="text" class="bg-bgWhite border rounded-lg p-4 flex-1 " placeholder="به دنبال چه مقاله ای هستید؟ ">-->
          <div class="w-1/5">
            <base-f-button color="primary" w-full h-full custom-class="font-bold" type="submit">
              <span>جستجو</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 22L20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </base-f-button>
          </div>
        </form>
        <hr class="my-4">
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li class="flex flex-col bg-bgWhite dark:bg-gray-800 dark:text-white rounded-xl drop-shadow overflow-hidden" v-for="i in 10" :key="i">
            <NuxtLink to="/gpblog/post">
              <img src="~/assets/images/blogBanner.jpg" alt="blog banner" class="w-full object-cover rounded-xl">
            </NuxtLink>
            <div class="p-4 flex flex-col">
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2 space-x-reverse text-sm opacity-70">
                  <div class="flex items-center space-x-1 space-x-reverse">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.6667 1.33325H5.33337C2.66671 1.33325 1.33337 2.66659 1.33337 5.33325V13.9999C1.33337 14.3666 1.63337 14.6666 2.00004 14.6666H10.6667C13.3334 14.6666 14.6667 13.3333 14.6667 10.6666V5.33325C14.6667 2.66659 13.3334 1.33325 10.6667 1.33325Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.66663 6.33325H11.3333" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.66663 9.6665H9.33329" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="text-xs">5</span>
                  </div>
                  <div class="flex items-center space-x-1 space-x-reverse">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M8.00002 13.5133C10.3534 13.5133 12.5467 12.1266 14.0734 9.72665C14.6734 8.78665 14.6734 7.20665 14.0734 6.26665C12.5467 3.86665 10.3534 2.47998 8.00002 2.47998C5.64668 2.47998 3.45335 3.86665 1.92668 6.26665C1.32668 7.20665 1.32668 8.78665 1.92668 9.72665C3.45335 12.1266 5.64668 13.5133 8.00002 13.5133Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
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
      <div class="w-full lg:w-1/4 mt-8 lg:mt-0 flex flex-col space-y-4">
        <div class="w-full p-4 border rounded-xl flex flex-col">
          <h4 class="text-lg dark:text-white font-bold">
            مقالات اخیر
          </h4>
          <hr class="my-3">
          <ul class="space-y-4">
            <li class="flex flex-col items-center pb-4 border-b">
              <NuxtLink to="/gpblog/post" class="w-1/2">
                <img src="~/assets/images/blogBanner.jpg" alt="blog banner" class="w-full aspect-square object-cover rounded-xl">
              </NuxtLink>
              <div class="flex items-center dark:text-white space-x-1 space-x-reverse opacity-50 mt-2">
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
            <li class="flex items-center overflow-hidden dark:text-white" v-for="i in 3" :key="i">
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
          <h4 class="text-lg dark:text-white font-bold">
            دسته بندی ها
          </h4>
          <hr class="my-3">
          <ul class="space-y-6 list-disc mr-6 dark:text-white">
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



<style scoped>

</style>