<template>
  <div>
    <Head>
      <Title>پنل مدیریت</Title>
    </Head>
    <h2 class="text-xl">
      Index Admin
    </h2>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'admin',
  middleware:'admin'
})
</script>