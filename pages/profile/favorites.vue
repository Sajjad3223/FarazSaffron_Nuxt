<template>
  <div>
    <div>
      <div class="text-2xl font-bold flex items-center gap-2 dark:text-white">
        <NuxtLink to="/profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <strong>علاقه مندی های من</strong>
      </div>
      <hr class="my-3 border-2 dark:border-gray-600">
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 mt-12">
      <li class="flex flex-col items-center space-y-4 lg:odd:border-l border-b dark:text-white dark:border-gray-700 p-4" v-for="i in 3" :key="i">
        <NuxtLink to="/product/thing" class="w-1/3 lg:w-auto">
          <img src="~/assets/images/saffron-bar.png" alt="jar" class="w-full rounded-lg">
        </NuxtLink>
        <NuxtLink to="/product/thing" class="text-lg lg:text-xl font-bold">
          زعفران شیشه ای نگین صد در صد خالص
        </NuxtLink>
        <span>2,206,000 <small>ریال</small></span>
        <div class="flex space-x-2 space-x-reverse w-full lg:w-1/2">
          <button class="p-2 border-danger border rounded-lg text-danger hover:bg-danger hover:text-white transition duration-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z" fill="currentColor"/>
            </svg>
          </button>
          <button class="flex gap-2 flex-row-reverse rounded-lg border-brandOrange border p-2 text-brandOrange flex-1 justify-center hover:bg-brandOrange hover:text-white transition duration-200">
            <span>اضافه به سبد خرید</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 8H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'profile'
})
</script>