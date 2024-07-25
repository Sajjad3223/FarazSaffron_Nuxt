<template>
  <div>
    <Form @submit="AddSpecifications" class="flex flex-col gap-4" v-show="step === 2" >
      <div class="grid grid-cols-2 gap-4">
        <base-inputs-text-input v-for="p in properties" :label="p.title" :place-holder="p.hintValue" />
      </div>
      <div class="flex items-center gap-4 w-max mr-auto">
        <button @click="showCreatePropertyModal = true" type="button" class="flex gap-2 items-center justify-center px-4 py-2 border rounded-xl border-dashed">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25733 4.1842L8.25732 12.3853M12.3857 8.25683L4.12891 8.25684" stroke="currentColor" stroke-linecap="round"/>
          </svg>
          <span class="text-sm font-light">افزودن ویژگی جدید</span>
        </button>
        <base-g-button type="submit" color="info" is-icon text-color="white" class="w-max mr-auto text-sm font-light" >
          ثبت و ادامه
        </base-g-button>
      </div>
    </Form>
    <base-g-modal title="افزودن ویژگی جدید" v-model="showCreatePropertyModal">
      <admin-properties-create-property @propertyCreated="showCreatePropertyModal = false,updateProperties()" />
    </base-g-modal>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import type {PropertyDto} from "~/models/product/productQueries";
import {GetProperties, SetSpecifications} from "~/services/product.service";
import type {ApiResponse} from "~/models/apiResponse";
import type {SetSpecificationsCommand} from "~/models/product/productCommands";
import {ToastType} from "~/composables/useSwal";

const props = defineProps<{
  step:number,
  productId:number,
}>();
const emits = defineEmits(['progressUpdated','propertiesSet'])

const isLoading = ref(false);
const showCreatePropertyModal = ref(false);
const properties:Ref<PropertyDto[]> = ref([]);
onMounted(async ()=>{
  await updateProperties();
})
const updateProperties = async ()=>{
  const result = await GetProperties({pageId:1,take:100,search:undefined});
  if(result.isSuccess){
    properties.value = result.data?.data ?? [];
  }
}

const AddSpecifications = async ()=>{
  isLoading.value = true;

  /*const result:ApiResponse<undefined> = await SetSpecifications({
    productId:props.productId,
    specifications:pecifications.value
  } as SetSpecificationsCommand);*/

  /*if(result.isSuccess){
    await toast.showToast(result.metaData.message);

  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }*/

  isLoading.value = false;
}
</script>