<template>
  <Form class="grid grid-cols-1 lg:grid-cols-2 gap-4" @submit="UpdateProduct">
    <div class="flex flex-col gap-4 row-span-2 relative">
      <base-inputs-text-input name="title" label="عنوان محصول" v-model="editProductData.title" @update:modelValue="generateSlug" side-slot>
        <button @click="autoGenerateSlug = !autoGenerateSlug,generateSlug()" class="text-sm font-light opacity-20 absolute left-3 border rounded-full border-black w-4 h-4 flex items-center justify-center">
          <span class="w-1 h-1 rounded-full bg-black"></span>
        </button>
      </base-inputs-text-input>
      <base-inputs-text-input name="slug" label="عنوان یکتا" v-model="editProductData.slug" side-slot>
        <button @click="autoGenerateSlug = !autoGenerateSlug,generateSlug()" class="text-sm font-light opacity-20 absolute left-3 border rounded-full border-black w-4 h-4 flex items-center justify-center">
          <span class="w-1 h-1 rounded-full bg-black"></span>
        </button>
      </base-inputs-text-input>
      <Transition name="fade">
        <div v-if="autoGenerateSlug" class="h-[70px] pointer-events-none w-1 border-l border-dashed border-black opacity-20 absolute left-5 top-1/2 -translate-y-1/3 z-10"></div>
      </Transition>
    </div>

    <base-inputs-text-input name="code" label="کد محصول" v-model="editProductData.productCode" />
    <base-inputs-text-input name="barcode" label="بارکد محصول" v-model="editProductData.barcodeNumber" />

    <hr class="col-span-full my-4">

    <base-inputs-price-input name="price" v-model="editProductData.price" label="قیمت محصول" unit="تومان" @update:modelValue="calculateFinalPrice"/>

    <div class="grid grid-cols-3 gap-4">
      <div class="flex items-center gap-4">
        <div class="flex items-center">
          <base-inputs-text-input name="discount" label="تخفیف" decimal type="number" v-model="editProductData.discount" @update:modelValue="calculateFinalPrice" side-text="%" />
        </div>
        <button class="opacity-50 grid place-items-center text-black/50 translate-y-3" @click="autoCalculateDiscount = !autoCalculateDiscount">
          <svg v-if="autoCalculateDiscount" width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.01003 1.45264L5.85145 1.45264C4.67181 1.45264 3.53008 1.91599 2.69284 2.76564C1.85559 3.61528 1.37991 4.75448 1.39899 5.97102C1.37986 7.18754 1.85572 8.3269 2.69283 9.17641C3.54904 10.0453 4.65266 10.5088 5.83236 10.5088H8.99094M12.9868 10.5474H16.1454C17.3251 10.5474 18.4668 10.084 19.304 9.23437C20.1413 8.38473 20.617 7.24553 20.5979 6.02899C20.5979 4.83188 20.1222 3.69263 19.2849 2.84298C18.4477 1.99333 17.3251 1.51062 16.1454 1.5106H12.9868M6.25088 5.95777L15.7266 5.95777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.01003 4.45264L5.85145 4.45264C4.67181 4.45264 3.53008 4.91599 2.69284 5.76564C1.85559 6.61528 1.37991 7.75448 1.39899 8.97102C1.37986 10.1875 1.85572 11.3269 2.69283 12.1764C3.54904 13.0453 4.65266 13.5088 5.83236 13.5088H8.99094M12.9868 13.5474H16.1454C17.3251 13.5474 18.4668 13.084 19.304 12.2344C20.1413 11.3847 20.617 10.2455 20.5979 9.02899C20.5979 7.83188 20.1222 6.69263 19.2849 5.84298C18.4477 4.99333 17.3251 4.51062 16.1454 4.5106H12.9868M6.25088 8.95777L15.7266 8.95777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.8906 0.815002L2.89063 16.815" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <base-inputs-price-input name="finalPrice" class="col-span-2" v-model="finalPrice" label="قیمت نهایی" unit="تومان" @update:modelValue="setFinalPrice" />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <base-inputs-text-input name="quantity" label="موجود در انبار" type="number" v-model="editProductData.quantity" side-text="عدد" />
      <base-inputs-text-input name="weight" label="وزن بسته بندی" type="number" v-model="editProductData.weight" side-text="گرم" />
    </div>

    <div class="grid grid-cols-3 gap-4" >
      <BaseGSelect v-if="!dataLoading" v-model="editProductData.categoryId" :options="selectCategories" @update:modelValue="categorySelected" label="دسته بندی اصلی"/>
      <BaseGSelect v-if="!dataLoading" v-model="editProductData.subCategoryId" :options="selectSubCategories" label="دسته بندی فرعی"/>
      <BaseGSelect v-model="editProductData.packingType" :options="getEnumValuesForSelect<EPackingType>(EPackingType)" label="نوع بسته بندی"/>
    </div>

    <div class="grid grid-cols-2 gap-4">

      <base-inputs-text-input name="healthNumber" label="کد بهداشت" v-model="editProductData.healthNumber"/>
      <BaseGSelect v-if="!dataLoading" v-model="editProductData.catalogId" :options="selectCatalogs" label="کاتالوگ محصول"/>
    </div>
    <base-g-dimension v-model="editProductData.dimensions" />

    <hr class="col-span-full my-4">

    <base-inputs-text-input name="digikalaLink" label="لینک دیجی کالا" v-model="editProductData.digiKalaData.digikalaLink"/>
    <base-inputs-price-input name="digikalaPrice" v-model="editProductData.digiKalaData.digikalaPrice" label="قیمت در دیجی کالا" unit="تومان"/>

    <base-inputs-text-input name="basalamLink" label="لینک باسلام" v-model="editProductData.basalamData.basalamLink"/>
    <base-inputs-price-input name="basalamPrice" v-model="editProductData.basalamData.basalamPrice" label="قیمت در باسلام" unit="تومان"/>

    <base-g-button :is-loading="isLoading" type="submit" color="info" is-icon text-color="white" class="col-span-full w-max mr-auto text-sm font-light" >
      ثبت و ادامه
    </base-g-button>
  </Form>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import * as Yup from'yup';
