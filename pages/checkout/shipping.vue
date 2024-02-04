
<template>
  <div class="w-full flex flex-col">
    <div class="w-full mt-8">
      <div>
        <div class="relative flex space-x-2 space-x-reverse items-center w-max after:bg-brandOrange after:absolute after:-bottom-3 after:left-0 after:right-0 after:h-2 after:rounded-t-full px-2">
          <NuxtLink to="/checkout/cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
          <strong>آدرس و زمان ارسال</strong>
        </div>
      </div>
      <hr class="mt-3 border-brandOrange/50">
    </div>
    <div class="flex items-start space-x-4 space-x-reverse mt-8">
      <div class="flex-1 flex flex-col space-y-4">

        <!--   Addresses    -->
        <div class="flex flex-col space-y-2 p-4 bg-bgWhite border rounded-xl">
          <span class="font-light">آدرس تحویل سفارش</span>
          <hr>
          <ul class="grid grid-cols-4 gap-4">
            <li class="flex flex-col space-y-3 p-4 rounded-lg border" v-for="i in 2" :key="i">
              <input type="radio" name="activeAddress" class="my-4 w-6 h-6 mx-auto">
              <strong>جاده بایگ، شرکت فراز زعفران</strong>
              <span class="font-light text-sm opacity-70">خراسان رضوی</span>
              <span class="font-light text-sm opacity-70">تربت حیدریه</span>
              <span class="font-light text-sm opacity-70">کد پستی: 1234567890</span>
              <div></div>
              <span class="font-light text-sm opacity-70">تحویل گیرنده: سجاد میرشبی</span>
              <span class="font-light text-sm opacity-70">شماره تماس: 09123456789</span>
              <hr>
              <button class="w-full grid place-items-center text-danger">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 20H3C3 20.5523 3.44772 21 4 21V20ZM20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19V21ZM4 16L3.29289 15.2929C3.10536 15.4804 3 15.7348 3 16H4ZM14.8686 5.13134L14.1615 4.42423L14.1615 4.42423L14.8686 5.13134ZM17.1313 5.13134L16.4242 5.83845V5.83845L17.1313 5.13134ZM18.8686 6.8686L19.5757 6.16149V6.16149L18.8686 6.8686ZM18.8686 9.13134L18.1615 8.42423V8.42423L18.8686 9.13134ZM8 20L8.00001 21C8.26522 21 8.51957 20.8946 8.70711 20.7071L8 20ZM19.5369 7.691L20.4879 7.38198L19.5369 7.691ZM19.5369 8.30895L18.5858 7.99994L19.5369 8.30895ZM15.691 4.46313L15.382 3.51207V3.51207L15.691 4.46313ZM16.3091 4.46313L16.6181 3.51207V3.51207L16.3091 4.46313ZM12.7071 7.29289C12.3166 6.90236 11.6834 6.90236 11.2929 7.29289C10.9024 7.68341 10.9024 8.31658 11.2929 8.7071L12.7071 7.29289ZM15.2929 12.7071C15.6834 13.0976 16.3166 13.0976 16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L15.2929 12.7071ZM4 21H20V19H4V21ZM5 20V16H3V20H5ZM4.70711 16.7071L15.5757 5.83845L14.1615 4.42423L3.29289 15.2929L4.70711 16.7071ZM16.4242 5.83845L18.1615 7.57571L19.5757 6.16149L17.8385 4.42423L16.4242 5.83845ZM18.1615 8.42423L7.29289 19.2929L8.70711 20.7071L19.5757 9.83845L18.1615 8.42423ZM7.99999 19L3.99999 19L4.00001 21L8.00001 21L7.99999 19ZM18.1615 7.57571C18.3712 7.78538 18.4854 7.90068 18.5611 7.98986C18.6292 8.07014 18.6058 8.06142 18.5858 8.00002L20.4879 7.38198C20.3938 7.09225 20.2342 6.87034 20.0858 6.6955C19.9449 6.52957 19.7621 6.34784 19.5757 6.16149L18.1615 7.57571ZM19.5757 9.83845C19.7621 9.6521 19.9449 9.47036 20.0858 9.30444C20.2342 9.12959 20.3938 8.90769 20.4879 8.61797L18.5858 7.99994C18.6058 7.93855 18.6292 7.92983 18.5611 8.01009C18.4854 8.09927 18.3712 8.21456 18.1615 8.42423L19.5757 9.83845ZM18.5858 8.00002L18.5858 7.99994L20.4879 8.61797C20.6184 8.21628 20.6184 7.78367 20.4879 7.38198L18.5858 8.00002ZM15.5757 5.83845C15.7854 5.62878 15.9007 5.5146 15.9899 5.4389C16.0701 5.37078 16.0614 5.39424 16 5.41418L15.382 3.51207C15.0923 3.6062 14.8704 3.76576 14.6955 3.91419C14.5296 4.05505 14.3479 4.23788 14.1615 4.42423L15.5757 5.83845ZM17.8385 4.42423C17.6522 4.23794 17.4704 4.0551 17.3046 3.91427C17.1298 3.76583 16.9079 3.60622 16.6181 3.51207L16.0001 5.41418C15.9386 5.39422 15.9299 5.37071 16.0101 5.43883C16.0993 5.51456 16.2145 5.62873 16.4242 5.83845L17.8385 4.42423ZM16 5.41418H16.0001L16.6181 3.51207C16.2164 3.38156 15.7837 3.38156 15.382 3.51207L16 5.41418ZM11.2929 8.7071L15.2929 12.7071L16.7071 11.2929L12.7071 7.29289L11.2929 8.7071Z" fill="currentColor"/>
                </svg>
              </button>
            </li>
            <li class="grid place-items-center rounded-lg border relative">
              <button class="flex flex-col items-center absolute justify-center space-y-2 w-full inset-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="font-light text-sm">
                  افزود آدرس جدید
                </span>
              </button>
            </li>
          </ul>
        </div>

        <!--   Order Items    -->
        <div class="flex flex-col p-4 bg-bgWhite border rounded-xl">
          <span class="font-light">سبد خرید <small>(4 کالا)</small></span>
          <hr class="my-4">
          <ul class="grid grid-cols-5 mt-2">
            <li class="w-full flex flex-col items-center px-4 border-l last:border-none" v-for="i in 4" :key="i">
              <img src="~/assets/images/saffron-bar.png" alt="jar">
              <div class=" space-x-2 space-x-reverse -mt-4 border rounded-lg p-2 flex items-center justify-between">
                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black">
                    <path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>

                <input type="number" class="w-12 bg-bgWhite outline-none border-none text-center" value="1">

                <button>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-danger">
                    <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.33 16.5H13.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 12.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
          <div class="mt-12 space-y-2 text-sm">
            <div class="flex items-center space-x-3 space-x-reverse">
              <small>زمان تحویل</small>
              <span>
              زمان تقریبی تحویل از 13 بهمن الی 19 بهمن
            </span>
            </div>
            <div class="flex items-center space-x-3 space-x-reverse">
              <small>هزینه ارسال</small>
              <span>
                490,000 ریال
              </span>
            </div>
          </div>
        </div>

      </div>
      <div class="w-full lg:w-1/4 flex flex-col space-y-4">
        <div class="p-6 bg-bgWhite rounded-xl drop-shadow border flex flex-col items-stretch space-y-4">
          <div class="flex items-center justify-between opacity-70">
            <span class="text-sm">قیمت کالاها (2)</span>
            <strong>
              4,253,000
              <small class="font-light">ریال</small>
            </strong>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm">جمع سبد خرید</span>
            <strong>
              3,780,000
              <small class="font-light">ریال</small>
            </strong>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-dgKala">قیمت در دیجی کالا</span>
            <strong class="text-dgKala">
              4,753,000
              <small class="font-light">ریال</small>
            </strong>
          </div>
          <div class="flex items-center justify-between text-brandOrange">
            <span class="text-sm">سود شما از این خرید</span>
            <strong>
              (30%) 1,753,000<small class="font-light">ریال</small>
            </strong>
          </div>
          <hr>
          <div class="flex items-center justify-between">
            <span class="text-sm">هزینه ارسال</span>
            <strong>
              490,000<small class="font-light">ریال</small>
            </strong>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm">مبلغ نهایی</span>
            <strong>
              1,950,000<small class="font-light">ریال</small>
            </strong>
          </div>
          <hr>
          <form action="" class="flex flex-col space-y-2">
            <label for="">کد تخفیف</label>
            <div class="flex w-full space-x-2 space-x-reverse">
              <input type="text" class="border rounded-lg flex-1 px-2">
              <button class="px-3 py-1 rounded-lg border border-brandOrange hover:bg-brandOrange hover:text-white transition-colors duration-300">ثبت</button>
            </div>
          </form>
          <hr v-if="false">
          <div class="flex flex-col space-y-2" v-if="false">
            <div class="flex items-center justify-between">
              <span class="text-sm">مبلغ کد تخفیف</span>
              <strong>
                650,000<small class="font-light">ریال</small>
              </strong>
            </div>
            <button class="px-3 py-1 rounded-lg border border-danger/30 text-danger opacity-70">حذف کد تخفیف</button>
          </div>
          <hr>
          <div class="flex items-center justify-between">
            <span class="text-lg">قابل پرداخت</span>
            <strong class="text-2xl">
              1,950,000<small class="font-light mr-1">ریال</small>
            </strong>
          </div>
          <button class="bg-brandOrange rounded-lg w-full text-white font-bold text-xl p-4 flex items-center space-x-reverse space-x-2 justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.92969 15.8792L15.8797 3.9292" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.1013 18.2791L12.3013 17.0791" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.793 15.5887L16.183 13.1987" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 21.9985H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>تایید و پرداخت سفارش</span>
          </button>
          <hr>
          <div class="bg-slate-100 p-3 px-6 rounded-lg flex items-center justify-between">
            <div class="flex items-center space-x-1 space-x-reverse">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-amber-500">
                <path d="M7.5 12.1673H6C5.26667 12.1673 4.66667 12.7673 4.66667 13.5006V13.6673H4C3.72667 13.6673 3.5 13.894 3.5 14.1673C3.5 14.4406 3.72667 14.6673 4 14.6673H12C12.2733 14.6673 12.5 14.4406 12.5 14.1673C12.5 13.894 12.2733 13.6673 12 13.6673H11.3333V13.5006C11.3333 12.7673 10.7333 12.1673 10 12.1673H8.5V10.6406C8.33333 10.6606 8.16667 10.6673 8 10.6673C7.83333 10.6673 7.66667 10.6606 7.5 10.6406V12.1673Z" fill="currentColor"/>
                <path d="M12.3195 7.7587C12.7595 7.59203 13.1462 7.3187 13.4529 7.01203C14.0729 6.32536 14.4795 5.50536 14.4795 4.54536C14.4795 3.58536 13.7262 2.83203 12.7662 2.83203H12.3929C11.9595 1.94536 11.0529 1.33203 9.99953 1.33203H5.99953C4.9462 1.33203 4.03953 1.94536 3.6062 2.83203H3.23286C2.27286 2.83203 1.51953 3.58536 1.51953 4.54536C1.51953 5.50536 1.9262 6.32536 2.5462 7.01203C2.85286 7.3187 3.23953 7.59203 3.67953 7.7587C4.37286 9.46536 6.03953 10.6654 7.99953 10.6654C9.95953 10.6654 11.6262 9.46536 12.3195 7.7587ZM9.89287 5.63203L9.47953 6.1387C9.41287 6.21203 9.3662 6.3587 9.37287 6.4587L9.41286 7.11203C9.43953 7.51203 9.15287 7.7187 8.77953 7.57203L8.17287 7.33203C8.07953 7.2987 7.91953 7.2987 7.8262 7.33203L7.21953 7.57203C6.8462 7.7187 6.55953 7.51203 6.5862 7.11203L6.6262 6.4587C6.63286 6.3587 6.5862 6.21203 6.51953 6.1387L6.1062 5.63203C5.8462 5.32536 5.95953 4.98536 6.3462 4.88536L6.97953 4.72536C7.07953 4.6987 7.19953 4.60536 7.25287 4.5187L7.6062 3.97203C7.8262 3.63203 8.17287 3.63203 8.39287 3.97203L8.7462 4.5187C8.79953 4.60536 8.91953 4.6987 9.01953 4.72536L9.65286 4.88536C10.0395 4.98536 10.1529 5.32536 9.89287 5.63203Z" fill="currentColor"/>
              </svg>

              <span>فراز کلاب</span>
            </div>
            <strong>150 <small class="font-light"> امتیاز</small></strong>
          </div>
        </div>
        <p class="font-light text-sm mx-4 opacity-70">هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند
        </p>
        <div class="p-4 border rounded-xl px-6 bg-bgWhite/70">
          <div class="flex space-x-2 items-center space-x-reverse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-primary">
              <path d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 8H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 11H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 14H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-sm text-primary">
              ارسال <b class="text-base">رایگان</b> برای خرید های بالاتر از 500 هزار تومان
            </span>
          </div>
          <p class="text-sm mt-2 font-light">با خرید بیشتر از 500 هزار تومان از فروشگاه ما هزینه ارسال به هر کجای کشور عزیزمان را مهمان ما باشید</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>