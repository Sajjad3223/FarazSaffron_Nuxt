<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="AddRole">
    <base-f-input label="عنوان لقب" place-holder="عنوان را وارد کنید" v-model="title" name="role" id="role"/>
    <base-f-button color="brand" :loading="isLoading" type="submit">
      ثبت لقب
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import {useToast,ToastType} from "~/composables/useSwal";
import {CreateRole} from "~/services/role.service";

const title = ref('');

const isLoading = ref(false);

const AddRole = async ()=>{
  isLoading.value = true;

  const result = await CreateRole(title.value);
  if(result.isSuccess){
    await useToast().showToast('کاربر با موفقیت ایجاد شد',ToastType.success);
  }

  isLoading.value = false;
}
</script>

<style scoped>

</style>