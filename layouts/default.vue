<template>
  <div>
    <div class="hidden md:block">
      <base-f-navbar />

      <!--  Body  -->
      <main class="w-full z-0">

        <slot />

      </main>

      <base-f-footer />
    </div>
    <div class="md:hidden h-screen overflow-y-auto relative text-sm font-medium">
      <BaseMobileNavbar />
      <main class="my-6 mx-4 mb-[90px]">
        <slot></slot>
      </main>
      <BaseMobileFooter />
      <BaseMFooter />
    </div>
  </div>
  <g-loading v-if="isLoading" />
</template>

<script setup lang="ts">
const isLoading = ref(true);

onMounted(async ()=>{
  isLoading.value = false;
})

</script>