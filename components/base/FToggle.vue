<template>
  <label class="switch flex items-center">
    <input type="checkbox" hidden>
    <span class="switch__wrapper">
      <span class="switch__toggle"></span>
    </span>
    <span class="mr-2 dark:text-white">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  label:{
    type:String
  }
})
</script>

<style scoped lang="scss">

.switch {
  margin: auto;
  cursor: pointer;

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 2rem;
    border: 2px solid #F04623;
    border-radius: 99rem;
    transform-origin: left center;
    animation: checked__wrapper 430ms ease-in forwards;
    mix-blend-mode: lighten;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid #000;
      border-radius: inherit;
      transform-origin: inherit;
      animation: inherit;
      mix-blend-mode: inherit;
    }

    &::before {
      border-color: rgb(0, 255, 0);
      animation-delay: 50ms;
    }

    &::after {
      border-color: rgb(0, 0, 255);
      animation-delay: 75ms;
    }
  }

  &__toggle {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 99rem;
    box-shadow: inset 0 0 0 2px #fff;
    transform-origin: inherit;
    animation: checked__toggle 430ms ease-in forwards;
  }

  input:active + &__wrapper &__toggle {
    width: 1.6rem;
  }

  input:checked + &__wrapper {
    transform-origin: right center;
    animation-name: checked__wrapper--r;
  }

  input:checked + &__wrapper &__toggle {
    background: #fff;
    animation-name: checked__toggle--r;
  }
}

@keyframes checked__wrapper {
  0%,
  45%,
  100% {
    transform: rotateY(0deg);
  }
  48% {
    transform: translateX(-0.1rem);
    filter: blur(0);
  }
  55% {
    transform: rotateZ(-10deg);
    filter: blur(1px);
  }

  65% {
    transform: rotateZ(5deg);
  }
}

@keyframes checked__wrapper--r {
  0%,
  45%,
  100% {
    transform: rotateY(0deg);
  }
  48% {
    transform: translateX(calc(-1 * -0.1rem));
    filter: blur(0);
  }
  55% {
    transform: rotateZ(calc(-1 * -10deg));
    filter: blur(1px);
  }

  65% {
    transform: rotateZ(calc(-1 * 5deg));
  }
}

@keyframes checked__toggle {
  0% {
    background: #fff;
    transform: translateX(50%) scale(1.25, 1);
  }
  45% {
    background: #fff;
    transform: translateX(-75%) scale(1, 1);
  }
  50% {
    background: transparent;
    transform: translateX(-75%) scale(0.5, 1.1);
  }
  65% {
    transform: translateX(-75%) scale(1, 1);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes checked__toggle--r {
  0% {
    background: transparent;
    transform: translateX(calc(-1 * 50%)) scale(1.25, 1);
  }
  45% {
    background: transparent;
    transform: translateX(calc(-1 * -75%)) scale(1, 1);
  }
  50% {
    background: #fff;
    transform: translateX(calc(-1 * -75%)) scale(0.5, 1.1);
  }
  65% {
    transform: translateX(calc(-1 * -75%)) scale(1, 1);
  }
  100% {
    transform: translateX(calc(-1 * -50%));
  }
}
</style>