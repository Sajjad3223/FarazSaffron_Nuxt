<template>
<div class="grid grid-cols-4 my-12 gap-4 items-end">
  <base-f-button color="primary">
    دکمه
  </base-f-button>
  <base-f-button color="primary" is-link bordered text-color="white" to="/">
    لینک
  </base-f-button>
  <base-f-toggle />
  <base-f-checkbox v-model="checkBox" />
  <base-f-select multiSelect />
  <base-f-range class="col-span-2" />
  <base-f-dimension />
  <base-f-seo-data class="col-span-2" />
</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:"admin"
})

const checkBox = ref(false);
</script>
