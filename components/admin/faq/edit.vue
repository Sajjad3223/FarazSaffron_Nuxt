<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="AddQuestion">
    <base-g-input label="عنوان پرسش" v-model="editQuestionCommand.title" name="title" id="title" required/>
    <base-g-input label="پاسخ" v-model="editQuestionCommand.answer" name="answer" id="answer" multi-line required/>
    <base-g-button color="primary" w-full :is-loading="isLoading" type="submit">
      ثبت سوال
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import type {Form} from "vee-validate";
import {ToastType, useToast} from "~/composables/useSwal";
import {CreateQuestion, EditQuestion} from "~/services/faq.service";
import type {CreateQuestionCommand, EditQuestionCommand} from "~/models/faq/questionCommands";
import type {QuestionDto} from "~/models/faq/questionDto";

const props = defineProps<{
  question:QuestionDto
}>()

const editQuestionCommand:EditQuestionCommand = reactive({
  questionId:props.question.id,
  title:props.question.title,
  answer:props.question.answer
})

const emits = defineEmits(['questionUpdated']);


const isLoading = ref(false);


const AddQuestion = async ()=>{
  isLoading.value = true;

  const result = await EditQuestion(editQuestionCommand);
  if(result.isSuccess){
    await useToast().showToast('سوال با موفقیت افزوده شد',ToastType.success,3000);
  }

  isLoading.value = false;
  emits('questionUpdated');
}

</script>