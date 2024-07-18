<template>
<Form @submit="editProperty" class="mt-5 flex flex-col">
  <base-g-input type="text" name="title" label="عنوان" required id="title" v-model="editPropertyCommand.title" />
  <base-g-input type="text" name="hintValue" label="متن کمکی" id="hintValue" v-model="editPropertyCommand.placeHolder" />
  <select name="propertyType" id="propertyType" v-model="editPropertyCommand.propertyType">
    <option v-for="o in Object.values(EPropertyType).filter(i=>!isNaN(i))" :value="o">{{EPropertyType[o]?.toString()}}</option>
  </select>
  <base-g-button type="submit" w-full :is-loading="loading">
    ویرایش ویژگی
  </base-g-button>
</Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type { EditPropertyCommand} from "~/models/certificate/authenticatorCommands";
import {EditAProperty} from "~/services/certificate.service";
import type {CAPropertyDto} from "~/models/certificate/authenticatorDto";
import {EPropertyType} from "~/models/certificate/authenticatorDto";

const props = defineProps<{
  property:CAPropertyDto
}>();

const emits = defineEmits(['propertyEdited']);

const loading = ref(false);
const editPropertyCommand:EditPropertyCommand = reactive({
  propertyId:props.property.id,
  title:props.property.title,
  placeHolder:props.property.hintValue,
  propertyType:props.property.propertyType
});
const toast = useToast();

const editProperty = async ()=>{
  loading.value = true;

  const result = await EditAProperty(editPropertyCommand);
  if(result.isSuccess){
    toast.showToast();
    emits('propertyEdited');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>
