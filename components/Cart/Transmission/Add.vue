<template>
  <Form @submit="addTransmission" class="mt-5 grid grid-cols-2 gap-4">
    <BaseGStateCityPicker class="col-span-full" @value-updated="setStateCity" />
    <base-g-input name="weight" required v-model="command.weight" type="number" label="وزن بسته بندی (گرم)" />
    <base-g-input name="price" required v-model="command.price" type="number" label="هزینه ارسال (ریال)" />
    <div class="col-span-full">
      <base-g-button custom-class="col-span-full w-full" type="submit">
        ثبت هزینه
      </base-g-button>
    </div>
  </Form>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import type {CreateTransmissionCommand} from "~/models/cart/transmissionCommands";
import {CreateTransmission} from "~/services/cart.service";

const emits = defineEmits(['transmissionCreated']);

const command:CreateTransmissionCommand = reactive({
  state:'',
  city:'',
  weight:0,
  price:0
});

const isLoading = ref(false);
const toast = useToast();
const addTransmission = async ()=>{
  const result = await CreateTransmission(command);
  if(result.isSuccess){
    toast.showToast();
    emits('transmissionCreated');
  }
  else{
    toast.showError(result.metaData);
  }
}

const setStateCity = (value) => {
  command.state = value.state;
  command.city = value.city;
}

</script>