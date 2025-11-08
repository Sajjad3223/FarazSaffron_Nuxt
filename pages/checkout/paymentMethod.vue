<template>
  <div>
    <Head>
      <Title>روش پرداخت</Title>
    </Head>
    <div class="mt-5 2xl:mt-12 hidden md:block">

      <div class="rounded-2xl p-8 bg-[#FAFAFA] flex flex-col items-center">

        <!--  Steps  -->
        <div class="flex items-center w-2/3 mb-5 2xl:mb-12">
          <div class="relative grid place-items-center w-6 2xl:w-8 h-6 2xl:h-8 text-xs 2xl:text-base rounded-full bg-brandOrange text-brandOrange">
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.65546L5.23224 9.8877L14.1199 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="absolute -bottom-full w-max">سبد خرید</span>
          </div>
          <div class="h-px bg-brandOrange opacity-40 flex-1"></div>
          <div class="relative grid place-items-center w-6 2xl:w-8 h-6 2xl:h-8 text-xs 2xl:text-base rounded-full border border-brandOrange text-brandOrange">
            <span>2</span>
            <span class="absolute -bottom-full w-max">افزودن آدرس</span>
          </div>
          <div class="h-px bg-black/10 opacity-40 flex-1"></div>
          <div class="relative opacity-40 grid place-items-center w-6 2xl:w-8 h-6 2xl:h-8 text-xs 2xl:text-base rounded-full border">
            <span>3</span>
            <span class="absolute -bottom-full w-max">تکمیل پرداخت</span>
          </div>
        </div>

        <!--  GP Peyk   -->
        <div class="w-full rounded-xl border border-opacity-25 p-5" v-if="false">
          <div class="w-3/4 mx-auto grid grid-cols-2 items-center">
            <div class="flex flex-col items-start space-y-4">
              <h3 class="text-3xl font-bold text-brandOrange">جی پی پیک</h3>
              <strong class="text-lg">خدمات ویژه با اشتراک جی پی پیک</strong>
              <base-g-button color="primary" button-type="bg" :disabled="true">
                <span>به زودی ...</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-125">
                  <path d="M14 17L9 12L14 7" stroke="#FAFAFA" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </base-g-button>
            </div>
            <ul class="list-disc flex flex-col space-y-4 opacity-70 font-semibold">
              <li>ارسال رایگان این سفارش و ۳ سفارش دیگر (در هرماه اشتراک)</li>
              <li>مهلت بیشتر مرجوعی کالا تا ۳۰ روز (جز موبایل و کالای بهداشتی)</li>
              <li>امکان ارسال فوری بعضی از کالاها ( رایگان )</li>
            </ul>
          </div>
        </div>

        <!--  Main   -->
        <main class="flex items-start w-full gap-5 relative mt-4 2xl:mt-10">

          <div class="flex-1 rounded-xl  flex flex-col items-stretch">
            <!--  Addresses   -->
            <ul class="2xl:hidden flex flex-col space-y-4 w-full">
              <li class="flex bg-white border rounded-xl p-4 2xl:min-h-[120px]"
                  v-for="a in accountStore.currentUser?.addresses" :key="a.id">
                <div class="w-1/5 grid place-items-center">
                  <input type="radio" name="activeAddress" class="my-4 w-6 h-6 mx-auto" @change="setAsActive(a.id)" :checked="a.isActiveAddress">
                </div>
                <div class="flex-1 flex flex-col space-y-2">
                  <span class="hidden 2xl:block font-thin">آدرس تحویل</span>
                  <div class="flex flex-col space-y-1">
                    <p>
                      {{ a.street }}
                    </p>
                    <div class="flex items-center divide-x-2 divide-x-reverse">
                      <span class="font-light text-sm opacity-70 pl-2 ">{{ a.state }}</span>
                      <span class="font-light text-sm opacity-70 pl-2 pr-2">{{ a.city }}</span>
                      <span class="font-light text-sm opacity-70 pr-2">کد پستی: {{ a.postCode }}</span>
                    </div>
                    <div class="flex items-center divide-x-2 divide-x-reverse">
                      <span class="font-light text-sm opacity-70 pl-2">تحویل گیرنده: {{ a.receiverFirstName + a.receiverLastName }}</span>
                      <span class="font-light text-sm opacity-70 px-2">شماره تماس: {{ a.receiverPhoneNumber }}</span>
                    </div>
                  </div>
                </div>
                <button class="self-start text-[#3787FF] flex items-center gap-0.5">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.84371 4.34477L9.94371 6.59477M2.59375 12.2198L5.14057 11.6699C5.27578 11.6408 5.39992 11.5694 5.49742 11.4649L11.1987 5.35301C11.4721 5.05997 11.4719 4.58498 11.1983 4.29219L9.99057 2.99964C9.71711 2.70698 9.274 2.70718 9.00077 3.00009L3.29886 9.11262C3.20155 9.21694 3.13511 9.34968 3.10784 9.49424L2.59375 12.2198Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-xs font-light">ویرایش</span>
                </button>
              </li>
              <li class="grid place-items-center bg-bgWhite  hover:drop-shadow hover:border-none transition-all duration-200 rounded-lg border relative min-h-36">
                <button class="flex flex-col items-center absolute justify-center space-y-2 w-full inset-0 text-brandOrange" @click="showAddressModal = true">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0015 10.4092V19.5671" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.5846 14.9881H10.418" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8571 2.5H9.14286C5.05952 2.5 2.5 5.3901 2.5 9.48145V20.5186C2.5 24.6099 5.04762 27.5 9.14286 27.5H20.8571C24.9524 27.5 27.5 24.6099 27.5 20.5186V9.48145C27.5 5.3901 24.9524 2.5 20.8571 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="font-light text-sm">
                  افزودن آدرس جدید
                </span>
                </button>
              </li>
            </ul>
            <ul class="hidden 2xl:grid p-8 border border-brandOrange/10 rounded-xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 mt-8" v-if="!accountStore.initLoading">
              <li class="flex flex-col bg-bgWhite  hover:drop-shadow hover:border-none transition-all duration-200 space-y-3 p-4 rounded-lg border"
                  v-for="a in accountStore.currentUser?.addresses" :key="a.id">
                <input type="radio" name="activeAddress" class="my-4 w-6 h-6 mx-auto" @change="setAsActive(a.id)" :checked="a.isActiveAddress">
                <strong>{{ a.street }}</strong>
                <span class="font-light text-sm opacity-70">{{ a.state }}</span>
                <span class="font-light text-sm opacity-70">{{ a.city }}</span>
                <span class="font-light text-sm opacity-70">کد پستی: {{ a.postCode }}</span>
                <div></div>
                <span class="font-light text-sm opacity-70">تحویل گیرنده: {{ a.receiverFirstName + a.receiverLastName }}</span>
                <span class="font-light text-sm opacity-70">شماره تماس: {{ a.receiverPhoneNumber }}</span>
                <hr class="dark:opacity-30">
                <button class="w-full grid place-items-center text-danger">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 20H3C3 20.5523 3.44772 21 4 21V20ZM20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19V21ZM4 16L3.29289 15.2929C3.10536 15.4804 3 15.7348 3 16H4ZM14.8686 5.13134L14.1615 4.42423L14.1615 4.42423L14.8686 5.13134ZM17.1313 5.13134L16.4242 5.83845V5.83845L17.1313 5.13134ZM18.8686 6.8686L19.5757 6.16149V6.16149L18.8686 6.8686ZM18.8686 9.13134L18.1615 8.42423V8.42423L18.8686 9.13134ZM8 20L8.00001 21C8.26522 21 8.51957 20.8946 8.70711 20.7071L8 20ZM19.5369 7.691L20.4879 7.38198L19.5369 7.691ZM19.5369 8.30895L18.5858 7.99994L19.5369 8.30895ZM15.691 4.46313L15.382 3.51207V3.51207L15.691 4.46313ZM16.3091 4.46313L16.6181 3.51207V3.51207L16.3091 4.46313ZM12.7071 7.29289C12.3166 6.90236 11.6834 6.90236 11.2929 7.29289C10.9024 7.68341 10.9024 8.31658 11.2929 8.7071L12.7071 7.29289ZM15.2929 12.7071C15.6834 13.0976 16.3166 13.0976 16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L15.2929 12.7071ZM4 21H20V19H4V21ZM5 20V16H3V20H5ZM4.70711 16.7071L15.5757 5.83845L14.1615 4.42423L3.29289 15.2929L4.70711 16.7071ZM16.4242 5.83845L18.1615 7.57571L19.5757 6.16149L17.8385 4.42423L16.4242 5.83845ZM18.1615 8.42423L7.29289 19.2929L8.70711 20.7071L19.5757 9.83845L18.1615 8.42423ZM7.99999 19L3.99999 19L4.00001 21L8.00001 21L7.99999 19ZM18.1615 7.57571C18.3712 7.78538 18.4854 7.90068 18.5611 7.98986C18.6292 8.07014 18.6058 8.06142 18.5858 8.00002L20.4879 7.38198C20.3938 7.09225 20.2342 6.87034 20.0858 6.6955C19.9449 6.52957 19.7621 6.34784 19.5757 6.16149L18.1615 7.57571ZM19.5757 9.83845C19.7621 9.6521 19.9449 9.47036 20.0858 9.30444C20.2342 9.12959 20.3938 8.90769 20.4879 8.61797L18.5858 7.99994C18.6058 7.93855 18.6292 7.92983 18.5611 8.01009C18.4854 8.09927 18.3712 8.21456 18.1615 8.42423L19.5757 9.83845ZM18.5858 8.00002L18.5858 7.99994L20.4879 8.61797C20.6184 8.21628 20.6184 7.78367 20.4879 7.38198L18.5858 8.00002ZM15.5757 5.83845C15.7854 5.62878 15.9007 5.5146 15.9899 5.4389C16.0701 5.37078 16.0614 5.39424 16 5.41418L15.382 3.51207C15.0923 3.6062 14.8704 3.76576 14.6955 3.91419C14.5296 4.05505 14.3479 4.23788 14.1615 4.42423L15.5757 5.83845ZM17.8385 4.42423C17.6522 4.23794 17.4704 4.0551 17.3046 3.91427C17.1298 3.76583 16.9079 3.60622 16.6181 3.51207L16.0001 5.41418C15.9386 5.39422 15.9299 5.37071 16.0101 5.43883C16.0993 5.51456 16.2145 5.62873 16.4242 5.83845L17.8385 4.42423ZM16 5.41418H16.0001L16.6181 3.51207C16.2164 3.38156 15.7837 3.38156 15.382 3.51207L16 5.41418ZM11.2929 8.7071L15.2929 12.7071L16.7071 11.2929L12.7071 7.29289L11.2929 8.7071Z" fill="currentColor"/>
                  </svg>
                </button>
              </li>
              <li class="grid place-items-center bg-bgWhite  hover:drop-shadow hover:border-none transition-all duration-200 rounded-lg border relative min-h-36">
                <button class="flex flex-col items-center absolute justify-center space-y-2 w-full inset-0 text-brandOrange" @click="showAddressModal = true">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0015 10.4092V19.5671" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.5846 14.9881H10.418" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8571 2.5H9.14286C5.05952 2.5 2.5 5.3901 2.5 9.48145V20.5186C2.5 24.6099 5.04762 27.5 9.14286 27.5H20.8571C24.9524 27.5 27.5 24.6099 27.5 20.5186V9.48145C27.5 5.3901 24.9524 2.5 20.8571 2.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="font-light text-sm">
                  افزودن آدرس جدید
                </span>
                </button>
              </li>
            </ul>

            <!--  Items   -->
            <div class="bg-white py-5 px-14 rounded-xl mt-12 flex flex-col" v-if="cartStore.PendingOrder">
              <strong>سبد خرید</strong>
              <ul class="relative grid grid-cols-4 2xl:grid-cols-5 gap-4 w-full mt-8">
                <li class="flex flex-col items-center space-y-2" v-for="i in cartStore.PendingOrder.orderItems" :key="i">
                  <img :src="`${SITE_URL}/product/images/${i.itemInfo.productImage.src}`" :alt="i.itemInfo.productImage.alt" class="max-h-[150px]">
                  <base-g-price :price="(i.price / 10)" />
                  <base-g-button color="danger" button-type="outline" is-icon custom-class="py-0" @click="cartStore.removeItem(i.id)">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-150">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.61149 10.0833C4.99045 10.0833 4.38499 10.0764 3.78595 10.0641C3.01961 10.0489 2.48932 9.55211 2.4027 8.76745C2.25832 7.46578 2.01128 4.3977 2.00899 4.36699C1.9934 4.1777 2.13457 4.01178 2.32386 3.99665C2.5104 3.99161 2.67907 4.1227 2.6942 4.31153C2.69649 4.3427 2.94307 7.40024 3.08607 8.69182C3.13511 9.13778 3.37574 9.36786 3.80015 9.37657C4.94599 9.40086 6.1152 9.40224 7.37561 9.37932C7.82661 9.37061 8.07045 9.14511 8.12086 8.68861C8.26295 7.40803 8.51045 4.3427 8.5132 4.31153C8.52832 4.1227 8.69561 3.9907 8.88307 3.99665C9.07236 4.01224 9.21353 4.1777 9.1984 4.36699C9.19565 4.39815 8.94724 7.47403 8.80424 8.76424C8.71532 9.56495 8.1864 10.0522 7.38799 10.0668C6.77703 10.0774 6.18761 10.0833 5.61149 10.0833Z" fill="currentColor"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49117 3.20337H1.71875C1.529 3.20337 1.375 3.04937 1.375 2.85962C1.375 2.66987 1.529 2.51587 1.71875 2.51587H9.49117C9.68092 2.51587 9.83492 2.66987 9.83492 2.85962C9.83492 3.04937 9.68092 3.20337 9.49117 3.20337Z" fill="currentColor"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99205 3.20337C7.47047 3.20337 7.01764 2.83166 6.91497 2.32016L6.80359 1.76283C6.78022 1.67804 6.68351 1.60425 6.57351 1.60425H4.63339C4.52339 1.60425 4.42668 1.67804 4.39872 1.78391L4.29193 2.32016C4.18972 2.83166 3.73643 3.20337 3.21484 3.20337C3.02509 3.20337 2.87109 3.04937 2.87109 2.85962C2.87109 2.66987 3.02509 2.51587 3.21484 2.51587C3.41009 2.51587 3.57968 2.37654 3.61818 2.18496L3.72955 1.62762C3.84276 1.20046 4.21264 0.916748 4.63339 0.916748H6.57351C6.99426 0.916748 7.36414 1.20046 7.47276 1.607L7.58918 2.18496C7.62722 2.37654 7.7968 2.51587 7.99205 2.51587C8.1818 2.51587 8.3358 2.66987 8.3358 2.85962C8.3358 3.04937 8.1818 3.20337 7.99205 3.20337Z" fill="currentColor"/>
                    </svg>
                  </base-g-button>
                </li>
              </ul>
            </div>
          </div>

          <!--  Prices   -->
          <div class="w-1/3 2xl:w-1/4 p-6 bg-white border text-sm 2xl:text-base rounded-xl flex flex-col space-y-4 items-stretch">
            <div class="w-full flex items-center justify-between">
              <span>قیمت کالاها ({{cartStore.cartItemsCount}})</span>
              <div class="flex gap-1 items-center">
                <base-g-price :price="(cartStore.PendingOrder?.totalPrice / 10)" />
              </div>
            </div>
            <div class="w-full flex items-center justify-between" v-if="cartStore.PendingOrder?.discount.code != ''">
              <span>کد تخفیف</span>
              <div class="flex gap-1 items-center">
                <base-g-price :price="(cartStore.PendingOrder?.totalPrice - cartStore.PendingOrder?.getFinalPrice) / 10" />
              </div>
            </div>
            <div class="w-full flex items-center justify-between">
              <span>جمع سبد خرید</span>
              <div class="flex gap-1 items-center">
                <base-g-price :price="(cartStore.PendingOrder?.getFinalPrice / 10)" />
              </div>
            </div>
            <div v-if="showDiscount">
              <!--  Discount   -->
              <form class="flex-col items-start" v-if="cartStore.PendingOrder?.discount.code == ''">
                <div class="flex items-start gap-1 w-full mt-4">
                  <base-g-input v-model="discountCode" type="text" label="کد تخفیف" required/>
                  <base-g-button @click="applyDiscount" :is-loading="discountLoading">ثبت</base-g-button>
                </div>
              </form>
              <base-g-button v-else w-full button-type="outline" @click="removeDiscount">
                حذف کد تخفیف
              </base-g-button>
            </div>
            <div v-else>
              <button class="font-light text-sm text-primary" @click="showDiscount = true">برای ثبت کد تخفیف کلیک کنید</button>
            </div>
            <!--  Payment Method  -->
            <div>
              <span class="font-light opacity-70">روش پرداخت</span>
              <hr class="my-2">
              <div class="flex items-center gap-2 mt-2">
                <input type="radio" id="gateway" name="paymentMethod" v-model="paymentMethod" :value="EPaymentMethod.Gateway">
                <label for="gateway" class="font-light">درگاه بانکی</label>
              </div>
              <div class="flex items-center gap-2 mt-2">
                <input type="radio" id="wallet" name="paymentMethod" v-model="paymentMethod" :value="EPaymentMethod.Wallet">
                <label for="wallet" class="font-light">کیف پول</label>
                <div class="flex items-center">
                  (<base-g-price :price="(accountStore.currentUser?.walletCash ?? 0) / 10" class="scale-75" />)
                </div>
              </div>
            </div>
            <base-g-button w-full @click="payOrder" :disabled="!accountStore.hasActiveAddress" :is-loading="payLoading">
              تکمیل و پرداخت
            </base-g-button>
            <div class="flex items-center gap-1.5 text-danger" v-if="!accountStore.hasActiveAddress">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_774_7201)">
                  <path d="M6 11C3.2385 11 1 8.7615 1 6C1 3.2385 3.2385 1 6 1C8.7615 1 11 3.2385 11 6C11 8.7615 8.7615 11 6 11ZM6 10C7.06087 10 8.07828 9.57857 8.82843 8.82843C9.57857 8.07828 10 7.06087 10 6C10 4.93913 9.57857 3.92172 8.82843 3.17157C8.07828 2.42143 7.06087 2 6 2C4.93913 2 3.92172 2.42143 3.17157 3.17157C2.42143 3.92172 2 4.93913 2 6C2 7.06087 2.42143 8.07828 3.17157 8.82843C3.92172 9.57857 4.93913 10 6 10ZM5.5 7.5H6.5V8.5H5.5V7.5ZM5.5 3.5H6.5V6.5H5.5V3.5Z" fill="currentColor"/>
                </g>
              </svg>
              <span>ابتدا آدرس را تعیین کنید</span>
            </div>
          </div>
        </main>

      </div>

      <!--  Popular   -->
      <section class="w-full mt-16">
        <div class="flex items-center justify-between mb-8">
          <h3 class="text-2xl font-black pr-4 border-r-4 border-brandOrange">
            محصولات پربازدید
          </h3>
          <div class="flex items-center gap-2">
            <button :class="['w-8 h-8 rounded-md border border-[#8D8D8D] hover:bg-[#8D8D8D] text-[#8D8D8D] hover:text-white transition-colors duration-200 grid place-items-center ']"
                    @click="carousel.next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7L15 12L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button :class="['w-8 h-8 rounded-md border border-[#8D8D8D] hover:bg-[#8D8D8D] text-[#8D8D8D] hover:text-white transition-colors duration-200 grid place-items-center ']"
                    @click="carousel.prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 17L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <client-only v-if="!loading">
          <GPCarousel ref="carousel" :items-to-show="5" class="rounded-xl mt-4">
            <GPSlide v-for="p in products" :key="p.id" >
              <GCard :product="p" />
            </GPSlide>
          </GPCarousel>
        </client-only>
        <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-4" v-else>
          <div class="relative min-h-[380px] flex flex-col justify-between space-y-4 animate-pulse min-w-[250px] rounded-xl transition-shadow duration-300 shadow-xl" v-for="i in 5" :key="i">
            <div class="bg-gray-200 h-1/2 rounded-t-xl"></div>
            <div class="p-4 flex flex-col h-1/2 justify-between">
              <div class="w-3/4 rounded-md bg-gray-300 h-4"></div>
              <div class="w-1/2 rounded-full bg-gray-300 h-2"></div>
              <div class="w-1/3 rounded-full bg-gray-200 h-1"></div>
              <div class="flex items-center mt-4 gap-4">
                <div class="flex-1 rounded-md bg-gray-300 h-8"></div>
                <div class="w-1/4 rounded-full bg-gray-200 h-2"></div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>

    <div class="md:hidden mt-6 flex flex-col items-center pb-[50px]" v-if="cartStore.PendingOrder">
      <div class="flex items-center gap-1">
        <strong>
          سبد خرید
        </strong>
        <span class="bg-brandOrange/20 w-4 h-4 grid place-items-center aspect-square text-brandOrange rounded-full px-1 text-[10px] leading-[1]">{{ cartStore.cartItemsCount }}</span>
      </div>
      <!--  Steps   -->
      <div class="flex items-center w-2/3 mt-4 mb-6">
        <div class="relative grid place-items-center w-8 h-8 rounded-full bg-brandOrange text-brandOrange">
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.65546L5.23224 9.8877L14.1199 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="absolute -bottom-full w-max">سبد خرید</span>
        </div>
        <div class="h-px bg-brandOrange opacity-40 flex-1"></div>
        <div class="relative grid place-items-center w-8 h-8 rounded-full bg-brandOrange text-brandOrange">
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.65546L5.23224 9.8877L14.1199 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="absolute -bottom-full w-max">افزودن آدرس</span>
        </div>
        <div class="h-px bg-brandOrange opacity-40 flex-1"></div>
        <div class="relative grid place-items-center w-8 h-8 rounded-full border border-brandOrange text-brandOrange">
          <span>3</span>
          <span class="absolute -bottom-full w-max">تکمیل پرداخت</span>
        </div>
      </div>
      <hr class="w-full mt-6">

      <!--  Payment Method  -->
      <div class="flex flex-col w-full items-center">
        <span class="text-xl my-4">صورتحساب</span>
        <div class="flex flex-col gap-4 w-full">
          <span>روش پرداخت</span>
          <div class="w-full grid grid-cols-2 gap-4 p-2 bg-white rounded-full">
            <div class="flex relative">
              <input type="radio" name="payment" id="gateway" v-model="paymentMethod" :value="EPaymentMethod.Gateway" :checked="paymentMethod === EPaymentMethod.Gateway" class="peer appearance-none absolute inset-0 opacity-0">
              <label for="gateway" class="text-xs font-light peer-checked:bg-[#C8C8C8]/30 cursor-pointer rounded-full w-full py-3 text-center">درگاه بانکی</label>
            </div>
            <div class="flex relative">
              <input type="radio" name="payment" id="wallet" v-model="paymentMethod" :value="EPaymentMethod.Wallet" :checked="paymentMethod === EPaymentMethod.Wallet" class="peer appearance-none absolute inset-0 opacity-0">
              <label for="wallet" class="text-xs font-light peer-checked:bg-[#C8C8C8]/30 cursor-pointer rounded-full w-full py-3 text-center">کیف پول</label>
            </div>
          </div>
          <div class="flex items-center justify-between w-full">
            <span>موجودی کیف پول</span>
            <span>{{(accountStore.currentUser.walletCash / 10).toLocaleString()}} تومان</span>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col p-6 bg-white my-5 border rounded-xl">
        <div class="flex flex-col gap-1" v-if="cartStore.PendingOrder.discount.amount <= 0">
          <label for="discount" class="text-xs">کد تخفیف</label>
          <div class="flex items-center gap-2">
            <input name="discount" id="discount" type="text" v-model="discountCode" class="flex-1 px-4 py-3 rounded-lg bg-[#FAFAFA] border border-[#818C92]/10" placeholder="کد تخفیف را وارد کنید">
            <BaseGButton button-type="white" @click="applyDiscount">
              اعمال
            </BaseGButton>
          </div>
        </div>
        <div class="flex items-center relative justify-center w-full py-3 bg-[#1DCA6C]/5 text-[#1DCA6C]" v-else>
          <svg class="absolute right-4" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.25806L4.87097 9.12903L13 1" stroke="#1DCA6C" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>
            {{ Math.round((cartStore.PendingOrder.totalPrice * (cartStore.PendingOrder.discount.amount / 100)) / 10).toLocaleString() }}
            تومان اعمال شد
          </span>
          <button class="absolute left-0 rotate-180 text-danger" @click="removeDiscount">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9197 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.65 8.86969 20.25 10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.0005 14.4698L11.0605 9.52979" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M15.2109 10.3198L16.0009 9.52979" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M11.0605 14.4702L13.3405 12.1802" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <hr class="my-4">
        <div class="flex flex-col gap-3 items-stretch">
          <div class="flex items-center justify-between opacity-60 font-light">
            <span>تخفیف </span>
            <span>{{ getDiscountValue(cartStore.PendingOrder.totalPrice ,cartStore.PendingOrder.discount.amount).toLocaleString() }} تومان</span>
          </div>
          <div class="flex items-center justify-between opacity-60 font-light">
            <span>جمع محصولات </span>
            <span>{{ roundPrice(cartStore.PendingOrder.totalPrice).toLocaleString() }} تومان</span>
          </div>
          <div class="flex items-center justify-between opacity-60 font-light">
            <span>هزینه پست </span>
            <span>{{ roundPrice(cartStore.PendingOrder.transmissionPrice ?? 0).toLocaleString() }} تومان</span>
          </div>
        </div>
        <hr class="my-4">
        <div class="flex items-center justify-between mb-3">
          <span>مجموع </span>
          <span>{{ roundPrice(cartStore.PendingOrder.finallyPrice).toLocaleString() }} تومان</span>
        </div>
        <form @submit.prevent="payOrder" class="w-full">
          <base-g-button type="submit" w-full :disabled="!accountStore.hasActiveAddress || payLoading" :is-loading="payLoading" is-icon custom-class="!rounded-lg">
            پرداخت
          </base-g-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "~/stores/cart.store";
