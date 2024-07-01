<template>
  <div class="relative flex items-center gap-4" >
    <base-f-input :label="property.title" :place-holder="property.hintValue" :name="`key${property.id}`" :id="`key${property.id}`" v-model="properties.value"/>
  </div>
</template>


<script setup lang="ts">
import type {ProductPropertyViewModel} from "~/models/product/productCommands";
import type {PropertyDto} from "~/models/product/productQueries";

const props = defineProps<{
  modelValue:ProductPropertyViewModel,
  property:PropertyDto
}>();

const emit = defineEmits(['update:modelValue'])

const properties:ProductPropertyViewModel = reactive({
  propertyId:props.modelValue.propertyId,
  value:props.modelValue.value
})

watch(
    properties,
    ()=>emit('update:modelValue', {propertyId:properties.propertyId,value:properties.value} as ProductPropertyViewModel)
);

</script>