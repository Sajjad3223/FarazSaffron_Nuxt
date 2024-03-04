<script setup lang="ts">

</script>

<template>
<div class="space-y-2">
  <span class="dark:text-white text-sm">
    ابعاد محصول
  </span>
  <div class="grid grid-cols-3 h-12">
    <div class="relative flex items-stretch w-full">
      <label for="" class="absolute right-4 self-center text-sm opacity-50 pointer-events-none dark:text-white">طول</label>
      <input type="number" class=" outline-none px-2 rounded-r-lg w-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:border focus:border-brandOrange" dir="ltr">
    </div>
    <div class="relative flex items-stretch w-full">
      <label for="" class="absolute right-4 self-center text-sm opacity-50 pointer-events-none dark:text-white">عرض</label>
      <input type="number" class="border-x dark:border-gray-900 outline-none px-2 w-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:border focus:border-brandOrange" dir="ltr">
    </div>
    <div class="relative flex items-stretch w-full">
      <label for="" class="absolute right-4 self-center text-sm opacity-50 pointer-events-none dark:text-white">ارتفاع</label>
      <input type="number" class=" outline-none px-2 rounded-l-lg w-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:border focus:border-brandOrange" dir="ltr">
    </div>
  </div>
</div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>