<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="AddCategory">
    <base-f-select ref="categoriesSelect" label="دسته بندی مادر" v-model="addCategoryCommand.parentId" place-holder="دسته بندی مادر را انتخاب کنید" :data="categories"/>
    <base-g-input label="عنوان دسته بندی" v-model="addCategoryCommand.title" @update:modelValue="generateSlug" name="title" id="title" required/>
    <base-g-input label="عنوان یکتا" v-model="addCategoryCommand.slug" name="slug" id="slug" required/>
    <base-f-input type="file" label="تصویر" v-model="image" name="image" id="image"/>
    <base-g-button color="primary" w-full :loading="isLoading" type="submit">
      ثبت دسته بندی
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import type {Form} from "vee-validate";
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

const image = ref();

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

  const data = new FormData();
  data.append('title',addCategoryCommand.title);
  data.append('slug',addCategoryCommand.slug);
  if(addCategoryCommand.parentId != null)
    data.append('parentId',addCategoryCommand.parentId?.toString());
  if(image.value != null)
    data.append('image',image.value);

  const result = await CreateCategory(data);
  if(result.isSuccess){
    await useToast().showToast('دسته بندی با موفقیت افزوده شد',ToastType.success,3000);
  }

  isLoading.value = false;
  emits('categoryAdded');
}

</script>