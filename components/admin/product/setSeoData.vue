<template>
  <Form class="flex flex-col gap-4" @submit="UpdateSeoData">
      <BaseGSeoData v-model="seoData" />
      <base-g-button :is-loading="isLoading" type="submit" color="info" is-icon text-color="white" class="w-max mr-auto text-sm font-light" >
        ثبت نهایی
      </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import type {SeoData} from "~/models/seoData";
import {SetSeoData} from '~/services/product.service'
import type {SetSeoDataCommand} from "~/models/product/productCommands";

const props = defineProps<{
  productId:number,
  step:number,
  productSeoData?:SeoData | null
}>();

const seoData:SeoData = reactive({
  metaTitle:props.productSeoData?.metaTitle,
  metaDescription:props.productSeoData?.metaDescription,
  metaKeyWords:props.productSeoData?.metaKeyWords,
  canonical:props.productSeoData?.canonical,
  indexPage:props.productSeoData?.indexPage,
  schema:props.productSeoData?.schema
});
watch(
    seoData,
    ()=>{
      const properties = Object.keys(seoData);
      let filledProps = 0;
      properties.forEach(p=>{
        if(seoData[p] != null && seoData[p] != '' && seoData[p] != 0) {
          filledProps++;
        }
      })
      const progress = (filledProps / properties.length) * 100;
      emits('updateProgress',progress,props.step);
    }
);

const emits = defineEmits(['updateProgress','seoDataSet']);

const isLoading = ref(false);

const toast = useToast();
const UpdateSeoData = async ()=>{
  isLoading.value = true;

  const result = await SetSeoData({
    productId:props.productId,
    seoData
  } as SetSeoDataCommand);
  if(result.isSuccess){
    toast.showToast();
    emits('seoDataSet');
  }else{
    toast.showError(result.metaData);
  }

  isLoading.value = false;
}
</script>