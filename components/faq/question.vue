<template>
  <li class="bg-white rounded-2xl py-4 px-5 border border-[#818C92]/20 w-full flex flex-col items-stretch">
    <button @click="expandQuestion" class="flex py-2 items-center w-full justify-between">
      <span class="pointer-events-none text-sm">{{question.title}}</span>
      <svg class="pointer-events-none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665" stroke="#171717" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="desc max-h-0 transition-all duration-300 overflow-hidden" style="max-height: 0;">
      <div class="h-5"></div>
      <p class="text-xs text-[#3A3A3C]/90">
        {{question.answer}}
      </p>
    </div>
  </li>
</template>

<script setup lang="ts">
import type {QuestionDto} from "~/models/faq/questionDto";

const props = defineProps<{
  question:QuestionDto
}>()

const expandQuestion = ($event)=>{
  const questions = document.querySelectorAll('.desc');
  questions.forEach(q=>{
    q.style.removeProperty('max-height');
  });

  let currentDesc = $event.target.parentElement.querySelector('.desc');
  if(currentDesc.getBoundingClientRect().height > 0)
    currentDesc.style.removeProperty('max-height');
  else
    currentDesc.style.maxHeight = '70px';
}
</script>