<template>
  <div class="mt-12">
    <Head>
      <Title>سبد خرید</Title>
    </Head>
    <div class="rounded-2xl p-8 bg-[#FAFAFA] flex flex-col items-center">

      <div class="flex items-center w-2/3 mb-12">
        <div class="relative grid place-items-center w-8 h-8 rounded-full border border-brandOrange text-brandOrange">
          <span>1</span>
          <span class="absolute -bottom-full w-max">سبد خرید</span>
        </div>
        <div class="h-px bg-black/10 opacity-40 flex-1"></div>
        <div class="relative opacity-40 grid place-items-center w-8 h-8 rounded-full border">
          <span>2</span>
          <span class="absolute -bottom-full w-max">افزودن آدرس</span>
        </div>
        <div class="h-px bg-black/10 opacity-40 flex-1"></div>
        <div class="relative opacity-40 grid place-items-center w-8 h-8 rounded-full border">
          <span>3</span>
          <span class="absolute -bottom-full w-max">تکمیل پرداخت</span>
        </div>
      </div>

      <!--  GP Peyk   -->
      <div class="w-full rounded-xl border border-opacity-25 p-5">
        <div class="w-3/4 mx-auto grid grid-cols-2 items-center">
          <div class="flex flex-col items-start space-y-4">
            <h3 class="text-3xl font-bold text-brandOrange">جی پی پیک</h3>
            <strong class="text-lg">خدمات ویژه با اشتراک جی پی پیک</strong>
            <base-g-button color="primary" button-type="bg" >
              <span>دریافت این خدمات ویژه</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-125">
                <path d="M14 17L9 12L14 7" stroke="#FAFAFA" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </base-g-button>
          </div>
          <ul class="list-disc flex flex-col space-y-4 opacity-70 font-semibold">
            <li>ارسال رایگان این سفارش و ۳ سفارش دیگر (در هرماه اشتراک)</li>
            <li>مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای بهداشتی)</li>
            <li>امکان ارسال فوری بعضی از کالاها ( رایگان )</li>
          </ul>
        </div>
      </div>

      <!--  Main   -->
      <main class="flex items-start w-full relative gap-8 mt-10">
        <div class="flex flex-col flex-1">
          <!--  Items   -->
          <div class="rounded-xl py-4 px-8 bg-white flex flex-col items-stretch">
            <div class="w-full flex items-center justify-between">
              <strong>سبد خرید</strong>
              <base-g-button button-type="white">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5" clip-path="url(#clip0_769_6316)">
                    <path d="M8.4987 2.125C7.71953 2.125 7.08203 2.7625 7.08203 3.54167C7.08203 4.32083 7.71953 4.95833 8.4987 4.95833C9.27786 4.95833 9.91536 4.32083 9.91536 3.54167C9.91536 2.7625 9.27786 2.125 8.4987 2.125ZM8.4987 12.0417C7.71953 12.0417 7.08203 12.6792 7.08203 13.4583C7.08203 14.2375 7.71953 14.875 8.4987 14.875C9.27786 14.875 9.91536 14.2375 9.91536 13.4583C9.91536 12.6792 9.27786 12.0417 8.4987 12.0417ZM8.4987 7.08333C7.71953 7.08333 7.08203 7.72083 7.08203 8.5C7.08203 9.27917 7.71953 9.91667 8.4987 9.91667C9.27786 9.91667 9.91536 9.27917 9.91536 8.5C9.91536 7.72083 9.27786 7.08333 8.4987 7.08333Z" fill="#09121F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_769_6316">
                      <rect width="17" height="17" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </base-g-button>
            </div>
            <ul class="mt-8 flex flex-col">
              <li class="mx-auto flex items-center border-b last:border-none py-6 border-opacity-30" v-for="i in 3" :key="i">
                <div class="flex flex-col w-2/5">
                  <img src="~/assets/images/product-image.png" alt="product">
                  <!--                <cart-counter />-->
                </div>
                <div class="flex flex-col justify-between flex-1">
                  <strong class="text-2xl">زعفران نگین شیشه ای یک مثقالی</strong>
                  <ul class="flex flex-col space-y-4 my-12">
                    <li class="pr-4 border-r-2 border-brandOrange/50">پروانه بهداشت: دارد</li>
                    <li class="pr-4 border-r-2 border-brandOrange/50">شکل ماده غذایی: کیفی</li>
                    <li class="pr-4 border-r-2 border-brandOrange/50">وزن: 21 گرم</li>
                  </ul>
                  <g-price :price="618000" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!--  Prices   -->
        <div class="w-1/4 sticky top-12 p-6 bg-white rounded-xl flex flex-col space-y-4 items-stretch">
          <div class="w-full flex items-center justify-between">
            <span>قیمت کالاها (2)</span>
            <div class="flex gap-1 items-center">
              <strong>618,000</strong>
              <g-tooman />
            </div>
          </div>
          <div class="w-full flex items-center justify-between">
            <span>جمع سبد خرید</span>
            <div class="flex gap-1 items-center">
              <strong>1,236,000</strong>
              <g-tooman />
            </div>
          </div>
          <hr>
          <base-g-button w-full>
            تکمیل سفارش
          </base-g-button>
        </div>
      </main>

    </div>
    <!--  Popular   -->
    <section class="w-full mt-16">
      <div class="flex items-center justify-between mb-8">
        <h3 class="text-2xl font-black pr-4 border-r-4 border-brandOrange">
          محصولات پربازدید
        </h3>
        <div class="flex items-center gap-2">
          <button :class="['w-8 h-8 rounded-md border border-[#8D8D8D] hover:bg-[#8D8D8D] text-[#8D8D8D] hover:text-white transition-colors duration-200 grid place-items-center ']"
                  @click="$refs.carousel1.next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button :class="['w-8 h-8 rounded-md border border-[#8D8D8D] hover:bg-[#8D8D8D] text-[#8D8D8D] hover:text-white transition-colors duration-200 grid place-items-center ']"
                  @click="$refs.carousel1.prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 17L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <client-only v-if="false">
        <GPCarousel ref="carousel1" :items-to-show="5" class="rounded-xl mt-4">
          <GPSlide v-for="p in 5" :key="p" >
            <!--                  <GCard :product="p" />-->
          </GPSlide>
        </GPCarousel>
      </client-only>
      <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-4" v-else>
        <div class="relative min-h-[380px] flex flex-col justify-between space-y-4 animate-pulse min-w-[250px] rounded-xl transition-shadow duration-300 shadow-xl" v-for="i in 5" :key="i">
          <div class="bg-gray-200 h-1/2 rounded-t-xl"></div>
          <div class="p-4 flex flex-col h-1/2 justify-between">
            <div class="w-3/4 rounded-md bg-gray-300 h-4"></div>
            <div class="w-1/2 rounded-full bg-gray-300 h-2"></div>
            <div class="w-1/3 rounded-full bg-gray-200 h-1"></div>
            <div class="flex items-center mt-4 gap-4">
              <div class="flex-1 rounded-md bg-gray-300 h-8"></div>
              <div class="w-1/4 rounded-full bg-gray-200 h-2"></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import GTooman from "~/components/base/GTooman.vue";
import GPrice from "~/components/base/GPrice.vue";
import GCard from "~/components/GCard.vue";

definePageMeta({
  layout:'new-layout'
})

</script>