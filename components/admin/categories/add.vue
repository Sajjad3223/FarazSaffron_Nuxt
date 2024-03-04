<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="AddCategory">
    <base-f-select label="دسته بندی مادر" v-model="addCategoryCommand.parentId" place-holder="دسته بندی مادر را انتخاب کنید"/>
    <base-f-input label="عنوان دسته بندی" place-holder="عنوان را وارد کنید" v-model="addCategoryCommand.title" @update:modelValue="generateSlug" name="title" id="title"/>
    <base-f-input label="عنوان یکتا" place-holder="عنوان یکتا وارد کنید" v-model="addCategoryCommand.slug" name="slug" id="slug"/>
    <base-f-button color="brand" :loading="isLoading">
      ثبت دسته بندی
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import type {CreateCategoryCommand} from "~/models/categories/categoryCommands";
import {CreateCategory} from "~/services/category.service";
import {ToastType, useToast} from "~/composables/useSwal";

const addCategoryCommand:CreateCategoryCommand = reactive({
  title:'',
  slug:'',
  parentId:null
})

const emits = defineEmits(['categoryAdded']);

const generateSlug = (value:string)=> addCategoryCommand.slug = value.replaceAll(' ','-');

const isLoading = ref(false);

const AddCategory = async ()=>{
  isLoading.value = true;

  const result = await CreateCategory(addCategoryCommand);
  if(result.isSuccess){
    await useToast().showToast('دسته بندی با موفقیت افزوده شد',ToastType.success,3000);
  }

  isLoading.value = false;
  emits('categoryAdded');
}

</script>