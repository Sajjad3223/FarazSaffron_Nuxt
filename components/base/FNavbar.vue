<template>
<div v-if="false">
  <header v-if="topBanner != null">
    <a :href="topBanner.url" class="h-[50px] 2xl:h-[60px] bg-white w-full relative flex items-center justify-center" style="background: linear-gradient(90deg, #F04623 0%, #C82805 100%);">
      <img :src="`${SITE_URL}/banners/${topBanner.image.src}`"
           :alt="topBanner.image.alt"
           class="h-[50px] 2xl:h-[60px]">
    </a>
  </header>
  <nav class="w-full border-b pb-2 border-[#ECECEC] pt-2 bg-white relative" >
    <div class=" container px-24 3xl:px-0 min-h-[100px] 2xl:min-h-[125px] mx-auto mt-5 text-xs lg:text-sm 2xl:text-base">
      <div class="w-full flex items-center flex-wrap justify-between">
        <div class="flex items-center flex-wrap gap-4 flex-1 xl:gap-12">
          <NuxtLink to="/" class="flex items-center gap-4">
            <div class="w-max logo-rotate-always relative">
              <div class="w-[40px] 2xl:w-[50px] h-[40px] 2xl:h-[50px] rounded-full bg-brandOrange grid place-items-center logo-style"
              >
                <img src="~/assets/images/gp-alone-white.png" alt="gp alone white" class="w-6 2xl:w-8">
              </div>
              <div class="w-[40px] 2xl:w-[50px] h-[40px] 2xl:h-[50px] rounded-full bg-brandOrange grid place-items-center logo-style"
                   style="transform: rotateY(180deg)"
              >
                <img src="~/assets/images/GP-filled-white.png" alt="gp alone white" class="w-6 2xl:w-8">
              </div>
            </div>
            <div class="flex flex-col items-start font-light">
              <strong>زعفران جی‌پی</strong>
              <span class="text-sm"><strong class="text-brandOrange text-base">gp</strong> Saffron</span>
            </div>
          </NuxtLink>
          <form class="flex w-[220px] 2xl:w-[20vw] max-w-[300px] items-center relative" action="/market">
            <input type="text" name="search" id="search"
                   class="form-input w-full h-8 text-sm font-light 2xl:h-12 p-4 border-none focus:ring-[#9b9a9a] bg-[#F4F4F4] rounded-lg peer"
                   required>
            <strong
                class="absolute opacity-50 right-4 pointer-events-none text-xs 2xl:text-sm font-light transition-all duration-200 peer-focus:opacity-0 peer-checked:opacity-0 peer-valid:opacity-0">جستجوی
              محصول...</strong>
            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="absolute opacity-50 left-4">
              <circle cx="6.38251" cy="6.38251" r="5.63251" stroke="currentColor" stroke-width="1.5"/>
              <path
                  d="M10.7957 13.4585C10.6083 12.6246 11.4856 11.9552 12.2404 12.356L13.689 13.1252C14.3329 13.4672 14.4063 14.3611 13.8267 14.8034L12.7377 15.6344C12.1581 16.0767 11.3153 15.7701 11.1554 15.0587L10.7957 13.4585Z"
                  fill="currentColor"/>
            </svg>
          </form>
          <ul class="flex items-center gap-9 font-bold ">
            <li>
              <NuxtLink to="/" class="hover:text-brandOrange transition-colors duration-200"
                        exact-active-class="text-brandOrange">خانه
              </NuxtLink>
            </li>
            <!--            <li>
                          <a :href="BLOGS_URL" target="_blank"
                             class="hover:text-brandOrange transition-colors duration-200">مقالات</a>
                        </li>-->
            <li>
              <NuxtLink to="/aboutus" class="hover:text-brandOrange transition-colors duration-200"
                        exact-active-class="text-brandOrange">درباره ما
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contactus" class="hover:text-brandOrange transition-colors duration-200"
                        exact-active-class="text-brandOrange">ارتباط با ما
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex items-stretch mr-auto gap-2">
          <div class="flex items-end flex-col">
            <a href="tel:05152329059" dir="ltr" class="text-brandOrange font-bold text-sm"
               style="text-shadow: 0 0 10px rgba(240, 70, 35, 0.5); font-family: 'Vazir FD',serif;">051 - 52329059</a>
            <div class="flex items-center gap-1.5">
              <strong class="text-sm">پشتیبانــی</strong>
              <span class="text-xs" style="font-family: 'Vazir FD',serif">24 ساعته</span>
            </div>
          </div>
          <a href="tel:05152329059" class="h-9 bg-[#FFF3F0] rounded-lg rounded-b-xl grid place-items-center">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
              <g filter="url(#filter0_d_306_3621)">
                <rect x="10" y="10" width="14" height="14" fill="url(#pattern0_306_3621)" shape-rendering="crispEdges"/>
              </g>
              <defs>
                <filter id="filter0_d_306_3621" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                 result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="5"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.27451 0 0 0 0 0.137255 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_3621"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_3621" result="shape"/>
                </filter>
                <pattern id="pattern0_306_3621" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_306_3621" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_306_3621" width="100" height="100"
                       xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-3 2xl:mt-5 gap-4 flex flex-wrap items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="bg-[#F6F6F6] rounded-lg w-7 h-8 relative flex items-center">
            <span class="bg-[#C3C3C3] absolute h-0.5 rounded-full inset-x-1 right-1/2 top-1/3"></span>
            <span class="bg-[#939393] absolute h-0.5 rounded-full inset-x-1"></span>
            <span class="bg-[#C3C3C3] absolute h-0.5 rounded-full inset-x-1 left-1/2 bottom-1/3"></span>
          </div>
          <div class="flex items-center gap-10">
            <div class="relative">
              <button class="flex items-center gap-2" @click="showCategories = !showCategories" type="button">
                <span class="font-medium 2xl:font-bold">دسته بندی</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                     :class="['transition-all duration-200',{'rotate-180':showCategories}]">
                  <path d="M1 1L5.00065 4.664L9 1" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </button>
              <Transition name="slide-fade">
                <div v-if="showCategories" v-click-outside="closeCategories"
                     :class="['absolute overflow-hidden top-12 z-20 bg-white p-4 flex rounded-xl transition-all duration-300',
                     isCategoryHovered ? 'w-[350px]' : 'w-[180px]']"
                     style="box-shadow: 0 2px 5px 0 #B7B7B740;">
                  <div class="min-w-[150px]">
                    <ul class="w-full flex flex-col space-y-1" v-if="!loading">
                      <li v-for="c in categories" @click="categoryHovered(c)"
                          class="w-full py-1.5 pl-4 pr-8 rounded-lg hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer relative flex items-center before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:right-3 before:bg-[#D9D9D9]">
                        <div class="w-full flex items-center justify-between font-bold text-black/50 hover:text-black/100 transition-colors duration-200">
                          <span>{{ c.title }}</span>
                          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                               opacity="0.5">
                            <path d="M6 11L1 6L6 1" stroke="black" stroke-width="1" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </li>
                    </ul>
                    <ul class="w-full flex flex-col space-y-2" v-else>
                      <li class="w-full py-4 rounded-lg bg-gray-200 animate-pulse" v-for="i in 3" :key="i"></li>
                    </ul>
                  </div>
                  <ul class="flex-1 border-r pr-2 mr-2 space-y-2 text-nowrap"
                      v-if="isCategoryHovered && subCategories.length > 0">
                    <li class="w-full" v-for="s in subCategories">
                      <NuxtLink :to="`/market?categories=${s.id}`"
                                class="w-full py-1 px-2 font-light rounded-lg text-[#9E9E9E] hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer">
                        <span>{{ s.title }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
            <NuxtLink :to="`/market?orderBy=${EOrderBy.محبوبیت}`"
                      class="font-medium 2xl:font-bold hover:text-brandOrange transition-colors duration-200">پرفروش ها
            </NuxtLink>
            <NuxtLink :to="`/market?orderBy=${EOrderBy.ارزان_ترین}`"
                      class="font-medium 2xl:font-bold hover:text-brandOrange transition-colors duration-200">تخفیف ها
            </NuxtLink>
            <NuxtLink :to="`/market?orderBy=${EOrderBy.جدیدترین}`"
                      class="font-medium 2xl:font-bold hover:text-brandOrange transition-colors duration-200">محصولات جدید
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-stretch mr-auto gap-4">
          <!-- User Account -->
          <div class="relative">
            <button type="button"
                    class="h-8 2xl:h-10 px-3 rounded-lg text-brandOrange flex items-center gap-2 border border-brandOrange"
                    @click="showAccountOptions = !showAccountOptions">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="14" height="14" fill="url(#pattern0_306_3622)"/>
                <defs>
                  <pattern id="pattern0_306_3622" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_306_3622" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_306_3622" width="100" height="100"
                         xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
              <span class="font-medium 2xl:font-bold">حساب کاربری</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                   :class="['transition-all duration-200',{'rotate-180':showAccountOptions}]">
                <path d="M1 1L5.00065 4.664L9 1" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <Transition name="slide-fade">
              <div v-if="showAccountOptions" v-click-outside="closeAccountOptions" class="absolute z-20 bg-white top-12 w-[150px] p-2 rounded-lg"
                   style="box-shadow: 0 0 5px 0 #69696940;">
                <div class="flex flex-col w-full space-y-2" v-if="!authStore.isLoggedIn">
                  <button
                      class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]"
                      @click="authStore.isAuthModalOpen = true,authStore.changeStep('register')">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <rect width="12" height="12" fill="url(#pattern0_461_1998)" fill-opacity="0.5"/>
                      <defs>
                        <pattern id="pattern0_461_1998" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlink:href="#image0_461_1998" transform="scale(0.01)"/>
                        </pattern>
                        <image id="image0_461_1998" width="100" height="100"
                               xlink:href="data:image/png;base64,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"/>
                      </defs>
                    </svg>
                    <span>ثبت نام</span>
                  </button>
                  <hr>
                  <button
                      class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]"
                      @click="authStore.isAuthModalOpen = true,authStore.changeStep('login')">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <rect width="12" height="12" fill="url(#pattern0_461_1999)" fill-opacity="0.5"/>
                      <defs>
                        <pattern id="pattern0_461_1999" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlink:href="#image0_461_1999" transform="scale(0.01)"/>
                        </pattern>
                        <image id="image0_461_1999" width="100" height="100"
                               xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNFJREFUeAHtnc3rFVUch5+MUEmKFhnqpoKyTSpWS3e+VNALhoG1ycSFL4EkGIVvoEGIFeQfoIS2qL2VBdGiTe1rV4K9WViom7TX+4XfwHCZ89K993fOfIfPhWHuvefcOec8z5yXuTNzBvQSAREQAREQAREQAREQAREQAREQAREQAREQARGYhMDtwOPADuCVni4vA88DDwELJimkh99sBD4GrgP/Olp+AN4G7vIAOSePK4DzjgSEdpZrwD7gppxC9zXOI6OmyfawUCE9fv8esKivwGP5ugf4dWAymh3oA281ZTHwzUBlNFKs+XLzstFTk/HQ+jvgc+CTHi5fjvoL6zNCebfvr3rp6JcAv0cKYx38gw52rYXAC8DlSFneclAOnokU4Cxws4dCtPK4MiLlew99yemAkJ+BW1sF9fR2W6BM1nTZwWOvX18EMv9mr3Mdz5w1X6E+ZWv8p/VDvw0IsfbY8+urQLl6P9r6JZDxLZ5tAJ8FynWk7+WSkJ4ZkhAJKUJATVYRzPmJSEg+qyIxJaQI5vxEJCSfVZGYElIEc34iEpLPqkhMCRnDbH/iHQeOAWvGwkp8lJAW5WeBv1p/XdwAdrbCS7x1K+THFrj2GbenJ6RmV3l0bfOf0Tn73RNuc5KfuRXyUYcQg3fvJBSAOzu214guKcWtkLXAlTGI05wLsTOMP41trxFi61JS3AqximCXAB0FTgKTNlXtCmWXdRr4toj2+xJSXAtpw5zVe7sWOCXlpVkl1rEdCemAUlOKhHQIsa9qSZGQgJBaUiQkIqSGFAlJCCktpRdC7BjA7u+wg7qSi90cc0fmciAyHJ7lcUp1IU8Cdqlke7zv9b0Nl3dl1LhYlKpC7gf+GIiMZif6E3g4RjwRVlXIawOT0UiZ5mr1qkJeHaiQdxK1IBZcVch9A2yyrB9ZFyOeCKsqxPL2BHBxQDXlYAJ4Kri6EMug3TRfY9j7f4bYqWGv9R+zuCC6F0JSe03tcDu1a6OnptPuWh+eUSYlJAGypAzLioREhJSWISE9kyEhASE1akaTFTVZDYm5dU0ZlgXXQmyobEf7J4ANY2An+Wh/dLYvlOsaTc1iaBvLm1shq4Dfxoair8dKmgizY6HUv87zLcOy6FbIuTEZtjf/DdydAB8KXtaxvXYNKSHDtZDQ/FhPhYgnvr8lMndKKRmuhczHXbh7OmrJoYTIWQe7bbLmQ4jBfWx0GvnduWXTrGlnbE9CMiCVjCIhJWlnpCUhGZBKRpGQkrQz0pKQDEglo0hISdoZaUlIBqSSUSSkJO2MtCQkA1LJKBJSknZGWm6FaBLMDLslo4SmiZ3mutqS+e9Ky/U0sac6/pm18xeXRmcQbRpyj68XA2WycvV+IuXNkczbsze8TTX+gPepxm068fFTuO0zfJ8Cqx1UE2umrGbEyjLNDBVFEeyP1JJGzoUeP67CZrEOTS3e5N8eV7G0KNUpErNHAn2dIaUpnMf13in4VPnpkB959L6Hx1R0Wbd7+lKX8HirHWe8PhSsEbQc+HAAzZf1Ge6aqUZC13r9nBhvD5a0Gm6jKTcdeBf82He3AY+ObpfbPqo1djPNGz1c7NGrzwE2GZvrB0nGRChMBERABERABERABERABERABERABERABERABFIE/gNUOiA0KlQmiAAAAABJRU5ErkJggg=="/>
                      </defs>
                    </svg>
                    <span>ورود</span>
                  </button>
                </div>
                <div class="flex flex-col space-y-2 font-light" v-else>
                  <NuxtLink to="/profile"
                            class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="w-4">
                      <path
                          d="M9 21V14.1528C9 13.5226 9.53726 13.0116 10.2 13.0116H13.8C14.4627 13.0116 15 13.5226 15 14.1528V21M11.3046 3.21117L3.50457 8.48603C3.18802 8.7001 3 9.04665 3 9.41605V19.2882C3 20.2336 3.80589 21 4.8 21H19.2C20.1941 21 21 20.2336 21 19.2882V9.41605C21 9.04665 20.812 8.70011 20.4954 8.48603L12.6954 3.21117C12.2791 2.92961 11.7209 2.92961 11.3046 3.21117Z"
                          stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round"/>
                    </svg>
                    <span>داشبورد</span>
                  </NuxtLink>
                  <hr>
                  <NuxtLink to="/profile/orders"
                            class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="w-4">
                      <path
                          d="M7.79922 7.8H16.1992M7.79922 12.6H16.1992M5.75922 3H18.2392C19.1008 3 19.7992 3.80589 19.7992 4.8V21L17.1992 19.2L14.5992 21L11.9992 19.2L9.39922 21L6.79922 19.2L4.19922 21V4.8C4.19922 3.80589 4.89765 3 5.75922 3Z"
                          stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>سفارشات</span>
                  </NuxtLink>
                  <hr>
                  <NuxtLink to="/profile/notification"
                            class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="w-4">
                      <path
                          d="M11.4374 3H5.24997C4.00735 3 3 4.00734 3 5.24996V14.2502C3 15.4928 4.00736 16.5002 5.24999 16.5002L13.369 16.5001L17.625 21V16.5002L18.7501 16.5001C19.9927 16.5001 21 15.4928 21 14.2502V12.0004M21 5.81274C21 7.36601 19.7408 8.62519 18.1875 8.62519C16.6343 8.62519 15.3751 7.36601 15.3751 5.81274C15.3751 4.25946 16.6343 3.00028 18.1875 3.00028C19.7408 3.00028 21 4.25946 21 5.81274Z"
                          stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="flex items-center gap-2">
                      <span>پیام ها</span>
                      <base-f-badge color="brandOrange" size="xs" v-if="accountStore.unseenNotifs > 0">
                        {{ accountStore.unseenNotifs }}
                      </base-f-badge>
                    </div>
                  </NuxtLink>
                  <hr>
                  <button
                      class="flex items-center gap-2 px-2 rounded-md py-1 text-danger transition-colors duration-200 hover:bg-[#F2F2F2]"
                      @click="authStore.logOut">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="w-4">
                      <path
                          d="M8.78056 3.6001H5.07468C4.51304 3.6001 3.97441 3.82135 3.57728 4.21517C3.18014 4.609 2.95703 5.14314 2.95703 5.7001V18.3001C2.95703 18.8571 3.18014 19.3912 3.57728 19.785C3.97441 20.1788 4.51304 20.4001 5.07468 20.4001H8.78056M9.04375 12.0001H21.0438M21.0438 12.0001L16.4586 7.2001M21.0438 12.0001L16.4586 16.8001"
                          stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>خروج</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
          <!-- Cart -->
          <div class="flex h-auto w-max items-stretch relative gap-2">
            <button class="h-8 2xl:h-10 grid place-items-center bg-brandOrange rounded-md rounded-b-xl"
                    style="box-shadow: 0 0 10px 0 #F0462380;"
                    @click="showCart = !showCart">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="w-[34px]">
                <path
                    d="M9.09844 4.86654C9.09844 6.02634 8.15824 6.96654 6.99844 6.96654C5.83864 6.96654 4.89844 6.02634 4.89844 4.86654M2.75601 12.2165H11.2409C11.9906 12.2165 12.5984 11.62 12.5984 10.8842L11.7287 3.11652C11.7287 2.38069 11.1209 1.78418 10.3712 1.78418H3.45601C2.70624 1.78418 2.09844 2.38069 2.09844 3.11652L1.39844 10.8842C1.39844 11.62 2.00624 12.2165 2.75601 12.2165Z"
                    stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="flex flex-col items-start">
              <button class="flex items-center gap-2"
                      @click="showCart = !showCart">
                <span class="font-medium 2xl:font-bold text-sm">سبد خرید</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                     :class="['transition-transform duration-200',{'rotate-180':showCart}]">
                  <path d="M1 1L5.00065 4.664L9 1" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <small class="font-thin 2xl:font-light" v-if="cartStore.cartItemsCount == 0">خالی</small>
              <span v-else class="bg-brandOrange/20 rounded-lg text-xs text-brandOrange px-4 py-1">
                  {{ cartStore.cartItemsCount }}
                </span>
            </div>
            <Transition name="slide-fade">
              <div v-if="showCart" v-click-outside="closeCart" class="absolute top-16 left-0 z-20 w-max bg-white rounded-lg rounded-b-3xl"
                   style="box-shadow: 0 2px 5px 0 #B7B7B740;">
                <div class="flex flex-col items-center space-y-4 p-6 min-w-[300px]"
                     v-if="!cartStore.PendingOrder || cartStore.cartItemsCount == 0">
                  <img src="~/assets/images/empty-cart.png" alt="empty cart" class="w-full max-w-[170px]">
                  <strong class="text-2xl">خالی!</strong>
                  <span class="text-sm text-[#9F9F9F]">هیچ محصولی وجود ندارد</span>
                  <button @click="goToMarket"
                          class="text-brandOrange flex items-center gap-1 px-6 py-2 rounded-md hover:bg-brandOrange/10 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00043 4.85742V9.13113" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path d="M9.14106 6.99431H4.86328" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.73464 1.1665H4.26797C2.36241 1.1665 1.16797 2.51522 1.16797 4.42451V9.57516C1.16797 11.4845 2.35686 12.8332 4.26797 12.8332H9.73464C11.6457 12.8332 12.8346 11.4845 12.8346 9.57516V4.42451C12.8346 2.51522 11.6457 1.1665 9.73464 1.1665Z"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>مشاهده محصولات</span>
                  </button>
                </div>
                <div class="flex flex-col relative w-[400px] p-6 pb-0" v-else-if="cartStore.cartItemsCount <= 3">
                      <span>
                        {{ cartStore.cartItemsCount }} کالا
                      </span>
                  <ul class="h-[300px] overflow-y-auto py-2">
                    <li class="flex items-stretch gap-4 border-b last:border-none py-3"
                        v-for="i in cartStore.PendingOrder.orderItems">
                      <div class="flex w-max flex-col items-center">
                        <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`"
                             :alt="i.itemInfo.productImage.alt" class="w-full max-w-[100px] 2xl:max-w-[150px]">
                        <cart-counter :item="i" class="scale-75"/>
                      </div>
                      <div class="flex flex-col justify-between flex-1 pb-2 pt-4">
                        <strong class=" w-4/5">{{ i.itemInfo.productName }}</strong>
                        <div class="flex flex-col">
                          <div class="flex items-center gap-1">
                            <span class="text-sm opacity-50 font-light">وزن:</span>
                            <span>{{i.itemInfo.weight}} <small>گرم</small></span>
                          </div>
                          <div class="flex items-center gap-1" v-if="i.itemInfo.healthNumber != null">
                            <span class="text-sm opacity-50 font-light">شماره بهداشت:</span>
                            <span>{{i.itemInfo.healthNumber}}</span>
                          </div>
                        </div>
                        <div class="flex items-center mt-top justify-between">
                          <base-g-price :size="'xs'" :price="(i.totalPrice / 10)" class="scale-125 mr-4"/>
                          <!--                              <base-g-price :price="()" /> TODO discount-->
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="h-[90px] z-10 grid grid-cols-2 items-center" style="box-shadow: 0 -4px 10px 0 #E2E2E240;">
                    <div class="flex flex-col items-start">
                      <small>مجموع سبد خرید</small>
                      <base-g-price :price="(cartStore.PendingOrder.totalPrice / 10)"/>
                    </div>
                    <base-g-button @click="goToCart" w-full>
                      مشاهده سبد خرید
                    </base-g-button>
                  </div>
                </div>
                <div class="flex flex-col items-center space-y-4 p-6" v-else>
                  <img src="~/assets/images/filled-cart.png" alt="empty cart" class="w-full max-w-[100px]">
                  <strong class="text-2xl">{{ cartStore.cartItemsCount }} محصول</strong>
                  <div class="flex items-center justify-between gap-4">
                    <span class="text-sm text-[#9F9F9F]">قیمت کل:</span>
                    <base-g-price class="text-sm text-[#9F9F9F]" :price="(cartStore.PendingOrder.totalPrice / 10)"/>
                  </div>
                  <button @click="goToCart"
                          class="text-brandOrange cursor-pointer flex items-center gap-1 px-6 py-2 rounded-md hover:bg-brandOrange/10 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00043 4.85742V9.13113" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path d="M9.14106 6.99431H4.86328" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.73464 1.1665H4.26797C2.36241 1.1665 1.16797 2.51522 1.16797 4.42451V9.57516C1.16797 11.4845 2.35686 12.8332 4.26797 12.8332H9.73464C11.6457 12.8332 12.8346 11.4845 12.8346 9.57516V4.42451C12.8346 2.51522 11.6457 1.1665 9.73464 1.1665Z"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>مشاهده سبد خرید</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </nav></div>

<div class="relative z-20" v-else>
  <header class="bg-[#FFD29DB2] min-h-[45px]">
    <div class="relative container max-w-[1400px] text-[#171717] mx-auto py-4 flex items-center justify-between">
      <div class="mr-2 flex items-center gap-2">
        <!--  Telegram  -->
        <a href="https://t.me/gp_saffron" target="_blank" class="transition-all duration-200 opacity-40 hover:opacity-70 hover:text-[#23A0DC]">
          <svg class="w-4"  viewBox="0 0 48 48" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.29975 20.6637C16.1846 13.8898 24.7766 9.42401 29.0756 7.26636C41.3501 1.10586 43.9006 0.0357136 45.563 0.00037677C45.9286 -0.00739518 46.7462 0.101946 47.2757 0.620448C47.7229 1.05826 47.8459 1.64969 47.9048 2.06478C47.9636 2.47988 48.0369 3.42548 47.9787 4.16434C47.3135 12.5976 44.4354 33.0629 42.9711 42.5083C42.3516 46.505 41.1316 47.8451 39.9506 47.9762C37.3838 48.2612 35.4348 45.9294 32.9488 43.963C29.0587 40.886 26.8611 38.9706 23.0851 35.968C18.7213 32.498 21.5502 30.5908 24.0371 27.474C24.6879 26.6583 35.9969 14.246 36.2158 13.12C36.2432 12.9792 36.2686 12.4543 36.0101 12.1771C35.7517 11.8999 35.3703 11.9947 35.095 12.0701C34.7049 12.177 28.4904 17.1334 16.4517 26.9393C14.6877 28.4009 13.09 29.1131 11.6585 29.0757C10.0804 29.0346 7.04466 27.999 4.78794 27.1139C2.01998 26.0282 -0.179935 25.4541 0.0116285 23.6103C0.111407 22.6499 1.20745 21.6677 3.29975 20.6637Z"
                  fill="currentColor"/>
          </svg>
        </a>
<!--         Facebook
        <a href="">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4" clip-path="url(#clip0_2033_13841)">
              <path d="M8 0C3.58176 0 0 3.58176 0 8C0 11.7517 2.58304 14.8998 6.06752 15.7645V10.4448H4.41792V8H6.06752V6.94656C6.06752 4.22368 7.29984 2.9616 9.97312 2.9616C10.48 2.9616 11.3546 3.06112 11.7123 3.16032V5.37632C11.5235 5.35648 11.1955 5.34656 10.7882 5.34656C9.47648 5.34656 8.9696 5.84352 8.9696 7.13536V8H11.5827L11.1338 10.4448H8.9696V15.9414C12.9309 15.463 16.0003 12.0902 16.0003 8C16 3.58176 12.4182 0 8 0Z" fill="currentColor"/>
            </g>
            <defs>
              <clipPath id="clip0_2033_13841">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>-->
        <!-- Whatsapp  -->
        <a href="https://wa.me/+989912937952" class="transition-all duration-200 opacity-40 hover:opacity-70 hover:text-[#25D366]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M0 16L1.12466 11.8913C0.430666 10.6886 0.0659999 9.32531 0.0666665 7.92732C0.0686665 3.55666 3.62533 0 7.99532 0C10.116 0.000666665 12.1066 0.826665 13.604 2.32533C15.1006 3.82399 15.9246 5.81599 15.924 7.93465C15.922 12.306 12.3653 15.8626 7.99532 15.8626C6.66865 15.862 5.36132 15.5293 4.20332 14.8973L0 16ZM4.39799 13.462C5.51532 14.1253 6.58198 14.5226 7.99265 14.5233C11.6246 14.5233 14.5833 11.5673 14.5853 7.93332C14.5866 4.29199 11.642 1.34 7.99798 1.33866C4.36332 1.33866 1.40666 4.29466 1.40533 7.92798C1.40466 9.41131 1.83933 10.522 2.56933 11.684L1.90333 14.116L4.39799 13.462ZM11.9893 9.81931C11.94 9.73665 11.808 9.68731 11.6093 9.58798C11.4113 9.48865 10.4373 9.00931 10.2553 8.94331C10.074 8.87731 9.94198 8.84398 9.80931 9.04265C9.67731 9.24065 9.29731 9.68731 9.18198 9.81931C9.06665 9.95131 8.95065 9.96798 8.75265 9.86865C8.55465 9.76931 7.91598 9.56065 7.15932 8.88531C6.57065 8.35998 6.17265 7.71132 6.05732 7.51265C5.94199 7.31465 6.04532 7.20732 6.14399 7.10865C6.23332 7.01998 6.34199 6.87732 6.44132 6.76132C6.54199 6.64665 6.57465 6.56399 6.64132 6.43132C6.70732 6.29932 6.67465 6.18332 6.62465 6.08399C6.57465 5.98532 6.17865 5.00999 6.01399 4.61332C5.85265 4.22732 5.68932 4.27932 5.56799 4.27332L5.18799 4.26666C5.05599 4.26666 4.84132 4.31599 4.65999 4.51466C4.47866 4.71332 3.96666 5.19199 3.96666 6.16732C3.96666 7.14265 4.67666 8.08465 4.77532 8.21665C4.87466 8.34865 6.17199 10.35 8.15932 11.208C8.63198 11.412 9.00131 11.534 9.28865 11.6253C9.76331 11.776 10.1953 11.7546 10.5366 11.704C10.9173 11.6473 11.7086 11.2246 11.874 10.762C12.0393 10.2986 12.0393 9.90198 11.9893 9.81931Z" fill="currentColor"/>
            </g>
          </svg>
        </a>
        <!-- Instagram  -->
        <a href="https://www.instagram.com/gp_saffron" class="transition-all duration-200 opacity-40 hover:opacity-70 hover:text-[#010000]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2033_13839)">
              <path d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98438 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1313 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9063 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60313 1.49375 4.7625C1.52813 3.98125 1.65938 3.55938 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35938C2.64688 2.07812 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7313 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55938 15.9438 4.70625C15.9063 3.85625 15.7688 3.27188 15.5719 2.76562C15.375 2.23438 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z" fill="currentColor"/>
              <path d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z" fill="currentColor"/>
              <path d="M13.2312 3.72811C13.2312 4.25936 12.8 4.68749 12.2719 4.68749C11.7406 4.68749 11.3125 4.25624 11.3125 3.72811C11.3125 3.19686 11.7438 2.76874 12.2719 2.76874C12.8 2.76874 13.2312 3.19999 13.2312 3.72811Z" fill="currentColor"/>
            </g>
            <defs>
              <clipPath id="clip0_2033_13839">
                <rect width="16" height="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
        <!-- X  -->
        <a href="https://twitter.com/gpsaffron" class="transition-all duration-200 opacity-40 hover:opacity-70 hover:text-[#181818]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M12.2174 1.26929H14.4663L9.55298 6.88495L15.3332 14.5266H10.8073L7.26253 9.89198L3.20647 14.5266H0.956125L6.21146 8.52002L0.666504 1.26929H5.30724L8.51143 5.50551L12.2174 1.26929ZM11.428 13.1805H12.6742L4.6301 2.54471H3.29281L11.428 13.1805Z" fill="currentColor"/>
            </g>
          </svg>
        </a>
        <!-- Youtube  -->
        <a href="https://www.youtube.com/@gpsaffron" class="transition-all duration-200 opacity-40 hover:opacity-70 hover:text-[#FF0000]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M15.8406 4.80001C15.8406 4.80001 15.6844 3.69689 15.2031 3.21251C14.5938 2.57501 13.9125 2.57189 13.6 2.53439C11.3625 2.37189 8.00313 2.37189 8.00313 2.37189H7.99687C7.99687 2.37189 4.6375 2.37189 2.4 2.53439C2.0875 2.57189 1.40625 2.57501 0.796875 3.21251C0.315625 3.69689 0.1625 4.80001 0.1625 4.80001C0.1625 4.80001 0 6.09689 0 7.39064V8.60314C0 9.89689 0.159375 11.1938 0.159375 11.1938C0.159375 11.1938 0.315625 12.2969 0.79375 12.7813C1.40313 13.4188 2.20313 13.3969 2.55938 13.4656C3.84063 13.5875 8 13.625 8 13.625C8 13.625 11.3625 13.6188 13.6 13.4594C13.9125 13.4219 14.5938 13.4188 15.2031 12.7813C15.6844 12.2969 15.8406 11.1938 15.8406 11.1938C15.8406 11.1938 16 9.90001 16 8.60314V7.39064C16 6.09689 15.8406 4.80001 15.8406 4.80001ZM6.34688 10.075V5.57814L10.6687 7.83439L6.34688 10.075Z" fill="currentColor"/>
            </g>
          </svg>
        </a>
      </div>
      <div>
          <span>“  <span class="text-[#FB7511]">ارسال رایگان</span> برای محصولات بالاتر از 10 گرم        “</span>
<!--        <img src="~/assets/images/moharram.png" alt="moharram" class="max-w-[500px] absolute -top-1 left-1/2 -translate-x-1/2 z-20">-->
      </div>
      <div class="flex items-center gap-2">
        <span dir="ltr" class="text-[#171717]/60">
          051 - 52329059
        </span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.58">
            <path d="M14.353 2.5C18.054 2.911 20.978 5.831 21.393 9.532" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.353 6.04303C16.124 6.38703 17.508 7.77203 17.853 9.54303" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04254 8.48441 11.0315 12.4724Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
        </svg>
      </div>
    </div>
  </header>
  <nav class="py-5 bg-[#FAFAFA] backdrop-blur border-b">
    <div class="flex container items-center mx-auto justify-between relative ">
      <NuxtLink to="/" class="flex items-center gap-4 text-black">
        <div class="bg-[#FB7511] w-16 h-16 rounded-full grid place-items-center">
          <img src="~/assets/images/GP-filled-white.png" alt="logo" class="w-12">
        </div>
        <div class="flex flex-col">
          <span class="text-lg">زعفران جی‌پی</span>
          <span class="text-sm font-cinzel uppercase">GP Saffron</span>
        </div>
      </NuxtLink>
      <ul class="flex items-center gap-10 font-light text-black text-xs lg:text-sm 2xl:text-base">
        <li class="relative group">
          <button class="flex items-center gap-2" @click="showCategories = !showCategories">
            <span>محصولات</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M11.0832 4.95831L6.99984 9.04165L2.9165 4.95831" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </button>
          <Transition name="slide-fade">
            <div v-if="showCategories" v-click-outside="closeCategories"
                 class="absolute flex items-stretch bg-white p-4 top-12 gap-4 min-w-[600px] rounded-xl border border-[#818C92]/20">
              <div class="w-1/4 flex flex-col space-y-3 p-2">
                <NuxtLink :to="`/market?categories=${c.id}`" class="w-full flex items-center justify-between" v-for="c in categories" :key="c.id" @mouseenter="categoryHovered(c)">
                  <span>{{c.title}}</span>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.04297 9.08268L0.959635 4.99935L5.04297 0.916016" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
              <div class="flex-1 flex items-start gap-2 bg-[#FAFAFA] rounded-lg p-2">
                <ul class="flex flex-col space-y-1 w-1/2">
                  <li v-for="s in subCategories">
                    <NuxtLink :to="`/market?categories=${s.id}`" class="text-xs 2xl:text-sm 3xl:text-base">{{s.title}}</NuxtLink>
                  </li>
                </ul>
                <img class="w-1/2 rounded-lg"
                     :src="`${SITE_URL}/category/${selectedCategory.imageName}`" :alt="selectedCategory.title" v-if="selectedCategory.imageName != null">
              </div>
            </div>
          </Transition>
          <div v-if="false" class="group-hover:opacity-100 hover:opacity-100 pointer-events-none group-hover:pointer-events-auto hover:pointer-events-auto flex flex-col group-hover:translate-y-2 absolute p-4 rounded-lg bg-white min-w-[150px] border right-0 -translate-y-2 opacity-0 transition-all duration-200">
            <ul class="text-black font-light space-y-4 flex flex-col text-sm relative">
              <li v-for="c in categories" :key="c.id">
                <NuxtLink :to="`/market?categories=${c.id}`" class="peer w-full flex items-center justify-between">
                  <span>{{c.title}}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-90">
                    <g opacity="0.5">
                      <path d="M11.0832 4.95831L6.99984 9.04165L2.9165 4.95831" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                </NuxtLink>
                <div class="bg-white peer-hover:opacity-100 hover:opacity-100 opacity-0 transition-opacity duration-200 p-5 absolute right-full -top-4 border rounded-lg w-max -translate-x-5">
                  <ul class="flex flex-col space-y-3">
                    <li v-for="s in c.children">
                      <NuxtLink :to="`/market?categories=${s.id}`">
                        {{s.title}}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a :href="BLOGS_URL" class="flex items-center gap-2">
            <span>مقالات</span>
            <span class="hidden text-[#FB7511] bg-[#FB7511]/10 rounded-md text-xs px-2 py-0.5">بزودی</span>
          </a>
        </li>
        <li>
          <NuxtLink to="/aboutus" class="flex gap-2">
            <span>درباره‌ما</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contactus" class="flex gap-2">
            <span>تماس با ما</span>
          </NuxtLink>
        </li>
        <li>
          <button class="flex gap-2" @click="showCertificateModal = true" v-if="false">
            <span>استعلام محصول</span>
          </button>
          <NuxtLink to="/inquiry" v-else>
            <span>استعلام محصول</span>
          </NuxtLink>
        </li>
      </ul>
      <div class="flex items-center gap-4">
        <!-- Search -->
        <button @click="showSearchModal = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.0183 18.4851L21.5423 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
        <!-- Account -->
        <button @click="showAccountOptions = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z" stroke="currentColor" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
        <Transition name="slide-fade">
          <div v-if="showAccountOptions" v-click-outside="closeAccountOptions" class="absolute z-20 bg-white top-14 w-[150px] p-2 rounded-lg"
               style="box-shadow: 0 0 5px 0 #69696940;">
            <div class="flex flex-col w-full space-y-2" v-if="!authStore.isLoggedIn">
              <button
                  class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]"
                  @click="authStore.isAuthModalOpen = true,authStore.changeStep('register')">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="12" height="12" fill="url(#pattern0_461_1998)" fill-opacity="0.5"/>
                  <defs>
                    <pattern id="pattern0_461_1998" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_461_1998" transform="scale(0.01)"/>
                    </pattern>
                    <image id="image0_461_1998" width="100" height="100"
                           xlink:href="data:image/png;base64,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"/>
                  </defs>
                </svg>
                <span>ثبت نام</span>
              </button>
              <hr>
              <button
                  class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]"
                  @click="authStore.isAuthModalOpen = true,authStore.changeStep('login')">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="12" height="12" fill="url(#pattern0_461_1999)" fill-opacity="0.5"/>
                  <defs>
                    <pattern id="pattern0_461_1999" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_461_1999" transform="scale(0.01)"/>
                    </pattern>
                    <image id="image0_461_1999" width="100" height="100"
                           xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNFJREFUeAHtnc3rFVUch5+MUEmKFhnqpoKyTSpWS3e+VNALhoG1ycSFL4EkGIVvoEGIFeQfoIS2qL2VBdGiTe1rV4K9WViom7TX+4XfwHCZ89K993fOfIfPhWHuvefcOec8z5yXuTNzBvQSAREQAREQAREQAREQAREQAREQAREQAREQARGYhMDtwOPADuCVni4vA88DDwELJimkh99sBD4GrgP/Olp+AN4G7vIAOSePK4DzjgSEdpZrwD7gppxC9zXOI6OmyfawUCE9fv8esKivwGP5ugf4dWAymh3oA281ZTHwzUBlNFKs+XLzstFTk/HQ+jvgc+CTHi5fjvoL6zNCebfvr3rp6JcAv0cKYx38gw52rYXAC8DlSFneclAOnokU4Cxws4dCtPK4MiLlew99yemAkJ+BW1sF9fR2W6BM1nTZwWOvX18EMv9mr3Mdz5w1X6E+ZWv8p/VDvw0IsfbY8+urQLl6P9r6JZDxLZ5tAJ8FynWk7+WSkJ4ZkhAJKUJATVYRzPmJSEg+qyIxJaQI5vxEJCSfVZGYElIEc34iEpLPqkhMCRnDbH/iHQeOAWvGwkp8lJAW5WeBv1p/XdwAdrbCS7x1K+THFrj2GbenJ6RmV3l0bfOf0Tn73RNuc5KfuRXyUYcQg3fvJBSAOzu214guKcWtkLXAlTGI05wLsTOMP41trxFi61JS3AqximCXAB0FTgKTNlXtCmWXdRr4toj2+xJSXAtpw5zVe7sWOCXlpVkl1rEdCemAUlOKhHQIsa9qSZGQgJBaUiQkIqSGFAlJCCktpRdC7BjA7u+wg7qSi90cc0fmciAyHJ7lcUp1IU8Cdqlke7zv9b0Nl3dl1LhYlKpC7gf+GIiMZif6E3g4RjwRVlXIawOT0UiZ5mr1qkJeHaiQdxK1IBZcVch9A2yyrB9ZFyOeCKsqxPL2BHBxQDXlYAJ4Kri6EMug3TRfY9j7f4bYqWGv9R+zuCC6F0JSe03tcDu1a6OnptPuWh+eUSYlJAGypAzLioREhJSWISE9kyEhASE1akaTFTVZDYm5dU0ZlgXXQmyobEf7J4ANY2An+Wh/dLYvlOsaTc1iaBvLm1shq4Dfxoair8dKmgizY6HUv87zLcOy6FbIuTEZtjf/DdydAB8KXtaxvXYNKSHDtZDQ/FhPhYgnvr8lMndKKRmuhczHXbh7OmrJoYTIWQe7bbLmQ4jBfWx0GvnduWXTrGlnbE9CMiCVjCIhJWlnpCUhGZBKRpGQkrQz0pKQDEglo0hISdoZaUlIBqSSUSSkJO2MtCQkA1LJKBJSknZGWm6FaBLMDLslo4SmiZ3mutqS+e9Ky/U0sac6/pm18xeXRmcQbRpyj68XA2WycvV+IuXNkczbsze8TTX+gPepxm068fFTuO0zfJ8Cqx1UE2umrGbEyjLNDBVFEeyP1JJGzoUeP67CZrEOTS3e5N8eV7G0KNUpErNHAn2dIaUpnMf13in4VPnpkB959L6Hx1R0Wbd7+lKX8HirHWe8PhSsEbQc+HAAzZf1Ge6aqUZC13r9nBhvD5a0Gm6jKTcdeBf82He3AY+ObpfbPqo1djPNGz1c7NGrzwE2GZvrB0nGRChMBERABERABERABERABERABERABERABERABFIE/gNUOiA0KlQmiAAAAABJRU5ErkJggg=="/>
                  </defs>
                </svg>
                <span>ورود</span>
              </button>
            </div>
            <div class="flex flex-col space-y-2 font-light" v-else>
              <NuxtLink to="/profile"
                        class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     class="w-4">
                  <path
                      d="M9 21V14.1528C9 13.5226 9.53726 13.0116 10.2 13.0116H13.8C14.4627 13.0116 15 13.5226 15 14.1528V21M11.3046 3.21117L3.50457 8.48603C3.18802 8.7001 3 9.04665 3 9.41605V19.2882C3 20.2336 3.80589 21 4.8 21H19.2C20.1941 21 21 20.2336 21 19.2882V9.41605C21 9.04665 20.812 8.70011 20.4954 8.48603L12.6954 3.21117C12.2791 2.92961 11.7209 2.92961 11.3046 3.21117Z"
                      stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round"/>
                </svg>
                <span>داشبورد</span>
              </NuxtLink>
              <hr>
              <NuxtLink to="/profile/orders"
                        class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     class="w-4">
                  <path
                      d="M7.79922 7.8H16.1992M7.79922 12.6H16.1992M5.75922 3H18.2392C19.1008 3 19.7992 3.80589 19.7992 4.8V21L17.1992 19.2L14.5992 21L11.9992 19.2L9.39922 21L6.79922 19.2L4.19922 21V4.8C4.19922 3.80589 4.89765 3 5.75922 3Z"
                      stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>سفارشات</span>
              </NuxtLink>
              <hr>
              <NuxtLink to="/profile/notification"
                        class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     class="w-4">
                  <path
                      d="M11.4374 3H5.24997C4.00735 3 3 4.00734 3 5.24996V14.2502C3 15.4928 4.00736 16.5002 5.24999 16.5002L13.369 16.5001L17.625 21V16.5002L18.7501 16.5001C19.9927 16.5001 21 15.4928 21 14.2502V12.0004M21 5.81274C21 7.36601 19.7408 8.62519 18.1875 8.62519C16.6343 8.62519 15.3751 7.36601 15.3751 5.81274C15.3751 4.25946 16.6343 3.00028 18.1875 3.00028C19.7408 3.00028 21 4.25946 21 5.81274Z"
                      stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="flex items-center gap-2">
                  <span>پیام ها</span>
                  <base-f-badge color="brandOrange" size="xs" v-if="accountStore.unseenNotifs > 0">
                    {{ accountStore.unseenNotifs }}
                  </base-f-badge>
                </div>
              </NuxtLink>
              <hr>
              <button
                  class="flex items-center gap-2 px-2 rounded-md py-1 text-danger transition-colors duration-200 hover:bg-[#F2F2F2]"
                  @click="authStore.logOut">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     class="w-4">
                  <path
                      d="M8.78056 3.6001H5.07468C4.51304 3.6001 3.97441 3.82135 3.57728 4.21517C3.18014 4.609 2.95703 5.14314 2.95703 5.7001V18.3001C2.95703 18.8571 3.18014 19.3912 3.57728 19.785C3.97441 20.1788 4.51304 20.4001 5.07468 20.4001H8.78056M9.04375 12.0001H21.0438M21.0438 12.0001L16.4586 7.2001M21.0438 12.0001L16.4586 16.8001"
                      stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>خروج</span>
              </button>
            </div>
          </div>
        </Transition>
        <!-- Cart -->
        <button class="flex flex-col relative items-center space-y-1" @click="showCart = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path d="M2.75 3.24988L4.83 3.60988L5.793 15.0829C5.87 16.0199 6.653 16.7389 7.593 16.7359H18.502C19.399 16.7379 20.16 16.0779 20.287 15.1899L21.236 8.63188C21.342 7.89888 20.833 7.21888 20.101 7.11288C20.037 7.10388 5.164 7.09888 5.164 7.09888" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.125 10.7948H16.898" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15435 20.2025C7.45535 20.2025 7.69835 20.4465 7.69835 20.7465C7.69835 21.0475 7.45535 21.2915 7.15435 21.2915C6.85335 21.2915 6.61035 21.0475 6.61035 20.7465C6.61035 20.4465 6.85335 20.2025 7.15435 20.2025Z" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4346 20.2025C18.7356 20.2025 18.9796 20.4465 18.9796 20.7465C18.9796 21.0475 18.7356 21.2915 18.4346 21.2915C18.1336 21.2915 17.8906 21.0475 17.8906 20.7465C17.8906 20.4465 18.1336 20.2025 18.4346 20.2025Z" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <span v-if="cartStore.cartItemsCount > 0"
              class="absolute -bottom-1/2 translate-y-2 text-white bg-[#FB7511] rounded-full text-[10px] leading-[22px] w-5 h-5 grid place-items-center">
          {{cartStore.cartItemsCount}}
        </span>
        </button>
        <Transition name="slideUpNormal">
          <div v-if="showCart" class="bg-[#FAFAFA] absolute flex items-stretch left-0 top-[45px] drop-shadow-xl origin-top p-5 rounded-3xl min-w-[300px] 2xl:min-w-[400px] min-h-[50vh] z-20" v-click-outside="closeCartModal">
            <div class="flex flex-col justify-between" v-if="cartStore.cartItemsCount > 0">
              <div class="flex flex-col">
                <div class="flex items-center justify-between">
                  <button class="w-9 h-9 bg-white rounded-full border grid place-items-center" @click="closeCartModal">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.34819 0.650026L0.648193 8.35002M8.34819 8.35002L0.648194 0.650024" stroke="#070707" stroke-linecap="round"/>
                    </svg>
                  </button>
                  <div class="flex items-center gap-2">
                    <span>سبد خرید</span>
                    <span v-if="cartStore.cartItemsCount > 0"
                          class="text-white bg-[#FB7511] rounded-full text-xs leading-5 w-5 h-5 grid place-items-center">
                    {{cartStore.cartItemsCount}}
                  </span>
                  </div>
                  <button class="w-9 h-9 bg-white rounded-full border grid place-items-center" @click="cartStore.showCartModal = true,closeCartModal()">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.6">
                        <path d="M1.83337 2.16663L3.22004 2.40663L3.86204 10.0553C3.91337 10.68 4.43537 11.1593 5.06204 11.1573H12.3347C12.9327 11.1586 13.44 10.7186 13.5247 10.1266L14.1574 5.75463C14.228 5.26596 13.8887 4.81263 13.4007 4.74196C13.358 4.73596 3.44271 4.73263 3.44271 4.73263" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.41675 7.19655H11.2654" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.76953 13.4684C4.97019 13.4684 5.13219 13.6311 5.13219 13.8311C5.13219 14.0317 4.97019 14.1944 4.76953 14.1944C4.56886 14.1944 4.40686 14.0317 4.40686 13.8311C4.40686 13.6311 4.56886 13.4684 4.76953 13.4684Z" fill="#070707" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2898 13.4684C12.4905 13.4684 12.6531 13.6311 12.6531 13.8311C12.6531 14.0317 12.4905 14.1944 12.2898 14.1944C12.0891 14.1944 11.9271 14.0317 11.9271 13.8311C11.9271 13.6311 12.0891 13.4684 12.2898 13.4684Z" fill="#070707" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                    </svg>
                  </button>
                </div>
                <hr class="my-4">
                <ul class="flex flex-col space-y-4 max-h-[300px] 2xl:max-h-[450px] mb-5 pr-4 overflow-y-auto" dir="ltr">
                  <li class="flex items-start gap-6 pb-4 border-b last:border-none" v-for="i in cartStore.PendingOrder.orderItems" :key="i.id" dir="rtl">
                    <div class="w-1/4 2xl:w-1/3 max-w-[200px] rounded-xl bg-white border grid place-items-center aspect-square">
                      <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`"
                           :alt="i.itemInfo.productImage.alt" class="w-2/3">
                    </div>
                    <div class="flex-1 flex flex-col items-start space-y-4">
                      <button class="self-end" @click="cartStore.removeItem(i.id)">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.104 7.89014C16.104 7.89014 15.6515 13.5026 15.389 15.8668C15.264 16.996 14.5665 17.6576 13.424 17.6785C11.2499 17.7176 9.0732 17.7201 6.89986 17.6743C5.8007 17.6518 5.11486 16.9818 4.99236 15.8726C4.7282 13.4876 4.2782 7.89014 4.2782 7.89014" stroke="#EF2626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M17.2568 5.19975H3.12512" stroke="#EF2626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M14.5337 5.19974C13.8796 5.19974 13.3162 4.73724 13.1879 4.0964L12.9854 3.08307C12.8604 2.61557 12.4371 2.29224 11.9546 2.29224H8.42707C7.94457 2.29224 7.52123 2.61557 7.39623 3.08307L7.19373 4.0964C7.0654 4.73724 6.50207 5.19974 5.8479 5.19974" stroke="#EF2626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                      <span class="!-mt-4 2xl:!mt-4 font-thin px-3 py-0.5 rounded-full bg-[#FB7511]/10 text-[#FB7511] w-max text-xs">{{ EPackingType[i.itemInfo.packingType]?.toString().replaceAll('_','‌') }}</span>
                      <span class="text-sm 2xl:text-base truncate max-w-[150px]">{{i.itemInfo.productName}}</span>
                      <div class="flex gap-2 items-center text-xs 2xl:text-base">
                        <span class="line-through text-[#D0D0D0]" v-if="false">265.000 تومان</span>
                        <span>{{(i.totalPrice / 10).toLocaleString()}} تومان</span>
                      </div>
                      <div class="hidden 2xl:flex border rounded-full px-4 py-2 items-center justify-between gap-4">
                        <button class="p-2">
                          <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                              <path d="M5.84412 3.2785L0.972688 3.2785" stroke="#070707" stroke-width="1.5" stroke-linecap="round"/>
                              <path d="M3.40833 5.71417L3.40833 0.842744" stroke="#070707" stroke-width="1.5" stroke-linecap="round"/>
                            </g>
                          </svg>
                        </button>
                        <input type="number" class="appearance-none bg-white w-6 h-6 rounded-full border grid place-items-center text-center text-xs 2xl:text-sm" value="1">
                        <button class="p-2">
                          <svg width="7" height="2" viewBox="0 0 7 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M6 1L1 1" stroke="#070707" stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-xs opacity-60">قیمت نهایی:</span>
                  <span >{{ (cartStore.PendingOrder.totalPrice / 10).toLocaleString() }} تومان</span>
                </div>
                <button class="w-1/2 rounded-xl bg-[#FB7511] text-white py-3" @click="cartStore.showCartModal = true,closeCartModal()">
                  مشاهده سبد خرید
                </button>
              </div>
            </div>
            <div v-else class="flex flex-col items-center space-y-5 m-auto">
              <img src="~/assets/images/empty-cart2.png" alt="empty cart" class="w-[170px]">
              <span class="opacity-50 font-medium text-sm">سبد خرید شما خالی است!</span>
              <NuxtLink to="/market" class="font-semibold text-[#FB7511]">
                افزودن محصول
              </NuxtLink>
            </div>
          </div>
        </Transition>
        <!-- Favorites -->
        <NuxtLink v-if="authStore.isLoggedIn" to="/profile/favorites">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 6.70001C17.07 7.04601 17.826 8.00101 17.917 9.12201" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </nav>

  <Transition name="slideUp">
    <div class="fixed z-20 inset-0 bg-black/20 flex items-center justify-center backdrop-blur-sm" v-if="showSearchModal" @click.self="showSearchModal = false">
      <div class="w-1/3 flex flex-col h-2/3">
        <form action="/market" class="w-full relative flex items-center" method="GET">
          <input type="text" name="search" id="search" placeholder="جستجوی محصول"
                 class="w-full p-4 rounded-xl font-light focus:outline-black/20 appearance-none">
          <button class="absolute left-0 px-4 inset-y-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.0183 18.4851L21.5423 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </Transition>

  <Transition name="slideUp">
    <div class="fixed inset-0 backdrop-blur-sm bg-black/20 z-20" @click.self="cartStore.showCartModal = false" v-if="cartStore.showCartModal">
      <div class="bg-[#FAFAFA] absolute inset-x-0 bottom-0 top-[10%] rounded-t-[60px] flex flex-col items-center">
        <button class="absolute bg-[#FAFAFA] w-[50px] h-[50px] rounded-full border grid place-items-center -translate-y-1/2" @click="cartStore.showCartModal = false">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.375 6.83333L6 11M6 11L1.625 6.83333M6 11L6 1" stroke="#09090B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <h4 class="text-3xl flex my-12">سبد خرید</h4>
        <div class="container mx-auto flex flex-col items-center space-y-8 3xl:space-y-10" v-if="cartStore.cartItemsCount > 0">
          <div class="w-full flex items-start gap-12">
            <div class="flex-1 flex flex-col">
              <div class="grid grid-cols-5 gap-5 items-center">
                <div class="col-span-2 text-lg">محصول</div>
                <div class=" text-lg">نوع</div>
                <div class=" text-lg">تعداد</div>
                <div class=" text-lg">قیمت</div>
                <hr class="col-span-full">
              </div>
              <div class="grid grid-cols-5 gap-5 items-center mt-4 py-5 max-h-[400px] 2xl:max-h-[70vh] overflow-y-auto pr-4" dir="ltr">
                <div class="col-span-full grid grid-cols-5 gap-5 relative border-b mr-10 pb-4 items-center last:border-none" v-for="i in cartStore.PendingOrder.orderItems" :key="i.id" dir="rtl">
                  <button class="absolute -right-12 top-4 p-4" @click="cartStore.removeItem(i.id)">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.75 1.25L1.25 9.75M9.75 9.75L1.25 1.25" stroke="#070707" stroke-width="0.7" stroke-linecap="round"/>
                    </svg>
                  </button>
                  <div class="col-span-2 flex items-center gap-4">
                    <div class="bg-white rounded-xl w-[70px] h-[70px] grid place-items-center border">
                      <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`"
                           :alt="i.itemInfo.productImage.alt" class="w-2/3">
                    </div>
                    <span class="opacity-60 max-w-[170px] truncate" :title="i.itemInfo.productName">{{i.itemInfo.productName}}</span>
                  </div>
                  <div  class="opacity-60">{{ EPackingType[i.itemInfo.packingType]?.toString().replaceAll('_','‌') }}</div>
                  <div class="w-max" v-if="!cartStore.cartLoading">
                    <div class="border rounded-full px-4 py-2 flex items-center justify-between gap-4">
                      <button class="p-2" @click="cartStore.increaseCount(i.id)">
                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.8">
                            <path d="M5.84412 3.2785L0.972688 3.2785" stroke="#070707" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M3.40833 5.71417L3.40833 0.842744" stroke="#070707" stroke-width="1.5" stroke-linecap="round"/>
                          </g>
                        </svg>
                      </button>
                      <input type="number" class="appearance-none bg-white w-6 h-6 rounded-full border grid place-items-center text-center text-sm" :value="i.count">
                      <button class="p-2" @click="cartStore.decreaseCount(i.id)">
                        <svg width="7" height="2" viewBox="0 0 7 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.8" d="M6 1L1 1" stroke="#070707" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div  class="opacity-60" v-if="!cartStore.cartLoading">{{ (i.totalPrice / 10).toLocaleString() }} تومان</div>
                  <div class="skeleton col-span-2" v-else><div class="skeleton-el w-full rounded-full h-4"></div></div>
                </div>
              </div>
            </div>
            <div class="w-1/3 max-w-[310px] py-6 px-8 rounded-xl border bg-white flex flex-col justify-between min-h-[400px]">
              <div class="flex flex-col space-y-8">
                <h5>مجموع قیمت</h5>
                <div class="flex flex-col w-full space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-light opacity-50">جمع محصولات</span>
                    <span class="text-xs font-light opacity-50">{{ (cartStore.PendingOrder.totalPrice / 10).toLocaleString() }} تومان</span>
                  </div>
                  <hr class="my-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-light opacity-50">مبلغ تخفیف</span>
                    <span class="text-xs font-light opacity-50">0 تومان</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-light">مجموع</span>
                    <span class="text-xs font-light">{{ (cartStore.PendingOrder.totalPrice / 10).toLocaleString() }} تومان</span>
                  </div>
                </div>
              </div>
              <button class="w-full py-2 rounded-xl bg-[#FB7511] text-white" @click="cartStore.showShippingModal = true,cartStore.showCartModal = false">ادامه و پرداخت</button>
            </div>
          </div>
        </div>
        <div v-else class="flex flex-col items-center space-y-5 m-auto">
          <img src="~/assets/images/empty-cart2.png" alt="empty cart" class="w-[170px]">
          <span class="opacity-50">سبد خرید شما خالی است!</span>
          <NuxtLink to="/market" class="font-semibold text-[#FB7511]">
            افزودن محصول
          </NuxtLink>
        </div>
      </div>
    </div>
  </Transition>
  <Transition name="slideUp">
    <div class="fixed inset-0 backdrop-blur-sm bg-black/20 z-20" @click.self="cartStore.showShippingModal = false" v-if="cartStore.showShippingModal">
      <div class="bg-[#FAFAFA] absolute inset-x-0 bottom-0 top-[10%] rounded-t-[60px] flex flex-col items-center">
        <button class="absolute bg-[#FAFAFA] w-[50px] h-[50px] rounded-full border grid place-items-center -translate-y-1/2" @click="cartStore.showShippingModal = false">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.375 6.83333L6 11M6 11L1.625 6.83333M6 11L6 1" stroke="#09090B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="container mx-auto flex items-center justify-center relative my-10">
          <h4 class="text-3xl">جزئیات صورتحساب</h4>
          <button @click="cartStore.showCartModal = true,cartStore.showShippingModal = false" class="flex items-center gap-2 absolute left-0">
            <span class="text-sm">سبد خرید</span>
            <span class="w-9 h-9 rounded-full bg-white border grid place-items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.6">
                  <path d="M1.83337 2.1665L3.22004 2.4065L3.86204 10.0552C3.91337 10.6798 4.43537 11.1592 5.06204 11.1572H12.3347C12.9327 11.1585 13.44 10.7185 13.5247 10.1265L14.1574 5.7545C14.228 5.26584 13.8887 4.8125 13.4007 4.74184C13.358 4.73584 3.44271 4.7325 3.44271 4.7325" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.41675 7.19637H11.2654" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.76953 13.4683C4.97019 13.4683 5.13219 13.6309 5.13219 13.8309C5.13219 14.0316 4.97019 14.1943 4.76953 14.1943C4.56886 14.1943 4.40686 14.0316 4.40686 13.8309C4.40686 13.6309 4.56886 13.4683 4.76953 13.4683Z" fill="#070707" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2898 13.4683C12.4905 13.4683 12.6531 13.6309 12.6531 13.8309C12.6531 14.0316 12.4905 14.1943 12.2898 14.1943C12.0891 14.1943 11.9271 14.0316 11.9271 13.8309C11.9271 13.6309 12.0891 13.4683 12.2898 13.4683Z" fill="#070707" stroke="#070707" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </span>
          </button>
        </div>
        <div class="flex flex-col w-full h-full items-center">
          <hr class="w-full">
          <div class="w-full h-full flex items-stretch gap-12 relative justify-center">
            <div class="bg-white border-l w-1/2 h-full"></div>
            <div class="flex-1"></div>
            <div class="absolute top-4 2xl:top-10 container flex py-5 pr-5 max-h-[420px] 2xl:max-h-[70vh] overflow-y-auto" dir="ltr">
              <div class="flex items-start justify-between w-full" dir="rtl">
                <form @submit.prevent="payOrder" class="w-2/5 flex flex-col space-y-4 mb-5">
                  <strong>آدرس ارسال مرسوله:</strong>
                  <div class="grid grid-cols-2 gap-4 w-full">
                    <input type="text" placeholder="نام" name="receiverFirstName" id="receiverFirstName" required v-model="addressCommand.receiverFirstName"
                           class="w-full rounded-md 2xl:rounded-lg bg-[#FAFAFA] border px-2 2xl:px-4 py-2 text-sm 2xl:text-base font-light focus:ring-none focus:outline-black/20">
                    <input type="text" placeholder="نام خانوادگی" name="receiverLastName" id="receiverLastName" required v-model="addressCommand.receiverLastName"
                           class="w-full rounded-md 2xl:rounded-lg bg-[#FAFAFA] border px-2 2xl:px-4 py-2 text-sm 2xl:text-base font-light focus:ring-none focus:outline-black/20">
                    <BaseGStateCityPicker class="col-span-full" @valueUpdated="valueUpdated" :state="accountStore.getActiveAddress?.state" :city="accountStore.getActiveAddress?.city" />
                    <input type="text" placeholder="آدرس" name="street" id="street" required v-model="addressCommand.street"
                           class="w-full rounded-md 2xl:rounded-lg bg-[#FAFAFA] border px-2 2xl:px-4 py-2 text-sm 2xl:text-base col-span-full font-light focus:ring-none focus:outline-black/20">
                    <input type="text" placeholder="شماره تلفن" name="receiverPhoneNumber" id="receiverPhoneNumber" required v-model="addressCommand.receiverPhoneNumber"
                           class="w-full rounded-md 2xl:rounded-lg bg-[#FAFAFA] border px-2 2xl:px-4 py-2 text-sm 2xl:text-base col-span-full font-light focus:ring-none focus:outline-black/20">
                    <input type="text" placeholder="کد پستی" name="postCode" id="postCode" required v-model="addressCommand.postCode"
                           class="w-full rounded-md 2xl:rounded-lg bg-[#FAFAFA] border px-2 2xl:px-4 py-2 text-sm 2xl:text-base col-span-full font-light focus:ring-none focus:outline-black/20">
                    <input type="number" placeholder="پلاک" name="plaque" id="plaque" required v-model="addressCommand.plaque"
                           class="w-full rounded-md 2xl:rounded-lg bg-[#FAFAFA] border px-2 2xl:px-4 py-2 text-sm 2xl:text-base font-light focus:ring-none focus:outline-black/20">
                    <input type="number" placeholder="واحد" name="unit" id="unit" required v-model="addressCommand.unit"
                           class="w-full rounded-md 2xl:rounded-lg bg-[#FAFAFA] border px-2 2xl:px-4 py-2 2xl:py-3 text-sm 2xl:text-base font-light focus:ring-none focus:outline-black/20">
                  </div>
                  <base-g-button is-icon :is-loading="payLoading" type="submit" custom-class="w-full py-3 rounded-lg text-white bg-[#FB7511]" >
                    پرداخت
                  </base-g-button>
                </form>
                <div class="flex flex-col items-end w-2/5 2xl:space-y-7 mb-5">
                  <div class="w-full">
                    <ul class="w-full max-h-[250px] 2xl:max-h-[400px] overflow-y-auto py-4 pr-4" dir="ltr">
                      <li class="w-full flex flex-wrap items-stretch gap-x-8 py-3 first:pt-0" v-for="(i,n) in cartStore.PendingOrder.orderItems" :key="i.id" dir="rtl">
                        <div class="w-1/6 border rounded-md aspect-square bg-white grid place-items-center relative">
                          <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`"
                               :alt="i.itemInfo.productImage.alt" alt="saffron pocket" class="w-2/3">
                          <span class="text-white bg-[#FB7511] rounded-full text-xs leading-5 w-5 h-5 grid place-items-center absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                          {{ i.count }}
                        </span>
                        </div>
                        <div class="flex-1 flex items-center justify-between my-auto">
                          <div class="flex flex-col gap-1">
                            <span class="text-sm max-w-[200px] truncate" :title="i.itemInfo.productName">{{ i.itemInfo.productName }}</span>
                            <span class="font-thin px-3 py-0.5 rounded-full bg-[#FB7511]/10 text-[#FB7511] w-max text-xs">{{ EPackingType[i.itemInfo.packingType]?.toString().replaceAll('_','‌') }}</span>
                          </div>
                          <span class="text-sm">{{ (i.totalPrice / 10).toLocaleString() }} تومان</span>
                        </div>
                        <div class="flex gap-8 items-center w-full -mb-6" v-if="n != cartStore.cartItemsCount - 1">
                          <div class="w-1/5"></div>
                          <hr class="w-4/5 flex-1">
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="w-4/5 pr-8 mr-auto flex flex-col space-y-5">
                    <!--  Payment Method  -->
                    <div class="relative">
                      <div class="flex items-center gap-2 mt-2">
                        <input type="radio" id="gateway" name="paymentMethod" v-model="paymentMethod" :value="EPaymentMethod.Gateway">
                        <label for="gateway" class="font-light">درگاه بانکی</label>
                      </div>
                      <div class="flex items-center gap-2 mt-2">
                        <input type="radio" id="wallet" name="paymentMethod" v-model="paymentMethod" :value="EPaymentMethod.Wallet">
                        <label for="wallet" class="font-light">کیف پول</label>
                        <div class="flex items-center">
                          (<base-g-price :price="(accountStore.currentUser?.walletCash ?? 0) / 10" class="scale-75" />)
                        </div>
                      </div>
                      <span class="inset-y-0 -right-5 translate-x-full top-2 font-light text-sm absolute">روش پرداخت</span>
                    </div>
                    <div class="flex gap-3 w-full items-stretch">
                      <input type="text" class="border rounded-lg flex-1 py-2 text-xs px-4" placeholder="کد تخفیف" v-model="discountCode">
                      <base-g-button type="button" button-type="white" is-icon :is-loading="discountLoading" custom-class="rounded-xl text-xs w-max px-7 py-2 text-[#FB7511] bg-[#FB7511]/20" @click="applyDiscount"
                              v-if="cartStore.PendingOrder.discount.code == ''">
                        اعمال
                      </base-g-button>
                      <base-g-button type="button" button-type="white" is-icon :is-loading="discountLoading" custom-class="rounded-xl text-xs w-max px-7 py-2 text-[#FB7511] bg-[#FB7511]/20" @click="removeDiscount" v-else>
                        حذف
                      </base-g-button>
                    </div>
                    <div class="w-full flex flex-col space-y-3 px-2">
                      <div class="w-full flex items-center justify-between">
                        <span class="opacity-50 text-xs">کد تخفیف</span>
                        <div class="flex flex-col items-end">
                          <span class="opacity-50 text-[10px]" v-if="cartStore.PendingOrder.discount.code != ''">{{ (cartStore.PendingOrder.discount.amount) }} درصد</span>
                          <span class="opacity-50 text-xs">{{ ((cartStore.PendingOrder.totalPrice * cartStore.PendingOrder.discount.amount) / 1000).toLocaleString() }} تومان</span>
                        </div>
                      </div>
                      <div class="w-full flex items-center justify-between">
                        <span class="opacity-50 text-xs">جمع محصولات</span>
                        <span class="opacity-50 text-xs">{{ (cartStore.PendingOrder.totalPrice / 10).toLocaleString() }} تومان</span>
                      </div>
                      <div class="w-full flex items-center justify-between">
                        <span class="opacity-50 text-xs">هزینه ارسال پست</span>
                        <span class="opacity-50 text-xs">{{ (cartStore.PendingOrder.transmissionPrice / 10).toLocaleString() }} تومان</span>
                      </div>
                      <hr class="w-full">
                      <div class="w-full flex items-center justify-between">
                        <span>مجموع</span>
                        <span>{{ (cartStore.PendingOrder.finallyPrice / 10).toLocaleString() }} تومان</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

