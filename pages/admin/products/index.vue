<template>
  <div class="w-full overflow-hidden">
    <h4
        class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
    >
      محصولات
    </h4>
    <div class="p-4 rounded-xl border dark:border-white/30 border-black/30 overflow-hidden">
      <button class="w-full flex items-center justify-between" type="button" @click="showFilters = !showFilters">
        <strong class="text-xl dark:text-white">فیلتر محصولات</strong>
        <span class="dark:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
      <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0" enter-to-class="opacity-70" leave-active-class="transition-opacity duration-300" leave-from-class="opacity-70" leave-to-class="opacity-0">
        <hr class="my-4" v-if="showFilters">
      </Transition>
      <Transition enter-active-class="transition-all duration-300" enter-from-class="max-h-0" enter-to-class="max-h-96" leave-active-class="transition-all duration-300" leave-from-class="max-h-96" leave-to-class="max-h-0">
        <Form class="grid grid-cols-4 mb-4 gap-4 items-end" v-if="showFilters">
          <base-f-input class="col-span-2" name="search" type="text" label="جستجو" place-holder="جستجو در نام، توضیحات و ..." id="search" />
          <div class="flex flex-col space-y-2 w-full col-span-2">
            <label for="" class="flex items-center space-x-1 space-x-reverse font-light text-sm dark:text-white">انتخاب دسته بندی ها</label>
            <select name="categories" id="categories" class="px-4 py-2 rounded-lg">
              <option selected>دسته بندی ها</option>
            </select>
          </div>
          <div class="grid grid-cols-3 col-span-full gap-4 items-end">
            <base-f-range />
            <base-f-range />
            <base-f-range />
            <div class="grid grid-cols-2 gap-2">
              <base-f-input label="از تاریخ" />
              <base-f-input label="تا تاریخ" />
            </div>
            <base-f-input label="سریال نامبر" place-holder="1234-5678-9123"/>
            <div class="flex items-center gap-2">
              <input type="checkbox" name="" id="" class="w-11 h-11 opacity-50 checked:opacity-90">
              <label for="" class="dark:text-white">فقط تخفیف دار ها</label>
            </div>
          </div>
          <base-f-button class="col-span-3" color="primary" text-color="white">
            اعمال فیلتر
          </base-f-button>
          <base-f-button color="secondary" bordered text-color="responsive">
            حذف فیلتر
          </base-f-button>
        </Form>
      </Transition>
    </div>

    <base-f-divider :logo-divider="false" title="محصولات فروشگاه">
      <template #left>
        <base-f-button color="primary" is-link to="/admin/products/add" text-color="white">
          افزودن محصول جدید
        </base-f-button>
      </template>
    </base-f-divider>
    <div class=" w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto" >
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
          >
            <th class="px-4 py-3">نام کالا</th>
            <th class="px-4 py-3">قیمت</th>
            <th class="px-4 py-3">موجودی</th>
            <th class="px-4 py-3">تاریخ ثبت</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
          >
          <tr class="text-gray-700 dark:text-gray-400" v-for="i in 10">
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <!-- Avatar with inset shadow -->
                <div
                    class="relative hidden w-16 h-16 ml-3 rounded-full md:block bg-bgWhite"
                >
                  <img
                      class="object-contain w-full h-full rounded-full"
                      src="~/assets/images/saffron-bar.png"
                      alt=""
                      loading="lazy"
                  />
                  <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                  ></div>
                </div>
                <div>
                  <p class="font-semibold text-nowrap">زعفران نگین 20 گرم</p>
                  <p class="text-xs font-light text-gray-600 dark:text-gray-400 text-nowrap">
                    ( <NuxtLink to="/product/slug" class="text-primary hover:underline">مشاهده کالا در فروشگاه</NuxtLink> )
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              2,209,000 <small class="text-xs">ریال</small>
            </td>
            <td class="px-4 py-3 text-xs">
              240
            </td>
            <td class="px-4 py-3 text-sm">
              1402/12/12
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center space-x-4 text-sm">
                <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                >
                  <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                  >
                    <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                    ></path>
                  </svg>
                </button>
                <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                >
                  <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
      <FPagination />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ProductFilterParams} from "~/models/product/productQueries";

definePageMeta({
  layout: 'admin'
})

const filterParams:ProductFilterParams = reactive({
  search: null,
  categoriesIncluded: null,
  minQuantity: 0,
  maxQuantity: null,
  fromDate: null,
  toDate: null,
  minPrice: 0,
  maxPrice: null,
  orderBy: null,
  justWithDiscount: null,
  minDiscount: 0,
  maxDiscount: null,
  serialNumber: null,
  dgkalaLink: null,
  pageId:1,
  take:10
});

const showFilters = ref(false);
</script>
