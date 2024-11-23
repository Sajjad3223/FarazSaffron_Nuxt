<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center space-y-8 font-light text-sm mt-5 md:mt-0 md:translate-y-[200%]">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    <span>در حال بار‌گذاری صفحه</span>
  </div>
</template>

<style scoped>
.lds-ring {
  /* change color here */
  color: #FB7511;
  @apply translate-x-3 scale-75;
}
.lds-ring,
.lds-ring div {
  box-sizing: border-box;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 10px;
  border: 3px solid currentColor;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: currentColor transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>