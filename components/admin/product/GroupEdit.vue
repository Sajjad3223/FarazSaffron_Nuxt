<template>
<div>
  <div v-if="editStage == 'selectSubject'">
    <div class="min-w-[500px] flex flex-col">
      <button class="p-4 flex items-center justify-between" @click="editSubject = 'price',editStage='selectProducts'">
        <span class="text-lg">ویرایش گروهی قیمت ها</span>
        <svg class="w-4 rotate-90" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.08464 0.958313L5.0013 5.04165L0.917969 0.958313" stroke="currentColor" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <hr>
      <button class="p-4 flex items-center justify-between" @click="editSubject = 'dgkala-basalam',editStage='selectProducts'">
        <span class="text-lg">ویرایش گروهی قیمت دیجی کالا و باسلام</span>
        <svg class="w-4 rotate-90" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.08464 0.958313L5.0013 5.04165L0.917969 0.958313" stroke="currentColor" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <hr>
      <button class="p-4 flex items-center justify-between" @click="editSubject = 'quantity',editStage='selectProducts'">
        <span class="text-lg">ویرایش گروهی موجودی</span>
        <svg class="w-4 rotate-90" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.08464 0.958313L5.0013 5.04165L0.917969 0.958313" stroke="currentColor" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <hr>
      <button class="p-4 flex items-center justify-between" @click="editSubject = 'activity',editStage='selectProducts'">
        <span class="text-lg">ویرایش گروهی وضعیت</span>
        <svg class="w-4 rotate-90" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.08464 0.958313L5.0013 5.04165L0.917969 0.958313" stroke="currentColor" stroke-opacity="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
  <div v-else-if="editStage == 'selectProducts'">
    <div class="min-w-[500px] flex flex-col gap-4 mt-4">
      <button class="font-light ml-auto" @click="editStage = 'selectSubject'">< بازگشت</button>
      <span class="text-sm">محصولاتی که میخواهید ویرایش شوند را انتخاب کنید</span>
      <div class="flex flex-col gap-5">
        <BaseFCheckbox label="انتخاب همه" v-model="editAll" v-if="products.length > 0" />
        <ul class="w-full flex flex-col max-h-[50vh] overflow-y-auto">
          <li class="w-full flex items-center gap-4 py-2 cursor-pointer" v-for="p in products" :key="p.id" @click="toggleSelection(p)">
            <input type="checkbox" :name="p.id" :id="p.id" class="w-4 h-4 pointer-events-none" :checked="selectedProducts.includes(p.id)">
            <div class="flex-1 flex items-center gap-4 cursor-pointer">
              <div class="w-1/5 flex items-center justify-center">
                <img :src="`${SITE_URL}/product/images/${p.mainImage.src}`" :alt="p.mainImage.alt" class="max-h-[100px] mx-auto">
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <span class="text-sm select-none">{{p.title}}</span>
                <BaseGPrice :price="p.price / 10" v-if="editSubject == 'price'"/>
                <div class="w-full flex flex-col" v-else-if="editSubject == 'dgkala-basalam'">
                  <div class="w-full flex items-center gap-2">
                    <span class="text-xs opacity-70">قیمت دیجی کالا:</span>
                    <BaseGPrice :price="p.digiKalaData.digikalaPrice / 10" size="sm"/>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs opacity-70">قیمت باسلام:</span>
                    <BaseGPrice :price="p.basalamData.basalamPrice / 10" size="sm"/>
                  </div>
                </div>
                <div class="w-full flex items-center gap-2" v-else-if="editSubject == 'quantity'">
                  <span class="text-xs opacity-70">موجودی:</span>
                  <div class="flex items-center gap-1">
                    <span>{{p.quantity}}</span>
                    <span class="text-sm opacity-70">عدد</span>
                  </div>
                </div>
                <div class="w-full flex items-center gap-2" v-else-if="editSubject == 'activity'">
                  <span class="text-xs opacity-70">وضعیت:</span>
                  <span v-if="p.isActive">فعال</span>
                  <span v-else>غیر فعال</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <BaseGButton w-full @click="editStage = 'editData'">
        ادامه
      </BaseGButton>
    </div>
  </div>
  <div v-else-if="editStage == 'editData'">
    <div class="flex flex-col gap-4" v-if="editSubject == 'price'">
      <div class="min-w-[500px] flex flex-col items-start gap-4 mt-4">
        <button class="font-light" @click="editStage = 'selectProducts'">< بازگشت</button>
        <BaseFCheckbox label="تغییر یکسان همه انتخاب ها" v-model="changeEqual" />
      </div>
      <hr>
      <div v-if="!changeEqual">
        <div class="flex flex-col max-h-[50vh] overflow-y-auto">
          <div class="flex flex-col gap-2 py-4" v-for="(p,i) in getSelectedProducts" :key="p.id">
            <div class="flex items-center gap-4">
              <img :src="`${SITE_URL}/product/images/${p.mainImage.src}`" :alt="p.mainImage.alt" class="max-h-[100px]">
              <span class="text-sm select-none">{{p.title}}</span>
            </div>
            <BaseInputsPriceInput label="قیمت" unit="ریال" class="px-4" v-model="editProductCommand[i].price"/>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col gap-4 p-5">
        <span>نحوه تغییر قیمت</span>
        <div class="grid grid-cols-2 gap-4">
          <button @click="editType = 'staticValue'" :class="['border border-primary rounded-xl py-4 w-full',{'border-4':editType == 'staticValue'}]">
            عدد ثابت
          </button>
          <button @click="editType = 'percent'" :class="['border border-primary rounded-xl py-4 w-full',{'border-4':editType != 'staticValue'}]">
            درصدی
          </button>
        </div>
        <BaseInputsPriceInput v-if="editType == 'staticValue'" label="مبلغ افزایش" unit="ریال" v-model="valueToAdd" />
        <BaseInputsTextInput v-else type="number" decimal label="درصد افزایش" unit="ریال" side-text="%" v-model="percentToAdd" />
      </div>
      <BaseGButton w-full @click="ApplyChanges">
        ثبت تغییرات
      </BaseGButton>
    </div>
    <div class="flex flex-col gap-4" v-if="editSubject == 'quantity'">
      <div class="min-w-[500px] flex flex-col items-start gap-4 mt-4">
        <button class="font-light" @click="editStage = 'selectProducts'">< بازگشت</button>
        <BaseFCheckbox label="تغییر یکسان همه انتخاب ها" v-model="changeEqual" />
      </div>
      <hr>
      <div v-if="!changeEqual">
        <div class="flex flex-col max-h-[50vh] overflow-y-auto">
          <div class="flex flex-col gap-2 py-4" v-for="(p,i) in getSelectedProducts" :key="p.id">
            <div class="flex items-center gap-4">
              <img :src="`${SITE_URL}/product/images/${p.mainImage.src}`" :alt="p.mainImage.alt" class="max-h-[100px]">
              <span class="text-sm select-none">{{p.title}}</span>
            </div>
            <BaseInputsTextInput name="quantity" type="number" label="موجودی" class="px-4" v-model="editProductCommand[i].quantity"/>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col gap-4">
        <BaseInputsTextInput v-if="editType == 'staticValue'" label="تعداد موجودی" v-model="valueToAdd" />
      </div>
      <BaseGButton w-full @click="ApplyChanges">
        ثبت تغییرات
      </BaseGButton>
    </div>
    <div class="flex flex-col gap-4" v-else-if="editSubject == 'dgkala-basalam'">
      <div class="min-w-[500px] flex flex-col items-start gap-4 mt-4">
        <button class="font-light" @click="editStage = 'selectProducts'">< بازگشت</button>
        <BaseFCheckbox label="تغییر یکسان همه انتخاب ها" v-model="changeEqual" />
      </div>
      <hr>
      <div v-if="!changeEqual">
        <div class="flex flex-col max-h-[50vh] overflow-y-auto">
          <div class="flex flex-col gap-2 py-4" v-for="(p,i) in getSelectedProducts" :key="p.id">
            <div class="flex items-center gap-4">
              <img :src="`${SITE_URL}/product/images/${p.mainImage.src}`" :alt="p.mainImage.alt" class="max-h-[100px]">
              <span class="text-sm select-none">{{p.title}}</span>
            </div>
            <BaseInputsPriceInput label="قیمت دیجیکالا" unit="ریال" class="px-4" v-model="editProductCommand[i].digikalaPrice"/>
            <BaseInputsPriceInput label="قیمت باسلام" unit="ریال" class="px-4" v-model="editProductCommand[i].basalamPrice"/>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col gap-4 p-5">
        <span>نحوه تغییر قیمت</span>
        <div class="grid grid-cols-2 gap-4">
          <button @click="editType = 'staticValue'" :class="['border border-primary rounded-xl py-4 w-full',{'border-4':editType == 'staticValue'}]">
            عدد ثابت
          </button>
          <button @click="editType = 'percent'" :class="['border border-primary rounded-xl py-4 w-full',{'border-4':editType != 'staticValue'}]">
            درصدی
          </button>
        </div>
        <BaseInputsPriceInput v-if="editType == 'staticValue'" label="مبلغ افزایش" unit="ریال" v-model="valueToAdd" />
        <BaseInputsTextInput v-else type="number" decimal label="درصد افزایش" unit="ریال" side-text="%" v-model="percentToAdd" />
      </div>
      <BaseGButton w-full @click="ApplyChanges">
        ثبت تغییرات
      </BaseGButton>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import type {ProductFilterData} from "~/models/product/productQueries";
