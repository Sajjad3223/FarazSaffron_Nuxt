<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <base-f-modal v-model="authStore.isLoginModalOpen" title="ورود، ثبت نام">
        <auth-login  @loggedIn="authStore.isLoginModalOpen = false , authStore.isLoggedIn = true" />
      </base-f-modal>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.store";

const authStore = useAuthStore();

useHead({
  link:[
    {rel:"stylesheet",href:"https://v1.fontapi.ir/css/VazirFD"},
    {rel:"stylesheet",href:"https://v1.fontapi.ir/css/Estedad"},
  ]
})
</script>