import {EPackingType} from "~/models/product/EPackingType";
import type {EditProductCommand} from "~/models/product/productCommands";
import type {CategoryDto} from "~/models/categories/categoryQueries";
import type {CatalogDto, ProductDto} from "~/models/product/productQueries";
import {GetCategories} from "~/services/category.service";
import {GetCatalogs} from "~/services/catalog.service";
import {EditProduct} from "~/services/product.service";
import {ToastType, useToast} from "~/composables/useSwal";
import {getEnumValuesForSelect} from "~/utilities/customUtilities";
import type {GSelectData} from "~/models/gSelectData";

const props = defineProps<{
  step:number,
  product:ProductDto
}>();

const emits = defineEmits(['productEdited','updateProgress']);

// @ts-ignore
const editProductData:EditProductCommand = reactive({
  productId:props.product.id,
  title:props.product.title,
  slug:props.product.slug,
  price:props.product.price,
  discount:props.product.discount,
  weight:props.product.weight,
  healthNumber:props.product.healthNumber,
  packingType:props.product.packingType,
  quantity:props.product.quantity,
  productCode:props.product.productCode,
  barcodeNumber:props.product.barcodeNumber,
  categoryId:props.product.category.id,
  subCategoryId:props.product.subCategory?.id,
  catalogId:props.product.catalog?.id,
  dimensions: {
    width:props.product.dimensions.width,
    height:props.product.dimensions.height,
    length:props.product.dimensions.length
  },
  digiKalaData:{
    digikalaLink:props.product.digiKalaData?.digikalaLink,
    digikalaPrice:props.product.digiKalaData?.digikalaPrice
  },
  basalamData:{
    basalamLink:props.product.basalamData?.basalamLink,
    basalamPrice:props.product.basalamData?.basalamPrice
  },
  seoData: {
    metaTitle: props.product.seoData?.metaTitle,
    metaDescription: props.product.seoData?.metaDescription,
    canonical: props.product.seoData?.canonical,
    indexPage: props.product.seoData?.indexPage,
    metaKeyWords: props.product.seoData?.metaKeyWords,
    schema: props.product.seoData?.schema
  },
})
const editProductSchema = Yup.object().shape({
  title:Yup.string().required('وارد کردن عنوان ضروری است'),
  slug:Yup.string().required('وارد کردن لینک یکتا ضروری است'),
  price:Yup.number().min(0,'مبلغ وارد شده باید بیشتر از 0 باشد').required('وارد کردن مبلغ ضروری است'),
  discount:Yup.number().min(0,'مبلغ وارد شده باید بیشتر از 0 و کمتر از 100 باشد').max(100,'مبلغ وارد شده باید بیشتر از 0 و کمتر از 100 باشد'),
  productCode: Yup.string().required('وارد کردن کد محصول ضروری است'),
  barcodeNumber: Yup.string().required('وارد کردن بارکد ضروری است'),
  quantity: Yup.number().min(0,'تعداد نمی تواند کوچکتر از 0 باشد').required('وارد کردن تعداد ضروری است'),
  weight: Yup.number().min(0,'وزن نمی تواند کوچکتر از 0 باشد').required('وارد کردن وزن ضروری است'),
})


