<template>
  <div>
    <Head>
      <Title>افزودن محصول جدید</Title>
    </Head>
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


    <div class="w-full relative">
      <Transition enter-active-class="transition-all duration-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <Form :validation-schema="addProductSchema" class="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4" v-show="step === 0" :on-submit="AddProduct">
          <base-f-input label="عنوان محصول" name="title" id="title" place-holder="عنوان محصول را وارد کنید" v-model="addProductData.title" @update:modelValue="generateSlug"/>
          <base-f-input label="لینک یکتای محصول" name="slug" id="slug" place-holder="لینک یکتا" v-model="addProductData.slug"/>
          <div class="grid grid-cols-3 gap-4 place-items-center">
            <base-f-input class="col-span-2" type="number" name="price" id="price" label="قیمت محصول (ریال)" place-holder="قیمت محصول را وارد کنید" v-model="addProductData.price" :rtl="false"/>
            <div class="flex flex-col space-y-1 justify-self-start">
              <small class="font-light">قیمت به تومان</small>
              <base-g-price :price="Number(addProductData.price/10)"/>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-4 place-items-center">
            <base-f-input  type="number" name="discount" id="discount" label="تخفیف محصول (%)" place-holder="تخفیف محصول را بین 0 تا 100 وارد کنید" v-model="addProductData.discount" no-validation :float-step="0.01" :rtl="false"/>
            <div class="flex flex-col space-y-1 justify-self-start">
              <small class="font-light">مبلغ تخفیف</small>
              <base-g-price :price="Number(((addProductData.price / 10) * addProductData.discount / 100))" class="justify-self-start"/>
            </div>
            <div class="flex flex-col space-y-1 justify-self-start">
              <small class="font-light">قیمت با تخفیف</small>
              <base-g-price :price="Number((addProductData.price / 10) - ((addProductData.price / 10) * addProductData.discount / 100))" class="justify-self-start"/>
            </div>
          </div>
          <base-f-input type="file" name="mainImage" id="mainImage" class="row-span-4" label="تصویر محصول" v-model="addProductData.mainImage"/>
          <base-f-input label="متن تصویر" name="altImage" id="altImage" place-holder="در صورت لود نشدن تصویر نمایش داده میشود" v-model="addProductData.mainImageAlt"/>
          <div class="grid grid-cols-2 gap-4">
            <base-f-input type="number" name="quantity" id="quantity" label="موجودی انبار" place-holder="تعداد موجود در انبار" v-model="addProductData.quantity"/>
            <base-f-input type="number" name="weight" id="weight" label="وزن محصول (بسته بندی)" place-holder="وزن محصول با بسته بندی" v-model="addProductData.weight" :float-step="0.01"/>
          </div>
          <div class="flex items-end">
            <base-f-select class="flex-1" label="دسته بندی اصلی" name="categoryId" id="categoryId" place-holder="دسته بندی اصلی را انتخاب کنید" :data="categories" @update:modelValue="categorySelected" v-model="addProductData.categoryId" />
            <button :class="['grid place-items-center h-10 w-10 origin-center ',{'animate-spin':loadingCategories}]" @click.prevent="refreshCategories">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8901 5.08C14.0201 4.82 13.0601 4.65 12.0001 4.65C7.21008 4.65 3.33008 8.53 3.33008 13.32C3.33008 18.12 7.21008 22 12.0001 22C16.7901 22 20.6701 18.12 20.6701 13.33C20.6701 11.55 20.1301 9.89 19.2101 8.51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.13 5.32L13.24 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.13 5.32L12.76 7.78" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <base-f-select label="دسته بندی فرعی" name="subCategoryId" id="subCategoryId" place-holder="دسته بندی فرعی را انتخاب کنید" :data="subCategories" v-model="addProductData.subCategoryId" />
          <div class="flex items-end">
            <base-f-select class="flex-1" label="کاتالوگ" name="catalogId" id="catalogId" place-holder="دسته بندی اصلی را انتخاب کنید" :data="catalogs" v-model="addProductData.catalogId" />
            <button :class="['grid place-items-center h-10 w-10 origin-center ',{'animate-spin':loadingCatalogs}]" @click.prevent="refreshCatalogs">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8901 5.08C14.0201 4.82 13.0601 4.65 12.0001 4.65C7.21008 4.65 3.33008 8.53 3.33008 13.32C3.33008 18.12 7.21008 22 12.0001 22C16.7901 22 20.6701 18.12 20.6701 13.33C20.6701 11.55 20.1301 9.89 19.2101 8.51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.13 5.32L13.24 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.13 5.32L12.76 7.78" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <base-f-dimension v-model="addProductData.dimensions" />
          <base-f-select label="نوع بسته بندی" name="packingType" id="packingType" place-holder="نوع بسته بندی را انتخاب کنید" :data="packingTypeOptions" v-model="addProductData.packingType" />
          <base-f-input label="کد محصول" name="productCode" id="productCode" place-holder="کد محصول مثال: SN0000" v-model="addProductData.productCode"/>
          <base-f-input label="شماره بارکد" name="barcodeNumber" id="barcodeNumber" place-holder="بارکد محصول" v-model="addProductData.barcodeNumber"/>
          <base-f-input label="شماره بهداشت" name="healthNumber" id="healthNumber" place-holder="شماره بهداشت" v-model="addProductData.healthNumber"/>
          <base-f-input label="لینک دیجی کالا" name="digiKalaLink" id="digiKalaLink" class="font-thin" place-holder="لینک محصول در دیجی کالا در صورت موجود بودن" v-model="addProductData.digiKalaData.digikalaLink" :rtl="false"/>
          <base-f-input type="number" label="قیمت در دیجی کالا" name="digikalaPrice" id="digikalaPrice" place-holder="لینک محصول در دیجی کالا در صورت موجود بودن" v-model="addProductData.digiKalaData.digikalaPrice" is-price />
          <base-f-input label="لینک باسلام" name="basalamLink" id="basalamLink" class="font-thin" place-holder="لینک محصول در باسلام در صورت موجود بودن" v-model="addProductData.basalamData.basalamLink" :rtl="false"/>
          <base-f-input type="number" label="قیمت در باسلام" name="basalamPrice" id="basalamPrice" place-holder="لینک محصول در باسلام در صورت موجود بودن" v-model="addProductData.basalamData.basalamPrice" is-price />
          <base-f-button type="submit" color="primary" text-color="white" class="col-span-full" >
            ثبت کالا و رفتن به صفحه بعد
          </base-f-button>
        </Form>
      </Transition>
      <Transition enter-active-class="transition-all duration-300 delay-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <Form class="grid grid-cols-1 my-4" v-show="step === 1">
          <f-multi-file-input v-model="imageFiles" />
          <base-f-input label="متن جایگزین تصاویر" place-holder="متن جایگزین را وارد کنید" id="imagesAlt" name="imagesAlt" v-model="imagesAlt" class="my-4"/>
          <div class="grid grid-cols-2 gap-4 col-span-full">
            <base-f-button color="primary" text-color="white" type="button" @clicked="AddImages">
              ثبت تصاویر و رفتن به صفحه بعد
            </base-f-button>
            <base-f-button bordered color="primary" text-color="responsive" @clicked="step++">
              رفتن به صفحه بعد
            </base-f-button>
          </div>
        </Form>
      </Transition>
      <Transition enter-active-class="transition-all duration-300 delay-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <Form class="grid grid-cols-1 my-4 space-y-4" v-show="step === 2" >
          <product-specification-add v-for="(s,i) in specifications" v-model="specifications[i]" :number="i" />
          <base-f-button type="button" @clicked="specifications.push({key:'',value:''})" bordered color="primary" text-color="responsive">
            افزودن ویژگی جدید
          </base-f-button>
          <div class="grid grid-cols-3 gap-4 col-span-full">
            <base-f-button bordered color="secondary" text-color="responsive" @clicked="step--">
              رفتن به صفحه قبل
            </base-f-button>
            <base-f-button type="button" color="primary" text-color="white" @clicked="AddSpecifications">
              ثبت ویژگی ها و رفتن به صفحه بعد
            </base-f-button>
            <base-f-button bordered color="primary" text-color="responsive" @clicked="step++">
              رفتن به صفحه بعد
            </base-f-button>
          </div>
        </Form>
      </Transition>
      <Transition enter-active-class="transition-all duration-300 delay-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <Form class="grid grid-cols-1 my-4 space-y-4" v-show="step === 3" >
          <FSeoData v-model="addProductData.seoData" />
          <div class="grid grid-cols-2 gap-4 col-span-full">
            <base-f-button bordered color="secondary" text-color="responsive" @clicked="step--">
              رفتن به صفحه قبل
            </base-f-button>
            <base-f-button type="button" color="primary" text-color="white" @clicked="AddSeoData">
              ثبت نهایی
            </base-f-button>
          </div>
        </Form>
      </Transition>

      <div class="absolute -inset-4 rounded-lg bg-dark/20 dark:bg-white/20 grid place-items-center  backdrop-blur-[2px]" v-if="isLoading">
        <span class="animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"
               viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
               style="display:block;background-color:transparent;"><circle
              cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="35"
              stroke-dasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"
              style="transform:matrix(1, 0, 0, 1, 0, 0);"></circle>
          </svg>
        </span>
      </div>

    </div>