import {SITE_URL} from "~/utilities/api.config";
import {SetAddressAsActive} from "~/services/user.service";
import {ToastType} from "~/composables/useSwal";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {ProductFilterData} from "~/models/product/productQueries";
import {GetProducts} from "~/services/product.service";
import {EOrderBy} from "~/models/product/EOrderBy";
import {PayWithWallet, RemoveDiscount, SetDiscount} from "~/services/cart.service";
import {EPaymentMethod} from "~/models/ePaymentMethod";
import {getDiscountValue, roundPrice} from "~/utilities/priceUtils";


const discountCode = ref('');
const cartStore = useCartStore()
const accountStore = useAccountStore();
const carousel = ref();
const router = useRouter();
const paymentMethod = ref(EPaymentMethod.Gateway);

const showDiscount = ref(false);
const showAddressModal = ref(false);

const toast = useToast();

const loading = ref(true);
const discountLoading = ref(false);
const payLoading = ref(false);
const products:Ref<ProductFilterData[] | null> = ref([]);

onMounted(async()=>{
  loading.value = true;

  const result = await GetProducts({pageId:1,take:5,orderBy:EOrderBy.جدیدترین});
  if(result.isSuccess){
    products.value = result.data?.data ?? [];
  }

  loading.value = false;
})

const setAsActive = async (addressId:number) => {
  const result = await SetAddressAsActive(addressId);
  if(result.isSuccess){
    await toast.showToast('آدرس اصلی تغییر کرد',ToastType.success,3000,true);
  }
}

