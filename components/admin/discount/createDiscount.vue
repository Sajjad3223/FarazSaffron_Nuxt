
<template>
  <Form :validation-schema="discountSchema" @submit="defineCode" class="grid grid-cols-2 gap-4 mt-5">
    <base-inputs-text-input v-model="createDiscountCommand.amountInPercent" type="number" name="amountInPercent" id="amountInPercent" label="درصد تخفیف" required/>
    <base-inputs-text-input v-model="createDiscountCommand.availableQuantity" type="number" name="availableQuantity" id="availableQuantity"  label="تعداد" required/>
    <div class="grid grid-cols-3 gap-2">
      <base-inputs-text-input v-model="createDiscountCommand.days" type="number" name="days" id="days"  label="روز" required/>
      <base-inputs-text-input v-model="createDiscountCommand.hours" type="number" name="hours" id="hours"  label="ساعت" required/>
      <base-inputs-text-input v-model="createDiscountCommand.minutes" type="number" name="minutes" id="minutes"  label="دقیقه" required/>
    </div>
    <base-inputs-text-input v-model="createDiscountCommand.justForUser" typ="number" name="justForUser" id="justForUser"  label="مخصوص کاربر"/>
    <base-inputs-text-input v-model="createDiscountCommand.customCode" name="customCode" id="customCode" label="کد دلخواه (اختیاری)" required/>
    <BaseGSelect :options="Object.values(EDiscountType).filter(t=>isNaN(t)).map(t=>{
            return {title:t,value:EDiscountType[t],image:null} as GSelectData
          })" label="نوع تخفیف" name="discountType" v-model="createDiscountCommand.discountType" />
    <base-g-button type="submit" :is-loading="loading" w-full class="col-span-full">
      ساخت کد تخفیف
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {EDiscountType} from "~/models/discount/discountQueries";
import type {GSelectData} from "~/models/gSelectData";
import {Form} from "vee-validate";
import * as Yup from "yup";
import type {CreateDiscountCommand} from "~/models/discount/discountCommands";
import {CreateDiscount} from "~/services/discount.service";

const emits = defineEmits(['discountCreated']);

const discountSchema = Yup.object().shape({
  amountInPercent:Yup.number().required().min(5,'کد تخفیف نباید کمتر از 5 درصد باشد').max(100,'کد تخفیف نباید بیشتر از 100 درصد باشد'),
  availableQuantity:Yup.number().required().min(1,'تعداد کد تخفیف باید حداقل یک عدد باشد'),
});

const createDiscountCommand:CreateDiscountCommand = reactive({
  amountInPercent:0,
  availableQuantity:0,
  days:0,
  minutes:0,
  hours:0,
  justForUser:undefined,
  customCode:null,
  discountType:EDiscountType.همه
});

const toast = useToast();
const loading = ref(false);
const defineCode = async ()=>{
  loading.value = true;
  const result = await CreateDiscount(createDiscountCommand);
  if(result.isSuccess){
    toast.showToast();
    emits('discountCreated');
  }
  else{
    toast.showError(result.metaData)
  }
  loading.value = false;
}

</script>
