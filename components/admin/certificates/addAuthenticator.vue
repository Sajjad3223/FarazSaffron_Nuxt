<template>
  <Form @submit="addCertificate" class="mt-5 flex flex-col">
    <base-g-input type="text" name="title" label="عنوان" required id="title" v-model="createAuthenticatorCommand.title" />
    <base-g-input type="text" name="serialNumber" label="سریال" required id="serialNumber" v-model="createAuthenticatorCommand.serialNumber" />
    <select name="certificateId" id="certificateId" v-model="createAuthenticatorCommand.certificateId">
      <option v-for="o in certificates" :value="o.id">{{o.title}}</option>
    </select>
    <base-g-button type="submit" w-full :is-loading="loading">
      ثبت سریال
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {CreateAuthenticatorCommand} from "~/models/certificate/authenticatorCommands";
import {CreateAuthenticator, GetAllCertificates} from "~/services/certificate.service";
import type {CertificateFilterData} from "~/models/certificate/authenticatorDto";

const emits = defineEmits(['authenticatorCreated']);

const certificates:Ref<CertificateFilterData[]> = ref([]);

const loading = ref(false);
const createAuthenticatorCommand:CreateAuthenticatorCommand = reactive({
  title:"",
  serialNumber:'',
  certificateId:0
});
const toast = useToast();

onMounted(async ()=>{
  const result = await GetAllCertificates({pageId:1,search:undefined,take:100});
  if(result.isSuccess)
    certificates.value = result.data?.data ?? [];
})

const addCertificate = async ()=>{
  loading.value = true;

  const result = await CreateAuthenticator(createAuthenticatorCommand);
  if(result.isSuccess){
    toast.showToast();
    emits('authenticatorCreated');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>
