<template>
  <form @submit.prevent="setTopBanner">
    <input ref="image" type="file" name="image" class="p-4">
    <base-g-input v-model="imageAlt" name="imageAlt" label="متن جایگزین" />
    <base-g-input v-model="url" name="url" label="لینک" required />
    <base-g-button w-full type="submit" :is-loading="loading">
      ویرایش بنر
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import {EditTopBanner} from "~/services/mainPage.service";
import type {TopBanner} from "~/models/mainPage/dataTemplate";

const props = defineProps<{
  topBanner:TopBanner,
  modelValue:boolean
}>();

const emits = defineEmits(['bannerUpdated'])

const loading = ref(false);
const image = ref(null);
const imageAlt = ref(props.topBanner.image.alt);
const url = ref(props.topBanner.url);

const toast = useToast();

const setTopBanner = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('topBannerId',props.topBanner.id.toString())
  if(image.value != null)
    //@ts-ignore
    formData.append('image',image.value.files[0])
  formData.append('imageAlt',imageAlt.value)
  formData.append('url',url.value)

  const result = await EditTopBanner(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('bannerUpdated');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>