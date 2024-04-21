<template>
  <div>
    Verifying ...
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'new-layout'
})

const route = useRoute();

onMounted(()=>{
  console.log(route.query)
})

</script>