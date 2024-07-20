<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="AddQuestion">
    <base-g-input label="عنوان پرسش" v-model="addQuestionCommand.title" name="title" id="title" required/>
    <base-g-input label="پاسخ" v-model="addQuestionCommand.answer" name="answer" id="answer" multi-line required/>
    <base-g-button color="primary" w-full :is-loading="isLoading" type="submit">
      ثبت سوال
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import type {Form} from "vee-validate";
import type {CreateCategoryCommand} from "~/models/categories/categoryCommands";
import {CreateCategory, GetCategoriesByAdmin} from "~/services/category.service";
import {ToastType, useToast} from "~/composables/useSwal";
import type {CategoryDto} from "~/models/categories/categoryQueries";
import {CreateQuestion} from "~/services/faq.service";
import type {CreateQuestionCommand} from "~/models/faq/questionCommands";

const addQuestionCommand:CreateQuestionCommand = reactive({
  title:'',
  answer:''
})


const emits = defineEmits(['questionAdded']);


const isLoading = ref(false);


const AddQuestion = async ()=>{
  isLoading.value = true;

  const result = await CreateQuestion(addQuestionCommand);
  if(result.isSuccess){
    await useToast().showToast('سوال با موفقیت افزوده شد',ToastType.success,3000);
  }

  isLoading.value = false;
  emits('questionAdded');
}

</script>