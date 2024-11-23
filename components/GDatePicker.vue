<script setup lang="ts">
import {monthOptions} from "~/utilities/dateUtils";

const emits = defineEmits(['dateSelected','update:modelValue']);

const dateValue = reactive({
  day:1,
  month:5,
  year:1403
});

const dateSelected = ()=>{
  const date = new Date(dateValue.year,dateValue.month - 1,dateValue.day + 1);
  emits('dateSelected',date);
  emits('update:modelValue',date);
}

</script>

<template>
  <div class="flex flex-col gap-5 mt-5">
    <div class="flex flex-col w-full space-y-2">
      <label class="text-sm font-light">تاریخ تولید کالا</label>
      <div class="grid grid-cols-3 gap-4 w-full" >
        <base-inputs-text-input type="number" name="year" v-model="dateValue.day" place-holder="روز"/>
        <base-g-select :options="monthOptions" v-model="dateValue.month"/>
        <base-inputs-text-input type="number" name="year" v-model="dateValue.year" place-holder="سال"/>
      </div>
    </div>
    <BaseGButton w-full @click="dateSelected">
      انتخاب تاریخ
    </BaseGButton>
  </div>
</template>

<style scoped>

</style>