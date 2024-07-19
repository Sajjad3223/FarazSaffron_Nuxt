<template>
  <Form @submit="addCertificate" class="mt-5 flex flex-col">
    <base-g-input type="text" name="title" label="عنوان" required id="title" v-model="createCertificateCommand.title" />
    <select name="productId" id="productId" v-model="createCertificateCommand.productId">
      <option v-for="o in productOptions" :value="o.id">{{o.title}}</option>
    </select>
    <base-g-button type="submit" w-full :is-loading="loading">
      ثبت شناسنامه
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {CreateCertificateCommand} from "~/models/certificate/authenticatorCommands";
import {CreateCertificate} from "~/services/certificate.service";
import type {SelectFilterParams, SelectTagDto} from "~/models/product/productQueries";
import {GetProductsForSelectTag} from "~/services/product.service";

const emits = defineEmits(['certificateCreated']);

const productOptions:Ref<SelectTagDto[]> = ref([]);

const loading = ref(false);
const createCertificateCommand:CreateCertificateCommand = reactive({
  title:"",
  productId:0
});
const toast = useToast();

const selectFilterParams:SelectFilterParams = reactive({
  pageId:1,
  search:undefined,
  take:50
})

onMounted(async ()=>{
  productOptions.value = await GetProductsForSelectTag(selectFilterParams);
})

const addCertificate = async ()=>{
  loading.value = true;

  const result = await CreateCertificate(createCertificateCommand);
  if(result.isSuccess){
    toast.showToast();
    emits('certificateCreated');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>
