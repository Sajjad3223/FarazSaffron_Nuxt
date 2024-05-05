<template>
  <div>
    <Head>
      <Title>محصولات جی پی زعفران</Title>
    </Head>

    <div v-if="!utilStore.isMobile()">
      <!--  Breadcrumb  -->
      <div class="my-8">
        <ul class="flex items-center gap-1">
          <li class="text-[#A5A5A5]">
            <NuxtLink to="/">جی پی زعفران</NuxtLink>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 17L10 12L15 7" stroke="#A5A5A5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
          <li class="text-brandOrange">
            <strong>محصولات جی پی زعفران</strong>
          </li>
        </ul>
      </div>

      <!--  Banner   -->
      <div class="w-full relative">
        <NuxtLink to="/market">
          <img src="../../assets/images/listBanner.png" alt="banner" class="w-full">
        </NuxtLink>
        <div class="absolute left-14 bottom-9 flex items-center gap-2">
          <button class="w-8 h-8 rounded-md border border-[#EBEBEB] hover:bg-[#EBEBEB] text-[#EBEBEB] transition-colors duration-200 hover:text-black grid place-items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="w-8 h-8 rounded-md border border-[#EBEBEB] hover:bg-[#EBEBEB] text-[#EBEBEB] transition-colors duration-200 hover:text-black grid place-items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 17L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <main class="flex items-start mt-12 gap-8">
        <!--  Filters  -->
        <aside class="w-1/4 flex flex-col space-y-6">
          <div class=" bg-[#F8F8F8] p-5 rounded-2xl flex flex-col space-y-8">
            <div class="border bg-white px-4 py-5 rounded-xl flex flex-col items-stretch">
              <h3 class="text-2xl font-bold text-[#494949] border-r-[4px] -mr-4 border-brandOrange pr-4">قیمت</h3>
               <ClientOnly><base-f-range /></ClientOnly>
              <button class="py-2 mt-4 rounded-lg bg-brandOrange/10 hover:bg-brandOrange/15 w-max px-10 mx-auto text-brandOrange transition-colors duration-200">اعمال</button>
            </div>
            <div class="border bg-white px-4 py-5 rounded-xl flex flex-col">
              <h3 class="text-2xl font-bold text-[#494949] border-r-[4px] -mr-4 border-brandOrange pr-4">دسته بندی</h3>
              <ul class="mt-6 flex flex-col space-y-4">
                <li class="flex flex-col space-y-4">
                  <div class="flex justify-between font-bold text-brandOrange">
                    <span>زعفران</span>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-180">
                      <path d="M16 10L11 15L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div class="flex flex-col space-y-2 pr-4 border-r border-brandOrange">
                    <base-f-checkbox label="نگین" />
                    <base-f-checkbox label="نگین" />
                    <base-f-checkbox label="نگین" />
                  </div>
                </li>
                <li class="flex justify-between text-[#858383]">
                  <span>پسته</span>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 10L11 15L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </li>
                <li class="flex justify-between text-[#858383]">
                  <span>ادویه</span>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 10L11 15L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </li>
                <li class="flex justify-between text-[#858383]">
                  <span>آجیل</span>
                  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 10L11 15L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <!--  Similar Products  -->
          <div class="bg-[#F8F8F8] rounded-xl p-8 flex flex-col">
            <div class="flex items-center justify-between w-full px-4">
              <strong>پرفروش ترین ها</strong>
              <div class="flex items-center gap-1">
                <button @click="carousel.prev">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M10 7L15 12L10 17" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                </button>
                <button @click="carousel.next">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 17L9 12L14 7" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-8">
              <client-only>
                <GPCarousel ref="carousel" :items-to-show="1" wrap-around dir="rtl" autoplay="5000">
                  <GPSlide v-for="i in 5" :key="i">
                    <li class="py-3.5 px-4 flex mx-8 items-start bg-white min-w-[350px] rounded-xl transition-all duration-300 similar" >
                      <div class="w-2/5 grid place-items-center relative">
                        <img src="../../assets/images/product-image.png" alt="product" class="w-full ">
                      </div>
                      <div class="flex-1 flex flex-col items-start space-y-4">
                        <strong class="text-lg">نگین پاکتی</strong>
                        <span class="text-[#9E9E9E] text-sm">
                1 مثقال- 4/608 گرم
              </span>
                        <ul class="flex items-center gap-0.5">
                          <li v-for="i in 5" :key="i">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <rect width="10" height="10" fill="url(#pattern0_308_3938)"/>
                              <defs>
                                <pattern id="pattern0_308_3938" patternContentUnits="objectBoundingBox" width="1" height="1">
                                  <use xlink:href="#image0_308_3938" transform="scale(0.01)"/>
                                </pattern>
                                <image id="image0_308_3938" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAB5hJREFUeAHtXUmM3EQUHVax72sI0YzreyYkYVgCiJ0IIbEeOMApYZEQSAQQIIFGCELCBSI2ASdCDkhJ6KpyUCCTAAoggiBEYhPigAQEEAo7XEDJTFdVA0bfHffi7p623S7jpUay3LbLv95/z/5jV/0qDw2ZP8OAYcAwYBgwDBgGDAOGAcNABwM1OnpRtQLrcMHfHQXMjvQYqFFyvqCkJhm4uAhGVM2B89JDYGpqY0Bye4MvRmPN7Q1thcxGOgy4G8cOFRSmG0L4dwklwnWsw9NBYWppMCA5LAmK0djmsKRR0PxIhwHJrMmGAHvujua2NZkOClOLx4D7yvARghLRFKD+T93fFpRI96U5Rxq6UmJAUftmn/xea8XJTSnBMdVIBq/3EqK5337NMJUCAxiKMCQ1iW8PV/5+fCdxN8w9OgVI5a5CUbjFJ73fGsuWm60UvJfM2tJPiOZxa0sKkMpbhVsZPaa1qaRJfI+wRUlt1xpyXHkZ0+y5YuS2fiIEj+M5mmGV17xi9ttBwvtt4znlZUyj564Dx0YJV75QgsLfuysjx2uEVk7TisFSn+Soa8Xg9nKyptFrQcm7UYXwyysGWzVCK5/p3c7wCRh6fIKjrgWDf6bo2KzyMafJY8HIXVFFCJZHG5rglc+soPb7QYKjbqON8jGnwWMMNRhyogoQLC8o/Ft1rDkaIJbLpKBwb5DcuNuCwT3lYk+Dt5LC9rgCdJxHYbsGiOUxOU3JyRhqOojt6LLt3pYVPM8LW3TucHkYTNhTQcl9QVIH3UabCcMsj7kqtT8aVIDg+VUKH5aHwQQ9rTpjI0mGq1ZhBAOSINRymJIUJlpJTPQ3hYlysJigl4LCp4mK0PIggLYThJqeKWxDUg5ZGFxqnFwguH1ZcJGcXCsZXB9cFCe3YkdR+wJLvbsA74TWhcNyxa2ndYnh2/Xq4PBAW90UJgSz72/HuQd3PfWowzfBrauCPOC2YtbZQd4UhTNi9WC6a8YPlpxs9sGbdbjH6vA8WZPuplkHhb61JINHwhtPGmxJ7HFYHkWQEIloJSGu5X9PohcpJ5ujCPJYopXrcirPdik8GlqQ+tiLwZu8jajdo4igsA05Di0IFnS3LtpXUliRRNO3EaYuDL7oKk6edZ15+0cSo7Vw/REOfjWkdr/aw/IiKPwpKVzXym3s39PrYLZg5L2wlZty7eJh+xk2BcUWoNuJrjO0jwlh7UT3u/AaIWrVwv26cZrIvmqFXCo5+bkfmLIfF4z8IRi5MhHS+xnB1/9oWejRrqy8i4k5ZKmnHbnu0F7YDjRIvlTeiQ/i97oLOKzE8N7votZ2vObAJZKRn4LgyratOPwmOFyujegohjEROty4v2KGLlWBd6bWnnJiFM60l8UQJph9N47tK8vd4YVrCivcFUN7ayc4bgXKGT1HUuu7wovCyQ+5mX0IR79KBpuKKoqqkLdyN+akEcJCDGHOi3DegKGsh6h+oU1R6yzJyLd5IX0GnDux67qfv7k47q6Dw6oU+AzOehOQZfY4h42uM/+oXJAdBSQmD8w0aUzWBPGeGClMYPiN4meuyioGZ0oKO7JGfhc83ysG5+aK3LhgMYQJZn/ehYRMhC7EVqpZ6bCtR1Dye1YFwWaQ/7U9Ku6VHve8GrcvzqoYPq7cvPTFFaH1PMXgKd/xrK4VgydbMRf6t2TwdVaFaOIi3xRaBN856VinNp3OeusvWeDjLuxaUntZbgTh9kOFFcJ3TDD4JC+CVBl87OMu5HraGT1J16goHSIjVhx4Wkgx0KkkpsjQQfxMNgUjdxZWkDgTkM1EVhrHsO+jkIJ4s1HnsHvXm262iLNkKwo3pHFFa6mjiJP7SwYvayErjTEi3FpfqLDlvjh8gKBkly5BMKzozHZB7OhDYUQRzL5GlxiY4YKfPsIRr7JCvtRVD/pQIEFgtSai1rjOvEN8olxn9oE4IEbHu45gsNqvJ9drTCKTFH5JUhDMLMcx8b2IERVyRdJ1FqaPpOZYFyYpBr4X4Bt/LzH8/V6GfsJj7QuRdSK5/UQSgnjJEZhwECFtE5MT6okVMJUEBsnI477guV1LBl8NTEaFfKEc+/S4JEgH5glmfTYwDgo74mLIxHmSkQWDkID/nAWzV0WahqKH5/jYKjmsHHhUcQXm96gi+7slIw/GFcQbb0Htq5P2EkcVS0p+jIsLfUoaU2r2Ys8Ix+ENnIlIF1D8Dolk8GocUdAnXbi02o3T94Ff7sQxJmllCipGbozagpDbPhJB4Y4oVyD2zglnbEzrVdLFOI4flww+iIIVfetiKtu7FIc3wziJV9zA000MSEVjGpGQE/6jbwNWme7pmIYZ5tN2ksHOKoVF6aLrXRt++jvM0Inc9ZFIBov73h3cWp/FFH/MO5bUWtsXP4PFvaXN2BFsiOvlkGDkL+ysyhjkDjiIEbH29IPCCx0nZXUHvsx1cwTniUp8EhaNJOyZO3hbV18YeV5j1cmaVmz0NMGs3b4j9bF59rI8ZpQjZsng4dYPknm+VUbGk2VNszVsP8KnJ8XIM5g+qrk67eZlZWRcMfs59Al9016hqcAwYBgwDBgGDAOGAcOAYcAwYBgwDKTEwH8KZ0KLjMXwNQAAAABJRU5ErkJggg=="/>
                              </defs>
                            </svg>
                          </li>
                        </ul>
                        <div class="flex items-center gap-1">
                          <strong class="text-lg" style="font-family: 'Vazir FD',serif">618,000</strong>
                          <span class="flex flex-col items-center text-[10px] font-light opacity-70 leading-[8px]">تــــــو <br> مــان</span>
                        </div>
                      </div>
                    </li>
                  </GPSlide>
                </GPCarousel>
              </client-only>
            </div>
            <div class="mx-auto flex gap-1 mt-4">
              <!--        <button class="h-2 w-6 rounded-full bg-brandOrange"></button>-->
              <button v-for="i in carousel?.data.slidesCount.value"
                      :class="['h-2 text-[5px] rounded-full transition-all duration-200',
            carousel?.data.currentSlide.value + 1 == i ? 'w-6 bg-brandOrange' : 'w-2 bg-brandOrange/20']"
                      @click="carousel.slideTo(i-1)"></button>
            </div>
          </div>
        </aside>
        <!--  Products   -->
        <div class="flex-1">
          <!--   Order By    -->
          <div class="bg-[#F8F8F8] rounded-3xl py-4 px-8 flex justify-between items-center">
            <div class="flex items-center gap-6">
              <button class="text-[#898989] hover:text-[#656565] transition-colors duration-200">
                فروش ویژه
              </button>
              <button class="text-[#656565] font-bold relative after:h-1.5 after:absolute after:-bottom-4 after:rounded-full after:w-1/2 after:bg-brandOrange after:inset-x-0 after:-translate-x-1/2">
                محبوب ترین ها
              </button>
              <button class="text-[#898989] hover:text-[#656565] transition-colors duration-200">
                جدیدترین ها
              </button>
              <button class="text-[#898989] hover:text-[#656565] transition-colors duration-200">
                موجود در انبار
              </button>
            </div>
            <div class="w-6 flex items-center flex-col gap-0.5">
              <span class="w-full h-0.5 rounded-full bg-[#D9D9D9]"></span>
              <span class="w-2/3 h-0.5 rounded-full bg-[#878787]"></span>
              <span class="w-1/3 h-0.5 rounded-full bg-[#D9D9D9]"></span>
            </div>
          </div>
          <!--    Products List    -->
          <div class="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 my-4">
            <GCard :product="p" v-for="p in products" :key="p.id" />
          </div>
          <f-pagination :pagination-data="paginationData" v-model="pageId" />
        </div>
      </main>
    </div>

    <div v-else class="py-4">
      <!--  Search  -->
      <div class="flex mx-4 mt-3 items-center relative">
        <input type="text" class="form-input w-full h-12 p-4 border-none focus:ring-[#9b9a9a] bg-[#F4F4F4] rounded-lg peer" required>
        <strong class="absolute opacity-50 right-4 pointer-events-none transition-all duration-200 peer-focus:opacity-0 peer-checked:opacity-0 peer-valid:opacity-0">جستجوی محصول...</strong>
        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute opacity-50 left-4">
          <circle cx="6.38251" cy="6.38251" r="5.63251" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10.7957 13.4585C10.6083 12.6246 11.4856 11.9552 12.2404 12.356L13.689 13.1252C14.3329 13.4672 14.4063 14.3611 13.8267 14.8034L12.7377 15.6344C12.1581 16.0767 11.3153 15.7701 11.1554 15.0587L10.7957 13.4585Z" fill="currentColor"/>
        </svg>
      </div>
      <hr class="my-4">
      <!--  Breadcrumb  -->
      <div class="my-4">
        <ul class="flex items-center gap-1">
          <li class="text-[#A5A5A5]">
            <NuxtLink to="/">جی پی زعفران</NuxtLink>
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 17L10 12L15 7" stroke="#A5A5A5" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </li>
          <li class="text-brandOrange">
            <strong>محصولات جی پی زعفران</strong>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <span>تعداد محصولات:</span>
          <span>{{paginationData?.entityCount}}</span>
        </div>
        <ul v-if="!loading">
          <li class="flex items-center mt-4 border-b py-2 last:border-none" v-for="product in products" :key="product.id">
            <div class="flex flex-col flex-1 space-y-4">
              <div class="flex items-start justify-between">
                <NuxtLink :to="`/product/${product.slug}`">
                  <strong>
                    {{product.title}}
                  </strong>
                </NuxtLink>
                <div class="flex items-center gap-1">
                  <small>4.4</small>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.13481 9.32439C3.19477 9.0573 3.08575 8.67575 2.89497 8.48497L1.57045 7.16045C1.15619 6.74619 0.992668 6.30468 1.11258 5.92313C1.23795 5.54158 1.62495 5.27994 2.20273 5.18183L3.90336 4.89839C4.14864 4.85479 4.44843 4.63676 4.5629 4.41328L5.50043 2.53277C5.77296 1.99315 6.14361 1.69336 6.54697 1.69336C6.95032 1.69336 7.32097 1.99315 7.59351 2.53277L8.53103 4.41328C8.60189 4.55499 8.74906 4.69126 8.90713 4.78393L3.03669 10.6544C2.96038 10.7307 2.82957 10.6598 2.85137 10.5508L3.13481 9.32439Z" fill="#FFD234"/>
                    <path d="M10.1903 8.48568C9.99403 8.68191 9.88501 9.05801 9.95042 9.3251L10.3265 10.9658C10.4846 11.6471 10.3865 12.1595 10.0485 12.4048C9.91227 12.5029 9.74874 12.5519 9.55797 12.5519C9.27998 12.5519 8.95294 12.4484 8.59319 12.2358L6.99612 11.2874C6.74539 11.1402 6.33113 11.1402 6.0804 11.2874L4.48333 12.2358C3.8783 12.5901 3.36048 12.65 3.02799 12.4048C2.90262 12.3121 2.80996 12.1867 2.75 12.0232L9.37809 5.39512C9.62883 5.14438 9.98313 5.02992 10.3265 5.08988L10.877 5.18254C11.4548 5.28065 11.8418 5.54229 11.9672 5.92384C12.0871 6.30539 11.9236 6.7469 11.5093 7.16115L10.1903 8.48568Z" fill="#FFD234"/>
                  </svg>
                </div>
              </div>
              <span class="w-max px-3 py-0.5 rounded-full bg-[#F5F5F5] border-b border-black/40 text-xs font-thin">
              {{ EPackingType[product.packingType].toString().replaceAll('_',' ') }}
            </span>
              <base-g-price :price="product.price / 10" class="self-end"/>
            </div>
            <NuxtLink :to="`/product/${product.slug}`">
              <img :src="`${SITE_URL}/product/images/${product.mainImage.src}`" :alt="product.mainImage.alt" class="max-w-[140px]">
            </NuxtLink>
          </li>
        </ul>
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
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {SITE_URL} from "~/utilities/api.config";

