<template>
  <div>
    <div>
      <h2 class="dark:text-white text-2xl">گزارش بازدید ها</h2>
      <hr class="my-5 opacity-20">
    </div>

    <div class="dark:text-white mt-12">
      <div class="grid grid-cols-6 gap-5 font-bold opacity-50">
        <span>IP</span>
        <span>آیدی محصول</span>
        <span>لینک آدرس</span>
        <span>دستگاه</span>
        <span>نوع پست</span>
        <span>تاریخ</span>
      </div>
      <hr class="my-4 opacity-50">
      <div v-for="v in visits" :key="v.id">
        <div class="grid grid-cols-6 gap-5 py-5 border-b dark:border-white/10">
          <span>{{v.ip}}</span>
          <span>{{v.entityId ?? '-----'}}</span>
          <span class="truncate" :title="v.address">{{v.address ?? '------'}}</span>
          <span class="truncate">{{v.device}}</span>
          <span>{{EPostType[v.postType]}}</span>
          <span>{{v.persianDate}}</span>
        </div>
      </div>
    </div>
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