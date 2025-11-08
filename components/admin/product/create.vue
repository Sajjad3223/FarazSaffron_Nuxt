<template>
  <Form :validation-schema="addProductSchema" class="grid grid-cols-1 lg:grid-cols-2 gap-4" @submit="AddProduct" v-slot="{meta,errors,errorBag}">
    <div class="flex flex-col gap-4 row-span-2 relative">
      <base-inputs-text-input label="عنوان محصول" v-model="addProductData.title" @update:modelValue="generateSlug" side-slot name="title">
        <button @click="autoGenerateSlug = !autoGenerateSlug,generateSlug()" class="text-sm font-light opacity-20 absolute left-3 border rounded-full border-black w-4 h-4 flex items-center justify-center">
          <span class="w-1 h-1 rounded-full bg-black"></span>
        </button>
      </base-inputs-text-input>
      <base-inputs-text-input label="عنوان یکتا" v-model="addProductData.slug" side-slot name="slug">
        <button @click="autoGenerateSlug = !autoGenerateSlug,generateSlug()" class="text-sm font-light opacity-20 absolute left-3 border rounded-full border-black w-4 h-4 flex items-center justify-center">
          <span class="w-1 h-1 rounded-full bg-black"></span>
        </button>
      </base-inputs-text-input>
      <Transition name="fade">
        <div v-if="autoGenerateSlug" class="h-[70px] pointer-events-none w-1 border-l border-dashed border-black opacity-20 absolute left-5 top-1/2 -translate-y-1/3 z-10"></div>
      </Transition>
    </div>
    <base-inputs-file-input class="row-span-3" v-model="addProductData.mainImage" label="تصویر اصلی" name="mainImage" />

    <base-inputs-text-input label="کد محصول" v-model="addProductData.productCode" name="productCode"/>
    <base-inputs-text-input label="بارکد محصول" v-model="addProductData.barcodeNumber" name="barcodeNumber"/>
    <base-inputs-text-input label="توضیحات تصویر" v-model="addProductData.mainImageAlt" name="mainImageAlt"/>

    <hr class="col-span-full my-4">

    <base-inputs-price-input v-model="addProductData.price" label="قیمت محصول" unit="ریال" @update:modelValue="calculateFinalPrice" name="price"/>

    <div class="grid grid-cols-3 gap-4">
      <div class="flex items-center gap-4">
        <div class="flex items-center">
          <base-inputs-text-input label="تخفیف" decimal type="number" v-model="addProductData.discount" @update:modelValue="calculateFinalPrice" side-text="%" name="discount"/>
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

      <base-inputs-price-input class="col-span-2" v-model="finalPrice" label="قیمت نهایی" unit="ریال" @update:modelValue="setFinalPrice" />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <base-inputs-text-input label="موجود در انبار" type="number" v-model="addProductData.quantity" side-text="عدد" name="quantity"/>
      <base-inputs-text-input label="وزن بسته بندی" type="number" v-model="addProductData.weight" side-text="گرم" name="weight"/>
    </div>

    <div class="grid grid-cols-3 gap-4" >
      <BaseGSelect v-model="addProductData.categoryId" :options="selectCategories" @update:modelValue="categorySelected" label="دسته بندی اصلی" name="categoryId"/>
      <BaseGSelect v-model="addProductData.subCategoryId" :options="selectSubCategories" label="دسته بندی فرعی" name="subCategoryId"/>
      <BaseGSelect v-model="addProductData.packingType" :options="getEnumValuesForSelect<EPackingType>(EPackingType)" label="نوع بسته بندی" name="packingType"/>
    </div>

    <div class="grid grid-cols-2 gap-4">

      <base-inputs-text-input label="کد بهداشت" v-model="addProductData.healthNumber" name="healthNumber"/>
      <BaseGSelect v-model="addProductData.catalogId" :options="selectCatalogs" label="کاتالوگ محصول" name="catalogId"/>
    </div>
    <base-g-dimension v-model="addProductData.dimensions" />

    <hr class="col-span-full my-4">

    <base-inputs-text-input label="لینک دیجی کالا" v-model="addProductData.digiKalaData.digikalaLink" name="digikalaLink"/>
    <base-inputs-price-input v-model="addProductData.digiKalaData.digikalaPrice" label="قیمت در دیجی کالا" unit="ریال" name="digikalaPrice"/>

    <base-inputs-text-input label="لینک باسلام" v-model="addProductData.basalamData.basalamLink" name="basalamLink"/>
    <base-inputs-price-input v-model="addProductData.basalamData.basalamPrice" label="قیمت در باسلام" unit="ریال" name="basalamPrice"/>

    <base-g-button :is-loading="isLoading" type="submit" color="info" :disabled="!meta.valid" is-icon text-color="white" class="col-span-full w-max mr-auto text-sm font-light" >
      ثبت و ادامه
    </base-g-button>

  </Form>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import * as Yup from'yup';
import {EPackingType} from "~/models/product/EPackingType";
import type {CreateProductCommand} from "~/models/product/productCommands";
import type {CategoryDto} from "~/models/categories/categoryQueries";
import type {CatalogDto} from "~/models/product/productQueries";
import {GetCategories} from "~/services/category.service";
import {GetCatalogs} from "~/services/catalog.service";
import {CreateProduct} from "~/services/product.service";
import {ToastType, useToast} from "~/composables/useSwal";
import {getEnumValuesForSelect} from "~/utilities/customUtilities";
import type {GSelectData} from "~/models/gSelectData";

