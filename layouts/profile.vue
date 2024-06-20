<template>
  <transition>
  <div v-if="!utilStore.isMobile()" class="mx-auto">

    <div class="container mx-auto flex items-start mt-12">
      <aside class="w-1/6 text-sm flex flex-col items-start">
        <div class="h-[100px] bg-white py-5 flex flex-col gap-2">
          <strong class="text-4xl">پنل کاربری</strong>
          <NuxtLink to="/" class="flex items-center gap-1 mr-2 group hover:text-brandOrange transition-colors duration-200">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M6.83333 1.625L11 6M11 6L6.83333 10.375M11 6L1 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <small>بازگشت به جی پی</small>
          </NuxtLink>
        </div>
        <div class="w-full flex flex-col space-y-1">
          <NuxtLink to="/profile" class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M9.54007 21.637V18.4425C9.54005 17.63 10.2025 16.9698 11.0232 16.9643H14.0295C14.8542 16.9643 15.5227 17.6261 15.5227 18.4425V18.4425V21.647C15.5225 22.3368 16.0787 22.9007 16.7753 22.9168H18.7795C20.7775 22.9168 22.3971 21.3134 22.3971 19.3354V19.3354V10.2479C22.3865 9.46977 22.0174 8.73907 21.395 8.26374L14.5406 2.79735C13.3398 1.84554 11.6328 1.84554 10.4319 2.79735L3.60758 8.27366C2.98282 8.74706 2.61316 9.47898 2.60547 10.2578V19.3354C2.60547 21.3134 4.22513 22.9168 6.22309 22.9168H8.2273C8.94126 22.9168 9.52003 22.3438 9.52003 21.637V21.637" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span>داشبورد</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/profile/orders" class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.75 3.25L4.83 3.61L5.793 15.083C5.87 16.02 6.653 16.739 7.593 16.736H18.502C19.399 16.738 20.16 16.078 20.287 15.19L21.236 8.632C21.342 7.899 20.833 7.219 20.101 7.113C20.037 7.104 5.164 7.099 5.164 7.099" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.125 10.7949H16.898" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15338 20.2021C7.45438 20.2021 7.69738 20.4461 7.69738 20.7461C7.69738 21.0471 7.45438 21.2911 7.15338 21.2911C6.85238 21.2911 6.60938 21.0471 6.60938 20.7461C6.60938 20.4461 6.85238 20.2021 7.15338 20.2021Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4346 20.2021C18.7356 20.2021 18.9796 20.4461 18.9796 20.7461C18.9796 21.0471 18.7356 21.2911 18.4346 21.2911C18.1336 21.2911 17.8906 21.0471 17.8906 20.7461C17.8906 20.4461 18.1336 20.2021 18.4346 20.2021Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>سفارشات</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/profile/comments" class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.9408 12.4131H15.9498" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.9291 12.4131H11.9381" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.92128 12.4131H7.93028" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>دیدگاه ها</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/profile/addresses" class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>آدرس ها</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/profile/notification" class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.3889 20.8574C13.0247 22.3721 10.8967 22.3901 9.51953 20.8574" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>پیغام ها</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/profile/tickets" class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.99983 11C4.99983 6.58172 8.58125 3 12.9992 3C17.4171 3 20.9985 6.58172 20.9985 11C20.9985 12.15 20.7558 13.2434 20.319 14.2316L21 18.9992L16.9146 17.9778C15.7572 18.6287 14.4215 19 12.9992 19M3.00095 16C3.00095 16.7188 3.15258 17.4021 3.4256 18.0198L3 20.9995L5.55315 20.3611C6.27643 20.768 7.11115 21 8.00005 21C10.761 21 12.9992 18.7614 12.9992 16C12.9992 13.2386 10.761 11 8.00005 11C5.23912 11 3.00095 13.2386 3.00095 16Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>تیکت ها</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/profile/favorites" class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 6.7002C17.07 7.0462 17.826 8.0012 17.917 9.1222" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>علاقه مندی ها</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/profile/user-history" v-if="false" class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.75 3.25L4.83 3.61L5.793 15.083C5.87 16.02 6.653 16.739 7.593 16.736H18.502C19.399 16.738 20.16 16.078 20.287 15.19L21.236 8.632C21.342 7.899 20.833 7.219 20.101 7.113C20.037 7.104 5.164 7.099 5.164 7.099" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.125 10.7949H16.898" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.15338 20.2021C7.45438 20.2021 7.69738 20.4461 7.69738 20.7461C7.69738 21.0471 7.45438 21.2911 7.15338 21.2911C6.85238 21.2911 6.60938 21.0471 6.60938 20.7461C6.60938 20.4461 6.85238 20.2021 7.15338 20.2021Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4346 20.2021C18.7356 20.2021 18.9796 20.4461 18.9796 20.7461C18.9796 21.0471 18.7356 21.2911 18.4346 21.2911C18.1336 21.2911 17.8906 21.0471 17.8906 20.7461C17.8906 20.4461 18.1336 20.2021 18.4346 20.2021Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>آخرین بازدید ها</span>
            </div>
          </NuxtLink>
          <hr>
          <NuxtLink to="/profile/personal-info" class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.983 15.3457C8.11536 15.3457 4.8125 15.9305 4.8125 18.2724C4.8125 20.6143 8.0944 21.22 11.983 21.22C15.8506 21.22 19.1525 20.6343 19.1525 18.2933C19.1525 15.9524 15.8715 15.3457 11.983 15.3457Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9829 12.0059C14.521 12.0059 16.5782 9.94779 16.5782 7.40969C16.5782 4.8716 14.521 2.81445 11.9829 2.81445C9.44484 2.81445 7.38675 4.8716 7.38675 7.40969C7.37817 9.93922 9.42198 11.9973 11.9506 12.0059H11.9829Z" stroke="currentColor" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>اطلاعات حساب کاربری</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/admin" v-if="accountStore.isAdmin"
                    class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] transition-colors duration-200" exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
            <div class="flex items-center gap-4">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="25" height="25" fill="url(#pattern0_438_2587)" fill-opacity="0.5"/>
                <defs>
                  <pattern id="pattern0_438_2587" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_438_2587" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_438_2587" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
              <span>ورود به پنل ادمین</span>
            </div>
          </NuxtLink>
          <hr>
          <button class="p-4 rounded-r-lg w-full hover:bg-[#F8F8F8] hover:text-danger transition-colors duration-200" @click="LogOut">
            <span class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8144 12.0225H3.77344" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.8867 9.10645L15.8147 12.0224L12.8867 14.9384" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.50781 7.38946V6.45646C8.50781 4.42146 10.1568 2.77246 12.1928 2.77246H17.0768C19.1068 2.77246 20.7518 4.41746 20.7518 6.44746V17.5875C20.7518 19.6225 19.1018 21.2725 17.0668 21.2725H12.1818C10.1528 21.2725 8.50781 19.6265 8.50781 17.5975V16.6555" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>خروج از حساب</span>
            </span>
          </button>
        </div>
      </aside>
      <main class="flex-1 bg-white flex flex-col">
        <div class="h-[100px] flex items-center justify-between">
          <div></div>
          <!--  User Avatar  -->
          <div class="flex items-center gap-3 pointer-events-none">
            <img src="~/assets/images/avatar.png" alt="avatar" class="max-w-14 border-2 rounded-full">
            <span class="flex flex-col items-start" v-if="!accountStore.initLoading">
              <strong class="text-xl">{{ accountStore.currentUser?.fullName }}</strong>
              <span class="text-sm font-light opacity-70">{{ accountStore.currentUser?.phoneNumber }}</span>
            </span>
            <div v-else class="flex flex-col space-y-2 skeleton">
              <div class="w-48 h-4 rounded-full skeleton-el"></div>
              <div class="w-24 h-2 rounded-full skeleton-el"></div>
            </div>
          </div>
        </div>
        <div class="bg-[#F8F8F8] p-10 min-h-[70vh] rounded-md">
          <slot></slot>
        </div>
      </main>
    </div>

  </div>
  <div v-else class="overflow-y-auto relative text-sm font-medium">
      <main class="mx-4 mb-[90px]">
        <slot></slot>
      </main>
      <BaseMobileFooter />
    </div>
  </transition>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/auth.store";
