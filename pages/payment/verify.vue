<script setup lang="ts">

import {FetchApi} from "~/utilities/CustomApiFetch";

const route = useRoute();

onMounted( async ()=>{
  const result = await FetchApi('/payment/verify',{
    method:'POST',
    body:{
      RefId: route.query.RefId,
      ResCode: route.query.ResCode,
      SaleOrderId: Number(route.query.SaleOrderId?.toString()),
      CardHolderInfo: null,
      CardHolderPan: null,
      FinalAmount: 10000
    }
  });

  console.log(result)
})
</script>

<template>

</template>

<style scoped>

</style>