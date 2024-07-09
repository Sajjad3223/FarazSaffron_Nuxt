<template>
  <div class="flex flex-col space-y-2" >
    <label v-if="label" class="flex items-center space-x-1 space-x-reverse font-light text-sm ">
      <slot name="labelIcon" />
      <span>{{label}}</span>
    </label>
    <div class="p-2 bg-bgWhite  h-max rounded-lg relative border ">
      <div @click.self="showOptions = !showOptions" class="cursor-pointer flex flex-col items-start">
        <span v-if="multiSelect" class="pointer-events-none ">{{placeHolder}}</span>
        <span v-else class="pointer-events-none ">{{selectedItem.title}}</span>
        <ul v-if="multiSelect && selectedItems.length > 0" class=" mt-2 flex items-center gap-2 flex-wrap" >
          <li class="px-1 bg-danger text-white flex items-center w-max rounded-md flex-row-reverse" v-for="i in selectedItems">
            <span class="text-xs flex-1 font-thin">
              {{i.title}}
            </span>
            <div class="mx-1 h-4 w-px bg-bgWhite"></div>
            <button class="text-xs font-thin" @click.prevent="addToSelectedItems(i)">
              x
            </button>
          </li>
        </ul>
        <span class=" absolute left-2">
          <svg
              class="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
          >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                ></path>
              </svg>
        </span>
      </div>
      <transition
          enter-active-class="transition-all duration-200" enter-from-class="max-h-0 opacity-0 -translate-y-6" enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200" leave-to-class="max-h-0 opacity-0 -translate-y-6" leave-from-class="opacity-100 translate-y-0">
        <div class="absolute z-10 top-full translate-y-2 bg-gray-100 inset-x-0 rounded-lg p-3 overflow-y-auto max-h-96  dark:text-gray-200 " v-show="showOptions" >
          <ul class="space-y-4">
            <li v-for="c in data">
              <base-f-checkbox v-if="multiSelect" @click="addToSelectedItems(c)" :label="c.title" :value="c.id" :isChecked="selectedData?.find(o=>o.id == c.id) != null"/>
              <div v-else class="w-full text-sm hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer py-2 px-2 rounded-lg" @click="selectedItem = c,showOptions= false,emits('update:modelValue',c.id)">
                {{ c.title }}
              </div>
            </li>
          </ul>
        </div>
      </transition>
  </div>
</div>
</template>

<script setup lang="ts">
import type {SelectOption} from "~/models/selectOption";

const props = defineProps<{
  multiSelect:boolean,
  modelValue:number,
  label:string,
  data:SelectOption[],
  selectedData:SelectOption[],
  placeHolder:string
}>();

const emits = defineEmits(['update:modelValue']);

const showOptions = ref(false);
const selectedItem:Ref<SelectOption | string> = ref(props.modelValue ? props.data!.find(o=>o.id == props.modelValue) ?? props.placeHolder : {title:props.placeHolder,id:0});
const selectedItems:Ref<SelectOption[]> = ref(props.selectedData ?? []);

const addToSelectedItems=(item:SelectOption)=>{
  if(selectedItems.value.map(s=>s.id).includes(item.id))
    selectedItems.value = selectedItems.value.filter(i=>i.id !== item.id);
  else
    selectedItems.value.push(item);
}

onMounted(()=>{
  console.log(props.modelValue)
})

const getSelectedItem = () => selectedItem;
const getSelectedItems = () => selectedItems;

defineExpose({
  getSelectedItem,
  getSelectedItems
})

</script>
