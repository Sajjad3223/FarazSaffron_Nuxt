<script setup lang="ts">
const router = useRouter();
onMounted(async ()=>{
  await router.push('/404');
})
</script>

<template>
<div>
  آدرس وارد شده اشتباه است
  <div>
    <NuxtLink to="/">
      بازکشت به صفحه اصلی
    </NuxtLink>
  </div>
</div>
</template>

<style scoped>

</style>