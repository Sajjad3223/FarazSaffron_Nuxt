<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>مدیریت محتوای صفحه اصلی</Title>
    </Head>
    <h4
        class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
    >
      مدیریت محتوای صفحه اصلی
    </h4>
    <base-g-button color="info" @click="showAddTemplateModal = true">
      الگوی جدید
    </base-g-button>

    <base-g-modal v-model="showAddTemplateModal" title="افزودن الگوی جدید">
      <admin-main-page-create-template @template-created="showAddTemplateModal = false,getData()"/>
    </base-g-modal>
    <base-g-modal v-model="showEditTemplateModal" title="ویرایش الگوی جدید">
      <admin-main-page-edit-template :template="selectedTemplate" @template-edited="showEditTemplateModal = false,getData()"/>
    </base-g-modal>

    <div class="flex flex-col space-y-5 mt-5" v-if="templates.length > 0">
      <div class="w-full flex items-center justify-between dark:bg-white/10 dark:text-white rounded-lg p-4" v-for="template in templates">
        <div class="flex gap-4 items-center">
          <!--  Active Template  -->
          <button class="text-white/50 hover:text-white/100 transition-colors duration-300 px-2 py-1 rounded-md" @click="setActiveTemplate(template.id)" v-if="!template.isActive" title="تنظیم به عنوان الگوی فعال">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.334 2.75H7.665C4.644 2.75 2.75 4.889 2.75 7.916V16.084C2.75 19.111 4.635 21.25 7.665 21.25H16.333C19.364 21.25 21.25 19.111 21.25 16.084V7.916C21.25 4.889 19.364 2.75 16.334 2.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="text-white/50 hover:text-white/100 transition-colors duration-300 px-2 py-1 rounded-md" v-else disabled title="الگوی فعال">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.67 2H16.34C19.73 2 22 4.38 22 7.92V16.091C22 19.62 19.73 22 16.34 22H7.67C4.28 22 2 19.62 2 16.091V7.92C2 4.38 4.28 2 7.67 2ZM11.43 14.99L16.18 10.24C16.52 9.9 16.52 9.35 16.18 9C15.84 8.66 15.28 8.66 14.94 9L10.81 13.13L9.06 11.38C8.72 11.04 8.16 11.04 7.82 11.38C7.48 11.72 7.48 12.27 7.82 12.62L10.2 14.99C10.37 15.16 10.59 15.24 10.81 15.24C11.04 15.24 11.26 15.16 11.43 14.99Z" fill="currentColor"/>
            </svg>
          </button>
          <NuxtLink :to="`/admin/homePageSetting/${template.id}`">{{template.title}}</NuxtLink>
        </div>
        <div class="flex gap-2">
          <!--  Edit Banner  -->
          <button class="bg-warning/30 text-warning hover:bg-warning transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="selectedTemplate = template,showEditTemplateModal = true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.492 2.78906H7.753C4.678 2.78906 2.75 4.96606 2.75 8.04806V16.3621C2.75 19.4441 4.669 21.6211 7.753 21.6211H16.577C19.662 21.6211 21.581 19.4441 21.581 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82666 10.921L16.2997 3.44799C17.2307 2.51799 18.7397 2.51799 19.6707 3.44799L20.8877 4.66499C21.8187 5.59599 21.8187 7.10599 20.8877 8.03599L13.3787 15.545C12.9717 15.952 12.4197 16.181 11.8437 16.181H8.09766L8.19166 12.401C8.20566 11.845 8.43266 11.315 8.82666 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.1641 4.60254L19.7301 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {DataTemplateDto, DataTemplateFilterData} from "~/models/mainPage/dataTemplate";
import {GetAllTemplates, SetActiveTemplate} from "~/services/mainPage.service";
import {ToastType} from "~/composables/useSwal";

definePageMeta({
  layout:'admin'
})

const loading = ref(false);

const showAddTemplateModal = ref(false);
const showEditTemplateModal = ref(false);

const selectedTemplate:Ref<DataTemplateDto | null> = ref(null);
const templates:Ref<DataTemplateFilterData[]> = ref([]);

const toast = useToast();

onMounted(async ()=>{
  await getData();
})

const getData = async () => {
  loading.value = true;

  const result = await GetAllTemplates({pageId:1,take:10,search:undefined});
  if(result.isSuccess){
    templates.value = result.data?.data ?? [];
  }

  loading.value = false;
}

const setActiveTemplate = async (templateIdToActive:number) => {
  const result = await SetActiveTemplate(templateIdToActive);
  if(result.isSuccess){
    await getData();
    toast.showToast('الگوی فعال با موفقیت تغییر کرد',ToastType.success,3000,true);
  }
  else{
    toast.showError(result.metaData);
  }
}

</script>