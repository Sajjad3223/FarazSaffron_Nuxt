<template>
  <div>
    <Head>
      <Title>علاقه مندی ها</Title>
    </Head>
    <div v-if="!utilStore.isMobile()">
      <div>
        <div class="text-2xl font-bold flex items-center gap-2 ">
          <NuxtLink to="/profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
          <strong>علاقه مندی های من</strong>
        </div>
        <hr class="my-3 border-2 ">
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-3 mt-12">
        <li class="flex flex-col items-center space-y-4 border p-4" v-for="f in favorites" :key="f.id">
          <NuxtLink :to="`/product/${f.postSlug}`" class="w-1/3 lg:w-auto">
            <img :src="`${SITE_URL}/product/images/${f.postImage.src}`" :alt="f.postImage.alt" class="w-full rounded-lg max-h-[250px]">
          </NuxtLink>
          <NuxtLink :to="`/product/${f.postSlug}`" class="text-lg lg:text-xl font-bold">
            {{f.postTitle}}
          </NuxtLink>
          <div class="flex space-x-2 space-x-reverse w-full lg:w-2/3">
            <base-g-button button-type="white" color="danger" @click="removeFavorite(f.id)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z" fill="currentColor"/>
              </svg>
            </base-g-button>
            <base-g-button button-type="outline" @click="cartStore.addToCart(f.postId,f.postSlug)">
              <span class="text-xs">اضافه به سبد خرید</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
                <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 8H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </base-g-button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <header class="w-full h-[80px] px-4 flex items-center justify-center relative">
        <NuxtLink to="/profile" class="absolute right-7">
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M1 13L6 7L1 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <span class="font-light">
          محبوب های من
        </span>
      </header>
      <hr>
      <ul>
        <li class=" border-b last:border-none py-4 w-full flex items-stretch" v-for="f in favorites" :key="f.id">
          <div class="flex-1 flex flex-col py-2 space-y-4">
            <div class="flex items-start justify-between">
              <NuxtLink :to="`/product/${f.postSlug}`" class="w-3/4 font-bold">
                {{f.postTitle}}
              </NuxtLink>
            </div>
            <div class="flex w-full items-center gap-2">
              <base-g-button button-type="white" color="danger" @click="removeFavorite(f.id)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z" fill="currentColor"/>
                </svg>
              </base-g-button>
              <base-g-button button-type="outline" @click="cartStore.addToCart(f.postId,f.postSlug)" :px="2" :py="1">
                <span class="text-xs">اضافه به سبد خرید</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
                  <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 8H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </base-g-button>
            </div>
          </div>
          <NuxtLink :to="`/product/${f.postSlug}`" class="max-w-[120px]">
            <img :src="`${SITE_URL}/product/images/${f.postImage.src}`" :alt="f.postImage.alt" class="w-full rounded-lg">
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {FavoriteDto} from "~/models/favorite/favoriteDto";
import {DeleteFavorite, GetFavorites} from "~/services/favorite.service";
import {SITE_URL} from "~/utilities/api.config";

definePageMeta({
  layout:'profile'
})

const utilStore = useUtilStore();
const cartStore = useCartStore();
const toast = useToast();
const pageId = ref(1);

const favorites: Ref<FavoriteDto[]> = ref([]);

onMounted(async ()=>{
  await getData();
})

const getData = async ()=>{
  const result = await GetFavorites({
    pageId:pageId.value,
    take:6
  });
  if(result.isSuccess){
    favorites.value = result.data ?? [];
  }
}

const removeFavorite = async (id:string) =>{
  const result = await DeleteFavorite(id);
  if(result.isSuccess){
    //toast.showToast("علاقه مندی با موفقیت حذف شد",ToastType.success,3000,true);
    await getData();
  }else{
    await toast.showError(result.metaData);
  }
}

</script>