<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>محصولات جی پی</Title>
    </Head>
    <base-f-divider :logo-divider="false" title="محصولات فروشگاه">
      <template #left>
        <div class="flex items-center gap-4">
          <base-g-button color="info" is-icon button-type="white" @click="showGroupEditModal = true" text-color="white">
            ویرایش گروهی محصولات
          </base-g-button>
          <base-g-button color="info" is-icon is-link to="/admin/products/newAdd" text-color="white">
            افزودن محصول جدید
          </base-g-button>
        </div>
      </template>
    </base-f-divider>
    <div
        :class="['p-4 bg-black/5 rounded-xl border dark:border-white/30 border-black/30',{'overflow-hidden':!showFilters}]">
      <button class="w-full flex items-center justify-between" type="button" @click="showFilters = !showFilters">
        <span class="text-lg">فیلتر محصولات</span>
        <span class="">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95"
                  stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
      <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0"
                  enter-to-class="opacity-70" leave-active-class="transition-opacity duration-300"
                  leave-from-class="opacity-70" leave-to-class="opacity-0">
        <hr class="my-4" v-if="showFilters">
      </Transition>
      <Transition enter-active-class="transition-all duration-300" enter-from-class="max-h-0" enter-to-class="max-h-96"
                  leave-active-class="transition-all duration-300" leave-from-class="max-h-96" leave-to-class="max-h-0">
        <Form class="grid grid-cols-3 mb-4 gap-4 items-end" @submit="getData" v-if="showFilters">
          <base-inputs-text-input class="col-span-2" name="search" type="text" label="جستجو"
                                  place-holder="جستجو در نام، توضیحات و ..." v-model="filterParams.search"/>
          <base-g-select name="category" :options="categoriesOptions" label="دسته بندی"
                         v-model="filterParams.categoriesIncluded"/>
          <base-f-checkbox name="justDiscount" label="فقط تخفیف دار ها" v-model="filterParams.justWithDiscount"/>
          <div class="flex items-center gap-5 col-span-full mr-auto">
            <base-g-button is-icon color="secondary" button-type="white" bordered text-color="responsive" type="reset">
              حذف فیلتر ها
            </base-g-button>
            <base-g-button is-icon color="info" button-type="outline" text-color="white" type="submit">
              اعمال فیلتر
            </base-g-button>
          </div>
        </Form>
      </Transition>
    </div>

    <base-g-modal title="تغییر تصویر محصول" v-model="showChangePictureModal">
      <form class="flex flex-col space-y-4 " @submit.prevent="ChangeProductPicture">
        <base-f-input type="file" v-model="newPicture" class="h-[300px]" name="newPicture" id="newPicture"/>
        <base-g-input v-model="newPictureAlt" name="newPictureAlt" id="newPictureAlt" class="w-full" label="متن جایگزین"
                      required/>
        <base-g-button w-full type="submit" :isLoading="changePictureLoading">
          تغییر تصویر
        </base-g-button>
      </form>
    </base-g-modal>

    <base-g-modal width="fit-content" title="ویرایش گروهی محصولات" v-model="showGroupEditModal">
      <admin-product-group-edit @changesDone="showGroupEditModal = false,getData()"/>
    </base-g-modal>

    <div class="mt-8 w-full overflow-hidden rounded-lg shadow-xs" v-if="!isLoading">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  "
          >
            <th class="px-4 py-3">نام کالا</th>
            <th class="px-4 py-3">قیمت</th>
            <th class="px-4 py-3">موجودی</th>
            <th class="px-4 py-3">تاریخ ثبت</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-black/10 "
          >
          <tr :class="['text-gray-700 ',{'opacity-30':!i.isActive}]" v-for="(i) in products">
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
                  <p class="font-semibold text-nowrap">{{ i.title }}</p>
                  <p class="text-xs font-light text-gray-600  text-nowrap">
                    (
                    <NuxtLink :to="`/product/${i.slug}`" class="text-primary hover:underline">مشاهده کالا در فروشگاه
                    </NuxtLink>
                    )
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
                <button title="تغییر بنر محصول" v-if="i.isActive"
                        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                        aria-label="ChangePicture" @click="showChangePictureModal = true,selectedProduct = i.id"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M7.638 3.39549C5.061 3.39549 3.396 5.16249 3.396 7.88849V16.1025C3.396 16.8675 3.538 17.5505 3.781 18.1415C3.79149 18.129 4.02035 17.8501 4.31889 17.4863C4.90237 16.7752 5.75205 15.7398 5.758 15.7345C6.45 14.9445 7.749 13.7665 9.454 14.4795C9.82761 14.6344 10.1597 14.8466 10.4654 15.042C10.4952 15.061 10.5247 15.0799 10.554 15.0985C11.127 15.4815 11.464 15.6615 11.814 15.6315C11.959 15.6115 12.095 15.5685 12.224 15.4885C12.7106 15.1885 13.9722 13.4009 14.35 12.8656C14.4054 12.7871 14.4418 12.7355 14.454 12.7195C15.544 11.2995 17.224 10.9195 18.624 11.7595C18.812 11.8715 20.159 12.8125 20.605 13.1905V7.88849C20.605 5.16249 18.94 3.39549 16.354 3.39549H7.638ZM16.354 2.00049C19.731 2.00049 22 4.36249 22 7.88849V16.1025C22 16.1912 21.9907 16.2743 21.9814 16.3574C21.9748 16.4159 21.9683 16.4742 21.965 16.5345C21.9629 16.5709 21.9618 16.6073 21.9608 16.6438C21.9594 16.6923 21.958 16.7409 21.954 16.7895C21.952 16.8085 21.9482 16.8267 21.9445 16.845C21.9408 16.8632 21.937 16.8815 21.935 16.9005C21.902 17.2145 21.851 17.5145 21.78 17.8055C21.7632 17.8782 21.7438 17.9483 21.7243 18.0191L21.72 18.0345C21.64 18.3165 21.546 18.5855 21.433 18.8425C21.4132 18.8857 21.3923 18.9278 21.3714 18.9699C21.3575 18.998 21.3436 19.0261 21.33 19.0545C21.208 19.2995 21.076 19.5345 20.923 19.7525C20.8947 19.7928 20.8646 19.8307 20.8344 19.8685C20.8145 19.8936 20.7945 19.9186 20.775 19.9445C20.616 20.1505 20.45 20.3475 20.262 20.5265C20.2245 20.5622 20.1839 20.5948 20.1433 20.6275C20.118 20.6479 20.0926 20.6683 20.068 20.6895C19.875 20.8555 19.678 21.0145 19.461 21.1505C19.4136 21.1802 19.3633 21.2052 19.3132 21.2301C19.2808 21.2462 19.2484 21.2622 19.217 21.2795C18.996 21.4015 18.773 21.5205 18.53 21.6125C18.4715 21.6347 18.4093 21.6508 18.3469 21.6669C18.3026 21.6783 18.2582 21.6898 18.215 21.7035C18.1934 21.7102 18.1717 21.7169 18.1501 21.7236C17.9331 21.7912 17.7167 21.8585 17.483 21.8985C17.3476 21.9222 17.2039 21.9313 17.0601 21.9405C16.9978 21.9444 16.9356 21.9484 16.874 21.9535C16.8078 21.9584 16.7428 21.9664 16.6778 21.9744C16.5721 21.9874 16.4661 22.0005 16.354 22.0005H7.638C7.262 22.0005 6.903 21.9625 6.556 21.9055C6.543 21.9035 6.531 21.9015 6.519 21.8995C5.166 21.6665 4.043 21.0135 3.256 20.0285C3.25053 20.0285 3.24839 20.0248 3.24553 20.0199C3.24368 20.0167 3.24153 20.013 3.238 20.0095C2.447 19.0135 2 17.6745 2 16.1025V7.88849C2 4.36249 4.271 2.00049 7.638 2.00049H16.354ZM11.0006 8.51505C11.0006 9.87 9.86688 11.0001 8.50544 11.0001C7.30874 11.0001 6.28839 10.1257 6.05971 8.99372C6.02192 8.82387 6.0006 8.64919 6.0006 8.46872C6.0006 7.10412 7.10913 6.00009 8.47928 6.00009C9.17696 6.00009 9.80874 6.29347 10.2613 6.76152C10.7157 7.21317 11.0006 7.83564 11.0006 8.51505Z"
                          fill="currentColor"/>
                  </svg>
                </button>
                <NuxtLink :to="`/admin/products/edit/newEdit-${i.id}`" title="ویرایش محصول"
                          class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
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
                <button title="حذف محصول"
                        class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
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
      <FPagination :pagination-data="paginationData" v-model="pageId"/>
    </div>
    <div class="p-8 bg-gray-200  rounded-xl text-black/50 grid place-items-center" v-else>
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
import {Form} from 'vee-validate';
import type {ProductFilterData, ProductFilterParams} from "~/models/product/productQueries";
import type {PaginationData} from "~/models/baseFilterResult";
import {GetProductsByAdmin, SetMainImage, SetProductActivity} from "~/services/product.service";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {SITE_URL} from "~/utilities/api.config";
import type {SetActivityCommand} from "~/models/setActivityCommand";
import {ToastType} from "~/composables/useSwal";
import {GetCategories} from "~/services/category.service";
import type {GSelectData} from "~/models/gSelectData";

