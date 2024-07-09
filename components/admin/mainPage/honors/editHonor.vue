<template>
  <form @submit.prevent="editHonor">
    <input ref="image" type="file" name="image" class="p-4">
    <base-g-input v-model="imageAlt" name="imageAlt" label="متن جایگزین" />
    <base-g-input v-model="description" name="order" label="توضیحات" required />
    <base-g-input v-model="url" name="url" label="لینک" required dir="ltr"/>
    <base-g-button w-full type="submit" :is-loading="loading">
      ویرایش افتخار
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import type {Honor} from "~/models/mainPage/dataTemplate";
import {EditHonor} from "~/services/mainPage.service";

const props = defineProps<{
  honor:Honor,
  modelValue:boolean
}>();

const emits = defineEmits(['honorEdited'])

const loading = ref(false);
const image = ref(null);
const imageAlt = ref(props.honor.image.alt);
const description = ref(props.honor.description);
const url = ref(props.honor.link);

const toast = useToast();

const editHonor = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',props.honor.templateId.toString())
  formData.append('honorId',props.honor.id.toString())
  if(image.value != null)
    //@ts-ignore
    formData.append('image',image.value.files[0])
  formData.append('imageAlt',imageAlt.value)
  formData.append('description',description.value)
  formData.append('link',url.value)

  const result = await EditHonor(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('honorEdited');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>