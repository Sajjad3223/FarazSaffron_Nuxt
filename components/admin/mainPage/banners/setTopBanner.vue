<template>
  <form @submit.prevent="setTopBanner">
    <input ref="image" type="file" name="image" required class="p-4">
    <base-g-input v-model="imageAlt" name="imageAlt" label="متن جایگزین" required />
    <base-g-input v-model="url" name="url" label="لینک" required />
    <base-g-input v-model="width" name="width" label="سایز (px)" type="number" />
    <base-g-input v-model="customStyle" name="customStyle" label="استایل شخصی" />
    <base-g-input v-model="text" name="text" label="متن" />
    <base-g-button w-full type="submit" :is-loading="loading">
      ثبت بنر
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import {SetTopBanner} from "~/services/mainPage.service";

const props = defineProps<{
  templateId:number,
  modelValue:boolean
}>();

const emits = defineEmits(['bannerUpdated'])

const loading = ref(false);
const image = ref();
const imageAlt = ref('');
const url = ref('');
const width = ref(0);
const customStyle = ref(null);
const text = ref(null);

const toast = useToast();

const setTopBanner = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',props.templateId.toString())
  formData.append('image',image.value.files[0])
  formData.append('imageAlt',imageAlt.value)
  formData.append('url',url.value)
  if(width.value != null)
    formData.append('width',width.value.toString());
  if(customStyle.value != null)
    formData.append('customStyle',customStyle.value);
  if(text.value != null)
    formData.append('text',text.value);

  const result = await SetTopBanner(formData);
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