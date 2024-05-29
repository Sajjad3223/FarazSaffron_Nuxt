<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>تراکنش ها</Title>
    </Head>
    <h4
        class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
    >
      تراکنش ها
    </h4>
    <!--    <div class="p-4 rounded-xl border dark:border-white/30 border-black/30 overflow-hidden">
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
        </div>-->

    <base-f-divider :logo-divider="false" title="تراکنش ها" />
    <div class=" w-full overflow-hidden rounded-lg shadow-xs" v-if="!isLoading">
      <div class="w-full overflow-x-auto" >
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
          >
            <th class="px-4 py-3">شماره سفارش</th>
            <th class="px-4 py-3">نام خریدار</th>
            <th class="px-4 py-3">قیمت سفارش</th>
            <th class="px-4 py-3">وضعیت سفارش</th>
            <th class="px-4 py-3">توضیحات</th>
            <th class="px-4 py-3">کد پیگیری</th>
            <th class="px-4 py-3">تاریخ ثبت</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
          >
          <tr :class="['text-gray-700 dark:text-gray-400']" v-for="(w) in wallets">
            <td class="px-4 py-3 text-sm text-nowrap">
              {{w.id}}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div>
                  <p class="text-sm text-nowrap">{{ w.fullName }}</p>
                </div>
              </div>
            </td>
            <td :class="['px-4 py-3 text-sm text-nowrap',w.walletType == EWalletType.Deposit ? 'text-green-600' : 'text-danger']">
              <div class="flex items-center gap-2 text-xl font-thin">
                <span v-if="w.walletType == EWalletType.Deposit">+</span>
                <span v-else>-</span>
                <base-g-price :price="w.price / 10" />
              </div>
            </td>
            <td class="px-4 py-3 text-xs">
              <base-g-badge color="success" size="xs" v-if="w.isFinally">نهایی شده</base-g-badge>
              <base-g-badge color="danger" size="xs" v-else>لغو شده</base-g-badge>
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{w.description}}
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{w.refCode ?? "---"}}
            </td>
            <td class="px-4 py-3 text-sm">
              {{ w.persianDate }}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-2 text-sm">

              </div>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
      <FPagination :pagination-data="pagination" v-model="pageId" />
    </div>
    <div class="p-8 bg-gray-200 dark:bg-gray-700 rounded-xl text-black dark:text-white grid place-items-center" v-else>
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
</template>

<script setup lang="ts">
import {EWalletType, type WalletDto, type WalletFilterParams} from "~/models/users/userDto";
import {GetWalletsByAdmin} from "~/services/user.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {EOrderStatus} from "~/models/cart/cartQueries";

definePageMeta({
  layout:'admin'
})

const pageId = ref(1);

const walletFilterParams:WalletFilterParams = reactive({
  userId:undefined,
  take:10,
  pageId:pageId.value,
  search:undefined,
  toDate:undefined,
  fromDate:undefined,
  minPrice:undefined,
  walletType:undefined,
  maxPrice:undefined,
  justFinally:undefined
})

const isLoading = ref(false);
const wallets:Ref<WalletDto[]> = ref([]);
const pagination:Ref<PaginationData | null> = ref(null);

onMounted(async ()=>{
  isLoading.value =true;

  const result = await GetWalletsByAdmin(walletFilterParams);
  if(result.isSuccess){
    wallets.value = result.data?.data!;
    pagination.value = FillPaginationData(result.data!);
  }

  isLoading.value = false;
})

</script>