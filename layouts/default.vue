<template>
  <div v-if="!isLoading">
    <div v-if="!utilsStore.isMobile()">
      <base-f-navbar />

      <!--  Body  -->
      <main class="container mx-auto px-24 3xl:px-0 z-0 mt-5">

        <slot />

      </main>

      <base-f-footer />
    </div>
    <div v-else class="h-screen overflow-y-auto relative text-sm font-medium">
      <BaseMobileNavbar />
      <main class="my-6 mx-4 mb-[90px]">
        <slot></slot>
      </main>
      <BaseMobileFooter />
    </div>
  </div>
  <div class="flex flex-col items-center h-screen w-full justify-center relative" v-else>
    <div class="logo-rotate-loading origin-center relative">
      <div class="rounded-full bg-brandOrange grid place-items-center logo-style"
      >
        <img src="~/assets/images/gp-alone-white.png" alt="gp alone white">
      </div>
      <div class="rounded-full bg-brandOrange grid place-items-center logo-style" style="transform: rotateY(180deg)"
      >
        <img src="~/assets/images/GP-filled-white.png" alt="gp alone white">
      </div>
    </div>
    <div class="flex items-end lg:text-2xl font-thin mt-12">
      <span>در حال بار‌گذاری</span>
      <div class="mr-8 scale-50 lg:scale-90 origin-right -translate-y-2 w-[48px]">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const utilsStore = useUtilStore();
const isLoading = ref(true);

onMounted(async ()=>{
  isLoading.value = false;
})

</script>