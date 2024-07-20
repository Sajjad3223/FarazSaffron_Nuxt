<template>
  <form @submit.prevent="addBanner">
    <input ref="image" type="file" name="image" required class="p-4">
    <base-g-input v-model="imageAlt" name="imageAlt" label="متن جایگزین" required />
    <base-g-input type="number" v-model="order" name="order" label="ترتیب" required />
    <base-g-input v-model="url" name="url" label="لینک" required />
    <base-g-button w-full type="submit" :is-loading="loading" :disabled="loading">
      ثبت بنر
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import {AddToMainBanners} from '~/services/mainPage.service';

const props = defineProps<{
  templateId:number,
  modelValue:boolean
}>();

const emits = defineEmits(['bannerAdded'])

const loading = ref(false);
const image = ref();
const imageAlt = ref('');
const order = ref(0);
const url = ref('');

const toast = useToast();

const addBanner = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',props.templateId.toString())
  formData.append('image',image.value.files[0])
  formData.append('imageAlt',imageAlt.value)
  formData.append('order',order.value.toString())
  formData.append('url',url.value)

  const result = await AddToMainBanners(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('bannerAdded');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>