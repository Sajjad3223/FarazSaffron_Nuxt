<script setup lang="ts">
import {SITE_URL} from "~/utilities/api.config";
import type {SelectTagDto} from "~/models/product/productQueries";
import type {AddCertificateProductCommand} from "~/models/certificate/authenticatorCommands";
const props = defineProps<{
  product:SelectTagDto,
  modelValue:AddCertificateProductCommand
}>();
const emits = defineEmits(['update:modelValue']);
const count = ref(props.modelValue.count ?? 0);
watch(
    count,
    ()=>{
      emits('update:modelValue',{
        productId:props.product.id,
        count:count.value
      } as AddCertificateProductCommand)
    }
)
</script>

<template>
  <div class="flex flex-col items-center gap-2 p-2 rounded-xl">
    <span class="text-xs text-center font-light">{{product.title}}</span>
    <NuxtImg placeholder="/images/placeholder.jpeg" :src="`${SITE_URL}/product/images/${product.imageName}`" :alt="product.title" class="max-h-[100px] w-fit my-auto" />
    <BaseInputsTextInput label="تعداد" type="number" v-model="count" :name="`product-${product.id}`"/>
  </div>
</template>

<style scoped>

</style>