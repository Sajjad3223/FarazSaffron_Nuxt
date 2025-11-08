<template>
  <Form :validation-schema="fillDataSchema" @submit="fillData" @keydown.enter="fillData" class="flex flex-col mt-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
      <base-g-input type="text" label="نام" place-holder="نام و نام خانوادگی خود را وارد کنید" required name="firstName" id="firstName" v-model="fillDataCommand.firstName"/>
      <base-g-input type="text" label="نام خانوادگی" place-holder="نام و نام خانوادگی خود را وارد کنید" required name="lastName" id="lastName" v-model="fillDataCommand.lastName"/>
    </div>
    <span class="text-center text-sm font-thin text-danger">{{errorMessage}}</span>
    <base-g-button wFull class="mt-4" :is-loading="isLoading" type="submit">ثبت اطلاعات</base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {FillDataCommand, RegisterCommand} from "~/models/users/userCommands";
import {FillData, Register} from "~/services/auth.service";
import * as Yup from 'yup'
import {toEnglishDigits} from "~/utilities/textUtils";

const router = useRouter();
const authStore = useAuthStore();
const utilStore = useUtilStore();
const accountStore = useAccountStore();

const fillDataCommand:FillDataCommand = reactive({
  firstName: '',
  lastName: '',
});

const fillDataSchema = Yup.object().shape({
  firstName:Yup.string().required('نام خود را وارد کنید'),
  lastName:Yup.string().required('نام خانوادگی خود را وارد کنید')
})

const isLoading = ref(false);
const errorMessage = ref('');

const toast = useToast();
const fillData = async ()=>{
  isLoading.value = true;
  errorMessage.value = '';

  const result = await FillData(fillDataCommand);
  if(result.isSuccess){
    await authStore.setToken(result.data!);
    toast.showToast('در حال انتقال به پنل کاربری');
    authStore.isAuthModalOpen = false;
    setTimeout(async ()=>{
      await router.push('/profile');
      await accountStore.initData();
    },300)

  }
  else{
    errorMessage.value = result.metaData.message;
  }

  isLoading.value = false;
}
</script>