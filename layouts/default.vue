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

</script>

<style scoped lang="scss">
#overlay2{
  position: fixed;
  inset: 0;
  z-index: -2;
  background: url("../assets/images/bgPattern.png") 0 0 / auto repeat;
  background-size: 900px;
  @media screen and (max-width: 450px) {
    background-size:600px;
  }
  opacity: 0.5;
  background-blend-mode: overlay;
  @media screen and (min-width: 500px) {
    mix-blend-mode: overlay;
    opacity: 0.3;
  }

}
</style>