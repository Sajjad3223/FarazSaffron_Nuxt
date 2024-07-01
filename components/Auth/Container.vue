<template>
  <div>
    <Transition name="layout" mode="out-in">
      <auth-login v-if="authStore.currentStep == 'login'" />
      <auth-register v-else-if="authStore.currentStep == 'register'"/>
      <auth-forget-password v-else-if="authStore.currentStep == 'forgotPassword'"/>
      <auth-confirm-forget-password v-else-if="authStore.currentStep == 'confirmForgetPassword'"/>
      <auth-change-password-forget-password v-else-if="authStore.currentStep == 'changePasswordForgetPassword'"/>
    </Transition>
  </div>
</template>

<script setup lang="ts">

import {useAuthStore} from "~/stores/auth.store";

const authStore = useAuthStore();
</script>