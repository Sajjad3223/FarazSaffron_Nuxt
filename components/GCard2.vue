<template>
  <div class="flex group max-w-[280px] flex-col relative gap-4">
    <div class="w-full relative aspect-square rounded-xl grid place-items-center bg-white border relative overflow-hidden">
      <NuxtLink :to="`/product/${product.slug}`">
        <img :src="`${SITE_URL}/product/images/${product.mainImage.src}`" :alt="product.mainImage.alt" class="max-h-[200px]">
      </NuxtLink>
      <Transition name="fade-smooth" duration="1000">
        <div v-if="showDigikalaPrice"
             class="absolute inset-0 bg-black/30 text-white backdrop-blur-sm flex flex-col items-center justify-center gap-2">
          <span class="text-sm font-light">قیمت در دیجی کالا</span>
          <strong class="text-lg font-light">{{(product.digiKalaData?.digikalaPrice / 10).toLocaleString()}} تومان</strong>
        </div>
      </Transition>
      <Transition name="fade-smooth" duration="1000">
        <div v-if="showBasalamPrice"
             class="absolute inset-0 bg-black/30 text-white backdrop-blur-sm flex flex-col items-center justify-center gap-2">
          <span class="text-sm font-light">قیمت در باسلام</span>
          <strong class="text-lg font-light">{{(product.basalamData?.basalamPrice / 10).toLocaleString()}} تومان</strong>
        </div>
      </Transition>
      <button :disabled="loading"
              class="absolute inset-x-3 bottom-3 translate-y-[150%] transition-transform duration-200 group-hover:translate-y-0">
        <span @click="addToCart(product.id,product.slug)" class="bg-brandOrange flex items-center gap-4 text-white justify-center py-2 rounded-lg">
          <span class="relative z-0 flex items-center gap-4" v-if="!loading">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.0625 1.43738L2.6225 1.70738L3.34475 10.3121C3.4025 11.0149 3.98975 11.5541 4.69475 11.5519H12.8765C13.5492 11.5534 14.12 11.0584 14.2153 10.3924L14.927 5.47388C15.0065 4.92413 14.6247 4.41413 14.0757 4.33463C14.0277 4.32788 2.873 4.32413 2.873 4.32413" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.59375 7.09607H11.6735" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.36503 14.1519C4.59078 14.1519 4.77303 14.3349 4.77303 14.5599C4.77303 14.7856 4.59078 14.9686 4.36503 14.9686C4.13928 14.9686 3.95703 14.7856 3.95703 14.5599C3.95703 14.3349 4.13928 14.1519 4.36503 14.1519Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.826 14.1519C13.0517 14.1519 13.2347 14.3349 13.2347 14.5599C13.2347 14.7856 13.0517 14.9686 12.826 14.9686C12.6002 14.9686 12.418 14.7856 12.418 14.5599C12.418 14.3349 12.6002 14.1519 12.826 14.1519Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-sm font-light">افزودن به سبد خرید</span>
          </span>
          <span v-else class="relative z-0 animate-spin">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5"
                 viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
                 style="display:block;background-color:transparent;"><circle
                cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="35"
                stroke-dasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"
                style="transform:matrix(1, 0, 0, 1, 0, 0);"></circle>
            </svg>
          </span>
        </span>
        <span class="flex absolute left-0.5 -z-10 bottom-0.5 group-hover:-translate-y-[120%] scale-0 group-hover:scale-100 transition-transform duration-200 delay-0 group-hover:delay-200 items-center gap-1 -mt-8">
            <a :href="product.basalamData?.basalamLink" target="_blank" class="relative rounded-md cursor-pointer rounded-b-xl border border-[#E6E6E6] w-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
               title="محصول در باسلام" @mouseenter="showBasalamPrice = true" @mouseleave="showBasalamPrice = false"
               v-if="product.basalamData?.basalamLink">
              <img src="~/assets/images/basalam.png" alt="basalam" class="w-full object-cover">
              <small v-if="false" class="absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full bg-brandOrange text-white rounded px-2 py-0.5 font-light text-[10px]">{{(product.basalamData?.basalamPrice / 10).toLocaleString()}}</small>
            </a>
            <a :href="product.digiKalaData?.digikalaLink" target="_blank" class="relative rounded-md cursor-pointer rounded-b-xl border border-[#E6E6E6] w-8 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
               title="محصول در دیجی کالا" @mouseenter="showDigikalaPrice = true" @mouseleave="showDigikalaPrice = false"
               v-if="product.digiKalaData?.digikalaLink">
              <img src="~/assets/images/digikala.png" alt="digikala" class="w-full object-cover">
              <small v-if="false" class="absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full bg-brandOrange text-white rounded px-2 py-0.5 font-light text-[10px]">{{(product.digiKalaData?.digikalaPrice / 10).toLocaleString()}}</small>
            </a>
        </span>
      </button>
    </div>
    <NuxtLink :to="`/product/${product.slug}`" class="font-light w-10/12 truncate" :title="product.title">{{product.title}}</NuxtLink>
    <base-g-price :price="(Math.ceil(product.totalPrice / 10))"/>
    <span class="text-sm font-light absolute top-4 right-4 bg-danger rounded-full px-3 py-1 text-white" v-if="product.discount !== 0">
      {{ Math.floor(product.discount) }}%
    </span>
    <label class="cursor-pointer grid place-items-center absolute top-4 left-4 hover:-translate-y-1 transition-all duration-200 text-danger">
      <input type="checkbox" :name="`favorite-${product.id}`" class="appearance-none opacity-0" v-model="isFavorite" @change="changeFavorite">
      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="isFavorite">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.871865 8.59832C-0.201135 5.24832 1.05287 1.41932 4.56987 0.286322C6.41987 -0.310678 8.46187 0.0413219 9.99987 1.19832C11.4549 0.0733218 13.5719 -0.306678 15.4199 0.286322C18.9369 1.41932 20.1989 5.24832 19.1269 8.59832C17.4569 13.9083 9.99987 17.9983 9.99987 17.9983C9.99987 17.9983 2.59787 13.9703 0.871865 8.59832Z" fill="#FE143E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3.69995C15.07 4.04595 15.826 5.00095 15.917 6.12195L14 3.69995Z" fill="white"/>
        <path d="M14 3.69995C15.07 4.04595 15.826 5.00095 15.917 6.12195" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.871865 9.59832C-0.201135 6.24832 1.05287 2.41932 4.56987 1.28632C6.41987 0.689322 8.46187 1.04132 9.99987 2.19832C11.4549 1.07332 13.5719 0.693322 15.4199 1.28632C18.9369 2.41932 20.1989 6.24832 19.1269 9.59832C17.4569 14.9083 9.99987 18.9983 9.99987 18.9983C9.99987 18.9983 2.59787 14.9703 0.871865 9.59832Z" stroke="#FE143E" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.7002C15.07 5.0462 15.826 6.0012 15.917 7.1222Z" fill="#FE143E"/>
        <path d="M14 4.7002C15.07 5.0462 15.826 6.0012 15.917 7.1222" stroke="#FE143E" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </label>
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
const favoriteLoading = ref(false);
const isFavorite = ref(false);

