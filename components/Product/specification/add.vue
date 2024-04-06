<template>
  <div ref="row" class="relative flex items-center gap-4" >
    <base-f-input place-holder="عنوان" :name="`key${number}`" :id="`key${number}`" v-model="specification.key"/>
    <base-f-input place-holder="مقدار" :name="`value${number}`" :id="`value${number}`" v-model="specification.value"/>
    <button type="button" class="w-10 h-10 px-4 rounded-lg bg-danger text-white" @click.prevent="removeSpecification">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.17 14.83L14.83 9.17001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.83 14.83L9.17 9.17001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="absolute inset-0 bg-danger text-white rounded-lg flex items-center" v-if="interval">
      <button class="w-full" @click="removeInterval">
        بازگردانی
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import type {CreateSpecificationViewModel} from "~/models/product/productCommands";

const props = defineProps<{
  modelValue:CreateSpecificationViewModel,
  number:number
}>();

const emit = defineEmits(['update:modelValue'])

const specification:CreateSpecificationViewModel = reactive({
  key:props.modelValue.key,
  value:props.modelValue.value
})

watch(specification,()=>emit('update:modelValue', {key:specification.key,value:specification.value} as CreateSpecificationViewModel))

const row = ref();

const interval = ref();
const removeSpecification = () => {
  interval.value = setTimeout(()=>{
    row.value.remove();
  },3000)
}

const removeInterval = ()=>{
  clearInterval(interval.value);
  interval.value = null;
}
</script>