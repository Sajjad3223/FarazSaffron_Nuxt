<template>
  <div>
    <Head>
      <Title>آدرس ها</Title>
    </Head>
    <div v-if="!utilStore.isMobile()">
      <div>
        <div class="text-2xl font-bold flex items-center gap-2 ">
          <NuxtLink to="/profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
          <strong>آدرس ها</strong>
        </div>
        <hr class="my-3 border-2 ">
      </div>
      <div v-if="!accountStore.initLoading">
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-if="!accountStore.initLoading">
        <li class="flex flex-col bg-bgWhite drop-shadow space-y-3 p-4 rounded-lg border" v-for="a in accountStore.currentUser?.addresses" :key="a.id">
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
        <li class="grid place-items-center bg-bgWhite    drop-shadow rounded-lg border relative min-h-36">
          <button class="flex flex-col items-center absolute justify-center space-y-2 w-full inset-0" @click="showAddressModal = true">
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
      <div class="grid grid-cols-4 min-h-[300px] gap-4 w-full mt-6" v-else>
        <div class="w-full items-center bg-gray-100 p-4 grid grid-cols-2 gap-4 rounded-xl animate-pulse" v-for="i in 3" :key="i">
          <div class="h-2 rounded-full bg-gray-300"></div>
          <div class="h-2 rounded-full bg-gray-300 col-span-full"></div>
          <div class="h-2 rounded-full bg-gray-300 col-span-full w-2/3"></div>
          <div class="h-2 rounded-full bg-gray-300 col-span-2"></div>
          <div class="h-2 rounded-full bg-gray-300 col-span-2"></div>
          <div class="h-2 rounded-full bg-gray-300 "></div>
          <div class="h-2 rounded-full bg-gray-300 "></div>
        </div>
      </div>
      <base-f-modal v-model="showAddressModal" title="افزودن آدرس جدید">
        <profile-user-address @address-created="showAddressModal = false,accountStore.initData()" />
      </base-f-modal>
    </div>
    <div v-else class="relative">
      <header class="w-full h-[80px] px-4 flex items-center justify-center relative">
        <NuxtLink to="/profile" class="absolute right-7">
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M1 13L6 7L1 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <span class="font-light">
          آدرس ها
        </span>
      </header>
      <hr>
      <div v-if="!accountStore.initLoading">
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
      </div>
      <Transition enter-active-class="transition-opacity duration-200" leave-active-class="transition-opacity duration-200" enter-from-class="opacity-0" leave-to-class="opacity-0">
        <div class="fixed p-2 flex flex-col inset-0 bg-white" v-if="showAddressModal">
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
          <profile-user-address class="mt-6"/>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import {SetAddressAsActive} from "~/services/user.service";
import {ToastType} from "~/composables/useSwal";

definePageMeta({
  layout:'profile'
})

const showAddressModal = ref(false);

const accountStore = useAccountStore();
const toast = useToast();
const utilStore = useUtilStore();

const setAsActive = async (addressId:number) => {
  const result = await SetAddressAsActive(addressId);
  if(result.isSuccess){
    await toast.showToast('آدرس به عنوان آدرس اصلی ثبت شد',ToastType.success,3000,true);
  }
}
</script>