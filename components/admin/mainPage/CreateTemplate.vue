<script setup lang="ts">
import {Form} from 'vee-validate';
import {CreateTemplate} from "~/services/mainPage.service";

const emits = defineEmits(['templateCreated'])

const loading = ref(false);

const title:Ref<string | null> = ref(null);
const toast = useToast();
const createTemplate = async ()=>{
  loading.value = true;

  const result = await CreateTemplate(title.value!);
  if(result.isSuccess){
    emits('templateCreated');
    await toast.showToast();
  }else{
    await toast.showError(result.metaData);
  }

  loading.value = false;
}

</script>

<template>
  <Form @submit="createTemplate" class="flex flex-col space-y-4 mt-5">
    <base-g-input v-model="title" name="title" id="title" label="عنوان الگو" required/>
    <base-g-button w-full type="submit" :is-loading="loading">
      ثبت الگو
    </base-g-button>
  </Form>
</template>

<style scoped>

</style>