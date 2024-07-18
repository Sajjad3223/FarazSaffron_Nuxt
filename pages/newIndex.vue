<template>
<div>
  <div class="h-[105vh] flex flex-col items-center justify-center -z-10 relative " style="background-image: url(/images/home-banner.jpg);background-size: cover;">
    <div class="container mx-auto my-auto flex pt-[100px] flex-col items-center">
      <div class="flex flex-col items-center space-y-12 mr-auto">
        <div class="flex font-light text-5xl flex-col space-y-10 text-white items-center">
          <h2>
            تجربه ای <span class="text-[#FB7511]">منحصر به فرد</span> از طعم <br>
          </h2>
          <div class="flex items-center gap-2">
            <div class="flex flex-row-reverse items-center -space-x-5 space-x-reverse" dir="ltr">
              <img src="~/assets/images/home/saffron.png" alt="saffron" class="border-[5px] border-[#0F0F0F] rounded-full w-12 h-12 object-cover">
              <img src="~/assets/images/home/pistachio.png" alt="saffron" class="border-[5px] border-[#0F0F0F] rounded-full w-12 h-12 object-cover">
              <img src="~/assets/images/home/img.png" alt="saffron" class="border-[5px] border-[#0F0F0F] rounded-full w-12 h-12 object-cover">
              <img src="~/assets/images/home/img_1.png" alt="saffron" class="border-[5px] border-[#0F0F0F] rounded-full w-12 h-12 object-cover">
            </div>
            <h2>
              واقعیِ زندگی
            </h2>
          </div>
        </div>
        <div>
          <h4 class="text-xl text-white font-thin text-center">
            به ازای هرخرید از ما برای خرید بعدی کد تخفیف دریافت کنید <br>
            15% تخفیف برای اولین خرید از جی پی
          </h4>
        </div>
        <button class="bg-[#FB7511] relative text-white gap-2 text-lg rounded-xl flex items-center px-4 py-2">
          <span>خرید</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg class="absolute right-0 translate-x-[120%] translate-y-[200%]"
              width="83" height="23" viewBox="0 0 83 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M82.0716 1.79328C82.3936 1.53283 82.4436 1.0606 82.1832 0.738509C81.9227 0.416422 81.4505 0.366455 81.1284 0.6269L82.0716 1.79328ZM3.49486 0.217378C3.09707 0.101914 2.68099 0.330788 2.56552 0.728583L0.683926 7.21103C0.568462 7.60882 0.797336 8.0249 1.19513 8.14037C1.59293 8.25583 2.00901 8.02696 2.12447 7.62916L3.797 1.86699L9.55917 3.53952C9.95697 3.65498 10.373 3.42611 10.4885 3.02831C10.604 2.63052 10.3751 2.21444 9.97731 2.09898L3.49486 0.217378ZM81.1284 0.6269C64.8499 13.79 49.2183 20.4937 35.8563 20.5603C22.555 20.6267 11.3924 14.1189 3.94294 0.576173L2.62865 1.29913C10.3203 15.2821 21.9671 22.1296 35.8638 22.0603C49.6997 21.9913 65.6546 15.0684 82.0716 1.79328L81.1284 0.6269Z" fill="white"/>
          </svg>
          <span class="absolute right-0 font-thin text-xs opacity-60 w-max translate-x-[130%] rotate-12">
            ماجرای هیجان انگیز رو شروع کن !</span>
        </button>
      </div>
    </div>
    <div class="w-full min-h-[100px] backdrop-blur">
      <div class="container mx-auto flex items-center overflow-x-auto py-10" style="scrollbar-width: none">
        <div class="flex items-center gap-4 shrink-0 w-1/5" v-for="i in 6" :key="i">
          <img src="~/assets/images/home/blog.png" alt="blog"
               class="w-[70px] h-[70px] rounded-lg border border-white/50">
          <div class="flex flex-col space-y-2">
            <span class="text-white text-lg font-light">خواص زعفران</span>
            <a href="#" class="text-primary">مطالعه</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Categories & Products -->
  <div class="my-[100px]">
    <div class="flex items-center justify-between container mx-auto border-b pb-5">
      <ul class="categories">
        <li>
          <button @click.prevent="changeActiveCategory" >پسته</button>
        </li>
        <li>
          <button @click.prevent="changeActiveCategory"  class="active">زعفران</button>
        </li>
        <li>
          <button @click.prevent="changeActiveCategory" >آجیل</button>
        </li>
        <li>
          <button @click.prevent="changeActiveCategory" >میوه خشک</button>
        </li>
        <li>
          <button @click.prevent="changeActiveCategory" >ادویه</button>
        </li>
        <li>
          <button @click.prevent="changeActiveCategory" >باکس هدیه</button>
        </li>
      </ul>
      <NuxtLink to="/market" class="flex items-center gap-2 text-primary">
        <span>مشاهده همه</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
    </div>
    <div class="py-10 flex items-center gap-6 overflow-x-auto overflow-y-visible container mx-auto"
         dir="rtl" style="scrollbar-width: none">
      <div class="bg-white group w-[20%] shrink-0 border hover:shadow-md rounded-3xl p-5 flex flex-col space-y-5 transition-shadow duration-300" v-for="i in 7" :key="i">
        <img src="~/assets/images/saffron-pocket.png" alt="pocket" class="mx-auto max-w-[170px]">
        <div class="flex flex-col space-y-2">
          <span class="font-thin px-3 py-0.5 rounded-full bg-[#FB7511]/10 text-[#FB7511] w-max text-xs">پاکتی</span>
          <span class="text-sm">زعفران نگین 1 مثقالی - 4.38 گرم</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-sm">
            <span>740,000</span>
            <span>تومان</span>
          </div>
          <NuxtLink class="w-6 h-6 rounded-full grid place-items-center bg-white group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-300">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <!-- About Us -->
  <div class="w-full bg-[#C7D6C6] py-[100px] flex flex-col items-center space-y-12">
