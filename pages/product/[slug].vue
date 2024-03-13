<template>
  <div class="mt-12 flex flex-col space-y-8 mx-4 lg:mx-0" v-if="!isLoading && product">
    <Head>
      <Title>
        {{product.title}}
      </Title>
    </Head>
    <div>
      <ul class="flex items-center gap-2 text-xs lg:text-base">
        <li class="text-primary font-medium">
          <NuxtLink to="/">جی پی زعفران</NuxtLink>
        </li>
        <li class="opacity-40 pointer-events-none select-none dark:text-white">/</li>
        <li class="text-primary font-medium">
          <NuxtLink to="/">محصولات</NuxtLink>
        </li>
        <li class="opacity-40 pointer-events-none select-none dark:text-white">/</li>
        <li class="text-primary font-medium">
          <NuxtLink to="/">{{ product.category.title }}</NuxtLink>
        </li>
        <li class="opacity-40 pointer-events-none select-none  dark:text-white">/</li>
        <li class="font-light dark:text-white">{{product.subCategory?.title}}</li>
      </ul>
    </div>
    <section class="flex flex-col items-center space-y-8 lg:space-y-0 lg:items-start lg:flex-row">

      <div class="flex-1 flex flex-col lg:order-2 mx-4 dark:text-white">
        <h1 class="text-lg lg:text-2xl font-bold">{{ product.title }}</h1>
        <hr class="my-2">
        <ul class="flex flex-col space-y-3 list-disc pr-6 mt-4">
          <li>
            <span class="text-sm font-light">شکل ماده غذایی:</span>
            <strong class="text-sm mr-2">{{ EPackingType[product.packingType].toString().replaceAll('_',' ') }}</strong>
          </li>
          <li>
            <span class="text-sm font-light">پروانه بهداشت:</span>
            <strong class="text-sm mr-2">دارد</strong>
          </li>
        </ul>

        <div class="bg-danger/40 text-black p-4 rounded-xl mt-8 lg:mt-32 animate-pulse">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="float-right ml-2">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9881 8.05436C15.9744 8.17596 15.9547 8.25875 15.9154 8.42435C14.7287 13.421 10.5155 15.2845 8.76807 15.8529C8.46664 15.951 8.31593 16 8 16C7.68407 16 7.53336 15.951 7.23193 15.8529C5.48452 15.2845 1.27126 13.421 0.0845825 8.42434C0.0452561 8.25875 0.025593 8.17596 0.0119267 8.05436C-0.00173957 7.93276 -0.000806617 7.83253 0.00105928 7.63206C0.0594355 1.3602 1.54671 0 8 0C14.4533 0 15.9406 1.3602 15.9989 7.63206C16.0008 7.83253 16.0017 7.93277 15.9881 8.05436ZM8 4.01658C8.36824 4.01658 8.66673 4.31628 8.66673 4.68601V8.70259C8.66673 9.07232 8.36824 9.37202 8 9.37202C7.63176 9.37202 7.33327 9.07232 7.33327 8.70259V4.68601C7.33327 4.31628 7.63176 4.01658 8 4.01658ZM7.33327 10.7109C7.33327 10.3411 7.63176 10.0414 8 10.0414C8.36824 10.0414 8.66673 10.3411 8.66673 10.7109C8.66673 11.0806 8.36824 11.3803 8 11.3803C7.63176 11.3803 7.33327 11.0806 7.33327 10.7109Z" fill="#FF7272"/>
          </svg>
          <p class="text-sm text-justify dark:text-white">
            خریداران محترم می‌توانند پس از تهیه و <b>تست</b> محصول در صورت عدم رضایت نسبت به <b>مرجوع کردن</b> آن بدون پرداخت هیچ خسارتی اقدام کنند و مبلغ پرداختی خود را دریافت کنند.
          </p>
        </div>

        <div class="flex items-center justify-around mt-8 lg:mt-14 opacity-70 gap-4">
          <div class="flex flex-col items-center space-y-2 text-xs text-center">
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M17.8076 25.5L22.9289 30.6425L33.1926 20.3575" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.8439 5.20625C24.3101 3.9525 26.7114 3.9525 28.1989 5.20625L31.5564 8.09625C32.1939 8.64875 33.3839 9.095 34.2339 9.095H37.8464C40.0989 9.095 41.9476 10.9438 41.9476 13.1963V16.8087C41.9476 17.6375 42.3939 18.8488 42.9464 19.4863L45.8364 22.8438C47.0901 24.31 47.0901 26.7113 45.8364 28.1988L42.9464 31.5563C42.3939 32.1938 41.9476 33.3838 41.9476 34.2338V37.8462C41.9476 40.0987 40.0989 41.9475 37.8464 41.9475H34.2339C33.4051 41.9475 32.1939 42.3937 31.5564 42.9462L28.1989 45.8363C26.7326 47.09 24.3314 47.09 22.8439 45.8363L19.4864 42.9462C18.8489 42.3937 17.6589 41.9475 16.8089 41.9475H13.1326C10.8801 41.9475 9.03137 40.0987 9.03137 37.8462V34.2125C9.03137 33.3838 8.58512 32.1938 8.05387 31.5563L5.18512 28.1775C3.95262 26.7113 3.95262 24.3313 5.18512 22.865L8.05387 19.4863C8.58512 18.8488 9.03137 17.6588 9.03137 16.83V13.175C9.03137 10.9225 10.8801 9.07375 13.1326 9.07375H16.8089C17.6376 9.07375 18.8489 8.6275 19.4864 8.075L22.8439 5.20625Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span>تضمین اصالت کالا</span>
          </div>
          <div class="flex flex-col items-center space-y-2 text-xs text-center">
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M25.5 29.75H27.625C29.9625 29.75 31.875 27.8375 31.875 25.5V4.25H12.75C9.56247 4.25 6.77874 6.01372 5.33374 8.60622" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.25 36.125C4.25 39.6525 7.0975 42.5 10.625 42.5H12.75C12.75 40.1625 14.6625 38.25 17 38.25C19.3375 38.25 21.25 40.1625 21.25 42.5H29.75C29.75 40.1625 31.6625 38.25 34 38.25C36.3375 38.25 38.25 40.1625 38.25 42.5H40.375C43.9025 42.5 46.75 39.6525 46.75 36.125V29.75H40.375C39.2062 29.75 38.25 28.7938 38.25 27.625V21.25C38.25 20.0812 39.2062 19.125 40.375 19.125H43.1162L39.4825 12.7713C38.7175 11.4538 37.3151 10.625 35.7851 10.625H31.875V25.5C31.875 27.8375 29.9625 29.75 27.625 29.75H25.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 46.75C19.3472 46.75 21.25 44.8472 21.25 42.5C21.25 40.1528 19.3472 38.25 17 38.25C14.6528 38.25 12.75 40.1528 12.75 42.5C12.75 44.8472 14.6528 46.75 17 46.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M34 46.75C36.3472 46.75 38.25 44.8472 38.25 42.5C38.25 40.1528 36.3472 38.25 34 38.25C31.6528 38.25 29.75 40.1528 29.75 42.5C29.75 44.8472 31.6528 46.75 34 46.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M46.75 25.5V29.75H40.375C39.2062 29.75 38.25 28.7938 38.25 27.625V21.25C38.25 20.0812 39.2062 19.125 40.375 19.125H43.1162L46.75 25.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.25 17H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.25 23.375H12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.25 29.75H8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span>تحویل به موقع و درب منزل</span>
          </div>
          <div class="flex flex-col items-center space-y-2 text-xs text-center">
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.7">
                <path d="M11.6026 39.2912V33.0862C11.6026 31.025 13.2176 29.1762 15.5126 29.1762C17.5739 29.1762 19.4226 30.7912 19.4226 33.0862V39.0575C19.4226 43.2012 15.9801 46.6438 11.8364 46.6438C7.6926 46.6438 4.2501 43.18 4.2501 39.0575V25.9675C4.01635 14.025 13.4514 4.35625 25.3939 4.35625C37.3364 4.35625 46.7501 14.025 46.7501 25.7337V38.8237C46.7501 42.9675 43.3076 46.41 39.1639 46.41C35.0201 46.41 31.5776 42.9675 31.5776 38.8237V32.8525C31.5776 30.7912 33.1926 28.9425 35.4876 28.9425C37.5489 28.9425 39.3976 30.5575 39.3976 32.8525V39.2912" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>

            <span>پشتیبانی 24 ساعته</span>
          </div>
        </div>
      </div>

      <div class="fixed inset-0 bg-black/50 grid place-items-center z-40 m-0 p-0" v-if="showBannerModal" @click.self="showBannerModal = false" style="margin: 0 !important">
        <div class="w-4/5 h-auto max-w-[1000px] relative m-auto flex items-center ">
          <img :src="bannerImage" :alt="product.mainImage.alt" class="w-full h-full object-cover rounded-2xl">
          <button class="absolute top-2 right-2 w-8 h-8 bg-danger rounded-lg grid place-items-center text-white drop-shadow" @click.prevent="showBannerModal = false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-45">
              <path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="w-12 h-12 rounded-full bg-bgWhite drop-shadow absolute -right-6 grid place-items-center hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="w-12 h-12 rounded-full bg-bgWhite drop-shadow absolute -left-6 grid place-items-center hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-180">
              <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="w-full lg:w-1/3 flex flex-col lg:order-1 mx-4 lg:mx-0 flex-shrink space-y-4">
        <div class="rounded-2xl relative w-full overflow-hidden">
          <img :src="`${SITE_URL}/product/images/${product.mainImage.src}`" :alt="product.mainImage.alt" class="w-full rounded-2xl">
          <div class="absolute inset-0 opacity-0 hover:opacity-70 bg-black/40 rounded-2xl text-white grid place-items-center cursor-pointer transition duration-100" @click="showBanner(`${SITE_URL}/product/images/${product.mainImage.src}`)">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3999 23.4H28.3999" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.3999 28.4V18.4" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23 42C33.4934 42 42 33.4934 42 23C42 12.5066 33.4934 4 23 4C12.5066 4 4 12.5066 4 23C4 33.4934 12.5066 42 23 42Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M44 44L40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="flex items-stretch space-x-4 space-x-reverse">
          <div class="rounded-2xl relative overflow-hidden flex items-center justify-center" v-for="i in product.images" :key="i">
            <div class="rounded-2xl border-2 border-brandOrange min-w-24 max-w-32 aspect-square object-cover">
              <img :src="`${SITE_URL}/product/images/${product.id}/${i.image.src}`" :alt="i.image.alt" class="rounded-2xl h-full mx-auto object-cover">
            </div>
            <button class="absolute inset-0 opacity-0 hover:opacity-70 bg-black/40 rounded-2xl text-white grid place-items-center cursor-pointer transition duration-100" @click="showBanner(`${SITE_URL}/product/images/${product.id}/${i.image.src}`)">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3999 23.4H28.3999" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.3999 28.4V18.4" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23 42C33.4934 42 42 33.4934 42 23C42 12.5066 33.4934 4 23 4C12.5066 4 4 12.5066 4 23C4 33.4934 12.5066 42 23 42Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M44 44L40 40" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="bg-bgWhite dark:bg-gray-800 dark:text-white p-6 rounded-2xl w-full lg:w-1/4 lg:order-3 drop-shadow-lg">
        <div class="flex items-end justify-between">
          <div class="flex items-stretch space-x-2 space-x-reverse">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M3.82665 10.6667C3.89999 10.34 3.76665 9.87333 3.53332 9.64L1.91332 8.01999C1.40665 7.51333 1.20665 6.97333 1.35332 6.50666C1.50665 6.04 1.97999 5.71999 2.68665 5.59999L4.76665 5.25333C5.06665 5.2 5.43332 4.93333 5.57332 4.65999L6.71999 2.35999C7.05332 1.69999 7.50665 1.33333 7.99999 1.33333C8.49332 1.33333 8.94665 1.69999 9.27999 2.35999L10.4267 4.65999C10.5133 4.83333 10.6933 5 10.8867 5.11333L3.70665 12.2933C3.61332 12.3867 3.45332 12.3 3.47999 12.1667L3.82665 10.6667Z" fill="#A1C53C"/>
              <path d="M12.4667 9.64C12.2267 9.88 12.0934 10.34 12.1734 10.6667L12.6334 12.6733C12.8267 13.5067 12.7067 14.1333 12.2934 14.4333C12.1267 14.5533 11.9267 14.6133 11.6934 14.6133C11.3534 14.6133 10.9534 14.4867 10.5134 14.2267L8.56003 13.0667C8.25337 12.8867 7.7467 12.8867 7.44003 13.0667L5.4867 14.2267C4.7467 14.66 4.11337 14.7333 3.7067 14.4333C3.55337 14.32 3.44003 14.1667 3.3667 13.9667L11.4734 5.86C11.78 5.55333 12.2134 5.41333 12.6334 5.48666L13.3067 5.6C14.0134 5.72 14.4867 6.04 14.64 6.50666C14.7867 6.97333 14.5867 7.51333 14.08 8.02L12.4667 9.64Z" fill="#A1C53C"/>
            </svg>

            <strong v-if="totalScore > 0">{{ totalScore / productComments.length }}</strong>
            <span class="font-light text-xs" v-else>هنوز امتیازی ثبت نشده است</span>
            <small class="self-end font-light" v-if="totalScore > 0">امتیاز خریداران</small>
            <div class="w-px bg-black/30 dark:bg-white/30"></div>
            <a href="#comments" class="text-sm text-primary self-end hover:underline underline-offset-4 font-light">{{productComments.length}} دیدگاه</a>
          </div>
          <div class="flex flex-row-reverse space-x-2">
            <button class="w-10 h-10 bg-secondary/30 dark:bg-gray-900 rounded-xl grid place-items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 13.5L15 16.5M15 7.5L9 10.5M18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21ZM6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12C9 13.6569 7.65685 15 6 15ZM18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6C21 7.65685 19.6569 9 18 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="w-10 h-10 bg-secondary/30 dark:bg-gray-900 rounded-xl grid place-items-center hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1963 14.1963L19.5498 13.8427L19.1963 14.1963ZM19.5858 14.5858L19.2323 14.9394L19.5858 14.5858ZM19.9478 16.3197L20.4215 16.4795L19.9478 16.3197ZM19.3198 16.9475L19.4796 17.4213L19.3198 16.9475ZM19.8124 14.831L20.2186 14.5394L19.8124 14.831ZM19.9868 15.2523L19.4934 15.3333L19.9868 15.2523ZM12 3L12 2.5L12 3ZM4.0132 15.2523L4.5066 15.3333L4.0132 15.2523ZM4.1875 14.831L3.78136 14.5394L4.1875 14.831ZM4.05245 16.3196L4.52623 16.1598L4.05245 16.3196ZM4.68018 16.9475L4.83998 16.4737L4.68018 16.9475ZM15 17H15.5C15.5 16.7239 15.2761 16.5 15 16.5V17ZM9 17V16.5C8.72386 16.5 8.5 16.7239 8.5 17H9ZM18.3195 1.61435C18.0989 1.44817 17.7854 1.49223 17.6192 1.71276C17.4531 1.9333 17.4971 2.2468 17.7176 2.41299L18.3195 1.61435ZM20.7138 6.21495C20.8238 6.46823 21.1183 6.58436 21.3716 6.47434C21.6249 6.36431 21.741 6.0698 21.631 5.81652L20.7138 6.21495ZM6.28287 2.41299C6.50341 2.2468 6.54747 1.9333 6.38128 1.71276C6.2151 1.49223 5.9016 1.44817 5.68106 1.61435L6.28287 2.41299ZM2.36953 5.81652C2.2595 6.0698 2.37563 6.36431 2.62891 6.47434C2.88219 6.58436 3.1767 6.46823 3.28672 6.21495L2.36953 5.81652ZM4.76762 14.9393L5.15712 14.5498L4.45001 13.8427L4.06051 14.2322L4.76762 14.9393ZM5.5 13.7224V10H4.5V13.7224H5.5ZM18.5 10V13.7224H19.5V10H18.5ZM18.8427 14.5498L19.2323 14.9394L19.9394 14.2323L19.5498 13.8427L18.8427 14.5498ZM18.5856 16.5H5.41406V17.5H18.5856V16.5ZM19.5002 15.5858C19.5002 16.0117 19.4936 16.1017 19.474 16.1599L20.4215 16.4795C20.5068 16.2266 20.5002 15.931 20.5002 15.5858H19.5002ZM18.5856 17.5C18.9309 17.5 19.2267 17.5066 19.4796 17.4213L19.16 16.4737C19.1018 16.4934 19.0115 16.5 18.5856 16.5V17.5ZM19.474 16.1599C19.4241 16.3077 19.308 16.4238 19.16 16.4737L19.4796 17.4213C19.9233 17.2716 20.2718 16.9234 20.4215 16.4795L19.474 16.1599ZM19.2323 14.9394C19.3634 15.0706 19.3881 15.0973 19.4063 15.1226L20.2186 14.5394C20.1417 14.4323 20.0468 14.3397 19.9394 14.2323L19.2323 14.9394ZM20.5002 15.5858C20.5002 15.4324 20.5015 15.3011 20.4802 15.1713L19.4934 15.3333C19.4985 15.3644 19.5002 15.4018 19.5002 15.5858H20.5002ZM19.4063 15.1226C19.451 15.1849 19.4809 15.257 19.4934 15.3333L20.4802 15.1713C20.4428 14.9436 20.3535 14.7273 20.2186 14.5394L19.4063 15.1226ZM18.5 13.7224C18.5 14.0327 18.6233 14.3304 18.8427 14.5498L19.5498 13.8427C19.5179 13.8108 19.5 13.7675 19.5 13.7224H18.5ZM12 3.5C15.5899 3.49999 18.5 6.41014 18.5 10H19.5C19.5 5.85786 16.1421 2.49999 12 2.5L12 3.5ZM5.5 10C5.5 6.41016 8.41016 3.50001 12 3.5L12 2.5C7.85787 2.50001 4.5 5.85787 4.5 10H5.5ZM5.15712 14.5498C5.37635 14.3306 5.5 14.0331 5.5 13.7224H4.5C4.5 13.7673 4.48213 13.8106 4.45001 13.8427L5.15712 14.5498ZM4.5 15.5858C4.5 15.4008 4.50154 15.3642 4.5066 15.3333L3.5198 15.1713C3.49846 15.3014 3.5 15.4334 3.5 15.5858H4.5ZM4.06051 14.2322C3.95284 14.3399 3.85822 14.4323 3.78136 14.5394L4.59364 15.1226C4.61186 15.0972 4.63668 15.0703 4.76762 14.9393L4.06051 14.2322ZM4.5066 15.3333C4.51915 15.2568 4.54899 15.1848 4.59364 15.1226L3.78136 14.5394C3.64632 14.7274 3.55714 14.9438 3.5198 15.1713L4.5066 15.3333ZM3.5 15.5858C3.5 15.931 3.49339 16.2266 3.57868 16.4795L4.52623 16.1598C4.50661 16.1017 4.5 16.0118 4.5 15.5858H3.5ZM5.41406 16.5C4.98823 16.5 4.89815 16.4934 4.83998 16.4737L4.52037 17.4213C4.77321 17.5066 5.0688 17.5 5.41406 17.5V16.5ZM3.57868 16.4795C3.72834 16.9231 4.07645 17.2715 4.52037 17.4213L4.83998 16.4737C4.69217 16.4239 4.57616 16.3079 4.52623 16.1598L3.57868 16.4795ZM14.5 17V18H15.5V17H14.5ZM9.5 18V17H8.5V18H9.5ZM9 17.5H15V16.5H9V17.5ZM12 20.5C10.6193 20.5 9.5 19.3807 9.5 18H8.5C8.5 19.933 10.067 21.5 12 21.5V20.5ZM14.5 18C14.5 19.3807 13.3807 20.5 12 20.5V21.5C13.933 21.5 15.5 19.933 15.5 18H14.5ZM17.7176 2.41299C19.0279 3.40034 20.0601 4.71018 20.7138 6.21495L21.631 5.81652C20.9085 4.15335 19.7676 2.70563 18.3195 1.61435L17.7176 2.41299ZM5.68106 1.61435C4.23288 2.70563 3.092 4.15335 2.36953 5.81652L3.28672 6.21495C3.94039 4.71018 4.97262 3.40034 6.28287 2.41299L5.68106 1.61435Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="w-full mt-16 flex flex-col space-y-2">
          <div class="flex space-x-2 space-x-reverse">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3733 7.16L13.4667 6.10667C13.2933 5.90667 13.1533 5.53333 13.1533 5.26667V4.13333C13.1533 3.42667 12.5733 2.84666 11.8667 2.84666H10.7333C10.4733 2.84666 10.0933 2.70667 9.89334 2.53333L8.84 1.62667C8.38 1.23333 7.62667 1.23333 7.16 1.62667L6.11334 2.54C5.91334 2.70667 5.53334 2.84666 5.27334 2.84666H4.12C3.41334 2.84666 2.83334 3.42667 2.83334 4.13333V5.27333C2.83334 5.53333 2.69334 5.90667 2.52667 6.10667L1.62667 7.16666C1.24 7.62666 1.24 8.37333 1.62667 8.83333L2.52667 9.89333C2.69334 10.0933 2.83334 10.4667 2.83334 10.7267V11.8667C2.83334 12.5733 3.41334 13.1533 4.12 13.1533H5.27334C5.53334 13.1533 5.91334 13.2933 6.11334 13.4667L7.16667 14.3733C7.62667 14.7667 8.38 14.7667 8.84667 14.3733L9.9 13.4667C10.1 13.2933 10.4733 13.1533 10.74 13.1533H11.8733C12.58 13.1533 13.16 12.5733 13.16 11.8667V10.7333C13.16 10.4733 13.3 10.0933 13.4733 9.89333L14.38 8.84C14.7667 8.38 14.7667 7.62 14.3733 7.16ZM10.7733 6.74L7.55334 9.96C7.46 10.0533 7.33334 10.1067 7.2 10.1067C7.06667 10.1067 6.94 10.0533 6.84667 9.96L5.23334 8.34667C5.04 8.15333 5.04 7.83333 5.23334 7.64C5.42667 7.44666 5.74667 7.44666 5.94 7.64L7.2 8.9L10.0667 6.03333C10.26 5.84 10.58 5.84 10.7733 6.03333C10.9667 6.22667 10.9667 6.54666 10.7733 6.74Z" fill="#4E9CFF"/>
            </svg>

            <span class="font-light">
              گارانتی اصالت و سلامت فیزیکی کالا
            </span>
          </div>
          <div class="flex space-x-2 space-x-reverse">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99996 15.1667C9.81996 15.1667 9.6533 15.0667 9.56663 14.9133C9.47996 14.7533 9.47996 14.5667 9.5733 14.4067L10.2733 13.24C10.4133 13.0067 10.72 12.9267 10.96 13.0667C11.2 13.2067 11.2733 13.5133 11.1333 13.7533L10.9533 14.0533C12.7933 13.62 14.1733 11.9667 14.1733 9.99333C14.1733 9.72 14.4 9.49333 14.6733 9.49333C14.9466 9.49333 15.1733 9.72 15.1733 9.99333C15.1666 12.8467 12.8466 15.1667 9.99996 15.1667Z" fill="#FF6F6F"/>
              <path d="M1.33325 6.5C1.05992 6.5 0.833252 6.27334 0.833252 6C0.833252 3.15334 3.15325 0.833336 5.99992 0.833336C6.17992 0.833336 6.34659 0.933336 6.43325 1.08667C6.51992 1.24667 6.51992 1.43334 6.42659 1.59334L5.72659 2.76C5.58659 2.99334 5.27992 3.07334 5.03992 2.92667C4.80659 2.78667 4.72659 2.48 4.87325 2.24L5.05325 1.94C3.20659 2.37334 1.83325 4.02667 1.83325 6C1.83325 6.27334 1.60659 6.5 1.33325 6.5Z" fill="#FF6F6F"/>
              <path d="M10.9334 5.47333L8.42677 4.12C8.1601 3.98 7.84677 3.98 7.5801 4.12L5.06677 5.47333C4.88677 5.57333 4.77344 5.76667 4.77344 5.98C4.77344 6.2 4.88677 6.39333 5.06677 6.49333L7.57344 7.84667C7.70677 7.92 7.85344 7.95333 8.0001 7.95333C8.14677 7.95333 8.29344 7.92 8.42677 7.84667L10.9334 6.49333C11.1134 6.39333 11.2268 6.2 11.2268 5.98C11.2268 5.76667 11.1134 5.57333 10.9334 5.47333Z" fill="#FF6F6F"/>
              <path d="M7.16 8.31333L4.82667 7.14667C4.64667 7.06 4.44 7.06667 4.26667 7.17333C4.1 7.28 4 7.46 4 7.66V9.86667C4 10.2467 4.21333 10.5933 4.55333 10.76L6.88667 11.9267C6.96667 11.9667 7.05333 11.9867 7.14667 11.9867C7.25333 11.9867 7.35333 11.96 7.44667 11.9C7.62 11.7933 7.72 11.6133 7.72 11.4133V9.20667C7.71333 8.82667 7.50667 8.48667 7.16 8.31333Z" fill="#FF6F6F"/>
              <path d="M11.7267 7.17333C11.5534 7.06667 11.3467 7.06 11.1667 7.14667L8.83336 8.31333C8.49336 8.48667 8.28003 8.82667 8.28003 9.20667V11.4133C8.28003 11.6133 8.38003 11.7933 8.55336 11.9C8.6467 11.96 8.7467 11.9867 8.85336 11.9867C8.94003 11.9867 9.0267 11.9667 9.11336 11.9267L11.4467 10.76C11.7867 10.5867 12 10.2467 12 9.86667V7.66C12 7.46 11.9 7.28 11.7267 7.17333Z" fill="#FF6F6F"/>
            </svg>

            <span class="font-light">
              مرجوعی بی قید و شرط کالا
            </span>
          </div>
        </div>
        <hr class="my-4 dark:border-gray-600">
        <div  class="border-2 border-dgKala p-2 px-4 w-full rounded-lg flex flex-col items-end text-sm text-dgKala space-y-2 dark:text-white animate-pulse" v-if="product.digiKalaLink != null">
          <a href="https://www.digikala.com/product/dkp-9083576" class="w-full flex items-center justify-between " target="_blank">
          <span class="underline-offset-4 underline ">
            قیمت محصول در دیجی کالا
          </span>
            <div class="flex items-end space-x-1 space-x-reverse">
              <strong class="text-base">2,235,000</strong>
              <small>ريال</small>
            </div>
          </a>
          <div class="w-full flex items-center justify-between text-xs">
          <span>
            تفاوت قیمت
          </span>
            <div class="flex items-end space-x-1 space-x-reverse">
              <strong>260,000 +</strong>
              <small>ريال</small>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-between items-center mt-4">
          <span class="font-light">قیمت:</span>
          <div class="flex items-end space-x-1 space-x-reverse">
            <strong class="text-2xl">{{ product.price.toLocaleString() }}</strong>
            <small>ريال</small>
          </div>
        </div>
        <button class="bg-brandOrange rounded-2xl p-3 shadow-lg w-full text-white mt-2 text-xl" @click="cartStore.addToCart">
          افزودن به سبد خرید
        </button>
      </div>
      <div class="lg:hidden fixed bottom-0 right-0 left-0 h-18 bg-bgWhite shadow-[0_10px_15px_5px_rgba(0,0,0,0.5)] z-10">
        <div class="flex w-full p-4 px-8 items-center">
          <div class="w-1/2">
            <button class="bg-brandOrange rounded-2xl p-3 shadow-lg w-full text-white text-sm mt-2" @click="cartStore.addToCart">
              افزودن به سبد خرید
            </button>
          </div>
          <div class="w-1/2 flex flex-col items-end">
            <div class="flex items-center gap-2">
              <small class="line-through opacity-40">2,350,000</small>
              <base-f-badge color="brandOrange" size="xs">10%</base-f-badge>
            </div>
            <div class="flex items-center gap-2">
              <strong>2,150,000</strong>
              <small>ریال</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section >
      <div class="w-full sticky top-0 bg-bgWhite dark:bg-gray-900 dark:text-white z-10 pt-8 ">
        <div class="grid grid-cols-4 lg:flex lg:space-x-12 lg:space-x-reverse text-center">
          <a href="#info" :class="[{'activeTab':visitingTab == 'info'}]">مشخصات</a>
          <a href="#comments" :class="[{'activeTab':visitingTab == 'comments'}]">نظرات</a>
          <a href="#catalog" :class="[{'activeTab':visitingTab == 'catalog'}]">کاتالوگ</a>
          <a href="#related" :class="[{'activeTab':visitingTab == 'related'}]">مرتبط</a>
        </div>
        <hr class="mt-2 border-brandOrange/50">
      </div>
      <div id="info" class="mt-8 mx-4 lg:mx-0 dark:text-white" ref="info">
        <div class="w-max flex items-center space-x-2 space-x-reverse border-b-2 border-brandOrange pb-2 pl-12">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
            <path d="M8.00008 14.6667C11.6734 14.6667 14.6667 11.6733 14.6667 7.99999C14.6667 4.32666 11.6734 1.33332 8.00008 1.33332C4.32675 1.33332 1.33342 4.32666 1.33342 7.99999C1.33342 11.6733 4.32675 14.6667 8.00008 14.6667ZM8.50008 10.6667C8.50008 10.94 8.27342 11.1667 8.00008 11.1667C7.72675 11.1667 7.50008 10.94 7.50008 10.6667V7.33332C7.50008 7.05999 7.72675 6.83332 8.00008 6.83332C8.27342 6.83332 8.50008 7.05999 8.50008 7.33332V10.6667ZM7.38675 5.07999C7.42008 4.99332 7.46675 4.92666 7.52675 4.85999C7.59342 4.79999 7.66675 4.75332 7.74675 4.71999C7.82675 4.68666 7.91342 4.66666 8.00008 4.66666C8.08675 4.66666 8.17342 4.68666 8.25342 4.71999C8.33342 4.75332 8.40675 4.79999 8.47342 4.85999C8.53342 4.92666 8.58008 4.99332 8.61342 5.07999C8.64675 5.15999 8.66675 5.24666 8.66675 5.33332C8.66675 5.41999 8.64675 5.50666 8.61342 5.58666C8.58008 5.66666 8.53342 5.73999 8.47342 5.80666C8.40675 5.86666 8.33342 5.91332 8.25342 5.94666C8.09342 6.01332 7.90675 6.01332 7.74675 5.94666C7.66675 5.91332 7.59342 5.86666 7.52675 5.80666C7.46675 5.73999 7.42008 5.66666 7.38675 5.58666C7.35342 5.50666 7.33342 5.41999 7.33342 5.33332C7.33342 5.24666 7.35342 5.15999 7.38675 5.07999Z" fill="currentColor"/>
          </svg>
          <h5 class="text-xl font-bold">مشخصات</h5>
        </div>

        <div class="flex flex-row items-start mt-8">
          <div class="hidden lg:flex w-1/5">
            <strong>مشخصات</strong>
          </div>
          <div class="flex-1">
            <div class="flex flex-col">
              <ul class="flex flex-col">
                <li class="flex w-full py-2 px-2 odd:bg-slate-50 dark:odd:bg-gray-800" v-for="s in product.specifications">
                  <div class="w-2/6 lg:w-1/4 opacity-70 font-light text-xs lg:text-base">
                    {{s.title}}
                  </div>
                  <div class="flex-1 border-r pr-2 text-sm lg:text-base">
                    {{s.value}}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-8">

      <div id="comments" ref="comments" class="mx-4 lg:mx-0 dark:text-white">
        <div class="w-max flex items-center space-x-2 space-x-reverse border-b-2 border-brandOrange pb-2 pl-12">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
            <path d="M8.79325 4H4.52659C4.35325 4 4.18659 4.00667 4.02659 4.02667C2.23325 4.18 1.33325 5.24 1.33325 7.19333V9.86C1.33325 12.5267 2.39992 13.0533 4.52659 13.0533H4.79325C4.93992 13.0533 5.13325 13.1533 5.21992 13.2667L6.01992 14.3333C6.37325 14.8067 6.94658 14.8067 7.29992 14.3333L8.09992 13.2667C8.19992 13.1333 8.35992 13.0533 8.52658 13.0533H8.79325C10.7466 13.0533 11.8066 12.16 11.9599 10.36C11.9799 10.2 11.9866 10.0333 11.9866 9.86V7.19333C11.9866 5.06667 10.9199 4 8.79325 4ZM4.33325 9.33333C3.95992 9.33333 3.66659 9.03333 3.66659 8.66667C3.66659 8.3 3.96659 8 4.33325 8C4.69992 8 4.99992 8.3 4.99992 8.66667C4.99992 9.03333 4.69992 9.33333 4.33325 9.33333ZM6.65992 9.33333C6.28658 9.33333 5.99325 9.03333 5.99325 8.66667C5.99325 8.3 6.29325 8 6.65992 8C7.02658 8 7.32658 8.3 7.32658 8.66667C7.32658 9.03333 7.03325 9.33333 6.65992 9.33333ZM8.99325 9.33333C8.61992 9.33333 8.32658 9.03333 8.32658 8.66667C8.32658 8.3 8.62658 8 8.99325 8C9.35992 8 9.65992 8.3 9.65992 8.66667C9.65992 9.03333 9.35992 9.33333 8.99325 9.33333Z" fill="currentColor"/>
            <path d="M14.6534 4.52665V7.19331C14.6534 8.52665 14.2401 9.43331 13.4134 9.93331C13.2134 10.0533 12.9801 9.89331 12.9801 9.65998L12.9867 7.19331C12.9867 4.52665 11.4601 2.99998 8.79342 2.99998L4.73342 3.00665C4.50008 3.00665 4.34008 2.77331 4.46008 2.57331C4.96008 1.74665 5.86675 1.33331 7.19342 1.33331H11.4601C13.5867 1.33331 14.6534 2.39998 14.6534 4.52665Z" fill="currentColor"/>
          </svg>
          <h5 class="text-xl  font-bold">نظرات کاربران</h5>
        </div>

        <div class="w-full flex flex-col lg:flex-row mt-8" v-if="product">
          <div class="flex flex-col items-start space-y-3 w-full lg:w-1/5 ml-10">
            <div class="flex items-end space-x-2 space-x-reverse">
              <strong class="text-xl ">4.4</strong>
              <span>از 5</span>
            </div>
            <div class="flex items-center space-x-2 space-x-reverse">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" v-for="i in 4" :key="i">
                <path d="M3.82665 10.6666C3.89999 10.34 3.76665 9.87331 3.53332 9.63998L1.91332 8.01998C1.40665 7.51331 1.20665 6.97331 1.35332 6.50665C1.50665 6.03998 1.97999 5.71998 2.68665 5.59998L4.76665 5.25331C5.06665 5.19998 5.43332 4.93331 5.57332 4.65998L6.71999 2.35998C7.05332 1.69998 7.50665 1.33331 7.99999 1.33331C8.49332 1.33331 8.94665 1.69998 9.27999 2.35998L10.4267 4.65998C10.5133 4.83331 10.6933 4.99998 10.8867 5.11331L3.70665 12.2933C3.61332 12.3866 3.45332 12.3 3.47999 12.1666L3.82665 10.6666Z" fill="#CCA253"/>
                <path d="M12.4667 9.64001C12.2267 9.88001 12.0934 10.34 12.1734 10.6667L12.6334 12.6733C12.8267 13.5067 12.7067 14.1333 12.2934 14.4333C12.1267 14.5533 11.9267 14.6133 11.6934 14.6133C11.3534 14.6133 10.9534 14.4867 10.5134 14.2267L8.56003 13.0667C8.25337 12.8867 7.7467 12.8867 7.44003 13.0667L5.4867 14.2267C4.7467 14.66 4.11337 14.7333 3.7067 14.4333C3.55337 14.32 3.44003 14.1667 3.3667 13.9667L11.4734 5.86001C11.78 5.55335 12.2134 5.41335 12.6334 5.48668L13.3067 5.60001C14.0134 5.72001 14.4867 6.04001 14.64 6.50668C14.7867 6.97335 14.5867 7.51335 14.08 8.02001L12.4667 9.64001Z" fill="#CCA253"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.31381 10.7792L4.31382 10.7792L4.31451 10.7762C4.37423 10.5101 4.34527 10.2243 4.27575 9.98095C4.20637 9.73814 4.07997 9.47952 3.88687 9.28643L2.26687 7.66643C1.82542 7.22497 1.76418 6.87225 1.82936 6.65964C1.9011 6.44624 2.15344 6.19784 2.76965 6.09304C2.76989 6.093 2.77013 6.09296 2.77036 6.09292L4.84885 5.74651L4.84886 5.74654L4.85417 5.74559C5.09985 5.70192 5.33653 5.58098 5.52557 5.44242C5.71443 5.304 5.90281 5.11348 6.01834 4.88792L6.01837 4.88793L6.02079 4.88307L7.1663 2.58539C7.16648 2.58501 7.16667 2.58464 7.16686 2.58426C7.46368 1.99717 7.78344 1.83331 7.99999 1.83331C8.21654 1.83331 8.53631 1.99718 8.83313 2.58431C8.83331 2.58467 8.8335 2.58503 8.83368 2.58539L9.97918 4.88307L9.97944 4.88359C10.0257 4.97602 10.0844 5.06244 10.1509 5.14192L4.25375 11.0391L4.31381 10.7792Z" stroke="#CCA253"/>
                <path d="M12.4667 9.64001C12.2267 9.88001 12.0934 10.34 12.1734 10.6667L12.6334 12.6733C12.8267 13.5067 12.7067 14.1333 12.2934 14.4333C12.1267 14.5533 11.9267 14.6133 11.6934 14.6133C11.3534 14.6133 10.9534 14.4867 10.5134 14.2267L8.56003 13.0667C8.25337 12.8867 7.7467 12.8867 7.44003 13.0667L5.4867 14.2267C4.7467 14.66 4.11337 14.7333 3.7067 14.4333C3.55337 14.32 3.44003 14.1667 3.3667 13.9667L11.4734 5.86001C11.78 5.55335 12.2134 5.41335 12.6334 5.48668L13.3067 5.60001C14.0134 5.72001 14.4867 6.04001 14.64 6.50668C14.7867 6.97335 14.5867 7.51335 14.08 8.02001L12.4667 9.64001Z" fill="#CCA253"/>
              </svg>
              <span class="text-sm font-light"> از مجموع 160 امتیاز</span>
            </div>
            <small>شما هم درباره این محصول نظری ثبت کنید.</small>
            <a href="" class="w-full rounded-xl border-2 opacity-70 py-2 text-center hover:opacity-100 transition-opacity duration-300" v-if="authStore.isLoggedIn" @click.prevent="showAddCommentModal = true">ثبت دیدگاه</a>
            <a href="" class="w-full rounded-xl border-2 opacity-70 py-2 text-center hover:opacity-100 transition-opacity duration-300" v-else @click.prevent="authStore.isLoginModalOpen = true">برای ثبت دیدگاه ابتدا وارد شوید</a>
          </div>
          <base-f-modal title="افزودن دیدگاه جدید" v-model="showAddCommentModal">
            <product-add-comment :postType="EPostType.Product" :postId="product.id" @comment-submitted="showAddCommentModal = false,loadComments" :post-title="product.title" :post-slug="product.slug" :parent-id="selectedComment"/>
          </base-f-modal>
          <div class="flex-1 lg:pr-10 lg:border-r-4 border-brandOrange/50 mt-8 lg:mt-0">
            <ul class="flex-flex-col space-y-6">
              <li class="w-full flex flex-col pb-6 border-b-2 last:border-none" v-for="c in productComments" :key="c">
                <comments-f-comment :comment="c" />
              </li>
            </ul>
          </div>
        </div>

      </div>


      <hr class="my-8">

      <div id="catalog" ref="catalog" class="mx-4 lg:mx-0">
        <div class="w-max flex items-center space-x-2 space-x-reverse border-b-2 border-brandOrange pb-2 pl-12 dark:text-white">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
            <path d="M13.666 6.79203H11.7393C10.1593 6.79203 8.87268 5.50536 8.87268 3.92536V1.9987C8.87268 1.63203 8.57268 1.33203 8.20602 1.33203H5.37935C3.32602 1.33203 1.66602 2.66536 1.66602 5.04536V10.952C1.66602 13.332 3.32602 14.6654 5.37935 14.6654H10.6193C12.6727 14.6654 14.3327 13.332 14.3327 10.952V7.4587C14.3327 7.09203 14.0327 6.79203 13.666 6.79203ZM8.18602 10.5187L6.85268 11.852C6.80602 11.8987 6.74602 11.9387 6.68602 11.9587C6.62602 11.9854 6.56602 11.9987 6.49935 11.9987C6.43268 11.9987 6.37268 11.9854 6.31268 11.9587C6.25935 11.9387 6.20602 11.8987 6.16602 11.8587C6.15935 11.852 6.15268 11.852 6.15268 11.8454L4.81935 10.512C4.62602 10.3187 4.62602 9.9987 4.81935 9.80536C5.01268 9.61203 5.33268 9.61203 5.52602 9.80536L5.99935 10.292V7.4987C5.99935 7.22536 6.22602 6.9987 6.49935 6.9987C6.77268 6.9987 6.99935 7.22536 6.99935 7.4987V10.292L7.47935 9.81203C7.67268 9.6187 7.99268 9.6187 8.18602 9.81203C8.37935 10.0054 8.37935 10.3254 8.18602 10.5187Z" fill="currentColor"/>
            <path d="M11.6204 5.87365C12.2538 5.88032 13.1338 5.88032 13.8871 5.88032C14.2671 5.88032 14.4671 5.43365 14.2004 5.16699C13.2404 4.20032 11.5204 2.46032 10.5338 1.47365C10.2604 1.20032 9.78711 1.38699 9.78711 1.76699V4.09365C9.78711 5.06699 10.6138 5.87365 11.6204 5.87365Z" fill="currentColor"/>
          </svg>
          <h5 class="text-xl font-bold">دریافت کاتالوگ این محصول</h5>
        </div>

        <div class="mt-8">
          <base-f-alert color="primary" :outline="true">
            <template #icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11.51L12 14.51L15 11.51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 14.51V6.51001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            <span class="lg:text-lg cursor-pointer">
              دانلود کاتالوگ زعفران نگین شیشه ای
            </span>
          </base-f-alert>
        </div>
      </div>

      <hr class="my-8">

      <div id="related" ref="related" class="mx-4 lg:mx-0">
        <div class="w-max flex items-center space-x-2 space-x-reverse border-b-2 border-brandOrange pb-2 pl-12 dark:text-white">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.4">
            <path d="M13.666 11.168H12.166V9.66797C12.166 9.39464 11.9393 9.16797 11.666 9.16797C11.3927 9.16797 11.166 9.39464 11.166 9.66797V11.168H9.66602C9.39268 11.168 9.16602 11.3946 9.16602 11.668C9.16602 11.9413 9.39268 12.168 9.66602 12.168H11.166V13.668C11.166 13.9413 11.3927 14.168 11.666 14.168C11.9393 14.168 12.166 13.9413 12.166 13.668V12.168H13.666C13.9393 12.168 14.166 11.9413 14.166 11.668C14.166 11.3946 13.9393 11.168 13.666 11.168Z" fill="currentColor"/>
            <path d="M14.6667 5.6787V2.65203C14.6667 1.71203 14.24 1.33203 13.18 1.33203H10.4867C9.42667 1.33203 9 1.71203 9 2.65203V5.67203C9 6.6187 9.42667 6.99203 10.4867 6.99203H13.18C14.24 6.9987 14.6667 6.6187 14.6667 5.6787Z" fill="currentColor"/>
            <path d="M7.00065 5.6787V2.65203C7.00065 1.71203 6.57398 1.33203 5.51398 1.33203H2.82065C1.76065 1.33203 1.33398 1.71203 1.33398 2.65203V5.67203C1.33398 6.6187 1.76065 6.99203 2.82065 6.99203H5.51398C6.57398 6.9987 7.00065 6.6187 7.00065 5.6787Z" fill="currentColor"/>
            <path d="M7.00065 13.18V10.4867C7.00065 9.42667 6.57398 9 5.51398 9H2.82065C1.76065 9 1.33398 9.42667 1.33398 10.4867V13.18C1.33398 14.24 1.76065 14.6667 2.82065 14.6667H5.51398C6.57398 14.6667 7.00065 14.24 7.00065 13.18Z" fill="currentColor"/>
          </svg>
          <h5 class="text-xl font-bold">کالاهای مرتبط</h5>
        </div>

        <div class="w-full flex mt-8">
          <ul class="w-full flex space-x-8 space-x-reverse flex-shrink-0 overflow-x-auto p-4">
