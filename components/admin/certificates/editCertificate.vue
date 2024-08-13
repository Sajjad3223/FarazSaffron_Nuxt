<template>
  <Form @submit="editCertificate" class="mt-5 flex flex-col">
    <base-g-input type="text" name="title" label="عنوان" required id="title" v-model="editCertificateCommand.title" />
    <select name="productId" id="productId" v-model="editCertificateCommand.productId">
      <option v-for="o in productOptions" :value="o.id">{{o.title}}</option>
    </select>
    <base-g-button type="submit" w-full :is-loading="loading">
      ویرایش شناسنامه
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {CreateCertificateCommand, EditCertificateCommand} from "~/models/certificate/authenticatorCommands";
import {CreateCertificate, EditCertificate} from "~/services/certificate.service";
import type {SelectFilterParams, SelectTagDto} from "~/models/product/productQueries";
import {GetProductsForSelectTag} from "~/services/product.service";
import type {CertificateFilterData} from "~/models/certificate/authenticatorDto";

const props = defineProps<{
  certificate:CertificateFilterData
}>()

const emits = defineEmits(['certificateEdited']);

const productOptions:Ref<SelectTagDto[]> = ref([]);

const loading = ref(false);
const editCertificateCommand:EditCertificateCommand = reactive({
  certificateId:props.certificate.id,
  title:props.certificate.title,
  productId:props.certificate.productId
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

const editCertificate = async ()=>{
  loading.value = true;

  const result = await EditCertificate(editCertificateCommand);
  if(result.isSuccess){
    toast.showToast();
    emits('certificateEdited');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>
