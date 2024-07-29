<template>
  <div class="max-w-[100vw] overflow-x-hidden">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <base-g-modal :title="authStore.authModalTitle" v-model="authStore.isAuthModalOpen">
        <auth-container />
      </base-g-modal>
    </ClientOnly>

    <ClientOnly>
      <Transition name="fade">
        <div class="fixed inset-0 grid place-items-center z-40 bg-black/20 backdrop-blur-sm" @click.self="cartStore.showAddedToCartModal = false" v-if="cartStore.showAddedToCartModal">
          <div class="w-5/6 lg:w-1/2 xl:w-1/3 2xl:w-1/4 bg-white rounded-xl addedToCartAnim flex flex-col items-center lg:items-start space-y-2 lg:space-y-0 px-2 pt-4 pb-8">
            <div class="flex items-center justify-between">
              <div class="flex flex-col lg:flex-row items-center gap-4">
                <img :src="`${SITE_URL}/product/images/${cartStore.currentAddedItemData.image.src}`" :alt="cartStore.currentAddedItemData.image.alt" class="w-[150px]">
                <div class="flex flex-col items-center lg:items-start space-y-2">
                  <span class="text-center lg:text-right">{{cartStore.currentAddedItemData.title}}</span>
                  <span class="opacity-60 text-sm font-light text-green-600">با موفقیت به سبد خرید اضافه شد</span>
                </div>
              </div>
            </div>
            <button @click="cartStore.showAddedToCartModal = false,cartStore.showCartModal = true" class="hidden md:flex text-[#070707] text-sm font-light items-center gap-2 mx-auto">
              <span>رفتن به سبد خرید</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.46027 7.67594L1.60758 1.63607M1.60758 1.63607L7.64745 1.48876M1.60758 1.63607L8.67865 8.70714" stroke="#070707" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button @click="cartStore.showAddedToCartModal = false,navigateTo('/checkout/cart')" class="md:hidden text-[#070707] text-sm font-light flex items-center gap-2 mx-auto">
              <span>رفتن به سبد خرید</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.46027 7.67594L1.60758 1.63607M1.60758 1.63607L7.64745 1.48876M1.60758 1.63607L8.67865 8.70714" stroke="#070707" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </Transition>
    </ClientOnly>

  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.store";
import {useAccountStore} from "~/stores/account.store";
import {useCartStore} from "~/stores/cart.store";
import {SITE_URL} from "~/utilities/api.config";

const authStore = useAuthStore();
const accountStore = useAccountStore();
const cartStore = useCartStore();

useHead({
  link:[
    {rel:"stylesheet",href:"https://v1.fontapi.ir/css/Estedad"},
  ]
})

onMounted(async ()=>{
  if (authStore.isLoggedIn) {
    await accountStore.initData();
  }
  await cartStore.refreshCart();
})
</script>

<style lang="scss">
body{
  @apply bg-[#FAFAFA] dark:bg-[#FAFAFA];
}
*{
  font-family: "Vazir FD",serif;
}
.container{
  max-width: 1400px;
}
@media screen and (max-width: 1500px){
  .container{
    max-width: 1200px;
  }
}

.logo-rotate, .logo-rotate-always{
  @apply w-[40px] 2xl:w-[50px] h-[40px] 2xl:h-[50px];
  transform-origin: center;
  transform-style: preserve-3d;

  .logo-style{
    position: absolute;
    //box-shadow: 0 0 15px 0 #F0462380;
    backface-visibility: hidden;
  }
}
.logo-rotate-loading{
  width: 100px;
  height: 100px;
  transform-origin: center;
  transform-style: preserve-3d;
  position: relative;

  .logo-style{
    position: absolute;
    //box-shadow: 0 0 15px 0 #F0462380;
    backface-visibility: hidden;
    width: 100px;
    height: 100px;
    img {
      width: 50px;
    }
  }
  @screen lg{
    width: 150px;
    height: 150px;
    .logo-style{
      position: absolute;
      //box-shadow: 0 0 15px 0 #F0462380;
      backface-visibility: hidden;
      width: 150px;
      height: 150px;
      img {
        width: 70px;
      }
    }
  }
}
.logo-rotate:hover , .logo-rotate-always, .logo-rotate-loading{
  animation: rotate-logo 4s linear infinite;
}

@keyframes rotate-logo {
  100%{
    transform: rotateY(360deg);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active{
  @apply transition-all duration-300;
}

.slide-fade-enter-from,
.slide-fade-leave-to{
  @apply opacity-0 -translate-y-4;
}

.slide-fade-bottom-enter-active,
.slide-fade-bottom-leave-active{
  @apply transition-all duration-300;
}

.slide-fade-bottom-enter-from,
.slide-fade-bottom-leave-to{
  @apply opacity-0 translate-y-4;
}

.fade-enter-active,
.fade-leave-active{
  @apply transition-opacity duration-300;
}
.fade-enter-from,
.fade-leave-to{
  @apply opacity-0;
}

.hover-brand:hover{
  box-shadow: 0 5px 5px 0 #F1482380;
}
.activePage{
  color:var(--primary);
  & svg path {
    fill: var(--primary);
    fill-opacity: 0.7;
    stroke: var(--primary);

    &.nofill {
      fill: transparent;
    }
  }
}

::-webkit-scrollbar-track
{
  //-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
  border-radius: 0;
}

::-webkit-scrollbar
{
  width: 5px;
  background-color: #F5F5F5;
  border-radius: 0;
}

::-webkit-scrollbar-thumb
{
  border-radius: 0;
  @apply bg-[#171717]/40;
}

</style>

<style>
:root {
  --primary: #FB7511;
  --primary-hover: #CE3415;
  --primary-text: #FB7511;

  --secondary: #E0E0E0;
  --secondary-hover: #C6BFBF;
  --secondary-text: #847A7A;

  --success: #38C157;
  --success-hover: #1E9E3A;
  --success-text: #30ad4d;

  --danger: #F42020;
  --danger-hover: #D31212;
  --danger-text: #F42020;

  --info: #5E8EEA;
  --info-hover: #275DC5;
  --info-text: #5E8EEA;

  --warning: #FFFC0D;
  --warning-hover: #E8E505;
  --warning-text: #555454;

  --disabled: #F5F5F5;
  --disabled-text: #BABABA;

}

/* HTML: <div class="loader"></div> */
.loader {
  width: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;
}
@keyframes l5 {
  0%  {box-shadow: 20px 0 #000, -20px 0 #0002;background: #000 }
  33% {box-shadow: 20px 0 #000, -20px 0 #0002;background: #0002}
  66% {box-shadow: 20px 0 #0002,-20px 0 #000; background: #0002}
  100%{box-shadow: 20px 0 #0002,-20px 0 #000; background: #000 }
}
</style>

<style>
.skeleton .skeleton-el{
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
}

@keyframes shine {
  to{
    background-position-x: -200%;
  }
}
</style>