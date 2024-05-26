<template>
  <div :class="['relative h-max min-w-[250px] rounded-md overflow-hidden mx-2 bg-white text-right border border-[#DDDDDD] transition-shadow duration-300 hover:shadow-xl']" dir="rtl">
    <div :class="['absolute bg-brandOrange w-[200px] h-[200px] right-0 top-0 translate-x-1/2 -translate-y-1/2 origin-center transition-all duration-500 rounded-full z-10 ',{'scale-[500%]':addedToCart},{'scale-[0]':!addedToCart}]">
    </div>
    <div class="absolute grid place-items-center backdrop-blur inset-0 z-10" v-if="loading">
      <span class="animate-spin">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" class="scale-[200%]" opacity="0.6"
             viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
             style="display:block;background-color:transparent;"><circle
            cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="35"
            stroke-dasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"
            style="transform:matrix(1, 0, 0, 1, 0, 0);"></circle>
        </svg>
      </span>
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
    <button class="border grid place-items-center rounded-lg border-[#D0D0D0] w-[30px] h-[30px] absolute top-4 right-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-danger"
            v-if="(!accountStore.initLoading && accountStore.isFavorite(product.id,EPostType.Product) && !removedFavorite) || isFavorite " @click="removeFavorite">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75 ">
        <path d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z" fill="currentColor"/>
      </svg>
    </button>
    <button class="border grid place-items-center rounded-lg border-[#D0D0D0] w-[30px] h-[30px] absolute top-4 right-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-danger"
            v-else-if="authStore.isLoggedIn || removedFavorite" @click="addFavorite">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75 opacity-70">
        <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <Transition>
      <button class="grid pointer-events-none place-items-center rounded-lg border-[#D0D0D0] w-[30px] h-[30px] absolute top-4 right-4 text-danger like-anim"
              v-if="isFavorite">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75 opacity-70">
          <path d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z" fill="currentColor"/>
        </svg>
      </button>
    </Transition>
    <div class="absolute left-4 top-4 grid place-items-center bg-brandOrange rounded-md rounded-b-xl w-8 h-8" v-if="product.discount !== 0">
      <span class="text-xs font-light text-white" style="font-family: 'Vazir FD',serif">{{ product.discount }}%</span>
    </div>
    <hr>
    <div class="p-4 flex flex-col w-full items-stretch">
      <div class="flex relative items-start justify-between">
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
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-1">
              <strong class="text-lg" style="font-family: 'Vazir FD',serif">{{ (product.totalPrice / 10).toLocaleString() }}</strong>
              <span class="flex flex-col items-center text-[10px] font-light opacity-70 leading-[8px]">تــــــو <br> مــان</span>
            </div>
            <div class="flex items-center gap-1 opacity-50 line-through scale-75">
              <strong class="text-lg" style="font-family: 'Vazir FD',serif">{{ (product.price / 10).toLocaleString() }}</strong>
              <span class="flex flex-col items-center text-[10px] font-light opacity-70 leading-[8px]">تــــــو <br> مــان</span>
            </div>
          </div>
        </div>
        <div class="flex absolute left-0 items-center gap-1 -mt-8">
          <a :href="product.basalamData?.basalamLink" target="_blank" class="rounded-md cursor-pointer rounded-b-xl border border-[#E6E6E6] w-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
             title="محصول در باسلام"
             v-if="product.basalamData?.basalamLink">
            <img src="~/assets/images/basalam.png" alt="basalam" class="w-full object-cover">
          </a>
          <a :href="product.digiKalaData?.digikalaLink" target="_blank" class="rounded-md cursor-pointer rounded-b-xl border border-[#E6E6E6] w-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
             title="محصول در دیجی کالا"
             v-if="product.digiKalaData?.digikalaLink">
            <img src="~/assets/images/digikala.png" alt="digikala" class="w-full object-cover">
          </a>
        </div>
      </div>
      <div class="flex items-stretch w-full mt-4 gap-2 justify-between" v-if="product.quantity > 0">
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
      <base-g-button disabled w-full v-else class="mt-3" is-icon>
        <span  class="text-xs font-light p-1">
          کالا فعلا موجود نیست
        </span>
      </base-g-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ProductFilterData} from "~/models/product/productQueries";
import {SITE_URL} from "~/utilities/api.config";
import {CreateFavorite, DeleteFavoriteByPostId} from "~/services/favorite.service";
import {EPostType} from "~/models/EPostType";
import type {CreateFavoriteCommand} from "~/models/favorite/favoriteDto";
import {ToastType} from "~/composables/useSwal";
import {EPackingType} from "~/models/product/EPackingType";

const props = defineProps<{
  product:ProductFilterData
}>();

const cartStore = useCartStore();
const authStore = useAuthStore();
const accountStore = useAccountStore();
const toast = useToast();
const addedToCart = ref(false);
const loading = ref(false);
const isFavorite = ref(false);
const removedFavorite = ref(false);

const addToCart = (id:number,slug:string)=>{
  loading.value = true;
  cartStore.addToCart(id,slug).then(res=>{
    if(res){
      addedToCart.value =true;
      setTimeout(()=>{
        addedToCart.value = false;
      },3000)
    }
  }).catch(async (e)=>{
    await toast.showToast('مشکلی رخ داد',ToastType.error,3000,true);
  }).finally(()=>{
    loading.value = false;
  })
}

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
    //await toast.showToast("محصول به علاقه مندی ها اضافه شد",ToastType.success,2000 ,true);
  }
}
const removeFavorite = async () => {
  const result = await DeleteFavoriteByPostId(props.product.id,EPostType.Product);
  if(result.isSuccess){
    removedFavorite.value = true;
    isFavorite.value = false;
    //await toast.showToast("محصول از علاقه مندی ها حذف شد",ToastType.success,2000 ,true);
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
    transform:translateY(-25px);
    scale: 170%;
  }
}

</style>