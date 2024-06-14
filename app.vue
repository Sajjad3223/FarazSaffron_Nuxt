<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <base-g-modal title="ثبت نام" v-model="authStore.isRegisterModalOpen">
        <auth-register />
      </base-g-modal>
      <base-g-modal title="ورود" v-model="authStore.isLoginModalOpen" >
        <auth-login />
      </base-g-modal>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.store";
import {useAccountStore} from "~/stores/account.store";
import {useCartStore} from "~/stores/cart.store";

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

<style>
body{
  @apply bg-bgWhite dark:bg-gray-900;
}

</style>

<style lang="scss">
body{
  @apply bg-white dark:bg-white;
}
*{
  //font-family: "Vazir FD",serif;
  font-family: "IRANSansWeb(FaNum)",serif !important;
}

.logo-rotate, .logo-rotate-always{
  width: 50px;
  height: 50px;
  transform-origin: center;
  transform-style: preserve-3d;

  .logo-style{
    position: absolute;
    box-shadow: 0 0 15px 0 #F0462380;
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
    box-shadow: 0 0 15px 0 #F0462380;
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
      box-shadow: 0 0 15px 0 #F0462380;
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
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
}

::-webkit-scrollbar
{
  width: 10px;
  background-color: #F5F5F5;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  background-color: #F04623;
  background-image: -webkit-linear-gradient(45deg,
      rgba(255, 255, 255, .2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, .2) 50%,
      rgba(255, 255, 255, .2) 75%,
      transparent 75%,
      transparent)
}

</style>

<style>
:root {
  --primary: #F04623;
  --primary-hover: #CE3415;
  --primary-text: white;

  --secondary: #E0E0E0;
  --secondary-hover: #C6BFBF;
  --secondary-text: #847A7A;

  --success: #38C15733;
  --success-hover: #1E9E3A;
  --success-text: #30ad4d;

  --danger: #F4202033;
  --danger-hover: #D31212;
  --danger-text: #F42020;

  --info: #5E8EEA;
  --info-hover: #275DC5;
  --info-text: white;

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