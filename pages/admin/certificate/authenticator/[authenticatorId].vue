<template>
  <div>
    <Head>
      <Title>{{authenticator.title}}</Title>
    </Head>
    <base-f-divider :logo-divider="false" :title="authenticator.title" />

    <div class="grid grid-cols-2 mt-8">
      <div class="flex items-center gap-4">
        <span class="opacity-50 text-sm font-light">عنوان اصالت نامه:</span>
        <span>{{authenticator.title}}</span>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-50 text-sm font-light">شماره سریال:</span>
        <NuxtLink :to="`/inquiry?serial=${authenticator.serialNumber}`">{{authenticator.serialNumber}}</NuxtLink>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mt-12">
      <certificate-property-input v-for="(p,i) in aProperties" v-model="setAPropertiesCommand.properties[i]" :property="p"/>
    </div>

    <base-g-button w-full class="mt-5" @click="updateAuthenticator">
      ثبت ویژگی ها
    </base-g-button>

  </div>
</template>

<script setup lang="ts">
import {type CAPropertyDto, type AuthenticatorDto} from "~/models/certificate/authenticatorDto";
import {
  GetAProperties,
  GetAuthenticatorById,
  SetAProperties,
} from "~/services/certificate.service";
import {ToastType} from "~/composables/useSwal";
import type {AddPropertyCommand, SetPropertiesCommand} from "~/models/certificate/authenticatorCommands";

definePageMeta({
  layout:'admin'
})

const route = useRoute();
const router = useRouter();
const authenticatorId = parseInt(route.params.authenticatorId.toString());
const {data,pending} = await useAsyncData(`GetAuthenticator-Id:${authenticatorId}`,()=>GetAuthenticatorById(authenticatorId));

const toast = useToast();
if(!data.value?.isSuccess){
  if(process.server){
    throw createError({statusCode:404,message:'Not Found'})
  }else{
    router.push('/admin/certificate/authenticator');
    await toast.showToast('شناسنامه مورد نظر یافت نشد',ToastType.error,0)
  }
}

const loading = ref(true);
const authenticator:Ref<AuthenticatorDto | null | undefined> = ref(data.value?.data);
const aProperties:Ref<CAPropertyDto[]> = ref([]);

const setAPropertiesCommand:SetPropertiesCommand = reactive({
  entityId:authenticatorId,
  properties:
      [...aProperties.value].map(p=>{
        return {
          propertyId:p.id,
          propertyType:p.propertyType,
          value:authenticator.value?.properties.find(cp=>cp.propertyId == p.id)?.value,
          file:null
        } as AddPropertyCommand
      })
})

onMounted(async ()=>{
  const result = await GetAProperties(authenticatorId,{take:100,pageId:1,search:undefined});
  if(result.isSuccess){
    aProperties.value = result.data?.data ?? [];
  }
});

const updateAuthenticator = async ()=>{
  setAPropertiesCommand.properties = setAPropertiesCommand.properties.filter(p=>p.value != null || p.file != null);

  const data = new FormData();
  data.append('entityId',authenticatorId.toString());

  setAPropertiesCommand.properties.forEach((p,i)=>{
    data.append(`properties[${i}].propertyId`,p.propertyId.toString())
    data.append(`properties[${i}].propertyType`,p.propertyType.toString())
    if(p.value != null)
      data.append(`properties[${i}].value`,p.value)
    if(p.file != null)
      data.append(`properties[${i}].file`,p.file)
  })


  const result = await SetAProperties(authenticatorId,data);
  if(result.isSuccess){
    toast.showToast();
  }else{
    toast.showError(result.metaData);
  }
}

</script>