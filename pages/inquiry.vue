<template>
  <div>
    <Head>
      <Title>استعلام محصول</Title>
    </Head>
    <div class="container mx-auto py-10">
      <div v-if="authenticator == null" class="w-full md:w-1/3 max-w-[400px] flex mx-auto flex-col space-y-8 rounded-2xl transition-all duration-300">
          <div class="flex flex-col items-center space-y-2">
            <span class="text-lg md:text-xl">استعلام محصول</span>
            <span class="text-xs md:text-sm font-light">با استفاده از فرم زیر از اصالت محصول استعلام بگیرید</span>
          </div>
          <form @submit.prevent="findCertificate"
                class="w-full p-8 border bg-white rounded-lg relative flex flex-col space-y-4 items-center" method="GET">
            <div class="flex flex-col w-full space-y-2">
              <base-inputs-text-input label="کد استعلام" name="serialNumber" v-model="serial" required side-text=" - ZC" text-align="center" custom-classes="font-[montserrat]" side-text-classes="font-[montserrat]" place-holder="شماره سریال پشت محصول را وارد کنید"/>
            </div>
            <div class="flex flex-col w-full space-y-2">
              <!--              <base-g-select label="نوع محصول" v-model="productId" :options="productOptions.map(o=>{
                                return {
                                  title:o.title,
                                  value:o.id,
                                  image:`${SITE_URL}/product/images/${o.imageName}`
                                } as GSelectData;
                              })" />-->
              <label class="text-sm font-light">نوع محصول</label>
              <base-g-button @click="showSelectProduct = true"
                             color="secondary" button-type="white" is-icon w-full custom-class="font-light text-xs !rounded-md">
                {{selectedProduct}}
              </base-g-button>
              <span v-if="showProductError" class="text-xs font-light text-danger">• لطفا یک محصول را انتخاب کنید</span>
            </div>
            <div class="flex flex-col w-full space-y-2">
              <label class="text-sm font-light">تاریخ تولید کالا <span class="text-xs font-light opacity-50">(درج شده روی بسته بندی)</span></label>
              <div class="grid grid-cols-3 gap-4 w-full" >
                <base-g-select :options="dayOptions" v-model="dateValue.day" placeholder="1"/>
