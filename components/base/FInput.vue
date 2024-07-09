<template>
  <div class="flex flex-col space-y-2 w-full">
    <label :for="id" v-if="label" class="flex items-center space-x-1 space-x-reverse font-light text-sm">
      <slot name="labelIcon" />
      <span>{{label}}</span>
    </label>
    <div v-if="type !== 'file'" class="w-full relative flex items-center ">
      <input :type="type" v-if="!multiLine" :class="['w-full peer border bg-bgWhite rounded-lg focus:outline-none ',{'pr-12 text-[14px]':$slots.inputIcon && rtl},{'pl-12 text-[14px]':$slots.inputIcon && !rtl},`py-${py} px-${px}`]"
             :id="id"
             :name="name"
             :value="inputValue"
             :dir="rtl ? 'rtl' : 'ltr'"
             :required="isRequired"
             @input="handleInputChange"
             :maxlength="maxLength"
             :step="floatStep"
             ref="input"
      >
      <textarea v-else rows="4" :class="['w-full peer border bg-bgWhite rounded-lg focus:outline-none',`py-${py} px-${px}`]"
                :id="id"
                :name="name"
                :dir="rtl ? 'rtl' : 'ltr'"
                :required="isRequired"
                @input="handleInputChange"
                :maxlength="maxLength"
      >{{inputValue}}</textarea>

      <div v-if="type === 'number' && isPrice" class=" absolute left-12 text-left w-1/2 opacity-50 flex gap-2 items-center pointer-events-none" dir="ltr">
        <small class="font-light">ریال</small>
        <span>{{price ?? 0}}</span>
      </div>
      <span :class="['absolute font-light opacity-50 pointer-events-none peer-focus:opacity-0 peer-valid:opacity-0 transition-all duration-300 ',
      {'peer-focus:-translate-x-2':rtl},{'peer-focus:translate-x-2':!rtl},
      {'right-4':!$slots.inputIcon && rtl},{'left-4':!$slots.inputIcon && !rtl},
      {'r-12':$slots.inputIcon && rtl},{'l-12':$slots.inputIcon && !rtl}]">
        {{placeHolder}}
      </span>
      <span :class="['absolute opacity-50',{'right-3':rtl},{'left-3':!rtl}]">
        <slot name="inputIcon" />
      </span>
      <button class="absolute right-4 text-black scale-90 opacity-50" v-if="type === 'password' && showEye && !showPassword" @click.prevent="showPassword = true,type = 'text'" tabindex="-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.41998 12 8.41998C13.98 8.41998 15.58 10.02 15.58 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="absolute right-4 text-black scale-90 opacity-50" v-if="showPassword && showEye" @click.prevent="showPassword = false , type = 'password'">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.53 9.46998L9.47004 14.53C8.82004 13.88 8.42004 12.99 8.42004 12C8.42004 10.02 10.02 8.41998 12 8.41998C12.99 8.41998 13.88 8.81998 14.53 9.46998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998C8.46997 3.72998 5.17997 5.80998 2.88997 9.40998C1.98997 10.82 1.98997 13.19 2.88997 14.6C3.67997 15.84 4.59997 16.91 5.59997 17.77" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.42004 19.53C9.56004 20.01 10.77 20.27 12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39999C20.78 8.87999 20.42 8.38999 20.05 7.92999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.47 14.53L2 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 2L14.53 9.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </button>
    </div>
    <div v-else class="h-full">
      <!-- Photo File Input -->
      <input type="file" class="hidden" ref="photo" @input="previewImage">

      <div class="text-center h-full border hover:border-primary cursor-pointer rounded-xl border-transparent grid place-items-center" @click="$refs.photo.click()">
        <!-- Current Profile Photo -->
        <div class="bg-gray-200 dark:bg-gray-100/10 h-full w-full  rounded-xl flex items-center justify-center flex-col space-y-2" v-show="!photoData.photoPreview">
          <span class=" font-thin opacity-70 text-xl">هنوز تصویر ثبت نشده است</span>
          <small class=" font-thin opacity-70">برای افزودن تصویر جدید کلیک کنید</small>
        </div>
        <!-- New Profile Photo Preview -->
        <div class="w-full mx-auto overflow-hidden" v-show="photoData.photoPreview">
          <img :src="photoData.photoPreview" alt="" class="max-w-72 mx-auto object-contain rounded-xl">
        </div>
      </div>
    </div>

    <small v-if="errorMessage && !ignoreErrors" class="font-light text-danger">
      {{errorMessage}}
    </small>
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
    type:String || Object || null,
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
  noValidation: {
    type: Boolean,
    default: false
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
  isPrice:{
    type:Boolean,
    default:false
  },
  floatStep:{
    type:Number,
    required:false
  }
})

const emits = defineEmits(['update:modelValue']);

const showPassword = ref(false);
const showEye = ref(false);
const input = ref();

const price = computed(()=>{
  let nStr = props.modelValue + '';
  nStr = nStr.replace( /\,/g, "");
  let x = nStr.split( '.' );
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while ( rgx.test(x1) ) {
    x1 = x1.replace( rgx, '$1' + ',' + '$2' );
  }
  return x1 + x2;
});

const {
  errorMessage,
  handleChange,
  value: inputValue,
  setValue,
  validate
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
  if(props.type == 'password') {
    showEye.value = e.target.value != '';
  }
  handleChange(e, true);
  emits('update:modelValue', e.target.value);
}

const photoData=reactive({
  photoName: '',
  photoPreview: null
});

const photo = ref();

const previewImage = (e:any)=>{
  photoData.photoName = photo.value.files[0].name;
  const reader = new FileReader();
  reader.onload = (e) => {
    //@ts-ignore
    photoData.photoPreview = e.target.result;
  };
  reader.readAsDataURL(photo.value.files[0]);
  emits("update:modelValue", e.target.files[0])
  handleChange(e);
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