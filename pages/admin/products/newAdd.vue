<template>
  <div>
    <Head>
      <Title>افزودن محصول جدید</Title>
    </Head>
    <base-f-divider title="افزودن محصول جدید" :logo-divider="false"/>


    <div class="mt-4">
      <ol class="w-full grid grid-cols-4 gap-4">
        <li class="flex flex-col" v-for="(s,i) in steps">
          <div class="flex items-center gap-2 mb-4">
            <div :class="['w-10 h-10 rounded-full relative grid place-items-center',
            step >= i ? step > i ? 'bg-[#38C157]' : 'bg-brandOrange' : 'bg-brandOrange/20']" >
              <svg v-if="step > i" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7.76191L7.16129 13L18 2" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span v-if="step == i" class="absolute border-4 border-white w-9 h-9 rounded-full"></span>
            </div>
            <div class="flex-1 h-1 bg-brandOrange/20 rounded-full relative overflow-hidden">
              <span :class="['h-1 rounded-full absolute right-0 origin-center transition-all duration-200',
              step > i ? 'bg-[#38C157]' : 'bg-brandOrange']"
              :style="{width:`${step > i ? '100' : widths[i]}%`}"></span>
            </div>
          </div>
          <span class="text-xs opacity-50 mb-1">مرحله {{ i + 1 }}</span>
          <span class="text-sm opacity-90">{{ s.title }}</span>
        </li>
      </ol>
    </div>

    <hr class="my-8">


    <div class="w-full relative">
      <Transition enter-active-class="transition-all duration-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <admin-product-create v-if="step === 0" :step="0" @updateProgress="updateStepProgress" @productCreated="productCreated" />
      </Transition>
      <Transition enter-active-class="transition-all duration-300 delay-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <admin-product-set-images v-if="step === 1" :step="1" :productId="createdProductId" @updateProgress="updateStepProgress" @imagesUpdated="goNextStep" />
      </Transition>
      <Transition enter-active-class="transition-all duration-300 delay-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <admin-product-set-properties v-if="step == 2" :step="2" :product-id="createdProductId" @updateProgress="updateStepProgress" @propertiesSet="goNextStep"/>
      </Transition>

      <Transition enter-active-class="transition-all duration-300 delay-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <admin-product-set-seo-data v-if="step == 3" :step="3" :product-id="createdProductId" @updateProgress="updateStepProgress" @seoDataSet="navigateTo('/admin/products')"/>
      </Transition>

    </div>
  </div>
</template>

<script setup lang="ts">
import {useToast} from "~/composables/useSwal";


definePageMeta({
  layout:'admin'
})

const step = ref(0);
const steps = reactive([
  {title:'توضیحات و مشخصات اصلی'},
  {title:'بارگزاری تصاویر'},
  {title:'ویژگی های محصول'},
  {title:'اطلاعات سئو'},
]);

const createdProductId = ref(0);

const toast = useToast();
const router = useRouter();
const widths = ref([0,0,0,0]);

const updateStepProgress = (progress:number,step:number)=>{
  widths.value[step] = progress;
}

const productCreated = (productId:number)=>{
  createdProductId.value = productId;
  step.value++;
}
const goNextStep = ()=>{
  step.value++;
}

</script>

<style scoped>
.active-step{
  @apply relative bg-brandOrange/20 dark:bg-gray-50 text-brandOrange;
}
</style>