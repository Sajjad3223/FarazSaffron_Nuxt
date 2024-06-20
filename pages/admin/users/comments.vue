<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>نظرات</Title>
    </Head>
    <h4
        class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"
    >
      محصولات
    </h4>
    <div class="p-4 rounded-xl border dark:border-white/30 border-black/30 overflow-hidden">
      <button class="w-full flex items-center justify-between" type="button" @click="showFilters = !showFilters">
        <strong class="text-xl dark:text-white">فیلتر محصولات</strong>
        <span class="dark:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
      <Transition enter-active-class="transition-opacity duration-300" enter-from-class="opacity-0" enter-to-class="opacity-70" leave-active-class="transition-opacity duration-300" leave-from-class="opacity-70" leave-to-class="opacity-0">
        <hr class="my-4" v-if="showFilters">
      </Transition>
      <Transition enter-active-class="transition-all duration-300" enter-from-class="max-h-0" enter-to-class="max-h-96" leave-active-class="transition-all duration-300" leave-from-class="max-h-96" leave-to-class="max-h-0">
        <Form class="grid grid-cols-3 mb-4 gap-4 items-end" v-if="showFilters">
          <base-f-input class="col-span-3" name="search" type="text" label="جستجو" place-holder="جستجو در عنوان یا اسلاگ" id="search" />
          <base-f-button class="col-span-2" color="primary" text-color="white">
            اعمال فیلتر
          </base-f-button>
          <base-f-button color="secondary" bordered text-color="responsive">
            حذف فیلتر
          </base-f-button>
        </Form>
      </Transition>
    </div>

    <base-f-divider :logo-divider="false" title="نظرات کاربران" />

    <div class=" w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto" >
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
          >
            <th class="px-4 py-3">پست</th>
            <th class="px-4 py-3">کاربر</th>
            <th class="px-4 py-3">متن</th>
            <th class="px-4 py-3">تاریخ ثبت</th>
            <th class="px-4 py-3">وضعیت</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
          >
          <template v-for="c in comments">
            <tr class="text-gray-700 dark:text-gray-400" >
              <td class="px-4">
                <NuxtLink :to="`/product/${c.postSlug}`" class="text-sm font-bold">
                  {{c.postTitle}}
                </NuxtLink>
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold text-nowrap">{{c.sender.fullName}}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm text-wrap max-w-[20vw] leading-relaxed">
                {{ c.text }}
              </td>
              <td class="px-4 py-3 text-sm">
                {{ c.persianDate }}
              </td>
              <td class="px-4 py-3 text-sm">
                <f-badge color="brandOrange" size="xs" fore-color="white" v-if="c.commentStatus == ECommentStatus.Published">منتشر شده</f-badge>
                <f-badge color="warning" size="xs" fore-color="black" v-if="c.commentStatus == ECommentStatus.Pending">در انتظار بررسی</f-badge>
                <f-badge color="danger" size="xs" fore-color="white" v-if="c.commentStatus == ECommentStatus.Rejected">رد شده</f-badge>
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button @click="PublishComment(c.id)"
                          class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-warning rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                          aria-label="Publish" title="انتشار نظر"
                  >
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                      <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      ></path>
                    </svg>
                  </button>
                  <button
                      class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                      aria-label="Edit"
                  >
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                      <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      ></path>
                    </svg>
                  </button>
                  <button title="رد نظر"
                      class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                      aria-label="Delete" @click="rejectComment(c.id)"
                  >
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                      <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </template>
          </tbody>
        </table>
      </div>
      <FPagination v-model="pageId" :pagination-data="paginationData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {type CommentDto, type CommentFilterParams, ECommentStatus} from "~/models/comment/commentQueries";
import {GetCommentsByAdmin, RejectComment, VerifyComment} from "~/services/comment.service";
import FBadge from "~/components/base/FBadge.vue";
import {ToastType, useToast} from "~/composables/useSwal";

definePageMeta({
  layout:'admin'
})

const showFilters = ref(false)
const showAddModal = ref(false)
const pageId = ref(1);
const comments:Ref<CommentDto[]> = ref([]);
const paginationData:Ref<PaginationData | null | undefined> = ref();
const toast = useToast();

const filterParams:CommentFilterParams = reactive({
  pageId:pageId.value,
  postType:null,
  postId:null,
  search:'',
  take:10,
  userRequested:null,
  startDate:null,
  endDate:null,
  commentStatus:null
})

watch(pageId,async ()=>await getData());

onMounted(async ()=>{
  await getData();
})

const getData = async () => {
  const result = await GetCommentsByAdmin(filterParams);
  if(result.isSuccess){
    comments.value = result.data?.data!;
    paginationData.value = FillPaginationData(result.data!);
  }
}

const PublishComment = async (commentId:number) =>{
  const result = await VerifyComment(commentId);
  if(result.isSuccess){
    await toast.showToast();
    await getData();
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0)
  }
}
const rejectComment = async (commentId:number) =>{
  const result = await RejectComment(commentId);
  if(result.isSuccess){
    await toast.showToast();
    await getData();
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0)
  }
}

</script>