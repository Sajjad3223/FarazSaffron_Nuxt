<template>
  <div>
    <base-f-divider :logo-divider="false" title="گزارش بازدید ها" />

    <div class="grid grid-cols-4 gap-5">
      <div class="bg-white border rounded-2xl text-2xl p-12 flex flex-col space-y-5 justify-center">
        <div class="flex flex-col space-y-2">
          <span class="text-sm font-light opacity-70">بازدید کل</span>
          <div class="flex gap-2">
            <strong>{{data?.totalVisits}}</strong>
            <span>بازدید</span>
          </div>
        </div>
      </div>
      <div class="bg-white border rounded-2xl text-2xl p-12 flex flex-col space-y-5 justify-center">
        <div class="flex flex-col space-y-2">
          <span class="text-sm font-light opacity-70">بازدید های امسال</span>
          <div class="flex gap-2">
            <strong>{{data?.yearVisits}}</strong>
            <span>بازدید</span>
          </div>
          <div class="flex items-center gap-4 text-sm font-light">
            <span class="text-xs opacity-50"> بازدید های سال قبل</span>:
            <div class="flex gap-2">
              <strong>{{data?.lastYearVisits}}</strong>
              <span>بازدید</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white border rounded-2xl text-2xl p-12 flex flex-col space-y-5 justify-center">
        <div class="flex flex-col space-y-2">
          <span class="text-sm font-light opacity-70">بازدید های ماه</span>
          <div class="flex gap-2">
            <strong>{{data?.monthVisits}}</strong>
            <span>بازدید</span>
          </div>
          <div class="flex items-center gap-4 text-sm font-light">
            <span class="text-xs opacity-50"> بازدید های ماه قبل</span>:
            <div class="flex gap-2">
              <strong>{{data?.lastMonthVisits}}</strong>
              <span>بازدید</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white border rounded-2xl text-2xl p-12 flex flex-col space-y-5 justify-center">
        <div class="flex flex-col space-y-2">
          <span class="text-sm font-light opacity-70">بازدید های امروز</span>
          <div class="flex gap-2">
            <strong>{{data?.dayVisits}}</strong>
            <span>بازدید</span>
          </div>
          <div class="flex items-center gap-4 text-sm font-light">
            <span class="text-xs opacity-50"> بازدید های روز قبل</span>:
            <div class="flex gap-2">
              <strong>{{data?.lastDayVisits}}</strong>
              <span>بازدید</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white border rounded-2xl text-2xl p-12 flex flex-col space-y-5 justify-center">
        <div class="flex flex-col space-y-2">
          <span class="text-sm font-light opacity-70">بازدید های آمده از تُرُب</span>
          <div class="flex gap-2">
            <strong>{{data?.torobVisits}}</strong>
            <span>بازدید</span>
          </div>
        </div>
      </div>
    </div>

    <table class=" mt-12 w-full">
      <thead class="font-bold opacity-50">
        <tr class="text-xs font-bold text-right text-gray-500 uppercase border-b bg-gray-50 ">
          <th class="px-4 py-5">IP</th>
          <th class="px-4 py-5">آیدی کاربر</th>
          <th class="px-4 py-5">آیدی محصول</th>
          <th class="px-4 py-5" width="20%">لینک آدرس</th>
          <th class="px-4 py-5">دستگاه</th>
          <th class="px-4 py-5">مبدأ</th>
          <th class="px-4 py-5">نوع پست</th>
          <th class="px-4 py-5">تاریخ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in visits" :key="v.id">
          <td class="px-4 text-xs py-5">{{v.ip}}</td>
          <td class="px-4 text-xs py-5">{{v.userId}}</td>
          <td class="px-4 text-xs py-5">{{v.entityId ?? '-----'}}</td>
          <td class="text-xs truncate px-4 py-5 max-w-12" dir="ltr" :title="v.address">{{v.address ?? '------'}}</td>
          <td class="text-xs truncate px-4 py-5" dir="ltr">{{v.device}}</td>
          <td class="text-xs truncate px-4 py-5" dir="ltr">{{v.from != '' ? v.from : '---'}}</td>
          <td class="px-4 text-xs py-5">{{EPostType[v.postType]}}</td>
          <td class="px-4 text-xs py-5">{{v.persianDate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type {VisitDto, VisitFilterResult} from "~/models/visit/visitDto";
import {GetVisits} from "~/services/visit.service";
import {EPostType} from "~/models/EPostType";

definePageMeta({
  layout:'admin'
})

const data:Ref<VisitFilterResult | undefined> = ref(undefined);
const visits:Ref<VisitDto[]> = ref([]);

onMounted(async ()=>{
  const result = await GetVisits({pageId:1,take:100});
  if(result.isSuccess){
    visits.value = result.data?.data ?? [];
    data.value = result.data;
  }
})

</script>