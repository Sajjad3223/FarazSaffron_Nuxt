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
  <div class="grid grid-cols-3 h-12 gap-4">
    <div class="flex flex-col gap-1">
      <label for="title" class="font-light text-sm">طول</label>
      <div class="flex items-center relative">
        <input v-model="dimension.length" @input="updateData" type="text" class="w-full px-3 py-2 rounded-md focus:outline-none text-sm font-light" style="background-color: #F2F4F7">
        <span class="text-xs font-light opacity-70 absolute left-3 pointer-events-none select-none">
          میلی متر
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <label for="title" class="font-light text-sm">عرض</label>
      <div class="flex items-center relative">
        <input v-model="dimension.width" @input="updateData" type="text" class="w-full px-3 py-2 rounded-md focus:outline-none text-sm font-light" style="background-color: #F2F4F7">
        <span class="text-xs font-light opacity-70 absolute left-3 pointer-events-none select-none">
          میلی متر
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <label for="title" class="font-light text-sm">ارتفاع</label>
      <div class="flex items-center relative">
        <input v-model="dimension.height" @input="updateData" type="text" class="w-full px-3 py-2 rounded-md focus:outline-none text-sm font-light" style="background-color: #F2F4F7">
        <span class="text-xs font-light opacity-70 absolute left-3 pointer-events-none select-none">
          میلی متر
        </span>
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