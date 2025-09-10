<template>
  <form @submit.prevent="editBanner">
    <input ref="image" type="file" name="image" class="p-4">
    <base-g-input v-model="imageAlt" name="imageAlt" label="متن جایگزین" />
    <base-g-input type="number" v-model="order" name="order" label="ترتیب" required />
    <base-g-input v-model="url" name="url" label="لینک" required />
    <BaseFCheckbox name="isForMobile" label="بنر موبایل" v-model="isForMobile" />
    <base-g-button w-full type="submit" :is-loading="loading">
      ویرایش بنر
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import {EditBanner} from '~/services/mainPage.service';
import type {Banner} from "~/models/mainPage/dataTemplate";

const props = defineProps<{
  banner:Banner,
  modelValue:boolean
}>();

const emits = defineEmits(['bannerEdited'])

const loading = ref(false);
const image = ref(null);
const imageAlt = ref(props.banner.image.alt);
const order = ref(props.banner.order);
const url = ref(props.banner.url);
const isForMobile = ref(props.banner.isForMobile);

const toast = useToast();

const editBanner = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',props.banner.templateId.toString())
  formData.append('bannerId',props.banner.id.toString())
  if (image.value != null)
      //@ts-ignore
    formData.append('image',image.value.files[0])
  formData.append('imageAlt',imageAlt.value)
  formData.append('order',order.value.toString())
  formData.append('url',url.value)
  formData.append('isForMobile',isForMobile.value.toString())

  const result = await EditBanner(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('bannerEdited');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>