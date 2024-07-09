<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>سفارشات</Title>
    </Head>
    <h4
        class="mb-4 text-lg font-semibold text-gray-600 "
    >
      سفارشات
    </h4>
<!--    <div class="p-4 rounded-xl border dark:border-white/30 border-black/30 overflow-hidden">
      <button class="w-full flex items-center justify-between" type="button" @click="showFilters = !showFilters">
        <strong class="text-xl ">فیلتر محصولات</strong>
        <span class="">
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
            <label for="" class="flex items-center space-x-1 space-x-reverse font-light text-sm ">انتخاب دسته بندی ها</label>
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
              <label for="" class="">فقط تخفیف دار ها</label>
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

    <base-f-divider :logo-divider="false" title="سفارشات جی پی" />
    <div class=" w-full overflow-hidden rounded-lg shadow-xs" v-if="!isLoading">
      <div class="w-full overflow-x-auto" >
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  "
          >
            <th class="px-4 py-3">شماره سفارش</th>
            <th class="px-4 py-3">نام خریدار</th>
            <th class="px-4 py-3">قیمت سفارش</th>
            <th class="px-4 py-3">تعداد محصولات</th>
            <th class="px-4 py-3">وضعیت سفارش</th>
            <th class="px-4 py-3">تاریخ ثبت</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 "
          >
          <tr :class="['text-gray-700 ']" v-for="(o) in orders">
            <td class="px-4 py-3 text-sm text-nowrap">
              <NuxtLink :to="`/admin/orders/${o.id}`" class="text-indigo-600">
                {{o.id}}
              </NuxtLink>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div>
                  <p class="text-sm text-nowrap" v-if="o.fullName != ' '">{{o.fullName}}</p>
                  <p class="text-sm text-nowrap opacity-70" v-else>
                    کاربر شماره {{o.userId}}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              <base-g-price :price="o.finallyPrice / 10" />
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{o.itemsCount}} کالا
            </td>
            <td class="px-4 py-3 text-xs">
              <span v-if="o.orderStatus === EOrderStatus.Pending" class="text-[10px] px-2 rounded-full bg-gray-100"> جاری</span>
              <span v-if="o.orderStatus === EOrderStatus.Paid" class="text-[10px] px-2 rounded-full bg-brandOrange/20 text-brandOrange"> پرداخت شده</span>
              <span v-if="o.orderStatus === EOrderStatus.Canceled" class="text-[10px] px-2 rounded-full bg-gray-100"> لغو شده</span>
              <span v-if="o.orderStatus === EOrderStatus.Returned" class="text-[10px] px-2 rounded-full bg-gray-100"> مرجوع شده</span>
              <span v-if="o.orderStatus === EOrderStatus.Delivered" class="text-[10px] px-2 rounded-full bg-green-200 text-green-600"> تحویل شده</span>
              <span v-if="o.orderStatus === EOrderStatus.Sending" class="text-[10px] px-2 rounded-full bg-indigo-200 text-indigo-600"> ارسال شده</span>
            </td>
            <td class="px-4 py-3 text-sm">
              {{ o.persianDate }}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-2 text-sm">
                <NuxtLink :to="`/admin/orders/${o.id}`" title="مشاهده جزئیات"
                        :class="['flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-300 rounded-lg  focus:outline-none focus:shadow-outline-gray',{'opacity-30 pointer-events-none':o.itemsCount <= 0}]"
                         >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.25 9.14999C18.94 5.51999 15.56 3.42999 12 3.42999C10.22 3.42999 8.49 3.94999 6.91 4.91999C5.33 5.89999 3.91 7.32999 2.75 9.14999C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.14999ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.76999 9.76 7.95999 12 7.95999C14.24 7.95999 16.04 9.76999 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z" fill="currentColor"/>
                    <path d="M11.9999 9.14001C10.4299 9.14001 9.1499 10.42 9.1499 12C9.1499 13.57 10.4299 14.85 11.9999 14.85C13.5699 14.85 14.8599 13.57 14.8599 12C14.8599 10.43 13.5699 9.14001 11.9999 9.14001Z" fill="currentColor"/>
                  </svg>
                </NuxtLink>
                <div class="flex flex-col">
                  <label class="text-[10px]" for="">تغییر وضعیت</label>
                  <select name="orderStatus" id="orderStatus" :value="o.orderStatus" class="text-xs border rounded px-1" @change="setOrderStatus(o.id,$event)">
                    <option :value="0">جاری</option>
                    <option :value="1">پرداخت شده</option>
                    <option :value="2">لغو شده</option>
                    <option :value="3">مرجوع شده</option>
                    <option :value="4">تحویل شده</option>
                    <option :value="5">ارسال شده</option>
                  </select>
                </div>
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
import {GetOrdersByAdmin, SetOrderStatusByAdmin} from "~/services/cart.service";
import {EOrderStatus, type OrderFilterData, type OrderFilterParams} from "~/models/cart/cartQueries";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import type {SetOrderStatusCommand} from "~/models/cart/cartCommands";
import {ToastType} from "~/composables/useSwal";

definePageMeta({
  layout:'admin'
})

const pageId = ref(1);

const orderFilterParams:OrderFilterParams = reactive({
  search:'',
  take:10,
  orderStatus:null,
  userId:null,
  pageId:pageId.value,
})

const isLoading = ref(false);
const orders:Ref<OrderFilterData[]> = ref([]);
const pagination:Ref<PaginationData | null> = ref(null);

onMounted(async ()=>{
  await getData();
})

watch(pageId, async ()=>await getData());

const getData = async ()=>{
  isLoading.value = true;
  orderFilterParams.pageId = pageId.value;
  const result = await GetOrdersByAdmin(orderFilterParams);
  if(result.isSuccess){
    orders.value = result.data?.data ?? [];
    pagination.value = FillPaginationData(result.data!);
  }

  isLoading.value = false;
}

const toast = useToast();
const setOrderStatus = (id:number,e:any)=>{
  toast.showToast('آیا از تغییر وضعیت این سفارش اطمینان دارید؟',ToastType.warning)
      .then(async (res) =>{
        if(res.isConfirmed){
          await changeOrderStatus(id,e.target.value);
        }
      })
}

const changeOrderStatus = async (id:number,newStatus:EOrderStatus) => {
  const res = await SetOrderStatusByAdmin({orderId:id,orderStatus:Number(newStatus)} as SetOrderStatusCommand);
  if(res.isSuccess){
    toast.showToast();
    await getData();
  }else{
    toast.showError(res.metaData);
  }
}


</script>4