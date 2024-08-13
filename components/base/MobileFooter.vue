<script setup lang="ts">
import {BLOGS_URL} from "~/utilities/api.config";

const authStore = useAuthStore();
const cartStore = useCartStore();

const route = useRoute();

</script>

<template>
  <footer class="bg-white border-t pt-10 pb-24">
    <div class="flex flex-col gap-10 mx-auto w-[80%]">
      <div class="grid grid-cols-2 gap-8">
        <div class="flex flex-col gap-5">
          <div class="flex items-center gap-2">
            <span class="w-1 h-1 rounded-full bg-brandOrange"></span>
            <span>صفحات سایت</span>
          </div>
          <ul class="flex flex-col gap-4">
            <li>
              <NuxtLink to="/" class="text-xs opacity-60">صفحه اصلی</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market" class="text-xs opacity-60">محصولات</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="BLOGS_URL" class="text-xs opacity-60">مقالات</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/aboutus" class="text-xs opacity-60">درباره ما</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contactus" class="text-xs opacity-60">تماس با ما</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/FAQ" class="text-xs opacity-60">سوالات متداول</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex items-center gap-2">
            <span class="w-1 h-1 rounded-full bg-brandOrange"></span>
            <span>محصولات</span>
          </div>
          <ul class="flex flex-col gap-4">
            <li>
              <NuxtLink to="/market?categories=2" class="text-xs opacity-60">زعفران</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market?categories=3" class="text-xs opacity-60">پسته</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market?categories=14" class="text-xs opacity-60">میوه خشک</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market?categories=16" class="text-xs opacity-60">ادویه</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-span-full flex flex-col gap-5">
          <div class="flex items-center gap-2">
            <span class="w-1 h-1 rounded-full bg-brandOrange"></span>
            <span>ارتباط با ما</span>
          </div>
          <ul class="flex flex-col gap-4">
            <li class="flex items-center gap-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0827 8.75026C12.0827 7.5992 11.15 6.6665 9.99977 6.6665C8.84871 6.6665 7.91602 7.5992 7.91602 8.75026C7.91602 9.90047 8.84871 10.8332 9.99977 10.8332C11.15 10.8332 12.0827 9.90047 12.0827 8.75026Z" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99959 17.5C9.00086 17.5 3.75 13.2486 3.75 8.80274C3.75 5.3222 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.3222 16.25 8.80274C16.25 13.2486 10.9983 17.5 9.99959 17.5Z" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="text-xs opacity-60">تربت حیدریه - کیلومتر 2 جاده بایگ</span>
            </li>
            <li class="flex items-center gap-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M11.9609 2.0835C15.0451 2.426 17.4818 4.85933 17.8276 7.9435" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.9609 5.03613C13.4368 5.3228 14.5901 6.47697 14.8776 7.9528" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19228 10.3938C12.5164 13.7171 13.2705 9.87243 15.3871 11.9875C17.4275 14.0275 18.6012 14.4362 16.015 17.0208C15.6912 17.281 13.6337 20.412 6.40307 13.1832C-0.82849 5.9535 2.30065 3.89387 2.56097 3.57012C5.15249 0.978368 5.55503 2.15798 7.59551 4.19794C9.71112 6.31391 5.86813 7.07051 9.19228 10.3938Z" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <div class="flex items-center gap-2 text-xs opacity-60">
                <span dir="ltr">051 - 52329059</span>
                <span>,</span>
                <span dir="ltr">09912937952</span>
              </div>
            </li>
            <li class="flex items-center gap-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M14.9178 7.37598L11.2151 10.3868C10.5155 10.9418 9.53122 10.9418 8.83164 10.3868L5.09766 7.37598" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0901 17.5C16.6245 17.507 18.3327 15.4246 18.3327 12.8653V7.14168C18.3327 4.58235 16.6245 2.5 14.0901 2.5H5.90863C3.37417 2.5 1.66602 4.58235 1.66602 7.14168V12.8653C1.66602 15.4246 3.37417 17.507 5.90863 17.5H14.0901Z" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <a href="mailto:info@gpsaffron.com" class="text-xs opacity-60">info@gpsaffron.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center justify-around">
        <div class="border rounded-xl border-[#666666]/20 aspect-square grid place-items-center relative w-20">
          <img src="~/assets/images/salamat.png" alt="salamat" class="w-3/4 2xl:-translate-y-4">
          <span class="absolute bottom-4 text-xs font-light pointer-events-none hidden 2xl:block">
            57/1018-1
            </span>
        </div>
        <!--   ENamad   -->
        <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=481420&Code=cCu16exHbafArcoXSU1XBlvGhdU7Fkzn' class="relative border rounded-xl border-[#666666]/20 aspect-square grid place-items-center w-20">
          <img referrerpolicy='origin'
               src='https://trustseal.enamad.ir/logo.aspx?id=479170&Code=WVFCiesdEuQgDFJzHNFz2DyAJhkoExWQ'
               alt='Enamad' style='cursor:pointer' Code='WVFCiesdEuQgDFJzHNFz2DyAJhkoExWQ'
               class="w-3/4 opacity-0 absolute">
          <img src="~/assets/images/enamad.png" alt="enamad" class="w-3/4" Code='WVFCiesdEuQgDFJzHNFz2DyAJhkoExWQ'>
        </a>
        <!--   Standard  -->
        <div
            class="border rounded-xl border-[#666666]/20 aspect-square grid place-items-center relative p-4 w-20 overflow-hidden">
          <img src="~/assets/images/standard.png" alt="standard" class="w-1/2">
        </div>
      </div>
      <hr>
      <div class="flex items-center justify-center gap-6">
        <!--  Telegram  -->
        <a href="https://t.me/gp_saffron" target="_blank">
          <svg class="w-5" opacity="0.5" width="48" height="48" viewBox="0 0 48 48" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.29975 20.6637C16.1846 13.8898 24.7766 9.42401 29.0756 7.26636C41.3501 1.10586 43.9006 0.0357136 45.563 0.00037677C45.9286 -0.00739518 46.7462 0.101946 47.2757 0.620448C47.7229 1.05826 47.8459 1.64969 47.9048 2.06478C47.9636 2.47988 48.0369 3.42548 47.9787 4.16434C47.3135 12.5976 44.4354 33.0629 42.9711 42.5083C42.3516 46.505 41.1316 47.8451 39.9506 47.9762C37.3838 48.2612 35.4348 45.9294 32.9488 43.963C29.0587 40.886 26.8611 38.9706 23.0851 35.968C18.7213 32.498 21.5502 30.5908 24.0371 27.474C24.6879 26.6583 35.9969 14.246 36.2158 13.12C36.2432 12.9792 36.2686 12.4543 36.0101 12.1771C35.7517 11.8999 35.3703 11.9947 35.095 12.0701C34.7049 12.177 28.4904 17.1334 16.4517 26.9393C14.6877 28.4009 13.09 29.1131 11.6585 29.0757C10.0804 29.0346 7.04466 27.999 4.78794 27.1139C2.01998 26.0282 -0.179935 25.4541 0.0116285 23.6103C0.111407 22.6499 1.20745 21.6677 3.29975 20.6637Z"
                  fill="currentColor"/>
          </svg>
        </a>
        <!--         Facebook
                <a href="">
                  <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5" clip-path="url(#clip0_2033_13841)">
                      <path d="M8 0C3.58176 0 0 3.58176 0 8C0 11.7517 2.58304 14.8998 6.06752 15.7645V10.4448H4.41792V8H6.06752V6.94656C6.06752 4.22368 7.29984 2.9616 9.97312 2.9616C10.48 2.9616 11.3546 3.06112 11.7123 3.16032V5.37632C11.5235 5.35648 11.1955 5.34656 10.7882 5.34656C9.47648 5.34656 8.9696 5.84352 8.9696 7.13536V8H11.5827L11.1338 10.4448H8.9696V15.9414C12.9309 15.463 16.0003 12.0902 16.0003 8C16 3.58176 12.4182 0 8 0Z" fill="#18110A"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_2033_13841">
                        <rect class="w-5" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </a>-->
        <!-- Whatsapp  -->
        <a href="https://wa.me/+989912937952">
          <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d="M0 16L1.12466 11.8913C0.430666 10.6886 0.0659999 9.32531 0.0666665 7.92732C0.0686665 3.55666 3.62533 0 7.99532 0C10.116 0.000666665 12.1066 0.826665 13.604 2.32533C15.1006 3.82399 15.9246 5.81599 15.924 7.93465C15.922 12.306 12.3653 15.8626 7.99532 15.8626C6.66865 15.862 5.36132 15.5293 4.20332 14.8973L0 16ZM4.39799 13.462C5.51532 14.1253 6.58198 14.5226 7.99265 14.5233C11.6246 14.5233 14.5833 11.5673 14.5853 7.93332C14.5866 4.29199 11.642 1.34 7.99798 1.33866C4.36332 1.33866 1.40666 4.29466 1.40533 7.92798C1.40466 9.41131 1.83933 10.522 2.56933 11.684L1.90333 14.116L4.39799 13.462ZM11.9893 9.81931C11.94 9.73665 11.808 9.68731 11.6093 9.58798C11.4113 9.48865 10.4373 9.00931 10.2553 8.94331C10.074 8.87731 9.94198 8.84398 9.80931 9.04265C9.67731 9.24065 9.29731 9.68731 9.18198 9.81931C9.06665 9.95131 8.95065 9.96798 8.75265 9.86865C8.55465 9.76931 7.91598 9.56065 7.15932 8.88531C6.57065 8.35998 6.17265 7.71132 6.05732 7.51265C5.94199 7.31465 6.04532 7.20732 6.14399 7.10865C6.23332 7.01998 6.34199 6.87732 6.44132 6.76132C6.54199 6.64665 6.57465 6.56399 6.64132 6.43132C6.70732 6.29932 6.67465 6.18332 6.62465 6.08399C6.57465 5.98532 6.17865 5.00999 6.01399 4.61332C5.85265 4.22732 5.68932 4.27932 5.56799 4.27332L5.18799 4.26666C5.05599 4.26666 4.84132 4.31599 4.65999 4.51466C4.47866 4.71332 3.96666 5.19199 3.96666 6.16732C3.96666 7.14265 4.67666 8.08465 4.77532 8.21665C4.87466 8.34865 6.17199 10.35 8.15932 11.208C8.63198 11.412 9.00131 11.534 9.28865 11.6253C9.76331 11.776 10.1953 11.7546 10.5366 11.704C10.9173 11.6473 11.7086 11.2246 11.874 10.762C12.0393 10.2986 12.0393 9.90198 11.9893 9.81931Z" fill="#18110A"/>
            </g>
          </svg>
        </a>
        <!-- Instagram  -->
        <a href="https://www.instagram.com/gp_saffron">
          <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" clip-path="url(#clip0_2033_13839)">
              <path d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98438 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1313 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9063 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60313 1.49375 4.7625C1.52813 3.98125 1.65938 3.55938 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35938C2.64688 2.07812 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7313 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55938 15.9438 4.70625C15.9063 3.85625 15.7688 3.27188 15.5719 2.76562C15.375 2.23438 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z" fill="#18110A"/>
              <path d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z" fill="#18110A"/>
              <path d="M13.2312 3.72811C13.2312 4.25936 12.8 4.68749 12.2719 4.68749C11.7406 4.68749 11.3125 4.25624 11.3125 3.72811C11.3125 3.19686 11.7438 2.76874 12.2719 2.76874C12.8 2.76874 13.2312 3.19999 13.2312 3.72811Z" fill="#18110A"/>
            </g>
            <defs>
              <clipPath id="clip0_2033_13839">
                <rect class="w-5" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </a>
        <!-- X  -->
        <a href="https://twitter.com/gpsaffron">
          <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d="M12.2174 1.26929H14.4663L9.55298 6.88495L15.3332 14.5266H10.8073L7.26253 9.89198L3.20647 14.5266H0.956125L6.21146 8.52002L0.666504 1.26929H5.30724L8.51143 5.50551L12.2174 1.26929ZM11.428 13.1805H12.6742L4.6301 2.54471H3.29281L11.428 13.1805Z" fill="#18110A"/>
            </g>
          </svg>
        </a>
        <!-- Youtube  -->
        <a href="https://www.youtube.com/@gpsaffron">
          <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d="M15.8406 4.80001C15.8406 4.80001 15.6844 3.69689 15.2031 3.21251C14.5938 2.57501 13.9125 2.57189 13.6 2.53439C11.3625 2.37189 8.00313 2.37189 8.00313 2.37189H7.99687C7.99687 2.37189 4.6375 2.37189 2.4 2.53439C2.0875 2.57189 1.40625 2.57501 0.796875 3.21251C0.315625 3.69689 0.1625 4.80001 0.1625 4.80001C0.1625 4.80001 0 6.09689 0 7.39064V8.60314C0 9.89689 0.159375 11.1938 0.159375 11.1938C0.159375 11.1938 0.315625 12.2969 0.79375 12.7813C1.40313 13.4188 2.20313 13.3969 2.55938 13.4656C3.84063 13.5875 8 13.625 8 13.625C8 13.625 11.3625 13.6188 13.6 13.4594C13.9125 13.4219 14.5938 13.4188 15.2031 12.7813C15.6844 12.2969 15.8406 11.1938 15.8406 11.1938C15.8406 11.1938 16 9.90001 16 8.60314V7.39064C16 6.09689 15.8406 4.80001 15.8406 4.80001ZM6.34688 10.075V5.57814L10.6687 7.83439L6.34688 10.075Z" fill="#18110A"/>
            </g>
          </svg>
        </a>
      </div>
      <span class="text-[8px] opacity-60 text-center mx-auto">
        برای استفاده از مطالب جی پی، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت فراز زعفران تربت حیدریه(فروشگاه آنلاین جی پی)است.
      </span>
    </div>
    <div class="fixed bg-white z-10 bottom-0 inset-x-0 h-[80x] py-2" style="box-shadow: 0 -10px 20px 0 #B0B0B08A;">
      <div class="flex items-center justify-around">
        <NuxtLink to="/"  exact-active-class="activePage" class="flex flex-col items-center space-y-1 p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-xs font-light">صفحه اصلی</span>
        </NuxtLink>
        <NuxtLink to="/market" :class="['flex flex-col items-center space-y-1 p-2',{'activePage':route.path.startsWith('/market')}]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g opacity="0.8">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>

          <span class="text-xs font-light">دسته بندی</span>
        </NuxtLink>
        <NuxtLink to="/checkout/cart" :class="['flex flex-col items-center relative space-y-1 p-2',{'activePage':route.path.startsWith('/checkout')}]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path d="M15.7729 9.30504V6.27304C15.7729 4.18904 14.0839 2.50004 12.0009 2.50004C9.91694 2.49104 8.21994 4.17204 8.21094 6.25604V6.27304V9.30504" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="nofill"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7422 21.0006H7.25778C4.90569 21.0006 3 19.0956 3 16.7456V11.2296C3 8.87961 4.90569 6.97461 7.25778 6.97461H16.7422C19.0943 6.97461 21 8.87961 21 11.2296V16.7456C21 19.0956 19.0943 21.0006 16.7422 21.0006Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>

          <span class="text-xs font-light">سبد خرید</span>
          <span v-if="cartStore.PendingOrder && cartStore.cartItemsCount > 0" class="absolute bg-brandOrange top-0 left-2 text-[8px] text-white aspect-square rounded-full w-4 h-4 text-center leading-[16px]" >
                {{ cartStore.cartItemsCount }}
              </span>
        </NuxtLink>
        <NuxtLink :to="!authStore.isLoggedIn ? '/auth/login' : '/profile'" :class="['flex flex-col items-center space-y-1 p-2',{'activePage':route.path.startsWith('/profile')}]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.983 15.3457C8.11536 15.3457 4.8125 15.9305 4.8125 18.2724C4.8125 20.6143 8.0944 21.22 11.983 21.22C15.8506 21.22 19.1525 20.6343 19.1525 18.2933C19.1525 15.9524 15.8715 15.3457 11.983 15.3457Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9829 12.0059C14.521 12.0059 16.5782 9.94779 16.5782 7.40969C16.5782 4.8716 14.521 2.81445 11.9829 2.81445C9.44484 2.81445 7.38675 4.8716 7.38675 7.40969C7.37817 9.93922 9.42198 11.9973 11.9506 12.0059H11.9829Z" stroke="black" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <span class="text-xs font-light" >پروفایل</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

