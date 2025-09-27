<template>
  <Form class="grid grid-cols-2 gap-4" @submit.prevent="CreateUser">
    <base-f-input label="نام" place-holder="نام را وارد کنید" v-model="editUserCommand.firstName" name="firstName" id="firstName"/>
    <base-f-input label="نام خانوادگی" place-holder="نام خانوادگی را وارد کنید" v-model="editUserCommand.lastName" name="lastName" id="lastName"/>
    <base-f-input label="کد ملی" place-holder="کد ملی را وارد کنید" v-model="editUserCommand.nationalId" name="nationalId" id="nationalId"/>
    <base-f-input label="رمز عبور" place-holder="رمز عبور را وارد کنید" v-model="editUserCommand.newPassword" name="password" id="password"/>
    <base-f-button color="brand" :loading="isLoading" class="col-span-2" type="submit">
      ثبت تغییرات
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import {EditUserByAdmin} from "~/services/user.service";
import {ToastType, useToast} from "~/composables/useSwal";
import type {AdminEditUserCommand} from "~/models/users/userCommands";
import type {UserFilterData} from "~/models/users/userQueries";
const props = defineProps<{
  user:UserFilterData
}>()

const editUserCommand:AdminEditUserCommand = reactive({
  userId:props.user.id,
  firstName:props.user.firstName,
  lastName:props.user.lastName,
  nationalId:props.user.nationalId ?? '',
  newPassword:'',
  editorId:0,
  editorFullName:'null'
});

const isLoading = ref(false);
const emits = defineEmits(['operationFinished']);

const CreateUser = async ()=>{
  const result = await EditUserByAdmin(editUserCommand);
  if(result.isSuccess){
    await useToast().showToast('کاربر با موفقیت ویرایش شد',ToastType.success);
    emits('operationFinished');
  }else{
    await useToast().showToast(result.metaData.message,ToastType.error,0);
  }

}
</script>

<style scoped>

</style>