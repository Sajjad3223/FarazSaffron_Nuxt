<template>
  <div v-if="!loading">
    <button type="button" @click="payRequest" v-if="canPay" class="w-full flex items-center gap-4 p-2 border-2 rounded-xl hover:border-black/30 transition-colors duration-300">
      <span class="w-12 bg-[#9ef375] grid place-items-center rounded-lg aspect-square">
        <img src="~/assets/images/torob-pay.png" alt="torob pay" class="w-10 rounded-lg">
      </span>
      <span class="flex flex-col items-start gap-1">
        <span class="text-sm">{{ response.title_message }}</span>
        <span class="text-xs font-light opacity-70">{{ response.description }}</span>
      </span>
      <span class="mr-auto flex items-center px-3 py-2 rounded-lg bg-[#9ef375]">
        <span class="text-xs">کلیک کنید</span>
        <svg class="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.08" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
    <div v-else></div>
  </div>
  <div v-else class="w-full border-2 rounded-xl p-4 grid place-items-center">
    <GLoading2 />
  </div>
</template>

<script setup lang="ts">
import {IsEligible, TorobPayRequest} from "~/services/torobPay.service";

const props = defineProps<{
  amount:number
}>()

const canPay = ref(false);
const loading = ref(true);
const response = ref(null);

onMounted( async ()=>{
  const result = await IsEligible(props.amount);
  if(result.isSuccess){
    if(result.data?.successful && result.data?.response?.eligible){
      response.value = result.data.response;
      canPay.value = true;
    }
  }
  loading.value = false;
})

const cookie = useCookie('torobpay-payment');
const payRequest = async ()=>{
  loading.value = true;

  const result = await TorobPayRequest();
  if(result.isSuccess){
    if(result.data.successful){
      cookie.value = JSON.stringify(result.data.response);
      location.assign(result.data.response.paymentPageUrl);
    }
  }

  loading.value = false;
}
</script>

<style scoped>

</style>