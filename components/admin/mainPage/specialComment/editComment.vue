<template>
  <form @submit.prevent="editComment">
    <div class="grid grid-cols-2 gap-4 mt-5">
      <input ref="image" type="file" name="image" required class="p-4">
      <base-g-input v-model="userName" name="userName" label="نام و نام خانوادگی" required />
      <base-g-input v-model="userJob" name="userJob" label="شغل" required />
      <base-g-input v-model="userScore" name="userScore" type="number" label="امتیاز" required />
      <base-g-input v-model="postId" name="postId" type="number" label="آیدی محصول" required />
      <base-g-input v-model="linkToDgKala" name="linkToDgKala" label="لینک نظر در دیجی کالا" />
      <base-g-input v-model="content" name="content" label="متن" required class="col-span-full" multi-line/>
    </div>
    <base-g-button w-full type="submit" :is-loading="loading">
      ویرایش دیدگاه
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import {EditSpecialComment} from '~/services/mainPage.service';
import type {SpecialComment} from "~/models/mainPage/dataTemplate";

const props = defineProps<{
  comment:SpecialComment,
  modelValue:boolean
}>();

const emits = defineEmits(['commentEdited'])

const loading = ref(false);
const image = ref();
const postId = ref(props.comment.postId);
const userName = ref(props.comment.userName);
const userJob = ref(props.comment.userJob);
const userScore = ref(props.comment.userScore);
const content = ref(props.comment.content);
const linkToDgKala = ref(props.comment.linkToDGKala);

const toast = useToast();

const editComment = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',props.comment.templateId.toString());
  formData.append('commentId',props.comment.id.toString());
  if(image.value != null)
    formData.append('image',image.value.files[0]);
  formData.append('postId',postId.value.toString());
  formData.append('userName',userName.value);
  formData.append('userJob',userJob.value);
  formData.append('userScore',userScore.value.toString());
  formData.append('content',content.value);
  if(linkToDgKala.value != '')
    formData.append('linkToDgKala',linkToDgKala.value!);

  const result = await EditSpecialComment(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('commentEdited');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>