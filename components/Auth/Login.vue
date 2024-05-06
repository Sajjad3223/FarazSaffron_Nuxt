<template>
  <Form :validation-schema="loginSchema" @submit="login" class="flex flex-col space-y-4 mt-6">
    <div class="grid grid-cols-1 gap-4">
      <base-g-input label="شماره تلفن *" place-holder="09*********" required name="phoneNumber" id="phoneNumber" v-model="loginData.phoneNumber"/>
      <base-g-input label="رمز عبور *" place-holder="******" type="password" required name="password" id="password" v-model="loginData.password"/>
      <button class="text-brandOrange text-right text-sm" v-if="false"> <!-- TODO implement Forget Password -->
        رمز عبور را فراموش کرده اید؟
      </button>
    </div>
    <span class="text-center text-sm font-thin text-danger">{{errorMessage}}</span>
    <base-g-button wFull :is-loading="isLoading">ورود</base-g-button>
    <div class="flex items-center w-full" v-if="false">
      <div class="flex-1 h-px rounded-full bg-gray-300"></div>
      <span class="px-4">
            یا
          </span>
      <div class="flex-1 h-px rounded-full bg-gray-300"></div>
    </div>
    <base-g-button button-type="outline" color="secondary" w-full :py="0" v-if="false" > <!-- TODO implement Login with Google -->
      <div class="flex items-center justify-center gap-2">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 ">
          <g clip-path="url(#clip0_569_2169)">
            <path d="M24 19.6362V28.9308H36.9163C36.3492 31.9199 34.6471 34.4509 32.0944 36.1527L39.8835 42.1964C44.4217 38.0074 47.0399 31.8546 47.0399 24.5456C47.0399 22.8438 46.8872 21.2073 46.6035 19.6365L24 19.6362Z" fill="#4285F4"/>
            <path d="M10.5492 28.5679L8.7925 29.9126L2.57422 34.7562C6.5233 42.5888 14.6172 47.9998 23.999 47.9998C30.4788 47.9998 35.9115 45.8616 39.8825 42.1963L32.0934 36.1526C29.9552 37.5926 27.2279 38.4654 23.999 38.4654C17.759 38.4654 12.4574 34.2545 10.559 28.5817L10.5492 28.5679Z" fill="#34A853"/>
            <path d="M2.57436 13.2437C0.938084 16.4726 0 20.1163 0 23.9999C0 27.8834 0.938084 31.5271 2.57436 34.7561C2.57436 34.7778 10.5599 28.5597 10.5599 28.5597C10.08 27.1197 9.79624 25.5926 9.79624 23.9996C9.79624 22.4067 10.08 20.8795 10.5599 19.4395L2.57436 13.2437Z" fill="#FBBC05"/>
            <path d="M23.9995 9.55636C27.5341 9.55636 30.6758 10.7781 33.1849 13.1345L40.0576 6.2619C35.8903 2.37833 30.4796 0 23.9995 0C14.6177 0 6.5233 5.38908 2.57422 13.2437L10.5596 19.44C12.4576 13.7672 17.7595 9.55636 23.9995 9.55636Z" fill="#EA4335"/>
          </g>
        </svg>
        <span>ورود با گوگل</span>
      </div>
    </base-g-button>
    <hr>
    <div class="w-full flex items-center justify-center gap-2 text-sm">
      <span class="font-light">حساب کاربری ندارید؟</span>
      <NuxtLink to="/auth/register" class="text-brandOrange" v-if="utilStore.isMobile()">
        ثبت نام کنید
      </NuxtLink>
      <button class="text-brandOrange" v-else @click="authStore.isLoginModalOpen = false,authStore.isRegisterModalOpen = true">
        ثبت نام کنید
      </button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {LoginCommand} from "~/models/users/userCommands";
import {Login} from "~/services/auth.service";
import * as Yup from 'yup'
import {ToastType} from "~/composables/useSwal";

const router = useRouter();
const authStore = useAuthStore();
const accountStore = useAccountStore();
const utilStore = useUtilStore();
const toast = useToast();

const loginData:LoginCommand = reactive({
  phoneNumber:"",
  password:""
});

const loginSchema = Yup.object().shape({
  phoneNumber:Yup.string().required('وارد کردن شماره تلفن الزامی است').matches(new RegExp('^(\\+98|0)?9\\d{9}$'),'شماره تلفن وارد شده معتبر نمی باشد'),
  password:Yup.string().required('وارد کردن رمز عبور الزامی است').min(6,'رمز عبور باید حداقل 6 حرف باشد')
})

const isLoading = ref(false);
const errorMessage = ref('');

const login = async ()=>{
  isLoading.value = true;
  errorMessage.value = '';

  const result = await Login(loginData);
  if(result.isSuccess){
    authStore.setToken(result.data!);
    await toast.showToast('با موفقیت وارد شدید');
    authStore.isLoginModalOpen = false;
    await accountStore.initData();

    toast.showToast('آیا مایلید به پنل کاربری منتقل شوید؟',ToastType.warning,0).then(async (result) => {
      if(result.isConfirmed){
        await router.push('/profile');
      }
    })

  }
  else{
    errorMessage.value = result.metaData.message ?? 'حساب کاربری با این مشخصات یافت نشد';
  }

  isLoading.value = false;
}
</script>