<template>
  <Head>
    <Title>استعلام محصول</Title>
  </Head>
  <div class="container mx-auto">
    <div class="w-1/3 max-w-[400px] flex mx-auto flex-col space-y-8 rounded-2xl my-12" v-if="authenticator == null">
      <div class="flex flex-col items-center space-y-2">
        <span class="text-xl">استعلام محصول</span>
        <span class="text-sm font-light">با استفاده از فرم زیر از اصالت محصول استعلام بگیرید</span>
      </div>
      <form @submit.prevent="findCertificate"
            class="w-full p-8 border bg-white rounded-lg relative flex flex-col space-y-4 items-center" method="GET">
        <div class="flex flex-col w-full space-y-2">
          <label class="text-sm font-light">کد استعلام</label>
          <input v-model="serial" required
                 type="text" name="serialNumber" id="serialNumber" placeholder="شماره سریال پشت محصول را وارد کنید" dir="ltr"
                 class="w-full text-sm placeholder-black/50 px-4 py-3 bg-[#FAFAFA] border border-[#818C92]/10 rounded-xl font-light focus:outline-none focus:border-[#818C92]/20">
        </div>
        <div class="flex flex-col w-full space-y-2">
          <label class="text-sm font-light">تاریخ اعتبار کالا</label>
          <div class="grid grid-cols-3 gap-4 w-full">
            <div class="relative" v-if="false">
              <select name="" id="" class="w-full text-sm placeholder-black/20 px-4 py-3 bg-[#FAFAFA] border border-[#818C92]/10 rounded-xl font-light focus:outline-none focus:border-[#818C92]/20">
                <option value="" selected>روز</option>
              </select>
            </div>
            <input type="text" name="serialNumber" id="serialNumber" placeholder="روز" dir="ltr"
                   class="w-full text-sm placeholder-black/50 px-4 py-3 bg-[#FAFAFA] border border-[#818C92]/10 rounded-xl font-light focus:outline-none focus:border-[#818C92]/20">
            <div class="relative" v-if="false">
              <select name="" id="" class="w-full text-sm placeholder-black/20 px-4 py-3 bg-[#FAFAFA] border border-[#818C92]/10 rounded-xl font-light focus:outline-none focus:border-[#818C92]/20">
                <option value="" selected>ماه</option>
              </select>
            </div>
            <input type="text" name="serialNumber" id="serialNumber" placeholder="ماه" dir="ltr"
                   class="w-full text-sm placeholder-black/50 px-4 py-3 bg-[#FAFAFA] border border-[#818C92]/10 rounded-xl font-light focus:outline-none focus:border-[#818C92]/20">
            <div class="relative" v-if="false">
              <select name="" id="" class="w-full text-sm placeholder-black/20 px-4 py-3 bg-[#FAFAFA] border border-[#818C92]/10 rounded-xl font-light focus:outline-none focus:border-[#818C92]/20">
                <option value="" selected>سال</option>
              </select>
            </div>
            <input type="text" name="serialNumber" id="serialNumber" placeholder="سال" dir="ltr"
                   class="w-full text-sm placeholder-black/50 px-4 py-3 bg-[#FAFAFA] border border-[#818C92]/10 rounded-xl font-light focus:outline-none focus:border-[#818C92]/20">
          </div>
        </div>
        <div class="flex flex-col w-full space-y-2">
          <label class="text-sm font-light">نوع محصول</label>
          <div class="relative">
            <select name="" id="" class="w-full text-sm placeholder-black/20 px-4 py-3 bg-[#FAFAFA] border border-[#818C92]/10 rounded-xl font-light focus:outline-none focus:border-[#818C92]/20">
              <option value="" selected>نوع محصول را انتخاب کنید</option>
              <option v-for="p in productOptions" :value="p.id">{{p.title}}</option>
            </select>
          </div>
        </div>
        <button class="bg-[#FB7511] text-white w-full rounded-lg py-2" type="submit">
          استعلام
        </button>
      </form>
    </div>
    <div v-else class="w-2/3 mx-auto flex flex-col items-start my-8 space-y-4">
      <span class="self-center">شناسنامه محصول</span>
      <div class="w-full flex flex-col bg-white border border-[#818C92]/10 rounded-xl p-14">
        <div class="flex items-start gap-5">
          <div class="w-1/3 aspect-square border border-[#818C92]/10 rounded-lg grid place-items-center">
            <img class="w-2/3"
                :src="`${SITE_URL}/product/images/${authenticator.certificate.product.mainImage.src}`"
                :alt="authenticator.certificate.product.mainImage.alt">
          </div>
          <div class="flex-1 flex flex-col space-y-4">
            <div v-for="p in authenticator.certificate.properties" :key="p.id"
                 class="flex items-center justify-between">
              <span class="text-sm opacity-70 font-light">{{p.title}}</span>
              <span class="font-light">{{p.value}}</span>
            </div>
          </div>
        </div>
        <hr class="my-5">
        <span class="text-lg">مشخصات محصول</span>
        <div class="flex flex-col w-full space-y-4 mt-5">
          <div v-for="p in authenticator.properties" :key="p.id"
               class="flex items-center justify-between">
            <span class="w-max text-sm opacity-70 font-light">{{p.title}}</span>
            <div class="w-2/3">
              <div class="mr-auto w-max">
                <span class="font-light" v-if="p.propertyType == EPropertyType.تاریخ || p.propertyType == EPropertyType.تاریخ_زمان">
                {{new Date(p.value).toLocaleDateString('fa-IR')}}
              </span>
                <img class="w-full"
                     :src="`${SITE_URL}/properties/authenticator/${p.value}`" alt="" v-else-if="p.propertyType == EPropertyType.تصویر">
                <span class="font-light" v-else>{{p.value}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="bg-[#FB7511] font-light text-sm text-white rounded-lg px-4 mx-auto py-3 flex gap-2">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="18" height="18" fill="url(#pattern0_2245_15721)"/>
          <defs>
            <pattern id="pattern0_2245_15721" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_2245_15721" transform="scale(0.01)"/>
            </pattern>
            <image id="image0_2245_15721" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAxdJREFUeAHtnT1rFFEUQKPYaKWgnTaipVbaBhH7FCHov1H8M5Jor4gg1uKvsBIUFa1sjj6zG7KwGXkfd3x5ex4suzPz7p17z2F22F3ysrXlkIAEJCABCUhAAhKQgAQkIAEJSEACEpCABCTQCwHgGvAEeAYcDPZIPaXervbCe7IO4DbwjfHHV+DWJIweDgJvxndx1OHrHphP1gD8PCp3/Bc/JmH0cHB8B6sd9sB8sobVcsffmoTRw8HxFax22APzyRpWyx1/axJGDwfHV7DaYQ/MJ2tYLXf8rUkYPRwE9jbp0QNza5CABCQgAQlIQAISaEIAOAs8Al4Bn8b/dNGsw8TqJfAQONNKxhXgXbMSNzfRW+BylRTgAvBhcxk27/w9cL5Yyp+3qqfNSzLh4yIhwDngi/yaE/ic2GZLAe42L8WESwJ3SoTsLKN9bk5gp0RI+tbWEUNgTyExYEuzKqSUXFCcQoLAlqZVSCm5oDiFBIEtTauQUnJBcQoJAluaViGl5ILiFBIEtjStQkrJBcUpJAhsaVqFlJILiutCyEH2F2qdBCz+aLWlG4XUuFVIDb2AWIUEQK1JqZAaegGxCgmAWpNSITX0AmIVEgC1JqVCaugFxCokAGpNSoXU0AuIVUgA1JqUCqmhFxCrkACoNSkVUkMvIFYhAVBrUvYiZLflDwCpqRoo/zM2QMhudj/APYUcYgsQsl0i5CLwq6EUr5BDmInppWwhKQB4oZC/HNLaw63GfpGMhZCbwPdGlXiFHK5nfL1YyELKg0ZSNl1IWlz6fpWMZTBwA3heeU/ZVCHpnrEP1F0ZSxnHn9PNCNj+x4pxJ73DjSpkagW9xOricYazvz7JxqifQ2YHnHtCheQSC56vkGDAuekVkksseL5CggHnpldILrHg+QoJBpybXiG5xILnKyQYcG76CSEfF78rnMb/2pZqXzty+cw+f23VA++cHXDuCQdmv7a1XD6zz19b9cA7Zwece8KB2a9tLZfP7PPXVj3wztkB555wYPZrW8vl43wJSEACEpCABCQgAQlIQAISkIAEThOB33F0jJMYkkgCAAAAAElFTkSuQmCC"/>
          </defs>
        </svg>
        <span>چاپ شناسنامه</span>
      </button>
      <button class="text-sm font-light mx-auto opacity-70" @click="authenticator = null">بازگشت به فرم استعلام</button>
    </div>
  </div>

</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import type {SelectTagDto} from "~/models/product/productQueries";
import {GetCertificate} from "~/services/certificate.service";
import {type AuthenticatorDto, EPropertyType} from "~/models/certificate/authenticatorDto";
import {ApiStatusCode} from "~/models/metaData";
import {SITE_URL} from "~/utilities/api.config";


const route = useRoute();
const router = useRouter();
const toast = useToast();


const serial:Ref<string | null> = ref(route.query.serial?.toString());
const authenticator:Ref<AuthenticatorDto | null> = ref(null);

const productUtils = useProductUtils();
const productOptions:Ref<SelectTagDto[]> = ref([]);
onMounted(async ()=>{
  productOptions.value = await productUtils.GetForSelectTag();
})

const findCertificate = async ()=>{
  const result = await GetCertificate(serial.value!);
  if(result.isSuccess){
    authenticator.value = result.data!;
  }
  else{
    await toast.showError({message:'سریال وارد شده نامعتبر است',appStatusCode:ApiStatusCode.NotFound});
  }
}

</script>