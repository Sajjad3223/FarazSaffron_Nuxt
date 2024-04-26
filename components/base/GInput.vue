<template>
  <div class="w-full relative flex items-center mb-4">
    <input :type="type" @input="onChanged"
           :class="['peer rtl input',{'input-error':errorMessage},{'input-valid':!errorMessage && inputValue != '' },{'disabled':disabled}]" :disabled="disabled" :value="inputValue"
           :required="required" v-if="!showPassword">
    <input type="text" :required="required"
           :class="['peer rtl input',{'input-error':errorMessage},{'input-valid':!errorMessage && inputValue != ''},{'disabled':disabled}]" v-if="type === 'password' && showPassword" :value="inputValue">
    <label for="">{{ label }}</label>
    <transition enter-active-class="duration-200 transition-opacity" enter-from-class="opacity-0" enter-to-class="opacity-100"
                leave-active-class="duration-200 transition-opacity" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <span v-if="errorMessage">{{errorMessage}}</span>
    </transition>
    <button v-if="type === 'password'" class="absolute left-4 opacity-30" type="button" @click="showPassword = !showPassword">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="showPassword" >
        <g clip-path="url(#clip0_769_6269)">
          <path d="M11.9987 3C17.3907 3 21.8767 6.88 22.8177 12C21.8777 17.12 17.3907 21 11.9987 21C6.60669 21 2.12069 17.12 1.17969 12C2.11969 6.88 6.60669 3 11.9987 3ZM11.9987 19C14.0382 18.9996 16.0171 18.3068 17.6115 17.0352C19.206 15.7635 20.3216 13.9883 20.7757 12C20.3199 10.0133 19.2036 8.24 17.6093 6.97003C16.015 5.70005 14.037 5.00853 11.9987 5.00853C9.96038 5.00853 7.98238 5.70005 6.38806 6.97003C4.79375 8.24 3.67745 10.0133 3.22169 12C3.67578 13.9883 4.79136 15.7635 6.38583 17.0352C7.9803 18.3068 9.95922 18.9996 11.9987 19V19ZM11.9987 16.5C10.8052 16.5 9.66062 16.0259 8.81671 15.182C7.97279 14.3381 7.49869 13.1935 7.49869 12C7.49869 10.8065 7.97279 9.66193 8.81671 8.81802C9.66062 7.97411 10.8052 7.5 11.9987 7.5C13.1922 7.5 14.3368 7.97411 15.1807 8.81802C16.0246 9.66193 16.4987 10.8065 16.4987 12C16.4987 13.1935 16.0246 14.3381 15.1807 15.182C14.3368 16.0259 13.1922 16.5 11.9987 16.5ZM11.9987 14.5C12.6617 14.5 13.2976 14.2366 13.7665 13.7678C14.2353 13.2989 14.4987 12.663 14.4987 12C14.4987 11.337 14.2353 10.7011 13.7665 10.2322C13.2976 9.76339 12.6617 9.5 11.9987 9.5C11.3356 9.5 10.6998 9.76339 10.2309 10.2322C9.76208 10.7011 9.49869 11.337 9.49869 12C9.49869 12.663 9.76208 13.2989 10.2309 13.7678C10.6998 14.2366 11.3356 14.5 11.9987 14.5Z" fill="#09121F"/>
        </g>
        <defs>
          <clipPath id="clip0_769_6269">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
        <g clip-path="url(#clip0_769_6268)">
          <path d="M9.34178 18.7824L7.41078 18.2644L8.19778 15.3254C7.01975 14.8909 5.9249 14.2577 4.96078 13.4534L2.80778 15.6074L1.39278 14.1924L3.54678 12.0394C2.33086 10.5831 1.51387 8.83611 1.17578 6.96935L3.14378 6.61035C3.90278 10.8124 7.57878 14.0004 11.9998 14.0004C16.4198 14.0004 20.0968 10.8124 20.8558 6.61035L22.8238 6.96835C22.4861 8.83537 21.6695 10.5827 20.4538 12.0394L22.6068 14.1924L21.1918 15.6074L19.0388 13.4534C18.0747 14.2577 16.9798 14.8909 15.8018 15.3254L16.5888 18.2654L14.6578 18.7824L13.8698 15.8424C12.6321 16.0544 11.3674 16.0544 10.1298 15.8424L9.34178 18.7824Z" fill="#09121F"/>
        </g>
        <defs>
          <clipPath id="clip0_769_6268">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import {useField} from "vee-validate";

const props = withDefaults(defineProps<{
    modelValue:any,
    required:boolean,
    label?:string | null | undefined,
    placeHolder?:string | null | undefined,
    type:'text'|'email'|'number'|'password',
    disabled?:boolean,
    name?:string | null | undefined,
    id?:string | null | undefined,
  }>(),{
    type:'text',
    disabled:false,
    required:false
  });

  const emits = defineEmits(['update:modelValue']);

  const showPassword = ref(false);

const {
  errorMessage,
  handleChange,
  value: inputValue,
  setValue
} = useField(props.name!, undefined, {
  initialValue: props.modelValue,
})

watch(
    () => props.modelValue,
    (val) => {
      setValue(val);
    }
);

const onChanged = (e: any) => {
  handleChange(e, true);
  emits('update:modelValue', e.target.value);
}

</script>

<style lang="scss" scoped>
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
    @apply absolute text-xs bottom-1 translate-y-full p-2 font-light;
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