<!--    <div class="flex items-center gap-4 mt-12">
      <base-f-button w-full type="button" color="secondary" text-color="responsive" class="col-span-2" bordered @clicked="step&#45;&#45;" v-if="step > 0">
        قبلی
      </base-f-button>
      <base-f-button w-full type="button" color="primary" text-color="white" class="col-span-2" @clicked="step++" v-if="step < 3 && createdProductId != 0">
        بعدی
      </base-f-button>
      <base-f-button w-full type="button" color="primary" text-color="white" class="col-span-2" @clicked="AddProduct" >
        ثبت
      </base-f-button>
    </div>-->
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import type {
  CreateProductCommand,
  CreateSpecificationViewModel,
  SetSeoDataCommand, SetSpecificationsCommand
} from "~/models/product/productCommands";
import {EPackingType} from "~/models/product/EPackingType";
import FMultiFileInput from "~/components/base/FMultiFileInput.vue";
import FSeoData from "~/components/base/FSeoData.vue";
import {CreateProduct, SetImages, SetSeoData, SetSpecifications} from "~/services/product.service";
import {ToastType, useToast} from "~/composables/useSwal";
import type {CategoryDto} from "~/models/categories/categoryQueries";
import {GetCategories} from "~/services/category.service";
import * as Yup from 'yup';
import type {ApiResponse} from "~/models/apiResponse";
import type {CatalogDto} from "~/models/product/productQueries";
import {GetCatalogs} from "~/services/catalog.service";

