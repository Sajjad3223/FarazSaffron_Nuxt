<template>
  <div>
    <Head>
      <Title>افزودن آدرس</Title>
    </Head>
    <div class="mt-5 2xl:mt-12 hidden md:block">

      <client-only>
        <base-g-modal v-model="showAddressModal" title="افزودن آدرس جدید">
          <profile-user-address @address-created="showAddressModal = false,accountStore.initData()" />
        </base-g-modal>
      </client-only>

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
        <span class="bg-brandOrange/20 aspect-square text-brandOrange rounded-full px-1 text-[10px]">{{cartStore.cartItemsCount}}</span>
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
        <div class="relative grid place-items-center w-8 h-8 rounded-full border border-brandOrange text-brandOrange">
          <span>2</span>
          <span class="absolute -bottom-full w-max">افزودن آدرس</span>
        </div>
        <div class="h-px bg-black/10 opacity-40 flex-1"></div>
        <div class="relative opacity-40 grid place-items-center w-8 h-8 rounded-full border">
          <span>3</span>
          <span class="absolute -bottom-full w-max">تکمیل پرداخت</span>
        </div>
      </div>
      <hr class="w-full mt-6">
      <!--  Addresses  -->
      <ul class="flex flex-col w-full mt-4 space-y-4" v-if="accountStore.currentUser">
        <li class="flex w-full items-start gap-6 p-4 space-y-2 bg-white rounded-xl relative" style="box-shadow: 0 4px 15px 0 #AAAAAA40;" v-for="a in accountStore.currentUser.addresses" :key="a.id">
          <input type="radio" name="activeAddress" class="w-6 h-6 mx-auto" @change="setAsActive(a.id)" :checked="a.isActiveAddress">
          <div class="flex-1 flex flex-col items-start">
            <strong>{{ a.state }}</strong>
            <span class="font-light text-sm opacity-70">{{ a.city }}</span>
            <span class="font-light text-sm opacity-70">{{ a.street }}</span>
            <span class="font-light text-sm opacity-70">کد پستی: {{ a.postCode }}</span>

            <div class="grid grid-cols-2 w-full">
              <span class="font-light text-sm opacity-70">{{ a.receiverFirstName + a.receiverLastName }}</span>
              <span class="font-light text-sm opacity-70">{{ a.receiverPhoneNumber }}</span>
            </div>

            <button class="absolute top-4 left-4 grid place-items-center text-danger">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-125">
                <path d="M2.76902 9.75978C2.46402 9.75978 2.17902 9.65478 1.97402 9.45978C1.71402 9.21478 1.58902 8.84478 1.63402 8.44478L1.81902 6.82478C1.85402 6.51978 2.03902 6.11478 2.25402 5.89478L6.35902 1.54978C7.38402 0.46478 8.45402 0.43478 9.53902 1.45978C10.624 2.48478 10.654 3.55478 9.62902 4.63978L5.52402 8.98478C5.31402 9.20978 4.92402 9.41978 4.61902 9.46978L3.00902 9.74478C2.92402 9.74978 2.84902 9.75978 2.76902 9.75978ZM7.96402 1.45478C7.57902 1.45478 7.24402 1.69478 6.90402 2.05478L2.79902 6.40478C2.69902 6.50978 2.58402 6.75978 2.56402 6.90478L2.37902 8.52478C2.35902 8.68978 2.39902 8.82478 2.48902 8.90978C2.57902 8.99478 2.71402 9.02478 2.87902 8.99978L4.48902 8.72478C4.63402 8.69978 4.87402 8.56978 4.97402 8.46478L9.07902 4.11978C9.69902 3.45978 9.92402 2.84978 9.01902 1.99978C8.61902 1.61478 8.27402 1.45478 7.96402 1.45478Z" fill="#F04623"/>
                <path d="M8.66826 5.47541C8.65826 5.47541 8.64326 5.47541 8.63326 5.47541C7.07326 5.32041 5.81826 4.13541 5.57826 2.58541C5.54826 2.38041 5.68826 2.19041 5.89326 2.15541C6.09826 2.12541 6.28826 2.26541 6.32326 2.47041C6.51326 3.68041 7.49326 4.61041 8.71326 4.73041C8.91826 4.75041 9.06826 4.93541 9.04826 5.14041C9.02326 5.33041 8.85826 5.47541 8.66826 5.47541Z" fill="#F04623"/>
                <path d="M10.5 11.375H1.5C1.295 11.375 1.125 11.205 1.125 11C1.125 10.795 1.295 10.625 1.5 10.625H10.5C10.705 10.625 10.875 10.795 10.875 11C10.875 11.205 10.705 11.375 10.5 11.375Z" fill="#F04623"/>
              </svg>
            </button>
          </div>
        </li>
        <li class="w-full">
          <button class="flex flex-col items-center border border-brandOrange w-full py-4 rounded-xl space-y-2 text-brandOrange" @click="showAddressModal = true">
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
      <Transition enter-active-class="transition-opacity duration-200" leave-active-class="transition-opacity duration-200" enter-from-class="opacity-0" leave-to-class="opacity-0">
        <div class="fixed p-2 flex flex-col inset-0 bg-white z-30" v-if="showAddressModal">
          <header class="w-full h-[50px] px-4 flex items-center justify-center relative">
            <button class="absolute right-7" @click="showAddressModal = false">
              <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.8" d="M1 13L6 7L1 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <span class="font-light">
          افزودن آدرس جدید
        </span>
          </header>
          <hr>
          <profile-user-address class="mt-6" @address-created="showAddressModal = false,accountStore.initData()"/>
        </div>
      </Transition>
      <!--  Total Price  -->
      <div class="w-full fixed bottom-[75px] border-b bg-white h-[60px] z-20 px-4 grid grid-cols-2 items-center" style="box-shadow: 0 -4px 10px 0 #E2E2E240;">
        <div class="flex flex-col items-start">
          <small>مجموع سبد خرید</small>
          <base-g-price :price="(cartStore.PendingOrder.totalPrice / 10)" />
        </div>
        <base-g-button is-link @click="payOrder" w-full :disabled="!accountStore.hasActiveAddress">
          تکمیل سفارش
        </base-g-button>
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


const discountCode = ref('');
const cartStore = useCartStore()
const accountStore = useAccountStore();
const utilStore = useUtilStore();
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
      method:'POST'
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
      document.body.appendChild(form)
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

    const result = await PayWithWallet();
    if(result.isSuccess){
      await router.push(`/payment/success?orderId=${result.data?.orderId}&saleRefId=${result.data?.refCode}`);
    }else{
      await toast.showError({message:"پرداخت سفارش با مشکل مواجه شد",appStatusCode:result.metaData.appStatusCode});
    }
  }

  payLoading.value = false;
}

const removeDiscount = async ()=>{
  toast.showToast('آیا از حذف کد تخفیف اطمینان دارید؟',ToastType.warning)
    .then(async (res) => {
      if(res.isConfirmed){
        const result = await RemoveDiscount();
        if(result.isSuccess)  {
          toast.showToast();
          await cartStore.refreshCart();
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