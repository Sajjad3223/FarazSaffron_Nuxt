<template>
  <div class="relative w-full flex flex-col gap-1">
    <label class="text-xs opacity-50 " :for="`property-${property.propertyId}`">{{property.title}}</label>
    <textarea v-if="property.propertyType == EPropertyType.متن_چند_خطی"
        :name="`property-${property.propertyId}`" :id="`property-${property.propertyId}`"
        v-model="value" @change="updateData" class="px-3 py-2 rounded-md border" :placeholder="property.hintValue"></textarea>
    <div v-else-if="property.propertyType == EPropertyType.موقعیت_مکانی" class="flex flex-col gap-1">
      <input type="text" class="px-3 py-2 rounded-md border font-light" placeholder="Latitude" dir="ltr">
      <input type="text" class="px-3 py-2 rounded-md border font-light" placeholder="Longitude" dir="ltr">
    </div>
    <div v-else-if="property.propertyType == EPropertyType.رنج">
      <div class="flex flex-col gap-1 w-full">
        <div class="grid grid-cols-3 gap-1">
          <input type="number" placeholder="حداقل" class="p-2 rounded border font-light" v-model="rangeValue.min">
          <input type="number" placeholder="حداکثر" class="p-2 rounded border font-light" v-model="rangeValue.max">
          <input type="number" placeholder="مقدار" class="p-2 rounded border font-light" v-model="rangeValue.value">
        </div>
        <div class="grid grid-cols-3 gap-1" v-if="false">
          <input type="color" class="w-full" v-model="rangeValue.rightColor">
          <input type="color" class="w-full" v-model="rangeValue.centerColor">
          <input type="color" class="w-full" v-model="rangeValue.leftColor">
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4" v-else-if="property.propertyType == EPropertyType.تاریخ">
      <base-g-select :options="monthOptions" v-model="dateValue.month"/>
      <base-inputs-text-input type="number" name="year" v-model="dateValue.year" place-holder="سال"/>
    </div>
    <input ref="input" v-else
        :type="getInputType()" :name="`property-${property.propertyId}`" :id="`property-${property.propertyId}`"
           v-model="value" @change="updateData" class="px-3 py-2 rounded-md border" :placeholder="property.hintValue">
  </div>
</template>

<script setup lang="ts">
import {type CAPropertyDto, EPropertyType} from "~/models/certificate/authenticatorDto";
import type {AddPropertyCommand} from "~/models/certificate/authenticatorCommands";
import {monthOptions} from "~/utilities/dateUtils";

const props = defineProps<{
  property:CAPropertyDto,
  modelValue:AddPropertyCommand
}>();

const emits = defineEmits(['update:modelValue','valueUpdated'])

const value = ref(props.modelValue?.value);
const input = ref();
const rangeValue = reactive({
  min:null,
  max:null,
  value:null,
  leftColor:'#FB1624',
  centerColor:'#FFDE30',
  rightColor:'#07D263',
});
const dateValue = reactive({
  day:1,
  month:1,
  year:1400
});


onMounted(()=>{
  if(props.property.propertyType == EPropertyType.رنج){
    if(!props.modelValue.value) return;
    const data = JSON.parse(props.modelValue.value);
    rangeValue.min = data.min;
    rangeValue.max = data.max;
    rangeValue.value = data.value;
    rangeValue.leftColor = data.leftColor;
    rangeValue.centerColor = data.centerColor;
    rangeValue.rightColor = data.rightColor;
  }
  if(props.property.propertyType == EPropertyType.تاریخ){
    if(!props.modelValue?.value) return;
    try {
      const date = JSON.parse(props.modelValue!.value!);
      if(!date) return;
      dateValue.day = date.day;
      dateValue.month = date.month;
      dateValue.year = date.year;
    }
    catch{
      console.log("Couldn't parse Date value");
    }
  }
})

watch(
    props.modelValue,
    (val)=>setValue(val)
)

watch(
    rangeValue,
    ()=>{
      const json = JSON.stringify(rangeValue);
      const data = {
        propertyId:props.property.id,
        file:null,
        value:json,
        propertyType:props.property.propertyType
      } as AddPropertyCommand;
      emits('update:modelValue',data)
    }
)

watch(
    dateValue,
    ()=>{
      const json = JSON.stringify(dateValue);
      const data = {
        propertyId:props.property.id,
        file:null,
        value:json,
        propertyType:props.property.propertyType
      } as AddPropertyCommand;
      emits('update:modelValue',data)
    }
)

const setValue = (val:any)=>{
  value.value = val;
  if(props.property.propertyType == EPropertyType.رنج)
    rangeValue = JSON.parse(val);
}

const updateData = ()=>{
  emits('update:modelValue',{
    propertyId:props.property.id,
    file: getInputType() == 'file' ? input.value.files[0] : null,
    value:getInputType() == 'file' ? null :value.value,
    propertyType:props.property.propertyType
  } as AddPropertyCommand);
}

const getInputType = () => {
  switch (props.property.propertyType){
    case EPropertyType.تصویر:
      return 'file';
    case EPropertyType.ویدئو:
      return 'file';
    case EPropertyType.فایل:
      return 'file';
    case EPropertyType.تاریخ_زمان:
      return 'datetime-local';
    case EPropertyType.تاریخ:
      return 'date';
    case EPropertyType.زمان:
      return 'time';
    case EPropertyType.لینک:
      return 'url';
    case EPropertyType.متن:
      return 'text';
    case EPropertyType.عدد:
      return 'number';
  }
  return 'text';
}
</script>