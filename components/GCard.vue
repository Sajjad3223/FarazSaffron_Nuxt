<template>
  <div class="relative h-max min-w-[250px] rounded-md overflow-hidden mx-2 text-right border border-[#DDDDDD] transition-shadow duration-300 hover:shadow-xl" dir="rtl">
    <div :class="['absolute bg-brandOrange w-[200px] h-[200px] right-0 top-0 translate-x-1/2 -translate-y-1/2 origin-center transition-all duration-500 rounded-full z-10 ',{'scale-[500%]':addedToCart},{'scale-[0]':!addedToCart}]">
    </div>
    <transition enter-active-class="transition-all duration-300 delay-300" enter-from-class="translate-y-8 opacity-0" enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition-all duration-300 " leave-to-class="translate-y-8 opacity-0" leave-from-class="translate-y-0 opacity-100">
      <div class="w-full absolute flex flex-col space-y-4 items-center text-white z-20 text-center bottom-24 text-xl" v-if="addedToCart">
        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M66.7513 73.8335C60.0846 78.8335 51.9596 81.9585 43.0013 81.9585C21.543 81.9585 4.04297 64.4585 4.04297 43.0002C4.04297 37.5835 5.29297 32.1668 7.16797 27.5835" stroke="white" stroke-width="6.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.2109 13.0001C24.8776 7.58341 33.6276 4.04175 43.0026 4.04175C64.4609 4.04175 81.9609 21.5417 81.9609 43.0001C81.9609 47.7917 81.1276 52.3751 79.4609 56.75" stroke="white" stroke-width="6.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.375 41.9583L37.7917 52.375L59.6667 30.5" stroke="white" stroke-width="6.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="w-2/3">با موفقیت به سبد خرید اضافه شد</span>
      </div>
    </transition>
    <NuxtLink :to="`/product/${product.slug}`">
      <img :src="`${SITE_URL}/product/images/${product.mainImage.src}`" :alt="product.mainImage.alt" class="mx-auto h-[160px] hover:scale-110 transition-transform duration-300">
    </NuxtLink>
    <button class="border grid place-items-center rounded-lg border-[#D0D0D0] w-[30px] h-[30px] absolute top-4 right-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            v-if="authStore.isLoggedIn" @click="addFavorite">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="18" height="18" fill="url(#pattern0_308_4084)" fill-opacity="0.3"/>
        <defs>
          <pattern id="pattern0_308_4084" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_308_4084" transform="scale(0.01)"/>
          </pattern>
          <image id="image0_308_4084" width="100" height="100" xlink:href="data:image/png;base64,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"/>
        </defs>
      </svg>
    </button>
    <div class="absolute left-4 top-4 grid place-items-center bg-brandOrange rounded-md rounded-b-xl w-8 h-8" v-if="product.discount !== 0">
      <span class="text-xs font-light text-white" style="font-family: 'Vazir FD',serif">10%</span>
    </div>
    <hr>
    <div class="p-4 flex flex-col w-full items-stretch">
      <div class="flex items-start justify-between">
        <div class="flex flex-col items-start space-y-2">
          <NuxtLink :to="`/product/${product.slug}`" :title="product.title" class="h-[50px]">
            <strong class="font-semibold text-[#626262] hover:text-brandOrange transition-colors duration-200">{{ product.title }}</strong>
          </NuxtLink>
<!--          <base-f-badge color="secondary" size="xs" class="opacity-70 font-thin text-[#9E9E9E]" style="font-family: 'Vazir FD',serif">{{ EPackingType[product.packingType].toString().replaceAll('_',' ') }}</base-f-badge>-->
          <span class="px-3 py-0.5 rounded-full bg-[#F5F5F5] border-b border-black/40 text-xs font-thin">
            {{ EPackingType[product.packingType].toString().replaceAll('_',' ') }}
          </span>
          <ul class="flex items-center gap-0.5">
            <li v-for="i in 5" :key="i">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="10" height="10" fill="url(#pattern0_308_3938)"/>
                <defs>
                  <pattern id="pattern0_308_3938" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_308_3938" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_308_3938" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
            </li>
          </ul>
          <div class="flex items-center gap-1">
            <strong class="text-lg" style="font-family: 'Vazir FD',serif">{{ (product.price / 10).toLocaleString() }}</strong>
            <span class="flex flex-col items-center text-[10px] font-light opacity-70 leading-[8px]">تــــــو <br> مــان</span>
          </div>
        </div>
        <div class="flex items-center gap-1 -mt-8">
          <a :href="product.basalamLink" target="_blank" class="rounded-md cursor-pointer rounded-b-xl border border-[#E6E6E6] w-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-1" v-if="product.basalamLink">
            <img src="~/assets/images/basalam.png" alt="basalam" class="w-full object-cover">
          </a>
          <a :href="product.digikalaLink" target="_blank" class="rounded-md cursor-pointer rounded-b-xl border border-[#E6E6E6] w-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-1" v-if="product.digikalaLink">
            <img src="~/assets/images/digikala.png" alt="digikala" class="w-full object-cover">
          </a>
        </div>
      </div>
      <div class="flex items-stretch w-full mt-4 gap-2 justify-between">
        <nuxt-link :to="`/product/${product.slug}`" class="flex-1 rounded-lg border border-[#DDDDDD] hover:bg-[#EFEFEF] transition-all duration-200 p-2 flex items-center justify-center">
                  <span  class="text-xs font-light">
                    مشاهده محصول
                  </span>
        </nuxt-link>
        <button class="bg-brandOrange rounded-md p-2 transition-all duration-200 hover-brand hover:-translate-y-1" @click="addToCart(product.id,product.slug)">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.09844 4.86605C9.09844 6.02585 8.15824 6.96605 6.99844 6.96605C5.83864 6.96605 4.89844 6.02585 4.89844 4.86605M2.75601 12.2161H11.2409C11.9906 12.2161 12.5984 11.6195 12.5984 10.8837L11.7287 3.11603C11.7287 2.3802 11.1209 1.78369 10.3712 1.78369H3.45601C2.70624 1.78369 2.09844 2.3802 2.09844 3.11603L1.39844 10.8837C1.39844 11.6195 2.00624 12.2161 2.75601 12.2161Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ProductFilterData} from "~/models/product/productQueries";
import {SITE_URL} from "~/utilities/api.config";
import {CreateFavorite} from "~/services/favorite.service";
import {EPostType} from "~/models/EPostType";
import type {CreateFavoriteCommand} from "~/models/favorite/favoriteDto";
import {ToastType} from "~/composables/useSwal";
import {EPackingType} from "~/models/product/EPackingType";

const props = defineProps<{
  product:ProductFilterData
}>();

const cartStore = useCartStore();
const authStore = useAuthStore();
const toast = useToast();
const addedToCart = ref(false);

const addToCart = (id:number,slug:string)=>{
  cartStore.addToCart(id,slug)
  addedToCart.value =true;
  setTimeout(()=>{
    addedToCart.value = false;
  },3000)
}

const addFavorite = async () => {
  const result = await CreateFavorite({
    postTitle:props.product.title,
    postSlug:props.product.slug,
    postId:props.product.id,
    postType:EPostType.Product
  } as CreateFavoriteCommand);
  if(result.isSuccess){
    await toast.showToast("محصول به علاقه مندی ها اضافه شد",ToastType.success,2000 ,true);
  }
}

</script>