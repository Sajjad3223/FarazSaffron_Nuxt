<template>
  <div class="flex flex-col">
    <div class="relative">
      <header class="min-h-[45px] relative" :style="{backgroundColor:backColor}">
        <div class="container max-w-[1400px] mx-auto py-4 flex items-center justify-between" :style="{color:foreColor}">
          <div class="mr-2 z-[3] flex items-center gap-2">
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
          <NuxtLink :to="url" v-html="text" v-if="image == null">
          </NuxtLink>
          <NuxtLink :to="url" v-else>
            <img :src="imagePreview" :alt="imageAlt" :style="customStyle">
          </NuxtLink>
          <div class="flex z-[3] items-center gap-2">
            <a href="tel:05152329059" dir="ltr" class="text-current">
              051 - 52329059
            </a>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
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
                    <NuxtLink :to="`/market?categories=${c.id}`" class="w-full flex items-center justify-between" v-for="c in categories.sort((a,b)=> a.id - b.id)" :key="c.id" @mouseenter="categoryHovered(c)">
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
                  <li v-for="c in categories.sort((a,b)=> a.id - b.id)" :key="c.id">
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
              <NuxtLink to="/inquiry" class="group flex flex-row gap-1 items-center py-1 px-3 rounded-md">
                <svg class="w-3 text-brandOrange group-hover:[&>path]:fill-brandOrange" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path class="transition-all duration-300" d="M7.49015 1.09041L9.08015 4.30041C9.11632 4.38189 9.1732 4.45246 9.24514 4.5051C9.31708 4.55773 9.40156 4.5906 9.49015 4.60041L13.0001 5.12041C13.1018 5.13347 13.1976 5.17518 13.2764 5.24067C13.3552 5.30615 13.4138 5.39271 13.4452 5.49022C13.4767 5.58774 13.4797 5.6922 13.454 5.79139C13.4284 5.89059 13.375 5.98042 13.3001 6.05041L10.7701 8.56041C10.7056 8.62074 10.6571 8.69625 10.6292 8.78009C10.6012 8.86392 10.5947 8.95341 10.6101 9.04041L11.2201 12.5704C11.2378 12.6719 11.2266 12.7762 11.1879 12.8716C11.1492 12.967 11.0845 13.0496 11.0011 13.1101C10.9178 13.1705 10.8191 13.2063 10.7164 13.2135C10.6137 13.2206 10.511 13.1988 10.4201 13.1504L7.26015 11.4804C7.17924 11.4407 7.09029 11.4201 7.00015 11.4201C6.91001 11.4201 6.82107 11.4407 6.74015 11.4804L3.58015 13.1504C3.48924 13.1988 3.38659 13.2206 3.28388 13.2135C3.18117 13.2063 3.08252 13.1705 2.99917 13.1101C2.91581 13.0496 2.85109 12.967 2.81237 12.8716C2.77366 12.7762 2.76249 12.6719 2.78015 12.5704L3.39015 9.00041C3.40561 8.91341 3.39907 8.82392 3.37113 8.74009C3.34319 8.65625 3.29472 8.58074 3.23015 8.52041L0.670155 6.05041C0.594418 5.97851 0.541155 5.88618 0.516819 5.78463C0.492483 5.68307 0.498119 5.57663 0.533042 5.47821C0.567966 5.37979 0.630679 5.29361 0.713586 5.2301C0.796493 5.1666 0.896035 5.12849 1.00015 5.12041L4.51015 4.60041C4.59875 4.5906 4.68323 4.55773 4.75517 4.5051C4.82711 4.45246 4.88399 4.38189 4.92015 4.30041L6.51015 1.09041C6.55345 0.996916 6.62259 0.917763 6.70942 0.862291C6.79624 0.806819 6.89712 0.777344 7.00015 0.777344C7.10318 0.777344 7.20407 0.806819 7.29089 0.862291C7.37771 0.917763 7.44685 0.996916 7.49015 1.09041Z" fill="transparent" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>استعلام محصول</span>
              </NuxtLink>
            </li>
          </ul>
          <div class="flex items-center gap-4">
            <!-- Search -->
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.0183 18.4851L21.5423 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </button>
            <!-- Account -->
            <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9847 15.3462C8.11707 15.3462 4.81421 15.931 4.81421 18.2729C4.81421 20.6148 8.09611 21.2205 11.9847 21.2205C15.8523 21.2205 19.1542 20.6348 19.1542 18.2938C19.1542 15.9529 15.8733 15.3462 11.9847 15.3462Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9846 12.0059C14.5227 12.0059 16.5799 9.94779 16.5799 7.40969C16.5799 4.8716 14.5227 2.81445 11.9846 2.81445C9.44655 2.81445 7.38845 4.8716 7.38845 7.40969C7.37988 9.93922 9.42369 11.9973 11.9523 12.0059H11.9846Z" stroke="currentColor" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </button>
            <!-- Cart -->
            <button class="flex flex-col relative items-center space-y-1" >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M2.75 3.24988L4.83 3.60988L5.793 15.0829C5.87 16.0199 6.653 16.7389 7.593 16.7359H18.502C19.399 16.7379 20.16 16.0779 20.287 15.1899L21.236 8.63188C21.342 7.89888 20.833 7.21888 20.101 7.11288C20.037 7.10388 5.164 7.09888 5.164 7.09888" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.125 10.7948H16.898" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15435 20.2025C7.45535 20.2025 7.69835 20.4465 7.69835 20.7465C7.69835 21.0475 7.45535 21.2915 7.15435 21.2915C6.85335 21.2915 6.61035 21.0475 6.61035 20.7465C6.61035 20.4465 6.85335 20.2025 7.15435 20.2025Z" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4346 20.2025C18.7356 20.2025 18.9796 20.4465 18.9796 20.7465C18.9796 21.0475 18.7356 21.2915 18.4346 21.2915C18.1336 21.2915 17.8906 21.0475 17.8906 20.7465C17.8906 20.4465 18.1336 20.2025 18.4346 20.2025Z" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </button>

          </div>
        </div>
      </nav>
    </div>

    <div class="container mx-auto mt-10 p-5 bg-white rounded-xl border">
      <form @submit.prevent="setTopBanner" class="grid grid-cols-2 gap-5">
        <BaseInputsFileInput v-model="image" label="تصویر" name="image" />
        <BaseInputsTextInput v-model="imageAlt" label="متن جایگزین" name="imageAlt" required/>
        <BaseInputsMultiLineInput v-model="customStyle" label="استایل شخصی" name="customStyle" dir="ltr" class="row-span-2"/>
        <div class="grid grid-cols-4 gap-5 col-span-full">
          <BaseInputsTextInput v-model="url" label="لینک" name="url" required/>
          <BaseInputsTextInput type="number" side-text="pixel" v-model="width" label="سایز" />
          <input type="color" name="backColor" id="backColor" v-model="backColor">
          <input type="color" name="foreColor" id="foreColor" v-model="foreColor">
        </div>
        <BaseInputsMultiLineInput v-model="text" label="متن" name="text" required class="col-span-full" dir="ltr"/>
        <base-g-button w-full type="submit" :is-loading="loading" class="col-span-full">
          ثبت بنر
        </base-g-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {GetTemplateByAdmin, SetTopBanner} from "~/services/mainPage.service";
