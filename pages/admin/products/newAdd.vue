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
            step >= i ? 'bg-brandOrange' : 'bg-brandOrange/20']" >
              <span v-if="step == i" class="absolute border-4 border-white w-9 h-9 rounded-full"></span>
            </div>
            <div class="flex-1 h-1 bg-brandOrange/20 rounded-full relative overflow-hidden">
              <span class="h-1 rounded-full absolute right-0 origin-center bg-brandOrange transition-all duration-200"
              :style="{width:`${widths[i]}%`}"></span>
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
        <Form class="flex flex-col gap-4" v-show="step === 1">
          <base-inputs-file-input multiple v-model="imageFiles" label="تصاویر" class="min-h-[400px]" @update:modelValue="imageSelected"/>

          <base-g-button  type="submit" color="info" is-icon text-color="white" class="w-max mr-auto text-sm font-light" >
            ثبت و ادامه
          </base-g-button>
        </Form>
      </Transition>
      <Transition enter-active-class="transition-all duration-300 delay-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <Form class="grid grid-cols-1 my-4 space-y-4" v-show="step === 2" >
          <product-specification-add v-for="(s,i) in specifications" v-model="specifications[i]" :number="i" />
          <base-f-button type="button" @clicked="specifications.push({key:'',value:''})" bordered color="primary" text-color="responsive">
            افزودن ویژگی جدید
          </base-f-button>
          <div class="grid grid-cols-3 gap-4 col-span-full">
            <base-f-button bordered color="secondary" text-color="responsive" @clicked="step--">
              رفتن به صفحه قبل
            </base-f-button>
            <base-f-button type="button" color="primary" text-color="white" @clicked="AddSpecifications">
              ثبت ویژگی ها و رفتن به صفحه بعد
            </base-f-button>
            <base-f-button bordered color="primary" text-color="responsive" @clicked="step++">
              رفتن به صفحه بعد
            </base-f-button>
          </div>
        </Form>
      </Transition>
      <Transition enter-active-class="transition-all duration-300 delay-300" enter-from-class=" opacity-0" enter-to-class=" opacity-100"
                  leave-active-class="transition-all duration-300 " leave-from-class=" opacity-100" leave-to-class=" opacity-0" :duration="300" mode="out-in">
        <Form v-if="false" class="grid grid-cols-1 my-4 space-y-4" v-show="step === 3" >
<!--          <FSeoData  />-->
          <div class="grid grid-cols-2 gap-4 col-span-full">
            <base-f-button bordered color="secondary" text-color="responsive" @clicked="step--">
              رفتن به صفحه قبل
            </base-f-button>
            <base-f-button type="button" color="primary" text-color="white" @clicked="AddSeoData">
              ثبت نهایی
            </base-f-button>
          </div>
        </Form>
      </Transition>

      <div class="absolute -inset-4 rounded-lg bg-dark/20 dark:bg-white/20 grid place-items-center  backdrop-blur-[2px]" v-if="isLoading">
        <span class="animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px"
               viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
               style="display:block;background-color:transparent;"><circle
              cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="35"
              stroke-dasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"
              style="transform:matrix(1, 0, 0, 1, 0, 0);"></circle>
          </svg>
        </span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import type {
  CreateSpecificationViewModel,
  SetSeoDataCommand, SetSpecificationsCommand
} from "~/models/product/productCommands";
import {SetImages, SetSeoData, SetSpecifications} from "~/services/product.service";
import {ToastType, useToast} from "~/composables/useSwal";
import type {ApiResponse} from "~/models/apiResponse";

const imageSelected = ()=>{
  console.log(imageFiles.value)
}

definePageMeta({
  layout:'admin'
})

const step = ref(1);
const steps = reactive([
  {title:'توضیحات و مشخصات اصلی'},
  {title:'بارگزاری تصاویر'},
  {title:'ویژگی های محصول'},
  {title:'اطلاعات سئو'},
]);

const options = reactive([
  {title:'گزینه اول',value:1},
  {title:'گزینه دوم',value:2},
  {title:'گزینه سوم',value:3},
  {title:'گزینه اول',value:1},
  {title:'گزینه دوم',value:2},
  {title:'گزینه سوم',value:3},
  {title:'گزینه اول',value:1},
  {title:'گزینه دوم',value:2},
  {title:'گزینه سوم',value:3},
]);
const selectData = ref();
watch(selectData,()=>console.log(selectData.value))


const isLoading = ref(false);
const createdProductId = ref(0);

const toast = useToast();
const router = useRouter();
const widths = ref([0,0,0,0]);

const imageFiles = ref();
const imagesAlt = ref('');

const specifications:Ref<CreateSpecificationViewModel[]> = ref([
  {key:'',value:''} as CreateSpecificationViewModel
]);

const updateStepProgress = (progress:number,step:number)=>{
  widths.value[step] = progress;
}

const productCreated = (productId:number)=>{
  createdProductId.value = productId;
}

const AddImages = async ()=>{
  isLoading.value = true;

  const imagesData = new FormData();
  imagesData.append('productId',createdProductId.value.toString());
  for(let i = 0; i < imageFiles.value.length; i++){
    const file:File = imageFiles.value[i];
    imagesData.append('images',file);
  }
  imagesData.append('alt',imagesAlt.value);

  const result = await SetImages(imagesData);
  if(result.isSuccess){
    await toast.showToast(result.metaData.message);
    step.value++;
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}
const AddSpecifications = async ()=>{
  isLoading.value = true;

  const result:ApiResponse<undefined> = await SetSpecifications({
    productId:createdProductId.value,
    specifications:specifications.value
  } as SetSpecificationsCommand);

  if(result.isSuccess){
    await toast.showToast(result.metaData.message);
    step.value++;
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}
const AddSeoData = async ()=>{
  isLoading.value = true;

  const result:ApiResponse<undefined> = await SetSeoData({
    productId:createdProductId.value,
    //seoData:addProductData.seoData
  } as SetSeoDataCommand);

  if(result.isSuccess){
    await toast.showToast(result.metaData.message);
    await router.push('/admin/products');
  }else{
    await toast.showToast(result.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}


</script>

<style scoped>
.active-step{
  @apply relative bg-brandOrange/20 dark:bg-gray-50 text-brandOrange;
}
</style>