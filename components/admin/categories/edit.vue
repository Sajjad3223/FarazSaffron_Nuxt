<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="UpdateCategory" v-if="!isLoading">
    <base-f-select ref="categoriesSelect" label="دسته بندی مادر" v-model="editCategoryCommand.parentId" place-holder="دسته بندی مادر را انتخاب کنید" :data="categories"/>
    <base-f-input label="عنوان دسته بندی" place-holder="عنوان را وارد کنید" v-model="editCategoryCommand.title" @update:modelValue="generateSlug" name="title" id="title"/>
    <base-f-input label="عنوان یکتا" place-holder="عنوان یکتا وارد کنید" v-model="editCategoryCommand.slug" name="slug" id="slug"/>
    <base-f-button color="brand" :loading="isLoading" type="submit">
      ثبت دسته بندی
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import type {Form} from "vee-validate";
import type {CreateCategoryCommand, EditCategoryCommand} from "~/models/categories/categoryCommands";
import {CreateCategory, EditCategory, GetCategoriesByAdmin} from "~/services/category.service";
import {ToastType, useToast} from "~/composables/useSwal";
import type {CategoryDto} from "~/models/categories/categoryQueries";

const props = defineProps<{
  category:CategoryDto
}>();

const categories:Ref<CategoryDto[]> = ref([]);

const editCategoryCommand:EditCategoryCommand = reactive({
  categoryId:props.category.id,
  title:props.category.title,
  slug:props.category.slug,
  parentId:props.category.parentId
})

const emits = defineEmits(['categoryEdited']);

const generateSlug = (value:string)=> editCategoryCommand.slug = value.replaceAll(' ','-');

const isLoading = ref(false);

onMounted(async ()=>{
  isLoading.value = true;

  const result = await GetCategoriesByAdmin({search:'',pageId:1,take:100});
  if(result.isSuccess) {
    categories.value = result.data?.data!;
  }

  isLoading.value = false;
})

const UpdateCategory = async ()=>{
  isLoading.value = true;

  const result = await EditCategory(editCategoryCommand);
  if(result.isSuccess){
    await useToast().showToast('دسته بندی با موفقیت افزوده شد',ToastType.success,3000);
  }

  isLoading.value = false;
  emits('categoryEdited');
}

</script>