import {ToastType} from "~/composables/useSwal";
import {BLOGS_URL, SITE_URL} from "~/utilities/api.config";
import type {DataTemplateDto} from "~/models/mainPage/dataTemplate";

definePageMeta({
  layout:false
})

const route = useRoute();
const router = useRouter();
const toast = useToast();
const templateId = parseInt(route.params.templateId[0] ?? '0');

const {data} = await useAsyncData("GetTopBanner-" + templateId,()=>GetTemplateByAdmin(templateId));
if(!data.value?.isSuccess){
  router.push(`admin/homePageSetting/${templateId}`)
  toast.showToast('الگو پیدا نشد',ToastType.error,3000);
}

const template:Ref<DataTemplateDto> = ref(data.value!.data!);

const loading = ref(false);
const image = ref();
watch(
    image,
    ()=>{
      imagePreview.value = URL.createObjectURL(image.value);
    }
)
const imagePreview = ref(`${SITE_URL}/banners/${template.value.topBanner.image.src}`)
const imageAlt = ref(template.value.topBanner.image.alt);
const url = ref(template.value.topBanner.url);
const backColor = ref(template.value.topBanner.backColor);
const foreColor = ref(template.value.topBanner.foreColor);
const width = ref(template.value.topBanner.width);
const customStyle = ref(template.value.topBanner.customStyle);
const text = ref(template.value.topBanner.text);


const setTopBanner = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',templateId.toString())
  formData.append('image',image.value.files[0])
  formData.append('imageAlt',imageAlt.value)
  formData.append('url',url.value)
  if(width.value != null)
    formData.append('width',width.value.toString());
  if(backColor.value != null)
    formData.append('backColor',backColor.value.toString());
  if(foreColor.value != null)
    formData.append('foreColor',foreColor.value.toString());
  if(customStyle.value != null)
    formData.append('customStyle',customStyle.value);
  if(text.value != null)
    formData.append('text',text.value);

  const result = await SetTopBanner(formData);
  if(result.isSuccess){
    toast.showToast();
    router.push(`/admin/homePageSetting/${templateId}`)
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>
