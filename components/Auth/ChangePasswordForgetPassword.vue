<template>
  <Form :validation-schema="changePasswordSchema" @submit="login" class="flex flex-col space-y-4 mt-6">
    <div class="grid grid-cols-1 gap-4">
      <base-g-input label="رمز عبور *" place-holder="******" type="password" required name="newPassword" id="newPassword" v-model="newPassword"/>
      <base-g-input label="تکرار رمز عبور *" place-holder="******" type="password" required name="newPasswordConfirm" id="newPasswordConfirm" v-model="newPasswordConfirm"/>
    </div>
    <base-g-button wFull type="submit" :is-loading="isLoading">تغییر رمز عبور</base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {LoginCommand} from "~/models/users/userCommands";
import {ChangePasswordForgetPassword, Login} from "~/services/auth.service";
import * as Yup from 'yup'
import {ToastType} from "~/composables/useSwal";

const router = useRouter();
const authStore = useAuthStore();
const accountStore = useAccountStore();
const utilStore = useUtilStore();
const toast = useToast();


const newPassword = ref('');
const newPasswordConfirm = ref('');


const changePasswordSchema = Yup.object().shape({
  newPassword:Yup.string().required('وارد کردن رمز عبور الزامی است').min(6,'رمز عبور باید حداقل 6 حرف باشد'),
  newPasswordConfirm:Yup.string().oneOf([Yup.ref('newPassword'),null],'تکرار کلمه عبور یکسان نیست')
})

const isLoading = ref(false);

const login = async ()=>{
  isLoading.value = true;

  const result = await ChangePasswordForgetPassword(authStore.tempPhoneNumber,newPassword.value);
  if(result.isSuccess){
    toast.showToast('رمز عبور با موفقیت تغییر کرد');
    authStore.changeStep('login');
  }
  else{
    toast.showError(result.metaData);
  }

  isLoading.value = false;
}
</script>