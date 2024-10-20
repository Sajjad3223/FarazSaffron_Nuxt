<template>
  <div  class="relative h-max w-[140px] rounded-md mx-2 text-right border border-[#DDDDDD] transition-shadow duration-300 hover:shadow-xl" dir="rtl">
    <NuxtLink :to="`/product/${product.slug}`">
      <NuxtImg placeholder="/images/placeholder.jpeg" :src="`${SITE_URL}/product/images/${product.mainImage.src}`" :alt="product.mainImage.alt" class="mx-auto max-h-[100px] hover:scale-110 transition-transform duration-300" />
    </NuxtLink>
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
      <span class="text-[10px] font-light text-white" style="font-family: 'Vazir FD',serif">{{ Math.floor(product.discount) }}%</span>
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
        <base-g-price v-if="product.discount != 0" :price="Math.ceil((product.price + product.price * product.discount / 100) / 10)" class="opacity-40 scale-75 relative after:absolute after:inset-x-0 after:h-0.5 after:bg-black/50 self-end"/>
        <base-g-price :price="(Math.ceil(product.totalPrice / 10))" class="text-sm"/>
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