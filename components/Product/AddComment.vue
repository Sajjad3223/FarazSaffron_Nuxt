<template>
  <Form @submit="AddComment" class="flex flex-col space-y-4">
    <div class="flex flex-col w-full space-y-2">
      <span class="font-bold mr-4">به این محصول امتیاز دهید</span>
      <div class="rating space-x-2 space-x-reverse">
        <input value="5" name="rating" id="star5" type="radio" v-model="sendCommentData.score">
        <label for="star5"></label>
        <input value="4" name="rating" id="star4" type="radio" v-model="sendCommentData.score">
        <label for="star4"></label>
        <input value="3" name="rating" id="star3" type="radio" v-model="sendCommentData.score">
        <label for="star3"></label>
        <input value="2" name="rating" id="star2" type="radio" v-model="sendCommentData.score">
        <label for="star2"></label>
        <input value="1" name="rating" id="star1" type="radio" v-model="sendCommentData.score">
        <label for="star1"></label>
      </div>

    </div>
    <hr>
    <base-g-input multi-line name="comment" id="comment" v-model="sendCommentData.content" label="نظر شما" place-holder="نظر خود را وارد کنید ..." required />
    <hr>
    <base-g-button w-full class="bg-brandOrange w-full p-2 text-xl text-white text-center rounded-lg" :loading="isLoading" color="primary" text-color="white">
      ثبت نظر
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {EPostType} from "~/models/EPostType";
import {SendComment} from "~/services/comment.service";
import type {SendCommentCommand} from "~/models/comment/commentCommands";
import {ToastType, useToast} from "~/composables/useSwal";

const props = defineProps<{
  postId:number,
  postType:EPostType,
  parentId?:number,
  postTitle:string,
  postSlug:string
}>();

const sendCommentData:SendCommentCommand = reactive({
  postType:props.postType,
  postId:props.postId,
  parentId:props.parentId,
  content:'',
  score:3,
  postSlug:props.postSlug,
  postTitle:props.postTitle
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

<style scoped>
.rating {
  display: inline-block;
  margin: 0 auto;
}

.rating input {
  display: none;
}

.rating label {
  float: right;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
}

.rating label:before {
  content: '\2605';
  font-size: 40px;
}

.rating input:checked ~ label,
.rating label:hover,
.rating label:hover ~ label {
  color: #ffb907;
  transition: color 0.3s;
}

</style>