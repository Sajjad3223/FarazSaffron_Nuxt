<template>
  <Form class="flex flex-col space-y-2" v-if="!isLoading">
    <base-f-select ref="permissionSelect" multi-select label="لقب های کاربر" place-holder="دسترسی های مورد نیاز را فعال کنید" :data="permissionsOptions" :selected-data="selectedPermissions" />
    <base-f-button color="brand" @clicked="SetPermissions" :loading="isLoading">
      ثبت تغییرات
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">

import {GetRole, SetRolePermissions} from "~/services/role.service";
import {EPermission} from "~/models/role/roleQueries";
import type {SelectOption} from "~/models/selectOption";
import type {SetPermissionsCommand} from "~/models/role/roleCommands";
import {ToastType} from "~/composables/useSwal";

const props = defineProps({
  roleId:{
    type:Number,
    required:true
  }
})

const isLoading = ref(false);
const permissionSelect = ref();
const emits = defineEmits(['operationFinished']);
const toast = useToast();

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

const SetPermissions = async () =>{
  const checkedPermissions:SelectOption[] = permissionSelect.value.getSelectedItems().value;
  const selectedPermissions = checkedPermissions.map(p=>p.id);

  const result = await SetRolePermissions({
    roleId:props.roleId,
    permissions:selectedPermissions
  } as SetPermissionsCommand)
  if(result.isSuccess){
    await toast.showToast();
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  emits('operationFinished');
}

</script>