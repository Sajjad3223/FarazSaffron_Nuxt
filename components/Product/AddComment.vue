<template>
  <form action="" class="flex flex-col space-y-4">
    <div class="flex flex-col w-full space-y-2">
      <span class="font-bold mr-4">به این محصول امتیاز دهید</span>
      <div class="flex flex-col px-6 items-center">
        <input type="range" name="r" id="r" max="4" step="1" value="1" class="w-full px-4 ">
        <div class="w-full flex justify-between">
          <span class="text-center text-xs w-6 text-nowrap overflow-visible">خیلی ضعیف</span>
          <span class="text-center text-xs w-6 text-nowrap overflow-visible ">ضعیف</span>
          <span class="text-center text-xs w-6 text-nowrap overflow-visible ">متوسط</span>
          <span class="text-center text-xs w-6 text-nowrap overflow-visible ">خوب</span>
          <span class="text-center text-xs w-6 text-nowrap overflow-visible ">عالی</span>
        </div>
      </div>
    </div>
    <hr>
    <div class="flex flex-col space-y-2">
      <label for="">نظر خود را وارد کنید</label>
      <textarea name="" id="" rows="3" class="border rounded-xl p-3" placeholder="نظر شما ..."></textarea>
    </div>
    <hr>
    <button class="bg-brandOrange w-full p-2 text-xl text-white text-center rounded-lg">
      ثبت نظر
    </button>
  </form>
</template>

<script setup lang="ts">

</script>