import {
  GetProducts,
  GroupEditDigikalaBasalamPrices,
  GroupEditPrices,
  GroupEditQuantities
} from "~/services/product.service";
import {SITE_URL} from "~/utilities/api.config";
import type {GroupEditDigikalaBasalamPriceData} from "~/models/product/productCommands";

const emits = defineEmits(['changesDone']);

const editSubject:Ref<string | null> = ref(null);
const editType:Ref<string | null> = ref('staticValue');
const editStage:Ref<string> = ref('selectSubject');

watch(
    editSubject,
    ()=>{
      selectedProducts.value = [];
      editProductCommand.value = [];
    }
)

const changeEqual = ref(false);
const editAll = ref(false);
watch(
    editAll,
    ()=>{
      selectedProducts.value = [];
      if(editAll.value)
        products.value.forEach(p=>{
          toggleSelection(p);
        })
    }
)

const valueToAdd = ref(0);
const percentToAdd = ref(0);

const products:Ref<ProductFilterData[]> = ref([]);
const selectedProducts:Ref<number[]> = ref([]);
const getSelectedProducts = computed(()=>{
  return products.value.filter(pr=>selectedProducts.value.includes(pr.id));
})

const editProductCommand:Ref<any[]> = ref([])

onMounted(async ()=>{
  const result = await GetProducts({take:50,pageId:1,search:undefined});
  if(result.isSuccess) products.value = result.data?.data!;
})

