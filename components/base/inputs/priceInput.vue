<template>
  <div class="flex flex-col gap-1">
    <label for="title" class="font-light text-sm">{{ label + `(${unit})` }}</label>
    <div class="flex items-center relative">
      <input :name="name" v-model="price" @input="onChange" type="number" class="w-full px-3 py-2 rounded-md focus:outline-none text-sm font-light" @click="(e)=>e.target.select()" style="background-color: #F2F4F7">
      <span v-if="price" class="text-sm font-light opacity-70 absolute left-3 pointer-events-none select-none">
              {{Number(price).toLocaleString()}} <span class="text-[10px] font-thin">{{ unit }}</span>
            </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  label:string,
  modelValue:number,
  unit:'تومان'|'ریال',
  value?:number|null,
  name?:string | null
}>();

const emits = defineEmits(['update:modelValue']);
const price = ref(props.value ?? props.modelValue);

watch(
    () => props.modelValue,
    (val)=>setValue(val)
);

const setValue = (val:any)=>{
  price.value = val;
}

const onChange = (e:any)=>{
  emits('update:modelValue',Number(e.target.value));
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