<template>
  <div>
    <div>
      <div class="flex items-center justify-between px-2">
        <h3 class="text-sm lg:text-2xl font-bold flex space-x-2 space-x-reverse items-center">
          <NuxtLink to="/profile/orders">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="2"
                    stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
          <span>جزئیات سفارش #123456</span>
        </h3>
        <button class="flex items-center space-x-2 space-x-reverse text-primary text-xs lg:text-base">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
            <path
                d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
                stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
            <path
                d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
                stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
            <path d="M9 13.01H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M9 9.01001H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M5.99561 13H6.00459" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M5.99561 9H6.00459" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
          <span>
                مشاهده فاکتور
              </span>
        </button>
      </div>
      <hr class="my-3 border-2">
    </div>

    <div class="flex flex-col space-y-4 p-4">
      <div class="flex flex-col lg:flex-row lg:items-center gap-3">
        <div class="flex justify-between items-center lg:justify-center font-light text-xs lg:text-sm opacity-70">
          <span>کد پیگیری سفارش </span>
          <b class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">1351869104</b>
        </div>
        <span class="hidden lg:block opacity-40 lg:text-2xl">•</span>
        <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">
          <span>تاریخ ثبت سفارش </span>
          <b class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">15 بهمن 1402</b>
        </div>
      </div>
      <hr>
      <div class="flex flex-col lg:flex-row lg:items-center gap-3">
        <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">
          <span>تحویل گیرنده </span>
          <b class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">سجاد میرشبی</b>
        </div>
        <span class="hidden lg:block opacity-40 text-2xl">•</span>
        <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">
          <span>شماره موبایل </span>
          <b class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">09154222478</b>
        </div>
      </div>
      <div class="flex flex-col items-start gap-2 font-light text-xs lg:text-sm opacity-70">
        <span>آدرس </span>
        <b class="text-sm lg:text-base font-bold opacity-100">
          خراسان رضوی، تربت حیدریه، خیابان کاشانی، کاشانی 18، پلاک 20
        </b>
      </div>
    </div>
    <hr class="border-black/50">
    <div class="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between p-4">
      <div class="flex flex-col gap-4 mt-4 lg:mt-0">
        <div class="flex flex-col lg:flex-row lg:items-center gap-3">
          <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">مبلغ <b
              class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">1,253,000 ریال</b></div>
          <span class="hidden lg:block opacity-40 text-2xl">•</span>
          <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">سود شما از خرید <b
              class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">253,000 ریال</b></div>
          <span class="hidden lg:block opacity-40 text-2xl">•</span>
          <div class="flex justify-between items-center text-brandOrange text-sm lg:text-base">
            <span class="block lg:hidden">نوع پرداخت</span>
            <strong>پرداخت اینترنتی</strong>
          </div>
        </div>
        <div class="flex justify-between items-center font-light text-sm opacity-70">هزینه ارسال <b class="text-base font-bold opacity-100 mr-2">260,000 ریال</b></div>
        <div class="flex items-center justify-between lg:justify-start lg:gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
               class="text-amber-500 hidden lg:block">
            <path
                d="M7.5 12.1673H6C5.26667 12.1673 4.66667 12.7673 4.66667 13.5006V13.6673H4C3.72667 13.6673 3.5 13.894 3.5 14.1673C3.5 14.4406 3.72667 14.6673 4 14.6673H12C12.2733 14.6673 12.5 14.4406 12.5 14.1673C12.5 13.894 12.2733 13.6673 12 13.6673H11.3333V13.5006C11.3333 12.7673 10.7333 12.1673 10 12.1673H8.5V10.6406C8.33333 10.6606 8.16667 10.6673 8 10.6673C7.83333 10.6673 7.66667 10.6606 7.5 10.6406V12.1673Z"
                fill="currentColor"/>
            <path
                d="M12.3195 7.7587C12.7595 7.59203 13.1462 7.3187 13.4529 7.01203C14.0729 6.32536 14.4795 5.50536 14.4795 4.54536C14.4795 3.58536 13.7262 2.83203 12.7662 2.83203H12.3929C11.9595 1.94536 11.0529 1.33203 9.99953 1.33203H5.99953C4.9462 1.33203 4.03953 1.94536 3.6062 2.83203H3.23286C2.27286 2.83203 1.51953 3.58536 1.51953 4.54536C1.51953 5.50536 1.9262 6.32536 2.5462 7.01203C2.85286 7.3187 3.23953 7.59203 3.67953 7.7587C4.37286 9.46536 6.03953 10.6654 7.99953 10.6654C9.95953 10.6654 11.6262 9.46536 12.3195 7.7587ZM9.89287 5.63203L9.47953 6.1387C9.41287 6.21203 9.3662 6.3587 9.37287 6.4587L9.41286 7.11203C9.43953 7.51203 9.15287 7.7187 8.77953 7.57203L8.17287 7.33203C8.07953 7.2987 7.91953 7.2987 7.8262 7.33203L7.21953 7.57203C6.8462 7.7187 6.55953 7.51203 6.5862 7.11203L6.6262 6.4587C6.63286 6.3587 6.5862 6.21203 6.51953 6.1387L6.1062 5.63203C5.8462 5.32536 5.95953 4.98536 6.3462 4.88536L6.97953 4.72536C7.07953 4.6987 7.19953 4.60536 7.25287 4.5187L7.6062 3.97203C7.8262 3.63203 8.17287 3.63203 8.39287 3.97203L8.7462 4.5187C8.79953 4.60536 8.91953 4.6987 9.01953 4.72536L9.65286 4.88536C10.0395 4.98536 10.1529 5.32536 9.89287 5.63203Z"
                fill="currentColor"/>
          </svg>

          <span class="text-sm font-light opacity-70">امتیاز جی پی کلاب</span>
          <strong>5</strong>
        </div>
      </div>
      <button
          class="self-end lg:self-start flex space-x-1 items-center space-x-reverse text-primary text-sm lg:text-base">
        <span>تاریخچه تراکنش ها</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
          <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <hr class="border-black/50 my-3">
    <div class="p-6 border rounded-lg bg-bgWhite flex flex-col space-y-4">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-end">
        <span class="hidden lg:block text-sm font-light">وضعیت تحویل</span>
        <div class="flex flex-col space-y-2 w-full lg:w-2/5">
          <strong class="text-green-600 text-sm">تحویل مرسوله به مشتری</strong>
          <div class="w-full h-2 rounded-full bg-green-600/30 p-px">
            <div class="w-full h-2 rounded-full bg-green-500">
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <div class="flex flex-col lg:flex-row lg:items-center gap-3">
          <div class="flex justify-between items-center font-light text-sm opacity-70">هزینه ارسال <b class="text-base font-bold opacity-100 mr-2">253,000 ریال</b></div>
          <span class="hidden lg:block opacity-40 text-2xl">•</span>
          <div class="flex justify-between items-center font-light text-sm opacity-70">مبلغ مرسوله <b class="text-base font-bold opacity-100 mr-2">1,253,000 ریال</b></div>
        </div>
        <span class="flex justify-between items-center font-light opacity-70">کد پیگیری مرسوله: <b class="text-base font-bold opacity-100 mr-2">268475216841</b></span>
      </div>
      <div class="w-full p-4 rounded-lg flex flex-col space-y-4 bg-gray-100">
        <span class="text-sm font-light">با استفاده از سامانه رهگیری پست می‌توانید از وضعیت مرسوله باخبر شوید.</span>
        <a href="https://tracking.post.ir/search.aspx?id=191489717701655129539111"
           class="text-primary text-sm font-light">
          ورود به سامانه رهگیری >
        </a>
        <div class="flex items-center flex-wrap lg:w-1/3">
          <span class="text-sm font-light opacity-70">کد رهگیری:</span>
          <div class="flex items-center gap-3 mr-auto">
            <strong class="text-xs lg:text-base">۱۹۱۴۸۹۷۱۷۷۰۱۶۵۵۱۲۹۵۳۹۱۱۱</strong>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
              <path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6"
                    stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 13.4H13.8C11.4 13.4 10.6 12.6 10.6 10.2V7L17 13.4Z" stroke="#292D32" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.6 2H15.6" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M7 5C7 3.34 8.34 2 10 2H12.62" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M21.9999 8V14.19C21.9999 15.74 20.7399 17 19.1899 17" stroke="#292D32" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <hr>
      <ul>
        <li class="w-full flex items-stretch pb-4 mb-4 border-b space-x-4 space-x-reverse last:border-none"
            v-for="i in 2" :key="i">
          <div class="w-1/6 flex flex-col items-center">
            <NuxtLink to="/product/thing" class="w-full">
              <img src="~/assets/images/saffron-bar.png" alt="saffron" class="w-full">
            </NuxtLink>
          </div>
          <div class="flex-1 flex flex-col items-start">
            <strong class="text-sm lg:text-xl mb-6 lg:mt-8">
              زعفران شیشه ای نگین صد در صد خالص - 4 گرمی
            </strong>

            <ul class="flex flex-col space-y-1">
              <li class="flex items-center space-x-1 space-x-reverse text-sm font-light">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                     opacity="0.5">
                  <path d="M2.11328 4.95996L7.99995 8.36663L13.8466 4.97996" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 14.4067V8.35999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path
                      d="M6.62005 1.65336L3.06005 3.62669C2.25338 4.07336 1.59338 5.19336 1.59338 6.11336V9.88002C1.59338 10.8 2.25338 11.92 3.06005 12.3667L6.62005 14.3467C7.38005 14.7667 8.62672 14.7667 9.38672 14.3467L12.9467 12.3667C13.7534 11.92 14.4134 10.8 14.4134 9.88002V6.11336C14.4134 5.19336 13.7534 4.07336 12.9467 3.62669L9.38672 1.64669C8.62005 1.22669 7.38005 1.22669 6.62005 1.65336Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-xs">شیشه ای</span>
              </li>
              <li class="flex items-center space-x-2 space-x-reverse text-sm font-light">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                     opacity="0.5">
                  <path
                      d="M6.66667 14.6667H9.33333C12.6667 14.6667 14 13.3334 14 10V6.00004C14 2.66671 12.6667 1.33337 9.33333 1.33337H6.66667C3.33333 1.33337 2 2.66671 2 6.00004V10C2 13.3334 3.33333 14.6667 6.66667 14.6667Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M11.5 5.52666C9.50667 3.75332 6.49333 3.75332 4.5 5.52666L5.95333 7.85999C7.12 6.81999 8.88 6.81999 10.0467 7.85999L11.5 5.52666Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-xs">4 گرم</span>
              </li>
              <li class="flex items-center space-x-2 space-x-reverse text-sm font-light">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                     opacity="0.5">
                  <path
                      d="M14.6667 5.67992V2.65325C14.6667 1.71325 14.24 1.33325 13.18 1.33325H10.4867C9.42667 1.33325 9 1.71325 9 2.65325V5.67325C9 6.61992 9.42667 6.99325 10.4867 6.99325H13.18C14.24 6.99992 14.6667 6.61992 14.6667 5.67992Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M14.6667 13.18V10.4867C14.6667 9.42667 14.24 9 13.18 9H10.4867C9.42667 9 9 9.42667 9 10.4867V13.18C9 14.24 9.42667 14.6667 10.4867 14.6667H13.18C14.24 14.6667 14.6667 14.24 14.6667 13.18Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M6.99999 5.67992V2.65325C6.99999 1.71325 6.57333 1.33325 5.51333 1.33325H2.81999C1.75999 1.33325 1.33333 1.71325 1.33333 2.65325V5.67325C1.33333 6.61992 1.75999 6.99325 2.81999 6.99325H5.51333C6.57333 6.99992 6.99999 6.61992 6.99999 5.67992Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M6.99999 13.18V10.4867C6.99999 9.42667 6.57333 9 5.51333 9H2.81999C1.75999 9 1.33333 9.42667 1.33333 10.4867V13.18C1.33333 14.24 1.75999 14.6667 2.81999 14.6667H5.51333C6.57333 14.6667 6.99999 14.24 6.99999 13.18Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-xs">نگین</span>
              </li>
            </ul>

            <div class="mt-4">
              <span class="text-danger text-xs lg:text-sm font-light">350,000 ريال تخفیف</span>
              <div class="flex items-center space-x-1 space-x-reverse">
                <strong class="lg:text-2xl">2,209,000</strong>
                <small>ريال</small>
              </div>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'profile',
})
</script>