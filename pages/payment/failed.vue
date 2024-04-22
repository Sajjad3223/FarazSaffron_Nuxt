<template>
  <div>
    Failed To pay <br>
    Result Code: {{route.query.verifyResCode}}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'new-layout'
})

const route = useRoute();

</script>