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

    <base-g-modal title="تنظیم بنر بالا" v-model="showSetTopBannerModal">
      <admin-main-page-banners-set-top-banner :template-id="templateId"/>
    </base-g-modal>

    <base-g-modal title="افزودن بنر" v-model="showAddMainBannerModal">
      <admin-main-page-banners-add-main-banner :template-id="templateId"/>
    </base-g-modal>

    <div class="flex flex-col space-y-5 mt-12" v-if="template">
      <div class="dark:text-white grid grid-cols-3 gap-5">
        <div class="flex flex-col gap-2">
          <span class="opacity-50 text-sm">عنوان</span>
          <strong class="text-lg">{{template.title}}</strong>
        </div>
        <div class="flex flex-col gap-2">
          <span class="opacity-50 text-sm">دسته بندی اول</span>
          <strong class="text-lg">{{EOrderBy[template.firstItemSection]}}</strong>
        </div>
        <div class="flex flex-col gap-2">
          <span class="opacity-50 text-sm">دسته بندی دوم</span>
          <strong class="text-lg">{{EOrderBy[template.secondItemSection]}}</strong>
        </div>
        <div class="col-span-full mt-8">
          <div class="flex flex-col gap-2">
            <span class="opacity-50 text-sm">بنر بالای صفحه</span>
            <div class="relative overflow-hidden rounded-xl" v-if="template.topBanner">
              <img :src="`${SITE_URL}/banners/${template.topBanner.image.src}`"
                   :alt="template.topBanner.image.alt"
                   class="w-full bg-brandOrange">
              <button class="bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100 transition-all duration-300 bg-black absolute inset-0 grid place-items-center"
              @click="showSetTopBannerModal = true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-150">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3764 20.0279L18.1628 8.66544C18.6403 8.0527 18.8101 7.3443 18.6509 6.62299C18.513 5.96726 18.1097 5.34377 17.5049 4.87078L16.0299 3.69906C14.7459 2.67784 13.1541 2.78534 12.2415 3.95706L11.2546 5.23735C11.1273 5.39752 11.1591 5.63401 11.3183 5.76301C11.3183 5.76301 13.812 7.76246 13.8651 7.80546C14.0349 7.96671 14.1622 8.1817 14.1941 8.43969C14.2471 8.94493 13.8969 9.41792 13.377 9.48242C13.1329 9.51467 12.8994 9.43942 12.7297 9.29967L10.1086 7.21422C9.98126 7.11855 9.79025 7.13898 9.68413 7.26797L3.45514 15.3303C3.0519 15.8355 2.91395 16.4912 3.0519 17.1255L3.84777 20.5761C3.89021 20.7589 4.04939 20.8879 4.24039 20.8879L7.74222 20.8449C8.37891 20.8341 8.97316 20.5439 9.3764 20.0279ZM14.2797 18.9533H19.9898C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533Z" fill="white"/>
                </svg>
              </button>
            </div>
            <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
              <span>بنر بالای صفحه تنظیم نشده است</span>
              <base-g-button color="info" @click="showSetTopBannerModal = true">
                تنظیم بنر
              </base-g-button>
            </div>
          </div>
        </div>
        <div class="col-span-full mt-5">
          <div class="flex flex-col gap-2">
            <span class="opacity-50 text-sm">بنرهای اسلایدر</span>
            <div class="grid grid-cols-3 w-full gap-4" v-if="template.mainBanners.length > 0">
              <div>
                <img :src="`${SITE_URL}/images/banners/${b.image.src}`"
                     :alt="b.image.alt"
                     class="w-full" v-for="b in template.mainBanners" :key="b.id">
              </div>
            </div>
            <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
              <span>بنری اضافه نشده است</span>
              <base-g-button color="info" @click="showAddMainBannerModal = true">
                افزودن بنر
              </base-g-button>
            </div>
          </div>
        </div>
        <div class="col-span-full mt-5">
          <div v-if="template.honors.length > 0">
            <img :src="`${SITE_URL}/images/banners/${b.image.src}`"
                 :alt="b.image.alt"
                 class="w-full" v-for="b in template.honors" :key="b.id">
          </div>
          <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
            <span>افتخاراتی اضافه نشده است</span>
            <base-g-button color="info">
              افزودن افتخار
            </base-g-button>
          </div>
        </div>
        <div class="col-span-full mt-5">
          <div v-if="template.specialComments.length > 0">
            <img :src="`${SITE_URL}/images/banners/${b.image.src}`"
                 :alt="b.image.alt"
                 class="w-full" v-for="b in template.specialComments" :key="b.id">
          </div>
          <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
            <span>دیدگاهی اضافه نشده است</span>
            <base-g-button color="info">
              افزودن دیدگاه
            </base-g-button>
          </div>
        </div>
        <div class="col-span-full mt-5">
          <div v-if="template.blogPreviews.length > 0">
            <img :src="`${SITE_URL}/images/banners/${b.image.src}`"
                 :alt="b.image.alt"
                 class="w-full" v-for="b in template.blogPreviews" :key="b.id">
          </div>
          <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
            <span>پست مقاله ای اضافه نشده است</span>
            <base-g-button color="info">
              افزودن پست
            </base-g-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {DataTemplateDto, DataTemplateFilterData} from "~/models/mainPage/dataTemplate";
import {GetAllTemplates, GetTemplateByAdmin, SetTopBanner} from "~/services/mainPage.service";
import {EOrderBy} from "../../../models/product/EOrderBy";
import {SITE_URL} from "~/utilities/api.config";

definePageMeta({
  layout:'admin'
})

const route = useRoute();
const templateId = parseInt(route.params.templateId);

const template:Ref<DataTemplateDto | null> = ref(null);

const showSetTopBannerModal = ref(false);
const showAddMainBannerModal = ref(false);

onMounted(async ()=>{
  const result = await GetTemplateByAdmin(templateId);
  if(result.isSuccess){
    template.value = result.data ?? null;
  }
})

</script>