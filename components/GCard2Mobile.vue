<template>
  <NuxtLink :to="`/product/${product.slug}`" class="md:hidden flex flex-col items-center bg-white rounded-xl p-5 space-y-4">
    <NuxtImg placeholder="/images/placeholder.jpeg" :src="`${SITE_URL}/product/images/${product.mainImage.src}`" :alt="product.mainImage.alt" class="h-[100px]"/>
    <span class="text-sm text-center font-light">{{product.title}}</span>
    <div class="flex items-center gap-2">
      <span class="text-brandOrange">{{roundPrice(product.totalPrice).toLocaleString()}}</span>
      <span class="text-xs">تومان</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type {ProductFilterData} from "~/models/product/productQueries";
import {SITE_URL} from "~/utilities/api.config";
import {CreateFavorite, DeleteFavoriteByPostId} from "~/services/favorite.service";
import {EPostType} from "~/models/EPostType";
import type {CreateFavoriteCommand} from "~/models/favorite/favoriteDto";
import {ToastType} from "~/composables/useSwal";
import {EPackingType} from "~/models/product/EPackingType";
import {roundPrice} from "~/utilities/priceUtils";

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

</style>