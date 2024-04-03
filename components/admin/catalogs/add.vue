<template>
  <Form class="grid grid-cols-1 gap-4" @submit.prevent="AddCatalog">
    <base-f-input label="عنوان کاتالوگ" place-holder="عنوان کاتالوگ را وارد کنید" v-model="title" name="title" id="title"/>
    <base-f-input label="توضیحات کاتالوگ" place-holder="توضیحات کاتالوگ را وارد کنید" v-model="description" name="description" id="description"/>
    <base-f-input type="file" label="فایل کاتالوگ" place-holder="فایل کاتالوگ" v-model="catalogFile" name="catalogFile" id="catalogFile"/>
    <base-f-button color="brand" :loading="isLoading" type="submit">
      ثبت کاتالوگ
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import type {Form} from "vee-validate";
import {ToastType, useToast} from "~/composables/useSwal";
import {CreateCatalog} from "~/services/catalog.service";

const emits = defineEmits(['catalogAdded']);

const title = ref('');
const description = ref('');
const catalogFile = ref();

const isLoading = ref(false);

const AddCatalog = async ()=>{
  isLoading.value = true;

  var createCatalogData = new FormData();
  createCatalogData.append("title",title.value);
  createCatalogData.append("description",description.value);
  createCatalogData.append("catalogFile",catalogFile.value);

  const result = await CreateCatalog(createCatalogData);
  if(result.isSuccess){
    await useToast().showToast('کاتالوگ با موفقیت افزوده شد',ToastType.success,3000);
  }

  isLoading.value = false;
  emits('catalogAdded');
}

</script>