const loading = ref(false);
const products: Ref<ProductFilterData[]> = ref([]);
const orderBy = ref(1);
const route = useRoute();
const pageId = ref(1);
const carousel = ref();
const paginationData:Ref<PaginationData | null> = ref(null);
const utilStore = useUtilStore();

const orderBys = Object.entries(EOrderBy).map(t => {
  return {
    id: t[1],
    title: t[0].replaceAll('_', ' ')
  }
});
const orderByOptions = orderBys.splice(orderBys.length / 2, orderBys.length);

const filterParams: ProductFilterParams = reactive({
  pageId: pageId.value,
  take: 8,
  search: route.query?.search?.toString() ?? undefined,
  orderBy: orderBy.value,
  categoriesIncluded:undefined,
  dgkalaLink:undefined,
  maxPrice:undefined,
  minPrice:undefined,
  fromDate:undefined,
  justWithDiscount:undefined,
  maxDiscount:undefined,
  maxQuantity:undefined,
  minDiscount:undefined,
  minQuantity:undefined,
  serialNumber:undefined,
  toDate:undefined
});

watch(pageId, async () => await getData())
watch(orderBy, async () => {
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
  filterParams.pageId = pageId.value;
  const productsResult = await GetProducts(filterParams);
  if (productsResult.isSuccess) {
    products.value = productsResult.data?.data!;
    paginationData.value = FillPaginationData(productsResult.data!);
  }

  loading.value = false;
}
</script>

<style scoped>
*{
  font-family: "Vazir FD",serif;
}

.hover-brand:hover{
  box-shadow: 0 5px 5px 0 #F1482380;
}

</style>