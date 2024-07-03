<script setup lang="ts">
onMounted(()=>{

})
</script>

<template>
  <div class="w-[400px] rounded-2xl p-5 h-[200px] bg-white border shadow flex flex-col items-center justify-center space-y-5">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75012C17.108 2.75012 21.25 6.89112 21.25 12.0001C21.25 17.1081 17.108 21.2501 12 21.2501C6.891 21.2501 2.75 17.1081 2.75 12.0001C2.75 6.89112 6.891 2.75012 12 2.75012Z" stroke="#2783FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.9951 8.20422V12.6232" stroke="#2783FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.995 15.7961H12.005" stroke="#2783FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span>آیا مایلید به پنل کاربری منتقل شوید؟</span>
    <div class="flex items-center gap-4">
      <button class="px-6 py-1 rounded-md border">خیر</button>
      <button class="px-6 py-1 rounded-md bg-primary text-white">بله</button>
    </div>
  </div>
</template>

<style scoped>

</style>