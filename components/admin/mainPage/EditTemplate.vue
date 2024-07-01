<script setup lang="ts">
import {EditTemplate} from "~/services/mainPage.service";
import type {DataTemplateDto} from "~/models/mainPage/dataTemplate";

const props = defineProps<{
  template:DataTemplateDto
}>();

const emits = defineEmits(['templateEdited'])

const loading = ref(false);
const title:Ref<string | null> = ref(props.template.title);
const toast = useToast();
const editTemplate = async ()=>{
  loading.value = true;

  const result = await EditTemplate({
    templateId:props.template.id,
    title:title.value!
  });
  if(result.isSuccess){
    emits('templateEdited');
    await toast.showToast();
  }else{
    await toast.showError(result.metaData);
  }

  loading.value = false;
}

</script>

<template>
  <form @submit.prevent="editTemplate" class="flex flex-col space-y-4 mt-5">
    <base-g-input v-model="title" name="title" id="title" label="عنوان الگو" required/>
    <base-g-button w-full type="submit" :is-loading="loading">
      ویرایش الگو
    </base-g-button>
  </form>
</template>

<style scoped>

</style>