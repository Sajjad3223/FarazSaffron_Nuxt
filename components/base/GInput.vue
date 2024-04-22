<template>
  <div class="w-full relative flex items-center">
    <input v-model="value" :type="type"
           :class="['peer rtl input',{'input-error':errorValidationRtl},{'input-valid':successValidationRtl},{'disabled':disabled}]" :disabled="disabled"
           :required="required">
    <label for="">{{ label }}</label>
    <span>{{ placeHolder }}</span>
    <svg width="12" height="12" viewBox="0 0 12 12" class="icon-error" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="5.75" stroke="#F42020" stroke-width="0.5"/>
      <path
          d="M5.496 9V5.716H6.192V9H5.496ZM5.852 4.592C5.72667 4.592 5.61867 4.548 5.528 4.46C5.44 4.36933 5.396 4.26133 5.396 4.136C5.396 4.01067 5.44 3.90267 5.528 3.812C5.61867 3.72133 5.72667 3.676 5.852 3.676C5.93467 3.676 6.01067 3.69733 6.08 3.74C6.152 3.78267 6.20933 3.83867 6.252 3.908C6.29467 3.97467 6.316 4.05067 6.316 4.136C6.316 4.26133 6.27067 4.36933 6.18 4.46C6.08933 4.548 5.98 4.592 5.852 4.592Z"
          fill="#F42020"/>
    </svg>
    <svg width="12" height="12" viewBox="0 0 12 12" class="icon-success" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="5.75" fill="currentColor" stroke-width="0.5"/>
      <path
          d="M5.496 9V5.716H6.192V9H5.496ZM5.852 4.592C5.72667 4.592 5.61867 4.548 5.528 4.46C5.44 4.36933 5.396 4.26133 5.396 4.136C5.396 4.01067 5.44 3.90267 5.528 3.812C5.61867 3.72133 5.72667 3.676 5.852 3.676C5.93467 3.676 6.01067 3.69733 6.08 3.74C6.152 3.78267 6.20933 3.83867 6.252 3.908C6.29467 3.97467 6.316 4.05067 6.316 4.136C6.316 4.26133 6.27067 4.36933 6.18 4.46C6.08933 4.548 5.98 4.592 5.852 4.592Z"
          fill="white"/>
    </svg>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(defineProps<{
    modelValue:any,
    required:boolean,
    label:string,
    placeHolder:string,
    type:'text'|'email'|'number'|'password',
    disabled:boolean
  }>(),{
    type:'text',
    disabled:false
  });

  const value = ref('');

</script>

<style scoped>
/* Inputs */
.input {
  @apply form-input transition-all duration-200;
  width: 100%;
  min-height: 50px;
  outline: none;
  border-radius: 0.8rem;
  border: 1px solid #BABABA;
  font-weight: lighter;
  font-size: 14px;

  &.rtl {
    direction: rtl;
  }

  &.disabled {
    @apply bg-[#F5F5F5] opacity-50 cursor-not-allowed;
    & + label {
      background-color: transparent !important;
      opacity: 50%;
    }
  }

  &:hover {
    box-shadow: 0 5px 5px 0 #BABABA40;
  }

  & + label {
    @apply absolute left-4 text-sm font-light font-[montserrat] text-opacity-70 px-2 bg-transparent transition-all duration-200 rounded-full pointer-events-none;

  }

  &.rtl + label {
    @apply font-vazir left-auto right-4;
  }

  &:focus, &:valid {
    @apply border-brandOrange ring-transparent;
    & + label {
      @apply text-brandOrange font-medium bg-white -translate-y-full top-2 text-xs;
    }
  }

  & + label + span {
    color: var(--danger);
    @apply absolute text-xs bottom-0 translate-y-full p-2 font-light hidden;
  }

  & + label + span + svg.icon-error {
    @apply absolute hidden right-4 scale-150;
  }

  & + label + span + svg + svg.icon-success {
    @apply absolute hidden right-4 scale-150;
  }

  &.rtl + label + span {
    @apply right-2;
  }

  &.rtl + label + span + svg.icon-error {
    @apply right-auto left-4;
  }

  &.rtl + label + span + svg + svg.icon-success {
    @apply right-auto left-4;
  }

  &-error {
    border-color: var(--danger) !important;

    & + label {
      color: var(--danger) !important;
      font-weight: normal;
    }

    & + label + span {
      @apply block;
    }

    & + label + span + svg.icon-error {
      @apply block;
    }
  }

  &-valid {
    border-color: var(--success) !important;

    & + label {
      color: var(--success) !important;
      font-weight: normal;
    }

    & + label + span + svg + svg.icon-success {
      @apply block;
      color: var(--success);
    }
  }
}
</style>