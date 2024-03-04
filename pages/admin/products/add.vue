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
            <svg
                class="size-7 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
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
            <svg
                class="size-7 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
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

            <svg
                class="size-7 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
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

            <svg
                class="size-7 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
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