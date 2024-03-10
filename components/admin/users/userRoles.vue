<template>
  <Form class="flex flex-col space-y-2" v-if="!isLoading" @submit.prevent="SetRoles">
    <base-f-select ref="RolesSelect" multi-select label="لقب های کاربر" place-holder="لقب های مورد نیاز را فعال کنید" :data="roles" :selected-data="userRoles" />
    <base-f-button color="brand" text-color="white" >
      ثبت تغییرات
    </base-f-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {GetRoles, GetRolesOfUser} from "~/services/role.service";
import type {SelectOption} from "~/models/selectOption";

  const props = defineProps({
    userId:{
      type:Number,
      required:true
    }
  })

  const roles:Ref<SelectOption[] | undefined> = ref([]);
  const userRoles:Ref<SelectOption[]> = ref([]);
  const isLoading = ref(false);
  const RolesSelect = ref();

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
  console.log(RolesSelect.value.getSelectedItems());
}
</script>