<template>
  <div>
    <Head>
      <Title>پنل مدیریت</Title>
    </Head>
    <h2 class="text-xl dark:text-white">
      Index Admin
    </h2>

    <div class="flex flex-col w-full gap-5" v-if="data">
      <div class="grid grid-cols-3 gap-5">
        <div class="bg-white rounded-2xl text-2xl p-12 min-h-[300px] flex flex-col space-y-5 justify-center">
          <div class="flex text-4xl font-light gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1605_10545)">
                <path d="M5 3V19H21V21H3V3H5ZM20.293 6.293L21.707 7.707L16 13.414L13 10.415L8.707 14.707L7.293 13.293L13 7.586L16 10.585L20.293 6.293Z" fill="#38C157"/>
              </g>
              <defs>
                <clipPath id="clip0_1605_10545">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span>درآمد ناخالص</span>
          </div>
          <base-g-price :price="data.currentImpureIncome / 10" />
        </div>
        <div class="bg-white rounded-2xl text-2xl p-12 min-h-[300px] flex flex-col space-y-5 justify-center">
          <div class="flex text-4xl font-light gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1605_10577)">
                <path d="M9 18H4V10H9V18ZM7 16V12H6V16H7ZM13 16V8H12V16H13ZM15 18H10V6H15V18ZM19 16V4H18V16H19ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z" fill="#F04623"/>
              </g>
              <defs>
                <clipPath id="clip0_1605_10577">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span>فروخته شده</span>
          </div>
          <div class="flex gap-2">
            <strong>{{data.currentSoldItems}}</strong>
            <span>کالا</span>
          </div>
        </div>
        <div class="bg-white rounded-2xl text-2xl p-12 min-h-[300px] flex flex-col space-y-5 justify-center">
          <div class="flex text-4xl font-light gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1605_10581)">
                <path d="M20 17H22V19H2V17H4V10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10V17ZM18 17V10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10V17H18ZM9 21H15V23H9V21Z" fill="#FD0D38"/>
              </g>
              <defs>
                <clipPath id="clip0_1605_10581">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span>اعلان ها</span>
          </div>
          <span>
            {{data.notifications}} نوتیفیکیشن جدید
          </span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <div class="bg-white rounded-2xl min-h-[400px] flex p-10 flex-col space-y-4">
          <span class="text-2xl">سفارشات</span>
          <hr>
          <div class="flex flex-col w-full space-y-5">
            <div class="flex items-center justify-between">
              <span class="flex-1 w-1/2">سفارشهای امروز</span>
              <span class="w-1/3">{{data.todayOrders}}</span>
              <span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.75 9.5L4.25 6L7.75 2.5" stroke="#3787FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="flex-1 w-1/2">سفارشهای لغو شده</span>
              <span class="w-1/3">{{data.canceledOrders}}</span>
              <span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.75 9.5L4.25 6L7.75 2.5" stroke="#3787FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
            <div class="flex items-center justify-between">
              <span class="flex-1 w-1/2">سفارشهای پیگیری نشده</span>
              <span class="w-1/3">{{data.delayedOrders}}</span>
              <span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.75 9.5L4.25 6L7.75 2.5" stroke="#3787FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl min-h-[400px] p-10 flex flex-col">
          <span class="text-2xl">تغییرات موجودی</span>
          <hr class="my-4">
          <div class="flex items-center gap-2">
            <base-g-button @click="itemsSection = 'lowQuantity'" button-type="white" :disabled="data.lowQuantityItems.length <= 0 || itemsSection == 'lowQuantity' ">در حال اتمام</base-g-button>
            <base-g-button @click="itemsSection = 'unavailable'" button-type="white" :disabled="data.unavailableItems.length <= 0 || itemsSection == 'unavailable' ">ناموجود شده</base-g-button>
          </div>
          <div class="flex flex-col my-5 w-full" v-if="data.lowQuantityItems.length > 0 && itemsSection == 'lowQuantity'">
            محصولات در حال اتمام موجودی
          </div>
          <div class="flex flex-col my-5 w-full" v-else-if="data.unavailableItems.length > 0 && itemsSection == 'unavailable'">
            محصولات بدون موجودی
          </div>
          <div class="flex flex-col w-full mt-16 text-center text-2xl" v-else>
            موجودی کالاهای شما کافی است.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {GetDashboardData} from "~/services/admin.service";
import type {DashboardData} from "~/models/admin/dashboardData";

definePageMeta({
  layout:'admin',
  middleware:'admin'
})

const itemsSection:Ref<'lowQuantity' | 'unavailable'> = ref('unavailable');

const data:Ref<DashboardData | null | undefined> = ref();

onMounted(async ()=>{
  const result = await GetDashboardData();
  if(result.isSuccess){
    data.value = result.data;
  }
})
</script>