<template>
  <div>
    <Transition name="layout" mode="out-in">
      <auth-login v-if="authStore.currentStep == 'login'" />
      <auth-register v-else-if="authStore.currentStep == 'register'"/>
    </Transition>
  </div>
</template>

<script setup lang="ts">

import {useAuthStore} from "~/stores/auth.store";

const authStore = useAuthStore();
</script>