</div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.store";
import {useCartStore} from "~/stores/cart.store";
import {Form} from "vee-validate";
import {ToastType, useToast} from "~/composables/useSwal";
import {GetUnseenNotificationsCount} from "~/services/notification.service";
import {BLOGS_URL, SITE_URL} from "~/utilities/api.config";
import type {CategoryDto} from "~/models/categories/categoryQueries";
import {GetCategories} from "~/services/category.service";
import {EOrderBy} from "~/models/product/EOrderBy";
import {GetActiveTemplate} from "~/services/mainPage.service";
import type {TopBanner} from "~/models/mainPage/dataTemplate";
import {EPackingType} from "~/models/product/EPackingType";
import {
  PayWithWallet,
  RemoveDiscount,
  SetDiscount,
  SetOrderAddress,
  SetOrderTransmissionPrice
} from "~/services/cart.service";
import {EPaymentMethod} from "~/models/ePaymentMethod";
import {FetchApi} from "~/utilities/CustomApiFetch";
import * as Yup from 'yup';
import type {SetAddressCommand} from "~/models/cart/cartCommands";
import type {SelectTagDto} from "~/models/product/productQueries";

const loading = ref(false);
const topBannerLoading = ref(true);
const topBanner:Ref<TopBanner | null | undefined> = ref(null);