<!--            <li v-for="i in 4" :key="i" class="flex-shrink-0">
              <f-card />
            </li>-->
          </ul>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">

import {useCartStore} from "~/stores/cart.store";
import {GetProduct} from "~/services/product.service";
import type {ProductDto} from "~/models/product/productQueries";
import {EPackingType} from "~/models/product/EPackingType";
import {SITE_URL} from "~/utilities/api.config";
import {type CommentDto, type CommentFilterParams} from "~/models/comment/commentQueries";
import {GetComments} from "~/services/comment.service";
import {EPostType} from "~/models/EPostType";

const route = useRoute();
const slug:string = route.params.slug.toString()!;

const cartStore = useCartStore();

const bannerImage = ref('');
const showBannerModal = ref(false);
const showBanner = (src:string) => {
  bannerImage.value = src;
  showBannerModal.value = true;
}

const authStore = useAuthStore();
const isLoading = ref(false);
const showAddCommentModal = ref(false);
const pageId = ref(1);
const selectedComment:Ref<Number | null> = ref(null);

const product:Ref<ProductDto | undefined> = ref(undefined);
const productComments:Ref<CommentDto[]> = ref([]);
const commentsFilterParams:CommentFilterParams = reactive({
  postId:null,
  postType:EPostType.Product,
  take:10,
  pageId:pageId,
  search:null,
  commentStatus:null,
  endDate:null,
  startDate:null,
  userRequested:null
})

