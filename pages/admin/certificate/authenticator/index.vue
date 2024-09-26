<template>
  <div>
    <Head>
      <Title>سریال های ثبت شده</Title>
    </Head>
    <base-f-divider :logo-divider="false" title="سریال های ثبت شده">
      <template #left>
        <base-f-button color="primary" @clicked="showCreateAuthenticatorModal = true" text-color="white">
          سریال جدید
        </base-f-button>
      </template>
    </base-f-divider>

    <base-g-modal title="افزودن سریال جدید" v-model="showCreateAuthenticatorModal">
      <admin-certificates-add-authenticator @authenticatorCreated="showCreateAuthenticatorModal = false,getData()"/>
    </base-g-modal>

    <base-g-modal title="ویرایش سریال" v-model="showEditAuthenticatorModal">
      <admin-certificates-edit-authenticator :authenticator="selectedAuthenticator"
                                             @authenticatorEdited="showEditAuthenticatorModal = false,getData()"/>
    </base-g-modal>

    <base-g-modal title="انتخاب تاریخ" v-model="showSelectDateModal">
      <GDatePicker @dateSelected="dateSelected"/>
    </base-g-modal>

    <table class=" mt-12 w-full" v-if="authenticators.length > 0">
      <thead class="font-bold opacity-50">
      <tr class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  ">
        <th class="px-4 text-right py-5">عنوان</th>
        <th class="px-4 text-right py-5">سریال</th>
        <th class="px-4 text-right py-5">وضعیت</th>
        <th class="px-4 text-right py-5">تاریخ ثبت</th>
        <th class="px-4 text-right py-5" width="15%">عملیات</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="a in authenticators" :key="a.id">
        <td class="px-4 py-5">
          <NuxtLink :to="`/admin/certificate/authenticator/${a.id}`">
            {{ a.title }}
          </NuxtLink>
        </td>
        <td class="px-4 py-5">
          <NuxtLink :to="`/inquiry?serial=${a.serialNumber.substring(2)}`" class="uppercase font-[montserrat]">
            {{ a.serialNumber }}
          </NuxtLink>
        </td>
        <td class="px-4 py-5">{{ a.isActive ? 'فعال' : 'غیر فعال' }}</td>
        <td class="px-4 py-5">{{ a.persianDate }}</td>
        <td class="px-4 py-5">
          <div class="flex gap-2">
            <!--  Edit Property  -->
            <button @click="SelectDate(a)"
                    class="border-2 border-warning/30 text-xs text-nowrap font-light text-black hover:bg-warning transition-colors duration-300 hover:text-white px-2 py-1 rounded-md flex items-center">
              ثبت محصولات
            </button>
            <!--  Edit Property  -->
            <button
                class="bg-warning/30 text-warning hover:bg-warning transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2"
                @click="editAuthenticator(a)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.492 2.78906H7.753C4.678 2.78906 2.75 4.96606 2.75 8.04806V16.3621C2.75 19.4441 4.669 21.6211 7.753 21.6211H16.577C19.662 21.6211 21.581 19.4441 21.581 16.3621V12.3341"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8.82666 10.921L16.2997 3.44799C17.2307 2.51799 18.7397 2.51799 19.6707 3.44799L20.8877 4.66499C21.8187 5.59599 21.8187 7.10599 20.8877 8.03599L13.3787 15.545C12.9717 15.952 12.4197 16.181 11.8437 16.181H8.09766L8.19166 12.401C8.20566 11.845 8.43266 11.315 8.82666 10.921Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.1641 4.60254L19.7301 9.16854" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <!--  Delete Property  -->
            <button
                class="bg-danger/30 text-danger hover:bg-danger transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2"
                @click="deleteAuthenticator(a.id)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.3238 9.46777C19.3238 9.46777 18.7808 16.2028 18.4658 19.0398C18.3158 20.3948 17.4788 21.1888 16.1078 21.2138C13.4988 21.2608 10.8868 21.2638 8.27881 21.2088C6.95981 21.1818 6.13681 20.3778 5.98981 19.0468C5.67281 16.1848 5.13281 9.46777 5.13281 9.46777"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.708 6.23926H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path
                    d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>

    <FPagination v-model="pageId" :pagination-data="paginationData"/>
  </div>
</template>

<script setup lang="ts">
import type {CAPropertyDto, AuthenticatorFilterData} from "~/models/certificate/authenticatorDto";
import {DeleteAuthenticator, DeleteCProperty, GetAllAuthenticators} from "~/services/certificate.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {ToastType} from "~/composables/useSwal";
import {monthOptions} from "~/utilities/dateUtils";
import GDatePicker from "~/components/GDatePicker.vue";

definePageMeta({
  layout: 'admin'
})

const showCreateAuthenticatorModal = ref(false);
const showEditAuthenticatorModal = ref(false);
const showSelectDateModal = ref(false);

const selectedAuthenticator: Ref<AuthenticatorFilterData | null> = ref(null);

const toast = useToast();

const loading = ref(true);
const authenticators: Ref<AuthenticatorFilterData[]> = ref([]);
const paginationData: Ref<PaginationData | null> = ref(null);

const pageId = ref(1);

onMounted(async () => {
  await getData();
})

const getData = async () => {
  loading.value = true;

  const result = await GetAllAuthenticators({pageId: pageId.value, take: 20, search: ''});
  if (result.isSuccess) {
    authenticators.value = result.data?.data ?? [];
    paginationData.value = FillPaginationData(result.data!);
  }

  loading.value = false;
}

const selectedItem: Ref<AuthenticatorFilterData | null> = ref(null);
const SelectDate = (item: AuthenticatorFilterData) => {
  selectedItem.value = item;
  showSelectDateModal.value = true;
}

const router = useRouter();
const dateSelected = async (date: Date) => {
  const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const url = `/admin/certificate/authenticator/setProducts/${selectedItem.value?.id}?date=${dateString}`;
  await router.push(url);
}

const editAuthenticator = (authenticator: AuthenticatorFilterData) => {
  selectedAuthenticator.value = authenticator;
  showEditAuthenticatorModal.value = true;
}

const deleteAuthenticator = (authenticatorId: number) => {
  toast.showToast("آیا از حذف ویژگی اطمینان دارید؟", ToastType.warning, 0, false,
      async () => {
        const result = await DeleteAuthenticator(authenticatorId);
        if (result.isSuccess) {
          toast.showToast()
          await getData();
        } else {
          await toast.showError(result.metaData);
        }

      }
  )
}
</script>