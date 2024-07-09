<script setup lang="ts">
import type {DimensionDto} from "~/models/product/dimensionDto";

const props = defineProps<{
  modelValue:DimensionDto
}>();

const emit = defineEmits(['update:modelValue']);

const dimension:DimensionDto = reactive({
  width:props.modelValue.width,
  length:props.modelValue.length,
  height:props.modelValue.height
});

const updateData = ()=>{
  emit('update:modelValue',dimension)
}
</script>

<template>
<div class="space-y-2">
  <span class=" text-sm">
    ابعاد محصول
  </span>
  <div class="grid grid-cols-3 h-12">
    <div class="relative flex items-stretch w-full">
      <label for="" class="absolute right-4 self-center text-sm opacity-50 pointer-events-none ">طول</label>
      <input type="number" v-model="dimension.length" @input="updateData"
             class=" outline-none px-16 rounded-r-lg w-full bg-gray-200  hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:border focus:border-brandOrange " dir="ltr">
      <label for="" class="absolute left-4 text-[10px] font-thin self-center opacity-50 pointer-events-none ">سانتی متر</label>
    </div>
    <div class="relative flex items-stretch w-full">
      <label for="" class="absolute right-4 self-center text-sm opacity-50 pointer-events-none ">عرض</label>
      <input type="number" v-model="dimension.width" @input="updateData"
             class="border-x dark:border-gray-900 outline-none px-16 w-full bg-gray-200  hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:border focus:border-brandOrange " dir="ltr">
      <label for="" class="absolute left-4 text-[10px] font-thin self-center opacity-50 pointer-events-none ">سانتی متر</label>
    </div>
    <div class="relative flex items-stretch w-full">
      <label for="" class="absolute right-4 self-center text-sm opacity-50 pointer-events-none ">ارتفاع</label>
      <input type="number" v-model="dimension.height" @input="updateData"
             class=" outline-none px-16 rounded-l-lg w-full bg-gray-200  hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:border focus:border-brandOrange " dir="ltr">
      <label for="" class="absolute left-4 text-[10px] font-thin self-center opacity-50 pointer-events-none ">سانتی متر</label>
    </div>
  </div>
</div>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>