const authStore = useAuthStore();
const cartStore = useCartStore();
const accountStore = useAccountStore();
const showCategories = ref(false);
const showAccountOptions = ref(false);
const showCart = ref(false);
const discountLoading:Ref<boolean> = ref(false);
const discountCode:Ref<string | null | undefined> = ref(cartStore.PendingOrder?.discount.code);

const showSearchModal = ref(false);
const showCertificateModal = ref(false);
const closeCategories = ()=>{showCategories.value = false};
const closeAccountOptions = ()=>{showAccountOptions.value = false};
const closeCart = ()=>{showCart.value = false};
const showResponsiveNavbar = ref(false);
const unseenNotifs = ref(0);

const route = useRoute();
const router = useRouter();

watch(() => route.fullPath, () => {
  showResponsiveNavbar.value = false;
});

const paymentMethod = ref(EPaymentMethod.Gateway);
const payLoading = ref(false);
const isCategoryHovered = ref(false);
const categories: Ref<CategoryDto[]> = ref([]);
const selectedCategory: Ref<CategoryDto> = ref([]);
const subCategories: Ref<CategoryDto[]> = ref([]);

const addressSchema = Yup.object().shape({
  receiverFirstName:Yup.string().required(),
  receiverLastName:Yup.string().required(),
  receiverPhoneNumber:Yup.string().required(),
  postCode:Yup.string().required(),
  street:Yup.string().required(),
  plaque:Yup.number().required(),
  unit:Yup.number().required()
});

