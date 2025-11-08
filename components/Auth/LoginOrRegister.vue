<template>
  <Form :validation-schema="loginSchema" @submit="submit" @keydown.enter="submit" v-slot="{meta}" class="flex flex-col space-y-4 mt-6">
    <div class="grid grid-cols-1 gap-4">
      <base-g-input label="شماره تلفن *" place-holder="09*********" required name="phoneNumber" id="phoneNumber" v-model="phoneNumber" :disabled="codeSent"/>

      <base-g-verification-input v-if="codeSent" label="کد تایید" :number-length="5" ref="verificationInput" @filled="submit"/>
    </div>
    <span class="text-center text-sm font-thin text-danger">{{errorMessage}}</span>
    <base-g-button wFull type="submit" :is-loading="isLoading" :disabled="!meta.valid">ورود</base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {LoginOrRegister, LoginOtp} from "~/services/auth.service";
import * as Yup from 'yup'
import {toEnglishDigits} from "~/utilities/textUtils";

const emits = defineEmits(['goFillData'])

const router = useRouter();
const authStore = useAuthStore();
const accountStore = useAccountStore();
const toast = useToast();

const phoneNumber = ref('');
const verificationInput = ref();
const codeSent = ref(false);

const loginSchema = Yup.object().shape({
  phoneNumber:Yup.string().required('وارد کردن شماره تلفن الزامی است').matches(new RegExp('^(\\+98|0)?9\\d{9}$'),'شماره تلفن وارد شده معتبر نمی باشد'),
})

const isLoading = ref(false);
const errorMessage = ref('');

const submit = async ()=>{
  if(codeSent.value)
    await checkOtp()
  else
    await login();
}

const login = async ()=>{
  isLoading.value = true;
  errorMessage.value = '';

  phoneNumber.value = toEnglishDigits(phoneNumber.value);

  const result = await LoginOrRegister(phoneNumber.value);
  if(result.isSuccess)
    codeSent.value = true;
  else{
    errorMessage.value = result.metaData.message;
  }

  isLoading.value = false;
}

const checkOtp = async () => {
  isLoading.value = true;

  const result = await LoginOtp(phoneNumber.value,verificationInput.value.getValue);
  if(result.isSuccess){
    await authStore.setToken(result.data);
    await toast.showToast('با موفقیت وارد شدید');
    setTimeout(async ()=>{
      await accountStore.initData()
      if(result.data?.firstLogin){
        emits('goFillData');
      }else{
        await router.push('/profile');
        authStore.isAuthModalOpen = false;
      }
    },300);
  }else{
    errorMessage.value = result.metaData.message;
  }

  isLoading.value = false;
}
</script>