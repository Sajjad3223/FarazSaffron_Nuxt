<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <base-f-modal v-model="authStore.isLoginModalOpen" title="ورود، ثبت نام">
        <auth-container @loggedIn="authStore.isLoginModalOpen = false , authStore.isLoggedIn = true" />
      </base-f-modal>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.store";
import {useAccountStore} from "~/stores/account.store";

const authStore = useAuthStore();
const accountStore = useAccountStore();

useHead({
  link:[
    //{rel:"stylesheet",href:"https://v1.fontapi.ir/css/VazirFD"},
    {rel:"stylesheet",href:"https://v1.fontapi.ir/css/Estedad"},
  ]
})

onMounted(async ()=>{
  if (authStore.isLoggedIn) {
    await accountStore.initData();
    console.log(accountStore.currentUser);
  }
})
</script>

<style>
body{
  @apply bg-bgWhite dark:bg-gray-900;
}
</style>