<template>
  <div>
    <Head>
      <Title>تصاویر</Title>
    </Head>
    <base-f-divider :logo-divider="false" title="تصاویر">
<!--      <template #left>
        <base-f-button color="primary" @clicked="showCreatePropertyModal = true" text-color="white">
          ویژگی جدید
        </base-f-button>
      </template>-->
    </base-f-divider>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'admin'
})

onMounted(async ()=>{

})
</script>