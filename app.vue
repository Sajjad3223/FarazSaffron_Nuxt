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
<!--  <coming-soon />-->
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.store";
import {useAccountStore} from "~/stores/account.store";
import {useCartStore} from "~/stores/cart.store";
import ComingSoon from "~/pages/comingSoon.vue";

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
    await cartStore.refreshCart();
  }
})
</script>

<style>
body{
  @apply bg-bgWhite dark:bg-gray-900;
}
</style>