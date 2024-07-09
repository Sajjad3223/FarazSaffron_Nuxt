<template>
  <div>
    <Head>
      <Title>جزئیات سفارش #{{orderData.id}}</Title>
    </Head>
    <div
        class="mb-4 text-lg flex items-center gap-2 font-semibold text-gray-600 "
    >
      <NuxtLink to="/admin/orders">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.4299 5.93L20.4999 12L14.4299 18.07" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>
      <span>
        جزئیات سفارش #{{orderData.id}}
      </span>
    </div>

    <base-f-divider title="جزئیات خریدار" :logo-divider="false"/>
    <div class="grid grid-cols-3 gap-6 mt-6">
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">نام و نام خانوادگی:</span>
        <strong>{{ orderData.fullName }}</strong>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">تحویل گیرنده:</span>
        <strong>{{orderData.address?.receiverName}}</strong>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">شماره تماس:</span>
        <strong>{{orderData.address?.receiverPhoneNumber}}</strong>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">آدرس تحویل:</span>
        <strong>{{orderData.address?.completeAddress}}</strong>
      </div>
    </div>

    <base-f-divider title="جزئیات سفارش" :logo-divider="false"/>
    <div class="grid grid-cols-4 gap-6 mt-6">
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">شماره سفارش:</span>
        <strong>{{ orderData.id }}</strong>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">قیمت کل محصولات:</span>
        <base-g-price :price="orderData.totalPrice / 10" />
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">تخفیف سفارش:</span>
        <base-g-price :price="orderData.discount?.amount / 10" />
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">کد تخفیف:</span>
        <strong>{{orderData.discount?.code}}</strong>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">وضعیت:</span>
        <span v-if="orderData.orderStatus === EOrderStatus.Pending" class="text-[10px] px-2 rounded-full bg-gray-100"> جاری</span>
        <span v-if="orderData.orderStatus === EOrderStatus.Paid" class="text-[10px] px-2 rounded-full bg-brandOrange/20 text-brandOrange"> پرداخت شده</span>
        <span v-if="orderData.orderStatus === EOrderStatus.Canceled" class="text-[10px] px-2 rounded-full bg-danger-200"> لغو شده</span>
        <span v-if="orderData.orderStatus === EOrderStatus.Returned" class="text-[10px] px-2 rounded-full bg-gray-100"> مرجوع شده</span>
        <span v-if="orderData.orderStatus === EOrderStatus.Delivered" class="text-[10px] px-2 rounded-full bg-green-200 text-green-600"> تحویل شده</span>
        <span v-if="orderData.orderStatus === EOrderStatus.Sending" class="text-[10px] px-2 rounded-full bg-indigo-200 text-indigo-600"> ارسال شده</span>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">تاریخ پرداخت:</span>
        <strong>{{orderData.persianTime}} | {{orderData.finallyPersianDate}}</strong>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">کد رهگیری:</span>
        <strong>{{orderData.referCode}}</strong>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">مبلغ پرداختی:</span>
        <base-g-price :price="orderData.finallyPrice / 10"/>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">هزینه پست:</span>
        <base-g-price :price="(orderData.transmissionPrice ?? 0) / 10"/>
      </div>
      <div class="flex items-center gap-4">
        <span class="opacity-70 font-light text-sm">کد رهگیری پستی:</span>
        <strong>{{orderData.postFollowUpCode ?? '---'}}</strong>
      </div>
    </div>

    <base-f-divider title="جزئیات اقلام سفارش" :logo-divider="false"/>
    <div class="grid grid-cols-2 gap-6 mt-6">
      <div class="flex items-center gap-4" v-for="i in orderData.orderItems" :key="i.id">
        <div class="relative max-w-[200px]">
          <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`" :alt="i.itemInfo.productImage.alt" class="w-full rounded-xl">
          <span class="absolute top-2 left-2 bg-brandOrange/20 rounded-full px-2 text-brandOrange text-[10px]">{{i.count}} عدد</span>
        </div>
        <div class="flex flex-col items-start">
          <NuxtLink class="text-xl" :to="`/product/${i.itemInfo.productSlug}`">{{i.itemInfo.productName}}</NuxtLink>
          <div class="flex items-center gap-4 scale-75 origin-right mt-5">
            <span class="opacity-70 font-light text-sm">قیمت واحد:</span>
            <base-g-price :price="i.price / 10"/>
          </div>
          <div class="flex items-center gap-4">
            <span class="opacity-70 font-light text-sm">قیمت کل:</span>
            <base-g-price :price="i.totalPrice / 10"/>
          </div>
        </div>
      </div>
    </div>

    <base-f-divider title="عملیات" :logo-divider="false"/>
    <div class="grid grid-cols-2 gap-6 mt-6">
      <div class="grid grid-cols-1 gap-4" v-if="orderData.orderStatus == EOrderStatus.Pending">
        <base-g-button button-type="outline" w-full @click="showDiscountModal = true" v-if="orderData.discount?.code === ''">
          اعمال تخفیف
        </base-g-button>
        <base-g-button button-type="outline" color="danger" w-full @click="removeDiscount" v-else>
          حذف تخفیف
        </base-g-button>
      </div>
      <base-g-button button-type="white" color="info" w-full @click="showFollowUpModal = true" >
        ثبت کد رهگیری پستی
      </base-g-button>
      <base-g-button button-type="bg"  w-full @click="showFinalizeModal = true" v-if="!orderData.isFinally">
        نهایی سازی سفارش
      </base-g-button>
      <select name="orderStatus" id="orderStatus" :value="orderData.orderStatus" class="text-xs p-4 rounded-xl" @change="setOrderStatus">
        <option :value="0">جاری</option>
        <option :value="1">پرداخت شده</option>
        <option :value="2">لغو شده</option>
        <option :value="3">مرجوع شده</option>
        <option :value="4">تحویل شده</option>
        <option :value="5">ارسال شده</option>
      </select>
    </div>

    <base-g-modal title="ثبت کد رهگیری پستی" v-model="showFollowUpModal">
      <Form @submit="setFollowUpCode" class="mt-4">
        <base-g-input label="کد رهگیری پستی" required v-model="followUpCode" name="followUpCode" id="followUpCode"/>
        <base-g-button w-full type="submit">
          ثبت کد رهگیری پستی
        </base-g-button>
      </Form>
    </base-g-modal>

    <base-g-modal title="ثبت کد تخفیف" v-model="showDiscountModal">
      <Form @submit="setDiscountCode" class="mt-4">
        <base-g-input label="کد تخفیف" required v-model="discountCode" name="discountCode" id="discountCode"/>
        <base-g-button w-full type="submit">
          ثبت کد تخفیف
        </base-g-button>
      </Form>
    </base-g-modal>

    <base-g-modal title="نهایی سازی سفارش" v-model="showFinalizeModal">
      <Form @submit="finalizeOrder" class="mt-4">
        <base-g-input label="کد پیگیری" required v-model="refCode" name="refCode" id="refCode"/>
        <base-g-button w-full type="submit">
          ثبت کد رهگیری
        </base-g-button>
      </Form>
    </base-g-modal>

  </div>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {
  FinalizeOrderByAdmin,
  GetOrderByAdminById, RemoveDiscountByAdmin, SetDiscountByAdmin,
  SetFollowUpCode,
  SetOrderStatusByAdmin
} from "~/services/cart.service";
import {EOrderStatus, type OrderDto} from "~/models/cart/cartQueries";
import {SITE_URL} from "~/utilities/api.config";
import {ToastType} from "~/composables/useSwal";
import type {FollowUpCommand, SetOrderStatusCommand} from "~/models/cart/cartCommands";

definePageMeta({
  layout:'admin'
})

const route = useRoute();
const router = useRouter();
const orderId = Number(route.params.orderId ?? '0');
const toast = useToast();

const {data,pending,refresh} = await useAsyncData("Order" + orderId.toString(),()=>GetOrderByAdminById(orderId));

if(!data.value){
  if(process.server)
    throw createError({statusCode:404,statusMessage:"سفارش یافت نشد!"});
  else{
    router.push("/admin/orders");
  }
}

const orderData:Ref<OrderDto> = ref(data.value);
const showFollowUpModal = ref(false);
const followUpCode = ref(orderData.value.postFollowUpCode ?? '');
const showDiscountModal = ref(false);
const discountCode = ref(orderData.value.discount?.code ?? '');
const showFinalizeModal = ref(false);
const refCode = ref(orderData.value.referCode ?? '');

const setOrderStatus = (e)=>{
  toast.showToast('آیا از تغییر وضعیت این سفارش اطمینان دارید؟',ToastType.warning)
      .then(async (res) =>{
        if(res.isConfirmed){
          await changeOrderStatus(orderData.value.id,e.target.value);
        }
      })
}

const changeOrderStatus = async (id:number,newStatus:EOrderStatus) => {
  const res = await SetOrderStatusByAdmin({orderId:id,orderStatus:Number(newStatus)} as SetOrderStatusCommand);
  if(res.isSuccess){
    toast.showToast();
  }else{
    toast.showError(res.metaData);
  }
}

const finalizeOrder = async ()=>{
  const result = await FinalizeOrderByAdmin({orderId: orderData.value.id, refCode: refCode.value});
  if (result.isSuccess) {
    toast.showToast();
    showFinalizeModal.value = false;
    await refresh();
  } else {
    toast.showError(result.metaData);
  }
}

const setFollowUpCode = async ()=>{
  const res = await SetFollowUpCode({orderId,followUpCode:followUpCode.value} as FollowUpCommand);
  if(res.isSuccess){
    toast.showToast();
    showFollowUpModal.value = false;
    await refresh();
  } else {
    toast.showError(res.metaData);
  }
}

const setDiscountCode = async ()=>{
  const res = await SetDiscountByAdmin({orderId,discountCode:discountCode.value,userId:orderData.value.userId});
  if(res.isSuccess){
    toast.showToast();
    showDiscountModal.value = false;
    await refresh();
  } else {
    toast.showError(res.metaData);
  }
}
const removeDiscount = async ()=>{
  const res = await RemoveDiscountByAdmin(orderData.value.userId);
  if(res.isSuccess){
    toast.showToast();
    await refresh();
  } else {
    toast.showError(res.metaData);
  }
}

</script>

<style scoped>

</style>