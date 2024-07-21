<template>
  <div class="relative overflow-x-visible mt-5" >
    <div
        :class="['relative flex item-start overflow-x-auto gap-4']" :id="containerId" style="scrollbar-width: none">
      <!--                <GCard :product="product" />-->
      <GCard2 v-for="(product,i) in products" :key="product.id" :product="product" class="min-w-[280px]"/>
    </div>
    <button @click="scrollNext" :disabled="scrollCount == maxScrollCount"
            class="absolute left-0 top-1/3 -translate-x-2/3 bg-[#FAFAFA] scroll-smooth disabled:opacity-50
            w-10 h-10 rounded-full border border-black/50 hover:bg-gray-200 text-black/50 hover:text-black transition-colors duration-200 grid place-items-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-180 pointer-events-none">
        <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button @click="scrollPrev" :disabled="scrollCount == 0"
            class="absolute right-0 top-1/3 translate-x-2/3 bg-[#FAFAFA] scroll-smooth disabled:opacity-50
            w-10 h-10 rounded-full border border-black/50 hover:bg-gray-200 text-black/50 hover:text-black transition-colors duration-200 grid place-items-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none">
        <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type {ProductFilterData} from "~/models/product/productQueries";

const props = defineProps<{
  products:ProductFilterData[]
}>()


const containerId = "cartsContainer" + Math.random().toString(16).slice(2);
const container = ref();
const shouldMove = ref(false);
const targetScrollValue = ref(0);
let interval:any;
const scrollAmount = 450;
const scrollCount = ref(0);
const maxScrollCount = ref();

onMounted(()=>{
  container.value = document.getElementById(containerId);
  maxScrollCount.value = Math.floor((container.value?.scrollWidth - container.value?.clientWidth) / scrollAmount) + 1;
})
const scrollNext = ($event) =>{
  /*const container = $event.target.parentElement?.querySelector('.cartsContainer');
  if(targetScrollValue.value - scrollAmount <= (-container.scrollWidth / 3))
    targetScrollValue.value = -container.scrollWidth / 3;
  else*/
  if(scrollCount.value >= maxScrollCount) return;
  const maxScrollAmount = container.value.scrollWidth - container.value.clientWidth;
  targetScrollValue.value = Math.max(targetScrollValue.value - scrollAmount,-maxScrollAmount);
  scrollCount.value++;
  shouldMove.value = true;
  interval = setInterval(()=>moveTo($event.target),10);
}
const scrollPrev = ($event) =>{
  /*const container = $event.target.parentElement?.querySelector('.cartsContainer');
  if(targetScrollValue.value + scrollAmount >= 0)
    targetScrollValue.value = 0
  else*/
  if(scrollCount.value <= 0) return;

  targetScrollValue.value = Math.min(0,targetScrollValue.value + scrollAmount);
  scrollCount.value--;
  shouldMove.value = true;
  interval = setInterval(()=>moveTo($event.target),10);
}

const moveTo = (target:any)=>{
  if(!shouldMove.value) return;
  //const container = target.parentElement?.querySelector('.cartsContainer');

  if(targetScrollValue.value > container.value.scrollLeft)
    container.value.scrollLeft += 10;
  if(targetScrollValue.value < container.value.scrollLeft)
    container.value.scrollLeft -= 10;

  if(Math.abs(Math.abs(container.value.scrollLeft) - Math.abs(targetScrollValue.value)) < 10) {
    shouldMove.value = false;
    clearInterval(interval);
  }
}
</script>