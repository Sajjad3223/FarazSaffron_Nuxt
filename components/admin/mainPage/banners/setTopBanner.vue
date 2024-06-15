<template>
  <form @submit.prevent="setTopBanner">
    <input ref="image" type="file" name="image" required class="p-4">
    <base-g-input v-model="imageAlt" name="imageAlt" label="متن جایگزین" required />
    <base-g-input v-model="url" name="url" label="لینک" required />
    <base-g-button w-full type="submit">
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

const image = ref();
const imageAlt = ref('');
const url = ref('');

const toast = useToast();

const setTopBanner = async () =>{
  const formData = new FormData();
  formData.append('templateId',props.templateId.toString())
  formData.append('image',image.value.files[0])
  formData.append('imageAlt',imageAlt.value)
  formData.append('url',url.value)

  const result = await SetTopBanner(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('bannerUpdated');
  }
  else{
    toast.showError(result.metaData);
  }
}
</script>