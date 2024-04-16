<template>
  <div>
    <Head>
      <Title>زعفران نگین کیفی یک مثقال</Title>
    </Head>

    <div class="my-8">
      <ul class="flex items-center gap-1">
        <li class="text-[#A5A5A5]">
          <NuxtLink to="/">جی پی زعفران</NuxtLink>
        </li>
        <li>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17L10 12L15 7" stroke="#A5A5A5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <li class="text-[#A5A5A5]">
          <NuxtLink to="/market">محصولات</NuxtLink>
        </li>
        <li>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17L10 12L15 7" stroke="#A5A5A5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <li class="text-[#A5A5A5]">
          <NuxtLink to="/market?category=saffron">زعفران</NuxtLink>
        </li>
        <li>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17L10 12L15 7" stroke="#A5A5A5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </li>
        <li class="text-brandOrange">
          <strong>زعفران نگین</strong>
        </li>
      </ul>
    </div>

    <div class="bg-[#F8F8F8] py-10 px-6 grid grid-cols-5 gap-8 mt-4 rounded-2xl">
      <!--   Images   -->
      <div class="flex items-center gap-6 col-span-2">
        <div class="flex w-1/5 flex-col items-center gap-2">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 14L12 9L17 14" stroke="#4A4A4A" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="bg-white rounded-lg grid place-items-center" v-for="i in 3" :key="i">
            <img src="~/assets/images/product-image.png" alt="productImage">
          </div>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 10L12 15L7 10" stroke="#4A4A4A" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="flex-1 bg-white rounded-xl relative grid place-items-center aspect-square ">
          <img src="~/assets/images/product-image.png" alt="productImage">
          <div class="flex flex-col space-y-4 absolute top-5 left-5">
            <button>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.85481 4.6547C3.52991 3.97981 4.44542 3.60067 5.40001 3.60067C6.3546 3.60067 7.27011 3.97981 7.94521 4.6547L9.00001 5.7086L10.0548 4.6547C10.3869 4.31086 10.7841 4.03661 11.2234 3.84794C11.6626 3.65926 12.135 3.55995 12.613 3.5558C13.091 3.55165 13.565 3.64273 14.0074 3.82374C14.4499 4.00475 14.8518 4.27207 15.1898 4.61008C15.5278 4.94809 15.7952 5.35004 15.9762 5.79247C16.1572 6.23489 16.2483 6.70894 16.2441 7.18695C16.24 7.66495 16.1406 8.13734 15.952 8.57656C15.7633 9.01577 15.489 9.41301 15.1452 9.7451L9.00001 15.8912L2.85481 9.7451C2.17992 9.07 1.80078 8.15449 1.80078 7.1999C1.80078 6.24531 2.17992 5.3298 2.85481 4.6547V4.6547Z" stroke="#808080" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
            </button>
            <button>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.45111 12.357L2.83558 11.9284L2.83558 11.9284L3.45111 12.357ZM4.26867 9.82753L3.51867 9.81912V9.82753H4.26867ZM4.28583 8.29822L5.03583 8.30664V8.29822H4.28583ZM14.5549 12.3692L15.1787 11.9528L15.1787 11.9528L14.5549 12.3692ZM13.7681 9.82753L13.0181 9.81868V9.82753H13.7681ZM13.7853 8.37401L14.5353 8.38286V8.37401H13.7853ZM7.59299 14.5268C7.2688 14.269 6.79698 14.3228 6.53917 14.647C6.28135 14.9712 6.33516 15.443 6.65936 15.7008L7.59299 14.5268ZM11.3423 15.7008C11.6665 15.443 11.7203 14.9712 11.4625 14.647C11.2047 14.3228 10.7328 14.269 10.4086 14.5268L11.3423 15.7008ZM2.29894 4.51793C2.15177 4.90512 2.34634 5.3383 2.73353 5.48547C3.12071 5.63264 3.5539 5.43807 3.70106 5.05088L2.29894 4.51793ZM5.48268 2.9021C5.84282 2.69749 5.9689 2.23965 5.76429 1.87951C5.55967 1.51936 5.10184 1.39328 4.74169 1.5979L5.48268 2.9021ZM13.2505 1.60883C12.8927 1.40029 12.4335 1.52136 12.2249 1.87925C12.0164 2.23714 12.1375 2.69632 12.4954 2.90486L13.2505 1.60883ZM14.2962 5.03677C14.4394 5.42545 14.8706 5.62446 15.2593 5.48128C15.6479 5.33809 15.8469 4.90693 15.7038 4.51826L14.2962 5.03677ZM4.06663 12.7855C4.54496 12.0984 5.01867 11.0751 5.01867 9.82753H3.51867C3.51867 10.6908 3.1893 11.4204 2.83558 11.9284L4.06663 12.7855ZM5.01862 9.83595L5.03578 8.30664L3.53588 8.28981L3.51872 9.81912L5.01862 9.83595ZM15.1787 11.9528C14.8396 11.4449 14.5181 10.7064 14.5181 9.82753H13.0181C13.0181 11.074 13.472 12.0979 13.9311 12.7857L15.1787 11.9528ZM14.5181 9.83639L14.5352 8.38286L13.0353 8.36515L13.0182 9.81868L14.5181 9.83639ZM14.5353 8.37401C14.5353 5.1395 12.1176 2.40349 9.00082 2.40349V3.90349C11.1687 3.90349 13.0353 5.84209 13.0353 8.37401H14.5353ZM14.2686 13.828C14.845 13.828 15.1676 13.3935 15.2849 13.093C15.4062 12.7821 15.434 12.3353 15.1787 11.9528L13.9311 12.7857C13.8871 12.7197 13.8767 12.6604 13.8751 12.628C13.8734 12.5961 13.8785 12.5706 13.8874 12.5478C13.8957 12.5267 13.9177 12.4815 13.9732 12.4339C14.0343 12.3815 14.1373 12.328 14.2686 12.328V13.828ZM5.03583 8.29822C5.03583 5.80816 6.87126 3.90349 9.00082 3.90349V2.40349C5.92235 2.40349 3.53583 5.10557 3.53583 8.29822H5.03583ZM3.73375 12.328C3.86776 12.328 3.97189 12.3836 4.03251 12.4365C4.0873 12.4843 4.1081 12.529 4.11552 12.5486C4.12359 12.57 4.12844 12.5944 4.12644 12.6258C4.12442 12.6576 4.11341 12.7183 4.06663 12.7855L2.83558 11.9284C2.56823 12.3125 2.59428 12.7668 2.71258 13.0795C2.82646 13.3804 3.14786 13.828 3.73375 13.828V12.328ZM14.2686 12.328H3.73375V13.828H14.2686V12.328ZM9.00082 15C8.4475 15 7.95569 14.8152 7.59299 14.5268L6.65936 15.7008C7.29164 16.2036 8.11375 16.5 9.00082 16.5V15ZM10.4086 14.5268C10.0459 14.8152 9.55414 15 9.00082 15V16.5C9.88789 16.5 10.71 16.2036 11.3423 15.7008L10.4086 14.5268ZM3.70106 5.05088C4.05635 4.11616 4.68486 3.35538 5.48268 2.9021L4.74169 1.5979C3.60977 2.241 2.76503 3.29169 2.29894 4.51793L3.70106 5.05088ZM12.4954 2.90486C13.3191 3.38486 13.9629 4.13193 14.2962 5.03677L15.7038 4.51826C15.2456 3.27452 14.3644 2.25789 13.2505 1.60883L12.4954 2.90486Z" fill="#808080"/>
              </svg>
            </button>
            <button>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8008 1.7998C13.1643 1.7998 12.5538 2.05266 12.1037 2.50275C11.6536 2.95284 11.4008 3.56328 11.4008 4.1998C11.4019 4.3685 11.4207 4.53662 11.457 4.70137L6.00781 7.42598C5.78306 7.16723 5.50551 6.95961 5.19381 6.81711C4.88211 6.6746 4.54351 6.6005 4.20078 6.5998C3.56426 6.5998 2.95381 6.85266 2.50372 7.30275C2.05364 7.75284 1.80078 8.36328 1.80078 8.9998C1.80078 9.63632 2.05364 10.2468 2.50372 10.6969C2.95381 11.1469 3.56426 11.3998 4.20078 11.3998C4.54362 11.3994 4.88239 11.3256 5.1943 11.1833C5.5062 11.041 5.784 10.8335 6.00898 10.5748L11.4547 13.2982C11.4191 13.4631 11.4011 13.6312 11.4008 13.7998C11.4008 14.4363 11.6536 15.0468 12.1037 15.4969C12.5538 15.9469 13.1643 16.1998 13.8008 16.1998C14.4373 16.1998 15.0477 15.9469 15.4978 15.4969C15.9479 15.0468 16.2008 14.4363 16.2008 13.7998C16.2008 13.1633 15.9479 12.5528 15.4978 12.1027C15.0477 11.6527 14.4373 11.3998 13.8008 11.3998C13.4579 11.4002 13.1192 11.474 12.8073 11.6163C12.4954 11.7586 12.2176 11.9661 11.9926 12.2248L6.54687 9.50137C6.58241 9.33654 6.60048 9.16842 6.60078 8.9998C6.59963 8.8315 6.58078 8.66378 6.54453 8.49941L11.9937 5.7748C12.2186 6.03334 12.4962 6.24073 12.8079 6.38304C13.1196 6.52534 13.4581 6.59925 13.8008 6.5998C14.4373 6.5998 15.0477 6.34695 15.4978 5.89686C15.9479 5.44677 16.2008 4.83632 16.2008 4.1998C16.2008 3.56328 15.9479 2.95284 15.4978 2.50275C15.0477 2.05266 14.4373 1.7998 13.8008 1.7998Z" fill="#808080"/>
              </svg>
            </button>
          </div>
          <span class="absolute top-5 right-5 px-3 py-0.5 bg-brandOrange/10 text-brandOrange rounded-lg">
            جدید
          </span>
        </div>
      </div>

      <!--   Name & Price   -->
      <div class="flex flex-col items-start h-auto col-span-3 mr-12">
        <h2 class="text-4xl font-black text-[#5E5E5E]">
          زعفران کیفی یک مثقالی   -   ۴ گرم
        </h2>
        <span class="mt-4 text-lg text-[#B8B8B8]">نگین (سرگل)</span>

        <ul class="mt-auto flex flex-col space-y-3 text-lg">
          <li class="pr-3 border-r-[3px] border-[#F0462380] text-[#949494]">
            پروانه بهداشت: دارد
          </li>
          <li class="pr-3 border-r-[3px] border-[#F0462380] text-[#949494]">
            شکل ماده غذایی : کیفی
          </li>
          <li class="pr-3 border-r-[3px] border-[#F0462380] text-[#949494]">
            وزن : 21 گرم
          </li>
        </ul>

        <div class="w-3/5 flex flex-col space-y-4 mt-auto">
          <div class="flex justify-between items-center gap-4">
            <!--   Price    -->
            <div class="flex items-center gap-1">
              <strong class="text-5xl text-[#626262]" style="font-family: 'Vazir FD',serif">618,000</strong>
              <span class="flex flex-col items-center text-lg font-light opacity-70 leading-[15px]">تــــــو <br> مــان</span>
            </div>
            <!--   Discount    -->
            <div class="flex items-center gap-2" >
              <span class="line-through opacity-50 text-2xl" style="font-family: 'Vazir FD',serif">630,000</span>
              <div class="grid place-items-center bg-brandOrange rounded-md rounded-b-xl w-8 h-8">
                <span class="text-xs font-light text-white" style="font-family: 'Vazir FD',serif">5%</span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-lg flex p-2 gap-1">
              <button class="grid place-items-center p-2">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5H9" stroke="#CFCFCF" stroke-width="2" stroke-linecap="round"/>
                  <path d="M5 9L5 1" stroke="#CFCFCF" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              <input type="number" class="bg-[#F8F8F8] text-[#A9A9A9] rounded-lg flex-1 w-1/3 text-center" value="1" style="font-family: 'Vazir FD',serif">
              <button class="grid place-items-center p-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.18599 16.4994C8.16974 16.4994 7.17899 16.4881 6.19874 16.4679C4.94474 16.4431 4.07699 15.6301 3.93524 14.3461C3.69899 12.2161 3.29474 7.19563 3.29099 7.14538C3.26549 6.83563 3.49649 6.56413 3.80624 6.53938C4.11149 6.53113 4.38749 6.74563 4.41224 7.05463C4.41599 7.10563 4.81949 12.1089 5.05349 14.2224C5.13374 14.9521 5.52749 15.3286 6.22199 15.3429C8.09699 15.3826 10.0102 15.3849 12.0727 15.3474C12.8107 15.3331 13.2097 14.9641 13.2922 14.2171C13.5247 12.1216 13.9297 7.10563 13.9342 7.05463C13.959 6.74563 14.2327 6.52963 14.5395 6.53938C14.8492 6.56488 15.0802 6.83563 15.0555 7.14538C15.051 7.19638 14.6445 12.2296 14.4105 14.3409C14.265 15.6511 13.3995 16.4484 12.093 16.4724C11.0932 16.4896 10.1287 16.4994 9.18599 16.4994" fill="#F42020"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.531 5.24219H2.8125C2.502 5.24219 2.25 4.99019 2.25 4.67969C2.25 4.36919 2.502 4.11719 2.8125 4.11719H15.531C15.8415 4.11719 16.0935 4.36919 16.0935 4.67969C16.0935 4.99019 15.8415 5.24219 15.531 5.24219" fill="#F42020"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.079 5.24175C12.2255 5.24175 11.4845 4.6335 11.3165 3.7965L11.1342 2.8845C11.096 2.74575 10.9377 2.625 10.7577 2.625H7.58297C7.40297 2.625 7.24472 2.74575 7.19897 2.919L7.02422 3.7965C6.85697 4.6335 6.11522 5.24175 5.26172 5.24175C4.95122 5.24175 4.69922 4.98975 4.69922 4.67925C4.69922 4.36875 4.95122 4.11675 5.26172 4.11675C5.58122 4.11675 5.85872 3.88875 5.92172 3.57525L6.10397 2.66325C6.28922 1.96425 6.89447 1.5 7.58297 1.5H10.7577C11.4462 1.5 12.0515 1.96425 12.2292 2.6295L12.4197 3.57525C12.482 3.88875 12.7595 4.11675 13.079 4.11675C13.3895 4.11675 13.6415 4.36875 13.6415 4.67925C13.6415 4.98975 13.3895 5.24175 13.079 5.24175" fill="#F42020"/>
                </svg>
              </button>
            </div>
            <button class="bg-brandOrange rounded-lg py-2 flex gap-2 px-3 items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4016 5.56176C10.4016 6.88724 9.32705 7.96176 8.00156 7.96176C6.67608 7.96176 5.60156 6.88724 5.60156 5.56176M3.15308 13.9618H12.85C13.7069 13.9618 14.4016 13.28 14.4016 12.4391L13.4076 3.56174C13.4076 2.72079 12.713 2.03906 11.8561 2.03906H3.95308C3.0962 2.03906 2.40156 2.72079 2.40156 3.56174L1.60156 12.4391C1.60156 13.28 2.2962 13.9618 3.15308 13.9618Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-white">افزودن به سبد خرید</span>
            </button>
          </div>
        </div>
        <div class="w-full border rounded-xl p-4 mt-5 flex items-center gap-4">
          <img src="~/assets/images/icons/fastDelivery.png" alt="fastDelivery" class="w-8 opacity-70">
          <span class="text-[#ABABAB] text-lg">
            ارسال رایگان برای کالاهای بالاتر از 5 گرم
          </span>
        </div>

      </div>
    </div>

    <!--  Services  -->
    <div class="my-10 border rounded-2xl border-[#BEBEBE] grid grid-cols-4 gap-4 place-items-center py-8">
      <div class="flex items-center gap-4">
        <div class="w-[50px] h-[50px] rounded-full border border-[#BEBEBE] grid place-items-center">
          <img src="~/assets/images/icons/support.png" alt="support" class="w-2/3">
        </div>
        <strong class="text-[#808080]">پشتیبانی آنلاین</strong>
      </div>
      <div class="flex items-center gap-4">
        <div class="w-[50px] h-[50px] rounded-full border border-[#BEBEBE] grid place-items-center">
          <img src="~/assets/images/icons/guarrany.png" alt="guarrany" class="w-2/3">
        </div>
        <strong class="text-[#808080]">تضمین کیفیت</strong>
      </div>
      <div class="flex items-center gap-4">
        <div class="w-[50px] h-[50px] rounded-full border border-[#BEBEBE] grid place-items-center">
          <img src="~/assets/images/icons/payInPlace.png" alt="payInPlace" class="w-2/3">
        </div>
        <strong class="text-[#808080]">پرداخت درب محل</strong>
      </div>
      <div class="flex items-center gap-4">
        <div class="w-[50px] h-[50px] rounded-full border border-[#BEBEBE] grid place-items-center">
          <img src="~/assets/images/icons/fastDelivery.png" alt="fastDelivery" class="w-2/3">
        </div>
        <strong class="text-[#808080]">ارسال سریع</strong>
      </div>
    </div>

    <!--  Similar Products  -->
    <div class="bg-[#F8F8F8] rounded-xl p-8 flex flex-col">
      <div class="w-full flex items-center relative">
        <h4 class="text-2xl text-[#484847] text-center flex-1 font-black">
          محصولات مشابه
        </h4>
        <div class="flex items-center gap-2 absolute left-4">
          <button class="w-8 h-8 rounded-md border border-[#8D8D8D] text-[#8D8D8D] transition-colors duration-200 grid place-items-center opacity-20 cursor-not-allowed">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="w-8 h-8 rounded-md border border-[#8D8D8D] hover:bg-[#8D8D8D] text-[#8D8D8D] hover:text-white transition-colors duration-200 grid place-items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 17L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="mt-8">
        <ul class="flex w-full gap-5 overflow-auto p-4" style="scrollbar-width: none">
          <li class="py-3.5 px-4 flex items-start bg-white min-w-[350px] rounded-xl transition-all duration-300 similar" v-for="i in 5" :key="i">
            <div class="w-2/5 grid place-items-center relative">
              <img src="~/assets/images/product-image.png" alt="product" class="w-full ">
            </div>
            <div class="flex-1 flex flex-col items-start space-y-4">
              <strong class="text-lg">نگین پاکتی</strong>
              <span class="text-[#9E9E9E] text-sm">
                1 مثقال- 4/608 گرم
              </span>
              <ul class="flex items-center gap-0.5">
                <li v-for="i in 5" :key="i">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="10" height="10" fill="url(#pattern0_308_3938)"/>
                    <defs>
                      <pattern id="pattern0_308_3938" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_308_3938" transform="scale(0.01)"/>
                      </pattern>
                      <image id="image0_308_3938" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                    </defs>
                  </svg>
                </li>
              </ul>
              <div class="flex items-center gap-1">
                <strong class="text-lg" style="font-family: 'Vazir FD',serif">618,000</strong>
                <span class="flex flex-col items-center text-[10px] font-light opacity-70 leading-[8px]">تــــــو <br> مــان</span>
              </div>
              <button class="border text-xs rounded-lg border-[#E8E8E8] py-2 flex gap-2 px-3 items-center justify-center w-full text-[#939393] hover:bg-[#F3F3F3] transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4016 5.56176C10.4016 6.88724 9.32705 7.96176 8.00156 7.96176C6.67608 7.96176 5.60156 6.88724 5.60156 5.56176M3.15308 13.9618H12.85C13.7069 13.9618 14.4016 13.28 14.4016 12.4391L13.4076 3.56174C13.4076 2.72079 12.713 2.03906 11.8561 2.03906H3.95308C3.0962 2.03906 2.40156 2.72079 2.40156 3.56174L1.60156 12.4391C1.60156 13.28 2.2962 13.9618 3.15308 13.9618Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>افزودن به سبد خرید</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'new-layout',
})

</script>

<style scoped>
*{
  font-family: "Epic Ravi","Vazir FD",serif;
}

.similar:hover{
  box-shadow: 0 5px 10px 0 #DADADA80;
}


</style>