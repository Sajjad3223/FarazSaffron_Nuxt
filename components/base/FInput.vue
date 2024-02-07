<template>
  <div class="flex flex-col space-y-2 w-full">
    <label :for="id" v-if="label" class="flex items-center space-x-1 space-x-reverse font-light text-sm">
      <slot name="labelIcon" />
      <span>{{label}}</span>
    </label>
    <div class="w-full relative flex items-center">
      <input :type="type" v-if="!multiLine" :class="['w-full peer border bg-bgWhite rounded-lg focus:outline-none ',{'pr-12 text-[14px]':$slots.inputIcon && rtl},{'pl-12 text-[14px]':$slots.inputIcon && !rtl},`py-${py} px-${px}`]"
             :id="id"
             :name="name"
             :value="inputValue"
             :dir="rtl ? 'rtl' : 'ltr'"
             :required="isRequired"
             @input="handleInputChange"
             :maxlength="maxLength"
      >
      <textarea v-else rows="3" :class="['w-full peer border bg-bgWhite rounded-lg focus:outline-none',`py-${py} px-${px}`]"
                :id="id"
                :name="name"
                :dir="rtl ? 'rtl' : 'ltr'"
                :required="isRequired"
                @input="handleInputChange"
                :maxlength="maxLength"
      >{{inputValue}}</textarea>
      <span :class="['absolute font-light opacity-50 pointer-events-none peer-focus:opacity-0 peer-valid:opacity-0 transition-all duration-300',
      {'peer-focus:-translate-x-2':rtl},{'peer-focus:translate-x-2':!rtl},
      {'right-4':!$slots.inputIcon && rtl},{'left-4':!$slots.inputIcon && !rtl},
      {'r-12':$slots.inputIcon && rtl},{'l-12':$slots.inputIcon && !rtl}]">
        {{placeHolder}}
      </span>
      <span :class="['absolute opacity-50',{'right-3':rtl},{'left-3':!rtl}]">
        <slot name="inputIcon" />
      </span>
    </div>
    <span v-if="errorMessage && !ignoreErrors" class="text-sm font-bold text-danger">
      {{errorMessage}}
    </span>
  </div>
</template>

<script setup lang="ts">
import {useField} from 'vee-validate';

const props = defineProps({
  multiLine: {
    type: Boolean,
    default: false
  },
  modelValue: {
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  maxLength: {
    type: Number,
    required: false
  },
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: false
  },
  type: {
    type: String,
    default: 'text'
  },
  rtl: {
    type: Boolean,
    default: true
  },
  ignoreErrors: {
    type: Boolean,
    default: false
  },
  isRequired: {
    type: Boolean,
    default: true
  },
  placeHolder: {
    type: String,
    default: ''
  },
  px:{
    type:Number,
    default:4
  },
  py:{
    type:Number,
    default:2
  },
})

const emits = defineEmits(['update:modelValue']);

const {
  errorMessage,
  handleChange,
  value: inputValue,
  setValue
} = useField(props.name, undefined, {
  initialValue: props.modelValue,
})

watch(
    () => props.modelValue,
    (val) => {
      setValue(val);
    }
);

const handleInputChange = (e: any) => {
  handleChange(e, true);
  emits('update:modelValue', e.target.value);
}

</script>

<style scoped>
.r-12{
  @apply right-12;
}
.l-12{
  @apply left-12;
}
</style>