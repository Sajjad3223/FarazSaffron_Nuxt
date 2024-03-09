<script setup lang="ts">
import type {DimensionDto} from "~/models/product/dimensionDto";

const props = defineProps<{
  modelValue:DimensionDto
}>();

const emit = defineEmits(['update:modelValue']);

const dimension:DimensionDto = reactive({
  width:0,
  length:0,
  height:0
});

const updateData = ()=>{
  emit('update:modelValue',dimension)
}
</script>

<template>
<div class="space-y-2">
  <span class="dark:text-white text-sm">
    ابعاد محصول
  </span>
  <div class="grid grid-cols-3 h-12">
    <div class="relative flex items-stretch w-full">
      <label for="" class="absolute right-4 self-center text-sm opacity-50 pointer-events-none dark:text-white">طول</label>
      <input type="number" v-model="dimension.length" @input="updateData"
             class=" outline-none px-16 rounded-r-lg w-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:border focus:border-brandOrange dark:text-white" dir="ltr">
      <label for="" class="absolute left-4 text-[10px] font-thin self-center opacity-50 pointer-events-none dark:text-white">سانتی متر</label>
    </div>
    <div class="relative flex items-stretch w-full">
      <label for="" class="absolute right-4 self-center text-sm opacity-50 pointer-events-none dark:text-white">عرض</label>
      <input type="number" v-model="dimension.width" @input="updateData"
             class="border-x dark:border-gray-900 outline-none px-16 w-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:border focus:border-brandOrange dark:text-white" dir="ltr">
      <label for="" class="absolute left-4 text-[10px] font-thin self-center opacity-50 pointer-events-none dark:text-white">سانتی متر</label>
    </div>
    <div class="relative flex items-stretch w-full">
      <label for="" class="absolute right-4 self-center text-sm opacity-50 pointer-events-none dark:text-white">ارتفاع</label>
      <input type="number" v-model="dimension.height" @input="updateData"
             class=" outline-none px-16 rounded-l-lg w-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 focus:border focus:border-brandOrange dark:text-white" dir="ltr">
      <label for="" class="absolute left-4 text-[10px] font-thin self-center opacity-50 pointer-events-none dark:text-white">سانتی متر</label>
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