definePageMeta({
  layout:'admin'
})

const step = ref(0);
const customSlug = ref(false);
const isLoading = ref(false);
const loadingCategories = ref(false);
const loadingCatalogs = ref(false);
const createdProductId = ref(0);

const toast = useToast();
const router = useRouter();

//@ts-ignore
const addProductData:CreateProductCommand = reactive({
  title: '',
  slug: '',
  price: null,
  discount: 0,
  weight:null,
  healthNumber:null,
  packingType: EPackingType.کیفی,
  mainImage: null,
  mainImageAlt: '',
  productCode: '',
  barcodeNumber: '',
  categoryId: null,
  subCategoryId: null,
  catalogId: null,
  dimensions: {
    width:0,
    height:0,
    length:0
  },
  digiKalaData:{
    digikalaLink:'',
    digikalaPrice:0
  },
  basalamData:{
    basalamLink:'',
    basalamPrice:0
  },
  seoData: {
    metaTitle:'',
    metaDescription:'',
    canonical:'',
    indexPage:false,
    metaKeyWords:'',
    schema:''
  },
  quantity: 0,
})
const addProductSchema = Yup.object().shape({
  title:Yup.string().required('وارد کردن عنوان ضروری است'),
  slug:Yup.string().required('وارد کردن لینک یکتا ضروری است'),
  price:Yup.number().min(0,'مبلغ وارد شده باید بیشتر از 0 باشد').required('وارد کردن مبلغ ضروری است'),
  discount:Yup.number().min(0,'مبلغ وارد شده باید بیشتر از 0 و کمتر از 100 باشد').max(100,'مبلغ وارد شده باید بیشتر از 0 و کمتر از 100 باشد'),
  productCode: Yup.string().required('وارد کردن کد محصول ضروری است'),
  barcodeNumber: Yup.string().required('وارد کردن بارکد ضروری است'),
  quantity: Yup.number().min(0,'تعداد نمی تواند کوچکتر از 0 باشد').required('وارد کردن تعداد ضروری است'),
  weight: Yup.number().min(0,'وزن نمی تواند کوچکتر از 0 باشد').required('وارد کردن وزن ضروری است'),
})

const packingTypes = Object.entries(EPackingType).map(t=>{
  return{
    id:t[1],
    title:t[0].replaceAll('_',' ')
  }
});
const packingTypeOptions = packingTypes.splice(packingTypes.length / 2 , packingTypes.length);

