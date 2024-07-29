<template>
  <div>
    <Form @submit="AddProperties" class="flex flex-col gap-4" v-show="step === 2" >
      <div class="grid grid-cols-2 gap-4">
        <product-properties-add v-for="(p,i) in properties" :key="p.id" v-model="propertiesViewModels[i]" :property="p" @update:modelValue="updateProgress"/>
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
import type {ProductPropertyDto, PropertyDto} from "~/models/product/productQueries";
import {GetProperties, SetProperties, SetSpecifications} from "~/services/product.service";
import type {ApiResponse} from "~/models/apiResponse";
import type {SetPropertiesCommand, SetSpecificationsCommand} from "~/models/product/productCommands";
import {ToastType} from "~/composables/useSwal";
import type {AddPropertyCommand} from "~/models/certificate/authenticatorCommands";

const props = defineProps<{
  step:number,
  productId:number,
  productProperties?:ProductPropertyDto[] | null
}>();
const emits = defineEmits(['updateProgress','propertiesSet'])

const isLoading = ref(false);
const showCreatePropertyModal = ref(false);
const properties:Ref<PropertyDto[]> = ref([]);
const propertiesViewModels:Ref<AddPropertyCommand[]> = ref([]);

onMounted(async ()=>{
  await updateProperties();
})

const updateProperties = async ()=>{
  const result = await GetProperties({pageId:1,take:100,search:undefined});
  if(result.isSuccess){
    properties.value = result.data?.data ?? [];
    propertiesViewModels.value = properties.value.sort((a,b)=> a.id - b.id).map(p=>{
      return {
        propertyId:p.id,
        value:props.productProperties?.find(pp=>pp.propertyId == p.id)?.value ?? null,
        file: null,
        propertyType:p.propertyType
      } as AddPropertyCommand
    })
  }
}


const updateProgress = ()=>{
  const propertiesCount = properties.value.length;
  let filledProps = 0;
  propertiesViewModels.value.forEach((p,i)=>{
    if(propertiesViewModels.value[i].value != null && propertiesViewModels.value[i] != '' && propertiesViewModels.value[i] != 0) {
      filledProps++;
    }
  })
  const progress = (filledProps / propertiesCount) * 100;
  emits('updateProgress',progress,props.step);
}

const toast = useToast();
const AddProperties = async ()=>{
  isLoading.value = true;

  const propertiesCommand = propertiesViewModels.value.filter(p=>p.value != null && p.value != '');

  const result = await SetProperties({
    entityId:props.productId,
    properties:propertiesCommand
  } as SetPropertiesCommand);

  if(result.isSuccess){
    await toast.showToast(result.metaData.message);
    emits('propertiesSet');
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}
</script>