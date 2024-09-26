<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>کاتالوگ ها</Title>
    </Head>
    <base-f-divider :logo-divider="false" title="کاتالوگ ها">
      <template #left>
        <base-f-button color="primary" @clicked="showAddModal = true" text-color="white">
          افزودن کاتالوگ جدید
        </base-f-button>
      </template>
    </base-f-divider>

    <div class="p-4 rounded-xl border dark:border-white/30 border-black/30 overflow-hidden" v-if="false">
      <button class="w-full flex items-center justify-between" type="button" @click="showFilters = !showFilters">
        <strong class="text-xl ">فیلتر محصولات</strong>
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
        <Form class="grid grid-cols-3 mb-4 gap-4 items-end" v-if="showFilters">
          <base-f-input class="col-span-3" name="search" type="text" label="جستجو"
                        place-holder="جستجو در عنوان یا اسلاگ" id="search"/>
          <base-f-button class="col-span-2" color="primary" text-color="white">
            اعمال فیلتر
          </base-f-button>
          <base-f-button color="secondary" bordered text-color="responsive">
            حذف فیلتر
          </base-f-button>
        </Form>
      </Transition>
    </div>

    <f-modal title="افزودن کاتالوگ جدید" v-model="showAddModal">
      <admin-catalogs-add @catalog-added="showAddModal = false,getData"/>
    </f-modal>

    <div v-if="!isLoading" class=" w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  "
          >
            <th class="px-4 py-3">عنوان</th>
            <th class="px-4 py-3">توضیحات</th>
            <th class="px-4 py-3">فایل کاتالوگ</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 "
          >
          <template v-for="c in catalogs">
            <tr class="text-gray-700 ">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold text-nowrap">{{ c.title }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm text-nowrap">
                {{ c.description }}
              </td>
              <td class="px-4 py-3 text-sm">
                <a :href="`${SITE_URL}/catalogs/${c.fileName}`" class="text-primary hover:underline font-thin">
                  دانلود کاتالوگ
                </a>
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button
                      class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray opacity-70 hover:opacity-100 transition duration-300"
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
                      class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray opacity-70 hover:opacity-100 transition duration-300"
                      aria-label="Delete" @click="RemoveCatalog(c.id)"
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
          </template>
          </tbody>
        </table>
      </div>
      <FPagination v-model="pageId" :pagination-data="paginationData"/>
    </div>
    <div class="p-8 bg-gray-200  rounded-xl text-black  grid place-items-center" v-else>
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
import FModal from "~/components/base/FModal.vue";
import {DeleteCatalog, GetCatalogs} from "~/services/catalog.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import type {CatalogDto, CatalogFilterParams} from "~/models/product/productQueries";
import {SITE_URL} from "~/utilities/api.config";
import {ToastType} from "~/composables/useSwal";

definePageMeta({
  layout: 'admin'
})

const isLoading = ref(true)
const showFilters = ref(false)
const showAddModal = ref(false)
const pageId = ref(1);
const catalogs: Ref<CatalogDto[]> = ref([]);
const paginationData: Ref<PaginationData | undefined> = ref(undefined);

const filterParams: CatalogFilterParams = reactive({
  pageId: pageId.value,
  search: '',
  take: 10
})

const toast = useToast();

watch(
    pageId,
    async () => await getData()
);

onMounted(async () => {
  await getData();
})

const getData = async () => {
  isLoading.value = true;

  filterParams.pageId = pageId.value;
  const result = await GetCatalogs(filterParams);
  if (result.isSuccess) {
    catalogs.value = result.data?.data!;
    paginationData.value = FillPaginationData(result.data!);
  }

  isLoading.value = false;
}

const RemoveCatalog = async (catalogId: number) => {
  toast.showToast("آیا از حذف کاتالوگ اطمینان دارید؟", ToastType.warning, 0, false,
      async () => {

        isLoading.value = true;

        const result = await DeleteCatalog(catalogId);
        if (result.isSuccess) {
          await toast.showToast();
          await getData();
        }

        isLoading.value = false;

      })
}

</script>