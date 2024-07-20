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
    <input ref="input" v-else
        :type="getInputType()" :name="`property-${property.propertyId}`" :id="`property-${property.propertyId}`"
           v-model="value" @change="updateData" class="px-3 py-2 rounded-md border" :placeholder="property.hintValue">
  </div>
</template>

<script setup lang="ts">
import {type CAPropertyDto, EPropertyType} from "~/models/certificate/authenticatorDto";
import type {AddPropertyCommand} from "~/models/certificate/authenticatorCommands";

const props = defineProps<{
  property:CAPropertyDto,
  modelValue:AddPropertyCommand
}>();

const emits = defineEmits(['update:modelValue','valueUpdated'])

const value = ref(props.modelValue?.value ?? null);
const input = ref();

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