<script setup lang="ts">
import {Form} from "vee-validate";
import type {CreateTicketCommand} from "~/models/ticket/ticketCommands";
import {CreateTicket} from "~/services/ticket.service";
import {ToastType} from "~/composables/useSwal";

const emits = defineEmits(['ticketAdded'])

const ticketSubjects = [
  'مشکل در ثبت سفارش',
  'مشکل در پرداخت سفارش',
  'مشکل ثبت آدرس',
  'پیگیری وضعیت سفارش',
  'راهنمایی خرید',
  'گزارش باگ'
]

const addTicketData:CreateTicketCommand = reactive({
  title:'',
  text:''
});

const loading = ref(false);
const toast = useToast();
const addTicket = async ()=>{
  loading.value = true;

  if(addTicketData.title == '' || addTicketData.text == ''){
    toast.showToast('لطفا اطلاعات مورد نیاز را وارد کنید',ToastType.error,0);
    return;
  }

  const result = await CreateTicket(addTicketData);
  if(result.isSuccess){
    toast.showToast();
    emits('ticketAdded');
  }else{
    await toast.showError(result.metaData)
  }

  loading.value = false;
}

</script>

<template>
  <Form class="mt-4" @submit="addTicket">
    <label for="title">موضوع تیکت</label>
    <select name="title" id="title" class="w-full py-3 px-4 rounded-xl border outline-none mt-2 mb-4" v-model="addTicketData.title" required>
      <option value="" selected>انتخاب کنید ...</option>
      <option :value="subject" v-for="subject in ticketSubjects">{{subject}}</option>
    </select>
    <base-g-input label="پیام شما" required v-model="addTicketData.text" name="text" id="text" multi-line/>
    <hr class="my-4">
    <base-g-button w-full type="submit" :is-loading="loading">
      ثبت تیکت
    </base-g-button>
  </Form>
</template>

<style scoped>

</style>