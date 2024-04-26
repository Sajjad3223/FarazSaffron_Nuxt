
<template>
  <label for="orderId">Order ID:</label>
  <input type="number" v-model="orderId" name="orderId" id="orderId" placeholder="orderId">
<button @click="Payment" class="m-auto border rounded-xl p-8">
  Pay
</button>

</template>

<script setup lang="ts">
import {FetchApi} from '~/utilities/CustomApiFetch';

const orderId = ref(0);

const Payment = async ()=>{
  const result = await FetchApi<string>('/payment/payRequest',{
    method:'POST',
    body:{
      callbackUrl:'https://api.gpsaffron.com/api/Payment/verify',
      orderId:orderId.value,
      price:10000
    }
  });

  if(result.isSuccess && result.data != ''){
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://bpm.shaparak.ir/pgwchannel/startpay.mellat';
      form.enctype = 'application/x-www-form-urlencoded';
      const refId = document.createElement('input');
      refId.name = 'RefId';
      refId.id = 'RefId';
      refId.value = result.data!;
      form.appendChild(refId);
      document.body.appendChild(form)
      form.submit();
  }
}

</script>