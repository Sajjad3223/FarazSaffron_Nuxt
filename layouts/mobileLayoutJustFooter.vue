<template>
  <div>
    <div class="hidden md:flex flex-col">
      <base-f-navbar />

      <!--  Body  -->
      <main class="container mx-auto z-0 mt-5">

        <slot />

      </main>

      <base-f-footer />
    </div>
    <div class="md:hidden overflow-y-auto relative text-sm font-medium">
      <main class="mx-4 mb-[90px]">
        <slot></slot>
      </main>

      <base-mobile-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {GetCategories} from "~/services/category.service";
import type {CategoryDto} from "~/models/categories/categoryQueries";

const categories:Ref<CategoryDto[]> = ref([]);

onMounted(async ()=>{
  await refreshCategories();
})

const refreshCategories = async ()=>{
  const result = await GetCategories({pageId:1,take:100,search:''});
  if(result.isSuccess){
    categories.value = result.data?.data!;
  }
}

</script>

<style lang="scss">
*{
  font-family: "Vazir FD",serif;
}

.logo-style{
  position: absolute;
  box-shadow: 0 0 15px 0 #F0462380;
  backface-visibility: hidden;
}

.slide-fade-enter-active,
.slide-fade-leave-active{
  @apply transition-all duration-300;
}

.slide-fade-enter-from,
.slide-fade-leave-to{
  @apply opacity-0 -translate-y-4;
}
.slide-fade-enter-to,
.slide-fade-leave-from{
  @apply opacity-100 translate-y-0;
}

.hover-brand:hover{
  box-shadow: 0 5px 5px 0 #F1482380;
}
.activePage{
  color:var(--primary);
  & svg path {
    fill: var(--primary);
    fill-opacity: 0.7;
    stroke: var(--primary);

    &.nofill {
      fill: transparent;
    }
  }
}

</style>
