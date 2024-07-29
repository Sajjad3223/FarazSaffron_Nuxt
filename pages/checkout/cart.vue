<template>
  <div>
    <Head>
      <Title>سبد خرید</Title>
    </Head>
    <div class="mt-5 2xl:mt-12 hidden md:block">
      <div class="rounded-2xl p-8 bg-[#FAFAFA] flex flex-col items-center"
           v-if="cartStore.PendingOrder && cartStore.cartItemsCount > 0">

        <!--  Steps   -->
        <div class="flex items-center w-2/3 mb-5 2xl:mb-12">
          <div class="relative grid place-items-center w-6 2xl:w-8 h-6 2xl:h-8 text-xs 2xl:text-base rounded-full border border-brandOrange text-brandOrange">
            <span>1</span>
            <span class="absolute -bottom-full w-max">سبد خرید</span>
          </div>
          <div class="h-px bg-black/10 opacity-40 flex-1"></div>
          <div class="relative opacity-40 grid place-items-center w-6 2xl:w-8 h-6 2xl:h-8 text-xs 2xl:text-base rounded-full border">
            <span>2</span>
            <span class="absolute -bottom-full w-max">افزودن آدرس</span>
          </div>
          <div class="h-px bg-black/10 opacity-40 flex-1"></div>
          <div class="relative opacity-40 grid place-items-center w-6 2xl:w-8 h-6 2xl:h-8 text-xs 2xl:text-base rounded-full border">
            <span>3</span>
            <span class="absolute -bottom-full w-max">تکمیل پرداخت</span>
          </div>
        </div>

        <!--  GP Peyk   -->
        <div class="w-full rounded-xl border border-opacity-25 p-5" v-if="false">
          <div class="w-3/4 mx-auto grid grid-cols-2 items-center">
            <div class="flex flex-col items-start space-y-4">
              <h3 class="text-3xl font-bold text-brandOrange">جی پی پیک</h3>
              <strong class="text-lg">خدمات ویژه با اشتراک جی پی پیک</strong>
              <base-g-button color="primary" button-type="bg" v-if="false">
                <span>دریافت این خدمات ویژه</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     class="scale-125">
                  <path d="M14 17L9 12L14 7" stroke="#FAFAFA" stroke-width="1.3" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </base-g-button>
              <base-g-button w-full v-else disabled>
                <span>به زودی ...</span>
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
        <main class="flex items-start w-full gap-5 mt-4 2xl:mt-10"
              v-if="!cartStore.cartLoading && cartStore.PendingOrder">
          <div class="flex flex-col flex-1">
            <!--  Items   -->
            <div class="rounded-xl py-4 px-8 bg-white border flex flex-col items-stretch">
              <div class="w-full flex items-center justify-between">
                <strong>سبد خرید</strong>
                <div class="relative">
                  <base-g-button button-type="white" @click="showCartOptions = !showCartOptions">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5" clip-path="url(#clip0_769_6316)">
                        <path
                            d="M8.4987 2.125C7.71953 2.125 7.08203 2.7625 7.08203 3.54167C7.08203 4.32083 7.71953 4.95833 8.4987 4.95833C9.27786 4.95833 9.91536 4.32083 9.91536 3.54167C9.91536 2.7625 9.27786 2.125 8.4987 2.125ZM8.4987 12.0417C7.71953 12.0417 7.08203 12.6792 7.08203 13.4583C7.08203 14.2375 7.71953 14.875 8.4987 14.875C9.27786 14.875 9.91536 14.2375 9.91536 13.4583C9.91536 12.6792 9.27786 12.0417 8.4987 12.0417ZM8.4987 7.08333C7.71953 7.08333 7.08203 7.72083 7.08203 8.5C7.08203 9.27917 7.71953 9.91667 8.4987 9.91667C9.27786 9.91667 9.91536 9.27917 9.91536 8.5C9.91536 7.72083 9.27786 7.08333 8.4987 7.08333Z"
                            fill="#09121F"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_769_6316">
                          <rect width="17" height="17" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </base-g-button>
                  <div class="p-2 rounded-xl drop-shadow-lg bg-gray-50 absolute -bottom-14 z-10 left-0 w-max"
                       v-if="showCartOptions" v-click-outside="closeOptions">
                    <button
                        class="font-light text-sm w-full hover:bg-white p-2 px-4 rounded-lg transition-colors duration-200"
                        @click="removeAll">حذف همه کالا ها
                    </button>
                  </div>
                </div>
              </div>
              <ul class="mt-0 2xl:mt-8 flex flex-col">
                <TransitionGroup name="none">
                  <li class="flex relative gap-5 items-center border-b last:border-none py-6 border-opacity-30"
                      v-for="i in cartStore.PendingOrder.orderItems" :key="i">
                    <div class="flex flex-col w-1/5 2xl:w-2/5 max-w-[200px] mx-auto items-center">
                      <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`"
                           :alt="i.itemInfo.productImage.alt" class="w-full mx-auto">
                      <cart-counter :item="i" class="scale-75 2xl:scale-100 w-max"/>
                    </div>
                    <base-g-button button-type="white" color="danger" class="absolute top-4 left-0"
                                   @click="cartStore.removeItem(i.id)" v-if="i.count > 1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                           class="w-4">
                        <path
                            d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.33 16.5H13.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M9.5 12.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                    </base-g-button>
                    <div class="flex flex-col justify-between flex-1">
                      <NuxtLink :to="`/product/${i.itemInfo.productSlug}`"
                                class="font-bold 2xl:text-2xl hover:text-brandOrange duration-200 transition-colors">
                        {{ i.itemInfo.productName }}
                      </NuxtLink>
                      <ul class="flex flex-col text-xs 2xl:text-base space-y-2 2xl:space-y-4 my-5 2xl:my-12">
                        <li class="pr-4 border-r-2 border-brandOrange/50">پروانه بهداشت: {{ i.itemInfo.healthNumber != null ? 'دارد' : 'ندارد' }}</li>
                        <li class="pr-4 border-r-2 border-brandOrange/50">
                          شکل ماده غذایی:
                          {{ i.itemInfo.packingType == EPackingType.کیفی ? 'کیفی' : 'شیشه ای' }}
                        </li>
                        <li class="pr-4 border-r-2 border-brandOrange/50">وزن: {{ i.itemInfo.weight }} گرم</li>
                      </ul>
                      <base-g-price :price="(i.price / 10)"/>
                    </div>
                  </li>
                </TransitionGroup>
              </ul>
            </div>
          </div>

          <!--  Prices   -->
          <div class="w-1/3 2xl:w-1/4 sticky border top-0 h-[200px] p-6 bg-white text-sm 2xl:text-base rounded-xl flex flex-col space-y-4 items-stretch">
            <div class="w-full flex items-center justify-between">
              <span>قیمت کالاها ({{ cartStore.cartItemsCount }})</span>
              <div class="flex gap-1 items-center">
                <base-g-price :price="(cartStore.PendingOrder?.getFinalPrice / 10)"/>
              </div>
            </div>
            <div class="w-full flex items-center justify-between">
              <span>جمع سبد خرید</span>
              <div class="flex gap-1 items-center">
                <base-g-price :price="(cartStore.PendingOrder?.getFinalPrice / 10)"/>
              </div>
            </div>
            <hr>
            <base-g-button w-full is-link to="/checkout/shipping" v-if="authStore.isLoggedIn">
              تکمیل سفارش
            </base-g-button>
            <base-g-button button-type="white" color="info" custom-class="text-center text-sm"
                           @click="authStore.isAuthModalOpen = true" w-full v-else>
              برای تکمیل سفارش باید وارد حساب کاربری خود شوید
            </base-g-button>
          </div>
        </main>

      </div>

      <!--  Empty Cart  -->
      <div class="border bg-white" v-else>
        <div class="w-2/3 flex items-center mx-auto justify-between py-12 mt-10 rounded-2xl ">
          <div class="flex flex-col items-start space-y-8">
            <strong class="text-6xl opacity-70 font-normal">خالی!</strong>
            <span class="text-xl font-thin text-[#9F9F9F]">هیچ محصولی وجود ندارد</span>
            <base-g-button is-link button-type="white" to="/market">
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
            </base-g-button>
          </div>
          <img src="../../assets/images/empty-cart.png" alt="empty cart" class="w-1/3">
        </div>
      </div>

      <!--  Popular   -->
      <section class="w-full mt-16">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-2xl font-black pr-4 border-r-4 border-brandOrange">
            آخرین محصولات
          </h3>
          <div class="flex items-center gap-2">
            <button
                :class="['w-8 h-8 rounded-md border border-[#8D8D8D] hover:bg-[#8D8D8D] text-[#8D8D8D] hover:text-white transition-colors duration-200 grid place-items-center ']"
                @click="carousel.next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </button>
            <button
                :class="['w-8 h-8 rounded-md border border-[#8D8D8D] hover:bg-[#8D8D8D] text-[#8D8D8D] hover:text-white transition-colors duration-200 grid place-items-center ']"
                @click="carousel.prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 17L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <client-only v-if="!loading">
          <div class="bg-[#F8F8F8] rounded-xl p-8 flex flex-col">
            <GPCarousel ref="carousel" :items-to-show="4.3" snap-align="start" wrap-around dir="rtl">
              <GPSlide v-for="p in products" :key="p">
                <li class="py-3.5 px-4 flex mx-8 items-start bg-white min-w-[350px] rounded-xl transition-all duration-300 similar" >
                  <NuxtLink :to="`/product/${p.slug}`" class="w-2/5 grid place-items-center relative">
                    <img :src="`${SITE_URL}/product/images/${p.mainImage.src}`" :alt="p.mainImage.alt" class="mx-auto w-full hover:scale-110 transition-transform duration-300">
                  </NuxtLink>
                  <div class="flex-1 flex flex-col items-start space-y-4">
                    <NuxtLink :to="`/product/${p.slug}`" class="text-right">
                      <strong class="text-lg text-right">{{p.title}}</strong>
                    </NuxtLink>
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
                      <base-g-price :price="p.price / 10" />
                    </div>
                    <button @click="cartStore.addToCart(p.id,p.slug)" class="border text-xs rounded-lg border-[#E8E8E8] py-2 flex gap-2 px-3 items-center justify-center w-full text-[#939393] hover:bg-[#F3F3F3] transition-colors duration-200">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4016 5.56176C10.4016 6.88724 9.32705 7.96176 8.00156 7.96176C6.67608 7.96176 5.60156 6.88724 5.60156 5.56176M3.15308 13.9618H12.85C13.7069 13.9618 14.4016 13.28 14.4016 12.4391L13.4076 3.56174C13.4076 2.72079 12.713 2.03906 11.8561 2.03906H3.95308C3.0962 2.03906 2.40156 2.72079 2.40156 3.56174L1.60156 12.4391C1.60156 13.28 2.2962 13.9618 3.15308 13.9618Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span>افزودن به سبد خرید</span>
                    </button>
                  </div>
                </li>
              </GPSlide>
            </GPCarousel>
          </div>
        </client-only>
        <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-4" v-else>
          <div
              class="relative min-h-[380px] flex flex-col justify-between space-y-4 animate-pulse min-w-[250px] rounded-xl transition-shadow duration-300 shadow-xl"
              v-for="i in 5" :key="i">
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
    <div class="mt-6 pb-[50px] md:hidden">
      <div v-if="cartStore.PendingOrder && cartStore.cartItemsCount > 0" class="flex flex-col items-center ">
        <div class="flex items-center gap-1">
          <strong>
            سبد خرید
          </strong>
          <span
              class="bg-brandOrange/20 w-4 h-4 grid place-items-center aspect-square text-brandOrange rounded-full px-1 text-[10px] leading-[1]">{{ cartStore.cartItemsCount }}</span>
        </div>
        <!--  Steps   -->
        <div class="flex items-center w-2/3 mt-4 mb-6">
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
        <hr class="w-full mt-6">
        <!--  Items  -->
        <ul>
          <li class="flex items-center gap-6 py-2 border-b last:border-none"
              v-for="i in cartStore.PendingOrder.orderItems" :key="i.id">
            <div class=" flex-1 flex flex-col items-start ">
              <strong>{{ i.itemInfo.productName }}</strong>
              <small>دارای پروانه بهداشت</small>
              <div class="mt-4 py-3 self-end flex flex-col items-end space-y-2">
                <base-g-price :price="i.price / 10"/>
              </div>
            </div>
            <div class="flex flex-col w-2/5 items-center">
              <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`"
                   :alt="i.itemInfo.productImage.alt">
              <cart-counter :item="i" class="w-max scale-75 -mt-2"/>
            </div>
          </li>
        </ul>
        <!--  Total Price  -->
        <aside class="w-full fixed bottom-[75px] border-b bg-white h-[60px] z-20 px-4 grid grid-cols-2 items-center"
               style="box-shadow: 0 -4px 10px 0 #E2E2E240;">
          <div class="flex flex-col items-start">
            <small>مجموع سبد خرید</small>
            <base-g-price :price="(cartStore.PendingOrder.totalPrice / 10)"/>
          </div>
          <base-g-button is-link to="/checkout/shipping" w-full v-if="authStore.isLoggedIn" is-icon custom-class="!rounded-lg">
            تکمیل سفارش
          </base-g-button>
          <base-g-button is-link to="/auth/login" button-type="white" w-full v-else is-icon custom-class="text-[10px] leading-[1.4] text-center">
            برای تکمیل سفارش باید وارد حساب کاربری خود شوید
          </base-g-button>
        </aside>
      </div>
      <div v-else class="w-full relative flex flex-col items-center justify-center -mt-5">
        <NuxtLink to="/auth/login" v-if="!authStore.isLoggedIn"
                  class="w-full rounded-xl bg-white flex flex-col space-y-4 p-4"
                  style="box-shadow: 0 4px 15px 0 #AAAAAA40;">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                  <path d="M8.18556 11.9775L20.2266 11.9775" stroke="#F04623" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M11.1133 14.8936L8.18528 11.9776L11.1133 9.06155" stroke="#F04623" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M15.4922 16.6105V17.5435C15.4922 19.5785 13.8432 21.2275 11.8072 21.2275H6.92319C4.89319 21.2275 3.24819 19.5825 3.24819 17.5525L3.24819 6.41254C3.24819 4.37754 4.89819 2.72754 6.93319 2.72754H11.8182C13.8472 2.72754 15.4922 4.37354 15.4922 6.40254V7.34454"
                      stroke="#F04623" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span>ورود به حساب کاربری</span>
            </div>
            <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M6 1L1 6.5L6 12" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="font-thin text-sm">
            برای محصولاتی که پیش تر به سبد خرید خود اضافه کرده اید وارد شوید.
          </p>
        </NuxtLink>
        <div class="flex flex-col items-center space-y-8 mt-8">
          <img src="~/assets/images/empty-cart2.png" alt="empty cart" class="w-3/5">
          <strong class="text-lg">سبد خرید شما خالی است !</strong>
          <span class="text-xs">
        می توانید برای مشاهده بیشتر کالا ها به صفحه دسته بندی بروید.
      </span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {SITE_URL} from "~/utilities/api.config";
import {useCartStore} from "~/stores/cart.store";
import {GetProducts} from "~/services/product.service";
import {EOrderBy} from "~/models/product/EOrderBy";
import type {ProductFilterData} from "~/models/product/productQueries";
import {EPackingType} from "~/models/product/EPackingType";
import {GetPendingOrder} from "~/services/cart.service";

const {data,pending} = await useAsyncData("GetPendingCart",()=>GetPendingOrder());

const cartStore = useCartStore();
const authStore = useAuthStore();
const utilStore = useUtilStore();

const carousel = ref();

const showCartOptions = ref(false);
const loading = ref(true);
const products:Ref<ProductFilterData[] | null> = ref([]);


onMounted(async()=>{
  loading.value = true;

  const result = await GetProducts({pageId:1,take:7,orderBy:EOrderBy.جدیدترین});
  if(result.isSuccess){
    products.value = result.data?.data ?? [];
  }

  loading.value = false;
})

const removeAll = async () => {
  await cartStore.removeAllItems();
  await cartStore.refreshCart();
}
const closeOptions = () => {
  showCartOptions.value = false
}

</script>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>