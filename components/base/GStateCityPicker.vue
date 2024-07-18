<template>
<div class="w-full grid grid-cols-2 gap-4">
  <div class="relative flex items-center">
    <select name="state" id="state" @change="stateSelected" v-model="state"
          class="w-full appearance-none rounded-md 2xl:rounded-lg bg-[#FAFAFA] border px-2 2xl:px-4 py-2 2xl:py-3 text-sm 2xl:text-base font-light focus:ring-none focus:outline-black/20">
    <option :value="s.id" v-for="s in states">{{s.name}}</option>
  </select>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-2 2xl:left-3">
      <g opacity="0.5">
        <path d="M11.0832 4.95831L6.99984 9.04165L2.9165 4.95831" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  </div>
  <div class="relative flex items-center">
    <select name="city" id="city" @change="citySelected" v-model="city"
          class="w-full appearance-none rounded-md 2xl:rounded-lg bg-[#FAFAFA] border px-2 2xl:px-4 py-2 2xl:py-3 text-sm 2xl:text-base font-light focus:ring-none focus:outline-black/20">
    <option :value="c.id" v-for="c in cities">{{c.name}}</option>
  </select>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-2 2xl:left-3">
      <g opacity="0.5">
        <path d="M11.0832 4.95831L6.99984 9.04165L2.9165 4.95831" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  </div>
</div>
</template>

<script setup lang="ts">
import type {CityDto, StateDto} from "~/models/stateDto";

const props = withDefaults(defineProps<{
  state?:string,
  city?:string
}>(),{
  state:'',
  city:''
});

const states:Ref<StateDto[]> = ref([]);
const cities:Ref<CityDto[]> = ref([]);

const state = ref(1);
const city = ref(1);

const selectedState:Ref<string | null> = ref('');
const selectedCity:Ref<string | null> = ref('');

const emits = defineEmits(['valueUpdated']);

onMounted(async ()=>{
  states.value = await $fetch<StateDto[]>('https://iran-locations-api.ir/api/v1/fa/states', {method: 'GET'});
  if(props.state != ''){
    const stateId = states.value?.find(s=>s.name == props.state)?.id;
    state.value = stateId;
    cities.value = await $fetch<CityDto[]>('https://iran-locations-api.ir/api/v1/fa/cities?state_id='+stateId, {method: 'GET'});
    if(props.city != ''){
      const cityId = cities.value?.find(c=>c.name == props.city)?.id;
      city.value = cityId;
    }
  }
})

const stateSelected = async ($event)=>{
  const stateId = $event.target.value;
  cities.value = await $fetch<CityDto[]>('https://iran-locations-api.ir/api/v1/fa/cities?state_id='+stateId, {method: 'GET'});
  selectedState.value = $event.target.selectedOptions[0].text;
  selectedCity.value = cities.value[0].name;
  emits('valueUpdated',{state:selectedState.value,city:selectedCity.value})
}
const citySelected = async ($event)=>{
  selectedCity.value = $event.target.selectedOptions[0].text;
  emits('valueUpdated',{state:selectedState.value,city:selectedCity.value})
}
</script>