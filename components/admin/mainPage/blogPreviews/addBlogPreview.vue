<template>
  <form @submit.prevent="addBlog">
    <div class="flex flex-col space-y-4 mt-5">
      <input ref="image" type="file" name="image" required class="p-4">
      <base-g-input v-model="imageAlt" name="imageAlt" label="متن جایگزین" required />
      <base-g-input v-model="title" name="title" label="عنوان مقاله" required />
      <base-g-input v-model="url" name="url" label="لینک مقاله" />
      <base-g-input v-model="shortDesc" name="shortDesc" label="متن" required multi-line/>
    </div>
    <base-g-button w-full type="submit" :is-loading="loading">
      ثبت مقاله
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import {AddToBlogPreviews} from '~/services/mainPage.service';

const props = defineProps<{
  templateId:number,
  modelValue:boolean
}>();

const emits = defineEmits(['blogAdded'])

const loading = ref(false);
const image = ref();
const imageAlt = ref('');
const title = ref('');
const shortDesc = ref('');
const url = ref('');

const toast = useToast();

const addBlog = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',props.templateId.toString());
  formData.append('image',image.value.files[0]);
  formData.append('imageAlt',imageAlt.value);
  formData.append('title',title.value);
  formData.append('shortDescription',shortDesc.value);
  formData.append('url',url.value);

  const result = await AddToBlogPreviews(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('blogAdded');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>