const applyDiscount = async () => {
  discountLoading.value = true;

  const result = await SetDiscount(discountCode.value);
  if(result.isSuccess){
    toast.showToast();
    await cartStore.refreshCart();
  }
  else{
    toast.showToast(result.metaData)
  }

  discountLoading.value = false;
}

const payOrder = async ()=>{

  payLoading.value = true;

  if(paymentMethod.value == EPaymentMethod.Gateway){
    const result = await FetchApi<string>('/payment/payRequest',{
      method:'POST',
      body:{
        userId:accountStore.currentUser.id
      }
    });

    if(result.isSuccess && result.data != ''){
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://bpm.shaparak.ir/pgwchannel/startpay.mellat';
      form.enctype = 'application/x-www-form-urlencoded';
      const refId = document.createElement('input');
      refId.name = 'RefId';
      refId.id = 'RefId';
      refId.value = result.data!;
      form.appendChild(refId);
      document.body.appendChild(form);
      form.submit();
    }
  }
  else{
    if(accountStore.currentUser?.walletCash < cartStore.PendingOrder?.finallyPrice)
    {
      await toast.showToast("موجودی کیف پول شما از مبلغ سفارش کمتر است",ToastType.error,5000,false);
      payLoading.value = false;
      return;
    }

    const result = await PayWithWallet({
      userId:accountStore.currentUser.id
    });
    if(result.isSuccess){
      await router.push(`/payment/success?orderId=${result.data?.orderId}&saleRefId=${result.data?.refCode}`);
    }else{
      await toast.showError({message:"پرداخت سفارش با مشکل مواجه شد",appStatusCode:result.metaData.appStatusCode});
    }
  }

  payLoading.value = false;
}

const authStore = useAuthStore();
const removeDiscount = async ()=>{
  toast.showToast('آیا از حذف کد تخفیف اطمینان دارید؟',ToastType.warning)
    .then(async (res) => {
      if(res.isConfirmed){
        if(authStore.isLoggedIn) {
          const result = await RemoveDiscount();
          if (result.isSuccess) {
            toast.showToast();
            await cartStore.refreshCart();
          }
        }
        else{
          cartStore.removeDiscount();
          toast.showToast();
        }
      }
    })
}

</script>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>