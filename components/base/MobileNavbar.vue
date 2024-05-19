<template>
  <header class="w-full h-[60px] px-4 flex items-center justify-between">
    <button @click="showSidebar = true">
      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
          <path d="M21 4H9" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 9H5" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 14H13" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
    </button>
    <NuxtLink to="/" class="flex items-center gap-4">
      <div class="w-max relative">
        <div class="w-[25px] h-[25px] rounded-full bg-brandOrange grid place-items-center "
             style="box-shadow: 0 0 15px 0 #F0462380;">
          <img src="~/assets/images/gp-alone-white.png" alt="gp alone white" class="w-4">
        </div><!--
          <div class="w-[25px] h-[25px] rounded-full bg-brandOrange grid place-items-center logo-style" style="transform: rotateY(180deg)"
          >
            <img src="~/assets/images/GP-filled-white.png" alt="gp alone white" class="w-4">
          </div>-->
      </div>
      <div class="flex flex-col items-start">
        <strong>زعفران <span class="text-brandOrange">جــــــی پــــــی</span></strong>
      </div>
    </NuxtLink>
    <NuxtLink :to=" !authStore.isLoggedIn ? '/auth/login' : '/profile'" class="flex items-center gap-1">
      <span v-if="!authStore.isLoggedIn">ورود</span>
      <span v-else>پروفایل</span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.8">
          <path d="M6.14112 8.9834L15.1719 8.9834" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.33594 11.1709L6.13994 8.9839L8.33594 6.7969" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.6211 12.4581V13.1579C11.6211 14.6841 10.3843 15.9209 8.85734 15.9209H5.19434C3.67184 15.9209 2.43809 14.6871 2.43809 13.1646L2.43809 4.80965C2.43809 3.2834 3.67559 2.0459 5.20184 2.0459H8.86559C10.3873 2.0459 11.6211 3.2804 11.6211 4.80215V5.50865" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
    </NuxtLink>
  </header>
  <Transition enter-active-class="transition-all duration-300" enter-from-class="translate-x-full opacity-0" enter-to-class="transition-x-0 opacity-100"
              leave-active-class="transition-all duration-300" leave-to-class="translate-x-full opacity-0" leave-from-class="transition-x-0 opacity-100">
    <div v-if="showSidebar" class="fixed bg-black/10 flex inset-0 z-20" @click.self="showSidebar = false">
      <div class="w-2/3 bg-white h-full rounded-l-3xl flex flex-col px-4 py-8 items-stretch">
        <NuxtLink to="/" class="flex items-center gap-4">
          <div class="w-max relative">
            <div class="w-[25px] h-[25px] rounded-full bg-brandOrange grid place-items-center "
                 style="box-shadow: 0 0 15px 0 #F0462380;">
              <img src="~/assets/images/gp-alone-white.png" alt="gp alone white" class="w-4">
            </div><!--
          <div class="w-[25px] h-[25px] rounded-full bg-brandOrange grid place-items-center logo-style" style="transform: rotateY(180deg)"
          >
            <img src="~/assets/images/GP-filled-white.png" alt="gp alone white" class="w-4">
          </div>-->
          </div>
          <div class="flex flex-col items-start text-sm">
            <strong>زعفران <span class="text-brandOrange">جـــی پـــی</span></strong>
          </div>
        </NuxtLink>
        <NuxtLink to="/beSeller" class="mt-12 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2545 6.54492V9.16408C12.2545 11.7832 11.2103 12.8333 8.58531 12.8333H5.44117C5.10283 12.8333 4.79365 12.8158 4.50781 12.775" stroke="#F04623" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.77344 9.05328V6.54492" stroke="#F04623" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.01908 7.00033C8.08658 7.00033 8.87408 6.13119 8.76908 5.06369L8.37822 1.16699H5.65406L5.26324 5.06369C5.15824 6.13119 5.95158 7.00033 7.01908 7.00033Z" stroke="#F04623" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6907 7.00033C11.8691 7.00033 12.7324 6.04364 12.6157 4.87114L12.4524 3.26698C12.2424 1.75031 11.6591 1.16699 10.1307 1.16699H8.35156L8.7599 5.25616C8.8649 6.21866 9.72823 7.00033 10.6907 7.00033Z" stroke="#F04623" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.30852 7.00033C4.27102 7.00033 5.14018 6.21866 5.23351 5.25616L5.36186 3.96702L5.64185 1.16699H3.86269C2.33436 1.16699 1.75104 1.75031 1.54104 3.26698L1.37769 4.87114C1.26102 6.04364 2.13019 7.00033 3.30852 7.00033Z" stroke="#F04623" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.2487 11.0833C5.2487 11.5208 5.12619 11.935 4.91035 12.285C4.79952 12.4717 4.66535 12.6408 4.50785 12.775C4.49035 12.7983 4.47287 12.8158 4.44953 12.8333C4.0412 13.2008 3.50453 13.4167 2.91536 13.4167C2.2037 13.4167 1.56785 13.0958 1.14785 12.5941C1.13618 12.5766 1.11871 12.565 1.10705 12.5475C1.03705 12.4658 0.972875 12.3784 0.920375 12.285C0.704541 11.935 0.582031 11.5208 0.582031 11.0833C0.582031 10.3483 0.920365 9.68917 1.45703 9.26334C1.5562 9.18167 1.66119 9.11168 1.77202 9.05334C2.11035 8.86084 2.5012 8.75 2.91536 8.75C3.4987 8.75 4.02368 8.95998 4.43202 9.31582C4.50202 9.36832 4.56619 9.43252 4.62453 9.49668C5.00953 9.91668 5.2487 10.4708 5.2487 11.0833Z" stroke="#F04623" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.7852 11.0713H2.04688" stroke="#F04623" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.91797 10.2197V11.9639" stroke="#F04623" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-brandOrange">فروشنده شو</span>
          </div>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1L1 4.5L4 8" stroke="#F04825" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <hr class="my-4">
        <ul class="flex flex-col items-stretch w-full space-y-4" v-if="!loading">
          <li class="flex flex-col" v-for="c in categories">
            <button class="flex justify-between items-center px-2" @click="categoryHovered(c.id)">
              <span>{{c.title}}</span>
              <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" :class="['transition-transform duration-200',{'rotate-90':hoveredCategory === c.id}]">
                <path opacity="0.8" d="M1 1L4.5 4L8 1" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <Transition enter-active-class="transition-all duration-200 overflow-hidden" enter-to-class="max-h-[300px]" enter-from-class="max-h-[0px]"
                        leave-active-class="transition-all duration-200 overflow-hidden" leave-from-class="max-h-[300px]" leave-to-class="max-h-[0px]">
              <ul class="bg-gray-100 p-2 rounded-b-xl mt-2" v-if="hoveredCategory != 0 && hoveredCategory === c.id">
                <li class="w-full flex items-center justify-between p-2 text-xs" v-for="s in c.children">
                  <span>{{ s.title }}</span>
                  <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-90">
                    <path opacity="0.8" d="M1 1L4.5 4L8 1" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </li>
              </ul>
            </Transition>
          </li>
        </ul>
        <hr class="my-4">
        <a :href="BLOGS_URL" target="_blank" class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.8346 2.72383V9.76467C12.8346 10.3247 12.3796 10.8497 11.8196 10.9197L11.6271 10.943C10.3555 11.1122 8.39545 11.7597 7.27545 12.378C7.12379 12.4655 6.87297 12.4655 6.71547 12.378L6.69212 12.3663C5.57212 11.7538 3.61799 11.1122 2.35215 10.943L2.18296 10.9197C1.62296 10.8497 1.16797 10.3247 1.16797 9.76467V2.71799C1.16797 2.02382 1.73379 1.49883 2.42795 1.55716C3.65295 1.65633 5.50795 2.27468 6.54629 2.92218L6.69212 3.00966C6.86129 3.11466 7.14132 3.11466 7.31049 3.00966L7.40964 2.9455C7.77714 2.718 8.2438 2.4905 8.7513 2.28633V4.66634L9.91797 3.8905L11.0846 4.66634V1.62136C11.2421 1.59219 11.3938 1.57467 11.5338 1.563H11.5688C12.263 1.50467 12.8346 2.02383 12.8346 2.72383Z" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7 3.20215V11.9521" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.0833 1.62207V4.66705L9.91667 3.89121L8.75 4.66705V2.28704C9.51417 1.98371 10.3658 1.73874 11.0833 1.62207Z" stroke="#3A3A3A" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>مقالات جی پی</span>
          </div>
          <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 1L1 4.5L4 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <hr class="my-4">
        <button class="flex items-center gap-2 text-danger">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75952 4.31102V3.76677C8.75952 2.57969 7.79702 1.61719 6.60994 1.61719H3.76619C2.57969 1.61719 1.61719 2.57969 1.61719 3.76677V10.2593C1.61719 11.4464 2.57969 12.4089 3.76619 12.4089H6.61577C7.79935 12.4089 8.75952 11.4493 8.75952 10.2657V9.7156" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.7231 7.01335H5.69922" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.0156 5.3125L12.7236 7.01292L11.0156 8.71392" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>خروج</span>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type {CategoryDto} from "~/models/categories/categoryQueries";
import {GetCategories} from "~/services/category.service";
import {BLOGS_URL} from "~/utilities/api.config";

const showSidebar = ref(false);
const loading = ref(false);
const authStore = useAuthStore();

const hoveredCategory = ref(0);
const categories:Ref<CategoryDto[]> = ref([]);


const refreshCategories = async ()=>{
  const result = await GetCategories({pageId:1,take:100,search:''});
  if(result.isSuccess){
    categories.value = result.data?.data!;
  }
}

const categoryHovered = (id:number) => {
  if(hoveredCategory.value == id)
    hoveredCategory.value = 0
  else
    hoveredCategory.value = id;
}

onMounted(async()=>{
  loading.value = true;

  await refreshCategories();

  loading.value = false;
})

</script>