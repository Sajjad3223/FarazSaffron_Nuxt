<template>
  <div class="flex flex-col" dir="ltr">
    <span class="dark:text-white text-sm font-light mb-4">محدوده قیمت</span>
    <div class="relative w-full h-[5px] z-[1] top-[3px]">
      <div ref="progress" id="progress" class="absolute bg-brandOrange h-[5px] rounded-full pointer-events-none"
           style="box-shadow: 0 0 5px 0 #F0462280;"></div>
    </div>
    <div class="range-input">
      <input type="range"
             class="min-range"
             :min="min"
             :max="max"
             id="min-range-slider"
             name="min-range-slider"
             v-model="valueData.minValue"
             step="1">
      <input type="range"
             class="max-range"
             :min="min"
             :max="max"
             id="max-range-slider"
             name="max-range-slider"
             v-model="valueData.maxValue"
             step="1">
    </div>
    <div class="grid grid-cols-2 gap-2 mt-4">
      <div class="relative flex items-center">
        <base-f-input type="number" name="min-range" id="min-range" place-holder="حداقل: 0" v-model="valueData.minValue" />
        <base-g-tooman class="absolute left-4 opacity-70" />
      </div>
      <div class="relative flex items-center">
        <base-f-input type="number" name="max-range" id="max-range" place-holder="حداکثر: 5,000,000" v-model="valueData.maxValue" />
        <base-g-tooman class="absolute left-4 opacity-70" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  min:number,
  max:number
}>();

const valueData:Ref<any> = ref({
  minValue: props.min,
  maxValue: props.max
})
const getValues = ()=> valueData;

const progress = ref();
const priceGap = 10

onMounted(()=>{
  const ranges = document.querySelectorAll('.range-input input');
  ranges.forEach(r=>{
    r.addEventListener('input',(e:any)=>{
      //@ts-ignore
      let minValue = parseInt(ranges[0].value),
          //@ts-ignore
          maxValue = parseInt(ranges[1].value);

      //@ts-ignore
      if((maxValue - minValue >= priceGap) && maxValue <= ranges[1].max){
        if(e.target.className === "min-range"){
          //@ts-ignore
          ranges[0].value = minValue;
          //@ts-ignore
          progress.value.style.left = ((minValue / ranges[1].max) * 100) + '%';
        }
        else{
          //@ts-ignore
          ranges[1].value = maxValue;
          //@ts-ignore
          progress.value.style.right =100-((maxValue / ranges[0].max) * 100) + '%';
        }
      }
      else{
        if(e.target.className === "min-range"){
          //@ts-ignore
          ranges[0].value = maxValue - priceGap;
          valueData.value.minValue = maxValue - priceGap;
        }else{
          //@ts-ignore
          ranges[1].value = minValue + priceGap;
          valueData.value.maxValue = minValue + priceGap;
        }
      }

    })
  })
  //@ts-ignore
  progress.value.style.left = ((ranges[0].value / ranges[1].max) * 100) + '%';
  //@ts-ignore
  progress.value.style.right =100-((ranges[1].value / ranges[0].max) * 100) + '%';
})

defineExpose({
  getValues
})

</script>

<style lang="scss">
/* Remove Arrows/Spinners */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.range-input {
  position: relative;
  height: 2px;
  border-radius: 5px;
  background-color: #EFEFEF;
}

.range-input input {
  position: absolute;
  width: 100%;
  height: 1px;
  background: none;
  pointer-events: none;
  cursor: pointer;
  -webkit-appearance: none;
  z-index: 2;
}

/* Styles for the range thumb in WebKit browsers */
input[type="range"]::-webkit-slider-thumb {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: white;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 5px 0 #8E8E8E40;
}

</style>