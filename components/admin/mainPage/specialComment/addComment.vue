<template>
  <form @submit.prevent="addComment">
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
      ثبت دیدگاه
    </base-g-button>
  </form>
</template>

<script setup lang="ts">
import {AddToSpecialComments} from '~/services/mainPage.service';

const props = defineProps<{
  templateId:number,
  modelValue:boolean
}>();

const emits = defineEmits(['commentAdded'])

const loading = ref(false);
const image = ref();
const postId = ref(0);
const userName = ref('');
const userJob = ref('');
const userScore = ref(0);
const content = ref('');
const linkToDgKala = ref('');

const toast = useToast();

const addComment = async () =>{
  loading.value = true;

  const formData = new FormData();
  formData.append('templateId',props.templateId.toString());
  formData.append('image',image.value.files[0]);
  formData.append('postId',postId.value.toString());
  formData.append('userName',userName.value);
  formData.append('userJob',userJob.value);
  formData.append('userScore',userScore.value.toString());
  formData.append('content',content.value);
  if(linkToDgKala.value != '')
    formData.append('linkToDgKala',linkToDgKala.value);

  const result = await AddToSpecialComments(formData);
  if(result.isSuccess){
    toast.showToast();
    emits('commentAdded');
  }
  else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}
</script>