const addressCommand:SetAddressCommand = reactive({
  receiverFirstName:'',
  receiverLastName:'',
  receiverPhoneNumber:'',
  state:'',
  city:'',
  street:'',
  postCode:'',
  plaque:'',
  unit:'',
})

const payOrder = async ()=>{
  payLoading.value = true;

  if(addressCommand.state == ''){
    await toast.showToast("لطفا استان خود را انتخاب کنید",ToastType.info);
    payLoading.value = false;
    return;
  }
  if(addressCommand.city == ''){
    await toast.showToast("لطفا شهر خود را انتخاب کنید",ToastType.info);
    payLoading.value = false;
    return;
  }

  const addressResult = await SetOrderAddress(addressCommand);
  if(!addressResult.isSuccess){
    toast.showError(addressResult.metaData);
    payLoading.value = false;
    return;
  }

  if(paymentMethod.value == EPaymentMethod.Gateway){
    const result = await FetchApi<string>('/payment/payRequest',{
      method:'POST',
      body:{
        userId:addressResult.data
      }
    });

    if(result.isSuccess && result.data != ''){
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://bpm.shaparak.ir/pgwchannel/startpay.mellat';
      form.enctype = 'application/x-www-form-urlencoded';
      const refId = document.createElement('input');
      refId.name = 'RefId';
      refId.id = 'RefId';
      refId.value = result.data!;
      form.appendChild(refId);
      document.body.appendChild(form)
      form.submit();
    }
  }
  else{
    if(accountStore.currentUser?.walletCash < cartStore.PendingOrder?.finallyPrice)
    {
      await toast.showToast("موجودی کیف پول شما از مبلغ سفارش کمتر است",ToastType.error,5000,false);
      payLoading.value = false;
      return;
    }

    const result = await PayWithWallet();
    if(result.isSuccess){
      await router.push(`/payment/success?orderId=${result.data?.orderId}&saleRefId=${result.data?.refCode}`);
    }else{
      await toast.showError({message:"پرداخت سفارش با مشکل مواجه شد",appStatusCode:result.metaData.appStatusCode});
    }
  }

  payLoading.value = false;
}

