<template>
  <label for="myCheckbox02" class="checkbox">
    <input class="checkbox__input" type="checkbox" id="myCheckbox02" v-model="checked" :checked="isChecked">

    <svg class="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
      <rect width="21" height="21" x=".5" y=".5" fill="#ccc" stroke="#006F94" rx="3" />
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
    default:false
  },
  label:{
    type:String
  },
  value:{
    type:Number
  }
})

const emits = defineEmits(['valueChanged'])

const checked = ref(props.isChecked);

watch(
    ()=>checked,
    ()=> emits('valueChanged',checked,props.value)
)

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