<script setup lang="ts">
const authStore = useAuthStore();
const cartStore = useCartStore();

const route = useRoute();

</script>

<template>
  <footer class="fixed bg-white z-10 bottom-0 inset-x-0 h-[80x] py-2" style="box-shadow: 0 -10px 20px 0 #B0B0B08A;">
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
  </footer>
</template>