import {ToastType, useToast} from "~/composables/useSwal";
import {GetUnseenNotificationsCount} from "~/services/notification.service";

const authStore = useAuthStore();
const accountStore = useAccountStore();
const utilStore = useUtilStore();
const toast = useToast();
const loading = ref(false);
const unseenNotifs = ref(0);

onMounted(async()=>{
  loading.value = true;

  const result = await GetUnseenNotificationsCount();
  if(result.isSuccess){
    unseenNotifs.value = result.data ?? 0;
  }

  loading.value = false;
})

const LogOut = async () => {
  toast.showToast(
      'آیا مایلید از حساب کاربری خود خارج شوید؟',
      ToastType.warning,
      0).then( async result=>{
        if(result.isConfirmed){
          await authStore.logOut();
        }
  })
}
</script>

<style scoped lang="scss">
#overlay2{
  position: fixed;
  inset: 0;
  z-index: -2;
  background: url("../assets/images/bgPattern.png") 0 0 / auto repeat;
  background-size: 900px;
  @media screen and (max-width: 450px) {
    background-size:600px;
  }
  opacity: 0.5;
  background-blend-mode: overlay;
  @media screen and (min-width: 500px) {
    mix-blend-mode: overlay;
    opacity: 0.3;
  }
}

.activeLink{
  @apply font-bold relative before:absolute before:-top-1 before:-bottom-1 before:w-1 before:h-full before:bg-brandOrange before:-right-4 before:content-[''] before:rounded-l-lg;
}
.activeLink path{
  stroke-width: 2px !important;
}
</style>
