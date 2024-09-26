<template>
  <div class="size-a4 m-auto">
    <div class="w-full h-full">
      <div class="w-full h-full mx-auto flex flex-col items-start space-y-4">
        <div class="w-full h-full flex flex-col rounded-xl p-10">
          <div class="w-full flex items-center justify-between">
            <div class="flex items-center gap-4">
              <img src="~/assets/images/gp-black.png" alt="gp black" class="max-w-10">
              <div class="flex flex-col gap-1">
                <span>جی‌پی زعفران</span>
                <span class="uppercase text-xs font-[montserrat]">GP Saffron</span>
              </div>
            </div>
            <div class="grid place-items-center w-16 h-16 relative">
              <img src="~/assets/images/qrcode.png" alt="qr code" class="border w-full z-[1]">
              <div class="absolute inset-0 rotate-6 border"></div>
            </div>
          </div>
          <div class="my-6 border w-full flex items-center gap-5 p-5">
            <div class="flex-1 flex flex-col gap-2 text-xs">
              <div class="flex items-center gap-2">
                <img src="~/assets/images/gift.png" alt="gift" class="max-w-20">
                <div class="flex flex-col gap-1">
                  <span>این هدیه برای توست</span>
                  <div class="flex items-end gap-1">
                    <span class="text-[10px] font-light">از طرف</span>
                    <span>شرکت جی‌پی زعفران</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-px h-16 bg-black/20"></div>
            <div class="flex-1 flex flex-col gap-2 text-xs">
              <span>به خانواده جی‌پی خوش آمدید.</span>
              <span>از اینکه مشتری ارزشمند ما هستید سپاسگزاریم...</span>
            </div>
          </div>
          <div class="flex flex-row items-start gap-5">
            <div class="w-1/3 relative aspect-square rounded-lg grid place-items-center">
              <img class="w-2/3 bg-white z-[2]"
                   :src="`${SITE_URL}/product/images/${product.mainImage.src}`"
                   :alt="product.mainImage.alt">
              <span class="bg-white absolute border border-[#818C92]/10 inset-0 z-[1]"></span>
              <span class="absolute inset-0 border border-[#818C92]/10 rotate-6 "></span>
            </div>
            <div class="flex-1 flex flex-col gap-1">
              <div v-for="p in product.properties" :key="p.id"
                   class="flex flex-row items-center justify-between gap-0 even:bg-[#FFE5CC]/30 print:bg-[#FFE5CC]/30 px-3 py-1 text-xs">
                <span class="text-sm opacity-70 font-light">{{p.title}}</span>
                <span class="font-light self-center">{{p.value}}</span>
              </div>
            </div>
          </div>
          <hr class="my-5">
          <span class="text-lg">مشخصات محصول</span>
          <div class="flex flex-col w-full space-y-4 mt-5">
            <div v-for="p in authenticator.properties.sort((a,b)=>a.propertyType - b.propertyType)" :key="p.id"
                 class="flex items-center justify-between">
              <span class="w-max self-center text-sm opacity-70 font-light">{{p.title}}</span>
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
                  <div v-else-if="p.propertyType == EPropertyType.رنج" class="relative min-w-[200px]" >
                    <div class="h-2 w-full relative">
                      <img src="/images/rangeBg.png" alt="rangeBg" class="absolute inset-0">
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
            <div class="flex items-center justify-between">
              <span class="w-max self-center text-sm opacity-70 font-light">بهترین تاریخ مصرف</span>
              <div class="flex gap-1 font-light">
                <span>تا قبل از </span>
                <span>{{months[dateValue.month - 1]}}</span> ماه
                <span>{{dateValue.year + 2}}</span>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-4 mt-auto">
            <div class="flex items-center gap-1">
              <a href="https://gpsaffron.com">www.gpsaffron.com</a>
              <img src="~/assets/images/icons/website.png" alt="website" class="w-4">
            </div>
            <div class="w-px h-5 bg-black/30"></div>
            <div class="flex items-center gap-1">
              <a href="https://instagram.com/gp_saffron">gp_saffron</a>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7" clip-path="url(#clip0_2598_55813)">
                  <path d="M7 1.26055C8.87031 1.26055 9.0918 1.26875 9.82734 1.30156C10.5109 1.33164 10.8801 1.44648 11.1262 1.54219C11.4516 1.66797 11.6867 1.82109 11.9301 2.06445C12.1762 2.31055 12.3266 2.54297 12.4523 2.86836C12.548 3.11445 12.6629 3.48633 12.693 4.16719C12.7258 4.90547 12.734 5.12695 12.734 6.99453C12.734 8.86484 12.7258 9.08633 12.693 9.82188C12.6629 10.5055 12.548 10.8746 12.4523 11.1207C12.3266 11.4461 12.1734 11.6812 11.9301 11.9246C11.684 12.1707 11.4516 12.3211 11.1262 12.4469C10.8801 12.5426 10.5082 12.6574 9.82734 12.6875C9.08906 12.7203 8.86758 12.7285 7 12.7285C5.12969 12.7285 4.9082 12.7203 4.17266 12.6875C3.48906 12.6574 3.11992 12.5426 2.87383 12.4469C2.54844 12.3211 2.31328 12.168 2.06992 11.9246C1.82383 11.6785 1.67344 11.4461 1.54766 11.1207C1.45195 10.8746 1.33711 10.5027 1.30703 9.82188C1.27422 9.08359 1.26602 8.86211 1.26602 6.99453C1.26602 5.12422 1.27422 4.90273 1.30703 4.16719C1.33711 3.48359 1.45195 3.11445 1.54766 2.86836C1.67344 2.54297 1.82656 2.30781 2.06992 2.06445C2.31602 1.81836 2.54844 1.66797 2.87383 1.54219C3.11992 1.44648 3.4918 1.33164 4.17266 1.30156C4.9082 1.26875 5.12969 1.26055 7 1.26055ZM7 0C5.09961 0 4.86172 0.00820312 4.11523 0.0410156C3.37148 0.0738281 2.86016 0.194141 2.41719 0.366406C1.95508 0.546875 1.56406 0.784766 1.17578 1.17578C0.784766 1.56406 0.546875 1.95508 0.366406 2.41445C0.194141 2.86016 0.0738281 3.36875 0.0410156 4.1125C0.00820313 4.86172 0 5.09961 0 7C0 8.90039 0.00820313 9.13828 0.0410156 9.88477C0.0738281 10.6285 0.194141 11.1398 0.366406 11.5828C0.546875 12.0449 0.784766 12.4359 1.17578 12.8242C1.56406 13.2125 1.95508 13.4531 2.41445 13.6309C2.86016 13.8031 3.36875 13.9234 4.1125 13.9562C4.85898 13.9891 5.09687 13.9973 6.99727 13.9973C8.89766 13.9973 9.13555 13.9891 9.88203 13.9562C10.6258 13.9234 11.1371 13.8031 11.5801 13.6309C12.0395 13.4531 12.4305 13.2125 12.8187 12.8242C13.207 12.4359 13.4477 12.0449 13.6254 11.5855C13.7977 11.1398 13.918 10.6313 13.9508 9.8875C13.9836 9.14102 13.9918 8.90312 13.9918 7.00273C13.9918 5.10234 13.9836 4.86445 13.9508 4.11797C13.918 3.37422 13.7977 2.86289 13.6254 2.41992C13.4531 1.95508 13.2152 1.56406 12.8242 1.17578C12.4359 0.7875 12.0449 0.546875 11.5855 0.369141C11.1398 0.196875 10.6313 0.0765625 9.8875 0.04375C9.13828 0.00820313 8.90039 0 7 0Z" fill="#070707"/>
                  <path d="M7.00195 3.4043C5.0168 3.4043 3.40625 5.01484 3.40625 7C3.40625 8.98516 5.0168 10.5957 7.00195 10.5957C8.98711 10.5957 10.5977 8.98516 10.5977 7C10.5977 5.01484 8.98711 3.4043 7.00195 3.4043ZM7.00195 9.33242C5.71406 9.33242 4.66953 8.28789 4.66953 7C4.66953 5.71211 5.71406 4.66758 7.00195 4.66758C8.28984 4.66758 9.33437 5.71211 9.33437 7C9.33437 8.28789 8.28984 9.33242 7.00195 9.33242Z" fill="#070707"/>
                  <path d="M11.5773 3.26206C11.5773 3.72691 11.2 4.10152 10.7379 4.10152C10.273 4.10152 9.89844 3.72417 9.89844 3.26206C9.89844 2.79722 10.2758 2.42261 10.7379 2.42261C11.2 2.42261 11.5773 2.79995 11.5773 3.26206Z" fill="#070707"/>
                </g>
                <defs>
                  <clipPath id="clip0_2598_55813">
                    <rect width="14" height="14" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <button @click="printWindow"
                class="print:hidden bg-[#FB7511] font-light text-sm text-white rounded-lg px-4 mx-auto py-3 flex gap-2">
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
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {ProductDto} from "~/models/product/productQueries";
import {GetCertificate} from "~/services/certificate.service";
import {type AuthenticatorDto, EPropertyType, type GetCertificateCommand} from "~/models/certificate/authenticatorDto";
import {SITE_URL} from "~/utilities/api.config";
import {months} from "~/utilities/dateUtils";
import {GetProductById2} from "~/services/product.service";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

definePageMeta({
  layout:false
})

const route = useRoute();
const router = useRouter();
const toast = useToast();

const getCertificateCommand = {
  serial:route.query.serial,
  productId:Number(route.query.productId),
  year:Number(route.query.year),
  month:Number(route.query.month),
  day:Number(route.query.day)
} as GetCertificateCommand;

const {data:certificateData} = await useAsyncData("GetCertificate",()=>GetCertificate(getCertificateCommand));
const {data:productData} = await useAsyncData("GetProduct",()=>GetProductById2(Number(route.query.productId?.toString()!)));

const authenticator:Ref<AuthenticatorDto | null> = ref(certificateData.value?.data ?? null);
const product:Ref<ProductDto | null> = ref(productData.value?.data ?? null);
const dateValue = {
  year:Number(route.query.year),
  month:Number(route.query.month)
}

/** constants */
// a4 size [595.28,841.89]
const A4_HEIGHT = 841.89;
const A4_WIDTH = 595.28;

const WIDTH_MARGIN = 10;
const HEIGHT_MARGIN = 10;
const PAGE_HEIGHT = A4_HEIGHT - 2 * HEIGHT_MARGIN;

const pdf = new jsPDF('p','pt','a4');

onMounted(()=>{
  setTimeout(printWindow,1000)
  return;

  html2canvas(document.body).then(canvas=>{
    const pagImage = canvas.toDataURL('image/png',1.0);

    const imgWidth = A4_WIDTH - 2 * WIDTH_MARGIN;    // max image width
    const imgHeight = (imgWidth / canvas.width) * canvas.height; // scale height in equal proportion

    const usedHeight = HEIGHT_MARGIN;

    pdf.addImage(pagImage,'PNG',WIDTH_MARGIN, // x - position against the left edge of the page
        usedHeight,   // y - position against the upper edge of the page
        imgWidth,
        imgHeight)

    pdf.save(`myPDF.pdf`);
  })
})

const getDateObject = (dateJson:string)=>{
  try {
    return JSON.parse(dateJson);
  }
  catch{
    return null;
  }
}

const printWindow = ()=>{
  window.print();
}

</script>

<style scoped lang="scss">

.size-a4{
  width: 210mm;
  height: 297mm;
  background-color: white;
}

@page {
  size: A4;
  margin: 0;
  padding: 1cm;
  font-family: "Vazir FD";
  font-weight: lighter;
}

@media print{
  html, body, .size-a4 {
    font-family: "Vazir FD";
    width: 210mm;
    height: 297mm;
    background-color: #fff;
  }
}
</style>