<template>
  <div class="flex flex-col gap-1">
    <label for="title" class="font-light text-sm">{{ label }}</label>
    <div class="flex items-center relative">
      <textarea :dir="dir" v-model="text" @input="onChange" :placeholder="placeHolder" rows="5"
                class="w-full h-full px-3 py-2 rounded-md focus:outline-none text-sm font-light" style="background-color: #F2F4F7"></textarea>
      <slot v-if="sideSlot"></slot>
      <span v-else class="text-sm font-light opacity-70 absolute left-3 pointer-events-none select-none">
        {{ sideText }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  label:string,
  name:string,
  modelValue:any,
  placeHolder?:string | null | undefined,
  type?:string,
  sideSlot?:boolean,
  sideText?:string | null | undefined,
  decimal?:boolean,
  dir?:'rtl'|'ltr'| null |undefined
}>(),{
  placeHolder:undefined,
  type:'text',
  sideSlot:false,
  sideText:undefined,
  decimal:false,
  dir:"rtl"
});

const emits = defineEmits(['update:modelValue']);
const text = ref(props.modelValue);

watch(
    () => props.modelValue,
    (val)=>setValue(val)
);

const setValue = (val:any)=>{
  text.value = val;
  if(props.type == 'number' && props.decimal)
    text.value = Number(val).toFixed(2);
}

const onChange = (e:any)=>{
  emits('update:modelValue',e.target.value);
}
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>