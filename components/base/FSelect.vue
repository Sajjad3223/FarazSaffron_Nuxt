<template>
  <div class="flex flex-col space-y-2" >
    <label v-if="label" class="flex items-center space-x-1 space-x-reverse font-light text-sm dark:text-white">
      <slot name="labelIcon" />
      <span>{{label}}</span>
    </label>
    <div class="p-2 bg-bgWhite dark:bg-gray-800 h-max rounded-lg relative border dark:border-gray-700">
      <div @click.self="showOptions = !showOptions" class="cursor-pointer flex items-center">
        <span v-if="multiSelect" class="pointer-events-none dark:text-gray-300">{{placeHolder}}</span>
        <span v-else class="pointer-events-none dark:text-gray-300">{{selectedItem}}</span>
        <ul v-if="multiSelect && selectedItems.length > 0" class=" mt-2 flex items-center gap-2 flex-wrap" >
          <li class="px-1 bg-danger text-white flex items-center w-max rounded-md flex-row-reverse" v-for="i in selectedItems">
        <span class="text-xs flex-1 font-thin">
          {{i}}
        </span>
            <div class="mx-1 h-4 w-px bg-bgWhite"></div>
            <button class="text-xs font-thin" @click="addToSelectedItems(i)">
              x
            </button>
          </li>
        </ul>
        <span class="dark:text-white absolute left-2">
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
        <div class="absolute z-10 top-full translate-y-2 bg-gray-100 inset-x-0 rounded-lg p-3 overflow-y-auto max-h-96 dark:bg-gray-700 dark:text-gray-200 " v-show="showOptions" >
          <ul class="space-y-4">
            <li v-for="c in categories">
              <base-f-checkbox :isChecked="selectedItems.includes(c)" v-if="multiSelect" @click="addToSelectedItems(c)" :label="c"/>
              <div v-else class="w-full text-sm hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer py-2 px-2 rounded-lg" @click="selectedItem = c,showOptions= false">
                {{ c.replaceAll('_',' ') }}
              </div>
            </li>
          </ul>
        </div>
      </transition>
  </div>
</div>
</template>

<script setup lang="ts">
const props = defineProps({
  multiSelect:{
    type:Boolean,
    default:false
  },
  modelValue:{
    type:Number,
  },
  label:{
    type:String
  },
  data:{
    type:Array
  },
  placeHolder:{
    type:String
  }
})

const categories = props.data ?? [ // TODO remove this property
    'دسته بندی اول',
    'دسته بندی دوم',
    'دسته بندی سوم',
    'دسته بندی چهارم'
];

const showOptions = ref(false);
const selectedItem = ref(categories[props.modelValue] ?? props.placeHolder);
const selectedItems = ref([]);

const addToSelectedItems=(item)=>{
  if(selectedItems.value.includes(item))
    selectedItems.value = selectedItems.value.filter(i=>i !== item);
  else
    selectedItems.value.push(item);
}


</script>
