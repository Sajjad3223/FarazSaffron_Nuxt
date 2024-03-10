<template>
  <Form class="flex flex-col space-y-2" v-if="!isLoading">
    <base-f-select multi-select label="لقب های کاربر" place-holder="دسترسی های مورد نیاز را فعال کنید" :data="permissionsOptions" :selected-data="selectedPermissions" />
    <base-f-button color="brand" >
      ثبت تغییرات
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">

import {GetRole} from "~/services/role.service";

const props = defineProps({
  roleId:{
    type:Number,
    required:true
  }
})

const isLoading = ref(false);

import {EPermission} from "~/models/role/roleQueries";
import type {SelectOption} from "~/models/selectOption";

const permissions = Object.entries(EPermission).map(t=>{
  return{
    id:t[1],
    title:t[0].replaceAll('_',' ')
  } as SelectOption
});
const permissionsOptions = permissions.splice(permissions.length / 2 , permissions.length);

const selectedPermissions:Ref<SelectOption[] | undefined> = ref([]);

onMounted(async ()=>{
  isLoading.value = true;

  const result = await GetRole(props.roleId);
  if(result.isSuccess){
    selectedPermissions.value = result.data?.permissions!.map(p=>{
      return {
        id:Number(p),
        title:EPermission[p].toString().replaceAll('_',' ')
      } as SelectOption
    })
  }

  isLoading.value = false;
})

</script>