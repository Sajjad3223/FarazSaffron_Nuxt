<template>
  <div v-if="paginationData && paginationData.pageCount > 1"
      class="flex flex-col px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9 "
  >
        <span class="flex items-center col-span-3">
          نمایش
          {{ (paginationData.currentPage - 1) * paginationData.take + 1 }}-{{ Math.min(((paginationData.currentPage) * paginationData.take),paginationData.entityCount) }}
          از
          {{paginationData.entityCount}}
        </span>

    <!--   Pagination   -->
    <div class="w-full flex items-center justify-between mt-6">
      <!--  Prev  -->
      <button @click="changePageId(paginationData.currentPage - 1)"
          :class="['flex items-center gap-2 text-[#666666]',{'opacity-50':paginationData.currentPage === 1}]" :disabled="paginationData.currentPage === 1">
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.2031 6.47904C18.5365 7.24884 18.5365 9.17334 17.2031 9.94314L10.8865 13.5901C9.55316 14.3599 7.88649 13.3976 7.88649 11.858L7.88649 4.56418C7.88649 3.02458 9.55315 2.06233 10.8865 2.83213L17.2031 6.47904Z" fill="#666666" fill-opacity="0.3"/>
          <path d="M6.12891 8.21273C6.12891 8.43657 5.9632 8.62583 5.74133 8.65541L1.42656 9.23071C0.810897 9.3128 0.263841 8.83384 0.263841 8.21273C0.263841 7.59162 0.810899 7.11266 1.42656 7.19475L5.74133 7.77005C5.9632 7.79963 6.12891 7.98889 6.12891 8.21273Z" fill="#666666" fill-opacity="0.3"/>
        </svg>
        <span>قبلی</span>
      </button>
      <!--  Pages  -->
      <div>
        <ul class="flex items-center gap-2" v-if="paginationData.pageCount <= 5">
          <li  v-for="p in paginationData.pageCount" :key="p">
            <button v-if="p === modelValue" disabled class="bg-brandOrange rounded-md lg:rounded-lg w-6 lg:w-8 h-6 lg:h-8 text-xs lg:text-sm grid place-items-center text-white" >
              <span style="font-family: 'Vazir FD',serif">{{ p }}</span>
            </button>
            <button v-else class="border border-[#C9C9C9] rounded-md lg:rounded-lg w-6 lg:w-8 h-6 lg:h-8 text-xs lg:text-sm grid place-items-center text-[#C9C9C9]" @click="changePageId(p)">
              <span style="font-family: 'Vazir FD',serif">{{ p }}</span>
            </button>
          </li>
        </ul>
        <ul class="flex items-center gap-2" v-else>
          <li v-if="paginationData.currentPage > 2">
            <button class="border border-[#C9C9C9] rounded-md lg:rounded-lg w-6 lg:w-8 h-6 lg:h-8 text-xs lg:text-sm grid place-items-center text-[#C9C9C9]" @click="changePageId(1)">
              <span style="font-family: 'Vazir FD',serif">{{ 1 }}</span>
            </button>
          </li>
          <li v-if="paginationData.currentPage > 3">
            ...
          </li>
          <li v-if="paginationData.currentPage > 1">
            <button class="border border-[#C9C9C9] rounded-md lg:rounded-lg w-6 lg:w-8 h-6 lg:h-8 text-xs lg:text-sm grid place-items-center text-[#C9C9C9]" @click="changePageId(paginationData.currentPage - 1)">
              <span style="font-family: 'Vazir FD',serif">{{ paginationData.currentPage - 1 }}</span>
            </button>
          </li>
          <li >
            <button disabled class="bg-brandOrange rounded-lg w-8 h-8 text-sm grid place-items-center text-white" >
              <span style="font-family: 'Vazir FD',serif">{{ paginationData.currentPage }}</span>
            </button>
          </li>
          <li >
            <button v-if="paginationData.currentPage + 1 < paginationData.pageCount" class="border border-[#C9C9C9] rounded-lg w-8 h-8 text-sm grid place-items-center text-[#C9C9C9]" @click="changePageId(paginationData.currentPage + 1)">
              <span style="font-family: 'Vazir FD',serif">{{ paginationData.currentPage + 1 }}</span>
            </button>
          </li>
          <li class="text-[#C9C9C9]" v-if="paginationData.currentPage + 2 < paginationData.pageCount">
            ...
          </li>
          <li >
            <button v-if="paginationData.currentPage < paginationData.pageCount" class="border border-[#C9C9C9] rounded-lg w-8 h-8 text-sm grid place-items-center text-[#C9C9C9]" @click="changePageId(paginationData.pageCount)">
              <span style="font-family: 'Vazir FD',serif">{{ paginationData.pageCount }}</span>
            </button>
          </li>
        </ul>
      </div>
      <!--  Next  -->
      <button @click="changePageId(paginationData.currentPage + 1)"
          :class="['flex items-center gap-2 text-[#666666]',{'opacity-50':paginationData.currentPage === paginationData.pageCount}]" :disabled="paginationData.currentPage === paginationData.pageCount">
        <span>بعدی</span>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10.646C1.66667 9.87616 1.66667 7.95166 3 7.18186L9.31663 3.53495C10.65 2.76515 12.3166 3.7274 12.3166 5.267V12.5608C12.3166 14.1004 10.65 15.0627 9.31664 14.2929L3 10.646Z" fill="#666666" fill-opacity="0.75"/>
          <path d="M14.0742 8.91227C14.0742 8.68843 14.2399 8.49917 14.4618 8.46959L18.7766 7.89429C19.3922 7.8122 19.9393 8.29116 19.9393 8.91227C19.9393 9.53338 19.3922 10.0123 18.7766 9.93025L14.4618 9.35495C14.2399 9.32537 14.0742 9.13611 14.0742 8.91227Z" fill="#666666" fill-opacity="0.75"/>
        </svg>
      </button>
    </div>

  </div>

</template>

<script setup lang="ts">
import type {PaginationData} from "~/models/baseFilterResult";

const emit = defineEmits(['update:modelValue']);
const props = defineProps<{
  modelValue:number,
  paginationData:PaginationData,
}>();

const changePageId = (pageId:number)=>{
  emit('update:modelValue',pageId)
}
</script>