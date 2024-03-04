<template>
  <div class="flex flex-col space-y-4">
    <span class="dark:text-white text-sm font-light">محدوده قیمت</span>
    <div class="range-input">
      <input type="range"
             class="min-range"
             min="0"
             max="100"
             v-model="valueData.minValue"
             step="1">
      <input type="range"
             class="max-range"
             min="0"
             max="100"
             v-model="valueData.maxValue"
             step="1">
    </div>
    <div class="grid grid-cols-2 gap-2">
      <base-f-input type="number" place-holder="حداقل: 0" v-model="valueData.minValue" />
      <base-f-input type="number" place-holder="حداکثر: 999" v-model="valueData.maxValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
const valueData = reactive({
  minValue: 0,
  maxValue: null
})

</script>

<style scoped >

/* Remove Arrows/Spinners */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.range-input {
  position: relative;
}

.range-input input {
  position: absolute;
  width: 100%;
  height: 1px;
  background: none;
  top: -5px;
  pointer-events: none;
  cursor: pointer;
  -webkit-appearance: none;
}
.range-input input:first-child {
  background: white;
}

/* Styles for the range thumb in WebKit browsers */
input[type="range"]::-webkit-slider-thumb {
  height: 18px;
  width: 18px;
  border-radius: 70%;
  background: #555;
  pointer-events: auto;
  -webkit-appearance: none;
}
</style>