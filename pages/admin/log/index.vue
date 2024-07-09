<template>
  <div>
    <base-f-divider :logo-divider="false" title="گزارش ها" />

    <base-g-modal title="متن کامل گزارش" v-model="showCompleteTextModal">
      <p class="w-full p-5 overflow-auto max-h-[60vh]" dir="ltr">
        {{ textToShow }}
      </p>
    </base-g-modal>

    <table class=" mt-12 w-full" dir="ltr">
      <thead class="font-bold opacity-50">
        <tr class="text-xs font-bold text-right text-gray-500 uppercase border-b bg-gray-50 ">
          <th class="px-4 py-5" width="15%">پیغام</th>
          <th class="px-4 py-5" width="15%">سطح گزارش</th>
          <th class="px-4 py-5" width="15%">قالب پیام</th>
          <th class="px-4 py-5" width="15%">تاریخ</th>
          <th class="px-4 py-5" width="15%">گزارش کامل خطا</th>
          <th class="px-4 py-5" width="15%">مشخصات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="l in logs" :key="l.id" :class="['py-5 border-b'
          ,{'text-warning':l.level === LogLevel.Warning},{'text-danger':l.level === LogLevel.Error}]">
          <td class="truncate cursor-pointer hover:text-primary max-w-[200px] font-light transition-colors hover:200 text-xs py-4"
              @click="showText(l.message)">{{ l.message }}
          </td>
          <td class="mx-auto text-center text-xs py-4 font-light">{{ LogLevel[l.level] }}</td>
          <td class="truncate cursor-pointer hover:text-primary max-w-[200px] font-light transition-colors hover:200 text-xs py-4"
              @click="showText(l.messageTemplate)" :title="l.messageTemplate">{{ l.messageTemplate }}
          </td>
          <td class="mx-auto text-center text-xs py-4 font-light">{{ l.persianDate }}</td>
          <td class="truncate cursor-pointer hover:text-primary max-w-[200px] font-light transition-colors hover:200 text-xs py-4"
              @click="showText(l.exception)">{{ l.exception }}
          </td>
          <td class="truncate cursor-pointer hover:text-primary max-w-[200px] font-light transition-colors hover:200 text-xs py-4"
              @click="showText(l.properties)">{{ l.properties }}
          </td>
        </tr>
      </tbody>
    </table>
    <FPagination :pagination-data="paginationData" v-model="pageId"/>

  </div>
</template>

<script setup lang="ts">
import {type LogDto, LogLevel} from "~/models/log/logDto";
import {GetAllLogs} from "~/services/logs.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";

definePageMeta({
  layout: 'admin'
})

const pageId: Ref<number> = ref(1);
const paginationData: Ref<PaginationData> = ref(null);

const logs: Ref<LogDto[]> = ref([]);
const textToShow = ref('');
const showCompleteTextModal = ref(false);

onMounted(async () => {
  await getData();
})

watch(pageId, async () => await getData());

const getData = async () => {
  const result = await GetAllLogs({pageId: pageId.value, take: 20});
  if (result.isSuccess) {
    logs.value = result.data?.data ?? [];
    paginationData.value = FillPaginationData(result.data!);
  }
}

const showText = (text: string) => {
  textToShow.value = text;
  showCompleteTextModal.value = true;
}

</script>