const showBasalamPrice = ref(false);
const showDigikalaPrice = ref(false);

onMounted(async ()=>{
  isFavorite.value = accountStore.isFavorite(props.product.id,EPostType.Product);
})

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

const changeFavorite = async ($event:any) => {
  if(favoriteLoading.value) return;

  if($event.target.checked){
    await addFavorite();
  }else{
    await removeFavorite();
  }
}

const addFavorite = async () => {
  favoriteLoading.value = true;
  await CreateFavorite({
    postTitle:props.product.title,
    postSlug:props.product.slug,
    postId:props.product.id,
    postType:EPostType.Product,
    postImage:props.product.mainImage
  } as CreateFavoriteCommand);

  isFavorite.value = true;
  favoriteLoading.value = false;
}
const removeFavorite = async () => {
  favoriteLoading.value = true;
  await DeleteFavoriteByPostId(props.product.id,EPostType.Product);

  isFavorite.value = false;
  favoriteLoading.value = false;
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


.fade-smooth-enter-active,
.fade-smooth-leave-active{
  @apply transition-all duration-300 [&>*]:transition-opacity [&>*]:duration-300 [&>*]:delay-300;
}

.fade-smooth-enter-from,
.fade-smooth-leave-to{
  @apply opacity-0 [&>*]:opacity-0;
}

</style>