definePageMeta({
  layout: 'admin'
})

const toast = useToast();
const isLoading = ref(false);
const showFilters = ref(false);
const pageId = ref(1);
const products: Ref<ProductFilterData[]> = ref([]);
const paginationData: Ref<PaginationData | null> = ref(null);

const changePictureLoading = ref(false);
const showChangePictureModal = ref(false);
const showGroupEditModal = ref(false);
const selectedProduct = ref(0);
const newPicture = ref(null);
const newPictureAlt = ref('');

const filterParams: ProductFilterParams = reactive({
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
  pageId: pageId.value,
  take: 20
});

onMounted(async () => {
  await getData();
})

const getData = async () => {
  isLoading.value = true;

  filterParams.pageId = pageId.value;
  const result = await GetProductsByAdmin(filterParams);
  if (result.isSuccess) {
    products.value = result.data?.data!;
    paginationData.value = FillPaginationData(result.data!);
  }
  await refreshCategories();

  isLoading.value = false;
}

const categoriesOptions: Ref<GSelectData[] | undefined | null> = ref([]);
const refreshCategories = async () => {
  const result = await GetCategories({search: undefined, take: 20, pageId: 1});
  if (result.isSuccess) {
    categoriesOptions.value = result.data?.data.map(c => {
      return {
        title: c.title,
        value: c.id,
        image: null
      } as GSelectData
    })
  }
}


watch(
    pageId,
    async () => await getData())

const ToggleActivity = async (productId: number, isActive: boolean) => {
  if (isActive) {
    await toast.showToast("آیا از غیرفعال کردن این کالا اطمینان دارید؟", ToastType.warning, 0, false,
        async () => {

          isLoading.value = true;

          const result = await SetProductActivity({id: productId, newActivity: !isActive} as SetActivityCommand);
          if (result.isSuccess) {
            await toast.showToast();
            await getData();
          }

          isLoading.value = false;
        })
  }
}

  const ChangeProductPicture = async () => {
    changePictureLoading.value = true;

    const formData = new FormData();
    formData.append('productId', selectedProduct.value.toString());
    //@ts-ignore
    formData.append('image', newPicture.value);
    formData.append('imageAlt', newPictureAlt.value);

    const result = await SetMainImage(formData);
    if (result.isSuccess) {
      await toast.showToast();
      showChangePictureModal.value = false;
      await getData();
      newPicture.value = null;
    } else {
      await toast.showToast(result.metaData.message, ToastType.error, 0);
    }

    changePictureLoading.value = false;
  }
</script>
