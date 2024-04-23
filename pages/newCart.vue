<template>
  <div class="mt-12">
    <div class="rounded-2xl p-8 bg-[#FAFAFA] flex flex-col items-center">
      <!--  TODO put steps   -->
      <div></div>

      <!--  GP Peyk   -->
      <div class="w-full rounded-xl border border-opacity-25 p-5">
        <div class="w-3/4 mx-auto grid grid-cols-2 items-center">
          <div class="flex flex-col items-start space-y-4">
            <h3 class="text-3xl font-bold text-brandOrange">جی پی پیک</h3>
            <strong class="text-lg">خدمات ویژه با اشتراک جی پی پیک</strong>
            <base-g-button color="primary" button-type="bg" >
              <span>دریافت این خدمات ویژه</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-125">
                <path d="M14 17L9 12L14 7" stroke="#FAFAFA" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </base-g-button>
          </div>
          <ul class="list-disc flex flex-col space-y-4 opacity-70 font-semibold">
            <li>ارسال رایگان این سفارش و ۳ سفارش دیگر (در هرماه اشتراک)</li>
            <li>مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای بهداشتی)</li>
            <li>امکان ارسال فوری بعضی از کالاها ( رایگان )</li>
          </ul>
        </div>
      </div>

      <!--  Main   -->
      <main class="flex items-start w-full relative">
        <!--  Items   -->
        <div></div>
        <!--  Prices   -->
        <div></div>
      </main>

    </div>
    <div class="mt-8">

    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'new-layout'
})

</script>