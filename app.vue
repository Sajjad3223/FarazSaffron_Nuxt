<template>
  <div class="container mx-auto">
    <base-f-navbar />
    <div id="overlay2"></div>
    <div class="relative mt-4">

      <!-- <div id="overlay"></div>
      -->

      <video autoplay muted loop class="rounded-lg h-[40vh] w-full object-cover origin-center scale-x-125" style="max-width: unset !important;">
        <source src="~/assets/videos/bg2.mp4" type="video/mp4">
      </video>

      <div class="w-max flex items-center text-white text-5xl font-bold absolute top-8 left-1/2 -translate-x-1/2 space-x-4 space-x-reverse drop-shadow-lg animate-pulse">
        <strong>
          به
        </strong>
        <img src="~/assets/images/GP-filled.png" alt="gp filled logo" class="w-40">
        <strong>خوش آمدید</strong>
      </div>
        
        
      <div class="absolute flex flex-col items-end text-white  space-y-6 bg-brandOrange shadow-lg rounded-2xl p-8 translate-x-1/2 scale-75 bottom-8 right-0">
        <div class="flex items-center space-x-2 space-x-reverse font-fedra text-4xl 2xl:text-6xl font-bold mx-auto drop-shadow-md">
          <span>زعفرانِ</span>
          <img src="~/assets/images/gp-filled-white.png" alt="gp filled white" class="w-36">
        </div>
        <p class="text-wrap text-justify text-base font-estedad">
          با جی پی همراه شوید و دنیای خاص و شگفت انگیز زعفران را لمس کنید، محصولی از مزارع حاصلخیز تا سفره های شما!
          <br>
          اینجا کیفیت و خلوص زعفران با اصالت همگام شده و تضمینی بر طعم این نماد با اصالت و گران بها خواهد بود.
        </p>
        <NuxtLink to="/" class="hidden bg-brandOrange -mb-10 mt-4 px-10 py-4 rounded-lg drop-shadow font-black">
          رفتن به صفحه محصولات
        </NuxtLink>
      </div>

      <div class="absolute mx-auto bottom-0 right-1/2 translate-x-1/2 text-brandOrange animate-bounce">
        <a href="#products">
          <svg width="50" height="97" viewBox="0 0 50 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 59C33.8107 59 41 49.7325 41 38.375V24.625C41 13.2675 33.8107 4 25 4C16.1893 4 9 13.2675 9 24.625V38.375C9 49.7325 16.1893 59 25 59Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25 25C23.8933 25 23 23.392 23 21.4V16.6C23 14.608 23.8933 13 25 13C26.0933 13 27 14.608 27 16.6V21.4C27 23.392 26.0933 25 25 25Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25 12.5V4.16666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32.92 65.95L26.4 72.47C25.63 73.24 24.37 73.24 23.6 72.47L17.08 65.95" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32.92 73.95L26.4 80.47C25.63 81.24 24.37 81.24 23.6 80.47L17.08 73.95" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32.92 81.95L26.4 88.47C25.63 89.24 24.37 89.24 23.6 88.47L17.08 81.95" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

    </div>

    <div class="mt-12">
      <div class="flex items-center justify-between">
        <h3 class="text-4xl font-fedra" id="products">محصولات ما</h3>
        <NuxtLink to="/products" class="text-brandOrange underline underline-offset-4">مشاهده همه محصولات ></NuxtLink>
      </div>
      <hr class="mt-2 border-2 rounded-lg ">
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <li class="card bg-bgWhite rounded-xl shadow-md pb-4" v-for="i in 6" :key="i">
          <div>
            <img src="~/assets/images/saffron-bar.png" alt="saffron bar" class="w-full object-contain rounded-lg h-80">
          </div>
          <div class="w-full px-8">
            <strong class="text-2xl">زعفران نگین</strong>
            <div class="flex items-center space-x-reverse space-x-2 mt-2">
              <div class="flex items-center space-x-2 space-x-reverse bg-[#E6D9C6] px-4 py-1 rounded-full">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.05 3.47C10.05 3.74 9.90495 3.985 9.67495 4.11L8.80495 4.58L8.06495 4.975L6.52995 5.805C6.36495 5.895 6.18495 5.94 5.99995 5.94C5.81495 5.94 5.63495 5.895 5.46995 5.805L2.32495 4.11C2.09495 3.985 1.94995 3.74 1.94995 3.47C1.94995 3.2 2.09495 2.955 2.32495 2.83L3.30995 2.3L4.09495 1.875L5.46995 1.135C5.79995 0.955 6.19995 0.955 6.52995 1.135L9.67495 2.83C9.90495 2.955 10.05 3.2 10.05 3.47Z" fill="currentColor"/>
                  <path d="M4.94999 6.39501L2.02499 4.93501C1.79999 4.82001 1.53999 4.83501 1.32499 4.96501C1.10999 5.09501 0.984985 5.32501 0.984985 5.57501V8.34001C0.984985 8.82001 1.24999 9.25001 1.67999 9.46501L4.60499 10.925C4.70499 10.975 4.81499 11 4.92499 11C5.05499 11 5.18499 10.965 5.29999 10.89C5.51499 10.76 5.63999 10.53 5.63999 10.28V7.51501C5.64499 7.04001 5.37998 6.61001 4.94999 6.39501Z" fill="currentColor"/>
                  <path d="M11.015 5.575V8.34C11.015 8.815 10.75 9.245 10.32 9.46L7.39498 10.925C7.29498 10.975 7.18498 11 7.07498 11C6.94498 11 6.81498 10.965 6.69498 10.89C6.48498 10.76 6.35498 10.53 6.35498 10.28V7.52C6.35498 7.04 6.61998 6.61 7.04998 6.395L8.12498 5.86L8.87498 5.485L9.97498 4.935C10.2 4.82 10.46 4.83 10.675 4.965C10.885 5.095 11.015 5.325 11.015 5.575Z" fill="currentColor"/>
                  <path d="M8.80506 4.58L8.06506 4.975L3.31006 2.3L4.09506 1.875L8.68506 4.465C8.73506 4.495 8.77506 4.535 8.80506 4.58Z" fill="currentColor"/>
                  <path d="M8.875 5.48499V6.61999C8.875 6.82499 8.705 6.99499 8.5 6.99499C8.295 6.99499 8.125 6.82499 8.125 6.61999V5.85999L8.875 5.48499Z" fill="currentColor"/>
                </svg>
                <span>شیشه ای</span>
              </div>
              <div class="flex items-center space-x-2 space-x-reverse bg-[#E6D9C6] px-4 py-1 rounded-full">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1H4C2.5 1 1.5 2 1.5 3.5V8.5C1.5 10 2.5 11 4 11H8C9.5 11 10.5 10 10.5 8.5V3.5C10.5 2 9.5 1 8 1ZM8.785 4.24L7.695 5.99C7.665 6.035 7.615 6.07 7.565 6.075C7.555 6.075 7.545 6.075 7.54 6.075C7.495 6.075 7.45 6.06 7.415 6.03C6.61 5.315 5.4 5.315 4.595 6.03C4.555 6.065 4.5 6.085 4.445 6.075C4.39 6.065 4.34 6.035 4.315 5.99L3.225 4.24C3.165 4.165 3.18 4.065 3.25 4C4.815 2.605 7.18 2.605 8.75 4C8.82 4.065 8.835 4.165 8.785 4.24Z" fill="currentColor"/>
                </svg>
                <span>نیم مثقال</span>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <div class="px-8 flex items-center justify-between">
            <button type="button" class="bg-brandOrange py-2 px-8 text-white rounded-xl">
              افزودن به سبد خرید
            </button>
            <strong class="text-2xl">
              2,206,000
              <small class="text-xs">ریال</small>
            </strong>
          </div>
        </li>
      </ul>
    </div>

    <div class="mt-12">
      <div class="flex items-center justify-between">
        <h3 class="text-4xl mb-6 font-fedra" id="products">نظرات شما</h3>
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <li class="card bg-bgWhite rounded-xl shadow-md pb-4" v-for="i in 3" :key="i">
          <div class="w-full">
            <img src="~/assets/images/avatar.png" alt="saffron bar" class="rounded-full w-32 h-32 mx-auto -translate-y-1/2 border-brandOrange border-4">
          </div>
          <div class="w-full flex items-end justify-between -mt-16 px-12" >
            <div class="flex flex-col">
              <strong class="text-2xl">سجاد میرشبی</strong>
              <span class="opacity-60">طراح سایت و برنامه نویس</span>
            </div>
            <div class="flex items-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.82665 10.6666C3.89999 10.3399 3.76665 9.87325 3.53332 9.63992L1.91332 8.01992C1.40665 7.51325 1.20665 6.97325 1.35332 6.50659C1.50665 6.03992 1.97999 5.71992 2.68665 5.59992L4.76665 5.25325C5.06665 5.19992 5.43332 4.93325 5.57332 4.65992L6.71999 2.35992C7.05332 1.69992 7.50665 1.33325 7.99999 1.33325C8.49332 1.33325 8.94665 1.69992 9.27999 2.35992L10.4267 4.65992C10.5133 4.83325 10.6933 4.99992 10.8867 5.11325L3.70665 12.2933C3.61332 12.3866 3.45332 12.2999 3.47999 12.1666L3.82665 10.6666Z" fill="#CCA253"/>
                <path d="M12.4667 9.64001C12.2267 9.88001 12.0934 10.34 12.1734 10.6667L12.6334 12.6733C12.8267 13.5067 12.7067 14.1333 12.2934 14.4333C12.1267 14.5533 11.9267 14.6133 11.6934 14.6133C11.3534 14.6133 10.9534 14.4867 10.5134 14.2267L8.56003 13.0667C8.25337 12.8867 7.7467 12.8867 7.44003 13.0667L5.4867 14.2267C4.7467 14.66 4.11337 14.7333 3.7067 14.4333C3.55337 14.32 3.44003 14.1667 3.3667 13.9667L11.4734 5.86001C11.78 5.55335 12.2134 5.41335 12.6334 5.48668L13.3067 5.60001C14.0134 5.72001 14.4867 6.04001 14.64 6.50668C14.7867 6.97335 14.5867 7.51335 14.08 8.02001L12.4667 9.64001Z" fill="#CCA253"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.82665 10.6666C3.89999 10.3399 3.76665 9.87325 3.53332 9.63992L1.91332 8.01992C1.40665 7.51325 1.20665 6.97325 1.35332 6.50659C1.50665 6.03992 1.97999 5.71992 2.68665 5.59992L4.76665 5.25325C5.06665 5.19992 5.43332 4.93325 5.57332 4.65992L6.71999 2.35992C7.05332 1.69992 7.50665 1.33325 7.99999 1.33325C8.49332 1.33325 8.94665 1.69992 9.27999 2.35992L10.4267 4.65992C10.5133 4.83325 10.6933 4.99992 10.8867 5.11325L3.70665 12.2933C3.61332 12.3866 3.45332 12.2999 3.47999 12.1666L3.82665 10.6666Z" fill="#CCA253"/>
                <path d="M12.4667 9.64001C12.2267 9.88001 12.0934 10.34 12.1734 10.6667L12.6334 12.6733C12.8267 13.5067 12.7067 14.1333 12.2934 14.4333C12.1267 14.5533 11.9267 14.6133 11.6934 14.6133C11.3534 14.6133 10.9534 14.4867 10.5134 14.2267L8.56003 13.0667C8.25337 12.8867 7.7467 12.8867 7.44003 13.0667L5.4867 14.2267C4.7467 14.66 4.11337 14.7333 3.7067 14.4333C3.55337 14.32 3.44003 14.1667 3.3667 13.9667L11.4734 5.86001C11.78 5.55335 12.2134 5.41335 12.6334 5.48668L13.3067 5.60001C14.0134 5.72001 14.4867 6.04001 14.64 6.50668C14.7867 6.97335 14.5867 7.51335 14.08 8.02001L12.4667 9.64001Z" fill="#CCA253"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.82665 10.6666C3.89999 10.3399 3.76665 9.87325 3.53332 9.63992L1.91332 8.01992C1.40665 7.51325 1.20665 6.97325 1.35332 6.50659C1.50665 6.03992 1.97999 5.71992 2.68665 5.59992L4.76665 5.25325C5.06665 5.19992 5.43332 4.93325 5.57332 4.65992L6.71999 2.35992C7.05332 1.69992 7.50665 1.33325 7.99999 1.33325C8.49332 1.33325 8.94665 1.69992 9.27999 2.35992L10.4267 4.65992C10.5133 4.83325 10.6933 4.99992 10.8867 5.11325L3.70665 12.2933C3.61332 12.3866 3.45332 12.2999 3.47999 12.1666L3.82665 10.6666Z" fill="#CCA253"/>
                <path d="M12.4667 9.64001C12.2267 9.88001 12.0934 10.34 12.1734 10.6667L12.6334 12.6733C12.8267 13.5067 12.7067 14.1333 12.2934 14.4333C12.1267 14.5533 11.9267 14.6133 11.6934 14.6133C11.3534 14.6133 10.9534 14.4867 10.5134 14.2267L8.56003 13.0667C8.25337 12.8867 7.7467 12.8867 7.44003 13.0667L5.4867 14.2267C4.7467 14.66 4.11337 14.7333 3.7067 14.4333C3.55337 14.32 3.44003 14.1667 3.3667 13.9667L11.4734 5.86001C11.78 5.55335 12.2134 5.41335 12.6334 5.48668L13.3067 5.60001C14.0134 5.72001 14.4867 6.04001 14.64 6.50668C14.7867 6.97335 14.5867 7.51335 14.08 8.02001L12.4667 9.64001Z" fill="#CCA253"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.82665 10.6666C3.89999 10.3399 3.76665 9.87325 3.53332 9.63992L1.91332 8.01992C1.40665 7.51325 1.20665 6.97325 1.35332 6.50659C1.50665 6.03992 1.97999 5.71992 2.68665 5.59992L4.76665 5.25325C5.06665 5.19992 5.43332 4.93325 5.57332 4.65992L6.71999 2.35992C7.05332 1.69992 7.50665 1.33325 7.99999 1.33325C8.49332 1.33325 8.94665 1.69992 9.27999 2.35992L10.4267 4.65992C10.5133 4.83325 10.6933 4.99992 10.8867 5.11325L3.70665 12.2933C3.61332 12.3866 3.45332 12.2999 3.47999 12.1666L3.82665 10.6666Z" fill="#CCA253"/>
                <path d="M12.4667 9.64001C12.2267 9.88001 12.0934 10.34 12.1734 10.6667L12.6334 12.6733C12.8267 13.5067 12.7067 14.1333 12.2934 14.4333C12.1267 14.5533 11.9267 14.6133 11.6934 14.6133C11.3534 14.6133 10.9534 14.4867 10.5134 14.2267L8.56003 13.0667C8.25337 12.8867 7.7467 12.8867 7.44003 13.0667L5.4867 14.2267C4.7467 14.66 4.11337 14.7333 3.7067 14.4333C3.55337 14.32 3.44003 14.1667 3.3667 13.9667L11.4734 5.86001C11.78 5.55335 12.2134 5.41335 12.6334 5.48668L13.3067 5.60001C14.0134 5.72001 14.4867 6.04001 14.64 6.50668C14.7867 6.97335 14.5867 7.51335 14.08 8.02001L12.4667 9.64001Z" fill="#CCA253"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.15333 2.34001L10.3267 4.68668C10.4867 5.01334 10.9133 5.32668 11.2733 5.38668L13.4 5.74001C14.76 5.96668 15.08 6.95334 14.1 7.92668L12.4467 9.58001C12.1667 9.86001 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.86001 3.55333 9.58001L1.9 7.92668C0.926667 6.95334 1.24 5.96668 2.6 5.74001L4.72667 5.38668C5.08 5.32668 5.50667 5.01334 5.66667 4.68668L6.84 2.34001C7.48 1.06668 8.52 1.06668 9.15333 2.34001Z" stroke="#CCA253" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
          </div>
          <hr class="my-4 mx-4">
          <div class="flex flex-col px-12 font-estedad text-justify space-y-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M10.9999 5.82501H8.09994C7.33494 5.82501 6.80994 5.245 6.80994 4.535V2.92499C6.80994 2.21499 7.33494 1.63501 8.09994 1.63501H9.70994C10.4199 1.63501 10.9999 2.21499 10.9999 2.92499V5.82501Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11 5.82495C11 8.84995 10.435 9.34992 8.73499 10.3599" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.185 5.82501H2.285C1.52 5.82501 0.994995 5.245 0.994995 4.535V2.92499C0.994995 2.21499 1.52 1.63501 2.285 1.63501H3.9C4.61 1.63501 5.19 2.21499 5.19 2.92499V5.82501" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.18504 5.82495C5.18504 8.84995 4.62004 9.34992 2.92004 10.3599" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارها.
            </p>
            <svg class="mr-auto" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M1 6.17499H3.9C4.665 6.17499 5.19 6.755 5.19 7.465V9.07501C5.19 9.78501 4.665 10.365 3.9 10.365H2.29C1.58 10.365 1 9.78501 1 9.07501V6.17499Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.00001 6.17505C1.00001 3.15005 1.56501 2.65008 3.26501 1.64008" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.815 6.17499H9.715C10.48 6.17499 11.005 6.755 11.005 7.465V9.07501C11.005 9.78501 10.48 10.365 9.715 10.365H8.1C7.39 10.365 6.81 9.78501 6.81 9.07501V6.17499" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.81502 6.17505C6.81502 3.15005 7.38002 2.65008 9.08002 1.64008" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </div>
          <div class="w-full flex relative">
            <NuxtLink to="/" class="bg-[#EF4056] text-white px-6 py-2 rounded-full mx-auto absolute right-1/2 translate-x-1/2 bottom-0 translate-y-3/4">
              مشاهده نظر در دیجی کالا
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>

    <base-f-footer class="mt-48" />

  </div>
</template>

<style>
  /*video{
    //position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-width: 100vh;
    z-index: -3;
    animation: blur 5s linear 4s 1 normal;
    animation-fill-mode: forwards;
  }
  @keyframes blur {
    from{
      filter:blur(0px);
    }
    to{
      filter:blur(5px);
    }
  }*/
  #overlay2{
    position: fixed;
    inset: 0;
    z-index: -2;
    background: url("./assets/images/bgPattern.png") repeat;
    height: 400%;
    background-size: 900px;
    mix-blend-mode: overlay;
    opacity: 0.35;
  }
</style>
<script setup lang="ts">
</script>