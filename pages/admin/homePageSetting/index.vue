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
      <admin-main-page-create-template />
    </base-g-modal>

    <div class="flex flex-col space-y-5 mt-5" v-if="templates.length > 0">
      <div class="w-full dark:bg-white/10 dark:text-white rounded-lg p-4" v-for="template in templates">
        <NuxtLink :to="`/admin/homePageSetting/${template.id}`">{{template.title}}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {DataTemplateFilterData} from "~/models/mainPage/dataTemplate";
import {GetAllTemplates} from "~/services/mainPage.service";

definePageMeta({
  layout:'admin'
})

const showAddTemplateModal = ref(false);

const templates:Ref<DataTemplateFilterData[]> = ref([]);

onMounted(async ()=>{
  const result = await GetAllTemplates({pageId:1,take:10,search:undefined});
  if(result.isSuccess){
    templates.value = result.data?.data ?? [];
  }
})

</script>