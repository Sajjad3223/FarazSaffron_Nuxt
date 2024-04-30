<template>
<div>
  <p class="font-light text-xs  dark:text-white lg:text-sm mt-4">لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی شما باید با اطلاعاتی که وارد می‌کنید همخوانی داشته باشند.</p>
  <Form @submit="EditInfo" class="mt-4 lg:p-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <base-g-input label="نام" name="name" id="name" is-required v-model="editUserCommand.firstName"/>
      <base-g-input label="نام خانوادگی" name="lastName" id="lastName" is-required v-model="editUserCommand.lastName" />
      <div class="col-span-full">
        <base-g-input label="کدملی" name="nationalId" id="nationalId" is-required :max-length="11" v-model="editUserCommand.nationalId"/>
      </div>
    </div>
    <div class="w-full md:w-2/3 lg:w-1/3 mr-auto mt-4">
      <base-g-button w-full color="primary" :is-loading="isLoading" type="submit" >
        ثبت تغییرات
      </base-g-button>
    </div>
  </Form>
</div>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {EditUser} from "~/services/user.service";
import type {EditUserCommand} from "~/models/users/userCommands";
import {ToastType, useToast} from "~/composables/useSwal";

const isLoading = ref(false);
const accountStore = useAccountStore();
const toast = useToast();

const editUserCommand:EditUserCommand = reactive({
  firstName:accountStore.currentUser?.firstName ?? '',
  lastName:accountStore.currentUser?.lastName ?? '',
  nationalId:accountStore.currentUser?.nationalId ?? null,
})

const EditInfo = async ()=>{
  isLoading.value = true;

  const result = await EditUser(editUserCommand);
  if(result.isSuccess){
    await toast.showToast();
  }else{
    await toast.showToast(result.metaData.message,ToastType.error)
  }

  isLoading.value = false;
}
</script>