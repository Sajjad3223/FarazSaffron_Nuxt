<template>
  <div>
    <base-f-divider :logo-divider="false" title="ویرایش ها" />

    <base-g-modal title="نمایش مقادیر" v-model="showCompleteTextModal" width="50vw">
      <div class="grid grid-cols-2 gap-5 max-h-[60vh] overflow-y-auto">
        <div class="flex flex-col items-start gap-4 overflow-auto">
          <div class="flex flex-col w-full items-start gap-1" v-for="key in Object.keys(JSON.parse(modification.oldValue))">
            <span class="opacity-70">{{key}}</span>
            <span v-if="typeof JSON.parse(modification.oldValue)[key] != 'object'" :class="['flex-1 w-full',{'bg-green-500 p-1 px-2 rounded-md':compareValues(key)}]"
            >{{JSON.parse(modification.oldValue)[key]}}</span>
            <div v-else-if="JSON.parse(modification.oldValue)[key]" class="border-r-2 border-black pr-4 flex flex-col mr-4 gap-2" v-for="subKey in Object.keys(JSON.parse(modification.oldValue)[key])">
              <span class="opacity-50">{{ subKey }}</span>
              <span v-if="typeof JSON.parse(modification.oldValue)[key][subKey] != 'object'"
              >{{ JSON.parse(modification.oldValue)[key][subKey] }}</span>
              <div v-else-if="JSON.parse(modification.oldValue)[key][subKey]"
                   class="border-r-2 border-black pr-4 flex flex-col mr-4 gap-2"
                   v-for="subKey2 in Object.keys(JSON.parse(modification.oldValue)[key][subKey])">
                <span class="opacity-50">{{ subKey2 }}</span>
                <span
                >{{ JSON.parse(modification.oldValue)[key][subKey][subKey2] }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start gap-4 overflow-auto">
          <div class="flex flex-col w-full items-start gap-1" v-for="key in Object.keys(JSON.parse(modification.newValue))">
            <span class="opacity-70">{{key}}</span>
            <span v-if="typeof JSON.parse(modification.newValue)[key] != 'object'" :class="['flex-1 w-full',{'bg-green-500 p-1 px-2 rounded-md':compareValues(key)}]"
            >{{JSON.parse(modification.newValue)[key]}}</span>
            <div v-else-if="JSON.parse(modification.newValue)[key]" class="border-r-2 border-black pr-4 flex flex-col mr-4 gap-2" v-for="subKey in Object.keys(JSON.parse(modification.newValue)[key])">
              <span class="opacity-50">{{ subKey }}</span>
              <span v-if="typeof JSON.parse(modification.newValue)[key][subKey] != 'object'"
              >{{ JSON.parse(modification.newValue)[key][subKey] }}</span>
              <div v-else-if="JSON.parse(modification.newValue)[key][subKey]"
                   class="border-r-2 border-black pr-4 flex flex-col mr-4 gap-2"
                   v-for="subKey2 in Object.keys(JSON.parse(modification.newValue)[key][subKey])">
                <span class="opacity-50">{{ subKey2 }}</span>
                <span
                >{{ JSON.parse(modification.newValue)[key][subKey][subKey2] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </base-g-modal>

    <table class=" mt-12 w-full">
      <thead class="font-bold opacity-50">
      <tr class="text-xs font-bold text-right text-gray-500 uppercase border-b bg-gray-50 ">
        <th class="px-4 py-5">کاربر</th>
        <th class="px-4 py-5">عنوان</th>
        <th class="px-4 py-5">نوع تغییر</th>
        <th class="px-4 py-5">تاریخ</th>
        <th class="px-4 py-5">عملیات</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="m in modifications" :key="m.id">
        <td class="px-4 py-5">{{m.userName}}</td>
        <td class="px-4 py-5">{{m.itemTitle}}</td>
        <td class="px-4 py-5">
          <span class="text-xs px-2 py-0.5 rounded-full bg-primary/20 font-light text-primary" v-if="m.modificationType == EModificationType.Create">{{EModificationType[m.modificationType]}}</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-warning/20 font-light text-black/70" v-if="m.modificationType == EModificationType.Edit">{{EModificationType[m.modificationType]}}</span>
          <span class="text-xs px-2 py-0.5 rounded-full bg-danger/20 font-light text-danger" v-if="m.modificationType == EModificationType.Delete">{{EModificationType[m.modificationType]}}</span>
        </td>
        <td class="px-4 py-5">{{m.persianDate}}</td>
        <td class="px-4 py-5">
          <button @click="showText(m.id)" title="مشاهده تغییرات">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48885 15.806 4.75085 11.998 4.75085H12.002C8.194 4.75085 4.711 7.48885 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <FPagination :pagination-data="paginationData" v-model="pageId" />

  </div>
</template>

<script setup lang="ts">
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {GetAllModifications, GetModification} from "~/services/modification.service";
import {
  EModificationType,
  type ModificationDto,
  type ModificationFilterData
} from "~/models/modification/modificationDto";

definePageMeta({
  layout:'admin'
})

const loading = ref(true);
const pageId:Ref<number> = ref(1);
const paginationData:Ref<PaginationData> = ref(null);

const modifications:Ref<ModificationFilterData[]> = ref([]);
const modification:Ref<ModificationDto | null> = ref(null);
const textToShow = ref('');
const showCompleteTextModal = ref(false);

onMounted(async ()=>{
  await getData();
})

watch(pageId,async ()=>await getData());

const getData = async ()=>{
  loading.value = true;

  const result = await GetAllModifications({pageId:pageId.value,take:20});
  if(result.isSuccess){
    modifications.value = result.data?.data ?? [];
    paginationData.value = FillPaginationData(result.data!);
  }

  loading.value = false;
}

const showText = async (id:number)=>{
  const result = await GetModification(id);
  if(result.isSuccess){
    modification.value = result.data!;
  }

  showCompleteTextModal.value = true;
}

const compareValues = (key:string):boolean =>{
  const oldValue = JSON.parse(modification.value.oldValue)[key];
  const newValue = JSON.parse(modification.value.newValue)[key];

  if(typeof oldValue == 'object')
    return false

  if(typeof newValue == 'object')
    return false

  return oldValue != newValue;
}

</script>