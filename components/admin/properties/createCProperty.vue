<template>
<Form @submit="addProperty" class="mt-5 flex flex-col">
  <base-g-input type="text" name="title" label="عنوان" required id="title" v-model="createPropertyCommand.title" />
  <base-g-input type="text" name="hintValue" label="متن کمکی" id="hintValue" v-model="createPropertyCommand.placeHolder" />
  <select name="propertyType" id="propertyType" v-model="createPropertyCommand.propertyType">
    <option v-for="o in Object.values(EPropertyType).filter(i=>!isNaN(i))" :value="o">{{EPropertyType[o]?.toString()}}</option>
  </select>
  <base-g-button type="submit" w-full :is-loading="loading">
    ثبت ویژگی
  </base-g-button>
</Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {CreatePropertyCommand} from "~/models/certificate/authenticatorCommands";
import {CreateCProperty} from "~/services/certificate.service";
import {EPropertyType} from "~/models/certificate/authenticatorDto";

const emits = defineEmits(['propertyCreated']);

const loading = ref(false);
const createPropertyCommand:CreatePropertyCommand = reactive({
  title:"",
  placeHolder:null,
  propertyType:EPropertyType.String
});
const toast = useToast();

const addProperty = async ()=>{
  loading.value = true;

  const result = await CreateCProperty(createPropertyCommand);
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
