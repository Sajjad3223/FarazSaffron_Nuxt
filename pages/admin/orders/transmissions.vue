<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>هزینه های ارسال</Title>
    </Head>
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

    <base-f-divider :logo-divider="false" title="هزینه های ارسال جی پی">
      <template #left>
        <base-g-button button-type="white" color="info" custom-class="text-sm" is-icon
                       @click="showAddTransmissionModal = true">
          افزودن هزینه جدید
        </base-g-button>
      </template>
    </base-f-divider>

    <base-g-modal title="افزودن هزینه جدید" v-model="showAddTransmissionModal">
      <cart-transmission-add @transmissionCreated="showAddTransmissionModal = false, getData()" />
    </base-g-modal>

    <div class=" w-full overflow-hidden rounded-lg shadow-xs" v-if="!isLoading">
      <div class="w-full overflow-x-auto" >
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  "
          >
            <th class="px-4 py-3">استان</th>
            <th class="px-4 py-3">شهر</th>
            <th class="px-4 py-3">وزن</th>
            <th class="px-4 py-3">هزینه ارسال</th>
            <th class="px-4 py-3">وضعیت</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 "
          >
          <tr :class="['text-gray-700 ']" v-for="(t) in transmissions">
            <td class="px-4 py-3 text-sm text-nowrap">
              {{t.state}}
            </td>
            <td class="px-4 py-3">
              {{t.city}}
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{t.weight}} گرم
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              <base-g-price size="sm" mobile-size="xs" :price="(t.price / 10)" />
            </td>
            <td class="px-4 py-3 text-sm" v-if="t.isActive">
              فعال
            </td>
            <td class="px-4 py-3 text-sm" v-else>
              غیر فعال
            </td>
            <td class="px-4 py-3">
            </td>
          </tr>

          </tbody>
        </table>
      </div>
      <FPagination :pagination-data="pagination" v-model="pageId"/>
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
import {GetAllTransmissions, GetOrdersByAdmin} from "~/services/cart.service";
import {EOrderStatus, type OrderFilterData, type OrderFilterParams} from "~/models/cart/cartQueries";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {
  ETransmissionOrderBy,
  type TransmissionDto,
  type TransmissionFilterParams
} from "~/models/cart/transmissionQueries";

definePageMeta({
  layout:'admin'
})

const pageId = ref(1);

const filterParams:TransmissionFilterParams = reactive({
  search:'',
  take:10,
  pageId:pageId.value,
  orderBy:ETransmissionOrderBy.CreationDate,
  minPrice:undefined,
  maxPrice:undefined,
  minWeight:undefined,
  maxWeight:undefined
})

const showAddTransmissionModal = ref(false);
const isLoading = ref(false);
const transmissions:Ref<TransmissionDto[]> = ref([]);
const pagination:Ref<PaginationData | null> = ref(null);

onMounted(async ()=>{
  await getData();
})

watch(pageId,async()=>await getData())

const getData = async ()=>{
  isLoading.value = true;

  filterParams.pageId = pageId.value;

  const result = await GetAllTransmissions(filterParams);
  if(result.isSuccess){
    transmissions.value = result.data?.data ?? [];
    pagination.value = FillPaginationData(result.data!);
  }

  isLoading.value = false;
}

</script>4