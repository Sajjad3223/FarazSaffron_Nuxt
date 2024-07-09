<template>
  <Form @submit="forgetPass" class="flex flex-col space-y-4 mt-6">
    <span>کد تایید به شماره {{phoneNumber}} ارسال شد</span>
    <div class="grid grid-cols-1 gap-4">
      <base-g-verification-input label="کد تایید" :number-length="5" ref="verificationInput"/>
    </div>
    <button class="text-brandOrange underline-offset-8 underline" type="button" @click="resendVerifyCode">ارسال مجدد</button>
    <base-g-button wFull type="submit" :is-loading="isLoading">ادامه</base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {LoginCommand} from "~/models/users/userCommands";
import {ForgetPassword, Login, VerifyForgetPassword} from "~/services/auth.service";
import * as Yup from 'yup'
import {ToastType} from "~/composables/useSwal";

const router = useRouter();
const authStore = useAuthStore();
const utilStore = useUtilStore();
const toast = useToast();

const isLoading = ref(false);
const phoneNumber = ref(authStore.tempPhoneNumber);
const verificationInput = ref();

const forgetPass = async ()=>{
  isLoading.value = true;

  const code = verificationInput.value.getValue;
  console.log(verificationInput.value.getValue.value);
  console.log(code);

  const result = await VerifyForgetPassword(phoneNumber.value!,code);
  if(result.isSuccess){
    authStore.changeStep('changePasswordForgetPassword');
  }

  isLoading.value = false;
}

const resendVerifyCode = async ()=>{
  const res = await ForgetPassword(authStore.tempPhoneNumber!);
  if(res.isSuccess){
    toast.showToast('کد تایید مجددا برای شما ارسال گردید');
  }
}
</script>