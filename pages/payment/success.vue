<template>
  <div>
    Payed Successfully! <br>
    Order ID: {{route.query.orderId}}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'new-layout'
})

const route = useRoute();

</script>