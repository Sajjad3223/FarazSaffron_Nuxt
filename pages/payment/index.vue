
<template>
<button @click="Payment" class="m-auto border rounded-xl p-8">
  Pay
</button>

  <form action="" enctype="application/x-www-form-urlencoded"></form>

</template>

<script setup lang="ts">
import {FetchApi} from '~/utilities/CustomApiFetch';

const Payment = async ()=>{
  const result = await FetchApi<string>('/payment/payRequest',{
    method:'POST',
    body:{
      callbackUrl:'https://api.gpsaffron.com/api/Payment/verify',
      orderId:-5,
      price:10000
    }
  });

  if(result.isSuccess){
    const response:string[] = result.data?.split(',') ?? [];

    if(response[0] === '0'){
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://bpm.shaparak.ir/pgwchannel/startpay.mellat';
      form.enctype = 'application/x-www-form-urlencoded';
      const refId = document.createElement('input');
      refId.name = 'RefId';
      refId.id = 'RefId';
      refId.value = response[1];
      form.appendChild(refId);
      document.body.appendChild(form)
      form.submit();
    }
  }
}

</script>