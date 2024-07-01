<template>
  <div>
    <div>
      <h2 class="dark:text-white text-2xl">گزارش بازدید ها</h2>
      <hr class="my-5 opacity-20">
    </div>

    <table class="dark:text-white mt-12 w-full">
      <thead class="font-bold opacity-50">
        <tr>
          <th class="px-4 pb-10">IP</th>
          <th class="px-4 pb-10">آیدی کاربر</th>
          <th class="px-4 pb-10">آیدی محصول</th>
          <th class="px-4 pb-10" width="30%">لینک آدرس</th>
          <th class="px-4 pb-10">دستگاه</th>
          <th class="px-4 pb-10">نوع پست</th>
          <th class="px-4 pb-10">تاریخ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="v in visits" :key="v.id">
          <td class="px-4 py-5">{{v.ip}}</td>
          <td class="px-4 py-5">{{v.userId}}</td>
          <td class="px-4 py-5">{{v.entityId ?? '-----'}}</td>
          <td class="truncate px-4 py-5 max-w-12" dir="ltr" :title="v.address">{{v.address ?? '------'}}</td>
          <td class="truncate px-4 py-5" dir="ltr">{{v.device}}</td>
          <td class="px-4 py-5">{{EPostType[v.postType]}}</td>
          <td class="px-4 py-5">{{v.persianDate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type {VisitDto} from "~/models/visit/visitDto";
import {GetVisits} from "~/services/visit.service";
import {EPostType} from "~/models/EPostType";

definePageMeta({
  layout:'admin'
})

const visits:Ref<VisitDto[]> = ref([]);

onMounted(async ()=>{
  const result = await GetVisits({pageId:1,take:100});
  if(result.isSuccess){
    visits.value = result.data?.data ?? [];
  }
})

</script>