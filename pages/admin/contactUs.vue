<template>
  <div>
    <Head>
      <Title>فرم های تماس با ها</Title>
    </Head>
    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      فرم های تماس با ما
    </h4>

    <div v-if="!isLoading" class=" w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto" >
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
          >
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">موضوع</th>
            <th class="px-4 py-3">نام و نام خانوادگی</th>
            <th class="px-4 py-3">تلفن</th>
            <th class="px-4 py-3">ایمیل</th>
            <th class="px-4 py-3">تاریخ ثبت</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
          >
          <tr class="text-gray-700 dark:text-gray-400" v-for="c in contactForms" :key="c">
            <td class="px-4 py-3 text-sm text-nowrap">
              {{ c.id }}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div>
                  <p class="font-semibold text-nowrap">{{c.subject}}</p>
                  <p class="text-xs font-light text-gray-600 dark:text-gray-400 text-nowrap">
                    ( <span class="text-primary hover:underline cursor-pointer">مشاهده پیام</span> )
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{ c.fullName }}
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{c.phoneNumber}}
            </td>
            <td class="px-4 py-3 text-xs">
              {{ c.email }}
            </td>
            <td class="px-4 py-3 text-sm">
              {{c.persianDate}}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center space-x-4 text-sm">
                <button
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

          </tbody>
        </table>
      </div>
      <FPagination v-model="pageId" :pagination-data="paginationData" />
    </div >
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
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import type {ContactFilterParams, ContactFormDto} from "~/models/contact/contactQueries";
import {GetContactForms} from "~/services/contact.service";

definePageMeta({
  layout:'admin'
})

const isLoading = ref(true);
const pageId = ref(1);
const contactForms:Ref<ContactFormDto[] | undefined> = ref([]);
const paginationData:Ref<PaginationData | null | undefined> = ref(null);

watch(pageId,async () => await getData());

onMounted(async () => {
  await getData();
})

const filterParams:ContactFilterParams = reactive({
  pageId:pageId,
  take:10,
  search:''
})

const getData = async ()=>{
  isLoading.value = true;

  const result = await GetContactForms(filterParams);
  if(result.isSuccess){
    contactForms.value = result.data?.data;
    paginationData.value = FillPaginationData(result.data!);
  }

  isLoading.value = false;
}

</script>