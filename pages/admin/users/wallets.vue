<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>تراکنش ها</Title>
    </Head>

    <base-f-divider :logo-divider="false" title="تراکنش ها" />

    <div class="grid grid-cols-3 gap-5">
      <div class="bg-white border rounded-2xl text-2xl p-12 flex flex-col space-y-5 justify-center">
        <div class="flex flex-col space-y-2">
          <span class="text-sm font-light opacity-70">کل تراکنش ها</span>
          <div class="flex gap-2">
            <strong>{{(data?.totalTransactions / 10).toLocaleString()}}</strong>
            <span>تومان</span>
          </div>
        </div>
      </div>
      <div class="bg-white border rounded-2xl text-2xl p-12 flex flex-col space-y-5 justify-center">
        <div class="flex flex-col space-y-2">
          <span class="text-sm font-light opacity-70">تراکنش های این ماه</span>
          <div class="flex gap-2">
            <strong>{{(data?.monthTransactions / 10).toLocaleString()}}</strong>
            <span>تومان</span>
          </div>
          <div class="flex items-center gap-4 text-sm font-light">
            <span class="text-xs opacity-50"> تراکنش های ماه قبل</span>:
            <div class="flex gap-2">
              <strong>{{(data?.lastMonthTransactions / 10).toLocaleString()}}</strong>
              <span>تومان</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white border rounded-2xl text-2xl p-12 flex flex-col space-y-5 justify-center">
        <div class="flex flex-col space-y-2">
          <span class="text-sm font-light opacity-70">تراکنش های امروز</span>
          <div class="flex gap-2">
            <strong>{{(data?.todayTransactions / 10).toLocaleString()}}</strong>
            <span>تومان</span>
          </div>
        </div>
      </div>
    </div>

    <div class=" w-full overflow-hidden rounded-lg shadow-xs mt-5" v-if="!isLoading">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  "
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
              class="bg-white divide-y dark:divide-gray-700 "
          >
          <tr :class="['text-gray-700 hover:opacity-100 transition-opacity duration-200',{'opacity-50':!w.isFinally}]" v-for="(w) in wallets">
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
    <div class="p-8 bg-gray-200  rounded-xl text-black  grid place-items-center" v-else>
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
import {EWalletType, type WalletDto, type WalletFilterParams, type WalletFilterResult} from "~/models/users/userDto";
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
const data:Ref<WalletFilterResult | undefined> = ref(undefined);
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
    data.value = result.data;
  }

  isLoading.value = false;
}

</script>