<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>محصولات جی پی</Title>
    </Head>
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
    <div class=" w-full overflow-hidden rounded-lg shadow-xs" v-if="!isLoading">
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
          <tr :class="['text-gray-700 dark:text-gray-400',{'opacity-30':!i.isActive}]" v-for="(i) in products">
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <!-- Avatar with inset shadow -->
                <div
                    class="relative hidden w-16 h-16 ml-3 rounded-full md:block bg-bgWhite"
                >
                  <img
                      class="object-contain w-full h-full rounded-full"
                      :src="`${SITE_URL}/product/images/${i.mainImage.src}`"
                      :alt="i.mainImage.alt"
                      loading="lazy"
                  />
                  <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                  ></div>
                </div>
                <div>
                  <p class="font-semibold text-nowrap">{{i.title}}</p>
                  <p class="text-xs font-light text-gray-600 dark:text-gray-400 text-nowrap">
                    ( <NuxtLink :to="`/product/${i.slug}`" class="text-primary hover:underline">مشاهده کالا در فروشگاه</NuxtLink> )
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{ i.price.toLocaleString() }} <small class="text-xs">ریال</small>
            </td>
            <td class="px-4 py-3 text-xs">
              {{ i.quantity }}
            </td>
            <td class="px-4 py-3 text-sm">
              {{ i.persianDate }}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center space-x-4 text-sm">
                <NuxtLink :to="`/admin/products/edit/${i.id}`"
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
                </NuxtLink>
                <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete" @click="ToggleActivity(i.id,i.isActive)"
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
      <FPagination :pagination-data="paginationData" :page-id="pageId" />
    </div>
    <div class="p-8 bg-gray-200 dark:bg-gray-700 rounded-xl text-black dark:text-white grid place-items-center" v-else>
      <span class="animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="60px"
               viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
               style="display:block;background-color:transparent;"><circle
              cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="35"
              stroke-dasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"
              style="transform:matrix(1, 0, 0, 1, 0, 0);"></circle>
          </svg>
        </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ProductFilterData, ProductFilterParams} from "~/models/product/productQueries";
import type {PaginationData} from "~/models/baseFilterResult";
import {GetProductsByAdmin, SetProductActivity} from "~/services/product.service";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {SITE_URL} from "~/utilities/api.config";
import type {SetActivityCommand} from "~/models/setActivityCommand";
import {ToastType} from "~/composables/useSwal";

definePageMeta({
  layout: 'admin'
})

const toast = useToast();
const isLoading = ref(false);
const showFilters = ref(false);
const pageId = ref(1);
const products:Ref<ProductFilterData[]> = ref([]);
const paginationData:Ref<PaginationData | null> = ref(null);

const filterParams:ProductFilterParams = reactive({
  search: undefined,
  categoriesIncluded: undefined,
  minQuantity: undefined,
  maxQuantity: undefined,
  fromDate: undefined,
  toDate: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  orderBy: undefined,
  justWithDiscount: undefined,
  minDiscount: undefined,
  maxDiscount: undefined,
  serialNumber: undefined,
  dgkalaLink: undefined,
  pageId:pageId.value,
  take:10
});

onMounted(async ()=>{
  await getData();
})

const getData = async ()=>{
  isLoading.value = true;

  const result = await GetProductsByAdmin(filterParams);
  if(result.isSuccess){
    products.value = result.data?.data!;
    paginationData.value = FillPaginationData(result.data!);
  }

  isLoading.value = false;
}

const ToggleActivity = async (productId:number,isActive:boolean)=>{
  if(isActive){
    await toast.showToast("آیا از غیرفعال کردن این کالا اطمینان دارید؟",ToastType.warning,0)
        .then( async result => {
          if(!result.isConfirmed) return;
        });
  }

  isLoading.value = true;

  const result = await SetProductActivity({id:productId,newActivity:!isActive} as SetActivityCommand);
  if(result.isSuccess){
    await toast.showToast();
    await getData();
  }

  isLoading.value = false;
}
</script>