<!--  style="background-image: url(/images/aboutUs2.png);background-position: 50% 70%;
  background-size: cover; background-repeat: no-repeat; background-attachment: fixed">-->
    <h2 class="text-4xl font-semibold">درباره جی پی</h2>
    <p class="opacity-50 text-center text-xl leading-loose">
      ورود شما را به جی پی، فروشگاه آنلاین خرید زعفران خوش‌آمد می‌گوییم. <br>
      خوشحالیم که هم اکنون در جی پی، دارنده نماد اعتماد الکترونیکی و ارائه دهنده‌ی ضمانت هفت روزه حضور دارید <br>
      به دنیای خاص و شگفت‌انگیز زعفران وارد شوید، از زمین‌های حاصلخیز گرفته تا سفره شما،  نماد تجمل و طعم را تضمین می‌کنیم.
    </p>
    <div class="flex items-center transition-all duration-300 group hover:space-x-5 -space-x-8" dir="ltr">
      <img src="~/assets/images/aboutUs1.png" alt="aboutUs" class="z-[1] -rotate-6 transition-all duration-300 group-hover:rotate-0 max-w-[120px] rounded-xl border-4 border-white">
      <img src="~/assets/images/aboutUs2.png" alt="aboutUs" class="z-[2] rotate-6 transition-all duration-300 group-hover:rotate-0 max-w-[120px] rounded-xl border-4 border-white">
      <img src="~/assets/images/aboutUs3.png" alt="aboutUs" class="z-[3] transition-all duration-300 max-w-[120px] rounded-xl border-4 border-white">
      <img src="~/assets/images/aboutUs1.png" alt="aboutUs" class="z-[4] -rotate-6 transition-all duration-300 group-hover:rotate-0 max-w-[120px] rounded-xl border-4 border-white">
      <img src="~/assets/images/aboutUs2.png" alt="aboutUs" class="z-[5] rotate-3 transition-all duration-300 group-hover:rotate-0 max-w-[120px] rounded-xl border-4 border-white">
    </div>
    <NuxtLink to="/market" class="flex items-center gap-2 text-primary text-lg">
      <span>مطالعه بیشتر</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </NuxtLink>
  </div>
  <!-- Special Offer -->
  <div class="my-[140px] flex flex-col items-center">
    <h2 class="text-4xl font-semibold">تخفیف ویژه جی پی</h2>
    <span class="text-xl mt-5 text-[#0B0B0B]">سه شنبه های آخر ماه شگفتانه جی پی رو از دست نده</span>
    <div class="mt-[60px] relative flex flex-col items-center bg-[#FAFAFA] w-1/2 max-w-[850px] rounded-[48px] border border-[#818C92]/20 pt-[140px] px-[75px] pb-[60px]">
      <div class="absolute -top-6 grid place-items-center">
        <svg class="" width="302" height="147" viewBox="0 0 302 147" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_2033_13966)">
            <path d="M15 17C119.247 12.6453 178.737 12.5645 286.5 17C284.001 32.2578 285.566 43.5257 286.5 62.5L151.5 130L15 62.5C15.738 44.5369 16.9316 34.9634 15 17Z" fill="url(#paint0_linear_2033_13966)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear_2033_13966" x1="9" y1="14" x2="273.5" y2="107.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#EF2626"/>
              <stop offset="1" stop-color="#B71616"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="absolute text-white text-4xl -translate-y-2">50%</span>
      </div>
      <div class="flex gap-12 items-stretch w-full">
        <div class="w-1/3 border rounded-3xl bg-white h-full grid place-items-center min-h-[250px] aspect-square">
          <img src="~/assets/images/saffron-pocket.png" alt="saffron" class="w-3/4">
        </div>
        <div class="flex-1 flex flex-col justify-between">
          <span class="opacity-50">محصول ویژه این ماه</span>
          <span class="font-thin px-3 py-0.5 rounded-full bg-[#FB7511]/10 text-[#FB7511] w-max text-xs">پاکتی</span>
          <span>زعفران نگین / 8گرمی </span>
          <div class="flex gap-2 items-center">
            <span class="line-through text-[#D0D0D0]">265.000 تومان</span>
            <span>230.000 تومان</span>
          </div>
          <div class="w-full grid grid-cols-2 place-items-center">
            <NuxtLink class="text-[#FB7511]">
              مشاهده کالاهای مشابه
            </NuxtLink>
            <button class="bg-[#FB7511] py-3 w-full rounded-2xl text-white">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Instagram -->
  <div class="min-h-screen overflow-hidden relative bg-white flex flex-col items-center justify-center">
    <div class="relative z-[5] flex flex-col items-center space-y-10">
      <h3 class="text-6xl">ما را دنبال کنید</h3>
      <span class="opacity-60 text-2xl text-center">
        برای پیشنهادات ویژه و دستور غذا، <br>
          ما را در اینستاگرام دنبال کنید
      </span>
      <button class="bg-[#FB7511] text-white gap-2 text-lg rounded-xl flex items-center px-4 py-2 relative">
        <span>دنبال کنید</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div>
      <div class="absolute bg-[#606060] rounded-xl -top-5 -right-5 w-1/4 h-1/4"></div>
      <div class="absolute bg-[#524D4D] rounded-xl z-[2] -top-5 right-[15%] w-1/5 h-1/5"
           style="box-shadow: 0 4px 20px 0 #2B2B2B4D;"></div>

      <div class="absolute bg-[#D9D9D9] rounded-xl -top-5 left-[10%] w-1/5 h-1/3"></div>
      <div class="absolute bg-[#606060] rounded-xl z-[2] top-[10%] -left-5 w-1/4 h-1/3"
           style="box-shadow: 0 4px 20px 0 #2B2B2B4D;"></div>

      <div class="absolute bg-[#D9D9D9] rounded-xl bottom-0 right-[8%] w-1/4 h-1/6"></div>
      <div class="absolute bg-[#BFB3B3] rounded-xl z-[2] -right-8 bottom-0  w-1/4 h-1/4"
           style="box-shadow: 0 4px 20px 0 #2B2B2B4D;"></div>

      <div class="absolute bg-[#D9D9D9] rounded-xl bottom-0 -left-6 w-1/3 h-1/3"></div>
    </div>
  </div>
  <!-- Comments -->
  <div class="py-[200px]">
    <div class="container mx-auto grid grid-cols-3 gap-4 grid-rows-10 min-h-[500px]">
      <div class="row-span-6 border rounded-3xl py-6 px-10 flex flex-col justify-between">
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
            <span class="text-lg opacity-70">پویا نوروزی</span>
            <span class="text-sm opacity-30">کاربر</span>
          </div>
          <div class="flex items-center">
            <img src="~/assets/images/star.png" alt="star" class="max-w-5" v-for="i in 5" :key="i">
          </div>
        </div>
        <p class="opacity-40 text-[#070707] text-center px-5 my-auto">
          طعم و عطر بسیار دلچسبی داشت
          همه چیز شگفت اوره .
          حتی زمانی که داخ بسته بند هم بود بوب اون فضا رو معطر کرده بود
        </p>
      </div>
      <div class="row-span-4 border rounded-3xl py-6 px-10 flex flex-col justify-between">
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
            <span class="text-lg opacity-70">پویا نوروزی</span>
            <span class="text-sm opacity-30">کاربر</span>
          </div>
          <div class="flex items-center">
            <img src="~/assets/images/star.png" alt="star" class="max-w-5" v-for="i in 5" :key="i">
          </div>
        </div>
        <p class="opacity-40 text-[#070707] text-center px-5 my-auto">
          طعم و عطر بسیار دلچسبی داشت
          همه چیز شگفت اوره .
        </p>
      </div>
      <div class="row-span-6 border rounded-3xl py-6 px-10 flex flex-col justify-between">
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
            <span class="text-lg opacity-70">پویا نوروزی</span>
            <span class="text-sm opacity-30">کاربر</span>
          </div>
          <div class="flex items-center">
            <img src="~/assets/images/star.png" alt="star" class="max-w-5" v-for="i in 5" :key="i">
          </div>
        </div>
        <p class="opacity-40 text-[#070707] text-center px-5 my-auto">
          طعم و عطر بسیار دلچسبی داشت
          همه چیز شگفت اوره
          واقعا دوسش داشتم.
        </p>
      </div>
      <div class="row-span-6 border rounded-3xl py-6 px-10 flex flex-col justify-between">
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
            <span class="text-lg opacity-70">پویا نوروزی</span>
            <span class="text-sm opacity-30">کاربر</span>
          </div>
          <div class="flex items-center">
            <img src="~/assets/images/star.png" alt="star" class="max-w-5" v-for="i in 5" :key="i">
          </div>
        </div>
        <p class="opacity-40 text-[#070707] text-center px-5 my-auto">
          طعم و عطر بسیار دلچسبی داشت
          همه چیز شگفت اوره .
          حتی زمانی که داخ بسته بند هم بود بوب اون فضا رو معطر کرده بود
        </p>
      </div>
      <div class="row-span-4 border rounded-3xl py-6 px-10 flex flex-col justify-between">
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
            <span class="text-lg opacity-70">پویا نوروزی</span>
            <span class="text-sm opacity-30">کاربر</span>
          </div>
          <div class="flex items-center">
            <img src="~/assets/images/star.png" alt="star" class="max-w-5" v-for="i in 5" :key="i">
          </div>
        </div>
        <p class="opacity-40 text-[#070707] text-center px-5 my-auto">
          طعم و عطر بسیار دلچسبی داشت
          همه چیز شگفت اوره .
        </p>
      </div>
      <div class="row-span-4 border rounded-3xl py-6 px-10 flex flex-col justify-between">
        <div class="flex items-center justify-between w-full">
          <div class="flex flex-col">
            <span class="text-lg opacity-70">پویا نوروزی</span>
            <span class="text-sm opacity-30">کاربر</span>
          </div>
          <div class="flex items-center">
            <img src="~/assets/images/star.png" alt="star" class="max-w-5" v-for="i in 5" :key="i">
          </div>
        </div>
        <p class="opacity-40 text-[#070707] text-center px-5 my-auto">
          طعم و عطر بسیار دلچسبی داشت
          همه چیز شگفت اوره
          واقعا دوسش داشتم.
        </p>
      </div>
    </div>
  </div>
  <!-- Subscribe NewsLetter -->
  <div class="min-h-[70vh] relative bg-white flex items-center justify-center"
  style="background-image: url(/images/badam.png); background-size: 50%; background-repeat: no-repeat; background-attachment: fixed;background-position: 5% 50%">
    <div class="container mx-auto">
      <div class="z-[2] w-1/2 flex flex-col items-start space-y-10">
        <h3 class="text-4xl font-bold">از تخفیف ها جا نمون !</h3>
        <span class="opacity-60 text-xl text-center">
        ایمیلت رو ثبت کن تا از تخفیف های جی پی با خبر بشی!
      </span>
        <div class="flex flex-col w-full space-y-4">
          <label for="email" class="text-sm opacity-80">ایمیل</label>
          <input type="email"
                 class="w-full rounded-full px-5 py-3 bg-[#FAFAFA] border border-[#818C92]/10 placeholder-[#D0D0D0]"
                 placeholder="ایمیل خود را وارد کنید" >
        </div>
        <button class="bg-[#FB7511] text-white gap-2 text-lg rounded-xl flex items-center px-4 py-2 relative">
          <span>ثبت</span>
        </button>
      </div>
    </div>
