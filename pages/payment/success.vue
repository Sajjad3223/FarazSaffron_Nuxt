<template>
  <div>
    <div class="hidden lg:flex items-center w-2/3 mb-12 mx-auto my-12">
      <div class="relative grid place-items-center w-8 h-8 rounded-full bg-brandOrange text-brandOrange">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5.65546L5.23224 9.8877L14.1199 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="absolute -bottom-full w-max">سبد خرید</span>
      </div>
      <div class="h-px bg-brandOrange opacity-40 flex-1"></div>
      <div class="relative grid place-items-center w-8 h-8 rounded-full bg-brandOrange text-brandOrange">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5.65546L5.23224 9.8877L14.1199 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="absolute -bottom-full w-max">افزودن آدرس</span>
      </div>
      <div class="h-px bg-brandOrange opacity-40 flex-1"></div>
      <div class="relative grid place-items-center w-8 h-8 rounded-full bg-brandOrange text-brandOrange">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5.65546L5.23224 9.8877L14.1199 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="absolute -bottom-full w-max">تکمیل پرداخت</span>
      </div>
    </div>

    <div class="w-full lg:border lg:py-24 lg:bg-[#F8F8F8] rounded-2xl flex flex-col items-center space-y-4 lg:space-y-8 ">
      <svg width="249"  height="250" viewBox="0 0 249 250" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <ellipse cx="123" cy="124.5" rx="106" ry="106.5" fill="#38C157" fill-opacity="0.1" class="pulse delayed"/>
        <circle cx="123" cy="125" r="84" fill="#38C157" fill-opacity="0.15"  class="pulse"/>
        <circle cx="124.5" cy="126.5" r="60.5" fill="#38C157" />
        <path d="M102 125.238L116.839 140L148 109" stroke="white" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <h3 class="text-2xl lg:text-4xl font-semibold">پرداخت موفق</h3>
      <div class="flex items-center gap-4">
        <span class="opacity-60">کد رهگیری:</span>
        <span class="font-light">{{route.query.saleRefId}}</span>
      </div>
      <hr class="w-2/3">
      <NuxtLink v-if="route.query?.walletCharge == '1'"
                :to="`/profile/wallet`" class="text-xl font-light text-[#38C157] hover:underline underline-offset-8">
        مشاهده سفارش
      </NuxtLink>
      <NuxtLink v-else
          :to="`/profile/orders/${route.query.orderId}`" class="text-xl font-light text-[#38C157] hover:underline underline-offset-8">
        مشاهده سفارش
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">


const route = useRoute();

</script>

<style scoped>
.pulse{
  animation: pulseAnim 0.5s infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;
}
.delayed{
  animation-delay: 0.2s;
}

@keyframes pulseAnim {
  0%{
    opacity:100%;
  }
  100%{
    opacity:20%;
  }
}
</style>