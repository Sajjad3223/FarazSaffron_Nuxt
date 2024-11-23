<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="AddQuestion">
    <base-g-input label="عنوان زمان بندی" v-model="addScheduleCommand.title" name="title" id="title" required/>
    <base-g-input label="متن" v-model="addScheduleCommand.message" name="answer" id="answer" multi-line required/>
    <DatePicker v-model="addScheduleCommand.scheduleDate"/>
    <base-g-button color="primary" w-full :is-loading="isLoading" type="submit">
      ثبت زمان بندی
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import type {Form} from "vee-validate";
import {ToastType, useToast} from "~/composables/useSwal";
import type {CreateScheduleCommand} from "~/models/schedules/scheduleData";
import {CreateSchedule} from "~/services/schedule.service";

const addScheduleCommand:CreateScheduleCommand = reactive({
  title:'',
  message:'',
  scheduleDate:null,
  shouldMessage:false
})


const emits = defineEmits(['scheduleAdded']);


const isLoading = ref(false);


const AddQuestion = async ()=>{
  isLoading.value = true;

  const result = await CreateSchedule(addScheduleCommand);
  if(result.isSuccess){
    await useToast().showToast('سوال با موفقیت افزوده شد',ToastType.success,3000);
  }

  isLoading.value = false;
  emits('scheduleAdded');
}

</script>