<template>
  <Head>
    <Title>محصولات جی پی</Title>
  </Head>

  <div class="flex flex-col mt-12">
    <h2 class="font-black text-3xl">
      محصولات جی پی زعفران
    </h2>
    <div class="flex space-x-4 space-x-reverse mt-12">
      <div class="w-1/5 flex flex-col space-y-4">
        <div class="bg-bgWhite drop-shadow lg rounded-xl p-4 w-full space-y-4 sticky top-16">
          <div class="flex justify-between items-center">
            <h4 class="text-xl font-bold">فیلتر ها</h4>
            <small class="text-primary font-light">حذف فلیتر ها</small>
          </div>
          <hr>
          <div class="flex flex-col space-y-4 mt-8" id="testParent">
            <div class="flex justify-between items-center w-full px-2">
              <strong>دسته بندی</strong>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="border rounded-lg p-4 w-full transition-all duration-200 overflow-hidden" id="testContainer">
              <ul class="space-y-4 " id="test">
                <li class="flex flex-col space-y-2" v-for="x in 3" :key="x">
                  <div class="flex items-center space-x-2 space-x-reverse">
                    <input type="checkbox" name="" id="" class="w-4 h-4">
                    <label for="">زعفران نگین</label>
                  </div>
                  <ul class="mr-4 text-sm space-y-2">
                    <li v-for="i in 3" :key="i">
                      <div class="flex items-center space-x-2 space-x-reverse">
                        <input type="checkbox" name="" id="" class="w-4 h-4">
                        <label for="">زعفران نگین</label>
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
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
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
      <div class="flex-1">
        <div class="w-full flex flex-col space-y-4">
          <div class="border-b pb-2 flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M6 12H18" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10 17H14" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="mr-1 ml-4">مرتب سازی:</span>

            <ul class="flex items-center space-x-4 space-x-reverse text-sm font-light">
              <li class="font-bold">محبوب ترین ها</li>
              <li>جدید ترین ها</li>
              <li>گران ترین ها</li>
              <li>ارزان ترین ها</li>
              <li>بیشترین امتیاز</li>
            </ul>

            <span class="mr-auto text-sm opacity-70">2,345 کالا</span>
          </div>
          <div class="p-4 bg-bgWhite drop-shadow rounded-xl">
            <ul class="grid grid-cols-3">
              <li v-for="i in 16" :key="i">
                <f-card :shadow="false" :rounded="false"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#test{
  max-height: 0;
  transition: max-height 0.5s ease;
}

#testContainer{
  padding: 0 1rem;
  transition: padding 0.5s ease;
}

#testParent:hover #testContainer{
  padding: 1rem;
}

#testParent:hover #test{
  max-height: 500px;
}

</style>