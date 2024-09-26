<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>کاربران جی پی</Title>
    </Head>
    <base-f-divider :logo-divider="false" title="کاربران">
      <template #left>
        <base-f-button color="primary" @clicked="showAddUserModal = true">
          کاربر جدید
        </base-f-button>
      </template>
    </base-f-divider>

    <div class="p-4 rounded-xl border dark:border-white/30 border-black/30 overflow-hidden" v-if="false">
      <button class="w-full flex items-center justify-between" type="button" @click="showFilters = !showFilters">
        <strong class="text-xl ">فیلتر کاربران</strong>
        <span :class="[' transition duration-200',{'rotate-180':showFilters}]">
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
          <base-f-input class="col-span-3" name="search" type="text" label="جستجو" place-holder="جستجو در نام، توضیحات و ..." id="search" />
          <base-f-button class="col-span-2" color="primary">
            اعمال فیلتر
          </base-f-button>
          <base-f-button color="secondary" bordered text-color="white">
            حذف فیلتر
          </base-f-button>
        </Form>
      </Transition>
    </div>

    <base-f-modal v-model="showAddUserModal" title="افزودن کاربر جدید">
      <admin-users-add @operation-finished="showAddUserModal = false" />
    </base-f-modal>
    <base-f-modal v-model="showSetRolesModal" title="ثبت لقب های کاربر">
      <admin-users-user-roles :user-id="selectedUserId" @operation-finished="showSetRolesModal = false" />
    </base-f-modal>

    <div v-if="!isLoading" class=" w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto" >
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  "
          >
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">نام و نام خانوادگی</th>
            <th class="px-4 py-3">شماره تلفن</th>
            <th class="px-4 py-3">ایمیل</th>
            <th class="px-4 py-3">کد ملی</th>
            <th class="px-4 py-3">تاریخ ثبت نام</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:black/20"
          >
          <tr class="text-gray-700 " v-for="u in users" :key="u">
            <td class="px-4 py-3 text-sm text-nowrap">
              {{ u.id }}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center text-sm">
                <div>
                  <p class="font-semibold text-nowrap">{{u.fullName}}</p>
                  <p class="text-xs font-light text-gray-600  text-nowrap">
                    ( <span class="text-primary hover:underline cursor-pointer" @click.prevent="selectedUserId = u.id, showSetRolesModal = true">مدیریت دسترسی ها</span> )
                  </p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{ u.phoneNumber }}
            </td>
            <td class="px-4 py-3 text-sm text-nowrap">
              {{u.email ?? "-----"}}
            </td>
            <td class="px-4 py-3 text-xs">
              {{ u.nationalId ?? "------" }}
            </td>
            <td class="px-4 py-3 text-sm">
              {{u.persianDate}}
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center space-x-4 text-sm">
                <button
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
                </button>
                <button
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
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
                <button title="مدیریت دسترسی ها" @click.prevent="selectedUserId = u.id, showSetRolesModal = true"
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                    aria-label="Set Permissions"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2502 18.47L19.6002 18.86C19.2302 18.95 18.9402 19.23 18.8602 19.6L18.5102 21.07C18.3202 21.87 17.3002 22.12 16.7702 21.49L13.7802 18.05C13.5402 17.77 13.6702 17.33 14.0302 17.24C15.8002 16.81 17.3902 15.82 18.5602 14.41C18.7502 14.18 19.0902 14.15 19.3002 14.36L21.5202 16.58C22.2802 17.34 22.0102 18.29 21.2502 18.47Z" fill="currentColor"/>
                    <path d="M2.70016 18.47L4.35016 18.86C4.72016 18.95 5.01016 19.23 5.09016 19.6L5.44016 21.07C5.63016 21.87 6.65016 22.12 7.18016 21.49L10.1702 18.05C10.4102 17.77 10.2802 17.33 9.92016 17.24C8.15016 16.81 6.56016 15.82 5.39016 14.41C5.20016 14.18 4.86016 14.15 4.65016 14.36L2.43016 16.58C1.67016 17.34 1.94016 18.29 2.70016 18.47Z" fill="currentColor"/>
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 10.45 5.43 11.78 6.17 12.89C7.25 14.49 8.96 15.62 10.95 15.91C11.29 15.97 11.64 16 12 16C12.36 16 12.71 15.97 13.05 15.91C15.04 15.62 16.75 14.49 17.83 12.89C18.57 11.78 19 10.45 19 9C19 5.13 15.87 2 12 2ZM15.06 8.78L14.23 9.61C14.09 9.75 14.01 10.02 14.06 10.22L14.3 11.25C14.49 12.06 14.06 12.38 13.34 11.95L12.34 11.36C12.16 11.25 11.86 11.25 11.68 11.36L10.68 11.95C9.96 12.37 9.53 12.06 9.72 11.25L9.96 10.22C10 10.03 9.93 9.75 9.79 9.61L8.94 8.78C8.45 8.29 8.61 7.8 9.29 7.69L10.36 7.51C10.54 7.48 10.75 7.32 10.83 7.16L11.42 5.98C11.74 5.34 12.26 5.34 12.58 5.98L13.17 7.16C13.25 7.32 13.46 7.48 13.65 7.51L14.72 7.69C15.39 7.8 15.55 8.29 15.06 8.78Z" fill="currentColor"/>
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
import type {UserFilterData,UserFilterParams} from "~/models/users/userQueries";
import {GetUsers} from "~/services/user.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {useToast} from "~/composables/useSwal";

definePageMeta({
  layout:'admin'
})

const isLoading = ref(true);
const showFilters = ref(false);
const showAddUserModal = ref(false);
const showSetRolesModal = ref(false);
const selectedUserId = ref(0);
const pageId = ref(1);
const users:Ref<UserFilterData[] | undefined> = ref([]);
const paginationData:Ref<PaginationData | null | undefined> = ref(null);

watch(pageId,async () => await getData());

onMounted(async () => {
  await getData();
})

const filterParams:UserFilterParams = reactive({
  pageId:pageId,
  take:10,
  search:''
})

const getData = async ()=>{
  isLoading.value = true;

  const result = await GetUsers(filterParams);
  if(result.isSuccess){
    users.value = result.data?.data;
    paginationData.value = FillPaginationData(result.data!);
  }

  isLoading.value = false;
}
</script>