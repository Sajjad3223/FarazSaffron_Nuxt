<template>
  <Form class="flex flex-col space-y-2" v-if="!isLoading" >
    <base-f-select ref="RolesSelect" multi-select label="لقب های کاربر" place-holder="لقب های مورد نیاز را فعال کنید" :data="roles" :selected-data="userRoles" />
    <base-f-button color="brand" text-color="white" @clicked="SetRoles" :loading="isLoading">
      ثبت تغییرات
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {GetRoles, GetRolesOfUser} from "~/services/role.service";
import type {SelectOption} from "~/models/selectOption";
import type {RoleFilterData} from "~/models/role/roleQueries";
import {SetUserRoles} from "~/services/user.service";
import type {AdminSetUserRolesCommand} from "~/models/users/userCommands";
import {ToastType} from "~/composables/useSwal";

const props = defineProps({
    userId:{
      type:Number,
      required:true
    }
  })

const emits = defineEmits(['operationFinished']);

  const roles:Ref<SelectOption[] | undefined> = ref([]);
  const userRoles:Ref<SelectOption[]> = ref([]);
  const isLoading = ref(false);
  const RolesSelect = ref();
  const toast = useToast();

  onMounted(async ()=>{
    isLoading.value = true;

    const userRolesResult = await GetRolesOfUser(props.userId);
    const result = await GetRoles({take:100,pageId:1,search:''});

    if(userRolesResult.isSuccess){
      userRoles.value = userRolesResult.data!.map(r=> {
        return {
        id:r.id,
        title:r.title
      } as SelectOption
      });
    }
    if(result.isSuccess){
      roles.value = result.data?.data!.map(r=> {
        return {
          id:r.id,
          title:r.title
        } as SelectOption
      });
    }

    isLoading.value = false;
  })

const SetRoles = async ()=>{
  const selectedRoles:RoleFilterData[] = RolesSelect.value?.getSelectedItems()?.value;
  const roleIds = selectedRoles.map(r=>r.id);

  const result = await SetUserRoles({
    userId:props.userId,
    roleIds:roleIds
  } as AdminSetUserRolesCommand);
  if(result.isSuccess){
    await toast.showToast();
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  emits('operationFinished');
}
</script>