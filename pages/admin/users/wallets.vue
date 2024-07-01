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
import {awaitExpression} from "@babel/types";

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
  await getData();
})

watch(
    pageId,
    async ()=> await getData())
const getData = async ()=>{
  isLoading.value =true;

  walletFilterParams.pageId = pageId.value;
  const result = await GetWalletsByAdmin(walletFilterParams);
  if(result.isSuccess){
    wallets.value = result.data?.data!;
    pagination.value = FillPaginationData(result.data!);
  }

  isLoading.value = false;
}

</script>