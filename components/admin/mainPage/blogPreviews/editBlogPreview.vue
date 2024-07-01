<template>
  <form @submit.prevent="editBlog">
    <div class="flex flex-col space-y-4 mt-5">
      <input ref="image" type="file" name="image" required class="p-4">
      <base-g-input v-model="imageAlt" name="imageAlt" label="متن جایگزین" required />
      <base-g-input v-model="title" name="title" label="عنوان مقاله" required />
      <base-g-input v-model="url" name="url" label="لینک مقاله" />
      <base-g-input v-model="shortDesc" name="shortDesc" label="متن" required multi-line/>
    </div>
    <base-g-button w-full type="submit" :is-loading="loading">
      ویرایش مقاله
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import {EditBlogPreview} from '~/services/mainPage.service';
import type {BlogPreview} from "~/models/mainPage/dataTemplate";

const props = defineProps<{
  post:BlogPreview,
  modelValue:boolean
}>();

const emits = defineEmits(['blogEdited'])

const loading = ref(false);
const image = ref();
const imageAlt = ref(props.post.banner.alt);
const title = ref(props.post.title);
const shortDesc = ref(props.post.shortDescription);
const url = ref(props.post.url);

const toast = useToast();

const editBlog = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',props.post.templateId.toString());
  formData.append('blogId',props.post.id.toString());
  if(image.value != null)
    formData.append('image',image.value.files[0]);
  formData.append('imageAlt',imageAlt.value);
  formData.append('title',title.value);
  formData.append('shortDescription',shortDesc.value);
  formData.append('url',url.value);

  const result = await EditBlogPreview(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('blogEdited');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>