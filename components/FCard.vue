

<template>
  <div :class="['card bg-bgWhite pb-4',
                {'shadow-md':shadow},
                {'rounded-xl':rounded},
                {'border':border}]">
    <nuxt-link to="/product/thing">
      <img src="~/assets/images/saffron-bar.png" alt="saffron bar" class="w-full object-contain rounded-lg h-52 lg:h-80">
    </nuxt-link>
    <div class="w-full px-8">
      <nuxt-link to="/product/thing" class="text-xl lg:text-2xl font-bold">زعفران نگین</nuxt-link>
      <div class="flex items-center space-x-reverse space-x-2 mt-2">
        <div class="flex items-center space-x-2 space-x-reverse bg-[#E6D9C6] px-4 py-1 rounded-full">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.05 3.47C10.05 3.74 9.90495 3.985 9.67495 4.11L8.80495 4.58L8.06495 4.975L6.52995 5.805C6.36495 5.895 6.18495 5.94 5.99995 5.94C5.81495 5.94 5.63495 5.895 5.46995 5.805L2.32495 4.11C2.09495 3.985 1.94995 3.74 1.94995 3.47C1.94995 3.2 2.09495 2.955 2.32495 2.83L3.30995 2.3L4.09495 1.875L5.46995 1.135C5.79995 0.955 6.19995 0.955 6.52995 1.135L9.67495 2.83C9.90495 2.955 10.05 3.2 10.05 3.47Z" fill="currentColor"/>
            <path d="M4.94999 6.39501L2.02499 4.93501C1.79999 4.82001 1.53999 4.83501 1.32499 4.96501C1.10999 5.09501 0.984985 5.32501 0.984985 5.57501V8.34001C0.984985 8.82001 1.24999 9.25001 1.67999 9.46501L4.60499 10.925C4.70499 10.975 4.81499 11 4.92499 11C5.05499 11 5.18499 10.965 5.29999 10.89C5.51499 10.76 5.63999 10.53 5.63999 10.28V7.51501C5.64499 7.04001 5.37998 6.61001 4.94999 6.39501Z" fill="currentColor"/>
            <path d="M11.015 5.575V8.34C11.015 8.815 10.75 9.245 10.32 9.46L7.39498 10.925C7.29498 10.975 7.18498 11 7.07498 11C6.94498 11 6.81498 10.965 6.69498 10.89C6.48498 10.76 6.35498 10.53 6.35498 10.28V7.52C6.35498 7.04 6.61998 6.61 7.04998 6.395L8.12498 5.86L8.87498 5.485L9.97498 4.935C10.2 4.82 10.46 4.83 10.675 4.965C10.885 5.095 11.015 5.325 11.015 5.575Z" fill="currentColor"/>
            <path d="M8.80506 4.58L8.06506 4.975L3.31006 2.3L4.09506 1.875L8.68506 4.465C8.73506 4.495 8.77506 4.535 8.80506 4.58Z" fill="currentColor"/>
            <path d="M8.875 5.48499V6.61999C8.875 6.82499 8.705 6.99499 8.5 6.99499C8.295 6.99499 8.125 6.82499 8.125 6.61999V5.85999L8.875 5.48499Z" fill="currentColor"/>
          </svg>
          <span class="text-xs">شیشه ای</span>
        </div>
        <div class="flex items-center space-x-2 space-x-reverse bg-[#E6D9C6] px-4 py-1 rounded-full">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1H4C2.5 1 1.5 2 1.5 3.5V8.5C1.5 10 2.5 11 4 11H8C9.5 11 10.5 10 10.5 8.5V3.5C10.5 2 9.5 1 8 1ZM8.785 4.24L7.695 5.99C7.665 6.035 7.615 6.07 7.565 6.075C7.555 6.075 7.545 6.075 7.54 6.075C7.495 6.075 7.45 6.06 7.415 6.03C6.61 5.315 5.4 5.315 4.595 6.03C4.555 6.065 4.5 6.085 4.445 6.075C4.39 6.065 4.34 6.035 4.315 5.99L3.225 4.24C3.165 4.165 3.18 4.065 3.25 4C4.815 2.605 7.18 2.605 8.75 4C8.82 4.065 8.835 4.165 8.785 4.24Z" fill="currentColor"/>
          </svg>
          <span class="text-xs">نیم مثقال</span>
        </div>
      </div>
    </div>
    <hr class="my-4">
    <div class="px-8 flex flex-col space-y-2 items-end justify-between flex-wrap">
      <div class="flex items-center space-x-reverse space-x-2">
<!--        <strong class="text-2xl opacity-40 line-through scale-75">
          2,206,000
          <small class="text-xs">ریال</small>
        </strong>-->
        <strong class="text-xl lg:text-2xl">
          2,206,000
          <small class="text-xs">ریال</small>
        </strong>
      </div>
      <button type="button" class="w-full bg-brandOrange py-2 px-8 text-white rounded-lg" @click="cartStore.addToCart">
        افزودن به سبد خرید
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "~/stores/cart.store";

const cartStore = useCartStore();

const props = defineProps({
  shadow:{
    type:Boolean,
    default:true
  },
  rounded:{
    type:Boolean,
    default:true
  },
  border:{
    type:Boolean,
    default:true
  },
})

</script>