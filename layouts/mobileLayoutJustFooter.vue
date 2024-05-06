<template>
  <div v-if="!isLoading">
    <div v-if="!utilsStore.isMobile()">
      <base-f-navbar />

      <!--  Body  -->
      <main class="container mx-auto z-0 mt-5">

        <slot />

      </main>

      <base-f-footer />
    </div>
    <div v-else class="overflow-y-auto relative text-sm font-medium">
      <main class="mx-4 mb-[90px]">
        <slot></slot>
      </main>

      <base-mobile-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {SITE_URL} from "~/utilities/api.config";
import {GetCategories} from "~/services/category.service";
import type {CategoryDto} from "~/models/categories/categoryQueries";

const authStore = useAuthStore();
const cartStore = useCartStore();
const accountStore = useAccountStore();
const utilsStore = useUtilStore();
const isLoading = ref(true);
const showSidebar = ref(false);
const isCategoryHovered = ref(false);
const categories:Ref<CategoryDto[]> = ref([]);
const subCategories:Ref<CategoryDto[]> = ref([]);

onMounted(async ()=>{
  await refreshCategories();
  isLoading.value = false;
})

const refreshCategories = async ()=>{
  const result = await GetCategories({pageId:1,take:100,search:''});
  if(result.isSuccess){
    categories.value = result.data?.data!;
  }
}

const categorHovered = (category:CategoryDto) => {
  isCategoryHovered.value = true;
  subCategories.value = category.children ?? [];
}

const showCategories = ref(false);
const showAccountOptions = ref(false);
const showCart = ref(false);
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
/*.logo-rotate{
  width: 50px;
  height: 50px;
  transform-origin: center;
  transform-style: preserve-3d;
  animation: rotate-logo 4s linear infinite;
}

@keyframes rotate-logo {
  100%{
    transform: rotateY(360deg);
  }
}*/

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

<style>
:root {
  --primary: #F04623;
  --primary-hover: #CE3415;
  --primary-text: white;

  --secondary: #E0E0E0;
  --secondary-hover: #C6BFBF;
  --secondary-text: #847A7A;

  --success: #38C157;
  --success-hover: #1E9E3A;
  --success-text: white;

  --danger: #F42020;
  --danger-hover: #D31212;
  --danger-text: white;

  --info: #5E8EEA;
  --info-hover: #275DC5;
  --info-text: white;

  --warning: #FFFC0D;
  --warning-hover: #E8E505;
  --warning-text: #555454;

  --disabled: #F5F5F5;
  --disabled-text: #BABABA;

}
</style>