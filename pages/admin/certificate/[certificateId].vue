<template>
  <div>
    <Head>
      <Title>{{certificate.title}}</Title>
    </Head>
    <base-f-divider :logo-divider="false" :title="certificate.title" />

    <div class="grid grid-cols-2 mt-8">
      <div class="flex items-center gap-4">
        <span class="opacity-50 text-sm font-light">عنوان شناسنامه:</span>
        <span>{{certificate.title}}</span>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-50 text-sm font-light">محصول مربوطه:</span>
        <NuxtLink :to="`/product/${certificate.product.slug}`">{{certificate.product.title}}</NuxtLink>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mt-12" v-if="!pending">
      <certificate-property-input v-for="(p,i) in cProperties" v-model="setCPropertiesCommand.properties[i]" :property="p"/>
    </div>

    <base-g-button w-full class="mt-5" @click="updateCertificate">
      ثبت ویژگی ها
    </base-g-button>

  </div>
</template>

<script setup lang="ts">
import {type CAPropertyDto, type CertificateDto, EPropertyType} from "~/models/certificate/authenticatorDto";
import {GetCertificateById, GetCProperties, SetCProperties} from "~/services/certificate.service";
import {ToastType} from "~/composables/useSwal";
import type {AddPropertyCommand, SetPropertiesCommand} from "~/models/certificate/authenticatorCommands";

definePageMeta({
  layout:'admin'
})

const route = useRoute();
const router = useRouter();
const certificateId = parseInt(route.params.certificateId.toString());
const {data} = await useAsyncData(`GetCertificate-Id:${certificateId}`,()=>GetCertificateById(certificateId));

const toast = useToast();
if(!data.value?.isSuccess){
  if(process.server){
    throw createError({statusCode:404,message:'Not Found'})
  }else{
    router.push('/admin/certificate');
    await toast.showToast('شناسنامه مورد نظر یافت نشد',ToastType.error,0)
  }
}

const loading = ref(true);
const certificate:Ref<CertificateDto | null | undefined> = ref(data.value?.data);
const {data:propertyResult,pending} = await useAsyncData(`GetProperties:${certificateId}`,()=>GetCProperties(certificateId,{take:100,pageId:1,search:undefined}));
const cProperties:Ref<CAPropertyDto[]> = ref(propertyResult.value?.data?.data ?? []);

const setCPropertiesCommand:SetPropertiesCommand = reactive({
  entityId:certificateId,
  properties:
      [...cProperties.value].map(p=>{
        return {
          propertyId:p.id,
          propertyType:p.propertyType,
          value:certificate.value?.properties.find(cp=>cp.propertyId == p.id)?.value,
          file:null
        } as AddPropertyCommand
      })
})

onMounted(async ()=>{
  const result = await GetCProperties(certificateId,{take:100,pageId:1,search:undefined});
  if(result.isSuccess){
    cProperties.value = result.data?.data ?? [];
  }

});

const updateCertificate = async ()=>{


  const result = await SetCProperties(setCPropertiesCommand);
  if(result.isSuccess){
    toast.showToast();
  }else{
    toast.showError(result.metaData);
  }
}

</script>