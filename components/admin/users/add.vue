<template>
  <Form class="grid grid-cols-2 gap-4" @submit.prevent="CreateUser">
    <base-f-input label="نام" place-holder="نام را وارد کنید" v-model="addUserCommand.firstName" name="firstName" id="firstName"/>
    <base-f-input label="نام خانوادگی" place-holder="نام خانوادگی را وارد کنید" v-model="addUserCommand.lastName" name="lastName" id="lastName"/>
    <base-f-input label="شماره تلفن" place-holder="شماره تلفن را وارد کنید" v-model="addUserCommand.phoneNumber" name="phoneNumber" id="phoneNumber"/>
    <base-f-input label="رمز عبور" place-holder="رمز عبور را وارد کنید" v-model="addUserCommand.password" name="password" id="password"/>
    <base-f-input label="ایمیل" place-holder="ایمیل را وارد کنید" v-model="addUserCommand.email" name="email" id="email"/>
    <base-f-input label="کد ملی" place-holder="کد ملی را وارد کنید" v-model="addUserCommand.nationalId" name="nationalId" id="nationalId"/>
    <base-f-button color="brand" :loading="isLoading" class="col-span-2">
      ثبت کاربر
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import {CreateUserByAdmin} from "~/services/user.service";
import {useToast,ToastType} from "~/composables/useSwal";
import type {CreateUserCommand} from "~/models/users/userCommands";

const addUserCommand:CreateUserCommand = reactive({
  firstName:'',
  lastName:'',
  phoneNumber:'',
  email:'',
  password:'',
  nationalId:''
});

const isLoading = ref(false);

const CreateUser = async ()=>{
  const result = await CreateUserByAdmin(addUserCommand);
  if(result.isSuccess){
    await useToast().showToast('کاربر با موفقیت ایجاد شد',ToastType.success);
  }
}
</script>

<style scoped>

</style>