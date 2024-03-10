<template>
  <div ref="row" class="relative flex items-center gap-4" >
    <base-f-input place-holder="عنوان" name="key" id="key" v-model="specification.key"/>
    <base-f-input place-holder="مقدار" name="value" id="value" v-model="specification.value"/>
    <button type="button" class="w-10 h-10 px-4 rounded-lg bg-danger text-white" @click.prevent="removeSpecification">X</button>
    <div class="absolute inset-0 bg-danger text-white rounded-lg flex items-center" v-if="interval">
      <button class="w-full" @click="removeInterval">
        بازگردانی
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import type {CreateSpecificationViewModel} from "~/models/product/productCommands";

const specification:CreateSpecificationViewModel = reactive({
  key:'',
  value:''
})

const row = ref();

const interval = ref();
const removeSpecification = () => {
  interval.value = setTimeout(()=>{
    row.value.remove();
  },3000)
}

const removeInterval = ()=>{
  clearInterval(interval.value);
  interval.value = null;
}
</script>