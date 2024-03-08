<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="AddCategory">
    <base-f-select ref="categoriesSelect" label="دسته بندی مادر" v-model="addCategoryCommand.parentId" place-holder="دسته بندی مادر را انتخاب کنید" :data="categories"/>
    <base-f-input label="عنوان دسته بندی" place-holder="عنوان را وارد کنید" v-model="addCategoryCommand.title" @update:modelValue="generateSlug" name="title" id="title"/>
    <base-f-input label="عنوان یکتا" place-holder="عنوان یکتا وارد کنید" v-model="addCategoryCommand.slug" name="slug" id="slug"/>
    <base-f-button color="brand" :loading="isLoading" type="submit">
      ثبت دسته بندی
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import type {CreateCategoryCommand} from "~/models/categories/categoryCommands";
import {CreateCategory, GetCategoriesByAdmin} from "~/services/category.service";
import {ToastType, useToast} from "~/composables/useSwal";
import type {CategoryDto} from "~/models/categories/categoryQueries";

const categories:Ref<CategoryDto[]> = ref([]);

const addCategoryCommand:CreateCategoryCommand = reactive({
  title:'',
  slug:'',
  parentId:null
})

const emits = defineEmits(['categoryAdded']);

const generateSlug = (value:string)=> addCategoryCommand.slug = value.replaceAll(' ','-');

const isLoading = ref(false);

onMounted(async ()=>{
  const result = await GetCategoriesByAdmin({search:'',pageId:1,take:100});
  if(result.isSuccess) {
    categories.value = result.data?.data!;
  }
})

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