<template>

  <header v-if="topBanner != null">
    <a :href="topBanner.url" class="h-[60px] bg-white w-full relative flex items-center justify-center" style="background: linear-gradient(90deg, #F04623 0%, #C82805 100%);">
      <img :src="`${SITE_URL}/banners/${topBanner.image.src}`"
           :alt="topBanner.image.alt"
           class="h-[60px]">
    </a>
  </header>
  <nav class="w-full border-b pb-2 border-[#ECECEC] pt-2 bg-white relative" >
    <div class=" container px-24 3xl:px-0 min-h-[125px] mx-auto mt-5">
      <div class="w-full flex items-center flex-wrap justify-between">
        <div class="flex items-center flex-wrap gap-4 flex-1 xl:gap-12">
          <NuxtLink to="/" class="flex items-center gap-4">
            <div class="w-max logo-rotate-always relative">
              <div class="w-[50px] h-[50px] rounded-full bg-brandOrange grid place-items-center logo-style"
              >
                <img src="~/assets/images/gp-alone-white.png" alt="gp alone white" class="w-8">
              </div>
              <div class="w-[50px] h-[50px] rounded-full bg-brandOrange grid place-items-center logo-style"
                   style="transform: rotateY(180deg)"
              >
                <img src="~/assets/images/GP-filled-white.png" alt="gp alone white" class="w-8">
              </div>
            </div>
            <div class="flex flex-col items-start">
              <strong>زعفران جی پی</strong>
              <span class="text-sm"><strong class="text-brandOrange text-base">gp</strong> Saffron</span>
            </div>
          </NuxtLink>
          <form class="flex w-[20vw] items-center relative" action="/market">
            <input type="text" name="search" id="search"
                   class="form-input w-full h-12 p-4 border-none focus:ring-[#9b9a9a] bg-[#F4F4F4] rounded-lg peer"
                   required>
            <strong
                class="absolute opacity-50 right-4 pointer-events-none transition-all duration-200 peer-focus:opacity-0 peer-checked:opacity-0 peer-valid:opacity-0">جستجوی
              محصول...</strong>
            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="absolute opacity-50 left-4">
              <circle cx="6.38251" cy="6.38251" r="5.63251" stroke="currentColor" stroke-width="1.5"/>
              <path
                  d="M10.7957 13.4585C10.6083 12.6246 11.4856 11.9552 12.2404 12.356L13.689 13.1252C14.3329 13.4672 14.4063 14.3611 13.8267 14.8034L12.7377 15.6344C12.1581 16.0767 11.3153 15.7701 11.1554 15.0587L10.7957 13.4585Z"
                  fill="currentColor"/>
            </svg>
          </form>
          <ul class="flex items-center gap-9 font-bold">
            <li>
              <NuxtLink to="/" class="hover:text-brandOrange transition-colors duration-200"
                        exact-active-class="text-brandOrange">خانه
              </NuxtLink>
            </li>