const refreshCategories = async () => {
  const result = await GetCategories({pageId: 1, take: 100, search: ''});
  if (result.isSuccess) {
    categories.value = result.data?.data!;
  }
}

const applyDiscount = async () =>{
  if(discountLoading.value) return;

  discountLoading.value = true;

  const result = await SetDiscount(discountCode.value);
  if(result.isSuccess){
    toast.showToast();
    await cartStore.refreshCart();
  }
  else{
    toast.showError(result.metaData);
  }

  discountLoading.value = false;
}
const removeDiscount = async ()=>{
  if(discountLoading.value) return;

  discountLoading.value = true;

  const result = await RemoveDiscount();
  if(result.isSuccess){
    toast.showToast();
    await cartStore.refreshCart();
  }
  else{
    toast.showError(result.metaData);
  }

  discountLoading.value = false;
}

const categoryHovered = (category: CategoryDto) => {
  if(isCategoryHovered.value && category.id == subCategories.value[0].parentId) {
    isCategoryHovered.value = false;
    return;
  }
  isCategoryHovered.value = true;
  selectedCategory.value = category;
  subCategories.value = category.children ?? [];
}

const productUtils = useProductUtils();
const productOptions:Ref<SelectTagDto[]> = ref([]);
onMounted(async () => {
  loading.value = true;

  if (authStore.isLoggedIn) {
    const result = await GetUnseenNotificationsCount();
    if (result.isSuccess) {
      unseenNotifs.value = result.data ?? 0;
    }
  }

  productOptions.value = await productUtils.GetForSelectTag();

  await refreshCategories();

  await accountStore.initData();
  addressCommand.receiverFirstName = accountStore.getActiveAddress?.receiverFirstName;
  addressCommand.receiverLastName = accountStore.getActiveAddress?.receiverLastName;
  addressCommand.receiverPhoneNumber = accountStore.getActiveAddress?.receiverPhoneNumber;
  addressCommand.street = accountStore.getActiveAddress?.street;
  addressCommand.postCode = accountStore.getActiveAddress?.postCode;
  addressCommand.plaque = accountStore.getActiveAddress?.plaque;
  addressCommand.unit = accountStore.getActiveAddress?.unit;
  addressCommand.state = accountStore.getActiveAddress?.state;
  addressCommand.city = accountStore.getActiveAddress?.city;

  loading.value = false;

  topBannerLoading.value = true;

  const tempResult = await GetActiveTemplate();
  if(tempResult.isSuccess){
    topBanner.value = tempResult.data?.topBanner;
  }

  topBannerLoading.value = false;

  if(cartStore.PendingOrder?.transmissionPrice == null || cartStore.PendingOrder?.transmissionPrice == 0){
    if(accountStore.hasActiveAddress){
      const res = await SetOrderTransmissionPrice({
        state:accountStore.getActiveAddress?.state,
        city:accountStore.getActiveAddress?.city,
        weight:0
      });
    }
  }

})

