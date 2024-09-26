<template>
  <div class="flex flex-col gap-1">
    <label :for="name" class="font-light text-sm" v-if="label">{{ label }}</label>
    <div class="flex items-center relative ">
      <input v-model="text" @input="onChange" :placeholder="placeHolder" :name="name" :id="name" @click="(e)=>e.target.select()"
             :type="type"
             :required="required"
             :class="['w-full px-3 py-2 rounded-md focus:outline-none text-sm font-light placeholder:font-vazir',`text-${textAlign}`,customClasses]"
             style="background-color: #F2F4F7">
      <slot v-if="sideSlot"></slot>
      <span v-else :class="['text-sm font-light opacity-70 absolute left-3 pointer-events-none select-none',sideTextClasses]">
        {{ sideText }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  label?:string | null,
  modelValue:any,
  name:string,
  placeHolder?:string | null | undefined,
  type?:string,
  sideSlot?:boolean,
  sideText?:string | null | undefined,
  decimal?:boolean,
  required?:boolean,
  textAlign?:'left'|'center'|'right',
  customClasses?:string | null | undefined,
  sideTextClasses?:string | null | undefined
}>(),{
  placeHolder:undefined,
  type:'text',
  sideSlot:false,
  sideText:undefined,
  decimal:false,
  textAlign:"right"
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
  if(props.type == 'number')
    emits('update:modelValue',Number(e.target.value));
  else
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