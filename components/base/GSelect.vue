<template>
<div class="relative">
  <div class="flex flex-col gap-1">
    <label for="title" class="font-light text-sm" v-if="props.label">{{ label }}</label>
    <button @click="showOptions = !showOptions" type="button"
        class="flex items-center w-full px-3 py-2 rounded-md focus:outline-none text-sm font-light bg-[#F2F4F7]">
      <span class="text-sm">{{ getSelectedOption.title }}</span>
      <span class="text-sm font-light opacity-70 absolute left-3 pointer-events-none select-none">
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.08464 0.958313L5.0013 5.04165L0.917969 0.958313" stroke="currentColor" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    </button>
  </div>
  <Transition name="appear">
    <div v-if="showOptions" v-click-outside="closeOptions"
         class="bg-[#F2F4F7] p-2 rounded-lg absolute inset-x-0 -bottom-1 translate-y-full z-20" style="box-shadow:0 4px 8px 0 #b7b7b738;">
      <input v-model="search" placeholder="جستجو" type="text" class="bg-black/5 rounded px-2 py-1 focus:outline-none w-full mb-2 text-xs font-light">
      <div class=" flex flex-col gap-1 text-sm font-light max-h-[200px] overflow-y-auto">
        <div v-for="(o,i) in filteredOptions" class="cursor-pointer flex gap-3 p-2 w-full rounded-md hover:bg-black/10" @click="select(i)">
          <img :src="o.image" :alt="o.title" class="w-16 rounded-lg" v-if="o.image">
          <span>{{ o.title }}</span>
        </div>
      </div>
    </div>
  </Transition>
</div>
</template>

<script setup lang="ts">
import type {GSelectData} from "~/models/gSelectData";

const props = withDefaults(defineProps<{
  label?:string | null,
  modelValue:any,
  options:GSelectData[]
}>(),{
})

const showOptions = ref(false);

const emits = defineEmits(['update:modelValue']);

const selectedOption:Ref<number | null> = ref(null);
const getSelectedOption = computed(():GSelectData=>{
  if(selectedOption.value != null)
    return props.options[selectedOption.value];
  else return {
    title:'انتخاب کنید...',
    value:null
  } as GSelectData;
});
const search = ref(null);
const filteredOptions = computed(()=>{
  if(search.value != null && search.value != ''){
    return props.options.filter(o=>o.title.includes(search.value));
  }
  return props.options;
})
const select = (index:number)=>{
  selectedOption.value = index;
  emits('update:modelValue',getSelectedOption.value.value)
  closeOptions();
}

const closeOptions = ()=>{
  showOptions.value = false;
}

onMounted(()=>{
  if(props.options.length > 0 && props.modelValue != null){
    selectedOption.value = props.options.findIndex(o=>o.value == props.modelValue)
  }
})

</script>

<style scoped>
.appear-enter-active,
.appear-leave-active{
  @apply transition-all duration-200 origin-top;
}

.appear-enter-from,
.appear-leave-to{
  @apply scale-0 opacity-0;
}

</style>