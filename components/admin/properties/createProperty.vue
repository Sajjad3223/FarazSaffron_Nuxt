<template>
<Form @submit="addProperty" class="mt-5 flex flex-col">
  <base-g-input type="text" name="title" label="عنوان" required id="title" v-model="createPropertyCommand.title" />
  <base-g-input type="text" name="hintValue" label="متن کمکی" id="hintValue" v-model="createPropertyCommand.hintValue" />
  <base-g-button type="submit" w-full :is-loading="loading">
    ثبت ویژگی
  </base-g-button>
</Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {CreatePropertyCommand} from "~/models/product/productCommands";
import {CreateProperty} from "~/services/product.service";

const emits = defineEmits(['propertyCreated']);

const loading = ref(false);
const createPropertyCommand:CreatePropertyCommand = reactive({
  title:"",
  hintValue:null
});
const toast = useToast();

const addProperty = async ()=>{
  loading.value = true;

  const result = await CreateProperty(createPropertyCommand);
  if(result.isSuccess){
    toast.showToast();
    emits('propertyCreated');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>
