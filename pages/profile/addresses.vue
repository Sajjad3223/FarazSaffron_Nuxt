<template>
  <div>
    <Head>
      <Title>آدرس ها</Title>
    </Head>
    <div v-if="!utilStore.isMobile()">
      <div>
        <div class="text-xl font-bold flex items-center gap-2 ">
          <span>آدرس ها</span>
          <base-g-button button-type="white" color="info" is-icon @click="showAddressModal = true"
                 class="mr-auto text-sm font-light text-[#3787FF] flex items-center gap-1">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.25733 4.12842L8.25732 12.3853M12.3857 8.25683L4.12891 8.25684" stroke="currentColor" stroke-linecap="round"/>
            </svg>
            <span>ثبت آدرس جدید</span>
          </base-g-button>
        </div>
        <hr class="my-3  ">
      </div>
      <div v-if="!accountStore.initLoading">
        <ul class="flex flex-col space-y-4 w-full" v-if="!accountStore.initLoading">
          <li class="flex bg-white border rounded-xl p-4 min-h-[120px]"
              v-for="a in accountStore.currentUser?.addresses" :key="a.id">
            <div class="w-1/12 grid place-items-center">
              <input type="radio" name="activeAddress" class="accent-primary my-4 w-6 h-6 mx-auto" @change="setAsActive(a.id)" :checked="a.isActiveAddress">
            </div>
            <div class="flex-1 flex flex-col space-y-2">
              <span class="font-normal text-xl hidden">آدرس تحویل</span>
              <div class="flex flex-col space-y-2">
                <p class="font-semibold text-lg">
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
            <button class="self-start text-[#3787FF] flex items-center gap-0.5" @click="editAddress(a)">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.84371 4.34477L9.94371 6.59477M2.59375 12.2198L5.14057 11.6699C5.27578 11.6408 5.39992 11.5694 5.49742 11.4649L11.1987 5.35301C11.4721 5.05997 11.4719 4.58498 11.1983 4.29219L9.99057 2.99964C9.71711 2.70698 9.274 2.70718 9.00077 3.00009L3.29886 9.11262C3.20155 9.21694 3.13511 9.34968 3.10784 9.49424L2.59375 12.2198Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-xs font-light">ویرایش</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-4 w-full mt-6" v-else>
        <div class="w-full flex items-center p-4 rounded-xl skeleton bg-white min-h-[120px]" style="box-shadow: 0 5px 15px 0 #CBCBCB33;" v-for="i in 3" :key="i">
          <div class="w-1/12 grid place-items-center">
            <span class="w-6 h-6 skeleton-el rounded-full"></span>
          </div>
          <div class="flex-1 flex flex-col">
            <div class="w-1/6 h-5 rounded-full skeleton-el"></div>
            <div class="w-1/2 h-3 rounded-full skeleton-el mt-5"></div>
            <div class="w-2/6 h-3 rounded-full skeleton-el mt-3"></div>
          </div>
          <div class="w-1/12 grid self-start">
            <span class="w-12 h-2 skeleton-el rounded-full mr-auto"></span>
          </div>
        </div>
      </div>
      <base-g-modal v-model="showAddressModal" title="افزودن آدرس جدید">
        <profile-user-address @address-created="showAddressModal = false,accountStore.initData()" />
      </base-g-modal>
      <base-g-modal v-model="showEditAddressModal" title="ویرایش آدرس">
        <profile-edit-user-address :address="addressToEdit" @address-edited="showEditAddressModal = false,accountStore.initData()" />
      </base-g-modal>
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
import type {AddressDto} from "~/models/users/userDto";

definePageMeta({
  layout:'profile'
})

const showAddressModal = ref(false);
const showEditAddressModal = ref(false);
const addressToEdit:Ref<AddressDto | null> = ref(null);

const accountStore = useAccountStore();
const toast = useToast();
const utilStore = useUtilStore();

const editAddress = async (address:AddressDto) => {
  showEditAddressModal.value = true;
  addressToEdit.value = address;
}

const setAsActive = async (addressId:number) => {
  const result = await SetAddressAsActive(addressId);
  if(result.isSuccess){
    await toast.showToast('آدرس به عنوان آدرس اصلی ثبت شد',ToastType.success,3000,true);
  }
}
</script>