const visitingTab = ref('info');

onMounted(async ()=>{
  window.addEventListener('scroll',onScroll)

  isLoading.value = true;

  const result = await GetProduct(slug);
  if(result.isSuccess){
    product.value = result.data!;
    await loadComments();
  }

  isLoading.value = false;
})

const loadComments = async ()=>{
  commentsFilterParams.postId = product.value?.id;
  const commentsResult = await GetComments(commentsFilterParams);
  if(commentsResult.isSuccess){
    productComments.value = commentsResult.data?.data!;
  }
}

const totalScore = computed(()=>{
  let scoreSum:number = 0;
  if(productComments.value.length > 0){
    productComments.value.forEach(c=>scoreSum += c.score);
  }
  return scoreSum;
})

const info = ref();
const comments = ref();
const catalog = ref();
const related = ref();

const onScroll = ()=>{
  if (info.value.getBoundingClientRect().top <= 100)
    visitingTab.value = 'info';

  if (comments.value.getBoundingClientRect().top <= 100)
    visitingTab.value = 'comments';

  if (catalog.value.getBoundingClientRect().top <= 100)
    visitingTab.value = 'catalog';

  if (related.value.getBoundingClientRect().top <= 100)
    visitingTab.value = 'related';
}

</script>

<style scoped>
.activeTab{
  @apply relative after:bg-brandOrange after:absolute after:-bottom-2 after:left-0 after:right-0 after:h-2 after:rounded-t-full;
}
</style>