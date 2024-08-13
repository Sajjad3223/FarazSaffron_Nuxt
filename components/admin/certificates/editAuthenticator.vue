<template>
  <Form @submit="editCertificate" class="mt-5 flex flex-col">
    <base-g-input type="text" name="title" label="عنوان" required id="title" v-model="editAuthenticatorCommand.title" />
    <base-g-input type="text" name="serialNumber" label="سریال" required id="serialNumber" v-model="editAuthenticatorCommand.serialNumber" />
    <select name="certificateId" id="certificateId" v-model="editAuthenticatorCommand.certificateId">
      <option v-for="o in certificates" :value="o.id">{{o.title}}</option>
    </select>
    <base-g-button type="submit" w-full :is-loading="loading">
      ویرایش سریال
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {CreateAuthenticatorCommand, EditAuthenticatorCommand} from "~/models/certificate/authenticatorCommands";
import {CreateAuthenticator, EditAuthenticator, GetAllCertificates} from "~/services/certificate.service";
import type {AuthenticatorFilterData, CertificateFilterData} from "~/models/certificate/authenticatorDto";

const props = defineProps<{
  authenticator:AuthenticatorFilterData
}>()

const emits = defineEmits(['authenticatorEdited']);

const certificates:Ref<CertificateFilterData[]> = ref([]);

const loading = ref(false);
const editAuthenticatorCommand:EditAuthenticatorCommand = reactive({
  authenticatorId:props.authenticator.id,
  title:props.authenticator.title,
  serialNumber:props.authenticator.serialNumber,
  certificateId:props.authenticator.certificateId
});
const toast = useToast();

onMounted(async ()=>{
  const result = await GetAllCertificates({pageId:1,search:undefined,take:100});
  if(result.isSuccess)
    certificates.value = result.data?.data ?? [];
})

const editCertificate = async ()=>{
  loading.value = true;

  const result = await EditAuthenticator(editAuthenticatorCommand);
  if(result.isSuccess){
    toast.showToast();
    emits('authenticatorEdited');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>
