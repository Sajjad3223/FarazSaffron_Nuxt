<template>
  <Form @submit="AddImages" class="flex flex-col gap-4">
    <div class="flex items-center gap-5" v-if="images != null">
      <div v-for="image in images" class="relative">
        <img :src="`${SITE_URL}/product/images/${productId}/${image.image.src}`" :alt="image.image.alt" class="w-[100px] h-[100px] rounded-lg shrink-0">
        <button type="button" class="absolute left-2 top-2 bg-danger/50 hover:bg-danger/70 rounded-md text-white p-1" @click="deleteImage(preview.id)">
          <svg class="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3238 9.46777C19.3238 9.46777 18.7808 16.2028 18.4658 19.0398C18.3158 20.3948 17.4788 21.1888 16.1078 21.2138C13.4988 21.2608 10.8868 21.2638 8.27881 21.2088C6.95981 21.1818 6.13681 20.3778 5.98981 19.0468C5.67281 16.1848 5.13281 9.46777 5.13281 9.46777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.708 6.23926H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <base-inputs-file-input name="images" multiple v-model="imageFiles" label="تصاویر" class="min-h-[400px]" @update:modelValue="imageSelected"/>
    <base-inputs-text-input name="imagesAlt" v-model="imagesAlt" label="توضیحات تصاویر" />
    <base-g-button  type="submit" color="info" is-icon text-color="white" class="w-max mr-auto text-sm font-light" >
      ثبت و ادامه
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import {RemoveImage, SetImages} from "~/services/product.service";
import {ToastType} from "~/composables/useSwal";
import type {ProductImageDto} from "~/models/product/productImageDto";
import {SITE_URL} from "~/utilities/api.config";
const props = defineProps<{
  step:number,
  productId:number,
  productImages?:ProductImageDto[] | null
}>();

const emits = defineEmits(['updateProgress','imagesUpdated']);

const toast = useToast();
const isLoading = ref(false);
const imageFiles = ref([]);
const imagesAlt = ref(null);
const images = ref(props.productImages);

const imageSelected = ()=>{
  let progress;
  if(imageFiles.value == null) progress = 0;
  else{
    progress = (imageFiles.value!.length / 5) * 100;
  }
  emits('updateProgress',progress,props.step);
}

const AddImages = async ()=>{
  isLoading.value = true;

  const imagesData = new FormData();
  imagesData.append('productId',props.productId.toString());
  for(let i = 0; i < imageFiles.value.length; i++){
    const file:File = imageFiles.value[i];
    imagesData.append('images',file);
  }
  imagesData.append('alt',imagesAlt.value);

  const result = await SetImages(imagesData);
  if(result.isSuccess){
    await toast.showToast(result.metaData.message);
    emits('imagesUpdated');
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}

const deleteImage = async (id:number)=>{
  const result = await RemoveImage(props.productId,id);
  if(result.isSuccess){
    images.value = props.productImages?.filter(i=>i.id != id);
  }
}

</script>