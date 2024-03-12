
<template>

  <div class="flex flex-col mx-4 lg:mx-0">
    <div class="w-full mt-8">
      <div>
        <div class="relative flex space-x-2 space-x-reverse items-center w-max after:bg-brandOrange after:absolute after:-bottom-3 after:left-0 after:right-0 after:h-2 after:rounded-t-full px-2 dark:text-white">
          <strong>سبد خرید</strong>
          <span class="grid place-items-center text-sm font-thin rounded-md bg-brandOrange text-white w-4 h-4">2</span>
        </div>
      </div>
      <hr class="mt-3 border-brandOrange/50">
    </div>
    <div class="flex flex-col lg:flex-row items-start gap-4 mt-8" v-if="cartStore.PendingOrder != null">
      <div class="flex-1 flex flex-col p-4 bg-bgWhite dark:bg-gray-800 dark:text-white border rounded-xl border-black/20">
        <div class="w-full flex items-start justify-between">
          <div class="flex flex-col items-start">
            <strong>سبد خرید شما</strong>
            <small class="font-light opacity-70"> {{ cartStore.cartItemsCount }} کالا </small>
          </div>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-90 opacity-50">
              <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
              <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
              <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </button>
        </div>
        <ul class="w-full mt-8 flex flex-col" >
          <li class="w-full flex items-stretch pb-4 mb-4 border-b space-x-4 space-x-reverse last:border-none dark:border-gray-600" v-for="i in cartStore.PendingOrder.orderItems" :key="i.id">
            <div class="w-1/5 flex flex-col items-center">
              <NuxtLink :to="`/product/${i.itemInfo.productSlug}`" class="w-full">
                <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`" :alt="i.itemInfo.productImage.alt" class="w-full rounded-lg">
              </NuxtLink>
            </div>
            <div class="flex-1 flex flex-col items-start">
              <strong class="text-xl mb-6 lg:mt-8">
                {{ i.itemInfo.productName }}
              </strong>

              <ul class="flex flex-col space-y-1">
                <li class="flex items-center space-x-1 space-x-reverse text-sm font-light">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                    <path d="M2.11328 4.95996L7.99995 8.36663L13.8466 4.97996" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 14.4067V8.35999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.62005 1.65336L3.06005 3.62669C2.25338 4.07336 1.59338 5.19336 1.59338 6.11336V9.88002C1.59338 10.8 2.25338 11.92 3.06005 12.3667L6.62005 14.3467C7.38005 14.7667 8.62672 14.7667 9.38672 14.3467L12.9467 12.3667C13.7534 11.92 14.4134 10.8 14.4134 9.88002V6.11336C14.4134 5.19336 13.7534 4.07336 12.9467 3.62669L9.38672 1.64669C8.62005 1.22669 7.38005 1.22669 6.62005 1.65336Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>شیشه ای</span>
                </li>
                <li class="flex items-center space-x-2 space-x-reverse text-sm font-light">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                    <path d="M6.66667 14.6667H9.33333C12.6667 14.6667 14 13.3334 14 10V6.00004C14 2.66671 12.6667 1.33337 9.33333 1.33337H6.66667C3.33333 1.33337 2 2.66671 2 6.00004V10C2 13.3334 3.33333 14.6667 6.66667 14.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.5 5.52666C9.50667 3.75332 6.49333 3.75332 4.5 5.52666L5.95333 7.85999C7.12 6.81999 8.88 6.81999 10.0467 7.85999L11.5 5.52666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>4 گرم</span>
                </li>
                <li class="flex items-center space-x-2 space-x-reverse text-sm font-light">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                    <path d="M14.6667 5.67992V2.65325C14.6667 1.71325 14.24 1.33325 13.18 1.33325H10.4867C9.42667 1.33325 9 1.71325 9 2.65325V5.67325C9 6.61992 9.42667 6.99325 10.4867 6.99325H13.18C14.24 6.99992 14.6667 6.61992 14.6667 5.67992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.6667 13.18V10.4867C14.6667 9.42667 14.24 9 13.18 9H10.4867C9.42667 9 9 9.42667 9 10.4867V13.18C9 14.24 9.42667 14.6667 10.4867 14.6667H13.18C14.24 14.6667 14.6667 14.24 14.6667 13.18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.99999 5.67992V2.65325C6.99999 1.71325 6.57333 1.33325 5.51333 1.33325H2.81999C1.75999 1.33325 1.33333 1.71325 1.33333 2.65325V5.67325C1.33333 6.61992 1.75999 6.99325 2.81999 6.99325H5.51333C6.57333 6.99992 6.99999 6.61992 6.99999 5.67992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.99999 13.18V10.4867C6.99999 9.42667 6.57333 9 5.51333 9H2.81999C1.75999 9 1.33333 9.42667 1.33333 10.4867V13.18C1.33333 14.24 1.75999 14.6667 2.81999 14.6667H5.51333C6.57333 14.6667 6.99999 14.24 6.99999 13.18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>نگین</span>
                </li>
              </ul>

              <div class="mt-4">
<!--            <span class="text-danger text-sm font-light"> ريال تخفیف</span>-->
                <div class="flex items-center space-x-1 space-x-reverse">
                  <strong class="text-2xl">{{ i.totalPrice.toLocaleString() }}</strong>
                  <small>ريال</small>
                </div>
              </div>

              <cart-counter :item="i" />

            </div>
          </li>
        </ul>
      </div>
      <div class="w-full lg:w-1/4 flex flex-col space-y-4" >
        <div class="p-6 bg-bgWhite dark:bg-gray-800 dark:text-white dark:border-gray-700 rounded-xl drop-shadow border flex flex-col items-stretch space-y-4">
          <div class="flex items-center justify-between opacity-70">
            <span class="text-sm" title="بدون اعمال تخفیف ها">قیمت کالاها ({{ cartStore.cartItemsCount }})</span>
            <strong>
              {{cartStore.PendingOrder.getFinalPrice.toLocaleString()}}
              <small class="font-light">ریال</small>
            </strong>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm" title="با اعمال تخفیف ها">جمع سبد خرید</span>
            <strong>
              {{cartStore.PendingOrder.getFinalPrice.toLocaleString()}}
              <small class="font-light">ریال</small>
            </strong>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-dgKala">قیمت در دیجی کالا</span>
            <strong class="text-dgKala">
              4,753,000
              <small class="font-light">ریال</small>
            </strong>
          </div>
          <div class="flex items-center justify-between text-brandOrange">
            <span class="text-sm">سود شما از این خرید</span>
            <strong>
              (30%) 1,753,000<small class="font-light">ریال</small>
            </strong>
          </div>
          <NuxtLink class="bg-brandOrange rounded-lg w-full text-white font-bold text-xl p-4 text-center" to="/checkout/shipping">
            تایید و تکمیل سفارش
          </NuxtLink>
          <hr class="dark:border-gray-600">
          <div class="bg-slate-100 dark:bg-gray-700 p-3 px-6 rounded-lg flex items-center justify-between">
            <div class="flex items-center space-x-1 space-x-reverse">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-amber-500">
                <path d="M7.5 12.1673H6C5.26667 12.1673 4.66667 12.7673 4.66667 13.5006V13.6673H4C3.72667 13.6673 3.5 13.894 3.5 14.1673C3.5 14.4406 3.72667 14.6673 4 14.6673H12C12.2733 14.6673 12.5 14.4406 12.5 14.1673C12.5 13.894 12.2733 13.6673 12 13.6673H11.3333V13.5006C11.3333 12.7673 10.7333 12.1673 10 12.1673H8.5V10.6406C8.33333 10.6606 8.16667 10.6673 8 10.6673C7.83333 10.6673 7.66667 10.6606 7.5 10.6406V12.1673Z" fill="currentColor"/>
                <path d="M12.3195 7.7587C12.7595 7.59203 13.1462 7.3187 13.4529 7.01203C14.0729 6.32536 14.4795 5.50536 14.4795 4.54536C14.4795 3.58536 13.7262 2.83203 12.7662 2.83203H12.3929C11.9595 1.94536 11.0529 1.33203 9.99953 1.33203H5.99953C4.9462 1.33203 4.03953 1.94536 3.6062 2.83203H3.23286C2.27286 2.83203 1.51953 3.58536 1.51953 4.54536C1.51953 5.50536 1.9262 6.32536 2.5462 7.01203C2.85286 7.3187 3.23953 7.59203 3.67953 7.7587C4.37286 9.46536 6.03953 10.6654 7.99953 10.6654C9.95953 10.6654 11.6262 9.46536 12.3195 7.7587ZM9.89287 5.63203L9.47953 6.1387C9.41287 6.21203 9.3662 6.3587 9.37287 6.4587L9.41286 7.11203C9.43953 7.51203 9.15287 7.7187 8.77953 7.57203L8.17287 7.33203C8.07953 7.2987 7.91953 7.2987 7.8262 7.33203L7.21953 7.57203C6.8462 7.7187 6.55953 7.51203 6.5862 7.11203L6.6262 6.4587C6.63286 6.3587 6.5862 6.21203 6.51953 6.1387L6.1062 5.63203C5.8462 5.32536 5.95953 4.98536 6.3462 4.88536L6.97953 4.72536C7.07953 4.6987 7.19953 4.60536 7.25287 4.5187L7.6062 3.97203C7.8262 3.63203 8.17287 3.63203 8.39287 3.97203L8.7462 4.5187C8.79953 4.60536 8.91953 4.6987 9.01953 4.72536L9.65286 4.88536C10.0395 4.98536 10.1529 5.32536 9.89287 5.63203Z" fill="currentColor"/>
              </svg>

              <span>جی پی کلاب</span>
            </div>
            <strong>150 <small class="font-light"> امتیاز</small></strong>
          </div>
        </div>
        <p class="font-light text-sm mx-4 opacity-70 dark:text-white">هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند
        </p>
        <div class="p-4 border rounded-xl px-6 bg-bgWhite/70 dark:bg-gray-700 dark:border-gray-600">
          <div class="flex space-x-2 items-center space-x-reverse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-primary">
              <path d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 8H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 11H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 14H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-sm text-primary">
              ارسال <b class="text-base">رایگان</b> برای خرید های بالاتر از 500 هزار تومان
            </span>
          </div>
          <p class="text-sm mt-2 font-light dark:text-white">با خرید بیشتر از 500 هزار تومان از فروشگاه ما هزینه ارسال به هر کجای کشور عزیزمان را مهمان ما باشید</p>
        </div>
      </div>
    </div>

    <div class="rounded-xl border p-4 mt-8">
      <div class="w-max flex items-center space-x-2 space-x-reverse border-b-2 border-brandOrange pb-2 pl-12 dark:text-white">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
          <path d="M14.6667 8.00004C14.6667 11.68 11.68 14.6667 8.00004 14.6667C4.32004 14.6667 1.33337 11.68 1.33337 8.00004C1.33337 4.32004 4.32004 1.33337 8.00004 1.33337C11.68 1.33337 14.6667 4.32004 14.6667 8.00004Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.4733 10.12L8.40663 8.88671C8.04663 8.67338 7.7533 8.16005 7.7533 7.74005V5.00671" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h5 class="text-xl font-bold">بازدید های اخیر</h5>
      </div>
      <div class="w-full flex mt-8">
        <ul class="w-full flex space-x-8 space-x-reverse flex-shrink-0 overflow-x-auto p-4">
<!--          <li v-for="i in 4" :key="i" class="flex-shrink-0">
            <f-card />
          </li>-->
        </ul>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {SITE_URL} from "~/utilities/api.config";
import {useCartStore} from "~/stores/cart.store";

const cartStore = useCartStore();

</script>