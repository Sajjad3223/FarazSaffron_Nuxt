<template>
  <div>
    <base-f-divider title="افزودن محصول جدید" :logo-divider="false"/>


    <div class="mt-4 mb-8">
      <h2 class="sr-only">Steps</h2>

      <div>
        <ol
            class="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-4"
        >
          <li :class="['flex items-center justify-center gap-2 p-4',{'active-step':step >= 0}]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 13H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 17H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span v-if="step >= 0"
                class="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"
            >
            </span>
            <span v-if="step >= 0"
                class="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"
            >
            </span>
            <p class="leading-none">
              <strong class="block font-medium"> مشخصات اصلی </strong>
              <small class="mt-1"> توضیحات و مشخصات اصلی کالا </small>
            </p>
          </li >
          <li :class="['flex items-center justify-center gap-2 p-4',{'active-step':step >= 1}]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.75 5H21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M18.5 7.75V2.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span v-if="step >= 1"
                  class="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"
            >
            </span>
            <span v-if="step >= 1"
                  class="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"
            >
            </span>

            <p class="leading-none">
              <strong class="block font-medium"> تصاویر </strong>
              <small class="mt-1"> بارگزاری تصاویر </small>
            </p>
          </li>
          <li :class="['flex items-center justify-center gap-2 p-4',{'active-step':step >= 2}]">

            <span v-if="step >= 2"
                  class="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"
            >
            </span>
            <span v-if="step >= 2"
                  class="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"
            >
            </span>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 22V11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 7V2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 22V17" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 13V2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 22V11" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 7V2" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 11H7" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 11H21" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 13H14" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <p class="leading-none">
              <strong class="block font-medium"> ویژگی ها </strong>
              <small class="mt-1"> ویژگی های محصول </small>
            </p>
          </li>
          <li :class="['flex items-center justify-center gap-2 p-4',{'active-step':step >= 3}]" >

            <span v-if="step >= 3"
                  class="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"
            >
            </span>
            <span v-if="step >= 3"
                  class="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"
            >
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.25 18.47L19.6 18.86C19.23 18.95 18.94 19.23 18.86 19.6L18.51 21.07C18.32 21.87 17.3 22.11 16.77 21.48L12 16L7.23002 21.49C6.70002 22.12 5.68002 21.88 5.49002 21.08L5.14002 19.61C5.05002 19.24 4.76002 18.95 4.40002 18.87L2.75002 18.48C1.99002 18.3 1.72002 17.35 2.27002 16.8L6.17002 12.9C7.25002 14.5 8.96002 15.63 10.95 15.92C11.29 15.98 11.64 16.01 12 16.01C12.36 16.01 12.71 15.98 13.05 15.92C15.04 15.63 16.75 14.5 17.83 12.9L21.73 16.8C22.28 17.34 22.01 18.29 21.25 18.47Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.58 5.98L13.17 7.15999C13.25 7.31999 13.46 7.48 13.65 7.51L14.72 7.68999C15.4 7.79999 15.56 8.3 15.07 8.79L14.24 9.61998C14.1 9.75998 14.02 10.03 14.07 10.23L14.31 11.26C14.5 12.07 14.07 12.39 13.35 11.96L12.35 11.37C12.17 11.26 11.87 11.26 11.69 11.37L10.69 11.96C9.96997 12.38 9.53997 12.07 9.72997 11.26L9.96997 10.23C10.01 10.04 9.93997 9.75998 9.79997 9.61998L8.96997 8.79C8.47997 8.3 8.63997 7.80999 9.31997 7.68999L10.39 7.51C10.57 7.48 10.78 7.31999 10.86 7.15999L11.45 5.98C11.74 5.34 12.26 5.34 12.58 5.98Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="leading-none">
              <strong class="block font-medium"> سئو </strong>
              <small class="mt-1"> توضیحات و اطلاعات سئو محصول </small>
            </p>
          </li>
        </ol>
      </div>
    </div>


    <Transition enter-active-class="transition-all duration-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
      <Form class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4" v-show="step === 0">
        <base-f-input label="عنوان محصول" place-holder="عنوان محصول را وارد کنید" v-model="addProductData.title" @update:modelValue="generateSlug"/>
        <base-f-input label="لینک یکتای محصول" place-holder="لینک یکتا" v-model="addProductData.slug"/>
        <base-f-input type="number" label="قیمت محصول" place-holder="قیمت محصول را وارد کنید" v-model="addProductData.price"/>
        <base-f-input type="number" label="تخفیف محصول" place-holder="تخفیف محصول را بین 0 تا 100 وارد کنید" v-model="addProductData.discount"/>
        <base-f-input type="file" class="row-span-4" label="تصویر محصول" v-model="addProductData.mainImage"/>
        <base-f-input label="متن تصویر" place-holder="در صورت لود نشدن تصویر نمایش داده میشود" v-model="addProductData.mainImageAlt"/>
        <base-f-input type="number" label="موجودی انبار" place-holder="تعداد موجود در انبار" v-model="addProductData.quantity"/>
        <base-f-select label="دسته بندی اصلی" place-holder="دسته بندی ها را انتخاب کنید" />
        <base-f-select label="دسته بندی فرعی" place-holder="دسته بندی ها را انتخاب کنید" />
        <base-f-dimension />
        <base-f-select label="نوع بسته بندی" place-holder="نوع بسته بندی را انتخاب کنید" :data="Object.keys(EPackingType).filter(k=>isNaN(Number(k)))" v-model="addProductData.packingType" />
        <base-f-input label="شماره سریال" place-holder="شماره سریال درج شده زیر محصول" v-model="addProductData.serialNumber"/>
        <base-f-input label="لینک دیجی کالا" place-holder="لینک محصول در دیجی کالا در صورت موجود بودن" v-model="addProductData.digiKalaLink"/>
      </Form>
    </Transition>
    <Transition enter-active-class="transition-all duration-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
      <Form class="grid grid-cols-1 my-4" v-show="step === 1">
        <f-multi-file-input />
      </Form>
    </Transition>
    <Transition enter-active-class="transition-all duration-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
      <Form class="grid grid-cols-1 my-4 space-y-4" v-show="step === 2">
        <product-specification-add v-for="(s,i) in specifications" />
        <base-f-button type="button" @clicked="specifications.push({key:'',value:''})" bordered color="primary" text-color="white">
          افزودن ویژگی جدید
        </base-f-button>
      </Form>
    </Transition>
    <Transition enter-active-class="transition-all duration-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
      <Form class="grid grid-cols-1 my-4 space-y-4" v-show="step === 3">
        <FSeoData />
      </Form>
    </Transition>

    <div class="flex items-center gap-4 mt-12">
      <base-f-button w-full type="button" color="secondary" text-color="white" class="col-span-2" bordered @clicked="step--" v-if="step > 0">
        قبلی
      </base-f-button>
      <base-f-button w-full type="button" color="primary" class="col-span-2" @clicked="step++" >
        بعدی
      </base-f-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {CreateProductCommand, CreateSpecificationViewModel} from "~/models/product/productCommands";
import {EPackingType} from "~/models/product/EPackingType";
import FMultiFileInput from "~/components/base/FMultiFileInput.vue";
import FSeoData from "~/components/base/FSeoData.vue";

definePageMeta({
  layout:'admin'
})

const step = ref(0);
const customSlug = ref(false);

const addProductData:CreateProductCommand = reactive({
  title: '',
  slug: '',
  price: null,
  discount: null,
  packingType: EPackingType.کیفی,
  mainImage: null,
  mainImageAlt: '',
  serialNumber: '',
  categoryId: null,
  subCategoryId: null,
  dimensions: '',
  digiKalaLink: null,
  seoData: null,
  quantity: 0,
})

const generateSlug = (value:string)=>{
  if(customSlug.value) return;
  addProductData.slug = value.replaceAll(' ','-');
}


const specifications:CreateSpecificationViewModel[] = reactive([
  {key:'',value:''}
]);

</script>

<style scoped>
.active-step{
  @apply relative bg-gray-50 text-brandOrange;
}
</style>