<!--                <base-inputs-text-input type="number" name="day" v-model="dateValue.day" place-holder="روز"/>-->
                <base-g-select :options="monthOptions" v-model="dateValue.month"/>
                <base-inputs-text-input type="number" name="year" v-model="dateValue.year" place-holder="سال"/>
              </div>
            </div>
            <div class="flex w-full">
              <BaseGButton type="submit" w-full :is-loading="loading" is-icon custom-class="font-light text-sm !rounded-md">
                استعلام
              </BaseGButton>
            </div>
          </form>
        </div>
      <div v-else class="w-full md:w-2/3 mx-auto flex flex-col items-start my-8 space-y-4">
        <span class="self-center">شناسنامه محصول</span>
        <div class="w-full flex flex-col bg-white border border-[#818C92]/10 rounded-xl p-14">
          <div class="flex flex-col md:flex-row items-start gap-5">
            <div class="w-full md:w-1/3 aspect-square border border-[#818C92]/20 rounded-lg grid place-items-center">
              <img class="w-[90%]"
                   :src="`${SITE_URL}/product/images/${authenticator.certificate.product.mainImage.src}`"
                   :alt="authenticator.certificate.product.mainImage.alt">
            </div>
            <div class="flex-1 flex flex-col space-y-4">
              <div v-for="p in authenticator.certificate.product.properties" :key="p.id"
                   class="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
                <span class="text-sm opacity-70 font-light">{{p.title}}</span>
                <span class="font-light self-end md:self-center">{{p.value}}</span>
              </div>
            </div>
          </div>
          <hr class="my-5">
          <span class="text-lg">مشخصات محصول <span class="opacity-60 text-sm">( هنگام بسته بندی)</span></span>
          <div class="flex flex-col w-full space-y-4 mt-5">
            <div class="flex flex-col md:flex-row items-end md:items-center md:justify-between">
              <span class="w-max self-start md:self-center text-sm opacity-70 font-light">تاریخ انقضا</span>
              <div class="flex gap-1 font-light">
                <span>{{months[dateValue.month - 1]}}</span> ماه
                <span>{{dateValue.year + 2}}</span>
              </div>
            </div>
            <div v-for="p in authenticator.properties.sort((a,b)=>a.propertyType - b.propertyType)" :key="p.id"
                 class="flex flex-col md:flex-row items-end md:items-center md:justify-between">
              <span class="w-max self-start md:self-center text-sm opacity-70 font-light">{{p.title}}</span>
              <div class="flex">
                <div class="flex">
                <span class="font-light" v-if="!getDateObject(p.value) && p.propertyType == EPropertyType.تاریخ || p.propertyType == EPropertyType.تاریخ_زمان">
                  {{new Date(p.value).toLocaleDateString('fa-IR')}}
                </span>
                <span class="flex items-center gap-2" v-else-if="getDateObject(p.value) && p.propertyType == EPropertyType.تاریخ || p.propertyType == EPropertyType.تاریخ_زمان">
                  <span class="font-light">
                    {{months[getDateObject(p.value).month]}}
                  </span>
                  <span class="font-light">
                    {{getDateObject(p.value).year}}
                  </span>
                </span>
                  <div v-else-if="p.propertyType == EPropertyType.رنج" class="relative mt-6 mb-3 md:mt-0 md:mb-0 min-w-[200px] xl:min-w-[300px]" >
                    <div class="h-2 w-full" :style="{
                    backgroundImage: `linear-gradient(to right, ${true ? '#FB1624' : JSON.parse(p.value).leftColor},${true ? '#FFDE30' : JSON.parse(p.value).centerColor}, ${true ? '#07D263' : JSON.parse(p.value).rightColor})`
                    , maskImage:'url(/images/range-mask.png)',maskRepeat:'no-repeat',maskSize:'100%'}">
                    </div>
                    <span class="absolute -left-6 -top-1 text-xs font-thin">
                      {{JSON.parse(p.value).min}}
                    </span>
                    <span class="absolute text-xs text-center -translate-x-1/2 font-light top-3" :style="{left: `${(JSON.parse(p.value).value * 100) / JSON.parse(p.value).max}%`}">
                      {{JSON.parse(p.value).value}}
                    </span>
                    <span class="absolute text-xs -translate-x-1/2 font-light bottom-4" :style="{left: `${(JSON.parse(p.value).value * 100) / JSON.parse(p.value).max}%`}">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.8" d="M4 6L0.535898 0.75L7.4641 0.75L4 6Z" fill="#070707"/>
                    </svg>
                  </span>
                    <span class="absolute -right-6 -top-1 text-xs font-thin">
                      {{JSON.parse(p.value).max}}
                    </span>
                  </div>
                  <img class="w-full"
                       :src="`${SITE_URL}/properties/authenticator/${p.value}`" alt="" v-else-if="p.propertyType == EPropertyType.تصویر">
                  <span class="font-light" v-else>{{p.value}}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row items-end md:items-center md:justify-between">
              <span class="w-max self-start md:self-center text-sm opacity-70 font-light">بهترین تاریخ مصرف</span>
              <div class="flex gap-1 font-light">
                <span>تا قبل از </span>
                <span>{{months[dateValue.month - 1]}}</span> ماه
                <span>{{dateValue.year + 2}}</span>
              </div>
            </div>
          </div>
        </div>
        <button @click="openPrintWindow"
            class="bg-[#FB7511] font-light text-sm text-white rounded-lg px-4 mx-auto py-3 flex gap-2">
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

    <base-g-modal title="انتخاب محصول" v-model="showSelectProduct" width="85%">
      <div
           class="flex-1 bg-white rounded-xl md:p-5 transition-all duration-300">
        <div class="w-full grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 max-h-[65vh] md:max-h-screen overflow-y-auto pl-4">
          <div @click="productSelected(p)"
               class="flex flex-col items-center gap-2 p-2 rounded-xl border border-transparent hover:border-black/10 cursor-pointer"
               v-for="p in productOptions" :key="p.id">
            <NuxtImg placeholder="/images/placeholder.jpeg" :src="`${SITE_URL}/product/images/${p.imageName}`" :alt="p.title" class="max-h-[60px] md:max-h-[100px] w-fit" />
            <span class="text-[10px] md:text-xs text-center font-light">{{p.title}}</span>
          </div>
        </div>
      </div>
    </base-g-modal>

  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import type {SelectTagDto} from "~/models/product/productQueries";
