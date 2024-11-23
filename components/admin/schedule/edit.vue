<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="updateSchedule">
    <base-g-input label="عنوان زمان بندی" v-model="editscheduleCommand.title" name="title" id="title" required/>
    <base-g-input label="متن" v-model="editscheduleCommand.message" name="answer" id="answer" multi-line required/>
    <DatePicker v-model="editscheduleCommand.scheduleDate" />
    <base-g-button color="primary" w-full :is-loading="isLoading" type="submit">
      ثبت تغییرات
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import type {Form} from "vee-validate";
import {ToastType, useToast} from "~/composables/useSwal";
import {CreateQuestion, EditQuestion} from "~/services/faq.service";
import type {CreateQuestionCommand, EditQuestionCommand} from "~/models/faq/questionCommands";
import type {QuestionDto} from "~/models/faq/questionDto";
import type {EditScheduleCommand, ScheduleDto} from "~/models/schedules/scheduleData";
import {EditSchedule} from "~/services/schedule.service";

const props = defineProps<{
  schedule:ScheduleDto
}>()

const editscheduleCommand:EditScheduleCommand = reactive({
  scheduleId:props.schedule.id,
  title:props.schedule.title,
  message:props.schedule.message,
  scheduleDate:props.schedule.scheduleDate,
  shouldMessage:false,
})

const emits = defineEmits(['scheduleUpdated']);


const isLoading = ref(false);


const updateSchedule = async ()=>{
  isLoading.value = true;

  const result = await EditSchedule(editscheduleCommand);
  if(result.isSuccess){
    await useToast().showToast('سوال با موفقیت افزوده شد',ToastType.success,3000);
  }

  isLoading.value = false;
  emits('scheduleUpdated');
}

</script>