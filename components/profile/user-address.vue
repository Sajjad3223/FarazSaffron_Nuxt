

<template>
  <div>
    <Form class="space-y-4 lg:p-4 overflow-y-auto max-h-[80vh]">
      <div class="grid grid-cols-2 gap-2 lg:gap-4">
        <select name="state" id="state" @change="stateSelected" class="border rounded-xl p-3">
          <option :value="s.id" v-for="s in states">{{s.name}}</option>
        </select>
        <select name="city" id="city" @change="citySelected" class="border rounded-xl p-3">
          <option :value="s.id" v-for="s in cities">{{s.name}}</option>
        </select>
        <div class="col-span-full">
          <base-g-input label="خیابان" name="street" id="street" v-model="addAddressData.street" required/>
        </div>
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
        <div class="col-span-full">
          <base-g-input label="شماره موبایل" name="receiverPhoneNumber" id="receiverPhoneNumber" v-model="addAddressData.receiverPhoneNumber" required/>
        </div>
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
import type {CityDto, StateDto} from "~/models/stateDto";

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
  plaque: null,
  unit: null
})

const states:Ref<StateDto[]> = ref([]);
const cities:Ref<CityDto[]> = ref([]);

onMounted(async ()=>{
  states.value = await $fetch<StateDto[]>('https://iran-locations-api.ir/api/v1/fa/states', {method: 'GET'});
  addAddressData.state = states.value[0].name;
})

const stateSelected = async ($event)=>{
  const stateId = $event.target.value;
  addAddressData.state = states.value.find(s=>s.id == stateId)!.name;
  cities.value = await $fetch<CityDto[]>('https://iran-locations-api.ir/api/v1/fa/cities?state_id='+stateId, {method: 'GET'});
}
const citySelected = async ($event)=>{
  const cityId = $event.target.value;
  addAddressData.city = cities.value.find(c=>c.id == cityId)!.name;
}

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