import {GetCertificate} from "~/services/certificate.service";
import {
  type AuthenticatorDto,
  type CAPropertyDto,
  EPropertyType,
  type GetCertificateCommand
} from "~/models/certificate/authenticatorDto";
import {SITE_URL} from "~/utilities/api.config";
import type {GSelectData} from "~/models/gSelectData";
import {monthOptions, months} from "~/utilities/dateUtils";
import {GetProductById2} from "~/services/product.service";
import {ToastType} from "~/composables/useSwal";

const route = useRoute();
const router = useRouter();
const toast = useToast();
const dateValue = reactive({
  day:1,
  month:6,
  year:1403
});
watch(
    dateValue,
    ()=>{
      if(dateValue.month > 6 && dateValue.day == 31)
        dateValue.day = 30;
      setDayOptions();
    }
)

const dayOptions:Ref<GSelectData[]> = ref([]);

const setDayOptions = ()=>{
  const monthDaysCount = dateValue.month > 6 ? 30 : 31;
  let options:GSelectData[] = [];
  for (let i = 1; i <= monthDaysCount; i++){
    const data = {title:i.toString(),value:i,image:null} as GSelectData;
    options.push(data);
  }
  dayOptions.value = options;
}
const loading = ref(false);
const showSelectProduct = ref(false);
const productId = ref();
const selectedProduct = ref('انتخاب محصول');
const serial:Ref<string | null> = ref(route.query.serial?.toString());
const authenticator:Ref<AuthenticatorDto | null> = ref(null);
const showProductError = ref();

const productUtils = useProductUtils();
const productOptions:Ref<SelectTagDto[]> = ref([]);
onMounted(async ()=>{
  productOptions.value = await productUtils.GetForSelectTag();
  setDayOptions();
})

const productSelected = (p:SelectTagDto)=>{
  selectedProduct.value = p.title;
  productId.value = p.id;
  showSelectProduct.value = false;
}

const getDateObject = (dateJson:string)=>{
  try {
    return JSON.parse(dateJson);
  }
  catch{
    return null;
  }
}

const findCertificate = async ()=>{

  if(!productId.value) {
    showProductError.value = true;
    return;
  }

  try {
    loading.value = true;

    const command = {
      serial:`ZC${serial.value}`,
      year:dateValue.year,
      month:dateValue.month,
      day:dateValue.day,
      productId:productId.value
    } as GetCertificateCommand;

    const result = await GetCertificate(command);
    if(result.isSuccess){
      const productResult = await GetProductById2(productId.value);
      authenticator.value = result.data!;
      if(productResult.isSuccess){
        authenticator.value!.certificate.product = {
          id:productResult.data!.id,
          creationDate:productResult.data!.creationDate,
          title: productResult.data!.title,
          slug: productResult.data!.slug,
          price: productResult.data!.price,
          discount: productResult.data!.discount,
          weight: productResult.data!.weight,
          healthNumber: productResult.data!.healthNumber,
          totalPrice: productResult.data!.totalPrice,
          packingType: productResult.data!.packingType,
          mainImage: productResult.data!.mainImage,
          quantity: productResult.data!.quantity,
          score: productResult.data!.score,
          visits: productResult.data!.visits,
          digiKalaData: productResult.data!.digiKalaData,
          basalamData: productResult.data!.basalamData,
          persianDate:productResult.data!.persianDate,
          persianTime:productResult.data!.persianTime,
          properties:productResult.data!.properties
        }
      }
    }
    else{
      await toast.showError(result.metaData);
    }
    loading.value = false;
  }
  catch(exception){
    loading.value = false;
    toast.showToast(exception,ToastType.error)
  }
}

const openPrintWindow = ()=>{
  window.open(`/printCertificate?serial=ZC${serial.value}&productId=${productId.value}&year=${dateValue.year}&month=${dateValue.month}&day=${dateValue.day}`,"popup",'width=200,height=400');
}

const linearBackground = (p:CAPropertyDto) => {
  return `linear-gradient(to left,${JSON.parse(p.value).leftColor} 30%,${JSON.parse(p.value).centerColor} 30%, ${JSON.parse(p.value).rightColor}30%)`;
}

</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  scale: 0;
}

.list-leave-active {
  position: absolute;
  z-index: -1;
}
</style>