<template>
  <div class="w-full">

    <Head>
      <Title>حساب کاربری</Title>
    </Head>

    <div v-if="!utilStore.isMobile()">
      <div >
        <h3 class="text-2xl dark:text-white font-bold ">
          داشبورد
        </h3>
        <hr class="my-3 border-2">
      </div>
      <div class="flex flex-col space-y-8 bg-gray-50 dark:bg-gray-800 dark:text-white rounded-xl p-8">
        <div class="flex justify-between">
          <strong class="border-b-2 border-brandOrange pb-2">سفارش های من</strong>
          <NuxtLink class="text-primary opacity-70 text-sm" to="/profile/orders">
            مشاهده همه >
          </NuxtLink>
        </div>
        <ul class="flex justify-between lg:justify-around" v-if="!loading">
          <li class="flex flex-col lg:flex-row items-center lg:space-x-2 lg:space-x-reverse">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M52.0502 23.8007C51.3658 19.7823 49.3522 16.115 46.2727 13.332C42.8509 10.2369 38.4026 8.53334 33.7701 8.53334C30.1904 8.53334 26.7029 9.54769 23.7154 11.4594C21.228 13.0459 19.1618 15.1917 17.701 17.7145C17.0693 17.5975 16.4113 17.5325 15.7532 17.5325C10.16 17.5325 5.60642 22.032 5.60642 27.559C5.60642 28.2742 5.68538 28.9635 5.81699 29.6397C2.19782 32.2406 0 36.428 0 40.8886C0 44.4909 1.35554 47.9891 3.82973 50.759C6.36973 53.594 9.72568 55.2716 13.3054 55.4667C13.3448 55.4667 13.3712 55.4667 13.4107 55.4667L49.0232 55.4537C49.0627 55.4537 49.1022 55.4537 49.1548 55.4537C53.1688 55.1676 56.9196 53.3469 59.7096 50.3039C62.4865 47.2868 64 43.4115 64 39.3801C63.9868 32.0845 58.9463 25.5953 52.0502 23.8007Z" fill="url(#paint0_linear)"/>
              <rect x="9.59998" y="33.0667" width="44.8" height="14.9333" rx="7" fill="black" fill-opacity="0.336675"/>
              <g filter="url(#filter0_d)">
                <g clip-path="url(#clip0)">
                  <rect x="33.0667" y="35.2" width="19.2" height="10.6667" rx="5" fill="white"/>
                  <rect x="33.0667" y="35.2" width="19.2" height="10.6667" rx="5" fill="url(#paint1_linear)"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M41.6 35.2H45.8666L43.7333 45.8667H39.4666L41.6 35.2Z" fill="#2BD1FF" fill-opacity="0.541275"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0666 35.2H37.3333L35.2 45.8667H30.9333L33.0666 35.2Z" fill="#2BD1FF" fill-opacity="0.541275"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M50.1333 35.2H54.4L52.2666 45.8667H48L50.1333 35.2Z" fill="#2BD1FF" fill-opacity="0.541275"/>
                </g>
              </g>
              <defs>
                <filter id="filter0_d" x="29.0667" y="31.2" width="27.2" height="18.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear" x1="0" y1="62.2347" x2="64" y2="62.2347" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00CEFF" offset="0"/>
                  <stop offset="1" stop-color="#5179FF"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="33.0667" y1="35.2" x2="33.0667" y2="45.8667" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0.5" offset="0"/>
                  <stop offset="1" stop-color="#CCDAFF"/>
                </linearGradient>
                <clipPath id="clip0">
                  <rect x="33.0667" y="35.2" width="19.2" height="10.6667" rx="5" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <div class="flex flex-col items-center">
              <strong>{{ ordersGist.pending }} سفارش</strong>
              <small>جاری</small>
            </div>
          </li>
          <li class="flex flex-col lg:flex-row items-center lg:space-x-2 lg:space-x-reverse">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M32 8.00001C27.5817 8.00001 24 11.5817 24 16C24 20.4183 27.5817 24 32 24C36.4183 24 40 20.4183 40 16C40 11.5817 36.4183 8.00001 32 8.00001ZM18.6667 16C18.6667 8.63621 24.6362 2.66667 32 2.66667C39.3638 2.66667 45.3334 8.63621 45.3334 16C45.3334 23.3638 39.3638 29.3333 32 29.3333C24.6362 29.3333 18.6667 23.3638 18.6667 16Z" fill="url(#paint0_linear)"/>
              <path d="M10.6667 17.9333C10.6667 16.2765 12.0098 14.9333 13.6667 14.9333H50.3333C51.9902 14.9333 53.3334 16.2765 53.3334 17.9333V53.6667C53.3334 56.4281 51.0948 58.6667 48.3334 58.6667H15.6667C12.9053 58.6667 10.6667 56.4281 10.6667 53.6667V17.9333Z" fill="url(#paint1_linear)"/>
              <g filter="url(#filter0_i)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3333 37.12L24.9173 33.7067L29.3973 37.9733L40.1493 27.7333L43.7333 31.1467L29.3973 44.8L21.3333 37.12Z" fill="url(#paint2_linear)"/>
              </g>
              <defs>
                <filter id="filter0_i" x="21.3333" y="27.7333" width="22.4" height="17.0667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0493759 0 0 0 0 0.339079 0 0 0 0 0.0644254 0 0 0 0.4 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
                <linearGradient id="paint0_linear" x1="21.3334" y1="5.33334" x2="21.3334" y2="26.6667" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#83D788" offset="0"/>
                  <stop offset="1" stop-color="#4DB051"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="10.6667" y1="14.9333" x2="10.6667" y2="58.6667" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#83D888" offset="0"/>
                  <stop offset="1" stop-color="#4CAF50"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="24.5477" y1="25.8025" x2="21.5442" y2="43.2252" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2E7B32" offset="0"/>
                  <stop offset="1" stop-color="#2E7B32"/>
                </linearGradient>
              </defs>
            </svg>
            <div class="flex flex-col items-center">
              <strong>{{ ordersGist.paid }} سفارش</strong>
              <small>پرداخت شده</small>
            </div>
          </li>
          <li class="flex flex-col lg:flex-row items-center lg:space-x-2 lg:space-x-reverse">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M32 8.00001C27.5817 8.00001 24 11.5817 24 16C24 20.4183 27.5817 24 32 24C36.4183 24 40 20.4183 40 16C40 11.5817 36.4183 8.00001 32 8.00001ZM18.6667 16C18.6667 8.63621 24.6362 2.66667 32 2.66667C39.3638 2.66667 45.3333 8.63621 45.3333 16C45.3333 23.3638 39.3638 29.3333 32 29.3333C24.6362 29.3333 18.6667 23.3638 18.6667 16Z" fill="url(#paint0_linear)"/>
              <path d="M10.6667 17.9333C10.6667 16.2765 12.0098 14.9333 13.6667 14.9333H50.3333C51.9902 14.9333 53.3333 16.2765 53.3333 17.9333V53.6667C53.3333 56.4281 51.0947 58.6667 48.3333 58.6667H15.6667C12.9052 58.6667 10.6667 56.4281 10.6667 53.6667V17.9333Z" fill="url(#paint1_linear)"/>
              <g filter="url(#filter0_i)">
                <path d="M26.6667 25.6L20.2667 32L26.6667 38.4H33.0667L28.8 34.1333H36.2667L36.4796 34.1386C38.7371 34.2495 40.5333 36.115 40.5333 38.4C40.5333 40.7564 38.6231 42.6667 36.2667 42.6667H22.4V46.9333H36.2667L36.5325 46.9293C41.1223 46.7889 44.8 43.0239 44.8 38.4C44.8 33.6872 40.9795 29.8667 36.2667 29.8667H28.8L33.0667 25.6H26.6667Z" fill="#D09A2D"/>
              </g>
              <defs>
                <filter id="filter0_i" x="20.2667" y="25.6" width="24.5333" height="21.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.6875 0 0 0 0 0.480719 0 0 0 0 0.0633265 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                </filter>
                <linearGradient id="paint0_linear" x1="21.3333" y1="5.33334" x2="21.3333" y2="26.6667" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFD681" offset="0"/>
                  <stop offset="1" stop-color="#E6B040"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="30.4005" y1="4.98528" x2="-1.58915" y2="38.5906" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFD782" offset="0"/>
                  <stop offset="1" stop-color="#E3AC39"/>
                </linearGradient>
              </defs>
            </svg>
            <div class="flex flex-col items-center">
              <strong>{{ ordersGist.returned }} سفارش</strong>
              <small>مرجوع شده</small>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div v-else class="my-4">
      <div class="w-full flex items-center justify-between">
        <div class="flex gap-4 items-center">
          <div class="p-3 rounded-full aspect-square bg-[#D9D9D9]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.294 7.29105C17.294 10.2281 14.9391 12.5831 12 12.5831C9.0619 12.5831 6.70601 10.2281 6.70601 7.29105C6.70601 4.35402 9.0619 2 12 2C14.9391 2 17.294 4.35402 17.294 7.29105ZM12 22C7.66237 22 4 21.295 4 18.575C4 15.8539 7.68538 15.1739 12 15.1739C16.3386 15.1739 20 15.8789 20 18.599C20 21.32 16.3146 22 12 22Z" fill="white"/>
            </svg>
          </div>
          <div class="flex flex-col space-y-1" v-if="!accountStore.initLoading">
            <strong>{{ accountStore.currentUser?.fullName }}</strong>
            <span class="text-sm font-light">{{accountStore.currentUser?.phoneNumber}}</span>
          </div>
        </div>
        <NuxtLink to="/profile/personal-info">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.15352 14.6397C3.69602 14.6397 3.26853 14.4822 2.96103 14.1897C2.57103 13.8222 2.38353 13.2672 2.45103 12.6672L2.72853 10.2372C2.78103 9.77967 3.05853 9.17217 3.38103 8.84217L9.53853 2.32467C11.076 0.69717 12.681 0.652171 14.3085 2.18967C15.936 3.72717 15.981 5.33217 14.4435 6.95967L8.28603 13.4772C7.97103 13.8147 7.38602 14.1297 6.92852 14.2047L4.51353 14.6172C4.38602 14.6247 4.27352 14.6397 4.15352 14.6397ZM11.946 2.18217C11.3685 2.18217 10.866 2.54217 10.356 3.08217L4.19852 9.60717C4.04852 9.76467 3.87603 10.1397 3.84603 10.3572L3.56853 12.7872C3.53853 13.0347 3.59853 13.2372 3.73353 13.3647C3.86853 13.4922 4.07103 13.5372 4.31853 13.4997L6.73352 13.0872C6.95103 13.0497 7.31103 12.8547 7.46103 12.6972L13.6185 6.17967C14.5485 5.18967 14.886 4.27467 13.5285 2.99967C12.9285 2.42217 12.411 2.18217 11.946 2.18217Z" fill="#F04623"/>
            <path d="M13.0044 8.21263C12.9894 8.21263 12.9669 8.21263 12.9519 8.21263C10.6119 7.98013 8.72935 6.20263 8.36935 3.87763C8.32435 3.57013 8.53435 3.28513 8.84185 3.23263C9.14935 3.18763 9.43435 3.39763 9.48685 3.70513C9.77185 5.52013 11.2419 6.91513 13.0719 7.09513C13.3794 7.12513 13.6044 7.40263 13.5744 7.71013C13.5369 7.99513 13.2894 8.21263 13.0044 8.21263Z" fill="#F04623"/>
            <path d="M15.75 17.0625H2.25C1.9425 17.0625 1.6875 16.8075 1.6875 16.5C1.6875 16.1925 1.9425 15.9375 2.25 15.9375H15.75C16.0575 15.9375 16.3125 16.1925 16.3125 16.5C16.3125 16.8075 16.0575 17.0625 15.75 17.0625Z" fill="#F04623"/>
          </svg>
        </NuxtLink>
      </div>
      <hr class="my-4">
      <div class="flex flex-col">
        <div class="flex gap-2">
          <NuxtLink to="/profile/wallet" class="bg-[#F5F5F5] flex-1 flex gap-2 items-center rounded-xl py-2 px-4">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle cx="25" cy="25" r="25" fill="white"/>
              <rect x="13" y="12" width="25" height="25" fill="url(#pattern0_906_7776)"/>
              <defs>
                <pattern id="pattern0_906_7776" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_906_7776" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_906_7776" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <div class="flex flex-col">
              <base-g-price :price="accountStore.currentUser?.walletCash / 10" />
              <span class="text-xs font-light">کیف پول</span>
            </div>
          </NuxtLink>
          <div class="bg-[#F5F5F5] w-max flex gap-2 items-center rounded-xl py-2 px-4">
            <div class="bg-white p-3 aspect-square rounded-full">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="25" height="25" fill="url(#pattern0_906_7767)"/>
                <defs>
                  <pattern id="pattern0_906_7767" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_906_7767" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_906_7767" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
            </div>
            <div class="flex flex-col">
              <strong>{{ ordersGist?.pending + ordersGist?.paid + ordersGist?.returned }}</strong>
              <span class="text-xs font-light">سفارشات</span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 place-items-center mt-4">
          <div class="flex flex-col space-y-2 items-center relative">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="35" height="35" fill="url(#pattern0_906_7787)"/>
              <defs>
                <pattern id="pattern0_906_7787" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_906_7787" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_906_7787" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <small class="font-thin">جاری</small>
            <span class="min-w-5 grid place-items-center font-thin aspect-square rounded-full bg-brandOrange text-white text-xs absolute left-0 translate-y-2">{{ ordersGist?.pending }}</span>
          </div>
          <div class="flex flex-col space-y-2 items-center relative">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="35" height="35" fill="url(#pattern0_906_7788)"/>
              <defs>
                <pattern id="pattern0_906_7788" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_906_7788" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_906_7788" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <small class="font-thin">تحویل شده</small>
            <span class="min-w-5 grid place-items-center font-thin aspect-square rounded-full bg-brandOrange text-white text-xs absolute left-0 translate-y-2">{{ ordersGist?.paid }}</span>
          </div>
          <div class="flex flex-col space-y-2 items-center relative">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="35" height="35" fill="url(#pattern0_906_7786)"/>
              <defs>
                <pattern id="pattern0_906_7786" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_906_7786" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_906_7786" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <small class="font-thin">مرجوع شده</small>
            <span class="min-w-5 grid place-items-center font-thin aspect-square rounded-full bg-brandOrange text-white text-xs absolute left-0 translate-y-2" v-if="ordersGist?.returned !== 0">{{ ordersGist?.returned }}</span>
          </div>
        </div>
      </div>
      <ul class="mt-6">
        <li>
          <NuxtLink to="/profile/orders" class="py-4 border-t flex items-center w-full justify-between">
            <div class="flex gap-4 items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M15.7729 9.30504V6.27304C15.7729 4.18904 14.0839 2.50004 12.0009 2.50004C9.91694 2.49104 8.21994 4.17204 8.21094 6.25604V6.27304V9.30504" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7422 21.0006H7.25778C4.90569 21.0006 3 19.0956 3 16.7456V11.2296C3 8.87961 4.90569 6.97461 7.25778 6.97461H16.7422C19.0943 6.97461 21 8.87961 21 11.2296V16.7456C21 19.0956 19.0943 21.0006 16.7422 21.0006Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span>سفارشات</span>
            </div>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M5 1L1 5.5L5 10" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile/favorites" class="py-4 border-t flex items-center w-full justify-between">
            <div class="flex gap-4 items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16 6.7002C17.07 7.0462 17.826 8.0012 17.917 9.1222" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span>محبوب ها</span>
            </div>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M5 1L1 5.5L5 10" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="py-4 border-t flex items-center w-full justify-between">
            <div class="flex gap-4 items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.9408 12.4131H15.9498" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.9291 12.4131H11.9381" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.92128 12.4131H7.93028" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

              <span>دیدگاه ها</span>
            </div>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M5 1L1 5.5L5 10" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile/addresses" class="py-4 border-t flex items-center w-full justify-between">
            <div class="flex gap-4 items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

              <span>آدرس ها</span>
            </div>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M5 1L1 5.5L5 10" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile/user-history" class="py-4 border-t flex items-center w-full justify-between">
            <div class="flex gap-4 items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M3.09375 9.40445H20.9177" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.4429 13.3097H16.4522" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.0054 13.3097H12.0147" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.55622 13.3097H7.56549" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.4429 17.1964H16.4522" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.0054 17.1964H12.0147" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.55622 17.1964H7.56549" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.0452 2V5.29078" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7.96711 2V5.29078" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

              <span>بازدید های اخیر</span>
            </div>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M5 1L1 5.5L5 10" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/profile/personal-info" class="py-4 border-t flex items-center w-full justify-between">
            <div class="flex gap-4 items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.983 15.3457C8.11536 15.3457 4.8125 15.9305 4.8125 18.2724C4.8125 20.6143 8.0944 21.22 11.983 21.22C15.8506 21.22 19.1525 20.6343 19.1525 18.2933C19.1525 15.9524 15.8715 15.3457 11.983 15.3457Z" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9829 12.0059C14.521 12.0059 16.5782 9.94779 16.5782 7.40969C16.5782 4.8716 14.521 2.81445 11.9829 2.81445C9.44484 2.81445 7.38675 4.8716 7.38675 7.40969C7.37817 9.93922 9.42198 11.9973 11.9506 12.0059H11.9829Z" stroke="#0A0A0A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>


              <span>اطلاعات کاربری</span>
            </div>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M5 1L1 5.5L5 10" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </li>
        <li>
          <button @click="authStore.logOut" class="py-4 border-t flex items-center w-full justify-between">
            <div class="flex gap-4 items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0174 7.38948V6.45648C15.0174 4.42148 13.3674 2.77148 11.3324 2.77148H6.45744C4.42344 2.77148 2.77344 4.42148 2.77344 6.45648V17.5865C2.77344 19.6215 4.42344 21.2715 6.45744 21.2715H11.3424C13.3714 21.2715 15.0174 19.6265 15.0174 17.5975V16.6545" stroke="#F42020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.8105 12.0215H9.76953" stroke="#F42020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.8828 9.10645L21.8108 12.0214L18.8828 14.9374" stroke="#F42020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <span>خروج</span>
            </div>
          </button>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {OrderGist} from "~/models/cart/cartQueries";
import {GetOrdersGist} from "~/services/cart.service";

const utilStore = useUtilStore();
const authStore = useAuthStore();
const accountStore = useAccountStore();

definePageMeta({
  layout: 'profile'
})

const loading = ref(false);
const ordersGist:Ref<OrderGist> = ref({
  pending: 0,
  paid: 0,
  returned: 0,
  canceled: 0
});

onMounted(async ()=>{
  loading.value = true;

  const result = await GetOrdersGist();
  if(result.isSuccess){
    ordersGist.value = result.data ?? {
      pending: 0,
      paid: 0,
      returned: 0,
      canceled: 0
    };
  }

  loading.value = false;
})

</script>