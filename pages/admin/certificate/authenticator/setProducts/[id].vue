<template>
  <div>
    <Head>
      <Title>{{authenticator.title}}</Title>
    </Head>
    <NuxtLink to="/admin/certificate/authenticator" class="flex items-center gap-2 px-1 my-4 font-light opacity-70">
      <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666016 1.33335L5.33268 6.00002L0.666016 10.6667" stroke="#070707" stroke-width="1.2"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>بازگشت</span>
    </NuxtLink>

    <div class="grid grid-cols-3 mt-8">
      <div class="flex items-center gap-4">
        <span class="opacity-50 text-sm font-light">عنوان اصالت نامه:</span>
        <span>{{authenticator.title}}</span>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-50 text-sm font-light">شماره سریال:</span>
        <NuxtLink :to="`/inquiry?serial=${authenticator.serialNumber}`" class="font-[montserrat] uppercase">{{authenticator.serialNumber}}</NuxtLink>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-50 text-sm font-light">شماره سریال:</span>
        <span class="font-[montserrat] uppercase">{{date}}</span>
      </div>
    </div>

    <div
        class="mt-10 flex-1 bg-white rounded-xl p-5 transition-all duration-300">
      <div class="w-full grid grid-cols-4 2xl:grid-cols-5 gap-5" v-if="!loading">
        <admin-certificates-set-certificate-product v-for="(p,i) in products" :key="p.id" :product="p" v-model="setCertificateProductsCommand.products[i]"/>
      </div>
    </div>

    <base-g-button w-full class="mt-5" @click="updateAuthenticator" :is-loading="loading">
      ثبت ویژگی ها
    </base-g-button>

  </div>
</template>

<script setup lang="ts">
import {type CAPropertyDto, type AuthenticatorDto} from "~/models/certificate/authenticatorDto";
import {
  GetAProperties,
  GetAuthenticatorById,
  SetAProperties, SetCertificateProducts,
} from "~/services/certificate.service";
import {ToastType} from "~/composables/useSwal";
import type {
  AddCertificateProductCommand,
  AddPropertyCommand,
  SetCertificateProductsCommand,
  SetPropertiesCommand
} from "~/models/certificate/authenticatorCommands";
import {GetProductsForSelectTag} from "~/services/product.service";
import type {SelectTagDto} from "~/models/product/productQueries";
import {SITE_URL} from "~/utilities/api.config";

definePageMeta({
  layout:'admin'
})

const route = useRoute();
const router = useRouter();
const date = route.query.date?.toString();
const authenticatorId = parseInt(route.params.id.toString());
const {data} = await useAsyncData(`GetAuthenticator-Id:${authenticatorId}`,()=>GetAuthenticatorById(authenticatorId,date));

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
const products:Ref<SelectTagDto[]> = ref([]);

const setCertificateProductsCommand:Ref<SetCertificateProductsCommand> = ref({
  authenticatorId:authenticatorId,
  products:[],
  persianDate:date!
});

onMounted(async ()=>{
  loading.value = true;
  products.value = await GetProductsForSelectTag({pageId:1,take:20,search:undefined});
  products.value.forEach(pr=>{
    setCertificateProductsCommand.value.products.push({
      productId:pr.id,
      count:authenticator.value?.products.find(p=>p.productId == pr.id)?.count
    } as AddCertificateProductCommand)
  })
  loading.value = false;
});

const updateAuthenticator = async ()=>{
  loading.value = true;
  setCertificateProductsCommand.value.products = setCertificateProductsCommand.value.products.filter(p=>p.count > 0);
  const result = await SetCertificateProducts(setCertificateProductsCommand.value);
  if(result.isSuccess){
    toast.showToast();
    await router.push('/admin/certificate/authenticator');
  }else{
    toast.showError(result.metaData);
  }
  loading.value = false;
}

</script>