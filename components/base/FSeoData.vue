

<template>
<div>
  <base-f-divider :logo-divider="false" title="تنظیمات سئو" />
  <div class="grid grid-cols-2 gap-2">
    <base-f-input name="metaTitle" id="metaTitle" label="عنوان متا" place-holder="Meta Title" v-model="seoData.metaTitle" @input="dataChanged"/>
    <base-f-input class="row-span-2 h-full" name="metaDescription" id="metaDescription" label="توضیحات متا" place-holder="Meta Description" multi-line v-model="seoData.metaDescription" @input="dataChanged"/>
    <base-f-input name="metaKeyWords" id="metaKeyWords" label="کلمات کلیدی" place-holder="Meta KeyWords" v-model="seoData.metaKeyWords" @input="dataChanged"/>
    <base-f-input name="canonical" id="canonical" label="تگ استاندارد" place-holder="canonical" v-model="seoData.canonical" @input="dataChanged"/>
    <base-f-input name="schema" id="schema" label="Schema" place-holder="schema" v-model="seoData.schema" @input="dataChanged"/>
    <base-f-toggle label="ایندکس شود؟" v-model="seoData.indexPage" @input="dataChanged"/>
  </div>
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