<script setup lang="ts">

const props = withDefaults(defineProps<{
  label:string,
  numberLength?:number
}>(),{
  numberLength:5
});
const emits = defineEmits(['filled'])

const inputs = ref([]);
const form = ref();

const checkPrevInputIsFilled = (input:HTMLInputElement)=>{
  if(!input) return;
  if(input.value)
    return;
  input.focus();
}

const handleInput = (e:any) => {
  checkPrevInputIsFilled(e.target.previousElementSibling);
  const input = e.target
  const nextInput = input.nextElementSibling
  if (nextInput && input.value) {
    nextInput.focus()
    if (nextInput.value) {
      nextInput.select()
    }
  }
  if(!nextInput && input.value)
    emits('filled');
}

const handlePaste = (e:any) => {
  e.preventDefault()
  const paste = e.clipboardData.getData('text')
  inputs.value.forEach((input, i) => {
    //@ts-ignore
    input.value = paste[i] || ''
  })
}

const handleBackspace = (e:any) => {
  const input = e.target
  if (input.value) {
    input.value = ''
    return
  }

  input.previousElementSibling.focus()
}

const  handleArrowLeft = (e:any) => {
  const previousInput = e.target.previousElementSibling
  if (!previousInput) return
  previousInput.focus()
}

const handleArrowRight = (e:any)=> {
  const nextInput = e.target.nextElementSibling
  if (!nextInput) return
  nextInput.focus()
}

const KEYBOARDS = {
  backspace: 8,
  arrowLeft: 37,
  arrowRight: 39,
}

onMounted(()=>{

  form.value.addEventListener('input', handleInput)
  //@ts-ignore
  inputs.value[0].addEventListener('paste', handlePaste)

  inputs.value.forEach(input => {
    //@ts-ignore
    input.addEventListener('focus', (e:any) => {
      checkPrevInputIsFilled(e.target.previousElementSibling);
    })

    //@ts-ignore
    input.addEventListener('keydown', (e:any) => {
      switch(e.keyCode) {
        case KEYBOARDS.backspace:
          handleBackspace(e)
          break
        case KEYBOARDS.arrowLeft:
          handleArrowLeft(e)
          break
        case KEYBOARDS.arrowRight:
          handleArrowRight(e)
          break
        default:
      }
    })
  })
})

const getValue = computed(()=>{
  let value = '';
  inputs.value.forEach(input=>{
    //@ts-ignore
    value += input.value;
  })
  return value;
})

defineExpose({
  getValue
})

</script>

<template>
  <div dir="ltr" ref="form" class="flex flex-col items-center w-max mx-auto">
    <h4 class="text-center mb-4 self-end" dir="rtl">{{ label }}</h4>
    <div class="flex mb-3 mx-auto">
      <input type="text" maxlength="1" pattern="[0-9]+" class="form-control" ref="inputs" v-for="i in numberLength">
    </div>
  </div>
</template>

<style scoped>
.form-control {
  @apply block h-[50px] mr-2 text-center text-lg min-w-0 last:mr-0 border-2 border-transparent transition-colors duration-300 max-w-12 rounded-lg focus:outline-none focus:border-black/30;
}
</style>