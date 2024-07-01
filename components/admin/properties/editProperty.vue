<template>
<Form @submit="editProperty" class="mt-5 flex flex-col">
  <base-g-input type="text" name="title" label="عنوان" required id="title" v-model="editPropertyCommand.title" />
  <base-g-input type="text" name="hintValue" label="متن کمکی" id="hintValue" v-model="editPropertyCommand.hintValue" />
  <base-g-button type="submit" w-full :is-loading="loading">
    ویرایش ویژگی
  </base-g-button>
</Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {CreatePropertyCommand, EditPropertyCommand} from "~/models/product/productCommands";
import {CreateProperty, EditProperty} from "~/services/product.service";
import type {PropertyDto} from "~/models/product/productQueries";

const props = defineProps<{
  property:PropertyDto
}>();

const emits = defineEmits(['propertyEdited']);

const loading = ref(false);
const editPropertyCommand:EditPropertyCommand = reactive({
  propertyId:props.property.id,
  title:props.property.title,
  hintValue:props.property.hintValue
});
const toast = useToast();

const editProperty = async ()=>{
  loading.value = true;

  const result = await EditProperty(editPropertyCommand);
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
