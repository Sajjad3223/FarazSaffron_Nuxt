<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>دسته بندی ها</Title>
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
        <Form class="grid grid-cols-3 mb-4 gap-4 items-end" v-if="showFilters">
          <base-f-input class="col-span-3" name="search" type="text" label="جستجو" place-holder="جستجو در عنوان یا اسلاگ" id="search" />
          <base-f-button class="col-span-2" color="primary" text-color="white">
            اعمال فیلتر
          </base-f-button>
          <base-f-button color="secondary" bordered text-color="responsive">
            حذف فیلتر
          </base-f-button>
        </Form>
      </Transition>
    </div>

    <base-f-divider :logo-divider="false" title="دسته بندی ها">
      <template #left>
        <base-f-button color="primary" @clicked="showAddModal = true" text-color="white">
          افزودن دسته بندی جدید
        </base-f-button>
      </template>
    </base-f-divider>

    <f-modal title="افزودن دسته بندی جدید" v-model="showAddModal">
      <admin-categories-add @category-added="showAddModal = false,getData()" />
    </f-modal>
    <f-modal title="افزودن دسته بندی جدید" v-model="showEditModal">
      <admin-categories-edit @category-added="showEditModal = false,getData()" :category="selectedCategory"/>
    </f-modal>

    <div v-if="!isLoading" class=" w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto" >
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
          >
            <th class="px-4 py-3">عنوان</th>
            <th class="px-4 py-3">اسلاگ</th>
            <th class="px-4 py-3">تاریخ ثبت</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
          >
          <template v-for="c in categories">
            <tr class="text-gray-700 dark:text-gray-400" >
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold text-nowrap">{{c.title}}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm text-nowrap">
                {{ c.slug }}
              </td>
              <td class="px-4 py-3 text-sm">
                {{ c.persianDate }}
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button @click="editCategory(c)"
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
                  </button>
                  <button
                      class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                      aria-label="Delete"
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
            <tr class="text-gray-700 dark:text-gray-400" v-for="ch in c.children">
            <td class="-translate-x-8 px-4 py-3">
              <div class="flex items-center text-sm">
                <div class="relative before:absolute before:-right-5 before:opacity-60 before:w-2 before:h-2 before:bg-black before:dark:bg-white before:rounded-full flex items-center">
                  <p class="font-semibold text-nowrap">{{ch.title}}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{ ch.slug }}
            </td>
            <td class="px-4 py-3 text-sm">
              {{ ch.persianDate }}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center space-x-4 text-sm">
                <button @click="editCategory(ch)"
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
                </button>
                <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
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
      <FPagination v-model="pageId" :pagination-data="paginationData" />
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
import FModal from "~/components/base/FModal.vue";
import type {CategoryDto, CategoryFilterParams} from "~/models/categories/categoryQueries";
import {GetCategoriesByAdmin} from "~/services/category.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";

definePageMeta({
  layout:'admin'
})

const isLoading = ref(true)
const showFilters = ref(false)
const showAddModal = ref(false)
const showEditModal = ref(false)
const pageId = ref(1);
const categories:Ref<CategoryDto[]> = ref([]);
const selectedCategory:Ref<CategoryDto | null> = ref(null);
const paginationData:Ref<PaginationData | null | undefined> = ref();

const filterParams:CategoryFilterParams = reactive({
  pageId:pageId.value,
  search:'',
  take:10
})

watch(pageId,async ()=>await getData());

onMounted(async ()=>{
  await getData();
})

const editCategory = (category:CategoryDto)=>{
  selectedCategory.value = category;
  showEditModal.value = true;
}

const getData = async () => {
  isLoading.value = true;

  const result = await GetCategoriesByAdmin(filterParams);
  if(result.isSuccess){
    categories.value = result.data?.data!;
    paginationData.value = FillPaginationData(result.data!);
  }

  isLoading.value = false;
}

</script>