<template>
  <div>
    <Head>
      <Title>محصولات جی پی زعفران</Title>
    </Head>

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
        <img src="~/assets/images/listBanner.png" alt="banner" class="w-full">
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

    <div class="flex items-start mt-12 gap-8">
      <div class="w-1/4 flex flex-col space-y-6">
        <div class=" bg-[#F8F8F8] p-5 rounded-2xl flex flex-col space-y-8">
          <div class="border bg-white px-4 py-5 rounded-xl flex flex-col">
            <h3 class="text-2xl font-bold text-[#494949] border-r-[4px] -mr-4 border-brandOrange pr-4">قیمت</h3>
            <!-- <base-f-range />   TODO redesign and place range input component here -->
            <input type="range" name="" id="" class="w-full mt-6">
            <div class="grid grid-cols-2 my-4 place-items-center">
              <div class="flex items-center gap-2">
              <span class="text-[#BFBFBF]">
              از
            </span>
                <strong class="text-[#767676]" style="font-family: 'Vazir FD',serif">
                  0
                </strong>
                <span class="text-[#BFBFBF]">تومان</span>
              </div>
              <div class="flex items-center gap-2">
              <span class="text-[#BFBFBF]">
              تا
            </span>
                <strong class="text-[#767676]" style="font-family: 'Vazir FD',serif">
                  680,000
                </strong>
                <span class="text-[#BFBFBF]">تومان</span>
              </div>
            </div>
            <button class="py-2 rounded-lg bg-brandOrange/10 hover:bg-brandOrange/15 w-max px-10 mx-auto text-brandOrange transition-colors duration-200">اعمال</button>
          </div>
          <div class="border bg-white px-4 py-5 rounded-xl flex flex-col">
            <h3 class="text-2xl font-bold text-[#494949] border-r-[4px] -mr-4 border-brandOrange pr-4">دسته بندی</h3>
            <ul class="mt-6 flex flex-col space-y-4">
              <li class="flex justify-between font-bold text-brandOrange">
                <span>زعفران</span>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 10L11 15L6 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
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
        <div class="p-5 bg-brandOrange/10 rounded-2xl flex flex-col items-center space-y-4">
          <div class="flex items-center justify-between w-full px-4">
            <strong>پرفروش ترین ها</strong>
            <div class="flex items-center gap-1">
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M10 7L15 12L10 17" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </svg>
              </button>
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 17L9 12L14 7" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="w-full border bg-white p-6 rounded-xl">
            <div class="w-full flex items-center gap-6">
              <img src="~/assets/images/product-image.png" alt="product" class="w-1/3">
              <div class="flex flex-col items-start">
                <strong class="text-lg">نگین پاکتی</strong>
                <span class="text-sm opacity-80 text-light" style="font-family: 'Vazir FD',serif">1 مثقال- 4/608 گرم</span>
                <div class="opacity-70 mt-4">
                  <strong style="font-family: 'Vazir FD',serif">
                    618,000
                  </strong>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto flex gap-1 mt-4">
            <button class="h-2 w-6 rounded-full bg-brandOrange"></button>
            <button class="h-2 w-2 rounded-full bg-brandOrange/20"></button>
            <button class="h-2 w-2 rounded-full bg-brandOrange/20"></button>
          </div>
        </div>
      </div>
      <div class="flex-1">
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
        <div class="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-4">
          <div class="relative h-max min-w-[250px] rounded-md border border-[#DDDDDD] transition-shadow duration-300 hover:shadow-xl" v-for="i in 12" :key="i">
            <NuxtLink to="/product/1">
              <img src="~/assets/images/product-image.png" alt="product Image" class="mx-auto h-[160px] hover:scale-110 transition-transform duration-300">
            </NuxtLink>
            <button class="border grid place-items-center rounded-lg border-[#D0D0D0] w-[30px] h-[30px] absolute top-4 right-4 hover:shadow-lg">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="18" height="18" fill="url(#pattern0_308_4084)" fill-opacity="0.3"/>
                <defs>
                  <pattern id="pattern0_308_4084" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_308_4084" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_308_4084" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
            </button>
            <div class="absolute left-4 top-4 grid place-items-center bg-brandOrange rounded-md rounded-b-xl w-8 h-8">
              <span class="text-xs font-light text-white" style="font-family: 'Vazir FD',serif">10%</span>
            </div>
            <hr>
            <div class="p-4 flex flex-col w-full items-stretch">
              <div class="flex items-start justify-between">
                <div class="flex flex-col items-start space-y-2">
                  <NuxtLink to="/product/1">
                    <strong class="text-xl text-[#626262]">نگین پاکتی</strong>
                  </NuxtLink>
                  <span class="font-light text-sm text-[#9E9E9E]" style="font-family: 'Vazir FD',serif">1 مثقال- 4/608 گرم</span>
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
                <div class="flex items-center gap-1">
                  <div class="rounded-md rounded-b-xl border border-[#E6E6E6] w-8">
                    <img src="~/assets/images/basalam.png" alt="basalam" class="w-full object-cover">
                  </div>
                  <div class="rounded-md rounded-b-xl border border-[#E6E6E6] w-8">
                    <img src="~/assets/images/digikala.png" alt="digikala" class="w-full object-cover">
                  </div>
                </div>
              </div>
              <div class="flex items-stretch w-full mt-4 gap-2 justify-between">
                <nuxt-link to="/product/1" class="flex-1 rounded-lg border border-[#DDDDDD] hover:bg-[#EFEFEF] transition-all duration-200 p-2 flex items-center justify-center">
                  <span  class="text-xs font-light">
                    مشاهده محصول
                  </span>
                </nuxt-link>
                <button class="bg-brandOrange rounded-md p-2 transition-all duration-200 hover-brand hover:-translate-y-1">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.09844 4.86605C9.09844 6.02585 8.15824 6.96605 6.99844 6.96605C5.83864 6.96605 4.89844 6.02585 4.89844 4.86605M2.75601 12.2161H11.2409C11.9906 12.2161 12.5984 11.6195 12.5984 10.8837L11.7287 3.11603C11.7287 2.3802 11.1209 1.78369 10.3712 1.78369H3.45601C2.70624 1.78369 2.09844 2.3802 2.09844 3.11603L1.39844 10.8837C1.39844 11.6195 2.00624 12.2161 2.75601 12.2161Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-between mt-6">
          <!--  Prev  -->
          <button class="flex items-center gap-2 text-[#6666664D]">
            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2031 6.47904C18.5365 7.24884 18.5365 9.17334 17.2031 9.94314L10.8865 13.5901C9.55316 14.3599 7.88649 13.3976 7.88649 11.858L7.88649 4.56418C7.88649 3.02458 9.55315 2.06233 10.8865 2.83213L17.2031 6.47904Z" fill="#666666" fill-opacity="0.3"/>
              <path d="M6.12891 8.21273C6.12891 8.43657 5.9632 8.62583 5.74133 8.65541L1.42656 9.23071C0.810897 9.3128 0.263841 8.83384 0.263841 8.21273C0.263841 7.59162 0.810899 7.11266 1.42656 7.19475L5.74133 7.77005C5.9632 7.79963 6.12891 7.98889 6.12891 8.21273Z" fill="#666666" fill-opacity="0.3"/>
            </svg>
            <span>قبلی</span>
          </button>
          <!--  Pages  -->
          <div>
            <ul class="flex items-center gap-2">
              <li><button class="bg-brandOrange rounded-lg w-8 h-8 text-sm grid place-items-center text-white">
                <span style="font-family: 'Vazir FD',serif">1</span>
              </button></li>
              <li><button class="border rounded-lg w-8 h-8 text-sm grid place-items-center border-[#C9C9C9] text-[#C9C9C9]">
                <span style="font-family: 'Vazir FD',serif">2</span>
              </button></li>
              <li><button class="border rounded-lg w-8 h-8 text-sm grid place-items-center border-[#C9C9C9] text-[#C9C9C9]">
                <span style="font-family: 'Vazir FD',serif">3</span>
              </button></li>
              <li class="text-[#C9C9C9]">
                ...
              </li>
              <li><button class="border rounded-lg w-8 h-8 text-sm grid place-items-center border-[#C9C9C9] text-[#C9C9C9]">
                <span style="font-family: 'Vazir FD',serif">15</span>
              </button></li>
            </ul>
          </div>
          <!--  Next  -->
          <button class="flex items-center gap-2 text-[#666666BF]">
            <span>بعدی</span>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10.646C1.66667 9.87616 1.66667 7.95166 3 7.18186L9.31663 3.53495C10.65 2.76515 12.3166 3.7274 12.3166 5.267V12.5608C12.3166 14.1004 10.65 15.0627 9.31664 14.2929L3 10.646Z" fill="#666666" fill-opacity="0.75"/>
              <path d="M14.0742 8.91227C14.0742 8.68843 14.2399 8.49917 14.4618 8.46959L18.7766 7.89429C19.3922 7.8122 19.9393 8.29116 19.9393 8.91227C19.9393 9.53338 19.3922 10.0123 18.7766 9.93025L14.4618 9.35495C14.2399 9.32537 14.0742 9.13611 14.0742 8.91227Z" fill="#666666" fill-opacity="0.75"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'new-layout',
})

</script>

<style scoped>
*{
  font-family: "Epic Ravi","Vazir FD",serif;
}

.hover-brand:hover{
  box-shadow: 0 5px 5px 0 #F1482380;
}

</style>