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

    <div class="flex flex-col space-y-5 mt-5" v-if="template">
      <div class="dark:text-white">
        {{template}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {DataTemplateDto, DataTemplateFilterData} from "~/models/mainPage/dataTemplate";
import {GetAllTemplates, GetTemplateByAdmin} from "~/services/mainPage.service";

definePageMeta({
  layout:'admin'
})

const route = useRoute();
const templateId = parseInt(route.params.templateId);

const template:Ref<DataTemplateDto | null> = ref(null);

onMounted(async ()=>{
  const result = await GetTemplateByAdmin(templateId);
  if(result.isSuccess){
    template.value = result.data ?? null;
  }
})

</script>