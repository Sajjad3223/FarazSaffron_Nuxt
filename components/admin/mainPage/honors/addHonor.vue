<template>
  <form @submit.prevent="addHonor">
    <input ref="image" type="file" name="image" required class="p-4">
    <base-g-input v-model="imageAlt" name="imageAlt" label="متن جایگزین" required />
    <base-g-input v-model="description" name="order" label="توضیحات" required />
    <base-g-input v-model="url" name="url" label="لینک" required dir="ltr"/>
    <base-g-button w-full type="submit" :is-loading="loading">
      ثبت افتخار
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import {AddToHonors} from '~/services/mainPage.service';

const props = defineProps<{
  templateId:number,
  modelValue:boolean
}>();

const emits = defineEmits(['honorAdded'])

const loading = ref(false);
const image = ref();
const imageAlt = ref('');
const description = ref('');
const url = ref('');

const toast = useToast();

const addHonor = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',props.templateId.toString())
  formData.append('image',image.value.files[0])
  formData.append('imageAlt',imageAlt.value)
  formData.append('description',description.value)
  formData.append('link',url.value)

  const result = await AddToHonors(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('honorAdded');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>