
<template>
  <Form @submit="editCode" class="grid grid-cols-2 gap-4 mt-5">
    <base-inputs-text-input v-model="editDiscountCommand.amountInPercent" type="number" name="amountInPercent" id="amountInPercent" label="درصد تخفیف" required/>
    <base-inputs-text-input v-model="editDiscountCommand.availableQuantity" type="number" name="availableQuantity" id="availableQuantity"  label="تعداد" required/>
    <div class="grid grid-cols-3 gap-2">
      <base-inputs-text-input v-model="editDiscountCommand.days" type="number" name="days" id="days"  label="روز" required/>
      <base-inputs-text-input v-model="editDiscountCommand.hours" type="number" name="hours" id="hours"  label="ساعت" required/>
      <base-inputs-text-input v-model="editDiscountCommand.minutes" type="number" name="minutes" id="minutes"  label="دقیقه" required/>
    </div>
    <base-inputs-text-input v-model="editDiscountCommand.justForUser" typ="number" name="justForUser" id="justForUser"  label="مخصوص کاربر"/>
    <div></div>
    <BaseGSelect :options="Object.values(EDiscountType).filter(t=>isNaN(t)).map(t=>{
            return {title:t,value:EDiscountType[t],image:null} as GSelectData
          })" label="نوع تخفیف" name="discountType" v-model="editDiscountCommand.discountType" />
    <base-g-button type="submit" :is-loading="loading" w-full class="col-span-full">
      ثبت تغییرات
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {type DiscountDto, EDiscountType} from "~/models/discount/discountQueries";
import type {GSelectData} from "~/models/gSelectData";
import {Form} from "vee-validate";
import type {EditDiscountCommand} from "~/models/discount/discountCommands";
import {EditDiscount} from "~/services/discount.service";

const props = defineProps<{discount:DiscountDto}>();
const emits = defineEmits(['discountUpdated']);

const dateDifference = (dateFinal:Date, dateInitial:Date,milliSeconds:number):number =>
{
  let difference = (dateFinal - dateInitial) / milliSeconds;
  return Math.round(difference);
};

const editDiscountCommand:EditDiscountCommand = reactive({
  discountId:props.discount.id,
  amountInPercent:props.discount.amountInPercent,
  availableQuantity:props.discount.availableQuantity,
  days:dateDifference(new Date(props.discount.expireTime),new Date(),86400000),
  minutes:0,
  hours:0,
  justForUser:props.discount.justForUser,
  discountType:props.discount.discountType
});

const toast = useToast();
const loading = ref(false);
const editCode = async ()=>{
  loading.value = true;
  const result = await EditDiscount(editDiscountCommand);
  if(result.isSuccess){
    toast.showToast();
    emits('discountUpdated');
  }
  else{
    toast.showError(result.metaData)
  }
  loading.value = false;
}

</script>
