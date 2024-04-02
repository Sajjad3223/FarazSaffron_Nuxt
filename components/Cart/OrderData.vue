<template>
  <ul class="flex flex-col w-full" v-if="data.length > 0">
    <li class="flex flex-col p-4 py-6 rounded-xl border bg-bgWhite dark:bg-gray-800 dark:text-white dark:border-gray-600" v-for="order in data">
      <div class="flex flex-col-reverse lg:flex-row items-end lg:items-start justify-between">
        <div class="flex flex-col space-y-4 w-full lg:w-max">
          <div class="flex space-x-2 space-x-reverse items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-warning" v-if="status === EOrderStatus.Paid">
              <path d="M17.6005 5.31125L11.9505 2.27125C11.3505 1.95125 10.6405 1.95125 10.0405 2.27125L4.40047 5.31125C3.99047 5.54125 3.73047 5.98125 3.73047 6.46125C3.73047 6.95125 3.98047 7.39125 4.40047 7.61125L10.0505 10.6512C10.3505 10.8112 10.6805 10.8913 11.0005 10.8913C11.3205 10.8913 11.6605 10.8112 11.9505 10.6512L17.6005 7.61125C18.0105 7.39125 18.2705 6.95125 18.2705 6.46125C18.2705 5.98125 18.0105 5.54125 17.6005 5.31125Z" fill="currentColor"/>
              <path d="M9.12 11.7106L3.87 9.09058C3.46 8.88058 3 8.91058 2.61 9.14058C2.23 9.38058 2 9.79058 2 10.2406V15.2006C2 16.0606 2.48 16.8306 3.25 17.2206L8.5 19.8406C8.68 19.9306 8.88 19.9806 9.08 19.9806C9.31 19.9806 9.55 19.9106 9.76 19.7906C10.14 19.5506 10.37 19.1406 10.37 18.6906V13.7306C10.36 12.8706 9.88 12.1006 9.12 11.7106Z" fill="currentColor"/>
              <path d="M20.0006 10.2406V12.7006C19.5206 12.5606 19.0106 12.5006 18.5006 12.5006C17.1406 12.5006 15.8106 12.9706 14.7606 13.8106C13.3206 14.9406 12.5006 16.6506 12.5006 18.5006C12.5006 18.9906 12.5606 19.4806 12.6906 19.9506C12.5406 19.9306 12.3906 19.8706 12.2506 19.7806C11.8706 19.5506 11.6406 19.1406 11.6406 18.6906V13.7306C11.6406 12.8706 12.1206 12.1006 12.8806 11.7106L18.1306 9.09058C18.5406 8.88058 19.0006 8.91058 19.3906 9.14058C19.7706 9.38058 20.0006 9.79058 20.0006 10.2406Z" fill="currentColor"/>
              <path d="M21.98 15.6695C21.16 14.6595 19.91 14.0195 18.5 14.0195C17.44 14.0195 16.46 14.3895 15.69 15.0095C14.65 15.8295 14 17.0995 14 18.5195C14 19.3595 14.24 20.1595 14.65 20.8395C14.92 21.2895 15.26 21.6795 15.66 21.9995H15.67C16.44 22.6395 17.43 23.0195 18.5 23.0195C19.64 23.0195 20.67 22.5995 21.46 21.8995C21.81 21.5995 22.11 21.2395 22.35 20.8395C22.76 20.1595 23 19.3595 23 18.5195C23 17.4395 22.62 16.4395 21.98 15.6695ZM20.76 17.9595L18.36 20.1795C18.22 20.3095 18.03 20.3795 17.85 20.3795C17.66 20.3795 17.47 20.3095 17.32 20.1595L16.21 19.0495C15.92 18.7595 15.92 18.2795 16.21 17.9895C16.5 17.6995 16.98 17.6995 17.27 17.9895L17.87 18.5895L19.74 16.8595C20.04 16.5795 20.52 16.5995 20.8 16.8995C21.09 17.2095 21.07 17.6795 20.76 17.9595Z" fill="currentColor"/>
            </svg>
            <strong>{{ getStatusText }}</strong>
          </div>
          <div class="flex flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:items-center lg:space-x-2 lg:space-x-reverse">
            <div class="flex items-center justify-between w-full lg:w-max">
              <span class="text-xs lg:text-sm font-light opacity-70 lg:hidden">تاریخ تحویل</span>
              <span class="text-xs lg:text-sm opacity-70 font-bold lg:font-light">{{ order.finallyDate?.toLocaleDateString() }}</span>
            </div>
            <span class="opacity-40 text-2xl hidden lg:block">•</span>
            <span class="text-xs lg:text-sm flex items-center lg:gap-2 justify-between font-light opacity-70">کد سفارش <b class="text-sm lg:text-base font-bold">{{ order.id }}</b></span>
            <span class="opacity-40 text-2xl hidden lg:block">•</span>
            <span class="text-xs lg:text-sm flex items-center lg:gap-2 justify-between font-light opacity-70">مبلغ <b class="text-sm lg:text-base font-bold">{{ order.finalPrice.toLocaleString() }} ریال</b></span>
            <span class="hidden lg:block opacity-40 text-2xl">•</span>
            <span class="text-sm lg:text-sm flex items-center lg:gap-2 justify-between font-light opacity-70" v-if="order.discount !== null">تخفیف <b class="text-sm lg:text-base font-bold">{{ order.discount?.amount.toLocaleString() }} ریال</b></span>
          </div>
          <div class="flex items-center space-x-2 space-x-reverse">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-amber-500">
              <path d="M7.5 12.1673H6C5.26667 12.1673 4.66667 12.7673 4.66667 13.5006V13.6673H4C3.72667 13.6673 3.5 13.894 3.5 14.1673C3.5 14.4406 3.72667 14.6673 4 14.6673H12C12.2733 14.6673 12.5 14.4406 12.5 14.1673C12.5 13.894 12.2733 13.6673 12 13.6673H11.3333V13.5006C11.3333 12.7673 10.7333 12.1673 10 12.1673H8.5V10.6406C8.33333 10.6606 8.16667 10.6673 8 10.6673C7.83333 10.6673 7.66667 10.6606 7.5 10.6406V12.1673Z" fill="currentColor"/>
              <path d="M12.3195 7.7587C12.7595 7.59203 13.1462 7.3187 13.4529 7.01203C14.0729 6.32536 14.4795 5.50536 14.4795 4.54536C14.4795 3.58536 13.7262 2.83203 12.7662 2.83203H12.3929C11.9595 1.94536 11.0529 1.33203 9.99953 1.33203H5.99953C4.9462 1.33203 4.03953 1.94536 3.6062 2.83203H3.23286C2.27286 2.83203 1.51953 3.58536 1.51953 4.54536C1.51953 5.50536 1.9262 6.32536 2.5462 7.01203C2.85286 7.3187 3.23953 7.59203 3.67953 7.7587C4.37286 9.46536 6.03953 10.6654 7.99953 10.6654C9.95953 10.6654 11.6262 9.46536 12.3195 7.7587ZM9.89287 5.63203L9.47953 6.1387C9.41287 6.21203 9.3662 6.3587 9.37287 6.4587L9.41286 7.11203C9.43953 7.51203 9.15287 7.7187 8.77953 7.57203L8.17287 7.33203C8.07953 7.2987 7.91953 7.2987 7.8262 7.33203L7.21953 7.57203C6.8462 7.7187 6.55953 7.51203 6.5862 7.11203L6.6262 6.4587C6.63286 6.3587 6.5862 6.21203 6.51953 6.1387L6.1062 5.63203C5.8462 5.32536 5.95953 4.98536 6.3462 4.88536L6.97953 4.72536C7.07953 4.6987 7.19953 4.60536 7.25287 4.5187L7.6062 3.97203C7.8262 3.63203 8.17287 3.63203 8.39287 3.97203L8.7462 4.5187C8.79953 4.60536 8.91953 4.6987 9.01953 4.72536L9.65286 4.88536C10.0395 4.98536 10.1529 5.32536 9.89287 5.63203Z" fill="currentColor"/>
            </svg>

            <span class="text-sm font-light opacity-70">امتیاز جی پی کلاب</span>
            <strong>5</strong>
          </div>
        </div>
        <NuxtLink to="/profile/orders/123142">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
      </div>
      <hr class="my-3">
      <ul class="w-full flex items-center flex-wrap space-x-4 space-x-reverse">
        <li v-for="item in order.itemsCount">
          <img src="~/assets/images/saffron-bar.png" alt="jar" class="max-w-24 rounded-md">
        </li>
      </ul>
      <hr class="my-3">
      <div class="self-end mx-4 my-2">
        <NuxtLink class="flex items-center space-x-2 space-x-reverse text-primary" :to="`/profile/orders/index/${order.id}`">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 13.01H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 9.01001H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.99561 13H6.00459" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.99561 9H6.00459" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>
            مشاهده فاکتور
          </span>
        </NuxtLink>
      </div>
    </li>
  </ul>
  <div v-else>
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" class="opacity-50">
      <path d="M130.625 61.5625L134.313 123.375C134.438 125.062 133.625 126.188 133.188 126.688C132.688 127.25 131.625 128.125 129.875 128.125H112.812L126.313 61.5625H130.625ZM137.5 37.5L137.438 37.625C137.563 39.125 137.438 40.6875 137.063 42.25L91 126.813C89.5 133.125 83.875 137.5 77.375 137.5H129.875C137.938 137.5 144.313 130.688 143.688 122.625L137.5 37.5Z" fill="currentColor"/>
      <path d="M71.5625 14.0007C72.1875 11.5007 70.625 8.93822 68.125 8.31322C65.625 7.75072 63.0625 9.25072 62.4375 11.7507L59.3125 24.6882H68.9375L71.5625 14.0007Z" fill="currentColor"/>
      <path d="M112.813 13.8144C113.375 11.2519 111.75 8.81442 109.188 8.25192C106.688 7.68942 104.188 9.31442 103.625 11.8769L100.812 24.8144H110.438L112.813 13.8144Z" fill="currentColor"/>
      <path d="M136.375 33.3125C134.313 28.3125 129.438 24.75 123.438 24.75H110.438L106.938 40.9375C106.438 43.125 104.5 44.625 102.375 44.625C102.063 44.625 101.688 44.625 101.375 44.5C98.8754 43.9375 97.2504 41.4375 97.7504 38.9375L100.813 24.6875H68.9379L65.0004 40.9375C64.5004 43.0625 62.5629 44.5 60.4379 44.5C60.0629 44.5 59.6879 44.4375 59.3129 44.375C56.8129 43.75 55.2504 41.25 55.8754 38.6875L59.2504 24.625H46.5629C40.4379 24.625 35.0004 28.625 33.1879 34.5L6.87542 119.187C4.12542 128.25 10.8129 137.5 20.2504 137.5H102.375C108.875 137.5 114.5 133.125 116 126.813L137.063 42.25C137.438 40.6875 137.563 39.125 137.438 37.625C137.313 36.125 137 34.625 136.375 33.3125ZM91.8754 104.687H41.8754C39.3129 104.687 37.1879 102.562 37.1879 100C37.1879 97.4375 39.3129 95.3125 41.8754 95.3125H91.8754C94.4379 95.3125 96.5629 97.4375 96.5629 100C96.5629 102.562 94.4379 104.687 91.8754 104.687ZM98.1254 79.6875H48.1254C45.5629 79.6875 43.4379 77.5625 43.4379 75C43.4379 72.4375 45.5629 70.3125 48.1254 70.3125H98.1254C100.688 70.3125 102.813 72.4375 102.813 75C102.813 77.5625 100.688 79.6875 98.1254 79.6875Z" fill="currentColor"/>
    </svg>
    <strong class="text-xl opacity-70" >هیچ سفارشی در این بخش وجود ندارد</strong>
  </div>
</template>

<script setup lang="ts">
import {EOrderStatus, type OrderFilterData} from "~/models/cart/cartQueries";

const props = defineProps<{
  status:EOrderStatus,
  data:OrderFilterData[]
}>();

const getStatusText = computed(()=>{
  console.log(props.status)
  switch (props.status){
    case EOrderStatus.Pending:
      return 'جاری';
    case EOrderStatus.Paid:
      return 'پرداخت شده';
    case EOrderStatus.Canceled:
      return 'لغو شده';
    case EOrderStatus.Returned:
      return 'مرجوع شده';
  }
})
</script>