watch(
    editProductData,
    ()=>{
      const properties = Object.keys(editProductData);
      properties.pop();
      let filledProps = 0;
      properties.forEach((p:any)=>{
        //@ts-ignore
        if(editProductData[p] != null && editProductData[p] != '' && editProductData[p] != 0) {
          filledProps++;
        }
      })
      const progress = (filledProps / properties.length) * 100;
      emits('updateProgress',progress,props.step);
    }
);

const finalPrice = ref(0);
const calculateFinalPrice = ()=>{
  if(!autoCalculateDiscount.value) return;
  finalPrice.value = Math.round(editProductData.price - (editProductData.price * (editProductData.discount / 100)));
}
const setFinalPrice = ()=>{
  editProductData.discount = 100 - (Number(finalPrice.value) * 100) / editProductData.price;
}

const isLoading = ref(false);
const autoGenerateSlug = ref(true);
const autoCalculateDiscount = ref(true);
const loadingCategories = ref(false);
const loadingCatalogs = ref(false);

const toast = useToast();
const dataLoading = ref(false);
const selectCategories:Ref<GSelectData[]> = ref([]);
const categories:Ref<CategoryDto[]> = ref([]);
const catalogs:Ref<CatalogDto[]> = ref([]);
const selectCatalogs:Ref<GSelectData[]> = ref([]);
const subCategories:Ref<CategoryDto[]> = ref([]);
const selectSubCategories:Ref<GSelectData[]> = ref([]);

const categorySelected = (id:Number) => {
  const selectedCategory = categories.value.find(c=>c.id == id);
  subCategories.value = selectedCategory?.children ?? [];
  selectSubCategories.value = selectedCategory?.children.map(s=>{
    return {
      title:s.title,
      value:s.id
    } as GSelectData
  }) ?? [];
}

onMounted(async ()=>{
  dataLoading.value = true;
  await refreshCategories();
  await refreshCatalogs();
  calculateFinalPrice();
  dataLoading.value = false;
})

const refreshCategories = async ()=>{
  loadingCategories.value = true;

  const result = await GetCategories({pageId:1,take:100,search:''});
  if(result.isSuccess){
    categories.value = result.data?.data!;
    selectCategories.value = result.data?.data?.map(c=>{
      return {
        title:c.title,
        value:c.id
      } as GSelectData
    }) ?? [];
  }
  if(editProductData.categoryId != null)
    categorySelected(editProductData.categoryId);

  loadingCategories.value = false;
}
const refreshCatalogs = async ()=>{
  loadingCatalogs.value = true;

  const result = await GetCatalogs({pageId:1,take:100,search:''});
  if(result.isSuccess){
    catalogs.value = result.data?.data!;
    selectCatalogs.value = result.data?.data?.map(c=>{
      return {
        title:c.title,
        value:c.id
      } as GSelectData
    }) ?? [];
  }

  loadingCatalogs.value = false;
}

const UpdateProduct = async ()=>{
  isLoading.value = true;

  const productResult = await EditProduct(editProductData);
  if(productResult.isSuccess){
    await toast.showToast(productResult.metaData.message,ToastType.success);
    emits('productEdited',productResult.data);
  }else{
    await toast.showToast(productResult.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}

const generateSlug = ()=>{
  if(!autoGenerateSlug.value) return;
  editProductData.slug = editProductData.title.replaceAll(' ','-');
}

</script>

<style scoped>

</style>