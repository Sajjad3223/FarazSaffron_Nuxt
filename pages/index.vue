<template>
  <div v-if="!pending">
    <Head>
      <Title>جی پی زعفران | GP Saffron</Title>
      <Meta name="description" content="به دنیای خاص و شگفت‌انگیز زعفران وارد شوید، از زمین‌های حاصلخیز تا سفره شما، جایی که خلوص با اصالت برابر می‌شود." />
      <Meta content="index , follow" name="robots" />
      <Meta name="og:title" content="جی پی زعفران، طعم واقعی زعفران اصیل ایرانی" />
      <Meta name="og:image" content="https://gpsaffron.com/images/logo/192.png" />
      <Meta name="og:description" content="به دنیای خاص و شگفت‌انگیز زعفران وارد شوید، از زمین‌های حاصلخیز تا سفره شما، جایی که خلوص با اصالت برابر می‌شود." />
      <Meta name="twitter:title" content="جی پی زعفران | GP Saffron" />
      <meta rel="canonical" href="https://gpsaffron.com/">
      <Meta name="keywords" content="زعفران,خرید زعفران,زعفران نگین,زعفران 100% طبیعی,زعفران اصیل,زعفران خالص,زعفران درجه یک,saffron,premium saffron,زعفران بومی,تولیدی زعفران,زعفران بدون رنگ افزوده,زعفران خوش رنگ,زعفران عالی" />
    </Head>

    <h1 class="sr-only">جی پی زعفران، طعم واقعی زعفران اصیل ایرانی</h1>
    <h2 class="sr-only">
      به دنیای خاص و شگفت‌انگیز زعفران وارد شوید، از زمین‌های حاصلخیز گرفته تا سفره شما، جایی که خلوص با اصالت برابر می‌شود به‌وسیله زعفران باکیفیت، نماد تجمل و طعم را تضمین می‌کنیم.
      تمام سعی جی پی بر این است که سفارش‌های شما در خراسان رضوی و خارج از آن، بین 24 تا حداکثر 48 ساعت کاری ساعت به دستتان برسد و همیشه راضی از خرید باشید.
    </h2>

    <div class="hidden md:block" >

      <!--  Banner   -->
      <GCarousel :banners="activeTemp.mainBanners" />

      <div class="container mx-auto">

        <div class="max-w-[800px] mx-auto mt-16 mb-10 flex flex-col items-center space-y-5">
          <h4 class="relative text-2xl font-black/30">دسته بندی ها</h4>
          <div class="w-full grid grid-cols-4  gap-4">
            <NuxtLink to="/market?categories=2" class="rounded-xl border hover:border-t-transparent hover:border-x-transparent transition-all duration-200 hover:-translate-y-1 hover:border-b-2 hover:border-[#FB7511] w-full h-full flex flex-col items-center justify-around gap-2 py-4">
              <img src="~/assets/images/categories/saffron.png" alt="saffron" class="max-w-[100px]">
              <span class="text-xs 2xl:text-base font-light">زعفران</span>
            </NuxtLink>
            <NuxtLink to="/market?categories=3" class="group relative overflow-hidden rounded-xl border hover:border-t-transparent hover:border-x-transparent transition-all duration-200 hover:-translate-y-1 hover:border-b-2 hover:border-[#FB7511] w-full h-full flex flex-col items-center justify-around gap-2 py-4">
              <img src="~/assets/images/categories/pistachu.png" alt="pistachu" class="max-w-[100px]">
              <span class="text-xs 2xl:text-base font-light">پسته</span>
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 inset-0 bg-black/20 text-white backdrop-blur-sm flex flex-col items-center justify-center gap-2">
                <div class="flex items-center gap-2">
                  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.625 12.25L10.25 11.125V6.42087M19.25 10C19.25 5.02944 15.2206 1 10.25 1C5.27944 1 1.25 5.02944 1.25 10C1.25 14.9706 5.27944 19 10.25 19C13.5813 19 16.4898 17.1901 18.046 14.5M16.7811 9.01234L19.0311 11.2623L21.2811 9.01234" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xl drop-shadow font-light">به زودی...</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/market?categories=16" class="group relative overflow-hidden rounded-xl border hover:border-t-transparent hover:border-x-transparent transition-all duration-200 hover:-translate-y-1 hover:border-b-2 hover:border-[#FB7511] w-full h-full flex flex-col items-center justify-around gap-2 py-4">
              <img src="~/assets/images/categories/advieh.png" alt="advieh" class="max-w-[100px]">
              <span class="text-xs 2xl:text-base font-light">ادویه</span>
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 inset-0 bg-black/20 text-white backdrop-blur-sm flex flex-col items-center justify-center gap-2">
                <div class="flex items-center gap-2">
                  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.625 12.25L10.25 11.125V6.42087M19.25 10C19.25 5.02944 15.2206 1 10.25 1C5.27944 1 1.25 5.02944 1.25 10C1.25 14.9706 5.27944 19 10.25 19C13.5813 19 16.4898 17.1901 18.046 14.5M16.7811 9.01234L19.0311 11.2623L21.2811 9.01234" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xl drop-shadow font-light">به زودی...</span>
                </div>
              </div>
            </NuxtLink>
            <NuxtLink to="/market?categories=14" class="group relative overflow-hidden rounded-xl border hover:border-t-transparent hover:border-x-transparent transition-all duration-200 hover:-translate-y-1 hover:border-b-2 hover:border-[#FB7511] w-full h-full flex flex-col items-center justify-around gap-2 py-4">
              <img src="~/assets/images/categories/dried-fruit.png" alt="dried-fruit" class="max-w-[100px]">
              <span class="text-xs 2xl:text-base font-light">میوه خشک</span>
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute z-10 inset-0 bg-black/20 text-white backdrop-blur-sm flex flex-col items-center justify-center gap-2">
                <div class="flex items-center gap-2">
                  <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.625 12.25L10.25 11.125V6.42087M19.25 10C19.25 5.02944 15.2206 1 10.25 1C5.27944 1 1.25 5.02944 1.25 10C1.25 14.9706 5.27944 19 10.25 19C13.5813 19 16.4898 17.1901 18.046 14.5M16.7811 9.01234L19.0311 11.2623L21.2811 9.01234" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xl drop-shadow font-light">به زودی...</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!--  Discounts   -->
        <section class="w-full mt-16">
          <div class="flex items-end justify-between">
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl opacity-60">
                تخفیف های <span class="text-brandOrange">جی‌پی</span>
              </h3>
              <span class="opacity-40">پنج شنبه های آخر ماه لیست تخفیف ها بروز رسانی می شود</span>
            </div>
            <NuxtLink to="/market" class="text-[#8D8D8D] hover:text-[#4C4C4C] transition-colors duration-200 z-10 flex items-center gap-1">
              <span>مشاهده همه</span>
              <div class="w-10 h-10 rounded-full bg-white border border-[#818C92]/20 grid place-items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="#09090B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </div>
          <div class="hidden items-center justify-between mt-6 "> <!-- TODO Dynamic -->
            <div class="text-[#8F8F8F] flex items-end gap-2">
              <div class="text-lg flex items-center gap-2">
                <span class="w-8 h-8 rounded-t-md rounded-b-xl border border-[#8F8F8F] grid place-items-center"><span style="font-family: 'Vazir FD',serif">49</span></span>
                <strong class="font-black text-2xl" style="font-family: 'Vazir FD',serif">:</strong>
                <span class="w-8 h-8 rounded-t-md rounded-b-xl border border-[#8F8F8F] grid place-items-center"><span style="font-family: 'Vazir FD',serif">17</span></span>
                <strong class="font-black text-2xl" style="font-family: 'Vazir FD',serif">:</strong>
                <span class="w-8 h-8 rounded-t-md rounded-b-xl border border-[#8F8F8F] grid place-items-center"><span style="font-family: 'Vazir FD',serif">01</span></span>
              </div>
              <span>
              تا پایان تخفیف های نوروزی جی پی
            </span>
            </div>
          </div>

          <index-products-slider v-if="!loading" :products="firstItemsSection"/>


          <div class="flex 2xl:grid overflow-x-auto grid-cols-5 gap-5 p-5 pt-0 mt-4" v-else style="scrollbar-width: none;">
            <div class="relative skeleton min-h-[380px] flex flex-col justify-between space-y-4 min-w-[250px] rounded-xl transition-shadow duration-300 shadow-xl" v-for="i in 5" :key="i">
              <div class="skeleton-el h-1/2 rounded-t-xl"></div>
              <div class="p-4 flex flex-col h-1/2 justify-between">
                <div class="w-3/4 rounded-md skeleton-el h-4"></div>
                <div class="w-1/2 rounded-full skeleton-el h-2"></div>
                <div class="w-1/3 rounded-full skeleton-el h-1"></div>
                <div class="flex items-center mt-4 gap-4">
                  <div class="flex-1 rounded-md skeleton-el h-8"></div>
                  <div class="w-1/4 rounded-full skeleton-el h-2"></div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <!--  Top Seller  -->
        <section class="w-full mt-16">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl opacity-60">
              جدید ترین محصولات
            </h3>
            <NuxtLink to="/market" class="text-[#8D8D8D] hover:text-[#4C4C4C] z-10 transition-colors duration-200 flex items-center gap-1">
              <span>مشاهده همه</span>
              <div class="w-10 h-10 rounded-full bg-white border border-[#818C92]/20 grid place-items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="#09090B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </NuxtLink>
          </div>
          <div class="hidden items-center justify-between">
            <div class="text-[#8F8F8F] flex flex-col gap-2">
            <span class="text-sm text-[#8D8D8D]">
              ارسال رایگان برای خرید های بالاتر از 10 گرم
            </span>
              <div class="flex gap-1 items-center">
                <span class="px-3 py-0.5 rounded-full bg-[#818181] text-[#FAFAFA] text-sm">زعفران</span>
                <span class="px-3 py-0.5 rounded-full border border-[#BBBBBB] text-[#BBBBBB] text-sm">پسته</span>
                <span class="px-3 py-0.5 rounded-full border border-[#BBBBBB] text-[#BBBBBB] text-sm">ادویه</span>
                <span class="px-3 py-0.5 rounded-full border border-[#BBBBBB] text-[#BBBBBB] text-sm">آجیل</span>
              </div>
            </div>
          </div>


            <index-products-slider v-if="!loading" :products="secondItemsSection" />


          <div class="flex 2xl:grid overflow-x-auto grid-cols-5 gap-5 p-5 pt-0 mt-4" v-else style="scrollbar-width: none;">
            <div class="relative skeleton min-h-[380px] flex flex-col justify-between space-y-4 min-w-[250px] rounded-xl transition-shadow duration-300 shadow-xl" v-for="i in 5" :key="i">
              <div class="skeleton-el h-1/2 rounded-t-xl"></div>
              <div class="p-4 flex flex-col h-1/2 justify-between">
                <div class="w-3/4 rounded-md skeleton-el h-4"></div>
                <div class="w-1/2 rounded-full skeleton-el h-2"></div>
                <div class="w-1/3 rounded-full skeleton-el h-1"></div>
                <div class="flex items-center mt-4 gap-4">
                  <div class="flex-1 rounded-md skeleton-el h-8"></div>
                  <div class="w-1/4 rounded-full skeleton-el h-2"></div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <InstagramHero />

        <!--  Blog Posts  -->
        <section class="w-full mt-16" v-if="activeTemp.blogPreviews.length > 0">
          <div class="flex items-end justify-between">
            <div class="flex flex-col">
              <h3 class="text-2xl opacity-60">
                مقالات
              </h3>
              <span class="text-sm text-[#8D8D8D] font-light">
                بیشتر از ده ها مقاله در مورد زعفران و محصولات جی پی
              </span>
            </div>
            <a :href="BLOGS_URL" class="text-[#8D8D8D] hover:text-[#4C4C4C] transition-colors duration-200 flex z-10 items-center gap-1">
              <span>مشاهده همه</span>
              <div class="w-10 h-10 rounded-full bg-white border border-[#818C92]/20 grid place-items-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="#09090B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          </div>

          <div class="w-full mt-5">
            <ul class="w-full grid grid-cols-3 gap-6">
              <blogs-preview v-for="p in activeTemp.blogPreviews" :preview="p" :key="p.id" />
            </ul>
          </div>
        </section>`

        <!-- Your Trust -->
        <section class="w-full mt-16" v-if="false">
          <div class="w-full bg-[#F8F8F8] py-12 flex flex-col space-y-12 items-center">
            <strong class="text-4xl">اعتماد شما  افتخارات ماست</strong>
            <span>
            با محصولات ما خیالتان راحت باشد زیرا یکی از افتخارات ما کسب رضایت مشتریان و حفظ رضایت در طی سال های اخیراست . ما همواره تلاش کردیم برترین تولید کننده باشیم و کیفیت را سرلوحه کار خود قرار دهیم
          </span>
            <ul class="grid grid-cols-2 lg:grid-cols-4 gap-5">
              <li class="bg-white border-[#D6D6D6] border rounded-lg flex flex-col items-center px-8 py-4 gap-1">
                <g-counter :target="15000" :time="5" :step="100">
                  <template #before>+</template>
                </g-counter>
                <span class="text-sm">ارسال موفق</span>
              </li>
              <li class="bg-white border-[#D6D6D6] border rounded-lg flex flex-col items-center px-8 py-4 gap-1">
                <g-counter :target="200" :time="5" :step="1">
                  <template #before>+</template>
                </g-counter>
                <span class="text-sm">تنوع محصول</span>
              </li>
              <li class="bg-white border-[#D6D6D6] border rounded-lg flex flex-col items-center px-8 py-4 gap-1">
                <g-counter :target="2000" :time="5" :step="10">
                  <template #before>+</template>
                </g-counter>
                <span class="text-sm">ارسال موفق</span>
              </li>
              <li class="bg-white border-[#D6D6D6] border rounded-lg flex flex-col items-center px-8 py-4 gap-1">
                <g-counter :target="96" :time="5" :step="1">
                  <template #before>+</template>
                  <template #after>%</template>
                </g-counter>
                <span class="text-sm">رضایت مشتری</span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Comments -->
        <div class="pt-[100px]">
          <div class="flex flex-col mb-12 space-y-4">
            <h5 class="text-2xl opacity-70 font-bold">نظرات مشتریان</h5>
            <span class="opacity-70 font-light">نظرات شما اعتبار ما را می سازد</span>
          </div>
          <ClientOnly v-if="activeTemp.specialComments.length > 0">
          <div class="container mx-auto grid grid-cols-3 gap-4 grid-rows-10 min-h-[500px]">
            <index-special-comment :comment="activeTemp.specialComments[0]" class="row-span-6" />
            <index-special-comment :comment="activeTemp.specialComments[1]" class="row-span-4" v-if="activeTemp.specialComments.length > 1"/>
            <index-special-comment :comment="activeTemp.specialComments[2]" class="row-span-6" v-if="activeTemp.specialComments.length > 2"/>
            <index-special-comment :comment="activeTemp.specialComments[3]" class="row-span-6" v-if="activeTemp.specialComments.length > 3"/>
            <index-special-comment :comment="activeTemp.specialComments[4]" class="row-span-4" v-if="activeTemp.specialComments.length > 4"/>
            <index-special-comment :comment="activeTemp.specialComments[5]" class="row-span-4" v-if="activeTemp.specialComments.length > 5"/>
          </div>
          </ClientOnly>
        </div>

        <!-- Support -->
        <div class="flex items-center justify-between gap-12 my-16">
          <div class="flex flex-col w-max space-y-8">
            <div class="flex flex-col space-y-4">
              <strong class="text-lg">ساعات پاسخگویی تلفنی</strong>
              <span class="font-light opacity-50">شنبه تا چهارشنبه ساعت 8 تا 18</span>
            </div>
            <div class="flex flex-col space-y-4">
              <strong class="text-lg">شماره تماس</strong>
              <span class="font-light opacity-50 text-right" dir="ltr">051 - 52329059</span>
            </div>
          </div>
          <div class="w-2/3">
            <div class="w-full flex items-center justify-center min-h-[200px]" style="background-image: url(/images/bg2.png);background-size: 100% 100%;">
              <div class="w-3/4 mx-auto flex items-center justify-between">
                <div class="flex flex-col gap-3">
                  <strong class="text-lg">لذت بی نظیر <span class="text-[#EF2626]/80">زعفران</span> را با ما تجربه کنید!</strong>
                  <span class="text-sm font-light opacity-50">شما می توانید با پشتیبان ما تماس بگیرید و هر گونه سوال یا مشکلی را با ما در میان بگذارید.</span>
                </div>
                <div class="w-[75px] h-[75px] bg-[#3ACC3E] opacity-70 grid place-items-center rounded-full">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8561 14.1495C18.3411 19.633 19.5854 13.2892 23.0778 16.7791C26.4446 20.145 28.3797 20.8194 24.114 25.084C23.5796 25.5134 20.1847 30.6796 8.25383 18.752C-3.67853 6.823 1.48468 3.42461 1.91421 2.89043C6.19032 -1.38596 6.85306 0.560401 10.2199 3.92633C13.7123 7.41768 7.37115 8.66607 12.8561 14.1495Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Services -->
        <div class="my-12">
          <hr>
          <div class="my-12 grid grid-cols-4 gap-4">
            <div class="bg-white rounded-xl flex items-center justify-center gap-5 py-5" style="box-shadow: 0 0 50px 0 #B0B0B040;">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="54" height="54" fill="url(#pattern0_2243_15002)"/>
                <defs>
                  <pattern id="pattern0_2243_15002" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_2243_15002" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_2243_15002" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
              <div class="flex flex-col space-y-3">
                <span class="text-lg font-light">ارسال سریع</span>
                <span class="text-sm opacity-50 font-light">تحویل تا 48 ساعت کاری</span>
              </div>
            </div>
            <div class="bg-white rounded-xl flex items-center justify-center gap-5 py-5" style="box-shadow: 0 0 50px 0 #B0B0B040;">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="54" height="54" fill="url(#pattern0_2243_15011)"/>
                <defs>
                  <pattern id="pattern0_2243_15011" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_2243_15011" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_2243_15011" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAIABJREFUeAHtnQdYVFma/nt3Zif0dEuQYGjtlqCISgaVnBGQIEgUECTnHCQWUbKSVMxiRiSZc84KomLOOWclVNV5/3tu3YvV7sxs7397emZnmuf5nlNVFFD1/e77vufce+vy1Ve/fv3agV878GsHvgLwb2z9O4B/R2PjbxobG39Db7Pjv33Zpka3r37D++qrf//y8V/v/8QODDScNnr//t9yxePxaFP/S8O//LW8/ft/29iN33UDv9sP/Fbs+//tz4o991/zJrOVA3QLZ7ZyCuOvdeL69eu/7zp6VO7muXOj753q1H109uyUx51n/R93dKS+On+u5NX5s/XPThxcf39nS+vN9fXtF2vz150qTirbVTTbgP5e/ASgf+3v/9N8jzaasRR2i/9rb+zVzZsS9y9dUn548aLBowsXpj3t6gp/1tVV8LizY8XLi+e3v7108fTLrrN3n5w+3vPw2EHc3bcdt7c3417bGtxqqMLFsjScTvbFwQBr7HSdiFYHXWzysH/Wmjhblf5dVml/7SX8c36P2fopAJHV/OhN0u+9f/Je7t3dhwYfbtyY+fJyd+6r7q6Gl+c7D7660Nn96erFO/3Xu1987O7sfd1xHM9PHMCjQzvxYN9mPNzdjHubV+PmhnpcXV4uuDA3g38mK6TvaJRz714f477tTpp9bVPG9jeZKfev0lfqXTZR5dNiQ21+paGuA30RPFNTcRv70ev6p7xDm33mzJn/GHhzwL/du3Jl2KubNw0/3bwe/+nqhVVvL5w68/Ls0VdvO4709XQdIx/PHsCbYzvw7EAbnuzeiMc71uLR1gY8aFtK7m2qF9zZUMO/tbqy//rSov4rddn87opkwfmCCGFHxkxyKm46ORpqh4P+5tjjbYht0yeh1UEHG6w1scJES1hvqI056kqPo5VkNelrcvvqq98MvLZ/9ht01sO9x5fXH3z39sI5n76rnSt6Lhy78frEDrw70ob3BxrxavsyPGmdj0dNVXi4oUL4cH254MG6UsH91SWCe6vmCO6uKBDeWZorvFWfRW7UzSbX5yWQKyWRpDsvEBfSZ6Az0RWno+xwIsSSHAkwJQd8DMkeT32y3XUiaXHQI+tsdMkKCz2ywHQiP09NEcljhh3jhYR8TV/bv0SOiIfxuytXxry7eLKi78KRK++PtePN7pV4s7kGT9cXCh81ZPMfrsjgP1yRKXy0PJM8pLU0HQ8Wz8a9+hTcq0skd6tjcbsygtwsCSLX8n3JlWwPcinViVyIs8W5SHNyNsiQnJw5iRz10SOHvXSxz12H7HTRwRYnHWyy08Uam4lYajGJ1JlOQoGmCj9WUQ5R6t/XUBi8r77657crQKQKAL/7cLVzdn/3kWc9p9rxZtcSvGot73+2Prf/yepMwZOGDPJk5Ww8WZ6Cx4sT8WhhLB7URZH7VeHk3txgcrdsJrlT5E1u5brhRqYjuZY6BVcSzNEdaYjzwRPR6a+FMz4aOOmphqPTJ+DgtAnY4zgB2+3V0WargUZrLTRY6GGx+SRUm+iRfB1VEqMgLwwfM4QfovG9NwXi7+//Bzr+037RNQJ9c6+6u0f2XuvY1d99AB+OrMfrXYv6X2+eK3jZUkxebMzDszWZeLoyBU+XJpDH9ZHkUW0IeVgVQB5U+OJ+iSe5V+iKOzwH3MqcghupFrgeb4wr0ZNxKVQb5wPU0ekzHqc9xuKEqwoOO43Bfrsx2DVFBVusVNFiMQHrzDWw3FQb9Sa6mGukjTy9cSRx7AgSpCBD/FWG9sy0svISh8DjiV63+GP/52+DDe7317tV+bfPXew5uwPvDq3re3tghfDNzvl4vbkcr5oL8GJ9Jnm2KoU8Wx5HniyKwOP5QeRRlR8eVnjhfrEr7hU44g7PFrcyLHEz1RjX4vVxNVIXl0I1cD5gAjp9VHHGXQXHncfg8FRl7LVRxg6L0WgzU8FGk3FYbayGpcaaqDPSQrmBBvL0VJGirkgix44gAcpDiPeY4cTXLfhOTNqSVbPz100Hu1hsdPucd/9nYTALOFYV9E28v3FpPP/+pWu9Xbvx/sj6vveHV+Ht7gV4s7WcvGotwMvGLPJibQqerYzD0yUReLIwCI9r/PBwricelLjifoED7vJscDvTHDdTjXA9fhKuROngUqgmzgeqo9N3As54jcNxF1Ucsh+DPdajsc18NFpMVLDOUBUrDcejXl8N1ZPVUDJpPHi6KkjTUka8uiIiJ4wiIeqKiDHQIp6WNnCfkYCo+AphCq/hcNHCfXYcBDexiQj32D/8yKwpxKayV44c+fbD/dtThPcu3+w5vw/vjzb2vz/cgLe755PXW8vIq5Y8vNyYQV6sTcazhhg8XRqGJwsC8Lh6Bh5WuOFBsSPu5dniTqYFbqUZ43riZFyN1sXlCG10h2jhQpDmQGYcd1fDIafx2GOrii2WKmg2UcEag7FYOlkV8yepolJvLIp0xiBHSwlpmopI1FRCvJYyidVRIQlGWiRvuhOJtjIR2BiZ9nv5RguDw7KRkL5QWDCvtW71tuuDaPPpovUfHgL3AqkquNtPL1xQ67l9M7vvzvXTfTfOoadrD94fXSd4f3Ap3u6qwuutxeRVczZebkglz1fF4tmyMDytD8DjGm88rJiOB3MoCBvcyTJnQNygIGL0cCVCm8mLC8HaOB+kjQ5/bZyaoYljbmrY7zAOO63GoNVYCesnK2K5rgIWaCtinqYCijUVkKs+ChkTRiJlwkgkqP2AeApFbyySDTSQbm1E8t1dSK6rC7y1x8NEdxKZ7h4sCAxOEyakVaOkbuuBlY3Hhv+fgCLaycfs0Pvq040bI3rvXK3m3738tOfSSfRd2I8PJzYK3h1cKny3pwZvthaR182Z5OX6RDxfGUmeLg7E4zofPJrnhoelTrhfYIu7OZa4nWGCWykGuJEwCdfi9ET2FK6NiyFa6JqlgQ4/dZz2noBjLqrYb6eMHaY/oGXid1irORRLJsijVlUeZSpyKFSRR84YeWSoDEHq2KFIHDsMcarDETdhBBI0FZE0SRWzTXVIjq0p8pztSK7LNDLb1pq4jh1J1L4fCTt7DxISltaXllWDefU7OlZv6/qOQvmHtS86lQVEMN7fuOQhuNV1u+/SYXzq2IIPR9f0vdu/kP92VyV53Z6LlxuSyfOGCDxd5E8e13jiUaULHpRMxf0Ca9zlmeFOhhFupejjRuJEXI/TwdVoTVwO10B3iBouzBqPc76qOOulgpMuyjhir4B9ViOx3XAYWnTksGaCDJaoSKN6tDRKlaSQryiFTAUppClKIVlRGglKgxGrLIPYMXKIVh2KWApESxFp+uORZaYHnq0x8qZaIt9xCnId7UmGjSmmK8sTJclvYGPljKiYzN7s/HrULNu1v373GQkKRXxNxTnD33XkLOr27dt/6L3VVcW/fgK9Zzfj/eGV/e/2zRe82V6MV02z8XwFzQUf8niuKx6U2BMGQI4p7mQa4nbaJNxM0sWNOC1cj1LH1fAJuBysiu5ZKrjgNxpd3krocFPAKedROG4/Eoeth2Ov6VBs15dHq44s1qlJY9lYKdSOlkSZkiQKFCSRrSCJNAVJJCpIIk5BEjEKkohWlEKkkjQilaUROUYWURSK2kgk6yojw1gdPOvJKLAzQYG9OQrsLZBvb02yrIzgpixLfvjT7zB1qjsSUwv7CspWonrF7vn/cEBoeNMX9e7qVRnB7a62vot78fHoKsHbffOFb7aXkJeNKXi62J88qnAi9wssyd1sI9yZPYncStLBzXgN3IhRw7WI8bgaOhZXgsbgkr8SLvoq4Lz3KJxz/x4driNw2uk7nLAfjqM2Q3HQfAj2Gsthx2RZtOnKYIPmYKwcL4V6FUnMVZZEkaIkchQkkD5KAskKEohXkEDMKAlEKUggQkESEYqSCFeSQriSNCKUBzNQolWHIE5tBJJ1FJFlpIZ8q8kosjNBkZ0pU4X2FiTLcjKcv5ckClIS8J0ZSTJy5grLapoEC9cesaLvn8cT9YHe/rt9cTDe3r8vLbh9bl/fuW14t7++/832YvKyMRlPFwWQhyX2uJuuT24maOJG9ARyLXwsroaOwZVAZVz2V0S3nwIu+nyPC54j0eX+HTpdh6PDeRhOOwzFSbshOGYjh8MWcjhoKos9RjLYoS+Ddr3BaNKSxho1aSxWlULNGEmUKUsiX1ECmaMkkDpKAokKgxA7ahCiRw1CJAsjXFEC4YqSCGOASCGcqmT0YESpyCJGVR7x44cjRVsBmYbjkW+phyJbQ8yZYoRiW2MU25uRTDNtmMr+jqgrj0V8Sr4gb84ilNW1HmL78FePy/zNIXG++ay7+xv+zc5tvR2teLNzbu+rjWnk6cKZeFhsT+5mGuJmjBq5GkK3fEV0+/yAi14jccFzBLrch+Pc9OHodBmGDuchOOMwBKfs5HHCVo6BcMRSFgfNZbDPRAa7DSmIwWjXk0aTtjTWaUpj+QQpLFSVxLwxkihWlgRPUQIZChJIURiEBIVBiFEQqSJSYRAiOBCKEghTYhWiLIUIDsiYwYhmoSRMGI5U7VHINhiHAgttzLGehBIbfZTZGaNkqhmJ1VXG+G9+SxydvEhWXhWZM3dtX8Wi7Y604X/X1Tx3zKL3esf8ntOb8HprUf/zleHkYelU3M0wIDfjNHE1RIV0+47CeY8ROOc6HJ3OQ3HWiTZfHqenyuOUnRwD4PgUWRyzksVhSxkGwn7TwdhrPBg7DQdj22QRiE260linJYUGdSksHi+JWlVJVIyRRKGyJHKUJJCuOEgEQ1ECsRwMxc8wGHVwMJQkEUGBjKY5MhhRDBAZxIyVQ5yqPBLVhiNNRwE8Q1UUmmmi2FIXZTaTUeFgiiIbAzJ1+DdEXXkMSUgr5POK6lE4r2k5BfJ3W5twIf7pdpcn/1w7Xm/O4z9Z6EvuZRnjVrwmuRaigsu+o8h59xHocB7KNP+knRyYxtvI4qiNLI5Yy+CwlQwOWcrggLkMOAi7jAZju8FgbJksjbaJ0qAg1mtJo0FDCkvVpLBgvCSqVCVRNkYCBaMlkU1hKA1CsqIEElgY0YoSiFIchEhFCSYzIpQkEK4kgQhlSYQzyqAwpBD5BRCqktixsogfNwQp6t8hS08J+UbjMcdUA6Xm2qi01UeloxmJ1lIg4yT/hBl+4YKcwjoUVq7p5lVvYqbBv/jRRS43Pr14MVxwcfdNOo19VO0muJ2kg2shY8llXwVccBtBOp2G4pQ9tR9ZHGEbf9BCBvvNB2MfLTNp7DUdjN0mg7HLeDB2GEpjG7WlydJomSSNJj1prNeRwipNKSxXl8KiCVKoHSeJSlVJlIyRRMFoCWQri2CkKkogUWkQ4pUkEENhKA1ClJIEIpUkmaIgPsOQZGBQIBFjpEWlQnNkMKLHUpXIIm6cPJImDEW61vfInTQaRYbjUWKijgpLHcydaoR8c20yWep3sDC3E2blVQl5c5b0ZpU2mFCV/OLrkjNn6pkjez3XTxZ+2FON+xUO/Jsx6uSKnwK56D4S55yGkjN28jhuLbIgCmCP6WDsMpHGTpPB2GEqw9R2UxlsMxmMLUbSaDeQRqu+NDZNkkajnhTW6UpjlbY0VmhKYbG6JOZPkET1eElUqEqgeKwE8sdIIme0BDKUByFVWQJJSoOQoCSBOKVBiFGiQCgMqggJhA+UJCLGSCFCRRqRYwcjUnUwosbJIGqcLFPR4+UQM56uTWjAyyJh/BCkagxHts4PKJikjBKjcSg3U0eljR7KbSYRx+HfQneCJknJKO3PyK1FeuFSf1GO8H654yecOt48eTKq99SG2w+r3XE9apzgkvcPOD9tODrsh5BTNnI4aimLA2Yy2GMyGNuNpLHFaDA2m8qizVgGm/Ql0ThZAo36kmgylEaTkQw2Gsmg0VAW6/QHY5WeNJZrS2ORlhQWaEiiVk0KleMlUTZOAkVjJZCnIons0RJIH/0ZRrzSIMQqSyBaaRCilSUQySoiYrQkIlQoBCmEqUgjaIwkZipLwEfxW3gpfAOPUd/C/Ydv4P7Dt/Ac9S18FCUQPHYwoifII3aCPJLVhiJD4zvwdL7HnMnKKDVWRbm5OipsJhL/0fLQGKVAohNz+1Kz5iIld/5sRiFubgO7jej9v+kXd7j13cVDQc83zMb1qPH9l7y+J11Ow3HGTp6csKZTVFnsN5PBTmO69Q9Gq7Es1k+SxBL132Ox9jdYYSqPBpsRWGE1HIuNBqNO+xvUavwR1RP+gCq1r1Gj8S1qNCRRrSmFeZrSqFCXRomaNArHSyFvnBSyVaWQriKFNBVJJI+RRMIYScSNkUTMGElEjRGpIHS0JAKVJeCn+A08vv8a00d+Ddcf/gTPMZKYpTkE0QY/IN1mLAqmaaLEXRelXpOQP10XiRZj4TdhCDzprGycHBLVhiJFbSiyNIahQPd7lOhTKGNRZqFJoieMgNZ3w0hgWEpfamY5EjKri2nzf/EMOQP8x9sDizfcK7TFBY/h/V3Ow3HGVp4ct5LDYXNZ7KOWZCyDdsPBaDKWxWLNr7HIZCj2F/jizu55eNWxEm8vNOBN51I8O1KF25t56FwcgT08F2wI1scCe2UUT5ZD9rhvkKL0eyQp/B4Jo36PuFF/QKzCHxGt8CdEKv4J4Qp/QvCorzHrh6/hN/KP8BrxB7h/9we4fPcHTB/1J/ioDkbkpJHIdVDDwkATtM92xvFyX1yqD8X9hhg8WZ+A5xuT8bIpFS+bZ+N5cwbuN6Xj7KIY1IbawGecHEJUBiNZfSjS1eTB0xqGIr0fWCiqJFnjezJpxFB4+UT2J6eXIjm7at4vCgQQnQF49eoZmUdL465eC1ZBp9NQwRm7IThuJUdEMGSx01gGbRSGiSwWaH6N1R5qeNG5BujvAD4cAV7vA17sBJ5vA55vBV5sBV5uE40PmtF/pQHPj8zFhXWp2F/pj01Jdqj3m4xSxwnIMVdC6uQRiNMZimjtIYjSHorYySORbKaEPEc11PgZYkOSA/bP8cHlpdF42pyOTzty0b+nAP278tC3g4eeLdn41JaJjy0ZeN+cjveb0vFuE72difetOfiwrQAf91Vib2UYAjWHI0JVBmnqQ5ClPgT52t+heOIoFE9WpoFPjL8fCme3wP74lDkUCLMb5RdTCLfuuNlaM+FavmPPebfh5LTdEOEJGzkcsZAl+81ksctEBu1GVBlyqNf+Bqvdx6Hn5gYGhOB+K4T3WyC8vwnkfhPI3UYI76yH8PZ6CG+ug+DGOghvbQDubgQebgKetAFPWoAHG4E7a0GuLMOHs3V4dXQunu4vxZPdRXi6uxAv98zBx4OlwPFK4OQ84FS1aDxSAXKgBPzdhejbkYe+bbno38YDf2sO+Fty0N+ejf62bPS1ZqGXqWz0tPLwsTUXb1pywT9QhQOVwfAfL4P4CXLIVJdDnsZQFOmORJHeKGRqjiBWo4bBwdm3PzohDwkZcxf/sgphT17rrouY0hWlhzNTZQUnp8iTo5ZyOGAmS3aZymCrsQyajWTQoD8YtcayeHq4BHi9E4I7G4EHTcC9DcCddUyDcXsNflS31gI314LcWANybRUEV1ZCcHklMwqvrAS52gBcWymqqyuAy8uA7sXA+YVARx3IySoIj1VCcLgcgoNlEB4sZYDgQAmwtwjYUwjszAd25IFs44FsyQHZnANhezYEbTngt+Wgv5WCykXv5jy8a81F795yLA6xhL/yIKRryCNHXQ6F2sMZKDzN74id4jDYOnj1h0dnI3Z2+TJ6HvEvphDuD53LdfHomqmKEzaD+cdt5HDIQo7sNZUl201k0EZnTCZymKv+NY6VugFPN0Fwa71oC7+1CuTmSpAby0V1fRnINa6Wg1yltYIpXFkOXFnGNJ1cWgrSvQTk4mIILyyC8NxCCDsXQHi2DsIztRCeroHwVDXIiXkgx+cCxyqBoxXA4XIQCmV/McjeIpA9BSC78kEokO25wFYesDkHpJ0WD8K2HAYMhdLXmoOPzVn42F6A26uTGVuMVZVGtoYc8rWGolDnO+RqDCOOSsNgY+feHxKRhaikshW0R1yfqFr+pl88nuj0/NMJFqGdnoo4ZiXDP2IthwPmInVsMZJBi6kclkyUwOKpo/Dx7Fzg7nqQm6tYAEuBa0tAri4GrtSL6vJCgKl64FI9yKVFQPcikO56kIsLRXVhIcj5BQCtrgXAufmi6qgDztYAp6uBU/NATs4FOV4Jcqwc5EgZyKFSkIMlIPvngOwtBNmdD7IzD2RHLsh2HshWkUrQni2C0saDsJ0HPgWyKRM9Tel4tzEDnzbnYk2kJWYpfYtsTXnkacqjUHsY8jSHkWnKw2A9xbU/KCwd0YlzGtzc3P7zmNB/f7b9zwKKA3IsUC/0tMv3OGolwz9kKYe9ZrJkh4kMaTOWxUZTOczV/BpHi6YBdxsguLYC5NpSkKv1IFfqQS7Txi8EuucDF2nVfa4LdQCt83VAVx1wrhboqgU5VwOcqwHprAXprAE5Ww1yhlYVCAfiRCVwrALkaBlwpBSgVnmwGDhQBOwrBPbkA7vygB25AIWxLQdkaw6wmcLIBmkTQWFU0pqN/qZ09KxPwft1yfjYlIHumkBEackjefxg5GsNQaH2UORrDiOuDBCX/sDQ2YhInLPaza3xN7/YWY4ckAP+usEnnUbQHYH8A5Zy2GMqS7aayJBWUzmsNJDGfPMheLIjE7ixHEK6xV9aAFyaLxoZELTxtcD5GlF11QBMVTONp81HZzXQUQWc/aLOzANOzwNOzgVOVgAnKoDj5cAxMRCHKIg5wH4KowDYkwfsygV28oDtOcC2bJCt2cCWLJD2TKAtC6QtE6Q1C8KWbAiaM9G3MQ09axPxYXU83q5JxIvVcah0UUPEaAnka8ujgNqW5lDiPnoYLK2n9c8KTkNYfOE6Ux7vt784kIM+WjOOOXyHQxYy/AMWcthtKku20BW4mRzm636LpkBd4EINhN0LQFgVkIu1IggXOAi0+VWi6qwCOueJqmMeQK2O1plK4HQlcEqsKAQGRDkLohQ4WgocKQEOFwMHi4ADhcD+AmBfvhiMbGB7NrAtC9iaCWzJBNmcAbSlg7Smg7SkQ9iSAUFLBvibMtC3IQWfVsfjw8povF4RjXdr47A5wQqhKpLI0ZRFoZY8CjWHEA/lobC0cuoPCE5FWFz+hpAQZrfSL3NcBGyG7HRXczho9x0OWsjw91nIkZ2msmg3kSWMXekMwokyN+DqQgjOVTNgyIVqVgnVQBcLgcKgEDrmioqDcLaSBVEBnKLNL/9cJ8qAExREGXDsCxCHisRg5AP78oA9ucBuHrAzB9ieBWzPBLZmAJvTQdrTgbbZIK1pIM1pEDI1G4JN6eA3paFvfTI+rYrF++UReL00HG9WRqKrxB3xOkMwe8JgFGrLo0hLBMTC0rHfPygZIfF5TW483u+++qUzZIu7utneKcNxwFJGuNtcjmwzlaNhTlYby2CekSweNscD3XUQ0q29qxqkqwpkQA1UCeIQWABUDWcqgNNsnaIgKAC2jtN1RqkIBIVxpFhUh+cADAwxVewVg7ErB9iRBWz7DAPts0Ha0gAGRgqEm1IgYCoV/I2p6G9MQe/6RHxsiMb7pWF4vSQELxaH4MGCmci3VkLcWCnGtgq1KZAhMLNw6J8ZmIjg6LyW6Ojo3/8sgf1Tfgn3Icgtvvrj99mO+HTAUo7stJAXbjGVRbOpPFk0WQpLXEaDf6QApHMuUzg3D+QcB6ES6GDrbAULoBw4XQ5QAEyVfQYxAKGEBVECHBUDIQ7jAGtRjDJ4wO4cgMLYySpjWwawZTYYGO1pQFsqSEsKSHMyhE1JEGxMAn9jMvobk9G3IQm9axPwcWUU3i0JxZtFwXi2MBAvlgRiqY8OwlUkkUtzRGcIcadAzO37/WYlIigmb7M/j/fLnZjNhVWj2+The+1GPqGBvsNcXthuKocmc3lSpTsILVEGQGcFhKfKmOYTDgAdqR1RELQohAEQZQB9PlUEo4pS4ARVBAXBQqAguKIgDhd9VgaFsZ+1qb25wB4OSDZAJxcUxtZ0BghpTwNpSwU4GJsojEQIGhPB35CI/g2J6NuQiN41cfi4IhLvFgfjzaJAPFswC68WB2J7vDnCx0kjW0uOATJdSR6mZnZ831kJmBXJ2xESwmM+T/JTNvCf7Tkrp6kM3jf1h4v7LeWwzUxOQGdXjebypFR3EE7McQHOzYWQNvZsJcjZCqYYCNSSGFv6Qg0MiFLgJAdCDMYxMRBH5gC0OBiHCoGDBcCBfBZILrCXhbEzW0wd6QwQsplVRmsK0JIMYXMyBE0URgL4jfHo35CAvvUJ6F0Xj541sfiwIkIEpD4QzxcE4MXCAJzJd0SMljzSNGSQrzeUTFOUg4mpLd83IB6Bkdn7IiJ43/xsjf6pv6jSze2Pe6cqbNtrKY8t5vL8FlN5rDGVJ6WTpXFrWTDQUSECcqYC5Ew5IF6MMsQVIQaCquJECasMDsQc4CgL4kiRCAYDhMIoBMTVsY8CoUFO7YoDksEqZDawmVVHawoIAySJASKCEY/+9fHoXR+PnrVx+LQqBh9WhOPt4iC8rg/EiwUBeDZ/Jm7M9UC68feInzAYeROHEqdRsjA2seX7BMRhVkT20ehoHnPe70/t5f/6eWA/TL/PQXHhLqshaDeT72s2H4JlRjJknuV35HVbMnC6FIRu7afKQTgAjD2xIAbsiVXElyAYq2KBUEVwQDgQnDJ+pI48EQxxu2Ly4zMQsjlVlB0ckE1J4DclsuqIR9/6OPSui2PU8XFVtAjIkmC8qZ+Flwv88aTWDw/rfFDmMBYRqlLInTSM2H8/GEbGNgKfgFgEhGV2hIfPkfpfN/l/8gvoFQ7o87dOVc7cZjEU7SbyfZsshpIF+tJYNG0M6d2XA5woBjlRCkIbT+s0WwwIVhED9sQqglPGAAxWFQwMcWXQ7BCzKsau8gCqDg7G7myRQmh+bKep2D7nAAAgAElEQVRA0kG2zIbIslJAWpMhbEmCoDkR/KYE9FO7YmDEMuqgdkWBvF8RgbdLgvGaAlkYgCd1fni2cCaW+eogRFUSvEnDiPUIKRgYWQtm+MdgZlj69bAknpyon3/9s/P/k57/1efuNxV93q7dQcVrm+UwtJnK85sshpF5epJoDNIlQjrDOjYH5EQJoxJyiiqFKxrarC1xAJixGDheDNC84IoDQW2KsapCEYjDLIwBdbAwxMOcAqHqYAOdMIGe9hkItSsKZFMi+BtpdsShb30setfFomddLD6tjcHHhii8p5bFAVkQgKe1IiDtMSYIHCdFMiYNI+bDBmGyvrnQyy8KfiGzXwVFlzBnnvyUq0f81Ub/1G9yCmm1VzXaYT2ip81EXthoMUxYoi2BncmWBCfmQHi0iMkCxrYoAPHiZk9UCeLFgGDticIQtykKYcCuCn4c5PtZIPt4IoXQqe6uLDEgbKBvSQPaU0HaPucHXxzIBhbI2hh8Wh2ND+JAFoks62mdH54umIlDGVMQoiFDkicOhaHc10RXz1jg6RMunBGYjOiMaj3aS+4kwp/a1//v53H7s5pcNZR3TBl5o9VUHuvMhgpKdCVxvMCZ4GQJhHSLZmyrRBTSVAVcUQgnqCIoEDFFHKMQaG5Qq2JVwSmDAcIqhCrjR+pgs4POrvbkAIxdUSCZrELSQbaydkWBtKdA2JoMQXMS+JsS0L8xHn0b4tC7nqojBj1ro/FxdTQ+NkTi/YowkUIWBTKW9Wy+Hx7X+ZHOQmfETBqGaJ0hZLLsH6Cupgu3GSF93gEJiEyrYk904P3u/7vJ/5Mf5NYiO5N8/7Rlyg+HNpkNwWrTIf1zJkrjcq0vwcliEZDjxSC04eKWxNxnYXCKYEDMAbiRCXExmxKHcegLGOLqYIBkA7vF1LE9A4Tmx1Z2hsUohMsPFkgjC4Sxqxh8YoF8+BGQWXhZL5plPar1xdUKd5JqPooEqMnAYqTkB3XV8Wccps2Au0+EICi26EX2vCYb2lNT01/odCDOtjZZj1rZZDYUy43l+4sN5Mm9FaEiyzpSyOQIowAKgVEFZ1FcXlAIrCKOFYmUQa2O1hFqUawiKASuGHXkAwfygAEY7NpjQB1i+cEFuhgQRh1soPc3JaBvYxz6qF2tpzBYIGui8L4hAu9WhOHN0mC8XhzIrEGeLZiJhzU+5GaVJ/IdVYibqhQcVIf36KuMstbXNz3t5OoHb/94RKVUfsgsWR9AofwiB6vqtbWZE+U22Sqlt1gMx2J9Gf5cixHkaWMswbEiCA+zwc7AYBvP3KYWxaqBGVkQnCoYGNyMSsyiDuUDB9misypadBcJs+5gs4MDwiwIRXZFqEIoDGaGJWZXLUngNyeCAdIYj94NsehZT8M8Gh/XRuPD6ih8+AIIoxAKpNaX3Kn2QqWnOpmqIgUntZHC0KnGyjIyMsM0NHQ32zp49s8IiCfhiWWYXbTG9xeBciZEBGSVxQ9T2qxHfKrTkybz7ZXI2y0phG7hhFMI03QOgpgyaOMHLIpTxZ+zKdaiGCDsipxTx/5cMSA5P86PHRkgOzKA7axdbaEzrFQI21MgoPnxIyBx6G3kgMTg4xoRkPerWIUsC2EUwgF5UOtL7lZ7oz5wIjEdLYHJ41T4lnZ+u62cQ1fpW3o3jFc3uG45xbXPNygZoXHFN1KLG5lPWFEwf9MvvNo98lJ1iP1Gq++fVelIYcn0ccKe3ZmE2g0DhGv68TkAV+Lq4NTAjKxFDeQFa1PUon4Eg91FMmBXPNGuEk4dXKCz6w+yPR3YNhuEAmmnQJIhaE0CvyUJ/c2J6GuKR29jHKuQGEYdnELeNUTgLbUsCmRJEF4uCsDTBf64X+uLe7W+ZHmEPrSUZIiBgT0c3OPg5p8B/9gKeITkf1DTNu11dg+GT/BsfkhiuQoD4r+5ptf/Nyw8OvO18NLyRcIzNW+xJ/flNvfx/GK1QVg7U4cIDvBAqF3R4oDQfBC3J/r4AIzCz3nB5EYBmx2cMujIWRWbGwMwxLPjx7Mrqg7GrrbRKa+YOtpSIGhJ/i9AejbE4hOTIdSyovB+dRQYICs/A3lBgSykQPzInRofrAjVI9pjlTDNyZ/MCs/lhyfN7Y/PXtw/u6QRFo4hxMopkHgFpsE7MJ6ZBv/s6xLuFFLhxSU15FI9hPTI3M5snIg0AE/1T6Q1wgg4nE+EB/M/A+GgMOsKFgQHgwJgprd0ZEEwQc6qgplRsQH+pU3tZ5XBTXXpfqsBdbAwxNUxYFcp4Lcmob8lkVFIL6sQDsjHddH4wACJxLtVkXi7Mgyvl4Xg1dIgvFg0iwFyr9YPN+d6YKmfGsw0J5AZnqEkKqkM8VnzkchbgvSyRuIZnE88QguFyYUrEZNSYkG3/p813DkYOFs3lnRUPcH+Qgj35vOxN4/cyHUg6eO+wfZka4LjRRAcyAM5TG2LnS2JK4KDwD1GAXDK4GZSXIAzYx67J5dTB80Nnqj2srnB2RWzGMwUZQdVCFUHa1dCDkgbq46WRPRtSgAF0rMxDn8WCLUsCmS5CMjzxbPwZKE/7tb44UqJM8ocFYmJliYCA2KQmFVNUnLrSXLeEpJWvJZ4heTDIyRXULZ0L6pW7FwlAvIzfv4Q+0XzaewucCUHCvrJLp6A7OIR7Mkjb+r8kKUtRfbmOIKuQX4E5CjbcNp05jZnV9zjVBlUETRDxPKCgzKgDG41ngtw6qAgOBisOgizGKQKoTDSQbbNhnBLGoSbUyBoTwG/LRn9XH5QIBvj0dMYh08bYvFxfQx+rJAIvG3ggASDAnm80B/Urs7n2iLdbDhMdPUQHpqIVF4d0vIXITV/CaGqcJuVRdwDM0nqnLXIrtjwkle0nMmRn00lqA9hprnYmORJNtNV72wB2ZZBsItHBOtjSInFCOwvdgNOlUBAZz90fxa1IU4RVC2MVXEgWABMiFMo+exag47cFJeqgy2aG/T3MjMralccjM/ZwcDYKTa7ourYOhvCzWkQbE4F/0sgzQnoYRQS+2eAROHdKlYhK0Lxclkwni2ehUcL/XGryhun00wRPUkOxhMnISoiCWm5dZidvxBp+fVIylsCF79U4haQShJylghjMxf0RSeXM1cV4vF+poXigEJWhNujOakHm5KEaEsVkq0ZhIJZ56+Dw1UzmN3uAroFM8HONv/PgWBsiq4zxPKCy4yDeaIgZ9RBIbAwBqzqv86siLhd0bUHO90Vbk2DcEuqSB1iQProDGtTAnoYhXwG8mFdFN6vjcK71TRDIvCGWpYYkIcLZuJGhQcOx07CLK3BMJmsj+jIRKTmVCGNV4MUXh3is+cTZ+94Ms0nnkSkzhMExhQhICIridoWPUWIjv/rLzSKPoCC+UFqZH3MQ7IhHmhOFpL2NEL3qN6t88PDdVGMCoQHcplG05mWSCEsGO4+HbkaUAOrDO4+s/jj1CGWGxQKF+S7s0H2iHaVUCDidkXzQ0jVsTUNgi2p4G9m7ao1CX0tSaBAehkgcfgkZlkf1kWLgKyJZKC8aQhngYTg6eJZeFDni6ulrtgTpgnvCVIw0TdEZFgsEtOLkZhRhvj0ckSllsPBPYLYu4WQWVF5fO/A2fAKSCqiEH4+IOxpLaiM/yNZFtZB1sUAm5L49EQBbE0ndMEl3D6bsRRCt2w606JbPNf4L0faeKbYae0h+jNiNaAOMZtiYHBBzs6qdmeBUwfdMJip7nYKgyqDgyGyq36aHwyQRPQ2J6B3kyjQPzXG4uMGNj84IKsj8ZYqpCEMr1iFPF0UgHs1M3BpjjO2zRqH6eMkYTJ5MkJmhSEiPhuRCTxExOciKIYHW+dAYmnvQ7wDk/un+8TA0ze6igLR1hZZ//9aIfQXcDMt4eLwlaQxDmRTIp/QY9ObZxO6+qVbIZ0Bkf25EEFhGzzQ/C/ygQPA5EQuu3/qzwDg8oKqgVEEp4pMRhXMmoNZd7AhTpVBbWozrRTw25NBYfTRmVWLGIymeAzAWB8NkV1F4v2aCLxbFY63VB0rw/BqeQheLA3Ck3p/3K3ywsV8B7T7jYGzyiAYT5wI/xkzERASj1mhifAPScSMWYmwmupDjCynwdU7ot/ZIwQe3iHMtRt/XiCs/2FVVCwFQZqTBPREAbSnEsGmBNLfksCELRmAwjaZWhjTdC6kxe+zALiwHsiJHIAeeWRgiADQvbiMGnZlgtDiAnxHOpMZwm1pAxbFhPgAjCT0UWUwqhCb6jbS7OCUESVafzAwRECoOl6vCMHL5cF4vmQWHs33w+1KD3Tx7ND8n9dccRz9DfS1teE13R1evsHw8gmBh08opnuFwsJmOplsMoU4TQ/od3Txh5tXYMXfQCFsjmxIMCNtKb30fCbSnETQkkQEG2LQuzGW2YLJ3hxQKMz0lJsZMSN9jALgARQSd1scAgXAlZga6AEnCgEMCBEMup+K2VdFZ1MUxpZU0PUGowq63mAtii4CRTDi2VkVzY0YEQxWGR/WUmWIgvztqjDRdHdlKKOOl0uD8GxRAB7V+eJW+XR0Ztug2WsUHJX/BD11DbhOdYCLqzemuc6Ak4s3HF18YWLhSPQmmxN7R0++o7MXprv751Agpj/nxZi5U+zRmDoSTUlv0JwE0pQgxMZ48BvCyae1EaKG0bDdmw3Qols5BbCfjuxWz42cAujzODtixizRMQ16XINVAjeSHSII2E4h0ND+HNwUhKBdBIJbjfe1JKBvUzx6m+LQQ2sjhUEzIxof10fj4zqqjM82JbKqMLxZESpaEC4Lwosls/Cs3h+P6nxws8wVnZlW2OQ1Ck7Kf4TWOFVMtbSAnZ0TbO2cYGPrBNupbsTQ2IZo6RgSmynOgqkO04m7u2/Yzw6E/kL6Rdck2BjfRZoTQdbFCLAmCv31AeTdskDC7GHdlUkItRfaXA7Mnxv/EgQOBFXEzgymGBAMDBEIQkObFqcIOqVlYIh2izB5wQY3hUHV28OpgoEhAjEAY3U43jWE4e3KULxZSWEE4/WyYLxcGsgsCJnrttTMwI0SF3RkWJFmbwU4K/+BTBitTKyNDIiFuRUsLKyJhYUNsZ7igMkGZkRdQ5dYWEyBva3jxxmeM5jdJ/SzI2wbf55hQCWrIleT9TEgK8L4WBSIDyWu5HmNF/VyQpvI2MvuTNGWvicL+HNFGz9QIjuiSmB+noKg2cDmA6cIak0MDMaeWEWIgRDZUzwzg2JUQUFsjBWzqCiRKqgyaF6wAT4AY0WICMbSIGb/1cslgXi+yB9P5vviQbU3bpRMw9kMS7TMUCLTlX8PVcUfYKynRQz1DYiRoTGMjEyJubk10dMzwLjxan3mpmawt7E+c6Z+4BLqP+9Z8dyHPgUVXj5knhcElV69/XNcyNMkE3I3357QOT/j6zvSCdmZDuzKABgwFA5X7GNsJnAQQI9fMEGdDuyYDUKn0bSYFTcFkcrmBGdNSeC3JqK/lc6eEgZyoneTmCIYVYjZ07pIBsSH1RF4T1WxKgzvGkLxdmUI3qwIwRuqDDEYLxYHMKf9PKnzwf0qLwqEnEm3JG0zR8N7zH8Q5ZHfCSdpjIeejjaZqKtLJulNhLGRCdHW0uGrqozFFHOTN9McbJnLbfxsu03+nLYehTh83ZNkeuBTvCFexxr03vQf3385wUDY35ZEG0jIdraozVAwAyVqOnOffk+8aC6wEGg+YFuaaNf51lSQLSkQbk5mMkKUE6w1NVMQVBFcRnDWFM3mBFVEJJMTH9ZGMFPazyBoeFOLojBEFsXAWBIIqgwK43m9P54u8MPj2hm4P88DN4pdcDbdEpv9VchMlf/A9/KyRGvcaIHmhPHQVFODtoYGMZg8STBJR1uoq6F2083Rmrmw2d/0Qv7cZ0S63cYpPfNS2XfXYzRO2Q7F8YAJdMFF6JE5siWVUHthtnCxRtMtfwAC13xuZGdLzM9tTQO2cCDEYLSxqmAUwYEQQRBlBAuCDWtqS7QohAEQVBUrv1DFsiC8XhqIV0tozRLBWOTPqOPpfF88qvHG3bke5EaJCzmXZUPaA8YiWv23HxWHDO5RVfoBqqOVhKoqo6GmOlZoOEkPtpbGC4y0tYeKNmbRNSj/3Ib9sz3GQWkzGPNtp/NY5+1a37iczXAo621OgrA1UUjakwm2pBCylQVDvZ8CYou7TUem6EGkrXTVLyqqCKboHoD2JAgoiLZE0LUOVQSdOfU0cdlALSmKWdhRFYgDeL86DO8ZW2KtibWntyuCRfa0nAMxiwHxcnHAAIznC2fi2QJfPKmdgYdVXrhb4YYbxdNIV/YUwUbfsVg0TeGsieY4L+WRw298N1Qew4cNE6goKcLCYOLK6mrRZ0R+9hD/awTBnlLKPefpRp5+f0vyO35zPBG0JApJWxJBezLI5mRRc5kmM+r50X1soat9UZEtycxt5typ9mQI2yiMRPBbE9DPgmDCmskG1o7WiG/9oYwN0Ux42xDCZAPT/JXB4CC8WRYEWq+X0eCmigjAy0X+TL1YNBMUxPMF9IQ4X9DseFTthQfzPMid8unkWpETOZlswm+fpYZN4abt9L2PU1AoUVQaCzUdU1jYTDvk6Oj4LX38F4XBQaDnaIEn+s8zl+rjhn7ckHCpZ300+E2xAmFzPEhrIkEbrSSgnRZd2dP6fJtQaO1JTFE1UAgMiFYRCD6niqZYZvpKV9efqCJoJqwWD+VgvKZb/Je1LBCv2RIBEKmBAUEVscgfL+opCD+mni3ww7P5FMYM0YWcqzxxv9INt0qmke4cWxyJmSg4HG+MnSmOPNoHXTX17ToTrWHnFk0/H1L9d4PBQaEjB+VVQ8yanjWR6Fkfxe9vjIGgKY6Q5nhCmhMoHJBWdmxLBKHFPJZIbW6gBK0JELQkgN8SL1IFXUdQGAMzJnbKyqyo6cxItKW/pFs6azncbXqfKfZ7nBJeLqaKmMmAeMGBmO+LZ/N98KzOh7EpelXtR1WeeFDpRu6UupBr+Q6kK82MHI83xLHUKX3Hs9wNfvjhhyFGE01um06ZCY/ALMwMSmHOxfrZ9uqKN/l/chvsfq7na+I9+9ZECd6vCCF9ayJI//ooImiMhqAplgiaYiFsjgNVDlMtdEyAsEVUFIKgOZ4pfnM8+Jti0U9BNNHQjqaQ8XEdnSmF4+2qULxaIdrpR4/kPasPwFM6I6K+v5CeEO2H53SrZ4sqgKmFfqAAGAgL/PB8AQdhBp7WzcDTWm88qfbG42ovDgbulrrgZqEDuZRpjc40M2FHmhUOJ9l10f6Ya2u72Vi79bkGZAmD4oqfu3kHadPH/y52JQ6MO7H4ytKSb98sDb/0cWkg3i8NEvauCkXfmnAGDH9DFPiN0eBvjBFVUyy1tj9bFETfxhj0UhCN0YxFfWQtik5VX1FbWuSLV/M98bzWA89r3fC8Zjqe1HjgYe0MZppKLefpfFo+oi1ffKyjSqAARBCe1njhSbUXnlR54vE8Dzya54EHFW64V+pCbhU6kKs8G9KdaYXO2Zb8jhQrnMh0jaXv38XOpWH6jHjMSqhEQETuAe1hw7iPs/28C0DxZv/U29yi8dWSiNB39QF4Pd+X/2FJAD6tCCI9DVQx4aR/XQSY2hCF/g3RomqMRv/GmIGiIPoao0UwNkTh07pIMDBWheINXTcsC8DLhTNwfUEETi9Mx6GFPBysy8TJuVG4UeGJJ3On4WGVB7OF0y39CW12rTez9VMFPK3hiv0ehVDlwYB4PNcdDyvd8KDcFXdLnHGrYCqu86aQK9nWuJBhLehMNMXpZNsbOMP72mvaNEP/WYmfQpKq+CGJlXD1CMugvfrFzuf9qWA283hfP60JOPSyygsvq7373y30w4fF/uTT8kD0rAwmPYxqwqhy0Lc2An3rIkW1PhK9YsWB+EBnURQGXcAtC8CD+iDsXVGFdevasWzdDixYuQ3zFrehonYDasuqsbswFA/KpzFB/GCeOx4NwPFkFEBV8KTKgymqhsdzPfCo0o35LwwPy11xv3Qa7s5xwu3CqbiRa0uu5UxBd6a1sCPBRNCRZInr2VMd9Kb5DY6MnN0dnjwXYam18PRLeOBiZ/c97dHfdEX+UyFwz+MO9d6oCtJ+Mdf79fPy6Xgx143/tsYL7+r9CFXMx2WB5NPKYPQ0hIDC6Vkdht7VYehZQyucGT+tDcfHNeH4wMyiRCvpN0v98WjBTGxZvRRN249hQ/sBLFm7HVWLW1Bc04i8ijXIKl2N5Oz52JQ5C4/KHXGnYjoD5iHd8ue64xEdKSTmNoUgAkEVQUHcK3HGnTlOuFXoiBsFU3GVZ0+6M61JZ5yh4Fz0ZJxPMZ0bllahmZRaejkheyEi0hd+8piZBEfH6Ym0B3/37OBAiI/72WnwjZIZMx8VueBxkaPweZmL8FWVO97UeZN39SLFfFg6Cx+XB+LjiiB8XBmMjw0hA/WhIQTvVwbjHV0/LBOtnl8v8MSB+ZlY07oPm7bsw+I1W1BZvwlFVeuQXdZAT8FBUk49YjIXIioyHSeyHHC/1Am3Sl1xt9wV9yrccJ8Cov+PpJyWKx6UueJ+mQsLwwn3ip1wt8gBdwrscItnRW6kGZJL0drkdLgediW7PC8oqF2elr/4TVLuEgQlzv00zSsKU+1c14i//3/I21yeXMmbnnI31wEP8+yFT4qdhC8qXPGq2oO8mT8D7xb6kneLZuL9En+8XxoACuj9ssCBerdsFt4sDcCrxf54tdAH9+d5YmlVJRY0tKB2yXrMqV6FvPJlyJqzCKm58xGbUYWIlAqEJ5bANSAD9SEOeFJojrtz7ECvtP243AFPyh3ZcsKTcic8plXmJPpfJaWO5F6xI24WOJBLvKnkVIYzdqV5Yk1aGCqz80la/mJ+Qu4yhCZXCd380wS2U2fAxsquId7N7Y8shL9/kP+1rYHbvdKd45J+J9sW93Ns8LBgKv9ZqTNeznUjr6o9yZs6b7xZ4EPeLvTF23o/UEBv2XqzyA+v6v3wYoEPXtV64EKpNwoLisErnY+sAnraTSUSM8sQl1aCyKRChMTmwj8iBz4hGbB3i0SA1ywsL8jEqtJCrK6Yg7VzS5haU1mC1RWlaKgsw4qKUiwrKyWLS8uwsKQctcUVpKJoHgrya0lm7nySkLtUGJ69gh+YsoDvF1EocPaKxZSpPrCwsH9jbW6dxH146R8qN/4SFHrsBOwBmXMZjmE3063772VY4H6ubf+TOY54VjqNPK+YTl5WeeBljSd5VeuN13XeeD1/Bl7RqvPGizpvPK32xMt5rjiZ7474pFREJ2UjPDYDwdFpmBWewp5YEA8PvxhMnxGJaZ7hsLKfAfvpYYjOqEV8Tj3ieYsQn7MIcdTSshciKmM+ImbXIjS1GiFJ80hgfAX8Y8vIzOgSzIgoJJ7BPL7brHShi3csHFwCYWPrBktLB5iZWD0yMzZd6GhjqiT2vv9v/c91LlNOZTg53EizenQ71RR3sqz6H+bbExEYZ/K8wpU8nzedvJjnjhfVHuRFtQeeV3ngKQ3gyul4Vu6M0zlOCAoMgrd/OLx9Q+A+IxhuXkFw9QzENPcAOE33h4OLH+ydZ8DSxgV6RrYwsXWH+VRvmNt7M6OZvRdM7Wh5EpMpHjCe4kaMbKYTQ2sXYmg5DRPNHAX6pvawMJ8CM3NrmJtZPTc3NT9nYmjcaG5gEOVgbTyKA8EG+D+2TXEv9stxP3tw/2jStPEXkyyPXU8yxu00U8E9no3gYYEdHhc54HGJE3laNg1Py13wtMIFTypc8bic/hskJzwsdsQ13hSEeU6DnbMHnJzdMNXJAw7OnnBw9sJUZ0/YO7nDbup02Nq7wNTCDp7meoifOhGxDgaIdzRAoqMhkpwNkeJsSFKcDZDmrE9mO+uTDKdJyHTUI5lTtfvmOOtgnrdRT4CDWbamrq6FlYGejo0Rtxtd9K7oiQr/JyzqSwhf3uegtKXM+vZsglXN1Xgjcj3RALfTzfvv8qzJg3xbPCycSh4VOZDHxY54VOxIHs5xxP0ie9zJt8PjfGvUBFhA38IWtlPsMMV2KqbYOmKKnbOobB1hO2UqA2OKqQn2zdLAzTgdXI7VY/6Z2M3ESeRW4iTcpmPCRHIrXg83Y3RxLUKTfzVMTXAtUhvXk00uv8h3MP/ytX/11Vf//k8DQvzNNYod5D8eb+N+Psbw1tXYybiRbCC4mW7Ov5tjjXu5Nrifb0vuF9jhfoEduZdnS27RfyKZbYWLKSYIsjeEpr4pTEzMYWluCStLK6boiQYGJhbQNzJF9XQtXAhTw6kwbXRG6OBcpA7pitRBV6QuOR+hQ85HaONcmBbpCFbv6whWx/moSeR0ktWytsIgedHrdfsNe8rOf15hVHThT/H38U91mwl79vq/21Jcvjsba7boQuREXIudiOtJhvxb6WbC25kW5E62FW7nWFMQ5GaWJbmabkZupBnjTMxEkuKgB3ODSdCZpA/tyYbQmWyIyfoGcDGbiEXumuRcmBrOhGuSTgoiSpd0RevifLQumNsROqQzTEtwLlSDnI/UxblY48unUu3cuSb/U9gR92b+JyMX9vRnjkdZ256LmHziUoQuLkfr4WqCgfB6qjH/epoJuTHbFNdnm+JaqjG6Ew3I5fhJ5EqsDtk1S5PUu2ug1FmTVDirk1UeajgSOIGcD1cnZ8K1SEeUDumK0cP52Ik4HzORnI/RE3RF6fDPRWjhYpQuzsXov+9MtijcyfNlrk1CLxnyLwuDA0ctjDvyeCw+/o8nokwizobpXboYro3uSG1ciZvYdzlBv+9yooHgcqI+uZQwmTYXnVG6uBClRbojNciFcDVyPmwCOR+mRs6GaeB0uBY6o3RwjioiRk94LlqPfz5at/dClA45F6mD87GT356JNVvTlT5tPPc6uE8Vc/f/5UduEUkbcaRk1reHQw1jO8N0T50L1cKFcE1cjtbBhSgd2lhagq4oXSG1o44IbZyN0MLZcE1RRWiRjkhtQWeUNv9cpE7/hSgdQXe0Nj7NQ2AAAAFMSURBVM0OXIzVf9IRY7zieJLTRK7hzBHP/7w0OHf/1/GLDoiD2RY9Y9D+oInTO8MnruwI1np0NkgdF8M0cCFcA+fC1NERpkGYCtcUdoRpCM+GaTAK6YrQxMVILXRFaKMjQlfQFWtw5EyMcdqe2Clq3J+jC1Zulc099uv4FzpAG/UjCwH+bW+k+fcnwoxcT4dMqjkVpH38RKDGk45g9Z6uUI2+rlANfleoRn9XuGbv6VCtd6dCda6cjZjYcjbWKP5kvJVOY4jbwAf3aW5xe6T/wp//9eG/1AEKhmngF9fApUcn98R6yR+LspxwIsbC7GS0kf3JKDOb0/HmeqfTLBSOVcZzO/sGfjWjiH/26evAu/0FblA4zATgJzaVPp8qQdwCf4GX+a/7J5iG83j/TiFxRZtPp630e/+6nfn1nf/agV878GsHfu3Av2oH/h/ObEZliulvQwAAAABJRU5ErkJggg=="/>
                </defs>
              </svg>
              <div class="flex flex-col space-y-3">
                <span class="text-lg font-light">پشتیبانی آنلاین</span>
                <span class="text-sm opacity-50 font-light">ساعت 8 الی 18</span>
              </div>
            </div>
            <div class="bg-white rounded-xl flex items-center justify-center gap-5 py-5" style="box-shadow: 0 0 50px 0 #B0B0B040;">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="54" height="54" fill="url(#pattern0_2243_15012)"/>
                <defs>
                  <pattern id="pattern0_2243_15012" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_2243_15012" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_2243_15012" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
              <div class="flex flex-col space-y-3">
                <span class="text-lg font-light">تضمین کیفیت</span>
                <span class="text-sm opacity-50 font-light">امکان مرجوع کردن کالا</span>
              </div>
            </div>
            <div class="bg-white rounded-xl flex items-center justify-center gap-5 py-5" style="box-shadow: 0 0 50px 0 #B0B0B040;">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="54" height="54" fill="url(#pattern0_2243_15013)"/>
                <defs>
                  <pattern id="pattern0_2243_15013" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_2243_15013" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_2243_15013" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
              <div class="flex flex-col space-y-3">
                <span class="text-lg font-light">پرداخت ایمن</span>
                <span class="text-sm opacity-50 font-light">تمام پرداخت ها قابل اعتماد</span>
              </div>
            </div>
          </div>
          <hr>
        </div>

      </div>
    </div>
    <div class="md:hidden">

      <!--  Search  -->
      <button class="flex w-full mt-3 items-center relative" @click="showSearchModal = true">
        <span class="w-full h-12 p-4 border-none bg-[#F4F4F4] rounded-lg"></span>
        <span class="font-light absolute opacity-50 right-4 pointer-events-none transition-all duration-200 peer-focus:opacity-0 peer-checked:opacity-0 peer-valid:opacity-0">جستجوی محصول...</span>
        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute opacity-50 left-4">
          <circle cx="6.38251" cy="6.38251" r="5.63251" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10.7957 13.4585C10.6083 12.6246 11.4856 11.9552 12.2404 12.356L13.689 13.1252C14.3329 13.4672 14.4063 14.3611 13.8267 14.8034L12.7377 15.6344C12.1581 16.0767 11.3153 15.7701 11.1554 15.0587L10.7957 13.4585Z" fill="currentColor"/>
        </svg>
      </button>

      <Transition name="slide-fade-bottom">
        <div class="fixed flex flex-col inset-0 bg-white z-30 p-4" v-if="showSearchModal">
          <div class="flex items-center gap-1">
            <div class="flex-1 flex items-center relative">
              <input type="text" class="form-input w-full h-10 p-4 pr-10 font-light text-sm border-none focus:ring-[#9b9a9a] bg-[#F4F4F4] rounded-lg peer" required>
              <span class="absolute font-light text-sm opacity-50 right-10 pointer-events-none transition-all duration-200 peer-focus:opacity-0 peer-checked:opacity-0 peer-valid:opacity-0">جستجو ...</span>
              <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute opacity-50 right-4">
                <circle cx="6.38251" cy="6.38251" r="5.63251" stroke="currentColor" stroke-width="1.5"/>
                <path d="M10.7957 13.4585C10.6083 12.6246 11.4856 11.9552 12.2404 12.356L13.689 13.1252C14.3329 13.4672 14.4063 14.3611 13.8267 14.8034L12.7377 15.6344C12.1581 16.0767 11.3153 15.7701 11.1554 15.0587L10.7957 13.4585Z" fill="currentColor"/>
              </svg>
            </div>
            <button @click="showSearchModal = false">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M14.8477 24.748L24.7472 14.8486" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M24.7472 24.7491L14.8477 14.8496" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </button>
          </div>

          <hr class="my-4">

          <span>جستجو های محبوب</span>
          <ul class="flex items-center gap-4 mt-4 flex-wrap">
            <li class="px-4 border rounded-full py-1 w-min text-nowrap opacity-70">
              <NuxtLink to="/market?search=زعفران-نگین" class="text-nowrap">زعفران نگین</NuxtLink>
            </li>
            <li class="px-4 border rounded-full py-1 w-min text-nowrap opacity-70">
              <NuxtLink to="/market?search=زعفران-پوشال" class="text-nowrap">زعفران پوشال</NuxtLink>
            </li>
            <li class="px-4 border rounded-full py-1 w-min text-nowrap opacity-70">
              <NuxtLink to="/market?search=زعفران-پاکتی" class="text-nowrap">زعفران پاکتی</NuxtLink>
            </li>
            <li class="px-4 border rounded-full py-1 w-min text-nowrap opacity-70">
              <NuxtLink to="/market?search=پسته-فندقی" class="text-nowrap">پسته فندقی</NuxtLink>
            </li>
            <li class="px-4 border rounded-full py-1 w-min text-nowrap opacity-70">
              <NuxtLink to="/market?search=پسته-کله-قوچی" class="text-nowrap">پسته کله قوچی</NuxtLink>
            </li>
          </ul>
        </div>
      </Transition>

      <div class="my-2"></div>

      <div class="overflow-hidden -mx-4 z-[2]">
        <!--  Banner   -->
        <GCarousel :banners="activeTemp.mainBanners" :show-arrows="false"/>
      </div>

      <div class="w-full grid grid-cols-4 mt-5 md:-mt-20 z-[3] relative gap-4">
        <NuxtLink to="/market" class="rounded-xl border hover:border-t-transparent hover:border-x-transparent transition-all duration-200 hover:-translate-y-1 hover:border-b-2 hover:border-[#FB7511] w-full h-full flex flex-col items-center justify-around gap-2 py-4">
          <img src="~/assets/images/categories/saffron.png" alt="saffron" class="max-w-[35px]">
          <span class="text-xs font-light">زعفران</span>
        </NuxtLink>
        <NuxtLink to="/market" class="rounded-xl border hover:border-t-transparent hover:border-x-transparent transition-all duration-200 hover:-translate-y-1 hover:border-b-2 hover:border-[#FB7511] w-full h-full flex flex-col items-center justify-around gap-2 py-4">
          <img src="~/assets/images/categories/pistachu.png" alt="pistachu" class="max-w-[35px]">
          <span class="text-xs font-light">پسته</span>
        </NuxtLink>
        <NuxtLink to="/market" class="rounded-xl border hover:border-t-transparent hover:border-x-transparent transition-all duration-200 hover:-translate-y-1 hover:border-b-2 hover:border-[#FB7511] w-full h-full flex flex-col items-center justify-around gap-2 py-4">
          <img src="~/assets/images/categories/advieh.png" alt="advieh" class="max-w-[35px]">
          <span class="text-xs font-light">ادویه</span>
        </NuxtLink>
        <NuxtLink to="/market" class="rounded-xl border hover:border-t-transparent hover:border-x-transparent transition-all duration-200 hover:-translate-y-1 hover:border-b-2 hover:border-[#FB7511] w-full h-full flex flex-col items-center justify-around gap-2 py-4">
          <img src="~/assets/images/categories/dried-fruit.png" alt="dried-fruit" class="max-w-[35px]">
          <span class="text-xs font-light">میوه خشک</span>
        </NuxtLink>
      </div>


      <!--  Discounts  -->
      <div class="mt-10 flex flex-col items-stretch overflow-hidden">
        <div class="flex items-center justify-between">
          <strong>تخفیف های <span class="text-brandOrange">جی پی</span></strong>
          <NuxtLink to="/market" class="flex items-center gap-1 text-[#8D8D8D]">
            <span class="">مشاهده همه </span>
            <div class="w-10 h-10 rounded-full bg-white border border-[#818C92]/20 grid place-items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="#09090B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-5" v-if="!loading">

            <GCard2Mobile v-for="product in firstItemsSection.slice(0,4)" :product="product" :key="product.id" />

        </div>
        <div class="flex gap-4 my-4" v-else>
          <div class="relative min-h-[150px] flex flex-col justify-between animate-pulse min-w-[150px] rounded-xl transition-shadow duration-300 shadow-xl" v-for="i in 3" :key="i">
            <div class="bg-gray-200 h-1/2 rounded-t-xl"></div>
            <div class="p-3 flex flex-col h-1/2 justify-between">
              <div class="w-3/4 rounded-md bg-gray-300 h-1"></div>
              <div class="w-1/2 rounded-full bg-gray-300 h-1"></div>
              <div class="w-1/3 rounded-full bg-gray-200 h-0.5"></div>
              <div class="flex items-center mt-4 gap-4">
                <div class="flex-1 rounded-md bg-gray-300 h-4"></div>
                <div class="w-1/4 rounded-full bg-gray-200 h-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--  Top Sellers  -->
      <div class="mt-10 flex flex-col items-stretch overflow-hidden">
        <div class="flex items-center justify-between">
          <strong>محصولات پرفروش</strong>
          <NuxtLink to="/market" class="flex items-center gap-1 text-[#8D8D8D]">
            <span class="">مشاهده همه </span>
            <div class="w-10 h-10 rounded-full bg-white border border-[#818C92]/20 grid place-items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="#09090B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-5" v-if="!loading">

            <GCard2Mobile v-for="product in secondItemsSection.slice(0,6)" :product="product" :key="product.id" />

        </div>
        <div class="flex gap-4 my-4" v-else>
          <div class="relative min-h-[150px] flex flex-col justify-between animate-pulse min-w-[150px] rounded-xl transition-shadow duration-300 shadow-xl" v-for="i in 3" :key="i">
            <div class="bg-gray-200 h-1/2 rounded-t-xl"></div>
            <div class="p-3 flex flex-col h-1/2 justify-between">
              <div class="w-3/4 rounded-md bg-gray-300 h-1"></div>
              <div class="w-1/2 rounded-full bg-gray-300 h-1"></div>
              <div class="w-1/3 rounded-full bg-gray-200 h-0.5"></div>
              <div class="flex items-center mt-4 gap-4">
                <div class="flex-1 rounded-md bg-gray-300 h-4"></div>
                <div class="w-1/4 rounded-full bg-gray-200 h-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <InstagramHero />

      <!--  Blog Posts  -->
      <section class="w-full mt-16" v-if="activeTemp.blogPreviews.length > 0">
        <div class="flex items-center justify-between">
          <strong>محصولات پرفروش</strong>
          <a :href="BLOGS_URL" class="text-[#8D8D8D] hover:text-[#4C4C4C] transition-colors duration-200 flex z-10 items-center gap-1">
            <span>مشاهده همه</span>
            <div class="w-10 h-10 rounded-full bg-white border border-[#818C92]/20 grid place-items-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="#09090B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
        </div>

        <div class="w-full mt-5">
          <ul class="w-full flex flex-col gap-4">
            <blogs-preview v-for="p in activeTemp.blogPreviews" :preview="p" :key="p.id" />
          </ul>
        </div>
      </section>

      <!-- Support -->
      <div class="flex mt-12">
        <div class="w-full">
          <div class="w-full flex flex-col items-center py-16" style="background-image: url(/images/bg2-mobile.png);background-size: 100% 100%; background-repeat: no-repeat">
            <div class="w-[60px] h-[60px] bg-[#3ACC3E] opacity-70 grid place-items-center rounded-full">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8561 14.1495C18.3411 19.633 19.5854 13.2892 23.0778 16.7791C26.4446 20.145 28.3797 20.8194 24.114 25.084C23.5796 25.5134 20.1847 30.6796 8.25383 18.752C-3.67853 6.823 1.48468 3.42461 1.91421 2.89043C6.19032 -1.38596 6.85306 0.560401 10.2199 3.92633C13.7123 7.41768 7.37115 8.66607 12.8561 14.1495Z" fill="white"/>
              </svg>
            </div>
            <div class="mt-5 w-3/4 mx-auto flex items-center justify-between">
              <div class="flex flex-col gap-3 items-center">
                <strong >لذت بی نظیر <span class="text-[#EF2626]/80">زعفران</span> را با ما تجربه کنید!</strong>
                <span class="text-xs font-light opacity-50 text-center">شما می توانید با پشتیبان ما تماس بگیرید و هر گونه سوال یا مشکلی را با ما در میان بگذارید.</span>
              </div>
            </div>
            <div class="mt-9 flex flex-col items-center w-max space-y-6">
              <div class="flex flex-col space-y-2 items-center">
                <strong class="opacity-50">ساعات پاسخگویی تلفنی</strong>
                <span class="text-xs font-light opacity-50">شنبه تا چهارشنبه ساعت 8 تا 18</span>
              </div>
              <div class="flex flex-col space-y-2 items-center">
                <strong class="opacity-50">شماره تماس</strong>
                <span class="text-xs font-light opacity-50 text-right" dir="ltr">051 - 52329059</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="my-12">
        <div class="flex flex-col gap-4">
          <div class="bg-white rounded-xl flex items-center justify-center gap-8 py-5" style="box-shadow: 0 0 50px 0 #B0B0B040;">
            <img src="~/assets/images/icons/fastDelivery.png" alt="Fast Delivery" class="w-1/5">
            <div class="flex flex-col space-y-3 w-1/2">
              <span class="text-lg font-light">ارسال سریع</span>
              <span class="text-sm opacity-50 font-light">تحویل تا 48 ساعت کاری</span>
            </div>
          </div>
          <div class="bg-white rounded-xl flex items-center justify-center gap-8 py-5" style="box-shadow: 0 0 50px 0 #B0B0B040;">
            <img src="~/assets/images/icons/support.png" alt="Support" class="w-1/5">
            <div class="flex flex-col space-y-3 w-1/2">
              <span class="text-lg font-light">پشتیبانی آنلاین</span>
              <span class="text-sm opacity-50 font-light">ساعت 8 الی 18</span>
            </div>
          </div>
          <div class="bg-white rounded-xl flex items-center justify-center gap-8 py-5" style="box-shadow: 0 0 50px 0 #B0B0B040;">
            <img src="~/assets/images/icons/guarrany.png" alt="Guarranty" class="w-1/5">
            <div class="flex flex-col space-y-3 w-1/2">
              <span class="text-lg font-light">تضمین کیفیت</span>
              <span class="text-sm opacity-50 font-light">امکان مرجوع کردن کالا</span>
            </div>
          </div>
          <div class="bg-white rounded-xl flex items-center justify-center gap-8 py-5" style="box-shadow: 0 0 50px 0 #B0B0B040;">
            <img src="~/assets/images/icons/securePay.png" alt="Secure Pay" class="w-1/5">
            <div class="flex flex-col space-y-3 w-1/2">
              <span class="text-lg font-light">پرداخت ایمن</span>
              <span class="text-sm opacity-50 font-light">تمام پرداخت ها قابل اعتماد</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type {ProductFilterData} from "~/models/product/productQueries";
import {BLOGS_URL} from "~/utilities/api.config";
import {GetProducts} from "~/services/product.service";
import {GetActiveTemplate} from "~/services/mainPage.service";
import type {DataTemplateDto} from "~/models/mainPage/dataTemplate";
import InstagramHero from "~/components/InstagramHero.vue";

const showSearchModal = ref(false);
const loading = ref(true);
const firstItemsSection:Ref<ProductFilterData[] | undefined> = ref([]);
const secondItemsSection:Ref<ProductFilterData[] | undefined> = ref([]);

const toast = useToast();
const router = useRouter();

const { data: result, pending,error } = await useAsyncData("GetActiveTemplate", () => GetActiveTemplate());
if(!result.value?.isSuccess){
  if(process.server)
    throw createError({statusCode: 500, statusMessage: 'Server Error'});
}

const activeTemp:Ref<DataTemplateDto> = ref(result.value?.data!);

const utilsStore = useUtilStore();

const breakpoints = ref({
  // 700px and up
  500: {
    slidesPerView: 2.1,
    snapAlign:'start',
    dir:'rtl'
  },
  // 700px and up
  1000: {
    slidesPerView: 3,
    snapAlign:'start',
    dir:'rtl'
  },
  // 1024 and up
  1024: {
    slidesPerView: 3.7,
    snapAlign:'start',
    dir:'rtl'
  },
  // 1800 and up
  1800: {
    slidesPerView: 4.7,
    snapAlign:'start',
    dir:'rtl'
  },
});
const commentsBreakpoints = ref({
  // 700px and up
  700: {
    slidesPerView: 1.7,
    dir:'rtl'
  },
  // 1300px and up
  1300: {
    slidesPerView: 2.1,
    dir:'rtl'
  },
  // 1700px and up
  1700:{
    slidesPerView: 2.7,
    dir:'rtl'
  },
});
const mobileBreakpoints = ref({
  // 300 and up
  300: {
    slidesPerView: 2.2,
    dir:'rtl'
  },
  // 380 and up
  380: {
    slidesPerView: 2.5,
    dir:'rtl'
  },
  // 430 and up
  430: {
    slidesPerView: 2.8,
    dir:'rtl'
  },
});

onMounted(async ()=>{
  window.scrollTo(0,0)

  loading.value = true;

  const firstResult = await GetProducts({pageId:1,take:7,minQuantity:5,orderBy:activeTemp.value.firstItemSection,justWithDiscount:true});
  firstItemsSection.value = firstResult.data?.data;
  const secondResult = await GetProducts({pageId:1,take:7,minQuantity:5,orderBy:activeTemp.value.secondItemSection});
  secondItemsSection.value = secondResult.data?.data;

  loading.value = false;

  if(utilsStore.isMobile())
    setInterval(moveBanner,3000);
})

const banners = ref();

const moveBanner = ()=>{
  if(!process.client) return;
  const banner = banners.value?.firstChild;
  if(banner === null || banner === undefined) return;
  banner.style.transitionDuration = "700ms";
  banner?.classList?.add("scale-105");
  banner?.classList?.add("opacity-0");
  banner?.classList?.add("-translate-y-4");
  setTimeout(()=>{
    banner.remove();
  },650);
  setTimeout(()=>{
    banners.value.append(banner);
    banner.className = "";
  },700);
}

</script>

<style scoped>

.hover-brand:hover{
  box-shadow: 0 5px 5px 0 #F1482380;
}

.mobileBanner{
  @apply flex flex-col mt-6 w-full relative;
  img{
    @apply transition-all duration-1000 ;
  }
  img:first-child{
    @apply rounded-3xl min-h-[120px] relative;
  }
  img:nth-child(2){
    @apply absolute opacity-80 -z-10 rounded-3xl translate-y-2 min-h-[120px] bottom-0 inset-x-0 scale-x-95 mx-auto;
  }
  img:last-child{
    @apply absolute opacity-50 -z-20 rounded-3xl translate-y-4 min-h-[120px] bottom-0 inset-x-0 scale-x-90 mx-auto;
  }
}


</style>
