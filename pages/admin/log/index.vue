<template>
  <div>
    <div>
      <h2 class="dark:text-white text-2xl">گزارش ها</h2>
      <hr class="my-5 opacity-20">
    </div>

    <base-g-modal title="متن کامل گزارش" v-model="showCompleteTextModal">
      <p class="w-full p-5 overflow-auto max-h-[60vh]" dir="ltr">
        {{textToShow}}
      </p>
    </base-g-modal>

    <div class="dark:text-white mt-12" dir="ltr">
      <div class="grid grid-cols-6 gap-5 font-bold opacity-50">
        <span>پیغام</span>
        <span>سطح گزارش</span>
        <span>قالب پیام</span>
        <span>تاریخ</span>
        <span>گزارش کامل خطا</span>
        <span>مشخصات</span>
      </div>
      <hr class="my-4 opacity-50">
      <div v-for="l in logs" :key="l.id">
        <div :class="['grid grid-cols-6 gap-5 py-5 border-b dark:border-white/10'
        ,{'text-warning':l.level === LogLevel.Warning},{'text-danger':l.level === LogLevel.Error}]">
          <span class="truncate cursor-pointer hover:text-primary transition-colors hover:200" @click="showText(l.message)" >{{l.message}}</span>
          <span>{{LogLevel[l.level]}}</span>
          <span class="truncate cursor-pointer hover:text-primary transition-colors hover:200" @click="showText(l.messageTemplate)" :title="l.messageTemplate">{{l.messageTemplate}}</span>
          <span >{{l.persianDate}}</span>
          <span class="truncate cursor-pointer hover:text-primary transition-colors hover:200" @click="showText(l.exception)" >{{l.exception}}</span>
          <span class="truncate cursor-pointer hover:text-primary transition-colors hover:200" @click="showText(l.properties)" >{{l.properties}}</span>
        </div>
      </div>
    </div>
    <FPagination :pagination-data="paginationData" v-model="pageId" />

  </div>
</template>

<script setup lang="ts">
import {type LogDto, LogLevel} from "~/models/log/logDto";
import {GetAllLogs} from "~/services/logs.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";

definePageMeta({
  layout:'admin'
})

const pageId:Ref<number> = ref(1);
const paginationData:Ref<PaginationData> = ref(null);

const logs:Ref<LogDto[]> = ref([]);
const textToShow = ref('');
const showCompleteTextModal = ref(false);

onMounted(async ()=>{
  await getData();
})

watch(pageId,async ()=>await getData());

const getData = async ()=>{
  const result = await GetAllLogs({pageId:pageId.value,take:20});
  if(result.isSuccess){
    logs.value = result.data?.data ?? [];
    paginationData.value = FillPaginationData(result.data!);
  }
}

const showText = (text:string)=>{
  textToShow.value = text;
  showCompleteTextModal.value = true;
}

</script>