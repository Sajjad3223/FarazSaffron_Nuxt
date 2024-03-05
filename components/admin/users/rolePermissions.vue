<template>
  <Form class="flex flex-col space-y-2">
    <base-f-select multi-select label="لقب های کاربر" place-holder="دسترسی های مورد نیاز را فعال کنید" :data="permissions" />
    <base-f-button color="brand" >
      ثبت تغییرات
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">


import {EPermission} from "~/models/role/roleQueries";

const data = Object.keys(EPermission).filter(k=>isNaN(Number(k)));
const permissions = [...data].map((d:string)=>d.replaceAll('_',' '));
</script>