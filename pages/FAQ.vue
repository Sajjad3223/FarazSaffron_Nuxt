<template>
  <div class="py-10 md:py-[150px] flex flex-col items-center justify-center">
    <div class="container mx-auto">
      <div class="flex flex-col items-center space-y-14">
        <h3 class="text-4xl font-bold">سوالات پر تکرار</h3>
        <ul class="md:w-5/6 flex flex-col space-y-5">
          <faq-question v-for="q in questions" :key="q.id" :question="q"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {QuestionDto} from "~/models/faq/questionDto";
import {GetQuestions} from "~/services/faq.service";

const router = useRouter();
const {data,pending} = await useAsyncData("FAQ",()=>GetQuestions());
const toast = useToast();
if(!data.value?.isSuccess){
  if(process.server){
    throw createError({statusCode:404,message:'Not Found'})
  }else{
    router.push('/404');
  }
}

const questions:Ref<QuestionDto[]> = ref(data.value?.data ?? []);

</script>