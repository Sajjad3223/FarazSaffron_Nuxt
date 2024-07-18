<template>
  <Form class="grid grid-cols-1 gap-4" @submit="UpdateCategory" v-if="!isLoading">
    <base-f-select ref="categoriesSelect" label="دسته بندی مادر" v-model="editCategoryCommand.parentId" place-holder="دسته بندی مادر را انتخاب کنید" :data="categories"/>
    <base-g-input label="عنوان دسته بندی" v-model="editCategoryCommand.title" @update:modelValue="generateSlug" name="title" id="title" required/>
    <base-g-input label="عنوان یکتا" v-model="editCategoryCommand.slug" name="slug" id="slug" required/>
    <base-f-input type="file" label="تصویر" v-model="image" name="image" id="image"/>
    <base-g-button color="primary" w-full :loading="isLoading" type="submit">
      ثبت دسته بندی
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import type {Form} from "vee-validate";
import type {EditCategoryCommand} from "~/models/categories/categoryCommands";
import {EditCategory, GetCategoriesByAdmin} from "~/services/category.service";
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

const image = ref();

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


  const data = new FormData();
  data.append('categoryId',editCategoryCommand.categoryId?.toString());
  data.append('title',editCategoryCommand.title);
  data.append('slug',editCategoryCommand.slug);
  if(editCategoryCommand.parentId != null)
    data.append('parentId',editCategoryCommand.parentId?.toString());
  if(image.value != null)
    data.append('image',image.value);

  const result = await EditCategory(data);
  if(result.isSuccess){
    await useToast().showToast('دسته بندی با موفقیت افزوده شد',ToastType.success,3000);
  }

  isLoading.value = false;
  emits('categoryEdited');
}

</script>