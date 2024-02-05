<template>
  <div>
    <div>
      <h3 class="text-2xl font-bold ">
        سفارش های من
      </h3>
      <hr class="my-3 border-2">
    </div>

    <div class="flex flex-col w-full mt-8">
      <div>
        <ul class="flex items-center border-b pb-4">
          <li class="flex items-center space-x-1 space-x-reverse px-4 opacity-50">
            <span>
              جاری
            </span>
          </li>
          <li class="flex items-center space-x-1 space-x-reverse px-4 after:absolute after:left-0 after:right-0 after:-bottom-4 after:rounded-t-lg after:h-1 after:bg-brandOrange relative">
            <span>
              تحویل شده
            </span>
            <f-badge color="brandOrange" size="sm" fore-color="white">3</f-badge>
          </li>
          <li class="flex items-center space-x-1 space-x-reverse px-4 opacity-50">
            <span>
              مرجوع شده
            </span>
            <f-badge color="brandOrange" size="sm" fore-color="white">0</f-badge>
          </li>
          <li class="flex items-center space-x-1 space-x-reverse px-4 opacity-50">
            <span>
              لغو شده
            </span>
            <f-badge color="brandOrange" size="sm" fore-color="white">0</f-badge>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-6">
      <ul class="flex flex-col w-full">
        <li class="flex flex-col p-4 py-6 rounded-xl border bg-bgWhite">
          <div class="flex items-start justify-between">
            <div class="flex flex-col space-y-2">
              <div class="flex space-x-2 space-x-reverse items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-warning">
                  <path d="M17.6005 5.31125L11.9505 2.27125C11.3505 1.95125 10.6405 1.95125 10.0405 2.27125L4.40047 5.31125C3.99047 5.54125 3.73047 5.98125 3.73047 6.46125C3.73047 6.95125 3.98047 7.39125 4.40047 7.61125L10.0505 10.6512C10.3505 10.8112 10.6805 10.8913 11.0005 10.8913C11.3205 10.8913 11.6605 10.8112 11.9505 10.6512L17.6005 7.61125C18.0105 7.39125 18.2705 6.95125 18.2705 6.46125C18.2705 5.98125 18.0105 5.54125 17.6005 5.31125Z" fill="currentColor"/>
                  <path d="M9.12 11.7106L3.87 9.09058C3.46 8.88058 3 8.91058 2.61 9.14058C2.23 9.38058 2 9.79058 2 10.2406V15.2006C2 16.0606 2.48 16.8306 3.25 17.2206L8.5 19.8406C8.68 19.9306 8.88 19.9806 9.08 19.9806C9.31 19.9806 9.55 19.9106 9.76 19.7906C10.14 19.5506 10.37 19.1406 10.37 18.6906V13.7306C10.36 12.8706 9.88 12.1006 9.12 11.7106Z" fill="currentColor"/>
                  <path d="M20.0006 10.2406V12.7006C19.5206 12.5606 19.0106 12.5006 18.5006 12.5006C17.1406 12.5006 15.8106 12.9706 14.7606 13.8106C13.3206 14.9406 12.5006 16.6506 12.5006 18.5006C12.5006 18.9906 12.5606 19.4806 12.6906 19.9506C12.5406 19.9306 12.3906 19.8706 12.2506 19.7806C11.8706 19.5506 11.6406 19.1406 11.6406 18.6906V13.7306C11.6406 12.8706 12.1206 12.1006 12.8806 11.7106L18.1306 9.09058C18.5406 8.88058 19.0006 8.91058 19.3906 9.14058C19.7706 9.38058 20.0006 9.79058 20.0006 10.2406Z" fill="currentColor"/>
                  <path d="M21.98 15.6695C21.16 14.6595 19.91 14.0195 18.5 14.0195C17.44 14.0195 16.46 14.3895 15.69 15.0095C14.65 15.8295 14 17.0995 14 18.5195C14 19.3595 14.24 20.1595 14.65 20.8395C14.92 21.2895 15.26 21.6795 15.66 21.9995H15.67C16.44 22.6395 17.43 23.0195 18.5 23.0195C19.64 23.0195 20.67 22.5995 21.46 21.8995C21.81 21.5995 22.11 21.2395 22.35 20.8395C22.76 20.1595 23 19.3595 23 18.5195C23 17.4395 22.62 16.4395 21.98 15.6695ZM20.76 17.9595L18.36 20.1795C18.22 20.3095 18.03 20.3795 17.85 20.3795C17.66 20.3795 17.47 20.3095 17.32 20.1595L16.21 19.0495C15.92 18.7595 15.92 18.2795 16.21 17.9895C16.5 17.6995 16.98 17.6995 17.27 17.9895L17.87 18.5895L19.74 16.8595C20.04 16.5795 20.52 16.5995 20.8 16.8995C21.09 17.2095 21.07 17.6795 20.76 17.9595Z" fill="currentColor"/>
                </svg>
                <strong>تحویل شده</strong>
              </div>
              <div class="flex items-center space-x-2 space-x-reverse">
                <span class="text-sm font-light opacity-70">15 بهمن 1402</span>
                <span class="opacity-40 text-2xl">•</span>
                <span class="text-sm font-light opacity-70">کد سفارش <b class="text-base font-bold">123456</b></span>
                <span class="opacity-40 text-2xl">•</span>
                <span class="text-sm font-light opacity-70">مبلغ <b class="text-base font-bold">356,000 ریال</b></span>
                <span class="opacity-40 text-2xl">•</span>
                <span class="text-sm font-light opacity-70">تخفیف <b class="text-base font-bold">46,000 ریال</b></span>
              </div>
              <div class="flex items-center space-x-2 space-x-reverse">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-amber-500">
                  <path d="M7.5 12.1673H6C5.26667 12.1673 4.66667 12.7673 4.66667 13.5006V13.6673H4C3.72667 13.6673 3.5 13.894 3.5 14.1673C3.5 14.4406 3.72667 14.6673 4 14.6673H12C12.2733 14.6673 12.5 14.4406 12.5 14.1673C12.5 13.894 12.2733 13.6673 12 13.6673H11.3333V13.5006C11.3333 12.7673 10.7333 12.1673 10 12.1673H8.5V10.6406C8.33333 10.6606 8.16667 10.6673 8 10.6673C7.83333 10.6673 7.66667 10.6606 7.5 10.6406V12.1673Z" fill="currentColor"/>
                  <path d="M12.3195 7.7587C12.7595 7.59203 13.1462 7.3187 13.4529 7.01203C14.0729 6.32536 14.4795 5.50536 14.4795 4.54536C14.4795 3.58536 13.7262 2.83203 12.7662 2.83203H12.3929C11.9595 1.94536 11.0529 1.33203 9.99953 1.33203H5.99953C4.9462 1.33203 4.03953 1.94536 3.6062 2.83203H3.23286C2.27286 2.83203 1.51953 3.58536 1.51953 4.54536C1.51953 5.50536 1.9262 6.32536 2.5462 7.01203C2.85286 7.3187 3.23953 7.59203 3.67953 7.7587C4.37286 9.46536 6.03953 10.6654 7.99953 10.6654C9.95953 10.6654 11.6262 9.46536 12.3195 7.7587ZM9.89287 5.63203L9.47953 6.1387C9.41287 6.21203 9.3662 6.3587 9.37287 6.4587L9.41286 7.11203C9.43953 7.51203 9.15287 7.7187 8.77953 7.57203L8.17287 7.33203C8.07953 7.2987 7.91953 7.2987 7.8262 7.33203L7.21953 7.57203C6.8462 7.7187 6.55953 7.51203 6.5862 7.11203L6.6262 6.4587C6.63286 6.3587 6.5862 6.21203 6.51953 6.1387L6.1062 5.63203C5.8462 5.32536 5.95953 4.98536 6.3462 4.88536L6.97953 4.72536C7.07953 4.6987 7.19953 4.60536 7.25287 4.5187L7.6062 3.97203C7.8262 3.63203 8.17287 3.63203 8.39287 3.97203L8.7462 4.5187C8.79953 4.60536 8.91953 4.6987 9.01953 4.72536L9.65286 4.88536C10.0395 4.98536 10.1529 5.32536 9.89287 5.63203Z" fill="currentColor"/>
                </svg>

                <span class="text-sm font-light opacity-70">امتیاز جی پی کلاب</span>
                <strong>5</strong>
              </div>
            </div>
            <NuxtLink to="/profile/orders/123142">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>
          </div>
          <hr class="my-3">
          <ul class="w-full flex items-center flex-wrap space-x-4 space-x-reverse">
            <li>
              <img src="~/assets/images/saffron-bar.png" alt="jar" class="max-w-24 rounded-md">
            </li>
            <li>
              <img src="~/assets/images/productImage.png" alt="jar" class="max-w-24 rounded-md">
            </li>
          </ul>
          <hr class="my-3">
          <div class="self-end mx-4 my-2">
            <button class="flex items-center space-x-2 space-x-reverse text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 13.01H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 9.01001H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.99561 13H6.00459" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.99561 9H6.00459" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>
                مشاهده فاکتور
              </span>
            </button>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
import FBadge from "~/components/base/FBadge.vue";

definePageMeta({
  layout:'profile',
})
</script>