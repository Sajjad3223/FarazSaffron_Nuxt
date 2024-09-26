<script setup lang="ts">
import {EFeedbackType} from "~/models/feedback/feedbackData";
import {CreateFeedback} from "~/services/feedback.service";

const props = defineProps<{
  modelValue:boolean
}>();

const emits = defineEmits(['update:modelValue'])

const loading = ref(false);
const feedbackValue:Ref<EFeedbackType | null> = ref(null);
const description = ref('');
const feedbackSent = ref(false);

const sendFeedback = async ()=>{
  loading.value = true;
  const result = await CreateFeedback({feedbackType:feedbackValue.value!,description:description.value});
  if(result.isSuccess){
    feedbackSent.value = true;
    setTimeout(()=>{
      emits('update:modelValue',false);
    },3000)
  }
  loading.value = false;
}

</script>

<template>
  <Transition name="popup">
    <div v-if="modelValue" class="bg-white/70 backdrop-blur-lg flex flex-col gap-5 items-center justify-center rounded-xl px-6 py-5 border border-[#818C92]/10 min-h-[220px] " style="box-shadow: 0 0 12px 0 rgba(0,0,0,0.1)">
      <div v-if="!feedbackSent" class="flex flex-col gap-5 items-center justify-center relative">
        <button class="absolute w-max h-max grid place-items-center right-0 top-0" @click="emits('update:modelValue',false)">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 0.5L0.5 13.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M0.5 0.5L13.5 13.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <span class="text-sm font-light">لطفا به تجربه خود با ما، امتیاز دهید</span>
        <div class="grid grid-cols-4 gap-4">
          <div @click="feedbackValue = EFeedbackType.Unhappy" :class="['border rounded-xl flex flex-col items-center justify-center gap-1 p-4 border-[#818C92]/20 hover:border-[#818C92]/70 transition-colors duration-300 cursor-pointer',{'border-[#FB7511]':feedbackValue == EFeedbackType.Unhappy}]">
            <img src="~/assets/images/emojies/sad.png" alt="sad" class="w-6">
            <span class="font-light text-xs">ضعیف</span>
          </div>
          <div @click="feedbackValue = EFeedbackType.Indifferent" :class="['border rounded-xl flex flex-col items-center justify-center gap-1 p-4 border-[#818C92]/20 hover:border-[#818C92]/70 transition-colors duration-300 cursor-pointer',{'border-[#FB7511]':feedbackValue == EFeedbackType.Indifferent}]">
            <img src="~/assets/images/emojies/indifferent.png" alt="indifferent" class="w-6">
            <span class="font-light text-xs">متوسط</span>
          </div>
          <div @click="feedbackValue = EFeedbackType.Happy" :class="['border rounded-xl flex flex-col items-center justify-center gap-1 p-4 border-[#818C92]/20 hover:border-[#818C92]/70 transition-colors duration-300 cursor-pointer',{'border-[#FB7511]':feedbackValue == EFeedbackType.Happy}]">
            <img src="~/assets/images/emojies/happy.png" alt="happy" class="w-6">
            <span class="font-light text-xs">خوب</span>
          </div>
          <div @click="feedbackValue = EFeedbackType.VeryHappy" :class="['border rounded-xl flex flex-col items-center justify-center gap-1 p-4 border-[#818C92]/20 hover:border-[#818C92]/70 transition-colors duration-300 cursor-pointer',{'border-[#FB7511]':feedbackValue == EFeedbackType.VeryHappy}]">
            <img src="~/assets/images/emojies/very-happy.png" alt="very-happy" class="w-6">
            <span class="font-light text-xs">عالی</span>
          </div>
        </div>
        <div v-if="feedbackValue == EFeedbackType.Unhappy" class="w-full">
          <textarea name="" id="" rows="3" class="w-full border rounded-lg bg-transparent py-2 px-3 text-xs font-light focus:outline-none resize-none" placeholder="دلیل نارضایتی شما چیست؟"></textarea>
        </div>
        <div class="flex items-center gap-4">
          <BaseGButton button-type="outline" color="secondary" is-icon custom-class="min-w-[100px] !rounded-lg text-xs font-light" @click="emits('update:modelValue',false)">
            فعلا نه
          </BaseGButton>
          <BaseGButton @click="sendFeedback" :is-loading="loading" is-icon custom-class="min-w-[100px] !rounded-lg text-xs font-light">
            ثبت
          </BaseGButton>
        </div>
      </div>
      <div v-else class="flex flex-col items-center justify-center gap-5 min-w-[300px]">
        <svg class="w-[100px] h-[100px]" width="249"  height="250" viewBox="0 0 249 250" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <ellipse cx="123" cy="124.5" rx="106" ry="106.5" fill="#38C157" fill-opacity="0.1" class="pulse delayed"/>
          <circle cx="123" cy="125" r="84" fill="#38C157" fill-opacity="0.15"  class="pulse"/>
          <circle cx="124.5" cy="126.5" r="60.5" fill="#38C157" />
          <path d="M102 125.238L116.839 140L148 109" stroke="white" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <h3 class="text-base font-light">بازخورد شما با موفقیت ثبت شد</h3>
      </div>
    </div>
  </Transition>
</template>

<style scoped>

.popup-enter-active,
.popup-leave-active{
  @apply transition-all duration-500;
}

.popup-enter-from,
.popup-leave-to{
  @apply translate-x-full opacity-0;
}

.pulse{
  animation: pulseAnim 0.5s infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;
}
.delayed{
  animation-delay: 0.2s;
}

@keyframes pulseAnim {
  0%{
    opacity:100%;
  }
  100%{
    opacity:20%;
  }
}
</style>