<template>
  <div>
    <Head>
      <Title>سفارش #{{ orderId }}</Title>
    </Head>
    <div v-if="!utilStore.isMobile()">
      <div>
        <div class="flex items-center justify-between px-2 ">
          <h3 class="text-sm lg:text-2xl flex space-x-2 space-x-reverse items-center">
            <NuxtLink to="/profile/orders">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1" stroke-miterlimit="10"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>
            <span>جزئیات سفارش {{ orderId }}-gp</span>
          </h3>
          <!--          <button class="flex items-center space-x-2 space-x-reverse text-primary text-xs lg:text-base hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
              <path
                  d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
                  stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round"/>
              <path
                  d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
                  stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round"/>
              <path d="M9 13.01H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M9 9.01001H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M5.99561 13H6.00459" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M5.99561 9H6.00459" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
            <span>
                مشاهده فاکتور
              </span>
          </button>-->
        </div>
        <hr class="my-3 ">
      </div>

      <div v-if="!isLoading">
        <div class="flex flex-col space-y-4 p-4 " v-if="order.isFinally">
          <div class="flex flex-col lg:flex-row lg:items-center gap-3">
            <div class="flex justify-between items-center lg:justify-center font-light text-xs lg:text-sm opacity-70">
              <span>کد پیگیری سفارش </span>
              <b class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">{{ order?.referCode }}</b>
            </div>
            <span class="hidden lg:block opacity-40 lg:text-2xl">•</span>
            <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">
              <span>تاریخ ثبت سفارش </span>
              <b class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">{{ order.finallyPersianDate }}</b>
            </div>
          </div>
          <hr class="">
          <div class="flex flex-col lg:flex-row lg:items-center gap-3">
            <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">
              <span>تحویل گیرنده </span>
              <b class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">{{ order.address?.receiverName }}</b>
            </div>
            <span class="hidden lg:block opacity-40 text-2xl">•</span>
            <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">
              <span>شماره موبایل </span>
              <b class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">{{ order.address?.receiverPhoneNumber }}</b>
            </div>
          </div>
          <div class="flex flex-col items-start gap-2 font-light text-xs lg:text-sm opacity-70">
            <span>آدرس </span>
            <b class="text-sm lg:text-base font-bold opacity-100">
              {{order.address?.completeAddress}}
            </b>
          </div>
        </div>
        <hr class="border-white ">
        <div class="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between p-4 ">
          <div class="flex flex-col gap-4 mt-4 lg:mt-0">
            <div class="flex flex-col lg:flex-row lg:items-center gap-3">
              <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">مبلغ <b
                  class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">{{ order.finallyPrice.toLocaleString() }} ریال</b></div>
              <span class="hidden lg:block opacity-40 text-2xl">•</span>
              <!--          <div class="flex justify-between items-center font-light text-xs lg:text-sm opacity-70">سود شما از خرید <b
                            class="text-sm lg:text-base font-bold opacity-100 mr-1 lg:mr-2">253,000 ریال</b></div>
                        <span class="hidden lg:block opacity-40 text-2xl">•</span>-->
              <div class="flex justify-between items-center text-brandOrange text-sm lg:text-base">
                <span class="block lg:hidden">نوع پرداخت</span>
                <strong>پرداخت اینترنتی</strong>
              </div>
            </div>
            <!--        <div class="flex justify-between items-center font-light text-sm opacity-70">هزینه ارسال <b class="text-base font-bold opacity-100 mr-2">260,000 ریال</b></div>-->
            <div class="flex items-center justify-between lg:justify-start lg:gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="text-amber-500 hidden lg:block">
                <path
                    d="M7.5 12.1673H6C5.26667 12.1673 4.66667 12.7673 4.66667 13.5006V13.6673H4C3.72667 13.6673 3.5 13.894 3.5 14.1673C3.5 14.4406 3.72667 14.6673 4 14.6673H12C12.2733 14.6673 12.5 14.4406 12.5 14.1673C12.5 13.894 12.2733 13.6673 12 13.6673H11.3333V13.5006C11.3333 12.7673 10.7333 12.1673 10 12.1673H8.5V10.6406C8.33333 10.6606 8.16667 10.6673 8 10.6673C7.83333 10.6673 7.66667 10.6606 7.5 10.6406V12.1673Z"
                    fill="currentColor"/>
                <path
                    d="M12.3195 7.7587C12.7595 7.59203 13.1462 7.3187 13.4529 7.01203C14.0729 6.32536 14.4795 5.50536 14.4795 4.54536C14.4795 3.58536 13.7262 2.83203 12.7662 2.83203H12.3929C11.9595 1.94536 11.0529 1.33203 9.99953 1.33203H5.99953C4.9462 1.33203 4.03953 1.94536 3.6062 2.83203H3.23286C2.27286 2.83203 1.51953 3.58536 1.51953 4.54536C1.51953 5.50536 1.9262 6.32536 2.5462 7.01203C2.85286 7.3187 3.23953 7.59203 3.67953 7.7587C4.37286 9.46536 6.03953 10.6654 7.99953 10.6654C9.95953 10.6654 11.6262 9.46536 12.3195 7.7587ZM9.89287 5.63203L9.47953 6.1387C9.41287 6.21203 9.3662 6.3587 9.37287 6.4587L9.41286 7.11203C9.43953 7.51203 9.15287 7.7187 8.77953 7.57203L8.17287 7.33203C8.07953 7.2987 7.91953 7.2987 7.8262 7.33203L7.21953 7.57203C6.8462 7.7187 6.55953 7.51203 6.5862 7.11203L6.6262 6.4587C6.63286 6.3587 6.5862 6.21203 6.51953 6.1387L6.1062 5.63203C5.8462 5.32536 5.95953 4.98536 6.3462 4.88536L6.97953 4.72536C7.07953 4.6987 7.19953 4.60536 7.25287 4.5187L7.6062 3.97203C7.8262 3.63203 8.17287 3.63203 8.39287 3.97203L8.7462 4.5187C8.79953 4.60536 8.91953 4.6987 9.01953 4.72536L9.65286 4.88536C10.0395 4.98536 10.1529 5.32536 9.89287 5.63203Z"
                    fill="currentColor"/>
              </svg>

              <span class="text-sm font-light opacity-70">امتیاز جی پی کلاب</span>
              <strong>5</strong>
            </div>
          </div>
          <NuxtLink to="/profile/wallet"
              class="self-end lg:self-start flex space-x-1 items-center space-x-reverse text-primary text-sm lg:text-base">
            <span>تاریخچه تراکنش ها</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
              <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                    stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </div>
        <hr class="border-white  my-3">
        <div class="p-6 border rounded-lg bg-bgWhite flex flex-col space-y-4">
          <div v-if="order.isFinally && order.orderStatus === EOrderStatus.Sending">
            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-end">
              <span class="hidden lg:block text-sm font-light">وضعیت تحویل</span>
              <div class="flex flex-col space-y-2 w-full lg:w-2/5">
                <strong class="text-green-600 text-sm">تحویل مرسوله به مشتری</strong>
                <div class="w-full h-2 rounded-full bg-green-600/30 p-px">
                  <div class="w-full h-2 rounded-full bg-green-500">
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
              <div class="flex flex-col lg:flex-row lg:items-center gap-3">
                <div class="flex justify-between items-center font-light text-sm opacity-70">هزینه ارسال <b class="text-base font-bold opacity-100 mr-2">{{order.transmissionPrice ?? 0}} ریال</b></div>
                <span class="hidden lg:block opacity-40 text-2xl">•</span>
                <div class="flex justify-between items-center font-light text-sm opacity-70">مبلغ مرسوله <b class="text-base font-bold opacity-100 mr-2">{{ order.finallyPrice.toLocaleString() }} ریال</b></div>
              </div>
              <span class="flex justify-between items-center font-light opacity-70">کد پیگیری مرسوله: <b class="text-base font-bold opacity-100 mr-2">{{ order.postFollowUpCode ?? '' }}</b></span>
            </div>
            <div class="w-full p-4 rounded-lg flex flex-col space-y-4 bg-gray-100">
              <span class="text-sm font-light">با استفاده از سامانه رهگیری پست می‌توانید از وضعیت مرسوله باخبر شوید.</span>
              <a :href="`https://tracking.post.ir/search.aspx?id=${order.postFollowUpCode ?? ''}`"
                 class="text-primary text-sm font-light">
                ورود به سامانه رهگیری >
              </a>
              <div class="flex items-center flex-wrap lg:w-1/3">
                <span class="text-sm font-light opacity-70">کد رهگیری:</span>
                <div class="flex items-center gap-3 mr-auto">
                  <strong class="text-xs lg:text-base">{{ order.postFollowUpCode ?? '' }}</strong>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
                    <path d="M17 13.4V16.4C17 20.4 15.4 22 11.4 22H7.6C3.6 22 2 20.4 2 16.4V12.6C2 8.6 3.6 7 7.6 7H10.6"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 13.4H13.8C11.4 13.4 10.6 12.6 10.6 10.2V7L17 13.4Z" stroke="currentColor" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.6 2H15.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M7 5C7 3.34 8.34 2 10 2H12.62" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M21.9999 8V14.19C21.9999 15.74 20.7399 17 19.1899 17" stroke="currentColor" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 8H19C16.75 8 16 7.25 16 5V2L22 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <hr>
          </div>
          <base-f-alert :outline="true" color="primary">
            <div class="flex flex-col gap-2">
              <span>سفارش شما در صف ارسال قرار گرفته است و به زودی تحویل پست خواهد شد</span>
              <span>کد رهگیری پستی به زودی برای شما ارسال خواهد شد</span>
            </div>
          </base-f-alert>
          <ul>
            <li class="w-full flex items-stretch pb-4 mb-4 border-b space-x-4 space-x-reverse last:border-none"
                v-for="i in order.orderItems" :key="i.id">
              <div class="w-1/6 flex flex-col items-center relative">
                <NuxtLink :to="`/product/${i.itemInfo.productSlug}`" class="w-full">
                  <NuxtImg placeholder="/images/placeholder.jpeg" :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`"
                       :alt="i.itemInfo.productImage.alt" class="w-full rounded-lg" />
                </NuxtLink>
                <span class="absolute top-4 left-4 grid place-items-center text-sm bg-brandOrange/20 text-brandOrange rounded-full px-3">{{i.count}} عدد</span>
              </div>
              <div class="flex-1 flex flex-col items-start">
                <div class="flex items-center gap-4 mb-6 lg:mt-8">
                  <NuxtLink :to="`/product/${i.itemInfo.productSlug}`" class="text-sm lg:text-xl">
                    {{ i.itemInfo.productName }}
                  </NuxtLink>
                  <NuxtLink :to="`/product/${i.itemInfo.productSlug}#comments`" class="text-sm text-primary underline underline-offset-4" v-if="order.orderStatus != EOrderStatus.Pending">
                    ثبت دیدگاه
                  </NuxtLink>
                </div>

                              <ul class="flex flex-col space-y-2">
                                <li class="flex items-center space-x-1 space-x-reverse text-sm font-light">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                       opacity="0.5">
                                    <path d="M2.11328 4.95996L7.99995 8.36663L13.8466 4.97996" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8 14.4067V8.35999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path
                                        d="M6.62005 1.65336L3.06005 3.62669C2.25338 4.07336 1.59338 5.19336 1.59338 6.11336V9.88002C1.59338 10.8 2.25338 11.92 3.06005 12.3667L6.62005 14.3467C7.38005 14.7667 8.62672 14.7667 9.38672 14.3467L12.9467 12.3667C13.7534 11.92 14.4134 10.8 14.4134 9.88002V6.11336C14.4134 5.19336 13.7534 4.07336 12.9467 3.62669L9.38672 1.64669C8.62005 1.22669 7.38005 1.22669 6.62005 1.65336Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  <span class="text-xs">{{ EPackingType[i.itemInfo.packingType].toString().replaceAll('_',' ') }}</span>
                                </li>
                                <li class="flex items-center space-x-2 space-x-reverse text-sm font-light">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                       opacity="0.5">
                                    <path
                                        d="M6.66667 14.6667H9.33333C12.6667 14.6667 14 13.3334 14 10V6.00004C14 2.66671 12.6667 1.33337 9.33333 1.33337H6.66667C3.33333 1.33337 2 2.66671 2 6.00004V10C2 13.3334 3.33333 14.6667 6.66667 14.6667Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M11.5 5.52666C9.50667 3.75332 6.49333 3.75332 4.5 5.52666L5.95333 7.85999C7.12 6.81999 8.88 6.81999 10.0467 7.85999L11.5 5.52666Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  <span class="text-xs">{{ i.itemInfo.weight }} گرم</span>
                                </li>
                              </ul>

                <div class="mt-4 flex flex-col space-y-1">
                  <div class="flex items-center gap-2 origin-right scale-75">
                    <small class="font-thin">جمع واحد:</small>
                    <base-g-price :price="i.price"/>
                  </div>
                  <div class="flex items-center gap-2">
                    <small class="font-thin">جمع کل:</small>
                    <base-g-price :price="i.totalPrice"/>
                  </div>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <header class="w-full h-[80px] px-4 flex items-center justify-center relative">
        <NuxtLink to="/profile/orders" class="absolute right-7">
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M1 13L6 7L1 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <span class="font-light">
          جزئیات سفارش #{{ orderId }}
        </span>
      </header>
      <div class="flex flex-col space-y-6" v-if="!isLoading">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col space-y-2">
            <span class="opacity-70">کد پیگیری سفارش:</span>
            <span>{{order?.referCode}}</span>
          </div>
          <div class="flex flex-col space-y-2">
            <span class="opacity-70">تاریخ ثبت سفارش :</span>
            <span>{{order?.finallyPersianDate}}</span>
          </div>
        </div>
        <div class="rounded-xl border p-4 bg-[#D9D9D91A]">
          <ul>
            <li class="grid grid-cols-3 gap-2 py-2 border-b last:border-none" v-for="i in order.orderItems">
              <div class="col-span-2 flex flex-col space-y-2 self-center">
                <strong>{{i.itemInfo.productName}}</strong>
                <span class="w-max px-3 py-0.5 rounded-full bg-[#F5F5F5] border-b border-black/40 text-xs font-thin">
                  {{ EItemType[i.itemInfo.eItemType].toString().replaceAll('_',' ') }}
                </span>
                <div class="flex items-center justify-between w-full">
                  <span>قیمت کل:</span>
                  <base-g-price :price="i.totalPrice" />
                </div>
              </div>
              <div class="relative">
                <NuxtLink :to="`/product/${i.itemInfo.productSlug}`" class="w-full">
                  <NuxtImg placeholder="/images/placeholder.jpeg" :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`"
                       :alt="i.itemInfo.productImage.alt" class="w-full rounded-lg"/>
                </NuxtLink>
                <span class="absolute top-2 right-2 text-xs w-4 h-4 rounded-full bg-brandOrange text-white grid place-items-center">{{i.count}}</span>
              </div>
            </li>
          </ul>
          <hr>
          <div class="flex flex-col space-y-4 my-4">
            <div class="flex items-center justify-between w-full">
              <span class="opacity-70">قیمت:</span>
              <base-g-price :price="order.totalPrice" />
            </div>
            <div class="flex items-center justify-between w-full">
              <span class="opacity-70">تخفیف:</span>
              <base-g-price :price="getDiscountValue(order.totalPrice,order.discount.amountInPercent)" v-if="order.discount.amountInPercent > 0"/>
              <span v-else> بدون تخفیف</span>
            </div>
            <div class="flex items-center justify-between w-full">
              <span class="opacity-70">هزینه پست:</span>
              <span>رایگان</span>
            </div>
          </div>
          <hr>
          <div class="flex items-center justify-between w-full mt-4">
            <span class="opacity-80">قیمت نهایی:</span>
            <base-g-price :price="order.finallyPrice" />
          </div>
        </div>

        <div class="rounded-xl flex flex-col space-y-4 border p-4 bg-[#D9D9D91A]">
          <div class="flex items-center justify-between w-full">
            <span class="opacity-70">تحویل گیرنده:</span>
            <strong>سجاد میرشبی</strong>
          </div>
          <div class="flex items-center justify-between w-full">
            <span class="opacity-70">شماره تلفن:</span>
            <strong>09154222478</strong>
          </div>
          <div class="flex flex-col w-full">
            <span class="opacity-70">آدرس:</span>
            <strong>تربت ح، خیابان کاشانی ، کاشانی 18 ،پلاک 20 </strong>
          </div>
          <hr >
          <div class="flex items-center justify-between w-full">
            <span class="opacity-70">وضعیت مرسوله:</span>
            <strong class="text-green-600">تحویل شده</strong>
          </div>
        </div>

        <div class="rounded-xl border flex flex-col space-y-4 p-4 bg-[#D9D9D91A]">
          <p>با استفاده از سامانه رهگیری پست می توانید از وضعیت مرسوله با خبر شوید</p>
          <div class="flex items-center gap-4 w-full">
            <span class="opacity-70">کد رهگیری:</span>
            <strong>191489717701655129539111</strong>
          </div>
          <a href="https://tracking.post.ir/search.aspx?id=191489717701655129539111" class="flex items-center gap-1 w-full">
            <span class="text-[#1DA5C3]">ورود به سامانه رهگیری</span>
            <svg width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M3 1L1 3.5L3 6" stroke="#1DA5C3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {GetOrderById} from "~/services/cart.service";
import {EOrderStatus, type OrderDto} from "~/models/cart/cartQueries";
import {SITE_URL} from "~/utilities/api.config";
import {EItemType} from "~/models/EPostType";
import {EPackingType} from "../../../models/product/EPackingType";
import {getDiscountValue} from "~/utilities/priceUtils";

definePageMeta({
  layout: 'profile',
})

const isLoading = ref(true);
const route = useRoute();
const orderId:number = parseInt(route.params.id.toString());
const order:Ref<OrderDto | null> = ref(null);
const utilStore = useUtilStore();

onMounted(async ()=>{
  isLoading.value = true;

  const result = await GetOrderById(orderId);
  if(result.isSuccess){
    order.value = result.data ?? null;
  }

  isLoading.value = false;
})

</script>