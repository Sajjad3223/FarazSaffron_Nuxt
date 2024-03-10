
<template >
  <header>
    <div class="hidden lg:flex absolute right-0 left-0 top-0 -z-10 h-[60px] bg-brandOrange items-center justify-center text-white text-4xl space-x-8 space-x-reverse">
      <img src="~/assets/images/en-GP-filled-white.png" alt="logo" class="h-1/2">
      <strong class="font-estedad text-2xl">
        بخرید، تست کنید، اگه دوست نداشتید مرجوع کنید
      </strong>
      <img src="~/assets/images/en-GP-filled-white.png" alt="logo" class="h-1/2">
    </div>
    <div class="lg:hidden absolute right-0 left-0 top-0 -z-10 h-[40px] bg-brandOrange flex items-center justify-center text-white text-4xl space-x-8 space-x-reverse">
      <img src="~/assets/images/en-GP-filled-white.png" alt="logo" class="h-1/2">
      <strong class="font-estedad text-xs">
        بخرید، تست کنید، اگه دوست نداشتید مرجوع کنید
      </strong>
      <img src="~/assets/images/en-GP-filled-white.png" alt="logo" class="h-1/2">
    </div>
    <div class="flex items-start py-4 mt-[40px] lg:mt-[60px] h-[70px] lg:h-[110px]">
      <div class="hidden lg:block absolute top-[60px] h-[110px] left-0 right-0 bg-[#FFF1DA] dark:bg-gray-800 -z-[1] border-b dark:border-gray-600"></div>
      <div class="lg:hidden absolute top-[40px] h-[70px] left-0 right-0 bg-[#FFF1DA] dark:bg-gray-800 -z-[1] border-b dark:border-gray-600"></div>
      <div class="hidden w-full lg:flex flex-col items-stretch space-x-2 space-x-reverse space-y-6">
        <div class="w-full flex items-center dark:text-white">
          <div class="flex items-center flex-1">
            <NuxtLink to="/">
              <img src="~/assets/images/gp-flower-cuted.png" alt="faraz saffron logo" class="h-[30px] rounded-full ml-8">
            </NuxtLink>
            <form class="search relative flex items-center w-1/2">
              <base-f-input type="search" place-holder="دنبال چه محصولی هستید؟" id="search" name="search" v-model="searchValue">
                <template v-slot:inputIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" fill="currentColor"/>
                    <path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" fill="currentColor"/>
                  </svg>
                </template>
              </base-f-input>
            </form>
          </div>
          <div class="flex items-center space-x-4 space-x-reverse">
            <div class="user flex items-center space-x-reverse space-x-3 border-2 border-black/50 dark:border-white/50 dark:text-white rounded-lg p-1 px-2" v-if="!authStore.isLoggedIn">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
                <path d="M12 17L7 12M7 12L12 7M7 12L21 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5C17.3713 5 17.869 4.36871 17.6223 3.74865C16.4518 0.806956 14.0185 -1.60332e-07 9.29426 -3.66838e-07C1.6405 -7.01394e-07 8.19234e-05 2.118 8.14915e-05 12C8.10595e-05 21.882 1.6405 24 9.29426 24C14.0185 24 16.4518 23.193 17.6223 20.2514C17.869 19.6313 17.3713 19 16.704 19C16.2515 19 15.8634 19.3009 15.6788 19.714C15.5388 20.0273 15.3879 20.2776 15.2303 20.4811C14.5039 21.4189 13.1179 22 9.29426 22C5.47057 22 4.08458 21.4189 3.35821 20.4811C2.95275 19.9576 2.59127 19.1238 2.347 17.7047C2.10283 16.2861 2.00008 14.436 2.00008 12C2.00008 9.56404 2.10283 7.71385 2.347 6.2953C2.59127 4.87622 2.95275 4.04241 3.35821 3.51891C4.08459 2.58107 5.47057 2 9.29426 2C13.1179 2 14.5039 2.58107 15.2303 3.51891C15.3879 3.72237 15.5388 3.97269 15.6788 4.28602C15.8634 4.69912 16.2515 5 16.704 5Z" fill="currentColor"/>
              </svg>
              <button class="text-sm opacity-70" @click="authStore.isLoginModalOpen = true">
                ورود | ثبت نام
              </button>
            </div>
            <div class="relative" v-else>
              <button class="flex items-end space-x-1 space-x-reverse relative" @click="showOptions = !showOptions">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="currentColor"/>
                  <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" fill="currentColor"/>
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.7">
                  <path d="M11.9485 5.45312H7.79512H4.05512C3.41512 5.45312 3.09512 6.22646 3.54845 6.67979L7.00179 10.1331C7.55512 10.6865 8.45512 10.6865 9.00845 10.1331L10.3218 8.81979L12.4618 6.67979C12.9085 6.22646 12.5885 5.45312 11.9485 5.45312Z" fill="currentColor"/>
                </svg>
              </button>
              <div class="absolute -bottom-4 right-0 border rounded-lg bg-bgWhite dark:bg-gray-700 dark:border-gray-600 drop-shadow p-2 px-4 w-max translate-x-1/2 translate-y-full" v-if="showOptions" >
                <ul class="text-sm font-light text-right text-black dark:text-white flex flex-col space-y-2">
                  <li>
                    <base-f-button is-link color="transparent" to="/profile">
                      حساب کاربری
                    </base-f-button>
                  </li>
                  <li>
                    <base-f-button is-link color="transparent" to="/profile/orders">سفارشات من</base-f-button>
                  </li>
                  <li>
                    <base-f-button is-link color="transparent" to="/profile/notification">
                      <span>پیام ها</span>
                      <base-f-badge color="danger" size="xs" >2</base-f-badge>
                    </base-f-button>
                  </li>
                  <li>
                    <base-f-button color="transparent">خروج</base-f-button>
                  </li>
                </ul>
              </div>
            </div>

            <div class="w-px h-10 bg-black opacity-30 dark:bg-white"></div>

            <NuxtLink class="flex items-center flex-col space-y-2 text-black relative dark:text-white" to="/checkout/cart">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="9.26315" cy="20.1804" rx="1.81955" ry="1.81955" fill="currentColor"/>
                <ellipse cx="15.3283" cy="20.1804" rx="1.81955" ry="1.81955" fill="currentColor"/>
                <path d="M1.04761 1.04761C2.89111 1.96936 3.8045 2.77516 3.8045 5.01754M3.8045 5.01754C3.8045 14.1153 6.23057 15.9348 12.2957 15.9348C18.3609 15.9348 20.787 14.1153 20.787 6.83708C20.787 5.81565 20.1804 5.01754 18.9674 5.01754C17.7544 5.01754 7.845 5.01754 3.8045 5.01754Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-xs bg-danger text-white rounded-full absolute -right-2 -top-4 w-4 h-4 grid place-items-center" v-if="cartStore.cartItemsCount !== 0">
                {{cartStore.cartItemsCount}}
              </span>
            </NuxtLink>
          </div>
        </div>
        <div class="w-full flex justify-between dark:text-white">
          <ul class="links text-black dark:text-white flex items-center space-x-12 space-x-reverse text-sm font-light">
            <li>
              <NuxtLink to="/" active-class="active">خانه</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market" active-class="active">محصولات</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/gpblog" active-class="active">مقالات</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/aboutUs" active-class="active">درباره ما</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contactus" active-class="active">تماس با ما</NuxtLink>
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
                <path d="M3.63002 1.33045C2.67756 2.1471 2.14425 3.29851 2.02552 4.71044C0.384279 4.88819 0 5.66149 0 7.99996C0 10.327 0.380539 11.1042 2.00159 11.2868C2.00054 11.3022 2 11.3177 2 11.3333C2 13.1743 3.49248 14.6666 5.3334 14.6666H6C6.36819 14.6666 6.66667 14.3682 6.66667 14C6.66667 13.6318 6.36819 13.3333 6 13.3333H5.3334C4.22881 13.3333 3.33333 12.4378 3.33333 11.3333L3.33332 11.3293C5.51877 11.2737 6 10.6169 6 7.99996C6 5.3972 5.52395 4.73339 3.36859 4.67159C3.48594 3.61941 3.89062 2.86335 4.4979 2.34266C5.24282 1.70396 6.39237 1.33335 7.97787 1.33333C9.56493 1.33332 10.7273 1.70038 11.4837 2.33935C12.0996 2.85964 12.5117 3.61573 12.631 4.6716C10.476 4.73348 10 5.39737 10 7.99996C10 10.745 10.5295 11.3333 13 11.3333C15.4705 11.3333 16 10.745 16 7.99996C16 5.66136 15.6157 4.88811 13.9742 4.71041C13.8534 3.28825 13.3082 2.13524 12.3441 1.3208C11.2616 0.406371 9.74626 -1.87549e-05 7.97785 6.49228e-10C6.20788 1.87562e-05 4.70183 0.411471 3.63002 1.33045Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full lg:hidden items-center mx-8">
        <button @click="showResponsiveNavbar = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-125">
            <path d="M3 7H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 12H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 17H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <img src="~/assets/images/gp-flower-cuted.png" alt="LOGO" class="max-w-12 mr-4">
        <div class="mr-auto flex items-center space-x-4 space-x-reverse">
          <div class="user flex items-center space-x-reverse space-x-3 border-2 border-black/50 rounded-lg p-1 px-2" v-if="!authStore.isLoggedIn">
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
              <path d="M12 17L7 12M7 12L12 7M7 12L21 12" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5C17.3713 5 17.869 4.36871 17.6223 3.74865C16.4518 0.806956 14.0185 -1.60332e-07 9.29426 -3.66838e-07C1.6405 -7.01394e-07 8.19234e-05 2.118 8.14915e-05 12C8.10595e-05 21.882 1.6405 24 9.29426 24C14.0185 24 16.4518 23.193 17.6223 20.2514C17.869 19.6313 17.3713 19 16.704 19C16.2515 19 15.8634 19.3009 15.6788 19.714C15.5388 20.0273 15.3879 20.2776 15.2303 20.4811C14.5039 21.4189 13.1179 22 9.29426 22C5.47057 22 4.08458 21.4189 3.35821 20.4811C2.95275 19.9576 2.59127 19.1238 2.347 17.7047C2.10283 16.2861 2.00008 14.436 2.00008 12C2.00008 9.56404 2.10283 7.71385 2.347 6.2953C2.59127 4.87622 2.95275 4.04241 3.35821 3.51891C4.08459 2.58107 5.47057 2 9.29426 2C13.1179 2 14.5039 2.58107 15.2303 3.51891C15.3879 3.72237 15.5388 3.97269 15.6788 4.28602C15.8634 4.69912 16.2515 5 16.704 5Z" fill="#212135"/>
            </svg>
            <button class="text-sm opacity-70" @click="authStore.isLoginModalOpen = true">
              ورود | ثبت نام
            </button>
          </div>
          <div class="relative" v-else>
            <button class="flex items-end space-x-1 space-x-reverse relative" @click="showOptions = !showOptions">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="#292D32"/>
                <path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" fill="#292D32"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.7">
                <path d="M11.9485 5.45312H7.79512H4.05512C3.41512 5.45312 3.09512 6.22646 3.54845 6.67979L7.00179 10.1331C7.55512 10.6865 8.45512 10.6865 9.00845 10.1331L10.3218 8.81979L12.4618 6.67979C12.9085 6.22646 12.5885 5.45312 11.9485 5.45312Z" fill="#292D32"/>
              </svg>
            </button>
            <div class="absolute -bottom-4 right-0 border rounded-lg bg-bgWhite drop-shadow p-2 px-4 w-max translate-x-1/2 translate-y-full z-50" v-if="showOptions">
              <ul class="text-sm font-light text-right flex flex-col space-y-2">
                <li>
                  <base-f-button color="transparent" :is-link="true" to="/profile">
                    حساب کاربری
                  </base-f-button>
                </li>
                <li>
                  <base-f-button color="transparent">سفارشات من</base-f-button>
                </li>
                <li>
                  <base-f-button color="transparent">
                    <span>پیام ها</span>
                    <base-f-badge color="danger" size="xs" >2</base-f-badge>
                  </base-f-button>
                </li>
                <li>
                  <base-f-button color="transparent">خروج</base-f-button>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-px h-10 bg-black opacity-30"></div>

          <NuxtLink class="flex items-center flex-col space-y-2 text-black relative" to="/checkout/cart">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="9.26315" cy="20.1804" rx="1.81955" ry="1.81955" fill="#212135"/>
              <ellipse cx="15.3283" cy="20.1804" rx="1.81955" ry="1.81955" fill="#212135"/>
              <path d="M1.04761 1.04761C2.89111 1.96936 3.8045 2.77516 3.8045 5.01754M3.8045 5.01754C3.8045 14.1153 6.23057 15.9348 12.2957 15.9348C18.3609 15.9348 20.787 14.1153 20.787 6.83708C20.787 5.81565 20.1804 5.01754 18.9674 5.01754C17.7544 5.01754 7.845 5.01754 3.8045 5.01754Z" stroke="#212135" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-xs bg-danger text-white rounded-full absolute -right-2 -top-4 w-4 h-4 grid place-items-center" v-if="cartStore.cartItemsCount !== 0">
                {{cartStore.cartItemsCount}}
              </span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <transition>
      <div class="fixed bg-brandOrange inset-0 z-20 flex flex-col space-y-8 items-start p-4 m-0" v-if="showResponsiveNavbar">
        <button @click="showResponsiveNavbar = false">
          <svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-125">
            <path d="M19.636 19.1213L32.364 31.8492" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.636 31.8492L32.364 19.1213" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="h-px bg-white/50 w-full flex items-center justify-center opacity-50">
          <img src="~/assets/images/en-GP-filled-white.png" alt="gp" class="w-9 bg-brandOrange px-2">
        </div>
        <ul class="w-full flex flex-col items-center text-white text-xl space-y-4">
          <li class="hidden">
            <img src="~/assets/images/gp-flower-cuted.png" alt="LOGO" class="w-1/3 mx-auto">
          </li>
          <li class="w-full py-2 flex justify-center">
            <NuxtLink active-class="active-responsive" class="border border-transparent w-full text-center py-2 rounded-xl hover:border-white/50 transition duration-200" to="/">صفحه اصلی</NuxtLink>
          </li>
          <li class="w-full py-2 flex justify-center">
            <NuxtLink active-class="active-responsive" class="border border-transparent w-full text-center py-2 rounded-xl hover:border-white/50 transition duration-200" to="/market">محصولات</NuxtLink>
          </li>
          <li class="w-full py-2 flex justify-center">
            <NuxtLink active-class="active-responsive" class="border border-transparent w-full text-center py-2 rounded-xl hover:border-white/50 transition duration-200" to="/gpblog">مقالات</NuxtLink>
          </li>
          <li class="w-full py-2 flex justify-center">
            <NuxtLink active-class="active-responsive" class="border border-transparent w-full text-center py-2 rounded-xl hover:border-white/50 transition duration-200" to="/contactus">تماس با ما</NuxtLink>
          </li>
          <li class="w-full py-2 flex justify-center">
            <NuxtLink active-class="active-responsive" class="border border-transparent w-full text-center py-2 rounded-xl hover:border-white/50 transition duration-200" to="/aboutus">درباره ما</NuxtLink>
          </li>
        </ul>
        <div class="h-px bg-white/50 w-full flex items-center justify-center opacity-50">
          <img src="~/assets/images/en-GP-filled-white.png" alt="gp" class="w-9 bg-brandOrange px-2">
        </div>
        <form class="search relative flex items-center w-full">
          <base-f-input type="search" place-holder="دنبال چه محصولی هستید؟" id="search" name="search" v-model="searchValue">
            <template v-slot:inputIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" fill="currentColor"/>
                <path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" fill="currentColor"/>
              </svg>
            </template>
          </base-f-input>
        </form>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.store";
import {useCartStore} from "~/stores/cart.store";

const authStore = useAuthStore();
const cartStore = useCartStore();
const searchValue = ref('');
const showOptions = ref(false);
const showResponsiveNavbar = ref(false);

const route = useRoute();

watch(() => route.fullPath, () => {
  showResponsiveNavbar.value = false;
});

</script>

<style scoped>
.active{
  @apply relative after:w-full after:left-0 after:right-0 after:-bottom-2 after:rounded-t-full after:absolute after:h-1 after:bg-brandOrange font-bold;
}
.active-responsive{
  @apply border-warning font-bold;
}
</style>