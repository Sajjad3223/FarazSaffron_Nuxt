<template>
  <transition>
    <div class="container mx-auto">
      <base-f-navbar />
      <div id="overlay2"></div>

      <slot />

      <base-f-footer class="mt-48" />

    </div>
  </transition>
</template>

<script setup lang="ts">
useHead({
  link:[
    {rel:"stylesheet",href:"https://v1.fontapi.ir/css/VazirFD"},
    {rel:"stylesheet",href:"https://v1.fontapi.ir/css/Estedad"},
  ]
})
</script>

<style scoped>
#overlay2{
  position: fixed;
  inset: 0;
  z-index: -2;
  background: url("../assets/images/bgPattern.png") repeat;
  height: 400%;
  background-size: 900px;
  mix-blend-mode: overlay;
  opacity: 0.35;
}
</style>