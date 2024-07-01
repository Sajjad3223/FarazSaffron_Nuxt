<template>
  <div>
    <Form class="space-y-4 lg:p-4 overflow-y-auto max-h-[80vh]">
      <div class="grid grid-cols-2 gap-2 lg:gap-4">
        <select name="state" id="state" @change="stateSelected" class="border rounded-xl p-3" v-model="selectedState">
          <option :value="s.id" v-for="s in states">{{s.name}}</option>
        </select>
        <select name="city" id="city" @change="citySelected" class="border rounded-xl p-3" v-model="selectedCity">
          <option :value="s.id" v-for="s in cities">{{s.name}}</option>
        </select>
        <base-g-input label="خیابان" name="street" id="street" class="col-span-full" v-model="editAddressData.street" required/>
        <div class="grid grid-cols-2 gap-2 lg:gap-4">
          <base-g-input type="number" label="پلاک" name="plaque" id="plaque" v-model="editAddressData.plaque" required/>
          <base-g-input type="number" label="واحد" name="unit" id="unit" v-model="editAddressData.unit" required/>
        </div>
        <base-g-input label="کد پستی" name="postCode" id="postCode" v-model="editAddressData.postCode" required/>
      </div>
      <hr>
      <div class="grid grid-cols-2 gap-2 lg:gap-4">
        <base-g-input label="نام گیرنده" name="receiverFirstName" id="receiverFirstName" v-model="editAddressData.receiverFirstName" required/>
        <base-g-input label="نام خانوادگی گیرنده" name="receiverLastName" id="receiverLastName" v-model="editAddressData.receiverLastName" required/>
        <base-g-input label="شماره موبایل" name="receiverPhoneNumber" id="receiverPhoneNumber" v-model="editAddressData.receiverPhoneNumber" class="col-span-full" required/>
      </div>

      <base-g-button color="primary" w-full @click="AddAddress" :isLoading="isLoading" >
        ویرایش آدرس
      </base-g-button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import type {EditUserAddressCommand} from "~/models/users/userCommands";
import {ToastType} from "~/composables/useSwal";
import type {CityDto, StateDto} from "~/models/stateDto";
import type {AddressDto} from "~/models/users/userDto";
import {EditUserAddress} from "~/services/user.service";

const isLoading = ref(false);
const toast = useToast();

const emits = defineEmits(['addressEdited']);

const props = defineProps<{
  address:AddressDto
}>()

const editAddressData:EditUserAddressCommand = reactive({
  addressId:props.address.id,
  receiverFirstName: props.address.receiverFirstName,
  receiverLastName: props.address.receiverLastName,
  receiverPhoneNumber: props.address.receiverPhoneNumber,
  state: props.address.state,
  city: props.address.city,
  street: props.address.street,
  postCode: props.address.postCode,
  plaque: props.address.plaque,
  unit: props.address.unit
})

const states:Ref<StateDto[]> = ref([]);
const cities:Ref<CityDto[]> = ref([]);

const selectedState = ref(0);
const selectedCity = ref(0);

onMounted(async ()=>{
  states.value = await $fetch<StateDto[]>('https://iran-locations-api.ir/api/v1/fa/states', {method: 'GET'});
  selectedState.value = states.value?.find(s=>s.name == props.address.state)?.id;
  cities.value = await $fetch<CityDto[]>('https://iran-locations-api.ir/api/v1/fa/cities?state_id='+selectedState.value, {method: 'GET'});
  selectedCity.value = cities.value?.find(c=>c.name == props.address.city)?.id;
})

const stateSelected = async ($event)=>{
  const stateId = $event.target.value;
  editAddressData.state = states.value.find(s=>s.id == stateId)!.name;
  cities.value = await $fetch<CityDto[]>('https://iran-locations-api.ir/api/v1/fa/cities?state_id='+stateId, {method: 'GET'});
}
const citySelected = async ($event)=>{
  const cityId = $event.target.value;
  editAddressData.city = cities.value.find(c=>c.id == cityId)!.name;
}

const AddAddress = async () =>{
  isLoading.value = true;

  const result = await EditUserAddress(editAddressData);
  if(result.isSuccess){
    await toast.showToast();
    emits('addressEdited');
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}

</script>