const props = defineProps<{
  step:number
}>();

const emits = defineEmits(['productCreated','updateProgress']);

//@ts-ignore
const addProductData:CreateProductCommand = reactive({
  title: '',
  slug: '',
  price: null,
  discount: 0,
  weight:null,
  healthNumber:null,
  packingType: EPackingType.کیفی,
  mainImage: null,
  quantity: 0,
  mainImageAlt: '',
  productCode: '',
  barcodeNumber: '',
  categoryId: null,
  subCategoryId: null,
  catalogId: null,
  dimensions: {
    width:0,
    height:0,
    length:0
  },
  digiKalaData:{
    digikalaLink:'',
    digikalaPrice:0
  },
  basalamData:{
    basalamLink:'',
    basalamPrice:0
  },
  seoData: {
    metaTitle:'',
    metaDescription:'',
    canonical:'',
    indexPage:false,
    metaKeyWords:'',
    schema:''
  },
})
/*const addProductSchema = Yup.object().shape({
  title:Yup.string().required('وارد کردن عنوان ضروری است'),
  slug:Yup.string().required('وارد کردن لینک یکتا ضروری است'),
  price:Yup.number().min(0,'مبلغ وارد شده باید بیشتر از 0 باشد').required('وارد کردن مبلغ ضروری است'),
  discount:Yup.number().min(0,'مبلغ وارد شده باید بیشتر از 0 و کمتر از 100 باشد').max(100,'مبلغ وارد شده باید بیشتر از 0 و کمتر از 100 باشد'),
  productCode: Yup.string().required('وارد کردن کد محصول ضروری است'),
  barcodeNumber: Yup.string().required('وارد کردن بارکد ضروری است'),
  quantity: Yup.number().min(0,'تعداد نمی تواند کوچکتر از 0 باشد').required('وارد کردن تعداد ضروری است'),
  weight: Yup.number().min(0,'وزن نمی تواند کوچکتر از 0 باشد').required('وارد کردن وزن ضروری است'),
})*/

watch(
    addProductData,
    ()=>{
      const properties = Object.keys(addProductData);
      properties.pop();
      let filledProps = 0;
      properties.forEach(p=>{
        if(addProductData[p] != null && addProductData[p] != '' && addProductData[p] != 0) {
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
  finalPrice.value = addProductData.price - (addProductData.price * (addProductData.discount / 100));
}
const setFinalPrice = ()=>{
  addProductData.discount = 100 - (Number(finalPrice.value) * 100) / addProductData.price;
}

const isLoading = ref(false);
const autoGenerateSlug = ref(true);
const autoCalculateDiscount = ref(true);
const loadingCategories = ref(false);
const loadingCatalogs = ref(false);

const toast = useToast();
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

const mainImage = ref();
onMounted(async ()=>{
  await refreshCategories();
  await refreshCatalogs();
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
  if(addProductData.categoryId != null)
    categorySelected(addProductData.categoryId);

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

const AddProduct = async ()=>{
  isLoading.value = true;

  const productData = new FormData();
  productData.append('title',addProductData.title);
  productData.append('slug',addProductData.slug);
  productData.append('price',addProductData.price.toString());
  productData.append('discount',addProductData.discount.toString());
  productData.append('weight',addProductData.weight.toString());
  productData.append('healthNumber',addProductData.healthNumber ?? '');
  productData.append('packingType',addProductData.packingType.toString());
  if(addProductData.mainImage)
    productData.append('mainImage',addProductData.mainImage);
  productData.append('mainImageAlt',addProductData.mainImageAlt);
  productData.append('productCode',addProductData.productCode);
  productData.append('barcodeNumber',addProductData.barcodeNumber);
  productData.append('categoryId',addProductData.categoryId.toString());
  productData.append('subCategoryId',addProductData.subCategoryId?.toString() ?? '');
  productData.append('catalogId',addProductData.catalogId?.toString() ?? '');
  productData.append('dimensions.Width',addProductData.dimensions.width.toString());
  productData.append('dimensions.Length',addProductData.dimensions.length.toString());
  productData.append('dimensions.Height',addProductData.dimensions.height.toString());
  productData.append('digikalaData.digiKalaLink',addProductData.digiKalaData?.digikalaLink ?? '');
  productData.append('digikalaData.digiKalaPrice',addProductData.digiKalaData?.digikalaPrice?.toString() ?? '0');
  productData.append('basalamData.basalamLink',addProductData.basalamData?.basalamLink ?? '');
  productData.append('basalamData.basalamPrice',addProductData.basalamData?.basalamPrice?.toString() ?? '0');
  productData.append('quantity',addProductData.quantity.toString());

  const productResult = await CreateProduct(productData);
  if(productResult.isSuccess){
    await toast.showToast(productResult.metaData.message,ToastType.success);
    emits('productCreated',productResult.data);
  }else{
    await toast.showToast(productResult.metaData.message,ToastType.error,0);
  }

  isLoading.value = false;
}

const generateSlug = ()=>{
  if(!autoGenerateSlug.value) return;
  addProductData.slug = addProductData.title.replaceAll(' ','-');
}

</script>

<style scoped>

</style>