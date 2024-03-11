<template>
  <Form action="" class="flex flex-col space-y-4">
    <div class="flex flex-col w-full space-y-2">
      <span class="font-bold mr-4">به این محصول امتیاز دهید</span>
      <div class="flex flex-col px-6 items-center">
        <input type="range" name="r" id="r" max="4" step="1" v-model="sendCommentData.score" class="w-full px-4 ">
        <div class="w-full flex justify-between">
          <span class="text-center text-xs w-6 text-nowrap overflow-visible">خیلی ضعیف</span>
          <span class="text-center text-xs w-6 text-nowrap overflow-visible ">ضعیف</span>
          <span class="text-center text-xs w-6 text-nowrap overflow-visible ">متوسط</span>
          <span class="text-center text-xs w-6 text-nowrap overflow-visible ">خوب</span>
          <span class="text-center text-xs w-6 text-nowrap overflow-visible ">عالی</span>
        </div>
      </div>
    </div>
    <hr>
    <base-f-input multi-line name="comment" id="comment" v-model="sendCommentData.content" label="نظر شما" place-holder="نظر خود را وارد کنید ..." is-required />
    <hr>
    <base-f-button class="bg-brandOrange w-full p-2 text-xl text-white text-center rounded-lg" @clicked="AddComment" :loading="isLoading" color="brand" text-color="white">
      ثبت نظر
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import {EPostType} from "~/models/EPostType";
import {SendComment} from "~/services/comment.service";
import type {SendCommentCommand} from "~/models/comment/commentCommands";
import {ToastType, useToast} from "~/composables/useSwal";

const props = defineProps<{
  postId:number,
  postType:EPostType,
  parentId?:number,
}>();

const sendCommentData:SendCommentCommand = reactive({
  postType:props.postType,
  postId:props.postId,
  parentId:props.parentId,
  content:'',
  score:2
})

const emits = defineEmits(['commentSubmitted']);

const isLoading = ref(false);
const toast = useToast();

const AddComment = async ()=>{
  isLoading.value = true;

  const result = await SendComment(sendCommentData);
  if(result.isSuccess){
    await toast.showToast();
    emits('commentSubmitted')
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}
</script>