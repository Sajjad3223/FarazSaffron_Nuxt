

<template>
  <div class="flex flex-col gap-4 items-start">
    <div class="w-full grid grid-cols-2 gap-4">
      <base-inputs-text-input name="metaTitle" id="metaTitle" label="عنوان متا" place-holder="Meta Title" v-model="seoData.metaTitle" @input="dataChanged"/>
      <base-inputs-multi-line-input class="row-span-2 h-full" name="metaDescription" id="metaDescription" label="توضیحات متا" place-holder="Meta Description" multi-line v-model="seoData.metaDescription" @input="dataChanged"/>
      <base-inputs-text-input name="metaKeyWords" id="metaKeyWords" label="کلمات کلیدی" place-holder="Meta KeyWords" v-model="seoData.metaKeyWords" @input="dataChanged"/>
      <base-inputs-text-input name="canonical" id="canonical" label="تگ استاندارد" place-holder="canonical" v-model="seoData.canonical" @input="dataChanged"/>
      <base-inputs-text-input name="schema" id="schema" label="Schema" place-holder="schema" v-model="seoData.schema" @input="dataChanged"/>
    </div>
    <base-f-checkbox label="ایندکس شود؟" v-model="seoData.indexPage" @input="dataChanged" />
  </div>
</template>

<script setup lang="ts">
import type {SeoData} from "~/models/seoData";

const props = defineProps<{
  modelValue:SeoData
}>();

const emit = defineEmits(['update:modelValue']);

const seoData:SeoData = reactive({
  metaTitle:props.modelValue?.metaTitle ?? '',
  metaDescription:props.modelValue?.metaDescription ?? '',
  metaKeyWords:props.modelValue?.metaKeyWords ?? '',
  canonical:props.modelValue?.canonical ?? '',
  schema:props.modelValue?.schema ?? '',
  indexPage:props.modelValue?.indexPage
})

const dataChanged = ()=>{
  emit('update:modelValue',seoData);
}

</script>