<!--    <img src="~/assets/images/home/badam.png" alt="badam" class="w-1/2 absolute bg-fixed top-0 left-0"/>-->
  </div>
  <!-- FAQ -->
  <div class="py-[150px] flex flex-col items-center justify-center">
    <div class="container mx-auto">
      <div class="flex flex-col items-center space-y-14">
        <h3 class="text-4xl font-bold">سوالات پر تکرار</h3>

        <ul class="w-5/6 flex flex-col space-y-5">
          <li class="bg-white rounded-2xl py-4 px-5 border border-[#818C92]/20 w-full flex flex-col items-stretch" v-for="i in 7" :key="i">
            <button @click="expandQuestion" class="flex py-2 items-center w-full justify-between">
              <span class="pointer-events-none text-sm"> جی پی چه انواع آجیل و خشکبار می فروشد؟</span>
              <svg class="pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665" stroke="#171717" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="desc max-h-0 transition-all duration-300 overflow-hidden" style="max-height: 0;">
              <div class="h-5"></div>
              <p class="text-xs text-[#3A3A3C]/90">
                کاملا! در صورت تمایل به ثبت سفارش عمده، با ما در gpsaffron.com تماس بگیرید، و ما نیازهای شما را تجزیه و تحلیل خواهیم کرد و بهترین نرخ ها را به شما ارائه می دهیم.کاملا! در صورت تمایل به ثبت سفارش عمده، با ما در gpsaffron.com تماس بگیرید، و ما نیازهای شما را تجزیه و تحلیل خواهیم کرد و بهترین نرخ ها را به شما ارائه می دهیم.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Services -->
  <div class="py-[70px] bg-[#C6C6C6]/10 flex items-center">
    <div class="container mx-auto grid grid-cols-4 gap-5">
      <div class="flex items-center gap-6">
        <div class="w-[75px] h-[75px] border border-[#818C92]/20 rounded-xl grid place-items-center">
          <img src="~/assets/images/icons/support.png" alt="support" class="w-1/2 opacity-30">
        </div>
        <div class="flex flex-col space-y-3">
          <span class="text-lg">پشتیبانی آنلاین</span>
          <span class="text-sm opacity-30">پشتیبانی آنلاین 24/7</span>
        </div>
      </div>
      <div class="flex items-center gap-6">
        <div class="w-[75px] h-[75px] border border-[#818C92]/20 rounded-xl grid place-items-center">
          <img src="~/assets/images/icons/guarrany.png" alt="guarranty" class="w-1/2 opacity-30">
        </div>
        <div class="flex flex-col space-y-3">
          <span class="text-lg">تضمین کیفیت</span>
          <span class="text-sm opacity-30">امکان مرجوع کردن کالا</span>
        </div>
      </div>
      <div class="flex items-center gap-6">
        <div class="w-[75px] h-[75px] border border-[#818C92]/20 rounded-xl grid place-items-center">
          <img src="~/assets/images/icons/securePay.png" alt="secure Pay" class="w-1/2">
        </div>
        <div class="flex flex-col space-y-3">
          <span class="text-lg">پرداخت امن</span>
          <span class="text-sm opacity-30">تمام پرداخت ها ایمن و قابل اعتماد است.</span>
        </div>
      </div>
      <div class="flex items-center gap-6">
        <div class="w-[75px] h-[75px] border border-[#818C92]/20 rounded-xl grid place-items-center">
          <img src="~/assets/images/icons/fastDelivery.png" alt="fastDelivery" class="w-1/2 opacity-30">
        </div>
        <div class="flex flex-col space-y-3">
          <span class="text-lg">ارسال سریع</span>
          <span class="text-sm opacity-30">تحویل تا 48 ساعت کاری</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'new-layout'
});

const changeActiveCategory = (event)=>{

  const categories = document.querySelectorAll('.categories li button');

  categories.forEach(c=>{
    c.classList.remove('active');
  })
  event.target.classList.add('active');
}

const expandQuestion = ($event)=>{
  const questions = document.querySelectorAll('.desc');
  questions.forEach(q=>{
    q.style.removeProperty('max-height');
  });

  let currentDesc = $event.target.parentElement.querySelector('.desc');
  if(currentDesc.getBoundingClientRect().height > 0)
    currentDesc.style.removeProperty('max-height');
  else
    currentDesc.style.maxHeight = '70px';
}

</script>

<style scoped>
.categories{
  @apply flex items-center gap-16;
}
.categories button{
  @apply flex flex-col relative;
}
.categories .active:after{
  @apply inset-x-0 h-1 rounded-t-md bg-[#FB7511] absolute -bottom-full -translate-y-full content-[''];
}
</style>