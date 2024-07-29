<template>
  <div class="relative w-full" >
<!--    <base-f-input :label="property.title" :place-holder="property.hintValue" :name="`key${property.id}`" :id="`key${property.id}`" v-model="propertyCommand.value"/>-->
    <base-inputs-text-input :name="`property-${property.id}`" :label="property.title" v-model="propertyCommand.value" :place-holder="property.hintValue" />
  </div>
</template>


<script setup lang="ts">
import type {ProductPropertyViewModel} from "~/models/product/productCommands";
import type {PropertyDto} from "~/models/product/productQueries";
import type {AddPropertyCommand} from "~/models/certificate/authenticatorCommands";
import {EPropertyType} from "~/models/certificate/authenticatorDto";

const props = defineProps<{
  modelValue:AddPropertyCommand,
  property:PropertyDto
}>();

const emit = defineEmits(['update:modelValue'])

const propertyCommand:AddPropertyCommand = reactive({
  propertyId:props.modelValue.propertyId,
  value:props.modelValue.value,
  propertyType:EPropertyType.متن,
  file:null
})

watch(
    propertyCommand,
    ()=>emit('update:modelValue', propertyCommand)
);

</script>