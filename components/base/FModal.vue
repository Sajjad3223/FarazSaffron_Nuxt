<template>
  <Transition>
    <div v-if="modelValue" @click.self="closeModal" class="modalWrapper flex items-center justify-center fixed inset-0 bg-black/50 z-50">
      <div class="modal bg-bgWhite p-4 rounded-xl drop-shadow-lg w-[80%] lg:w-[25%]">
        <div class="modal-header flex items-center justify-between pb-4 border-b mb-4">
          <div>
            <template v-if="$slots.header">
              <slot name="header" />
            </template>
            <template v-else>
              <div>
                <h5 class="text-xl font-bold">{{title}}</h5>
                <p class="font-light">{{subTitle}}</p>
              </div>
            </template>
          </div>
          <button class="w-8 h-8 grid place-items-center bg-danger rounded-lg" @click="closeModal" v-if="!hideCloseButton">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 18L6 6M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
          <div class="actions items-center mt-2" v-if="$slots.actions">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">

//@ts-ignore
const props = defineProps({
  modelValue:{
    type:Boolean,
    default:false
  },
  hideCloseButton:{
    type:Boolean,
    default:false
  },
  title:{
    type:String,
    required:false
  },
  subTitle:{
    type:String,
    required:false
  },
})
const emit = defineEmits(['update:modelValue']);

const closeModal = ()=>{
  emit('update:modelValue',false);
}
</script>