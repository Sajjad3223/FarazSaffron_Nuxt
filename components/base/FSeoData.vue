<script setup lang="ts">

</script>

<template>
<div>
  <base-f-divider :logo-divider="false" title="تنظیمات سئو" />
  <div class="grid grid-cols-2 gap-2">
    <base-f-input name="metaTitle" id="metaTitle" label="عنوان متا" place-holder="Meta Title" />
    <base-f-input class="row-span-2 h-full" name="metaDescription" id="metaDescription" label="توضیحات متا" place-holder="Meta Description" multi-line/>
    <base-f-input name="metaKeyWords" id="metaKeyWords" label="کلمات کلیدی" place-holder="Meta KeyWords" />
    <base-f-input name="canonical" id="canonical" label="تگ استاندارد" place-holder="canonical" />
    <base-f-input name="schema" id="schema" label="Schema" place-holder="schema" />
    <base-f-toggle label="ایندکس شود؟" />
  </div>
</div>
</template>

<style scoped>

</style>