const openCategories = () => {
  showCategories.value = !showCategories.value;
  if (!showCategories.value) isCategoryHovered.value = false;
  showAccountOptions.value = false;
  showCart.value = false
}

const closeCartModal = ()=>{
  showCart.value = false;
}

const toast = useToast();
const LogOut = async () => {
  toast.showToast(
      'آیا مایلید از حساب کاربری خود خارج شوید؟',
      ToastType.warning,
      0).then(async result => {
    if (result.isConfirmed) {
      await authStore.logOut();
    }
  })
}

const goToCart=()=>{
  showCart.value = false;
  router.push("/checkout/cart");
}
const goToMarket=()=>{
  showCart.value = false;
  router.push("/market");
}

const valueUpdated = async (value) =>{
  addressCommand.state = value.state;
  addressCommand.city = value.city;
  const result = await SetOrderTransmissionPrice({
    state:value.state,
    city:value.city,
    weight:100
  });
  if(result.isSuccess){
    await cartStore.refreshCart();
  }
}

</script>

<style scoped>
.active {
  @apply relative after:w-full after:left-0 after:right-0 after:-bottom-2 after:rounded-t-full after:absolute after:h-1 after:bg-brandOrange font-bold;
}

.active-responsive {
  @apply border-warning font-bold;
}

</style>

<style>
.slideUp-move,
.slideUp-enter-active,
.slideUp-leave-active{
  @apply transition-all duration-300;
}

.slideUp-enter-from,
.slideUp-leave-to{
  @apply opacity-0 translate-y-[200px];
}

.slideUpNormal-move,
.slideUpNormal-enter-active,
.slideUpNormal-leave-active{
  @apply transition-all duration-300;
}

.slideUpNormal-enter-from,
.slideUpNormal-leave-to{
  @apply opacity-0 translate-y-5;
}

</style>