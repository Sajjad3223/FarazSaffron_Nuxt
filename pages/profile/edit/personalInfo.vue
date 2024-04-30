<template>
  <div>
    <Head>
      <Title>اطلاعات کاربری</Title>
    </Head>
    <div >
      <header class="w-full h-[80px] px-4 flex items-center justify-center relative">
        <NuxtLink to="/profile/personal-info" class="absolute right-7">
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M1 13L6 7L1 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <span class="font-light">
          ثبت اطلاعات کاربری
        </span>
      </header>
      <hr class="mb-4">
      <profile-edit-personal-info />
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout:'mobile-layout-just-footer'
})


</script>