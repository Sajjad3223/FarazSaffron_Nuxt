<template>
  <div>
    <Head>
      <Title>محصولات ثبت شده</Title>
    </Head>
    <base-f-divider :logo-divider="false" title="محصولات ثبت شده" />

    <Form class="grid grid-cols-3 mb-4 gap-4 items-end" @submit="getData" >
      <base-inputs-text-input name="search" type="text" label="جستجو" place-holder="جستجو در نام، توضیحات و ..." v-model="filterParams.search" />

      <div class="flex flex-col w-full space-y-2">
        <label class="text-sm font-light">از تاریخ </label>
        <div class="grid grid-cols-3 gap-4 w-full" >
          <base-g-select :options="dayOptions" v-model="filterParams.fromDate.day" placeholder="1" name="fromDateDay"/>
          <!--                <base-inputs-text-input type="number" name="day" v-model="dateValue.day" place-holder="روز"/>-->
          <base-g-select :options="monthOptions" v-model="filterParams.fromDate.month" name="fromDateMonth"/>
          <base-inputs-text-input type="number" name="fromDateYear" v-model="filterParams.fromDate.year" place-holder="سال"/>
        </div>
      </div>

      <div class="flex flex-col w-full space-y-2">
        <label class="text-sm font-light">تا تاریخ </label>
        <div class="grid grid-cols-3 gap-4 w-full" >
          <base-g-select :options="dayOptions" v-model="filterParams.toDate.day" placeholder="1" name="toDateDay"/>
          <!--                <base-inputs-text-input type="number" name="day" v-model="dateValue.day" place-holder="روز"/>-->
          <base-g-select :options="monthOptions" v-model="filterParams.toDate.month" name="toDateMonth"/>
          <base-inputs-text-input type="number" name="toDateYear" v-model="filterParams.toDate.year" place-holder="سال"/>
        </div>
      </div>

      <div class="flex items-center gap-5 col-span-full mr-auto">
        <base-g-button is-icon color="secondary" button-type="white" bordered text-color="responsive" type="reset">
          حذف فیلتر ها
        </base-g-button>
        <base-g-button is-icon color="info" button-type="outline" text-color="white" type="submit">
          اعمال فیلتر
        </base-g-button>
      </div>
    </Form>

    <div class="p-4 border rounded-xl flex flex-col gap-4">
      <h3 class="text-xl">اطلاعات کلی <span class="text-sm font-light opacity-70">(در بازه زمانی انتخاب شده)</span></h3>
      <div class="flex flex-col gap-4 flex-wrap" v-if="productsResult != undefined && productsResult.productsData.length > 0">
        <div class="flex items-center font-light gap-2">
          <span class="opacity-70">تعداد کل محصولات تولید شده:</span>
          <strong class="text-lg">{{productsResult.totalProductionCount}}</strong>
          <span>عدد</span>
        </div>
        <h4 class="text-sm opacity-70">اطلاعات کلی محصولات:</h4>
        <div class="grid grid-cols-4 gap-4">
          <div class="flex w-full overflow-hidden items-center border p-2 rounded-lg gap-2" v-for="product in productsResult.productsData" :key="product.product?.id">
            <img :src="`${SITE_URL}/product/images/${product.product.mainImage.src}`" :alt="product.product.mainImage.alt" class="max-h-12">
            <div class="flex flex-1 flex-col gap-1">
              <span class="w-[90%] text-xs font-light truncate" :title="product.product.title">{{product.product.title}}</span>
              <span class="text-xs font-light truncate"><span class="opacity-70">تعداد:</span> <strong class="text-sm font-semibold">{{product.count}}</strong> عدد</span>
            </div>
          </div>
        </div>
        <h4 class="text-sm opacity-70">اطلاعات کلی سریال ها:</h4>
        <div class="grid grid-cols-6 gap-4">
          <div class="flex w-full overflow-hidden items-center border p-2 rounded-lg gap-2" v-for="serial in productsResult.serialsData" :key="serial.serialNumber">
            <div class="flex flex-1 flex-col items-center gap-1">
              <span class="text-sm font-light font-[montserrat]" >{{serial.serialNumber}}</span>
              <span class="text-xs font-light truncate"><span class="opacity-70">تعداد:</span> <strong class="text-sm font-semibold">{{serial.count}}</strong> عدد</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <table class=" mt-12 w-full" v-if="products.length > 0">
      <thead class="font-bold opacity-50">
      <tr class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  ">
        <th class="px-4 text-right py-5" width="40%">محصول</th>
        <th class="px-4 text-right py-5">سریال</th>
        <th class="px-4 text-right py-5">تعداد</th>
        <th class="px-4 text-right py-5">تاریخ تولید</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="a in products" :key="a.id">
        <td class="px-4 py-5">
          <div class="flex items-center gap-2">
            <img :src="`${SITE_URL}/product/images/${a.product.mainImage.src}`" :alt="a.product.mainImage.alt" class="max-w-32">
            <div class="flex flex-col gap-1">
              <span class="text-sm truncate" :title="a.product.title">{{a.product.title}}</span>
            </div>
          </div>
        </td>
        <td class="px-4 py-5">
          <NuxtLink :to="`/inquiry?serial=${a.serialNumber.substring(2)}`" target="_blank" class="font-[montserrat] uppercase">
            {{a.serialNumber}}
          </NuxtLink>
        </td>
        <td class="px-4 py-5">{{a.count}} <span class="text-sm font-light opacity-70">بسته</span></td>
        <td class="px-4 py-5">{{a.persianProductionDate}}</td>
      </tr>
      </tbody>
    </table>

    <FPagination v-model="pageId" :pagination-data="paginationData" />
  </div>
</template>

<script setup lang="ts">
import type {
  CertificateProductData,
  CertificateProductDto,
  CertificateProductFilterParams, CertificateProductFilterResult
} from "~/models/certificate/authenticatorDto";
import {GetCertificateProducts} from "~/services/certificate.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {ToastType} from "~/composables/useSwal";
import {SITE_URL} from "~/utilities/api.config";
import {Form} from "vee-validate";
import {monthOptions} from "~/utilities/dateUtils";
import type {GSelectData} from "~/models/gSelectData";

definePageMeta({
  layout:'admin'
})

const toast = useToast();

const loading = ref(true);
const products:Ref<CertificateProductDto[]> = ref([]);
const productsResult:Ref<CertificateProductFilterResult | undefined> = ref(undefined);
const paginationData:Ref<PaginationData | null> = ref(null);
const filterParams:CertificateProductFilterParams = reactive({
  pageId:1,
  take:50,
  search:undefined,
  fromDate: {
    day:1,
    month:1,
    year:1401
  },
  toDate: {
    day:29,
    month:12,
    year:1403
  }
});

const dayOptions = computed(()=>{
  let options:GSelectData[] = [];
  for (let i = 1; i <= 31; i++){
    const data = {title:i.toString(),value:i,image:null} as GSelectData;
    options.push(data);
  }
  return options;
})

const pageId = ref(1);
watch(
    pageId,
    ()=>async()=> await getData()
)

onMounted(async ()=>{
  await getData();
})

const getData = async ()=>{
  loading.value = true;

  const result = await GetCertificateProducts(filterParams);
  if(result.isSuccess){
    productsResult.value = result.data;
    products.value = result.data?.data ?? [];
    paginationData.value = FillPaginationData(result.data!);
  }else{
    toast.showToast(result.metaData.message,ToastType.error)
  }

  loading.value = false;
}
</script>