const categories:Ref<CategoryDto[]> = ref([]);
const catalogs:Ref<CatalogDto[]> = ref([]);
const subCategories:Ref<CategoryDto[]> = ref([]);
const categorySelected = (id:Number) => {
  const selectedCategory = categories.value.find(c=>c.id == id);
  subCategories.value = selectedCategory?.children ?? [];
}

const imageFiles = ref([]);
const imagesAlt = ref('');

const specifications:Ref<CreateSpecificationViewModel[]> = ref([
  {key:'',value:''} as CreateSpecificationViewModel
]);

onMounted(async ()=>{
  await refreshCategories();
})

const refreshCategories = async ()=>{
  loadingCategories.value = true;

  const result = await GetCategories({pageId:1,take:100,search:''});
  if(result.isSuccess){
    categories.value = result.data?.data!;
  }
  if(addProductData.categoryId != null)
    categorySelected(addProductData.categoryId);

  loadingCategories.value = false;
}
const refreshCatalogs = async ()=>{
  loadingCatalogs.value = true;

  const result = await GetCatalogs({pageId:1,take:100,search:''});
  if(result.isSuccess){
    catalogs.value = result.data?.data!;
  }

  loadingCatalogs.value = false;
}

const AddProduct = async ()=>{
  isLoading.value = true;



  const productData = new FormData();
  productData.append('title',addProductData.title);
  productData.append('slug',addProductData.slug);
  productData.append('price',addProductData.price.toString());
  productData.append('discount',addProductData.discount.toString());
  productData.append('weight',addProductData.weight.toString());
  productData.append('healthNumber',addProductData.healthNumber ?? '');
  productData.append('packingType',addProductData.packingType.toString());
  if(addProductData.mainImage)
    productData.append('mainImage',addProductData.mainImage);
  productData.append('mainImageAlt',addProductData.mainImageAlt);
  productData.append('productCode',addProductData.productCode);
  productData.append('barcodeNumber',addProductData.barcodeNumber);
  productData.append('categoryId',addProductData.categoryId.toString());
  productData.append('subCategoryId',addProductData.subCategoryId?.toString() ?? '');
  productData.append('catalogId',addProductData.catalogId?.toString() ?? '');
  productData.append('dimensions.Width',addProductData.dimensions.width.toString());
  productData.append('dimensions.Length',addProductData.dimensions.length.toString());
  productData.append('dimensions.Height',addProductData.dimensions.height.toString());
  productData.append('digikalaData.digiKalaLink',addProductData.digiKalaData?.digikalaLink ?? '');
  productData.append('digikalaData.digiKalaPrice',addProductData.digiKalaData?.digikalaPrice?.toString() ?? '0');
  productData.append('basalamData.basalamLink',addProductData.basalamData?.basalamLink ?? '');
  productData.append('basalamData.basalamPrice',addProductData.basalamData?.basalamPrice?.toString() ?? '0');
  productData.append('quantity',addProductData.quantity.toString());

  const productResult = await CreateProduct(productData);
  if(productResult.isSuccess){
    await toast.showToast(productResult.metaData.message,ToastType.success);
    createdProductId.value = productResult.data!;
    step.value++;
  }else{
    await toast.showToast(productResult.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}
const AddImages = async ()=>{
  isLoading.value = true;

  const imagesData = new FormData();
  imagesData.append('productId',createdProductId.value.toString());
  for(let i = 0; i < imageFiles.value.length; i++){
    const file:File = imageFiles.value[i];
    imagesData.append('images',file);
  }
  imagesData.append('alt',imagesAlt.value);

  const result = await SetImages(imagesData);
  if(result.isSuccess){
    await toast.showToast(result.metaData.message);
    step.value++;
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}
const AddSpecifications = async ()=>{
  isLoading.value = true;

  const result:ApiResponse<undefined> = await SetSpecifications({
    productId:createdProductId.value,
    specifications:specifications.value
  } as SetSpecificationsCommand);

  if(result.isSuccess){
    await toast.showToast(result.metaData.message);
    step.value++;
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}
const AddSeoData = async ()=>{
  isLoading.value = true;

  const result:ApiResponse<undefined> = await SetSeoData({
    productId:createdProductId.value,
    seoData:addProductData.seoData
  } as SetSeoDataCommand);

  if(result.isSuccess){
    await toast.showToast(result.metaData.message);
    await router.push('/admin/products');
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}

const generateSlug = (value:string)=>{
  if(customSlug.value) return;
  addProductData.slug = value.replaceAll(' ','-');
}

</script>

<style scoped>
.active-step{
  @apply relative bg-brandOrange/20 dark:bg-gray-50 text-brandOrange;
}
</style>