<script setup lang="ts">
import type {ProductDto} from "~/models/product/productQueries";
import {EPostType} from "~/models/EPostType";
import type {CommentDto, CommentFilterParams} from "~/models/comment/commentQueries";
import type {PaginationData} from "~/models/baseFilterResult";
import {GetComments} from "~/services/comment.service";
import {FillPaginationData} from "~/utilities/fillPaginationData";

const showComments = ref(false);
const props = defineProps<{
  product:ProductDto,
  postType:EPostType
}>();

const selectedComment:Ref<Number | null> = ref(null);
const pageId = ref(1);
const loading = ref(true);
const productComments:Ref<CommentDto[]> = ref([]);
const commentsPagination:Ref<PaginationData | null> = ref(null);
const commentsFilterParams:CommentFilterParams = reactive({
  postId:null,
  postType:props.postType,
  take:10,
  pageId:pageId,
  search:null,
  commentStatus:null,
  endDate:null,
  startDate:null,
  userRequested:null
})

onMounted(async ()=>{
  await loadComments();
})

const loadComments = async ()=>{
  loading.value = true;

  commentsFilterParams.postId = props.product.id;
  const commentsResult = await GetComments(commentsFilterParams);
  if(commentsResult.isSuccess){
    productComments.value = commentsResult.data?.data!;
    commentsPagination.value = FillPaginationData(commentsResult.data!);
  }

  loading.value = false;
}

const totalScore = computed(()=>{
  let scoreSum:number = 0;
  if(productComments.value.length > 0){
    productComments.value.forEach(c=>scoreSum += c.score);
  }
  return scoreSum;
})
</script>

<template>
  <button class="mt-8 px-6 py-2 w-full border rounded-lg flex items-center justify-between gap-8" v-if="!loading" @click="showComments = true">
    <span class="flex -space-x-4 space-x-reverse">
      <img src="~/assets/images/avatar.png" alt="avatar" class="w-8 border-2 border-white rounded-full" v-for="i in 3">
    </span>
    <span class="flex-1 ">
      <span>نظرات مردم</span>
      <span class="opacity-70 text-xs mr-2" v-if="productComments.length > 0">({{ productComments.length }} نظر)</span>
      <span class="opacity-70 text-xs mr-2" v-else>(بدون نظر)</span>
    </span>
    <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.5" d="M6 1L1 6.5L6 12" stroke="#0A0A0A" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
  <div class="bg-gray-200 w-full rounded-xl h-16 animate-pulse mt-8" v-else></div>
  <Transition enter-active-class="transition-opacity duration-200" leave-active-class="transition-opacity duration-200" enter-from-class="opacity-0" leave-to-class="opacity-0">
    <div class="absolute inset-0 -inset-x-4 px-6 flex flex-col space-y-2 bg-white" v-if="showComments">
      <button @click="showComments = false" class="self-start flex items-center gap-1 mb-4">
        <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.8" d="M1 10L5 5.5L1 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>بستن</span>
      </button>
      <div class="flex items-center justify-between w-full">
        <strong>نظرات</strong>
        <span>{{productComments.length}} نظر</span>
      </div>
      <ClientOnly>
        <Swiper class="w-full" :slides-per-view="1.4" auto-height :space-between="20"> <!--v-if="productComments.length > 0" :slides-per-view="1.4">-->
          <SwiperSlide v-for="comment in productComments" :key="comment">
            <ProductMobileComment :comment="comment" />
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </Transition>
</template>

<style scoped>

</style>