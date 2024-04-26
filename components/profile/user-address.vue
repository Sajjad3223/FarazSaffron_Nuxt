

<template>
  <div>
    <Form class="space-y-4 lg:p-4 overflow-y-auto max-h-[80vh]">
      <div class="grid grid-cols-2 gap-2 lg:gap-4">
        <base-g-input label="استان" name="state" id="state" v-model="addAddressData.state" required/>
        <base-g-input label="شهر" name="city" id="city" v-model="addAddressData.city" required/>
        <base-g-input label="خیابان" name="street" id="street" class="col-span-full" v-model="addAddressData.street" required/>
        <div class="grid grid-cols-2 gap-2 lg:gap-4">
          <base-g-input type="number" label="پلاک" name="plaque" id="plaque" v-model="addAddressData.plaque" required/>
          <base-g-input type="number" label="واحد" name="unit" id="unit" v-model="addAddressData.unit" required/>
        </div>
        <base-g-input label="کد پستی" name="postCode" id="postCode" v-model="addAddressData.postCode" required/>
      </div>
      <hr>
      <div class="grid grid-cols-2 gap-2 lg:gap-4">
        <base-g-input label="نام گیرنده" name="receiverFirstName" id="receiverFirstName" v-model="addAddressData.receiverFirstName" required/>
        <base-g-input label="نام خانوادگی گیرنده" name="receiverLastName" id="receiverLastName" v-model="addAddressData.receiverLastName" required/>
        <base-g-input label="شماره موبایل" name="receiverPhoneNumber" id="receiverPhoneNumber" v-model="addAddressData.receiverPhoneNumber" class="col-span-full" required/>
      </div>

      <base-g-button color="primary" w-full @click="AddAddress" :isLoading="isLoading" >
        ثبت آدرس جدید
      </base-g-button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {AddUserAddressCommand} from "~/models/users/userCommands";
import {AddUserAddress} from "~/services/user.service";
import {ToastType} from "~/composables/useSwal";

const isLoading = ref(false);
const toast = useToast();

const emits = defineEmits(['addressCreated']);

const addAddressData:AddUserAddressCommand = reactive({
  receiverFirstName: '',
  receiverLastName: '',
  receiverPhoneNumber: '',
  state: '',
  city: '',
  street: '',
  postCode: '',
  plaque: '',
  unit: ''
})

const AddAddress = async () =>{
  isLoading.value = true;

  const result = await AddUserAddress(addAddressData);
  if(result.isSuccess){
    await toast.showToast();
    emits('addressCreated');
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}

</script>