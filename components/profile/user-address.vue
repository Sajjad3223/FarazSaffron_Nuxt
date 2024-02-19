

<template>
  <div>
    <form action="" class="space-y-4 lg:p-4">
      <base-f-input multi-line name="address" id="address" label="نشانی پستی*"/>
      <hr>
      <div class="grid grid-cols-2 gap-2 lg:gap-4">
        <base-f-input label="استان" name="ostan" id="ostan"/>
        <base-f-input label="شهر" name="city" id="city"/>
        <base-f-input label="محله" name="mahale" id="mahale" class="col-span-full"/>
        <div class="grid grid-cols-2 gap-2 lg:gap-4">
          <base-f-input label="پلاک" name="ostan" id="ostan"/>
          <base-f-input label="واحد" name="city" id="city"/>
        </div>
        <base-f-input label="کد پستی" name="ostan" id="ostan"/>
      </div>
      <hr>
      <div class="grid grid-cols-2 gap-2 lg:gap-4">
        <base-f-input label="نام گیرنده" name="ostan" id="ostan"/>
        <base-f-input label="نام خانوادگی گیرنده" name="city" id="city"/>
        <base-f-input label="شماره موبایل" name="mahale" id="mahale" class="col-span-full"/>
      </div>

      <base-f-button color="primary" w-full>
        ثبت آدرس جدید
      </base-f-button>
    </form>
  </div>
</template>

<script setup lang="ts">

</script>