<template>
<div class="flex flex-col items-end mx-6 lg:mx-0">
  <hr class="absolute left-0 right-0 dark:border-gray-700">
  <div class="w-full flex flex-col py-4 bg-bgWhite dark:bg-gray-900 dark:text-white space-y-12">
    <div class="w-full flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center pt-12">
      <div class="flex flex-col space-y-6">
        <img src="~/assets/images/gp-filled.png" alt="gp" class="w-36">
        <div class="font-thin text-sm flex flex-col lg:flex-row items-stretch space-y-2 lg:space-y-0 lg:space-x-4 lg:space-x-reverse">
          <span>تلفن پشتیبانی: 051-52223456</span>
          <div class="hidden lg:block w-px bg-black/30 dark:bg-white/30"></div>
          <span> ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
        </div>
      </div>
      <button class="text-sm border-2 rounded-lg opacity-60 h-max p-4 px-8 w-max mx-auto lg:mx-0 mb-4 lg:mb-0 flex items-center space-x-2 space-x-reverse">
        <span>برگشت به بالا</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9201 15.05L13.4001 8.53C12.6301 7.76 11.3701 7.76 10.6001 8.53L4.08008 15.05" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="grid grid-cols-3 gap-6 lg:grid-cols-4 xl:grid-cols-5 dark:text-white">
      <div class="flex flex-col items-center text-xs font-thin space-y-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-[200%]">
          <path d="M11.9998 14H12.9998C14.0998 14 14.9998 13.1 14.9998 12V2H5.99976C4.49976 2 3.18977 2.82999 2.50977 4.04999" stroke="#F04623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 8H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 11H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 14H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span>امکان تحویل اکسپرس</span>
      </div>
      <div class="flex flex-col items-center text-xs font-thin space-y-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-[200%]">
          <path d="M2 8.5H13.5" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 16.5H8" stroke="#F04623" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.5 16.5H14.5" stroke="#F04623" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 11.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.5 6L18 7.5L22 3.5" stroke="#F04623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span>امکان پرداخت در محل</span>
      </div>
      <div class="flex flex-col items-center text-xs font-thin space-y-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-[200%]">
          <path d="M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4198C12.63 22.1898 11.36 22.1898 10.58 21.4198L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 9.15979C7 8.22979 7.76 7.46973 8.69 7.46973C9.62 7.46973 10.38 8.22979 10.38 9.15979C10.38 11.0398 7.71 11.2398 7.12 13.0298C7 13.3998 7.31 13.7698 7.7 13.7698H10.38" stroke="#F04623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.0398 13.7599V8.04991C16.0398 7.78991 15.8698 7.55985 15.6198 7.48985C15.3698 7.41985 15.0998 7.51985 14.9598 7.73985C14.2398 8.89985 13.4598 10.2199 12.7798 11.3799C12.6698 11.5699 12.6698 11.8199 12.7798 12.0099C12.8898 12.1999 13.0998 12.3198 13.3298 12.3198H16.9998" stroke="#F04623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


        <span>7 روز هفته، 24 ساعته</span>
      </div>
      <div class="flex flex-col items-center text-xs font-thin space-y-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-[200%]">
          <path d="M6.70117 9.25977L12.0012 12.3298L17.2612 9.27976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.002 17.7698V12.3198" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.7603 6.28986L7.56024 8.06986C6.84024 8.46986 6.24023 9.47985 6.24023 10.3099V13.6999C6.24023 14.5299 6.83024 15.5399 7.56024 15.9399L10.7603 17.7199C11.4403 18.0999 12.5602 18.0999 13.2502 17.7199L16.4503 15.9399C17.1703 15.5399 17.7702 14.5299 17.7702 13.6999V10.2999C17.7702 9.46986 17.1803 8.45985 16.4503 8.05985L13.2502 6.27985C12.5602 5.89985 11.4403 5.89986 10.7603 6.28986Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="#F04623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75" stroke="#F04623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


        <span>ضمانت بازگشت کالا ،حتی پس از استفاده</span>
      </div>
      <div class="flex flex-col items-center text-xs font-thin space-y-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-[200%]">
          <path d="M19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.2491 18.4699L19.5991 18.8599C19.2291 18.9499 18.9391 19.2299 18.8591 19.5999L18.5091 21.0699C18.3191 21.8699 17.2991 22.1099 16.7691 21.4799L11.9991 15.9999L7.2291 21.4899C6.6991 22.1199 5.6791 21.8799 5.4891 21.0799L5.1391 19.6099C5.0491 19.2399 4.7591 18.9499 4.3991 18.8699L2.7491 18.4799C1.9891 18.2999 1.7191 17.3499 2.2691 16.7999L6.1691 12.8999C7.2491 14.4999 8.9591 15.6299 10.9491 15.9199C11.2891 15.9799 11.6391 16.0099 11.9991 16.0099C12.3591 16.0099 12.7091 15.9799 13.0491 15.9199C15.0391 15.6299 16.7491 14.4999 17.8291 12.8999L21.7291 16.7999C22.2791 17.3399 22.0091 18.2899 21.2491 18.4699Z" stroke="#F04623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.58 5.98L13.17 7.15999C13.25 7.31999 13.46 7.48 13.65 7.51L14.72 7.68999C15.4 7.79999 15.56 8.3 15.07 8.79L14.24 9.61998C14.1 9.75998 14.02 10.03 14.07 10.23L14.31 11.26C14.5 12.07 14.07 12.39 13.35 11.96L12.35 11.37C12.17 11.26 11.87 11.26 11.69 11.37L10.69 11.96C9.96997 12.38 9.53997 12.07 9.72997 11.26L9.96997 10.23C10.01 10.04 9.93997 9.75998 9.79997 9.61998L8.96997 8.79C8.47997 8.3 8.63997 7.80999 9.31997 7.68999L10.39 7.51C10.57 7.48 10.78 7.31999 10.86 7.15999L11.45 5.98C11.74 5.34 12.26 5.34 12.58 5.98Z" stroke="#F04623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span>ضمانت اصل بودن کالا</span>
      </div>
    </div>
    <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="flex flex-col space-y-4">
        <h4 class="text-brandOrange font-bold text-lg ">با فراز زعفران</h4>
        <ul class="flex flex-col font-light opacity-70 space-y-2">

            <li><NuxtLink to="/" >صفحه اصلی</NuxtLink></li>
            <li><NuxtLink to="/" >فروشگاه</NuxtLink></li>
            <li><NuxtLink to="/" >مقالات</NuxtLink></li>
            <li><NuxtLink to="/" >درباره ما</NuxtLink></li>
            <li><NuxtLink to="/" >تماس با ما</NuxtLink></li>

        </ul>
      </div>
      <div class="flex flex-col space-y-4">
        <h4 class="text-brandOrange font-bold text-lg ">خدمات مشتریان</h4>
        <ul class="flex flex-col font-light opacity-70 space-y-2">

            <li><NuxtLink to="/" >پرسش ها متداول</NuxtLink></li>
            <li><NuxtLink to="/" >رویه بازگرداندن کالا</NuxtLink></li>
            <li><NuxtLink to="/" >حریم خصوصی</NuxtLink></li>
            <li><NuxtLink to="/" >گزارش باگ</NuxtLink></li>

        </ul>
      </div>
      <div class="flex flex-col space-y-4">
        <h4 class="text-brandOrange font-bold lg:text-lg ">راهنمای خرید از جی پی زعفران</h4>
        <ul class="flex flex-col font-light opacity-70 space-y-2">

            <li><NuxtLink to="/" >نحوه ثبت سفارش</NuxtLink></li>
            <li><NuxtLink to="/" >رویه ارسال سفارش</NuxtLink></li>
            <li><NuxtLink to="/" >شیئه های پرداخت</NuxtLink></li>

        </ul>
      </div>
      <div class="flex flex-col space-y-4">
        <h4 class="text-brandOrange font-bold text-lg">همراه ما باشید!</h4>
        <ul class="flex justify-around flex-wrap">
          <li>
            <NuxtLink >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="black"/>
                <path d="M20.0035 10.163C23.21 10.163 23.5864 10.1773 24.8537 10.2345C26.0258 10.2869 26.6595 10.4823 27.0835 10.649C27.6457 10.8682 28.0459 11.1255 28.4652 11.5447C28.8844 11.964 29.1465 12.3642 29.3609 12.9264C29.5229 13.3504 29.723 13.9841 29.7754 15.1562C29.8326 16.4235 29.8469 16.7999 29.8469 20.0064C29.8469 23.2128 29.8326 23.5892 29.7754 24.8565C29.723 26.0286 29.5276 26.6623 29.3609 27.0863C29.1417 27.6485 28.8844 28.0487 28.4652 28.468C28.0459 28.8872 27.6457 29.1493 27.0835 29.3637C26.6595 29.5257 26.0258 29.7258 24.8537 29.7782C23.5864 29.8354 23.21 29.8497 20.0035 29.8497C16.7971 29.8497 16.4207 29.8354 15.1534 29.7782C13.9813 29.7258 13.3476 29.5304 12.9236 29.3637C12.3614 29.1445 11.9612 28.8872 11.5419 28.468C11.1227 28.0487 10.8606 27.6485 10.6462 27.0863C10.4842 26.6623 10.2841 26.0286 10.2317 24.8565C10.1745 23.5892 10.1602 23.2128 10.1602 20.0064C10.1602 16.7999 10.1745 16.4235 10.2317 15.1562C10.2841 13.9841 10.4795 13.3504 10.6462 12.9264C10.8654 12.3642 11.1227 11.964 11.5419 11.5447C11.9612 11.1255 12.3614 10.8634 12.9236 10.649C13.3476 10.487 13.9813 10.2869 15.1534 10.2345C16.4207 10.1726 16.8019 10.163 20.0035 10.163ZM20.0035 8C16.7447 8 16.3349 8.01429 15.0533 8.07147C13.7764 8.12864 12.9046 8.33351 12.1422 8.6289C11.3513 8.93383 10.6843 9.34833 10.0173 10.0154C9.35029 10.6824 8.94055 11.3542 8.63086 12.1403C8.33546 12.9026 8.13059 13.7745 8.07342 15.0561C8.01625 16.333 8.00195 16.7427 8.00195 20.0016C8.00195 23.2605 8.01625 23.6702 8.07342 24.9518C8.13059 26.2287 8.33546 27.1006 8.63086 27.8677C8.93578 28.6585 9.35029 29.3256 10.0173 29.9926C10.6843 30.6596 11.3561 31.0693 12.1422 31.379C12.9046 31.6744 13.7764 31.8793 15.0581 31.9365C16.3397 31.9936 16.7447 32.0079 20.0083 32.0079C23.2719 32.0079 23.6769 31.9936 24.9586 31.9365C26.2354 31.8793 27.1073 31.6744 27.8744 31.379C28.6653 31.0741 29.3323 30.6596 29.9993 29.9926C30.6663 29.3256 31.0761 28.6538 31.3858 27.8677C31.6812 27.1053 31.886 26.2335 31.9432 24.9518C32.0004 23.6702 32.0147 23.2652 32.0147 20.0016C32.0147 16.738 32.0004 16.333 31.9432 15.0513C31.886 13.7745 31.6812 12.9026 31.3858 12.1355C31.0808 11.3446 30.6663 10.6776 29.9993 10.0106C29.3323 9.34357 28.6605 8.93383 27.8744 8.62414C27.1121 8.32875 26.2402 8.12388 24.9586 8.0667C23.6722 8.01429 23.2624 8 20.0035 8Z" fill="white"/>
                <path d="M20.0031 13.8412C16.6013 13.8412 13.8379 16.5998 13.8379 20.0064C13.8379 23.4129 16.5965 26.1715 20.0031 26.1715C23.4096 26.1715 26.1682 23.4129 26.1682 20.0064C26.1682 16.5998 23.4096 13.8412 20.0031 13.8412ZM20.0031 24.0037C17.7924 24.0037 16.0009 22.2123 16.0009 20.0016C16.0009 17.7909 17.7924 15.9995 20.0031 15.9995C22.2137 15.9995 24.0052 17.7909 24.0052 20.0016C24.0052 22.2123 22.2137 24.0037 20.0031 24.0037Z" fill="white"/>
                <path d="M26.4115 15.0323C27.2062 15.0323 27.8504 14.3881 27.8504 13.5934C27.8504 12.7988 27.2062 12.1546 26.4115 12.1546C25.6169 12.1546 24.9727 12.7988 24.9727 13.5934C24.9727 14.3881 25.6169 15.0323 26.4115 15.0323Z" fill="white"/>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#1D9BF0"/>
                <path d="M16.3397 30.55C25.2097 30.55 30.0597 23.2 30.0597 16.83C30.0597 16.62 30.0597 16.41 30.0497 16.21C30.9897 15.53 31.8097 14.68 32.4597 13.71C31.5997 14.09 30.6697 14.35 29.6897 14.47C30.6897 13.87 31.4497 12.93 31.8097 11.8C30.8797 12.35 29.8497 12.75 28.7497 12.97C27.8697 12.03 26.6197 11.45 25.2297 11.45C22.5697 11.45 20.4097 13.61 20.4097 16.27C20.4097 16.65 20.4497 17.02 20.5397 17.37C16.5297 17.17 12.9797 15.25 10.5997 12.33C10.1897 13.04 9.94973 13.87 9.94973 14.75C9.94973 16.42 10.7997 17.9 12.0997 18.76C11.3097 18.74 10.5697 18.52 9.91973 18.16C9.91973 18.18 9.91973 18.2 9.91973 18.22C9.91973 20.56 11.5797 22.5 13.7897 22.95C13.3897 23.06 12.9597 23.12 12.5197 23.12C12.2097 23.12 11.9097 23.09 11.6097 23.03C12.2197 24.95 13.9997 26.34 16.1097 26.38C14.4597 27.67 12.3797 28.44 10.1197 28.44C9.72973 28.44 9.34973 28.42 8.96973 28.37C11.0797 29.75 13.6197 30.55 16.3397 30.55Z" fill="white"/>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="url(#paint0_linear_280_1167)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05368 19.7889C14.8841 17.2487 18.7719 15.574 20.7172 14.7649C26.2715 12.4547 27.4256 12.0534 28.1778 12.0402C28.3433 12.0373 28.7132 12.0783 28.9528 12.2727C29.1551 12.4369 29.2108 12.6587 29.2375 12.8143C29.2641 12.97 29.2973 13.3246 29.2709 13.6017C28.9699 16.7641 27.6676 24.4386 27.005 27.9806C26.7246 29.4794 26.1726 29.9819 25.6382 30.0311C24.4767 30.138 23.5948 29.2635 22.4699 28.5261C20.7096 27.3723 19.7152 26.654 18.0066 25.528C16.0319 24.2268 17.312 23.5116 18.4373 22.3428C18.7318 22.0369 23.8492 17.3823 23.9482 16.96C23.9606 16.9072 23.9721 16.7104 23.8551 16.6065C23.7382 16.5025 23.5656 16.5381 23.4411 16.5663C23.2645 16.6064 20.4525 18.465 15.0049 22.1423C14.2067 22.6904 13.4838 22.9574 12.836 22.9434C12.1219 22.928 10.7483 22.5397 9.72709 22.2077C8.47459 21.8006 7.47913 21.5853 7.56581 20.8939C7.61096 20.5337 8.10692 20.1654 9.05368 19.7889Z" fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear_280_1167" x1="20" y1="0" x2="20" y2="39.7033" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2AABEE" offset=""/>
                    <stop offset="1" stop-color="#229ED9"/>
                  </linearGradient>
                </defs>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="url(#paint0_linear_280_1194)"/>
                <path d="M7.86816 31.6358L9.58305 25.4085C8.52283 23.5807 7.96665 21.5107 7.97245 19.3945C7.97245 12.7636 13.3952 7.37241 20.052 7.37241C23.2848 7.37241 26.3206 8.62363 28.5975 10.8954C30.8801 13.1673 32.1373 16.1886 32.1315 19.4003C32.1315 26.0312 26.7088 31.4225 20.0462 31.4225H20.0404C18.0185 31.4225 16.0313 30.915 14.2642 29.9579L7.86816 31.6358ZM14.5713 27.7841L14.9363 28.0032C16.4774 28.9142 18.2444 29.3928 20.0462 29.3986H20.052C25.5848 29.3986 30.0922 24.9184 30.0922 19.4061C30.0922 16.7364 29.0494 14.2282 27.1549 12.3369C25.2604 10.4457 22.7344 9.40781 20.052 9.40781C14.5192 9.40204 10.0118 13.8822 10.0118 19.3945C10.0118 21.28 10.539 23.1194 11.5471 24.7108L11.7846 25.0914L10.7707 28.7759L14.5713 27.7841Z" fill="white"/>
                <path d="M8.29102 31.2149L9.94797 25.2009C8.92251 23.4423 8.38371 21.4415 8.38371 19.4003C8.38951 13 13.6211 7.79333 20.0519 7.79333C23.1746 7.79333 26.1004 9.0042 28.3019 11.1953C30.5035 13.3864 31.7143 16.304 31.7143 19.4061C31.7143 25.8064 26.477 31.0131 20.0519 31.0131H20.0461C18.0937 31.0131 16.176 30.523 14.4727 29.6004L8.29102 31.2149Z" fill="url(#paint1_linear_280_1194)"/>
                <path d="M7.86816 31.6358L9.58305 25.4085C8.52283 23.5807 7.96665 21.5107 7.97245 19.3945C7.97245 12.7636 13.3952 7.37241 20.052 7.37241C23.2848 7.37241 26.3206 8.62363 28.5975 10.8954C30.8801 13.1673 32.1373 16.1886 32.1315 19.4003C32.1315 26.0312 26.7088 31.4225 20.0462 31.4225H20.0404C18.0185 31.4225 16.0313 30.915 14.2642 29.9579L7.86816 31.6358ZM14.5713 27.7841L14.9363 28.0032C16.4774 28.9142 18.2444 29.3928 20.0462 29.3986H20.052C25.5848 29.3986 30.0922 24.9184 30.0922 19.4061C30.0922 16.7364 29.0494 14.2282 27.1549 12.3369C25.2604 10.4457 22.7344 9.40781 20.052 9.40781C14.5192 9.40204 10.0118 13.8822 10.0118 19.3945C10.0118 21.28 10.539 23.1194 11.5471 24.7108L11.7846 25.0914L10.7707 28.7759L14.5713 27.7841Z" fill="url(#paint2_linear_280_1194)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0339 14.3666C16.808 13.865 16.5704 13.8534 16.3561 13.8477C16.1823 13.8419 15.9795 13.8419 15.7767 13.8419C15.5739 13.8419 15.2495 13.9168 14.9714 14.2167C14.6933 14.5165 13.917 15.243 13.917 16.7249C13.917 18.201 15.0004 19.631 15.151 19.8328C15.3016 20.0346 17.2425 23.1655 20.3073 24.3706C22.8564 25.3739 23.3779 25.1721 23.9282 25.1202C24.4786 25.0683 25.7127 24.3937 25.9676 23.6902C26.2167 22.9868 26.2167 22.3871 26.1414 22.2603C26.0661 22.1334 25.8633 22.0585 25.562 21.9085C25.2608 21.7586 23.7776 21.0321 23.4995 20.9283C23.2214 20.8303 23.0187 20.7784 22.8217 21.0782C22.6189 21.3781 22.0395 22.0527 21.8657 22.2545C21.6919 22.4563 21.5123 22.4794 21.2111 22.3295C20.9098 22.1795 19.9365 21.8624 18.7836 20.8361C17.8856 20.0404 17.2772 19.0544 17.1034 18.7545C16.9296 18.4547 17.0861 18.2933 17.2367 18.1433C17.3699 18.0107 17.538 17.7916 17.6886 17.6186C17.8392 17.4456 17.8914 17.3188 17.9899 17.117C18.0883 16.9152 18.042 16.7422 17.9667 16.5923C17.8914 16.4481 17.3004 14.9605 17.0339 14.3666Z" fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear_280_1194" x1="19.999" y1="39.998" x2="19.999" y2="-0.0013995" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#20B038" offset=""/>
                    <stop offset="1" stop-color="#60D66A"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_280_1194" x1="20.0021" y1="31.2137" x2="20.0021" y2="7.79252" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#20B038" offset=""/>
                    <stop offset="1" stop-color="#60D66A"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_280_1194" x1="20.0022" y1="31.6335" x2="20.0022" y2="7.37241" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F9F9F9" offset=""/>
                    <stop offset="1" stop-color="white"/>
                  </linearGradient>
                </defs>
              </svg>
            </NuxtLink>
          </li>
        </ul>
        <h5 class="text-brandOrange font-bold">با ثبت ایمیل از جدیدترین تخفیف ها باخبر شوید!</h5>
        <div class="w-full flex flex-col lg:flex-row lg:space-x-2 lg:space-x-reverse opacity-50 hover:opacity-100 transition-opacity duration-300">
          <base-f-input type="email" :rtl="false" place-holder="example@test.com" class="text-xs">
            <template #inputIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </base-f-input>
          <button class="py-2 lg:py-0 lg:px-3 rounded-md bg-brandOrange/20">
            ثبت
          </button>
        </div>
      </div>
    </div>
    <div class="h-px bg-black/50 w-full flex items-center justify-center opacity-50">
      <img src="~/assets/images/en-GP-filled.png" alt="gp" class="w-9 bg-bgWhite px-2">
    </div>
    <div class="w-full flex flex-col lg:flex-row">
      <div class="w-full lg:w-2/3 flex flex-col space-y-2">
        <h3 class="text-sm lg:text-2xl font-bold flex items-center space-x-1 space-x-reverse">
          <span>فروشگاه اینترنتی</span>
          <img src="~/assets/images/gp-filled.png" alt="gp" class="w-10 lg:w-24">
          <span>، بررسی، انتخاب و خرید آنلاین زعفران</span>
        </h3>
        <p class="font-light text-xs lg:text-base text-justify opacity-80">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
      <div class="w-full lg:w-1/3 flex items-center justify-between">
        <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=479170&Code=WVFCiesdEuQgDFJzHNFz2DyAJhkoExWQ'>
          <img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=479170&Code=WVFCiesdEuQgDFJzHNFz2DyAJhkoExWQ' alt='Enamad' style='cursor:pointer' Code='WVFCiesdEuQgDFJzHNFz2DyAJhkoExWQ'>
        </a>
        <img src="https://media.eclubgroup.ir/Namad/Sib_Salamat.png" alt="salamat" class="rounded-lg w-auto max-w-24">
        <img src="https://media.eclubgroup.ir/Namad/standard.jpg" alt="estandard" class="rounded-lg w-auto max-w-24">
      </div>
    </div>
    <div class="h-px bg-black/50 w-full flex items-center justify-center opacity-50">
      <img src="~/assets/images/en-GP-filled.png" alt="gp" class="w-9 bg-bgWhite px-2">
    </div>
    <span class="text-center text-xs lg:text-sm xl:text-base font-light font-estedad">
      برای استفاده از مطالب جی پی، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت فراز زعفران تربت حیدریه (فروشگاه آنلاین جی پی) است.
    </span>
    <div class="h-px bg-black/50 w-full flex items-center justify-center opacity-50">
      <img src="~/assets/images/en-GP-filled.png" alt="gp" class="w-9 bg-bgWhite px-2">
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

</script>