<!--            <li>
              <a :href="BLOGS_URL" target="_blank"
                 class="hover:text-brandOrange transition-colors duration-200">مقالات</a>
            </li>-->
            <li>
              <NuxtLink to="/aboutus" class="hover:text-brandOrange transition-colors duration-200"
                        exact-active-class="text-brandOrange">درباره ما
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contactus" class="hover:text-brandOrange transition-colors duration-200"
                        exact-active-class="text-brandOrange">ارتباط با ما
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex items-stretch mr-auto gap-2">
          <div class="flex items-end flex-col">
            <a href="tel:05152329059" dir="ltr" class="text-brandOrange font-bold text-sm"
               style="text-shadow: 0 0 10px rgba(240, 70, 35, 0.5); font-family: 'Vazir FD',serif;">051 - 52329059</a>
            <div class="flex items-center gap-1.5">
              <strong class="text-sm">پشتیبانــی</strong>
              <span class="text-xs" style="font-family: 'Vazir FD',serif">24 ساعته</span>
            </div>
          </div>
          <a href="tel:05152329059" class="h-9 bg-[#FFF3F0] rounded-lg rounded-b-xl grid place-items-center">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
              <g filter="url(#filter0_d_306_3621)">
                <rect x="10" y="10" width="14" height="14" fill="url(#pattern0_306_3621)" shape-rendering="crispEdges"/>
              </g>
              <defs>
                <filter id="filter0_d_306_3621" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                 result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="5"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.27451 0 0 0 0 0.137255 0 0 0 0.5 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_3621"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_3621" result="shape"/>
                </filter>
                <pattern id="pattern0_306_3621" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_306_3621" transform="scale(0.01)"/>
                </pattern>
                <image id="image0_306_3621" width="100" height="100"
                       xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAC/1JREFUeAHtHVmMHEd1ue8j3ATj7NSrtUMQ4bA4gjgWtuvVOiYhCMx9BYgTTgEfEAiCSCgySBAEEQQl3AIkhEmEAHMEA+aSQAnBFiziiENsE4U4O1U9vrgHvZ6Z3Zqerj6remZn25K1PdWvXr2jjlevXr2emWn+NRJoJNBIoJFAI4FGAo0EGglMuAQOnbXhXkrwd2rR+rEOWEcjKI3sRo38Pbeec+q9J5z86SJPS/bCEOFvGqFr+b90bKH18OniegK56c7P31UL/iGF8D+LIlYUpBB+3r105s4TyMZ0kBTKDQ+Kpif7qFhRxkBZoeBvng7uJ4yLULA5hfCngaDz/2VH1eLsrGt2lGD/0ALaGls3aYT9GuE6jeyTIcJbteB4dCt/qOs2JwZfW7aeqbB1R34lxNYVCT/szszcySVDWVNm//2+EPnHOsieRwaIy/bHhitE9oqoNxaYphIVJ+BCl0xkKSSBBq0lXK1w7lmuO4dLvlJxaQkXKAH/TWBuZK3IhBEsbAdsY2qDBV6WUMgKzUqwP2uEHd2t/B4FmhwvqBZwYRWmkxTURvZ9V72zu/2Mu+ttG0/RC3OsHbDHKYTztIB36YB/ViNcrwT8J4mG4TJ2WEn29omfzkKEl7pWxqog+Ovr6GpqfvaBSvBzFbY+kbFf6pJhEEq2rQ66CrcR4txTNcKJVQHGFuiqawmCXt7KNxQmrEKF7vaZu4QBlyrgX9YIJ1N4u2YZ4dEVmnJb9bg87ZFKwK0pBK/MwxVhdrulPD824jGU7KMa2bFEHgS0leTPz4/RI6QS8O1EIquPihFFKgGv9chKJurO/KaHkEmskP07zjNN1yGyy2mdykTkC4A2U3HCPP9WR8TmU33xkxevkq3HK8F+kcRrGMBPaS3Ki8spnAr4t5KI8llGbTploiQysvzI2lKC/TOB3/1j6TgaQScQMzLVuIYJJX9VGTlqhFu04H8gE1cjXBM5PCU7v4Ozp5fBR3VC2XqKRnZghEcBN4cSeFm8pep5tqysilWCLx87e/YRRYlOM8vJMAmx9cUQYStZWEVwR3sbhJ8kKaXWkaIF/HWECA+LeWIbAbu2iNAINk0hZhukHIXwQVrE87bRnZ+9ZzTqRvnfV9uaogT82mSk7udQsJflFVgRhazywY5F5u62jafkaYdGlhb8c6v1B/sxtre7Zcvd8uCoBNPfNFmnllHCBgS6+askO3IU4WF5maANHK0XYcCfFkr2choFGmG3RnY0jVaF8HcyufO4cCKl0PoUHykCPpKXztJw0dl4vOG6f0u4rDQD/Yp0oqkEf7ZGuCrDUNmdZxrrT19DawpNl23k51SlNbW+kvCckZ5Qs0IUsr+kElnwJQVahAhv04IdSuRNsEOdRX5WFtpooRdws4mDjBGvLqCoJwg4bjZa+7OA41nCKfOe3Oxa8PfqZP5OkBMyCy+ZxKP7FL4rq16l93W6TpKUrQS7vRIDGZXpKJl23/G2yX2SZz+kkL8jXjeUsJjRbPnXIfI3xRus87cS/Aflqc9XM4qaQb4zbjaTUrJGCkXQaGz90pQJHXbR7JKv9YJQZOUoZP8yG6zzmTpEQZJLgytkr0twLJ7IWlOUmHtCvB4FVpQmJKtiKOGbdSphpa2AdY6cu/l+WfQN3tN8HgVeyNZvNPKvaGRvpNPDwfs8f5WAF8SFqwU7mGV9KYSPr9BNho9gB715honIocZqsrRCyd6fR4gDmPiUQzRTGQXn0YlnXpdJb6SMBP19J22fQiFGI+cpEi4Y0Ob0by8ycdjE864gwQ4VjQVOUsgQneR4lCzIIxyNfOdQXVKuhFen1aXzErMOxaylKTENV+Y7ckWbjfl+zmI+ieBMhfRHdhvh01mLLnXCUMLPTD5pR0/7j6S2qYwcjfHjYIpfs8FXKqe5vBfJ7sYtYjKa8Hx9mfhfopFcJ7ShDZF9QEdrSTK9SvBfZUUyatzcGvF4Z7hIemvXUJtXVRJ8WmWNcEmC8Jz7usjNkUZHkXekII18l2X0LGUrJc4zO5a2wNMeJCYjlTUai/AzBHv7/Bn3pY1arEG3Cinhdh8i0vKjg/B0HXN1EB80UtIEFu3okR02eSanpaWZGTIc4kEhXsOJfK4lZLZSALeN2arlfUtorync6FnAlWm44zyTwNMsNiXgCrMNcvGn4a/0jvz+/chytyMjst3TBVOJ8H7lKLoRWYJS2IIN/2145n3iXmKK6bLBRxGTQ1sDdqMN1kl5O2DPsMzJFZXEDrQD9gAnRKYg6Y+U+Dn5Ulqv18g+M9zr4fO2JsgSM8NWKRY6bd2x4SlU3o+XraiAIWukj4t93ZvtbnBI7pCETvUSA2TocfQogh0eAoj90AG7wVSgxpaIgbj92Vk4/cF0ojfcaJKAy5Sxi91Sm4xNC/iGST/tO5IhZ2b6U91QZGNngW2ywcePekMJb7HBOivXgr/BZMjVMw1xr5ZJXwI9k3i1w/RGzOaWTUAaW981eUyLtNSSvTsGe4UNr7Ny2rwlnSWYhFR41suSP9YZsRZEI5tHyS6ygFJUC53RG9M035kCe54JW8cxQkSLOrt1mscd/C13PHfTo2xMuyiPdvSGkCmww4Y3FPyVppApLMgGS+GoMdj9Nljn5VryF8caN3qR2aNKPe/zaXmNLNYBu8EmIDIETD5pU2mDpZNIE5Y2pTZYL+X+rK5IiXt8nS3QwmwKjgwVm4COBnOPMWE1wpINloweE5bOaWywXsojt4qEP5pEuHxuC/ha2j6hLFNEt0kneQtsuGj6NGE12k3fnlW2OiOk4bW1V7lcS/4kaniY6FWiqpZTbG4ZL3BlxtYyguiSvrFIVlVCvH50luH4fvtalncu2vsRgi4X9iFcdH6di5AGqCeBngMywYHncOR49aBOoyIpDZM1XNOVYiR8eBpl540nFfAnWkI1h6ag+DpR7Df/VB3OSG9Cqhsx7W4TvKoOFQLdaKFvcnDlV22I8L5ivb6EqSzhqxQpkp+qdQ6pBVzpWym9zeMY75GvJR33gpL5Lt9K0QH7kU/f11qSeSatlGEnHnzmSUH7ynqJSZn9ze0euoDTM0paN2kJlxW5XpcpjEkBoByNSrDfe1LEqrEg2MEi5ykUyKCQX5p2H5EcjxQjPCmydEYH9V66quZdKQHrUARIGuFkMmvBtxe5Ak6XmMqOwDRaxvqObswmBa65VhKZ3NTzk/YqdFs3ftmmQPuKMtCNVYiuG6fUFNmJxEqYwImeAL5rsNhHZyABu7aA8FenwhhuujtD6Z1cy2Zs+OjQJ4oqjzHqQlijONgBMr+d3wiL8mmlX1UYm4DLNNxebJ1ZKeVsLcrMHqlTtbZEI6WezHXW6Wd0RGUrIaEOZVDakbRmlemsY63TWWxtpmPRBCZ9C9E5/raE77lMgTs2xfSiNaJU4c6FVLuiBQunYrRQz+onNl77SonWN7a39mRnrocUbbxCwX5Xe6/2ZSDQx20ku2hNry0U1u8xVHVco2/Pmv6oDV03i0epT8GoWSLfmetZpTZ8FCBH3wGZAkWYo/KS2gToqyFKp+T7OLg2pQv+W19yqhUvpe4buTvuayH2iddTHrBalTFoTCNs8R5i5FMZPdx6wM9U/CVLhZLK1DbFOFYQpTKfCkWYTEQR5hKuXotKoUx0Ji9T9Uyf4XPyTSzHo8DWUSjxwPJWfv+pUkKcmV6UZJT33TQtJ+45OsGclG+RxIXo+nf0Hd54Zreaer1tNIyUr8d4ZI38Rb0PTJY6z/A5qq5bt9GV5DHWSTlNxjdilmpL2u966nGFLwrxQdihe+cSPnt+Ku4onqvub424EqIPPJT+WzuKMhlZE7JH3EnK1eWDrzWPs/9NraUSQk0dATZ8/S+iWhParHmBumCArttR7K5CuM0mSBflpAyF8BoXNK8LHL2kZOziKKA6e9opNEIiZUh2/roQpGsm+4kDdvQ/JlZI8JaRdHIqA7JdCz4LHx2CUeJ9SihTNvkBuUTCRfbkrLaa9wUlQOn46MvYvZz3ls+xGtNc5A4R8KWpvD9SUHbewSlNLGWnpq/yhAhfiKLlKd1s70Mwmj6EqRb5vHdCmgYaCTQSaCTQSKCRQCOBRgKNBCpK4P/aX8vWvj9cYQAAAABJRU5ErkJggg=="/>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div class="mt-5 gap-4 flex flex-wrap items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="bg-[#F6F6F6] rounded-lg w-7 h-8 relative flex items-center">
            <span class="bg-[#C3C3C3] absolute h-0.5 rounded-full inset-x-1 right-1/2 top-1/3"></span>
            <span class="bg-[#939393] absolute h-0.5 rounded-full inset-x-1"></span>
            <span class="bg-[#C3C3C3] absolute h-0.5 rounded-full inset-x-1 left-1/2 bottom-1/3"></span>
          </div>
          <div class="flex items-center gap-10">
            <div class="relative">
              <button class="flex items-center gap-2" @click="showCategories = !showCategories" type="button">
                <strong>دسته بندی</strong>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                     :class="['transition-all duration-200',{'rotate-180':showCategories}]">
                  <path d="M1 1L5.00065 4.664L9 1" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </button>
              <Transition name="slide-fade">
                <div v-if="showCategories" v-click-outside="closeCategories"
                     :class="['absolute overflow-hidden top-12 z-20 bg-white p-4 flex rounded-xl transition-all duration-300',
                     isCategoryHovered ? 'w-[350px]' : 'w-[180px]']"
                     style="box-shadow: 0 2px 5px 0 #B7B7B740;">
                  <div class="min-w-[150px]">
                    <ul class="w-full flex flex-col space-y-1" v-if="!loading">
                      <li v-for="c in categories" @click="categoryHovered(c)"
                          class="w-full py-1.5 pl-4 pr-8 rounded-lg hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer relative flex items-center before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:right-3 before:bg-[#D9D9D9]">
                        <div class="w-full flex items-center justify-between font-bold text-black/50 hover:text-black/100 transition-colors duration-200">
                          <span>{{ c.title }}</span>
                          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                               opacity="0.5">
                            <path d="M6 11L1 6L6 1" stroke="black" stroke-width="1" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </li>
                    </ul>
                    <ul class="w-full flex flex-col space-y-2" v-else>
                      <li class="w-full py-4 rounded-lg bg-gray-200 animate-pulse" v-for="i in 3" :key="i"></li>
                    </ul>
                  </div>
                  <ul class="flex-1 border-r pr-2 mr-2 space-y-2 text-nowrap"
                      v-if="isCategoryHovered && subCategories.length > 0">
                    <li class="w-full" v-for="s in subCategories">
                      <NuxtLink :to="`/market?categories=${s.id}`"
                                class="w-full py-1 px-2 font-light rounded-lg text-[#9E9E9E] hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer">
                        <span>{{ s.title }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
            <NuxtLink :to="`/market?orderBy=${EOrderBy.محبوبیت}`"
                      class="font-bold hover:text-brandOrange transition-colors duration-200">پرفروش ها
            </NuxtLink>
            <NuxtLink :to="`/market?orderBy=${EOrderBy.ارزان_ترین}`"
                      class="font-bold hover:text-brandOrange transition-colors duration-200">تخفیف ها
            </NuxtLink>
            <NuxtLink :to="`/market?orderBy=${EOrderBy.جدیدترین}`"
                      class="font-bold hover:text-brandOrange transition-colors duration-200">محصولات جدید
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-stretch mr-auto gap-4">
          <!-- User Account -->
          <div class="relative">
            <button type="button"
                    class="h-10 px-3 rounded-lg text-brandOrange flex items-center gap-2 border border-brandOrange"
                    @click="showAccountOptions = !showAccountOptions">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="14" height="14" fill="url(#pattern0_306_3622)"/>
                <defs>
                  <pattern id="pattern0_306_3622" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_306_3622" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_306_3622" width="100" height="100"
                         xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABhFJREFUeAHtnU2IHEUUx8dvEFEP4kdU3HmvdpUVD3FRQUUXt+t1NhD1YBC/FQ8elChejOJHvIkHL+JhITmIirJEFBRRQSIqC0oCgah4WtGokSQzVTVZ8duRN7uzbMIOO13T3VOdegvDzHbXe6/q9++u7q6uj1pN/oSAEBACQkAICAEhIASEgBAQAkJgTQJHptW403CHIbXNEs5YUm8sfnCGt/E+TrOmI0ngR6C9rXai0epGm6gdlvCAJWz3+TnANmzLPvyii9UyAYboCO5yGr7uU4CeQrEPl8KdIswy3mw/LOGE0fjVoEIca2+0+tKm6spsuYk4dbtWO8FoeNRo+PNYmHn9bwj+5muNnC1rHGjtzeOnNpP6W3mB78PPmxxzjWzFubs9rU5rpvhhHxB7Xid8bDkmx46Teo9StzfXTrKkdvoAzcUmxVmpvlaIs/Q8keuRn1Uop/GZFVmK96eh0RuMxn+yAsw7PeehmcD18SpRq9X4gmoJv80brq8/o+Gb9sTEKdGKYlJ4zBdeUXYuxUeiFITvbCzBT0WB9farYX+Ud13cjOENrf+2LK8bBW6cjO4sGcYzR4YD4IOoBDk4OX6GIfgrAyCvI93XP+eN8xiNKE7DRl9YZdm5FDfEI0gKz5YF1jeOI3w6GkGW3u6VWg1lFcYQvBaPILq+Kyug0tPr+q54BCHcXTrg7LfKu+MRRKu9wQui1d5oBDGEX4QuiEvws2gEcVR/N3RBbALvRCOIJXwxeEG0eiEaQVyq7gldEKfV3dEI0iC8OHRBGtPqomgE4YLyy6CARdkXlRhcWKvVU8EKksIT0QlySF+6zmj4I0BRfv8tveSC6ATpnCWdnut9d5wuqe0LXolSDC40XzhtAq1gzhINjs/caAXhghutHg9FEO5THLUYXHjuMWi0+jgAUT7hHpTRC8IAFqbq51mN3w9PFJg/QniuiLGCQGsKxoyGg2WLwjGdhtEVWZGfXQItGrnMEv5QliiO8OdmAld048v3KgQO3zR2oUvx86JF4eb16O+oVuG/6qb25OTJ3CO+iAdH9ukInuMYqwaXjb0JcN3O40aMxn8HPWMWfaidcr3ozbvvPY1UXW40vmxSOJRVGLZhW/bRd0BJ2B8BHirAYzgc9+vS+LYl3Ge0anBPw85HqwZv432chtNGPbygP6ySSggIASEgBISAEBACQkAICAEhUAwBfiCzVNdGq+ctwXab4mylPwTbO2VJIanUwyZPBuAItwzj3UbWZhXf9J13KIRbgp9JqDU5do4l/NS3oNWzq88tbBw5v5g6ZkCvZnLk7GaC31UP6mDdkLjMXPYB8eVvbjS+H5sY3fKaRL2XP9EBPDrC6W7mYv0Oahh1k+CjWIXolpsZDHBM52faTOCskGdl6AIr+psZMIv8yHp6cjR6TdGFrYp/ZuGJMT8zo9XNVQFWdD4N4a35kfX0ZLXaXHRBK+T/dk+M+ZmJIEc9xwxfEJOqWyp0BBc6xiSIKqul8ToRZPEsYRb51T2enuzUKIggS9XW1Ch4YszXLOOaHoVWG8M6OAzhr7yQQL5kPb113nNkn23n+BImxVlPfPmbyYUd201Sm/In6+mRe5JbDfuHVV0MPa6GH4MbDmdJPTh0MEOqNk0KD3gey8WZ8eBNm8Ce6ERJYE+wS13wOMGgxp0XfsbAQvDL85kU743hLDGE/1VmCidL6snjXpSqTVATwqo5RR0UPEaxuKtxgZ6NxvuLXP6uKOC9/PJye1bjQwUiK951i/BaSzDfq5DV2Q7zXJbiiZUQoTGtzuTupHmMpi1bQL5483q6XIYSUJUbwm2AqyzV58qG6h+vPufS+tXlUhpCNB4dy53L/EEd9ZYu90ZKnuiZ26aCab0tS6OlHiszVoMbujiLeZgJoudIWQL0ivPLpnWnW1K3Oaq/aqh+uCxxOBbH5Nich175i3o7t5qaRK13Wj1sEvU6Tyebx60z++A11dnnku/1wbXQVkV5bt7ndjJeKomfbSzBVkfwkuVJNBO1Y3kgEP8mnFncB1sN4X3c75htZbKZqqgt+RQCQkAICAEhIASEgBAQAkKgbAL/A0Wrmoc7plpFAAAAAElFTkSuQmCC"/>
                </defs>
              </svg>
              <strong>حساب کاربری</strong>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                   :class="['transition-all duration-200',{'rotate-180':showAccountOptions}]">
                <path d="M1 1L5.00065 4.664L9 1" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <Transition name="slide-fade">
              <div v-if="showAccountOptions" v-click-outside="closeAccountOptions" class="absolute z-20 bg-white top-12 w-[150px] p-2 rounded-lg"
                   style="box-shadow: 0 0 5px 0 #69696940;">
                <div class="flex flex-col w-full space-y-2" v-if="!authStore.isLoggedIn">
                  <button
                      class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]"
                      @click="authStore.isAuthModalOpen = true,authStore.changeStep('register')">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <rect width="12" height="12" fill="url(#pattern0_461_1998)" fill-opacity="0.5"/>
                      <defs>
                        <pattern id="pattern0_461_1998" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlink:href="#image0_461_1998" transform="scale(0.01)"/>
                        </pattern>
                        <image id="image0_461_1998" width="100" height="100"
                               xlink:href="data:image/png;base64,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"/>
                      </defs>
                    </svg>
                    <span>ثبت نام</span>
                  </button>
                  <hr>
                  <button
                      class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]"
                      @click="authStore.isAuthModalOpen = true,authStore.changeStep('login')">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                      <rect width="12" height="12" fill="url(#pattern0_461_1999)" fill-opacity="0.5"/>
                      <defs>
                        <pattern id="pattern0_461_1999" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlink:href="#image0_461_1999" transform="scale(0.01)"/>
                        </pattern>
                        <image id="image0_461_1999" width="100" height="100"
                               xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNFJREFUeAHtnc3rFVUch5+MUEmKFhnqpoKyTSpWS3e+VNALhoG1ycSFL4EkGIVvoEGIFeQfoIS2qL2VBdGiTe1rV4K9WViom7TX+4XfwHCZ89K993fOfIfPhWHuvefcOec8z5yXuTNzBvQSAREQAREQAREQAREQAREQAREQAREQAREQARGYhMDtwOPADuCVni4vA88DDwELJimkh99sBD4GrgP/Olp+AN4G7vIAOSePK4DzjgSEdpZrwD7gppxC9zXOI6OmyfawUCE9fv8esKivwGP5ugf4dWAymh3oA281ZTHwzUBlNFKs+XLzstFTk/HQ+jvgc+CTHi5fjvoL6zNCebfvr3rp6JcAv0cKYx38gw52rYXAC8DlSFneclAOnokU4Cxws4dCtPK4MiLlew99yemAkJ+BW1sF9fR2W6BM1nTZwWOvX18EMv9mr3Mdz5w1X6E+ZWv8p/VDvw0IsfbY8+urQLl6P9r6JZDxLZ5tAJ8FynWk7+WSkJ4ZkhAJKUJATVYRzPmJSEg+qyIxJaQI5vxEJCSfVZGYElIEc34iEpLPqkhMCRnDbH/iHQeOAWvGwkp8lJAW5WeBv1p/XdwAdrbCS7x1K+THFrj2GbenJ6RmV3l0bfOf0Tn73RNuc5KfuRXyUYcQg3fvJBSAOzu214guKcWtkLXAlTGI05wLsTOMP41trxFi61JS3AqximCXAB0FTgKTNlXtCmWXdRr4toj2+xJSXAtpw5zVe7sWOCXlpVkl1rEdCemAUlOKhHQIsa9qSZGQgJBaUiQkIqSGFAlJCCktpRdC7BjA7u+wg7qSi90cc0fmciAyHJ7lcUp1IU8Cdqlke7zv9b0Nl3dl1LhYlKpC7gf+GIiMZif6E3g4RjwRVlXIawOT0UiZ5mr1qkJeHaiQdxK1IBZcVch9A2yyrB9ZFyOeCKsqxPL2BHBxQDXlYAJ4Kri6EMug3TRfY9j7f4bYqWGv9R+zuCC6F0JSe03tcDu1a6OnptPuWh+eUSYlJAGypAzLioREhJSWISE9kyEhASE1akaTFTVZDYm5dU0ZlgXXQmyobEf7J4ANY2An+Wh/dLYvlOsaTc1iaBvLm1shq4Dfxoair8dKmgizY6HUv87zLcOy6FbIuTEZtjf/DdydAB8KXtaxvXYNKSHDtZDQ/FhPhYgnvr8lMndKKRmuhczHXbh7OmrJoYTIWQe7bbLmQ4jBfWx0GvnduWXTrGlnbE9CMiCVjCIhJWlnpCUhGZBKRpGQkrQz0pKQDEglo0hISdoZaUlIBqSSUSSkJO2MtCQkA1LJKBJSknZGWm6FaBLMDLslo4SmiZ3mutqS+e9Ky/U0sac6/pm18xeXRmcQbRpyj68XA2WycvV+IuXNkczbsze8TTX+gPepxm068fFTuO0zfJ8Cqx1UE2umrGbEyjLNDBVFEeyP1JJGzoUeP67CZrEOTS3e5N8eV7G0KNUpErNHAn2dIaUpnMf13in4VPnpkB959L6Hx1R0Wbd7+lKX8HirHWe8PhSsEbQc+HAAzZf1Ge6aqUZC13r9nBhvD5a0Gm6jKTcdeBf82He3AY+ObpfbPqo1djPNGz1c7NGrzwE2GZvrB0nGRChMBERABERABERABERABERABERABERABERABFIE/gNUOiA0KlQmiAAAAABJRU5ErkJggg=="/>
                      </defs>
                    </svg>
                    <span>ورود</span>
                  </button>
                </div>
                <div class="flex flex-col space-y-2 font-light" v-else>
                  <NuxtLink to="/profile"
                            class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="w-4">
                      <path
                          d="M9 21V14.1528C9 13.5226 9.53726 13.0116 10.2 13.0116H13.8C14.4627 13.0116 15 13.5226 15 14.1528V21M11.3046 3.21117L3.50457 8.48603C3.18802 8.7001 3 9.04665 3 9.41605V19.2882C3 20.2336 3.80589 21 4.8 21H19.2C20.1941 21 21 20.2336 21 19.2882V9.41605C21 9.04665 20.812 8.70011 20.4954 8.48603L12.6954 3.21117C12.2791 2.92961 11.7209 2.92961 11.3046 3.21117Z"
                          stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round"/>
                    </svg>
                    <span>داشبورد</span>
                  </NuxtLink>
                  <hr>
                  <NuxtLink to="/profile/orders"
                            class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="w-4">
                      <path
                          d="M7.79922 7.8H16.1992M7.79922 12.6H16.1992M5.75922 3H18.2392C19.1008 3 19.7992 3.80589 19.7992 4.8V21L17.1992 19.2L14.5992 21L11.9992 19.2L9.39922 21L6.79922 19.2L4.19922 21V4.8C4.19922 3.80589 4.89765 3 5.75922 3Z"
                          stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>سفارشات</span>
                  </NuxtLink>
                  <hr>
                  <NuxtLink to="/profile/notification"
                            class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="w-4">
                      <path
                          d="M11.4374 3H5.24997C4.00735 3 3 4.00734 3 5.24996V14.2502C3 15.4928 4.00736 16.5002 5.24999 16.5002L13.369 16.5001L17.625 21V16.5002L18.7501 16.5001C19.9927 16.5001 21 15.4928 21 14.2502V12.0004M21 5.81274C21 7.36601 19.7408 8.62519 18.1875 8.62519C16.6343 8.62519 15.3751 7.36601 15.3751 5.81274C15.3751 4.25946 16.6343 3.00028 18.1875 3.00028C19.7408 3.00028 21 4.25946 21 5.81274Z"
                          stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="flex items-center gap-2">
                      <span>پیام ها</span>
                      <base-f-badge color="brandOrange" size="xs" v-if="accountStore.unseenNotifs > 0">
                        {{ accountStore.unseenNotifs }}
                      </base-f-badge>
                    </div>
                  </NuxtLink>
                  <hr>
                  <button
                      class="flex items-center gap-2 px-2 rounded-md py-1 text-danger transition-colors duration-200 hover:bg-[#F2F2F2]"
                      @click="authStore.logOut">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                         class="w-4">
                      <path
                          d="M8.78056 3.6001H5.07468C4.51304 3.6001 3.97441 3.82135 3.57728 4.21517C3.18014 4.609 2.95703 5.14314 2.95703 5.7001V18.3001C2.95703 18.8571 3.18014 19.3912 3.57728 19.785C3.97441 20.1788 4.51304 20.4001 5.07468 20.4001H8.78056M9.04375 12.0001H21.0438M21.0438 12.0001L16.4586 7.2001M21.0438 12.0001L16.4586 16.8001"
                          stroke="black" stroke-width="1" opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>خروج</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
          <!-- Cart -->
          <div class="flex h-auto w-max items-stretch relative gap-2">
            <button class=" h-auto grid place-items-center bg-brandOrange rounded-md rounded-b-xl"
                    style="box-shadow: 0 0 10px 0 #F0462380;"
                    @click="showCart = !showCart">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="w-[34px]">
                <path
                    d="M9.09844 4.86654C9.09844 6.02634 8.15824 6.96654 6.99844 6.96654C5.83864 6.96654 4.89844 6.02634 4.89844 4.86654M2.75601 12.2165H11.2409C11.9906 12.2165 12.5984 11.62 12.5984 10.8842L11.7287 3.11652C11.7287 2.38069 11.1209 1.78418 10.3712 1.78418H3.45601C2.70624 1.78418 2.09844 2.38069 2.09844 3.11652L1.39844 10.8842C1.39844 11.62 2.00624 12.2165 2.75601 12.2165Z"
                    stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="flex flex-col items-start">
              <button class="flex items-center gap-2"
                      @click="showCart = !showCart">
                <strong class="text-sm">سبد خرید</strong>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"
                     :class="['transition-transform duration-200',{'rotate-180':showCart}]">
                  <path d="M1 1L5.00065 4.664L9 1" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <small v-if="cartStore.cartItemsCount == 0">خالی</small>
              <span v-else class="bg-brandOrange/20 rounded-lg text-xs text-brandOrange px-4 py-1">
                  {{ cartStore.cartItemsCount }}
                </span>
            </div>
            <Transition name="slide-fade">
              <div v-if="showCart" v-click-outside="closeCart" class="absolute top-16 left-0 z-20 w-max bg-white rounded-lg rounded-b-3xl"
                   style="box-shadow: 0 2px 5px 0 #B7B7B740;">
                <div class="flex flex-col items-center space-y-4 p-6 min-w-[300px]"
                     v-if="!cartStore.PendingOrder || cartStore.cartItemsCount == 0">
                  <img src="~/assets/images/empty-cart.png" alt="empty cart" class="w-full max-w-[170px]">
                  <strong class="text-2xl">خالی!</strong>
                  <span class="text-sm text-[#9F9F9F]">هیچ محصولی وجود ندارد</span>
                  <button @click="goToMarket"
                            class="text-brandOrange flex items-center gap-1 px-6 py-2 rounded-md hover:bg-brandOrange/10 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00043 4.85742V9.13113" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path d="M9.14106 6.99431H4.86328" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.73464 1.1665H4.26797C2.36241 1.1665 1.16797 2.51522 1.16797 4.42451V9.57516C1.16797 11.4845 2.35686 12.8332 4.26797 12.8332H9.73464C11.6457 12.8332 12.8346 11.4845 12.8346 9.57516V4.42451C12.8346 2.51522 11.6457 1.1665 9.73464 1.1665Z"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>مشاهده محصولات</span>
                  </button>
                </div>
                <div class="flex flex-col relative w-[400px] p-6 pb-0" v-else-if="cartStore.cartItemsCount <= 3">
                      <span>
                        {{ cartStore.cartItemsCount }} کالا
                      </span>
                  <ul class="h-[300px] overflow-y-auto py-2">
                    <li class="flex items-stretch gap-4 border-b last:border-none py-3"
                        v-for="i in cartStore.PendingOrder.orderItems">
                      <div class="flex w-1/3 flex-col items-start gap-4">
                        <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`"
                             :alt="i.itemInfo.productImage.alt" class="w-full">
                        <cart-counter :item="i" class="scale-75"/>
                      </div>
                      <div class="flex flex-col justify-between flex-1 pb-2 pt-4">
                        <strong class=" w-4/5">{{ i.itemInfo.productName }}</strong>
                        <div class="flex flex-col">
                          <div class="flex items-center gap-1">
                            <span class="text-sm opacity-50 font-light">وزن:</span>
                            <span>{{i.itemInfo.weight}} <small>گرم</small></span>
                          </div>
                          <div class="flex items-center gap-1" v-if="i.itemInfo.healthNumber != null">
                            <span class="text-sm opacity-50 font-light">شماره بهداشت:</span>
                            <span>{{i.itemInfo.healthNumber}}</span>
                          </div>
                        </div>
                        <div class="flex items-center mt-top justify-between">
                          <base-g-price :size="'xs'" :price="(i.totalPrice / 10)" class="scale-125 mr-4"/>
                          <!--                              <base-g-price :price="()" /> TODO discount-->
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="h-[90px] z-10 grid grid-cols-2 items-center" style="box-shadow: 0 -4px 10px 0 #E2E2E240;">
                    <div class="flex flex-col items-start">
                      <small>مجموع سبد خرید</small>
                      <base-g-price :price="(cartStore.PendingOrder.totalPrice / 10)"/>
                    </div>
                    <base-g-button @click="goToCart" w-full>
                      مشاهده سبد خرید
                    </base-g-button>
                  </div>
                </div>
                <div class="flex flex-col items-center space-y-4 p-6" v-else>
                  <img src="~/assets/images/filled-cart.png" alt="empty cart" class="w-full max-w-[100px]">
                  <strong class="text-2xl">{{ cartStore.cartItemsCount }} محصول</strong>
                  <div class="flex items-center justify-between gap-4">
                    <span class="text-sm text-[#9F9F9F]">قیمت کل:</span>
                    <base-g-price class="text-sm text-[#9F9F9F]" :price="(cartStore.PendingOrder.totalPrice / 10)"/>
                  </div>
                  <button @click="goToCart"
                            class="text-brandOrange cursor-pointer flex items-center gap-1 px-6 py-2 rounded-md hover:bg-brandOrange/10 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00043 4.85742V9.13113" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path d="M9.14106 6.99431H4.86328" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.73464 1.1665H4.26797C2.36241 1.1665 1.16797 2.51522 1.16797 4.42451V9.57516C1.16797 11.4845 2.35686 12.8332 4.26797 12.8332H9.73464C11.6457 12.8332 12.8346 11.4845 12.8346 9.57516V4.42451C12.8346 2.51522 11.6457 1.1665 9.73464 1.1665Z"
                            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>مشاهده سبد خرید</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.store";
import {useCartStore} from "~/stores/cart.store";
import {Form} from "vee-validate";
import {ToastType, useToast} from "~/composables/useSwal";
import {GetUnseenNotificationsCount} from "~/services/notification.service";
import {BLOGS_URL, SITE_URL} from "~/utilities/api.config";
import type {CategoryDto} from "~/models/categories/categoryQueries";
import {GetCategories} from "~/services/category.service";
import {EOrderBy} from "~/models/product/EOrderBy";
import {GetActiveTemplate} from "~/services/mainPage.service";
import type {TopBanner} from "~/models/mainPage/dataTemplate";

const loading = ref(false);
const topBannerLoading = ref(true);
const topBanner:Ref<TopBanner | null | undefined> = ref(null);

const authStore = useAuthStore();
const cartStore = useCartStore();
const accountStore = useAccountStore();
const searchValue = ref('');
const showOptions = ref(false);
const showCategories = ref(false);
const showAccountOptions = ref(false);
const showCart = ref(false);
const closeCategories = ()=>{showCategories.value = false};
const closeAccountOptions = ()=>{showAccountOptions.value = false};
const closeCart = ()=>{showCart.value = false};
const showResponsiveNavbar = ref(false);
const unseenNotifs = ref(0);

const route = useRoute();
const router = useRouter();

watch(() => route.fullPath, () => {
  showResponsiveNavbar.value = false;
});

const isCategoryHovered = ref(false);
const categories: Ref<CategoryDto[]> = ref([]);
const subCategories: Ref<CategoryDto[]> = ref([]);

const refreshCategories = async () => {
  const result = await GetCategories({pageId: 1, take: 100, search: ''});
  if (result.isSuccess) {
    categories.value = result.data?.data!;
  }
}

const categoryHovered = (category: CategoryDto) => {
  if(isCategoryHovered.value && category.id == subCategories.value[0].parentId) {
    isCategoryHovered.value = false;
    return;
  }
  isCategoryHovered.value = true;
  subCategories.value = category.children ?? [];
}

onMounted(async () => {
  loading.value = true;

  if (authStore.isLoggedIn) {
    const result = await GetUnseenNotificationsCount();
    if (result.isSuccess) {
      unseenNotifs.value = result.data ?? 0;
    }
  }

  await refreshCategories();

  loading.value = false;

  topBannerLoading.value = true;

  const tempResult = await GetActiveTemplate();
  if(tempResult.isSuccess){
    topBanner.value = tempResult.data?.topBanner;
  }

  topBannerLoading.value = false;

})

const openCategories = () => {
  showCategories.value = !showCategories.value;
  if (!showCategories.value) isCategoryHovered.value = false;
  showAccountOptions.value = false;
  showCart.value = false
}

const toast = useToast();
const LogOut = async () => {
  toast.showToast(
      'آیا مایلید از حساب کاربری خود خارج شوید؟',
      ToastType.warning,
      0).then(async result => {
    if (result.isConfirmed) {
      await authStore.logOut();
    }
  })
}

const goToCart=()=>{
  showCart.value = false;
  router.push("/checkout/cart");
}
const goToMarket=()=>{
  showCart.value = false;
  router.push("/market");
}
</script>

<style scoped>
.active {
  @apply relative after:w-full after:left-0 after:right-0 after:-bottom-2 after:rounded-t-full after:absolute after:h-1 after:bg-brandOrange font-bold;
}

.active-responsive {
  @apply border-warning font-bold;
}
</style>