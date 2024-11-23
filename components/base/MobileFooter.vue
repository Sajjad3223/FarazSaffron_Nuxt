<script setup lang="ts">

const authStore = useAuthStore();
const cartStore = useCartStore();

const route = useRoute();

</script>

<template>
  <footer class="bg-white border-t pt-10 pb-24">
    <div class="fixed bg-white z-10 bottom-0 inset-x-0 h-[80x] py-2" style="box-shadow: 0 -10px 20px 0 #B0B0B08A;">
      <div class="flex items-center justify-around">
        <NuxtLink to="/"  exact-active-class="activePage" class="flex flex-col items-center space-y-1 p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-xs font-light">صفحه اصلی</span>
        </NuxtLink>
        <NuxtLink to="/market" :class="['flex flex-col items-center space-y-1 p-2',{'activePage':route.path.startsWith('/market')}]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g opacity="0.8">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>

          <span class="text-xs font-light">دسته بندی</span>
        </NuxtLink>
        <div class="relative h-full">
          <NuxtLink to="/inquiry" class="group absolute -bottom-6 right-0 translate-x-1/2 -translate-y-1/4 flex flex-col gap-1 items-center justify-center aspect-square rounded-full bg-white border-2 border-transparent w-[80px] shadow-2xl scale-75">
            <svg class="w-5 text-brandOrange group-hover:[&>path]:fill-brandOrange" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="transition-all duration-300" d="M7.49015 1.09041L9.08015 4.30041C9.11632 4.38189 9.1732 4.45246 9.24514 4.5051C9.31708 4.55773 9.40156 4.5906 9.49015 4.60041L13.0001 5.12041C13.1018 5.13347 13.1976 5.17518 13.2764 5.24067C13.3552 5.30615 13.4138 5.39271 13.4452 5.49022C13.4767 5.58774 13.4797 5.6922 13.454 5.79139C13.4284 5.89059 13.375 5.98042 13.3001 6.05041L10.7701 8.56041C10.7056 8.62074 10.6571 8.69625 10.6292 8.78009C10.6012 8.86392 10.5947 8.95341 10.6101 9.04041L11.2201 12.5704C11.2378 12.6719 11.2266 12.7762 11.1879 12.8716C11.1492 12.967 11.0845 13.0496 11.0011 13.1101C10.9178 13.1705 10.8191 13.2063 10.7164 13.2135C10.6137 13.2206 10.511 13.1988 10.4201 13.1504L7.26015 11.4804C7.17924 11.4407 7.09029 11.4201 7.00015 11.4201C6.91001 11.4201 6.82107 11.4407 6.74015 11.4804L3.58015 13.1504C3.48924 13.1988 3.38659 13.2206 3.28388 13.2135C3.18117 13.2063 3.08252 13.1705 2.99917 13.1101C2.91581 13.0496 2.85109 12.967 2.81237 12.8716C2.77366 12.7762 2.76249 12.6719 2.78015 12.5704L3.39015 9.00041C3.40561 8.91341 3.39907 8.82392 3.37113 8.74009C3.34319 8.65625 3.29472 8.58074 3.23015 8.52041L0.670155 6.05041C0.594418 5.97851 0.541155 5.88618 0.516819 5.78463C0.492483 5.68307 0.498119 5.57663 0.533042 5.47821C0.567966 5.37979 0.630679 5.29361 0.713586 5.2301C0.796493 5.1666 0.896035 5.12849 1.00015 5.12041L4.51015 4.60041C4.59875 4.5906 4.68323 4.55773 4.75517 4.5051C4.82711 4.45246 4.88399 4.38189 4.92015 4.30041L6.51015 1.09041C6.55345 0.996916 6.62259 0.917763 6.70942 0.862291C6.79624 0.806819 6.89712 0.777344 7.00015 0.777344C7.10318 0.777344 7.20407 0.806819 7.29089 0.862291C7.37771 0.917763 7.44685 0.996916 7.49015 1.09041Z" fill="transparent" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-xs" >استعلام</span>
          </NuxtLink>
        </div>
        <NuxtLink to="/checkout/cart" :class="['flex flex-col items-center relative space-y-1 p-2',{'activePage':route.path.startsWith('/checkout')}]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path d="M15.7729 9.30504V6.27304C15.7729 4.18904 14.0839 2.50004 12.0009 2.50004C9.91694 2.49104 8.21994 4.17204 8.21094 6.25604V6.27304V9.30504" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="nofill"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7422 21.0006H7.25778C4.90569 21.0006 3 19.0956 3 16.7456V11.2296C3 8.87961 4.90569 6.97461 7.25778 6.97461H16.7422C19.0943 6.97461 21 8.87961 21 11.2296V16.7456C21 19.0956 19.0943 21.0006 16.7422 21.0006Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>

          <span class="text-xs font-light">سبد خرید</span>
          <span v-if="cartStore.PendingOrder && cartStore.cartItemsCount > 0" class="absolute bg-brandOrange top-0 left-2 text-[8px] text-white aspect-square rounded-full w-4 h-4 text-center leading-[16px]" >
                {{ cartStore.cartItemsCount }}
              </span>
        </NuxtLink>
        <NuxtLink :to="!authStore.isLoggedIn ? '/auth/login' : '/profile'" :class="['flex flex-col items-center space-y-1 p-2',{'activePage':route.path.startsWith('/profile')}]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.983 15.3457C8.11536 15.3457 4.8125 15.9305 4.8125 18.2724C4.8125 20.6143 8.0944 21.22 11.983 21.22C15.8506 21.22 19.1525 20.6343 19.1525 18.2933C19.1525 15.9524 15.8715 15.3457 11.983 15.3457Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9829 12.0059C14.521 12.0059 16.5782 9.94779 16.5782 7.40969C16.5782 4.8716 14.521 2.81445 11.9829 2.81445C9.44484 2.81445 7.38675 4.8716 7.38675 7.40969C7.37817 9.93922 9.42198 11.9973 11.9506 12.0059H11.9829Z" stroke="black" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
          <span class="text-xs font-light" >پروفایل</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

