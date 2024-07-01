<template>
  <Form :validation-schema="forgetPassSchema" @submit="forgetPass" class="flex flex-col space-y-4 mt-6">
    <span>شماره تلفن خود را وارد کنید</span>
    <div class="grid grid-cols-1 gap-4">
      <base-g-input label="شماره تلفن *" place-holder="09*********" required name="phoneNumber" id="phoneNumber" v-model="phoneNumber"/>
    </div>
    <base-g-button wFull type="submit" :is-loading="isLoading">ادامه</base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {LoginCommand} from "~/models/users/userCommands";
import {ForgetPassword, Login} from "~/services/auth.service";
import * as Yup from 'yup'
import {ToastType} from "~/composables/useSwal";

const router = useRouter();
const authStore = useAuthStore();
const utilStore = useUtilStore();
const toast = useToast();

const forgetPassSchema = Yup.object().shape({
  phoneNumber:Yup.string().required('وارد کردن شماره تلفن الزامی است').matches(new RegExp('^(\\+98|0)?9\\d{9}$'),'شماره تلفن وارد شده معتبر نمی باشد'),
})

const isLoading = ref(false);
const phoneNumber = ref('');

const forgetPass = async ()=>{
  isLoading.value = true;

  const result = await ForgetPassword(phoneNumber.value);
  if(result.isSuccess){
    authStore.setTempPhoneNumber(phoneNumber.value);
    authStore.changeStep('confirmForgetPassword');
  }

  isLoading.value = false;
}
</script>