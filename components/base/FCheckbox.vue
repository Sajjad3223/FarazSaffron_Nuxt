<template>
  <label :for="`myCheckbox02${id}`" class="checkbox " >
    <input :class="['checkbox__input']" type="checkbox" :id="`myCheckbox02${id}`" v-model="checked" :checked="isChecked" @input="update">

    <svg class="checkbox__icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="transparent" stroke="#F04623" rx="3" />
      <path class="tick" stroke="#F04623" fill="none" stroke-linecap="round" stroke-width="4" d="M4 10l5 5 9-9" />
    </svg>
    <span class="checkbox__label text-sm">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue:{
    type:Boolean,
  },
  isChecked:{
    type:Boolean,
  },
  label:{
    type:String
  },
  value:{
    type:Number
  }
})

const id = "id" + Math.random().toString(16).slice(2)

const emits = defineEmits(['valueChanged'])

const checked = ref(props.isChecked);

const update = ()=>{
  emits('valueChanged', !checked.value, props.value)
}

</script>

<style scoped lang="scss">

.checkbox { counter-increment: total; }

input[type="checkbox"]:checked { counter-increment: checked; }


.checkbox {
  $block: &;

  cursor: pointer;
  display: flex;
  align-items: center;

  &__input {
    position: absolute;
    width: 1.375em;
    height: 1.375em;
    opacity: 0;
    cursor: pointer;

    &:checked + #{$block}__icon .tick {
      stroke-dashoffset: 0;
    }
  }

  &__icon {
    width: 1.375em;
    height: 1.375em;
    flex-shrink: 0;
    overflow: visible;

    .tick {
      stroke-dasharray: 20px;
      stroke-dashoffset: 20px;
      transition: stroke-dashoffset .2s ease-out;
    }
  }

  &__label {
    margin-right: 0.5em;
  }
}
</style>