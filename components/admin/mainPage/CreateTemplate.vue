<script setup lang="ts">
import {Form} from 'vee-validate';
import {CreateTemplate} from "~/services/mainPage.service";

const emits = defineEmits(['update:modelValue'])

const title:Ref<string | null> = ref(null);
const toast = useToast();
const createTemplate = async ()=>{
  const result = await CreateTemplate(title.value);
  if(result.isSuccess){
    emits('update:modelValue',false);
    await toast.showToast();
  }else{
    await toast.showError(result.metaData);
  }
}

</script>

<template>
  <Form @submit="createTemplate" class="flex flex-col space-y-4 mt-5">
    <base-g-input v-model="title" name="title" id="title" label="عنوان الگو" required/>
    <base-g-button w-full type="submit">
      ثبت الگو
    </base-g-button>
  </Form>
</template>

<style scoped>

</style>