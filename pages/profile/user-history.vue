<template>
  <div>
    <Head>
      <Title>بازدید های اخیر</Title>
    </Head>
    <div v-if="!utilStore.isMobile()">
      <div>
        <div class="text-2xl font-bold flex items-center gap-2 dark:text-white">
          <NuxtLink to="/profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
          <strong>بازدید های اخیر</strong>
        </div>
        <hr class="my-3 border-2 dark:border-gray-600">
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-2 mt-12">
        <li class="flex flex-col items-center space-y-4 lg:odd:border-l border-b dark:text-white dark:border-gray-700 p-4" v-for="i in 3" :key="i">
          <NuxtLink to="/product/thing" class="w-1/3 lg:w-auto">
            <img src="~/assets/images/saffron-bar.png" alt="jar" class="w-full rounded-lg">
          </NuxtLink>
          <NuxtLink to="/product/thing" class="text-lg lg:text-xl font-bold">
            زعفران شیشه ای نگین صد در صد خالص
          </NuxtLink>
          <span>2,206,000 <small>ریال</small></span>
          <div class="flex space-x-2 space-x-reverse w-full lg:w-1/2">
            <button class="flex items-center space-x-2 space-x-reverse opacity-60 p-2 border-danger border rounded-lg text-danger hover:bg-danger hover:text-white transition duration-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.33 16.5H13.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.5 12.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>حذف</span>
            </button>
            <button class="flex gap-2 flex-row-reverse rounded-lg border-brandOrange border p-2 text-brandOrange flex-1 justify-center hover:bg-brandOrange hover:text-white transition duration-200">
              <span>اضافه به سبد خرید</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 8H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <header class="w-full h-[80px] px-4 flex items-center justify-center relative">
        <NuxtLink to="/profile" class="absolute right-7">
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M1 13L6 7L1 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <span class="font-light">
          بازدید های اخیر
        </span>
      </header>
      <hr>
      <ul>
        <li class=" border-b last:border-none py-4 w-full flex items-stretch" v-for="favorite in 4">
          <div class="flex-1 flex flex-col py-2">
            <div class="flex items-start justify-between">
              <strong>
                زعفران نگین
              </strong>
              <div class="flex items-center gap-1 font-light text-xs">
                <span>4.4</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.13481 9.32439C3.19477 9.0573 3.08575 8.67575 2.89497 8.48497L1.57045 7.16045C1.15619 6.74619 0.992668 6.30468 1.11258 5.92313C1.23795 5.54158 1.62495 5.27994 2.20273 5.18183L3.90336 4.89839C4.14864 4.85479 4.44843 4.63676 4.5629 4.41328L5.50043 2.53277C5.77296 1.99315 6.14361 1.69336 6.54697 1.69336C6.95032 1.69336 7.32097 1.99315 7.59351 2.53277L8.53103 4.41328C8.60189 4.55499 8.74906 4.69126 8.90713 4.78393L3.03669 10.6544C2.96038 10.7307 2.82957 10.6598 2.85137 10.5508L3.13481 9.32439Z" fill="#FFD234"/>
                  <path d="M10.1903 8.48568C9.99403 8.68191 9.88501 9.05801 9.95042 9.3251L10.3265 10.9658C10.4846 11.6471 10.3865 12.1595 10.0485 12.4048C9.91227 12.5029 9.74874 12.5519 9.55797 12.5519C9.27998 12.5519 8.95294 12.4484 8.59319 12.2358L6.99612 11.2874C6.74539 11.1402 6.33113 11.1402 6.0804 11.2874L4.48333 12.2358C3.8783 12.5901 3.36048 12.65 3.02799 12.4048C2.90262 12.3121 2.80996 12.1867 2.75 12.0232L9.37809 5.39512C9.62883 5.14438 9.98313 5.02992 10.3265 5.08988L10.877 5.18254C11.4548 5.28065 11.8418 5.54229 11.9672 5.92384C12.0871 6.30539 11.9236 6.7469 11.5093 7.16115L10.1903 8.48568Z" fill="#FFD234"/>
                </svg>
              </div>
            </div>
            <div class="flex w-full items-center justify-between mt-auto gap-3">
              <div class="flex flex-col items-center gap-1 text-[10px]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8">
                    <path d="M5.83464 3.50033H8.16797C9.33464 3.50033 9.33464 2.91699 9.33464 2.33366C9.33464 1.16699 8.7513 1.16699 8.16797 1.16699H5.83464C5.2513 1.16699 4.66797 1.16699 4.66797 2.33366C4.66797 3.50033 5.2513 3.50033 5.83464 3.50033Z" stroke="#0A0A0A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.33333 2.34473C11.2758 2.44973 12.25 3.16723 12.25 5.83306V9.33306C12.25 11.6664 11.6667 12.8331 8.75 12.8331H5.25C2.33333 12.8331 1.75 11.6664 1.75 9.33306V5.83306C1.75 3.17306 2.72417 2.44973 4.66667 2.34473" stroke="#0A0A0A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.73313 5.664C6.93313 5.664 7.11313 5.704 7.27313 5.784C7.43313 5.864 7.56913 5.984 7.68113 6.144H7.70513L7.77713 5.724H8.53313V9.006C8.53313 9.318 8.47113 9.58 8.34713 9.792C8.22713 10.004 8.04513 10.164 7.80113 10.272C7.55713 10.384 7.25513 10.44 6.89513 10.44C6.66313 10.44 6.44713 10.426 6.24713 10.398C6.05113 10.37 5.85913 10.32 5.67113 10.248V9.534C5.80713 9.59 5.94313 9.636 6.07913 9.672C6.21913 9.712 6.36113 9.74 6.50513 9.756C6.65313 9.776 6.80113 9.786 6.94913 9.786C7.18113 9.786 7.35313 9.724 7.46513 9.6C7.58113 9.476 7.63913 9.29 7.63913 9.042V8.976C7.63913 8.908 7.64113 8.838 7.64513 8.766C7.65313 8.694 7.65913 8.63 7.66313 8.574H7.63913C7.52713 8.746 7.39313 8.87 7.23713 8.946C7.08113 9.022 6.90513 9.06 6.70913 9.06C6.32113 9.06 6.01713 8.912 5.79713 8.616C5.58113 8.316 5.47313 7.9 5.47313 7.368C5.47313 7.008 5.52313 6.702 5.62313 6.45C5.72313 6.194 5.86713 6 6.05513 5.868C6.24713 5.732 6.47313 5.664 6.73313 5.664ZM7.01513 6.39C6.87513 6.39 6.75713 6.428 6.66113 6.504C6.56913 6.576 6.49913 6.686 6.45113 6.834C6.40713 6.978 6.38513 7.16 6.38513 7.38C6.38513 7.708 6.43713 7.954 6.54113 8.118C6.64513 8.278 6.80713 8.358 7.02713 8.358C7.14313 8.358 7.24313 8.344 7.32713 8.316C7.41113 8.284 7.47913 8.234 7.53113 8.166C7.58713 8.094 7.62913 8.002 7.65713 7.89C7.68513 7.778 7.69913 7.642 7.69913 7.482V7.374C7.69913 7.138 7.67513 6.948 7.62713 6.804C7.57913 6.66 7.50513 6.556 7.40513 6.492C7.30513 6.424 7.17513 6.39 7.01513 6.39Z" fill="black"/>
                  </g>
                </svg>
                <span>
                  22 گرم
                </span>
              </div>
              <div class="flex flex-col items-center gap-1 text-[10px]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8">
                    <path d="M4.88672 6.99956L6.29255 8.41122L9.11005 5.58789" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.26922 1.42902C6.67172 1.08486 7.33089 1.08486 7.73922 1.42902L8.66089 2.22236C8.83589 2.37402 9.16255 2.49652 9.39589 2.49652H10.3876C11.0059 2.49652 11.5134 3.00402 11.5134 3.62236V4.61402C11.5134 4.84152 11.6359 5.17402 11.7876 5.34902L12.5809 6.27069C12.9251 6.67319 12.9251 7.33236 12.5809 7.74069L11.7876 8.66236C11.6359 8.83736 11.5134 9.16402 11.5134 9.39736V10.389C11.5134 11.0074 11.0059 11.5149 10.3876 11.5149H9.39589C9.16839 11.5149 8.83589 11.6374 8.66089 11.789L7.73922 12.5824C7.33672 12.9265 6.67755 12.9265 6.26922 12.5824L5.34755 11.789C5.17255 11.6374 4.84589 11.5149 4.61255 11.5149H3.60339C2.98505 11.5149 2.47755 11.0074 2.47755 10.389V9.39152C2.47755 9.16402 2.35505 8.83736 2.20922 8.66236L1.42172 7.73486C1.08339 7.33236 1.08339 6.67902 1.42172 6.27652L2.20922 5.34902C2.35505 5.17402 2.47755 4.84736 2.47755 4.61986V3.61652C2.47755 2.99819 2.98505 2.49069 3.60339 2.49069H4.61255C4.84005 2.49069 5.17255 2.36819 5.34755 2.21652L6.26922 1.42902Z" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                <span>۵۰/۱۱۵۰۰</span>
              </div>
              <div class="flex flex-col items-center gap-1 text-[10px]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.8">
                    <path d="M7.53536 1.31824L11.3329 3.36574C11.7762 3.60491 11.7762 4.28741 11.3329 4.52658L7.53536 6.57408C7.19703 6.75491 6.80036 6.75491 6.46203 6.57408L2.66453 4.52658C2.2212 4.28741 2.2212 3.60491 2.66453 3.36574L6.46203 1.31824C6.80036 1.13741 7.19703 1.13741 7.53536 1.31824Z" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.10714 5.90882L5.6363 7.67632C6.0738 7.89799 6.3538 8.34715 6.3538 8.83715V12.1738C6.3538 12.658 5.8463 12.9672 5.41464 12.7513L1.88547 10.9838C1.44797 10.7622 1.16797 10.313 1.16797 9.82299V6.48632C1.16797 6.00215 1.67547 5.69299 2.10714 5.90882Z" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.8951 5.90882L8.36594 7.67632C7.92844 7.89799 7.64844 8.34715 7.64844 8.83715V12.1738C7.64844 12.658 8.15594 12.9672 8.5876 12.7513L12.1168 10.9838C12.5543 10.7622 12.8343 10.313 12.8343 9.82299V6.48632C12.8343 6.00215 12.3268 5.69299 11.8951 5.90882Z" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
                <span>
                  ۱۷ × ۹.۸ × ۰.۸
                </span>
              </div>
              <div class="flex-1 flex flex-col items-end gap-1">
                <base-g-price :price="650000" class="scale-75 origin-left opacity-50" />
                <base-g-price :price="620000" />
              </div>
            </div>
          </div>
          <img src="~/assets/images/product-image.png" alt="productImage" class="max-w-[120px]">
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'profile'
})

const utilStore = useUtilStore();
</script>