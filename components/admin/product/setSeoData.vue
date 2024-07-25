<template>
  <Form class="flex flex-col gap-4">
      <BaseGSeoData v-model="seoData" />
      <base-g-button type="submit" color="info" is-icon text-color="white" class="w-max mr-auto text-sm font-light" >
        ثبت نهایی
      </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import type {SeoData} from "~/models/seoData";
const seoData:Ref<SeoData> = ref();
</script>