const toggleSelection = (product:ProductFilterData)=>{
  if(selectedProducts.value.some(p=>p == product.id)){
    selectedProducts.value = selectedProducts.value.filter(p=>p != product.id);
    editProductCommand.value = editProductCommand.value.filter(p=>p.id != product.id);
  }
  else{
    selectedProducts.value.push(product.id);
    if(editSubject.value == 'price')
      editProductCommand.value.push({id:product.id,price:product.price});
    if(editSubject.value == 'quantity')
      editProductCommand.value.push({id:product.id,quantity:product.quantity});
    if(editSubject.value == 'dgkala-basalam')
      editProductCommand.value.push({
        productId:product.id,
        digikalaPrice:product.digiKalaData?.digikalaPrice ?? 0,
        basalamPrice:product.basalamData?.basalamPrice ?? 0,
      });
  }
}

const toast = useToast();
const ApplyChanges = async () => {
  switch (editSubject.value){
    case 'price':
      await editPrices();
      break;
    case 'dgkala-basalam':
      await editDigikalaBasalamPrices();
      break;
    case 'quantity':
      await editQuantities();
      break;
    case 'activity':
      // ------
      break;
  }
}

const editPrices = async ()=>{
  let data = {};
  // Prepare Dictionary object to send to the API
  editProductCommand.value.forEach(p=>{
    let price = Number(p.price);
    if(changeEqual){
      if(editType.value == 'percent') {
        price = price + (price * (Number(percentToAdd.value) / 100))
      }else{
        price = price + Number(valueToAdd.value);
      }
    }
    data[p.id.toString()] = price;
  })
  const result = await GroupEditPrices(data);
  if(result.isSuccess){
    toast.showToast();
    emits('changesDone');
  }
  else{
    toast.showError(result.metaData);
  }
}
const editDigikalaBasalamPrices = async ()=>{
  if (changeEqual.value){
    editProductCommand.value.forEach(p=>{
      let digikalaPrice = p.digikalaPrice;
      let basalamPrice = p.basalamPrice;
      if(editType.value == 'percent'){
        digikalaPrice += (digikalaPrice * (percentToAdd.value / 100));
        basalamPrice += (basalamPrice * (percentToAdd.value / 100));
      }
      else{
        digikalaPrice += valueToAdd.value;
        basalamPrice += valueToAdd.value;
      }
      p.digikalaPrice = digikalaPrice;
      p.basalamPrice = basalamPrice;
    })
  }
  const result = await GroupEditDigikalaBasalamPrices(editProductCommand.value);
  if(result.isSuccess){
    toast.showToast();
    emits('changesDone');
  }
  else{
    toast.showError(result.metaData);
  }
}
const editQuantities = async ()=>{
  let data = {};
  // Prepare Dictionary object to send to the API
  editProductCommand.value.forEach(p=>{
    if(changeEqual.value){
      data[p.id.toString()] = Number(valueToAdd.value);
    }
    else
      data[p.id.toString()] = p.quantity;
  })
  const result = await GroupEditQuantities(data);
  if(result.isSuccess){
    toast.showToast();
    emits('changesDone');
  }
  else{
    toast.showError(result.metaData);
  }
}
</script>