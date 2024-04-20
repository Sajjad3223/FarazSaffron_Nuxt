
<template>
<button @click="Payment" class="m-auto border rounded-xl p-8">
  Pay
</button>
</template>

<script setup lang="ts">

import {$fetch} from "ofetch";

const Payment = ()=>{
  $fetch('https://bpm.shaparak.ir/pgwchannel/enstartpay.mellat',{
    method:'POST',
    body:{
      terminalId:7582383,
      userName:'7582383',
      userPassword:'86061644',
      orderId:'1',
      amount:10000,
      localDate:'20240420',
      localTime:'084530',
      additionalData:'',
      callBackUrl:'https://gpsaffron.com/verify',
      payerId:'1',
      mobileNo:'09154222478'
    }
  })
}

</script>