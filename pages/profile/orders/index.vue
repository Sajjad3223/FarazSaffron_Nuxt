<template>
  <div>
    <Head>
      <Title>سفارشات</Title>
    </Head>
    <div>
      <div class="text-2xl font-bold flex dark:text-white items-center gap-2">
        <NuxtLink to="/profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <strong>سفارش های من</strong>
      </div>
      <hr class="my-3 border-2 dark:border-gray-600">
    </div>

    <div class="flex flex-col w-full mt-8 dark:text-white">
      <div>
        <ul class="flex items-center border-b pb-4">
          <li :class="['flex flex-wrap gap-1 items-center justify-center text-xs lg:text-sm px-4 opacity-50 cursor-pointer',{'activeTab':tab === EOrderStatus.Pending}]" @click="tab = EOrderStatus.Pending">
            <span>
              جاری
            </span>
            <f-badge color="brandOrange" size="xs" fore-color="white" v-if="!loading && ordersGist.pending > 0">{{ ordersGist.pending }}</f-badge>
          </li>
          <li :class="['flex flex-wrap gap-1 items-center justify-center text-xs lg:text-sm px-4 opacity-50 cursor-pointer',{'activeTab':tab === EOrderStatus.Paid}]" @click="tab = EOrderStatus.Paid">
            <span>
              پرداخت شده
            </span>
            <f-badge color="brandOrange" size="xs" fore-color="white" v-if="!loading && ordersGist.paid > 0">{{ ordersGist.paid }}</f-badge>
          </li>
          <li :class="['flex flex-wrap gap-1 items-center justify-center text-xs lg:text-sm px-4 opacity-50 cursor-pointer',{'activeTab':tab === EOrderStatus.Returned}]" @click="tab = EOrderStatus.Returned">
            <span>
              مرجوع شده
            </span>
            <f-badge color="brandOrange" size="xs" fore-color="white" v-if="!loading && ordersGist.returned > 0">{{ ordersGist.returned }}</f-badge>
          </li>
          <li :class="['flex flex-wrap gap-1 items-center justify-center text-xs lg:text-sm px-4 opacity-50 cursor-pointer',{'activeTab':tab === EOrderStatus.Canceled}]" @click="tab = EOrderStatus.Canceled">
            <span>
              لغو شده
            </span>
            <f-badge color="brandOrange" size="xs" fore-color="white" v-if="!loading && ordersGist.canceled > 0">{{ ordersGist.canceled }}</f-badge>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-6" v-if="!loading">
      <cart-order-data v-if="tab === EOrderStatus.Pending" :status="EOrderStatus.Pending" :data="pendingOrders" />
      <cart-order-data v-if="tab === EOrderStatus.Paid" :status="EOrderStatus.Paid" :data="paidOrders" />
      <cart-order-data v-if="tab === EOrderStatus.Returned" :status="EOrderStatus.Returned" :data="returnedOrders" />
      <cart-order-data v-if="tab === EOrderStatus.Canceled" :status="EOrderStatus.Canceled" :data="canceledOrders" />
    </div>

  </div>
</template>

<script setup lang="ts">
import FBadge from "~/components/base/FBadge.vue";
import {GetOrders, GetOrdersGist} from "~/services/cart.service";
import {EOrderStatus, type OrderFilterData, type OrderFilterParams, type OrderGist} from "~/models/cart/cartQueries";

const loading = ref(false);
const ordersGist:Ref<OrderGist> = ref({
  canceled:0,
  paid:0,
  pending:0,
  returned:0
});
const userOrders:Ref<OrderFilterData[]> = ref([]);
const orderFilterParams:OrderFilterParams = reactive({
  orderStatus:null,
  pageId:1,
  search:null,
  take:100,
  userId:null
});

const pendingOrders:Ref<OrderFilterData[]> = ref([]);
const paidOrders:Ref<OrderFilterData[]> = ref([]);
const returnedOrders:Ref<OrderFilterData[]> = ref([]);
const canceledOrders:Ref<OrderFilterData[]> = ref([]);

definePageMeta({
  layout:'profile',
})

const tab:EOrderStatus = ref(EOrderStatus.Pending);

onMounted(async ()=>{
  loading.value = true;

  const result = await GetOrdersGist();
  if(result.isSuccess){
    ordersGist.value = result.data;
  }

  const userOrdersResult = await GetOrders(orderFilterParams);
  if(userOrdersResult.isSuccess){
  pendingOrders.value = userOrdersResult.data?.data!.filter(o=>o.orderStatus == EOrderStatus.Pending);
  paidOrders.value = userOrdersResult.data?.data!.filter(o=>o.orderStatus == EOrderStatus.Paid);
  returnedOrders.value = userOrdersResult.data?.data!.filter(o=>o.orderStatus == EOrderStatus.Returned);
  canceledOrders.value = userOrdersResult.data?.data!.filter(o=>o.orderStatus == EOrderStatus.Canceled);
  }

  loading.value = false;
})

</script>

<style scoped>
.activeTab{
  @apply opacity-100 after:absolute after:left-0 after:right-0 after:-bottom-4 after:rounded-t-lg after:h-1 after:bg-brandOrange relative;
}
</style>