
<template >
  <div>
    <div class="absolute right-0 left-0 top-0 -z-10 h-[60px] bg-brandOrange flex items-center justify-center text-white text-4xl space-x-8 space-x-reverse">
      <img src="~/assets/images/en-GP-filled-white.png" alt="logo" class="h-1/2">
      <strong class="font-estedad">
        بخرید، تست کنید، اگه دوست نداشتید مرجوع کنید
      </strong>
      <img src="~/assets/images/en-GP-filled-white.png" alt="logo" class="h-1/2">
    </div>
    <div class="flex items-start py-4 mt-[60px] h-[110px]">
      <div class="absolute top-[60px] h-[110px] left-0 right-0 bg-[#FFF1DA] -z-[1] border-b"></div>
      <div class="w-full flex flex-col items-stretch space-x-2 space-x-reverse space-y-6">
        <div class="w-full flex items-center">
          <div class="flex items-center flex-1">
            <img src="~/assets/images/gp-flower-cuted.png" alt="faraz saffron logo" class="h-[30px] rounded-full ml-8">
            <form class="search relative flex items-center w-1/2">
              <input type="search" class="w-full rounded-lg -ml-4 py-2 px-4 pr-12 outline-none border-none text-[14px]" placeholder="دنبال چه محصولی هستید؟">
              <span class="absolute right-3 text-black/50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" fill="currentColor"/>
                  <path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" fill="currentColor"/>
                </svg>
              </span>
              <button class="hidden bg-danger p-3 rounded-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" fill="white"/>
                  <path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" fill="white"/>
                </svg>
              </button>
            </form>
          </div>
          <div class="flex items-center space-x-4 space-x-reverse">
            <div class="user flex items-center space-x-reverse space-x-3 border-2 border-black/50 rounded-lg p-1 px-2">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
                <path d="M12 17L7 12M7 12L12 7M7 12L21 12" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5C17.3713 5 17.869 4.36871 17.6223 3.74865C16.4518 0.806956 14.0185 -1.60332e-07 9.29426 -3.66838e-07C1.6405 -7.01394e-07 8.19234e-05 2.118 8.14915e-05 12C8.10595e-05 21.882 1.6405 24 9.29426 24C14.0185 24 16.4518 23.193 17.6223 20.2514C17.869 19.6313 17.3713 19 16.704 19C16.2515 19 15.8634 19.3009 15.6788 19.714C15.5388 20.0273 15.3879 20.2776 15.2303 20.4811C14.5039 21.4189 13.1179 22 9.29426 22C5.47057 22 4.08458 21.4189 3.35821 20.4811C2.95275 19.9576 2.59127 19.1238 2.347 17.7047C2.10283 16.2861 2.00008 14.436 2.00008 12C2.00008 9.56404 2.10283 7.71385 2.347 6.2953C2.59127 4.87622 2.95275 4.04241 3.35821 3.51891C4.08459 2.58107 5.47057 2 9.29426 2C13.1179 2 14.5039 2.58107 15.2303 3.51891C15.3879 3.72237 15.5388 3.97269 15.6788 4.28602C15.8634 4.69912 16.2515 5 16.704 5Z" fill="#212135"/>
              </svg>
              <nuxt-link to="auth" class="text-sm opacity-70">
                ورود | ثبت نام
              </nuxt-link>
            </div>

            <div class="w-px h-10 bg-black opacity-30"></div>

            <div class="user flex items-center flex-col space-y-2 text-black">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="9.26315" cy="20.1804" rx="1.81955" ry="1.81955" fill="#212135"/>
                <ellipse cx="15.3283" cy="20.1804" rx="1.81955" ry="1.81955" fill="#212135"/>
                <path d="M1.04761 1.04761C2.89111 1.96936 3.8045 2.77516 3.8045 5.01754M3.8045 5.01754C3.8045 14.1153 6.23057 15.9348 12.2957 15.9348C18.3609 15.9348 20.787 14.1153 20.787 6.83708C20.787 5.81565 20.1804 5.01754 18.9674 5.01754C17.7544 5.01754 7.845 5.01754 3.8045 5.01754Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-between">
          <ul class="links text-black flex items-center space-x-12 space-x-reverse text-sm font-light">
            <li class="active">
              <NuxtLink to="/" >خانه</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market" >محصولات</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blogs" >مقالات</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/aboutUs" >درباره ما</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contactus" >تماس با ما</NuxtLink>
            </li>
          </ul>
          <div>
            <div class="flex items-center">
              <strong class="ml-4">
                <a href="tel:05152223456">
                  051-52223456
                </a>
              </strong>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-60">
                <path d="M3.63002 1.33045C2.67756 2.1471 2.14425 3.29851 2.02552 4.71044C0.384279 4.88819 0 5.66149 0 7.99996C0 10.327 0.380539 11.1042 2.00159 11.2868C2.00054 11.3022 2 11.3177 2 11.3333C2 13.1743 3.49248 14.6666 5.3334 14.6666H6C6.36819 14.6666 6.66667 14.3682 6.66667 14C6.66667 13.6318 6.36819 13.3333 6 13.3333H5.3334C4.22881 13.3333 3.33333 12.4378 3.33333 11.3333L3.33332 11.3293C5.51877 11.2737 6 10.6169 6 7.99996C6 5.3972 5.52395 4.73339 3.36859 4.67159C3.48594 3.61941 3.89062 2.86335 4.4979 2.34266C5.24282 1.70396 6.39237 1.33335 7.97787 1.33333C9.56493 1.33332 10.7273 1.70038 11.4837 2.33935C12.0996 2.85964 12.5117 3.61573 12.631 4.6716C10.476 4.73348 10 5.39737 10 7.99996C10 10.745 10.5295 11.3333 13 11.3333C15.4705 11.3333 16 10.745 16 7.99996C16 5.66136 15.6157 4.88811 13.9742 4.71041C13.8534 3.28825 13.3082 2.13524 12.3441 1.3208C11.2616 0.406371 9.74626 -1.87549e-05 7.97785 6.49228e-10C6.20788 1.87562e-05 4.70183 0.411471 3.63002 1.33045Z" fill="#212135"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.active{
  @apply relative after:w-full after:left-0 after:right-0 after:-bottom-2 after:rounded-t-full after:absolute after:h-1 after:bg-brandOrange font-bold;
}
</style>