<template>
  <div ref="counter" class="relative min-h-8 grid place-items-center" >
    <Transition enter-active-class="absolute " leave-active-class="absolute" leave-to-class="opacity-0">
      <div class="text-2xl flex items-center gap-1" :key="count">
        <slot name="after"></slot>
        <strong>{{ count.toLocaleString() }}</strong>
        <slot name="before"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  target:{
    type:Number,
    required:true
  },
  time:{
    type:Number,
    default:5
  },
  step:{
    type:Number,
    default:1
  },
  offsetToCount:{
    type:Number,
    default:900
  }
})

const count = ref(0);
const counter = ref();
const isActivated = ref(false);

document.addEventListener('scroll',()=>{
  if(scrollY > counter.value.offsetTop - props.offsetToCount && !isActivated.value){
    startCounting();
  }
})

const startCounting = ()=>{
  isActivated.value = true;
  setInterval(()=>{
    if(count.value < props.target)
      count.value += Math.min(props.step,props.target - count.value);
  },1000 / props.time / 10)
}
</script>