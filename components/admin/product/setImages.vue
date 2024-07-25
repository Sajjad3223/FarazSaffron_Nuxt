<template>
  <Form class="flex flex-col gap-4">
    <base-inputs-file-input multiple v-model="imageFiles" label="تصاویر" class="min-h-[400px]" @update:modelValue="imageSelected"/>
    <base-inputs-text-input v-model="imagesAlt" label="توضیحات تصاویر" />
    <base-g-button  type="submit" color="info" is-icon text-color="white" class="w-max mr-auto text-sm font-light" >
      ثبت و ادامه
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import {SetImages} from "~/services/product.service";
import {ToastType} from "~/composables/useSwal";
const props = defineProps<{
  step:number,
  productId:number,
}>();

const emits = defineEmits(['updateProgress','imagesUpdated']);

const toast = useToast();
const isLoading = ref(false);
const imageFiles = ref([]);
const imagesAlt = ref(null);


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

</script>