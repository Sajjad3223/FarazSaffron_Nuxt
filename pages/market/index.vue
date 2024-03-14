<template>
  <Head>
    <Title>محصولات جی پی</Title>
  </Head>

  <div class="flex flex-col mt-12 mx-6 lg:mx-0">
    <h2 class="font-black dark:text-white text-3xl">
      محصولات جی پی زعفران
    </h2>
    <div class="flex flex-col lg:flex-row space-x-4 space-x-reverse mt-12">
      <div class="w-full lg:w-1/5 flex flex-col space-y-4" v-if="false"> <!-- TODO Implement -->
        <div
            class="bg-bgWhite dark:bg-gray-800 dark:text-white drop-shadow lg rounded-xl p-4 w-full space-y-4 sticky top-16">
          <div class="flex justify-between items-center">
            <h4 class="text-xl font-bold">فیلتر ها</h4>
            <button>
              <small class="text-primary font-light">حذف فلیتر ها</small>
            </button>
          </div>
          <hr>
          <div class="flex flex-col space-y-4 mt-8" id="testParent">
            <div class="flex justify-between items-center w-full px-2">
              <strong>دسته بندی</strong>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                      stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="border rounded-lg p-4 w-full transition-all duration-200 overflow-hidden" id="testContainer">
              <ul class="space-y-4 " id="test">
                <li class="flex flex-col space-y-2" v-for="c in categories" :key="c.id">
                  <div class="flex items-center space-x-2 space-x-reverse">
                    <input type="checkbox" name="categoriesIncluded" :id="`${c.id}-${c.title}`" class="w-4 h-4">
                    <label :for="`${c.id}-${c.title}`">{{ c.title }}</label>
                  </div>
                  <ul class="mr-4 text-sm space-y-2">
                    <li v-for="s in c.children" :key="s.id">
                      <div class="flex items-center space-x-2 space-x-reverse">
                        <input type="checkbox" name="categoriesIncluded" :id="`${s.id}-${s.title}`" class="w-4 h-4">
                        <label :for="`${s.id}-${s.title}`">{{ s.title }}</label>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col space-y-4 mt-8" id="testParent">
            <div class="flex justify-between items-center w-full px-2">
              <strong>محدوده قیمت</strong>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                      stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="border rounded-lg p-4 w-full transition-all duration-200 overflow-hidden" id="testContainer">
              <div class="space-y-1" id="test">
                <input type="range" class="w-full">
                <div class="w-full flex justify-between text-xs font-light">
                  <span>0</span>
                  <span>23,451,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 mt-12 lg:mt-0">
        <div class="w-full flex flex-col space-y-4">
          <div class="text-xs lg:text-sm xl:text-base dark:text-white border-b pb-2 flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="scale-75 lg:scale-100">
              <path d="M3 7H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10 17H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="hidden lg:block mr-1 ml-4">مرتب سازی:</span>

            <ul class="flex items-center space-x-4 space-x-reverse text-xs lg:text-sm xl:text-base font-light">
              <li v-for="o in orderByOptions" :class="['cursor-pointer',{'font-bold':orderBy == o.id}]"
                  @click="orderBy = o.id">
                {{ o.title }}
              </li>
            </ul>

            <span class="hidden lg:block mr-auto text-sm opacity-70">{{ products.length }} کالا</span>
          </div>
          <div class="p-4 bg-bgWhite dark:bg-gray-800 drop-shadow rounded-xl">
            <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" v-if="!loading">
              <li v-for="p in products" :key="p.id">
                <f-card :shadow="false" :rounded="false" :product="p"/>
              </li>
            </ul>
            <div class="p-8 bg-gray-200 dark:bg-gray-700 rounded-xl text-black dark:text-white grid h-96 place-items-center" v-else>
              <span class="animate-spin">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="60px"
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ProductFilterData, ProductFilterParams} from "~/models/product/productQueries";
import {GetProducts} from "~/services/product.service";
import {EOrderBy} from "~/models/product/EOrderBy";
import {EPackingType} from "~/models/product/EPackingType";
import {GetCategories} from "~/services/category.service";
import type {CategoryDto} from "~/models/categories/categoryQueries";

const loading = ref(false);
const products: Ref<ProductFilterData[]> = ref([]);
const pageId = ref(1);
const orderBy = ref(1);
const route = useRoute();


const orderBys = Object.entries(EOrderBy).map(t => {
  return {
    id: t[1],
    title: t[0].replaceAll('_', ' ')
  }
});
const orderByOptions = orderBys.splice(orderBys.length / 2, orderBys.length);

const filterParams: ProductFilterParams = reactive({
  pageId: pageId.value,
  take: 9,
  search: route.query.search,
  orderBy: orderBy.value,
  categoriesIncluded:[]
});

watch(pageId, async () => await getData())
watch(orderBy, async () => {
  console.log(orderBy.value);
  await getData();
})

onMounted(async () => {
  await getData();
  await refreshCategories();
})

const categories:Ref<CategoryDto[]> = ref([]);
const refreshCategories = async ()=>{
  const result = await GetCategories({pageId:1,take:100,search:''});
  if(result.isSuccess){
    categories.value = result.data?.data!;
  }
}

const getData = async () => {
  loading.value = true;

  filterParams.orderBy = orderBy.value;
  const productsResult = await GetProducts(filterParams);
  if (productsResult.isSuccess) {
    products.value = productsResult.data?.data!;
  }

  loading.value = false;
}
</script>

<style scoped>
#test {
  max-height: 0;
  transition: max-height 0.5s ease;
}

#testContainer {
  padding: 0 1rem;
  transition: padding 0.5s ease;
}

#testParent:hover #testContainer {
  padding: 1rem;
}

#testParent:hover #test {
  max-height: 500px;
}

</style>