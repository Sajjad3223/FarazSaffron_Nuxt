<template>
  <div  class="relative h-max w-[140px] rounded-md mx-2 text-right border border-[#DDDDDD] transition-shadow duration-300 hover:shadow-xl" dir="rtl">
    <NuxtLink :to="`/product/${product.slug}`">
      <img :src="`${SITE_URL}/product/images/${product.mainImage.src}`" :alt="product.mainImage.alt" class="mx-auto max-h-[100px] hover:scale-110 transition-transform duration-300">
    </NuxtLink>
    <!-- Like Button  -->
<!--    <button class="border grid place-items-center rounded-lg border-[#D0D0D0] w-[30px] h-[30px] absolute top-2 right-2 hover:shadow-lg">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="18" height="18" fill="url(#pattern0_308_4084)" fill-opacity="0.3"/>
        <defs>
          <pattern id="pattern0_308_4084" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_308_4084" transform="scale(0.01)"/>
          </pattern>
          <image id="image0_308_4084" width="100" height="100" xlink:href="data:image/png;base64,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"/>
        </defs>
      </svg>
    </button>-->
    <button class="border grid place-items-center z-10 rounded-lg border-[#D0D0D0] w-[30px] h-[30px] absolute top-2 right-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-danger"
            v-if="(!accountStore.initLoading && accountStore.isFavorite(product.id,EPostType.Product) && !removedFavorite) || isFavorite " @click="removeFavorite">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75 ">
        <path d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z" fill="currentColor"/>
      </svg>
    </button>
    <button class="border grid place-items-center rounded-lg border-[#D0D0D0] w-[30px] h-[30px] absolute top-2 right-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-danger"
            v-else-if="authStore.isLoggedIn || removedFavorite" @click="addFavorite">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75 opacity-50">
        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <Transition>
      <button class="grid pointer-events-none place-items-center rounded-lg border-[#D0D0D0] w-[30px] h-[30px] absolute top-2 right-2 text-danger like-anim"
              v-if="isFavorite">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75 opacity-70">
          <path d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z" fill="currentColor"/>
        </svg>
      </button>
    </Transition>
    <!-- Discount  -->
    <div class="absolute left-4 top-4 grid place-items-center bg-brandOrange rounded-md rounded-b-lg w-6 h-6" v-if="product.discount !== 0">
      <span class="text-[10px] font-light text-white" style="font-family: 'Vazir FD',serif">{{ product.discount }}%</span>
    </div>
    <hr>
    <div class="px-4 py-2 flex flex-col w-full items-stretch">
      <div class="flex flex-col">
        <NuxtLink :to="`/product/${product.slug}`" class="min-h-[40px]">
          <strong class=" text-[#626262] hover:text-brandOrange text-[10px] font-black transition-colors duration-200">{{ product.title }}</strong>
        </NuxtLink>
        <div class="flex items-center justify-between">
          <span class="px-2 rounded-full bg-[#F5F5F5] border-b border-black/40 text-[8px] font-thin">
            {{ EPackingType[product.packingType].toString().replaceAll('_',' ') }}
          </span>
          <div class="flex items-center gap-0.5 mt-2">
            <span>4.4</span>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.87803 9.56582C3.94212 9.28037 3.82561 8.87258 3.62171 8.66869L2.20612 7.2531C1.76339 6.81037 1.58862 6.33851 1.71678 5.93072C1.85077 5.52294 2.26438 5.24332 2.88188 5.13846L4.69943 4.83553C4.96157 4.78893 5.28197 4.55591 5.40431 4.31707L6.40629 2.30728C6.69756 1.73056 7.0937 1.41016 7.52478 1.41016C7.95587 1.41016 8.352 1.73056 8.64327 2.30728L9.64525 4.31707C9.72098 4.46853 9.87827 4.61417 10.0472 4.7132L3.77318 10.9872C3.69162 11.0688 3.55181 10.9931 3.57511 10.8765L3.87803 9.56582Z" fill="#FFD234"/>
              <path d="M11.4166 8.66944C11.2069 8.87916 11.0904 9.28111 11.1603 9.56656L11.5623 11.32C11.7312 12.0482 11.6263 12.5958 11.2652 12.858C11.1195 12.9628 10.9448 13.0152 10.7409 13.0152C10.4438 13.0152 10.0942 12.9046 9.70975 12.6774L8.00289 11.6637C7.73492 11.5064 7.29218 11.5064 7.02421 11.6637L5.31734 12.6774C4.67072 13.056 4.1173 13.1201 3.76194 12.858C3.62796 12.7589 3.52892 12.6249 3.46484 12.4502L10.5486 5.3664C10.8166 5.09843 11.1952 4.97609 11.5623 5.04017L12.1506 5.1392C12.7681 5.24406 13.1817 5.52369 13.3157 5.93147C13.4439 6.33925 13.2691 6.81111 12.8264 7.25385L11.4166 8.66944Z" fill="#FFD234"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-2 " >
        <base-g-price v-if="product.discount != 0" :price="((product.price + product.price * product.discount / 100) / 10)" class="opacity-40 scale-75 relative after:absolute after:inset-x-0 after:h-0.5 after:bg-black/50 self-end"/>
        <base-g-price :price="(product.price / 10)" class="text-sm"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ProductFilterData} from "~/models/product/productQueries";
import {SITE_URL} from "~/utilities/api.config";
import {EPackingType} from "~/models/product/EPackingType";
import {EPostType} from "~/models/EPostType";
import {CreateFavorite, DeleteFavoriteByPostId} from "~/services/favorite.service";
import type {CreateFavoriteCommand} from "~/models/favorite/favoriteDto";
import {ToastType} from "~/composables/useSwal";

const props = defineProps<{
  product:ProductFilterData
}>();

const authStore = useAuthStore();
const accountStore = useAccountStore();
const isFavorite = ref(false);
const removedFavorite = ref(false);
const toast = useToast();

const addFavorite = async () => {
  const result = await CreateFavorite({
    postTitle:props.product.title,
    postSlug:props.product.slug,
    postId:props.product.id,
    postType:EPostType.Product,
    postImage:props.product.mainImage
  } as CreateFavoriteCommand);
  if(result.isSuccess){
    isFavorite.value = true;
    removedFavorite.value = false;
  }
}
const removeFavorite = async () => {
  const result = await DeleteFavoriteByPostId(props.product.id,EPostType.Product);
  if(result.isSuccess){
    removedFavorite.value = true;
    isFavorite.value = false;
  }
}

</script>

<style scoped>

.like-anim{
  animation: like 1s forwards;
}

@keyframes like {
  0%{
    opacity: 0;
    transform:translate(0,0);
    scale: 75%;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform:translateY(-10px);
    scale: 170%;
  }
}

</style>