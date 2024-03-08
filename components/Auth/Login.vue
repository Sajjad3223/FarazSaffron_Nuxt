<template>
  <Form class="flex flex-col items-start gap-2 m-4" :validation-schema="loginSchema">
    <img src="~/assets/images/GP-filled.png" alt="GP" class=" max-h-16 self-center">
    <base-f-input name="phoneNumber" id="phoneNumber" label="شماره تلفن" is-required place-holder="09121111111" class="text-sm lg:text-base" :rtl="false" v-model="loginData.phoneNumber" />
    <base-f-input name="password" id="password" type="password" label="رمز عبور" is-required place-holder="••••••••" class="text-sm lg:text-base" :rtl="false" v-model="loginData.password" />
    <base-f-button color="brand" w-full @click.prevent="login" :loading="isLoading">ورود</base-f-button>
    <small class="text-danger mx-auto" v-if="errorMessage">{{ errorMessage }}</small>
    <span class="text-xs text-center lg:text-sm font-thin mx-auto">
      <NuxtLink to="/" class="text-primary hover:underline">شرایط جی پی</NuxtLink>
       و
      <NuxtLink to="/" class="text-primary hover:underline">قوانین حریم ‌خصوصی</NuxtLink>
      را میپذیرم
    </span>
    <base-f-divider class="my-4"/>
    <div class="flex items-center gap-4">
      <span>حساب کاربری ندارید؟</span>
      <base-f-button type="button" color="transparent" text-color="primary" px="0" py="0" bordered custom-class="text-sm" @click="authStore.changeStep('register')">ثبت نام کنید</base-f-button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {LoginCommand} from "~/models/users/userCommands";
import {Login} from "~/services/auth.service";
import Swal from "sweetalert2";
import * as Yup from 'yup'

const router = useRouter();
const authStore = useAuthStore();

const loginData:LoginCommand = reactive({
  phoneNumber:"",
  password:""
});

const loginSchema = Yup.object().shape({
  phoneNumber:Yup.string().length(11,'شماره تلفن وارد شده معتبر نمی باشد'),
  password:Yup.string()
})

const isLoading = ref(false);
const errorMessage = ref('');

const login = async ()=>{
  isLoading.value = true;
  errorMessage.value = '';

  const result = await Login(loginData);
  if(result.isSuccess){
    authStore.setToken(result.data!);
    await Swal.fire({
      title:"ورود با موفقیت انجام شد",
      text:'در حال انتقال به پنل کاربری',
      icon:'success',
      timerProgressBar:true,
    });
    authStore.isLoginModalOpen = false;
    await router.push('/profile');
  }
  else{
    errorMessage.value = result.metaData.message;
  }

  isLoading.value = false;
}
</script>