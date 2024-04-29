<template>
  <transition>
  <div v-if="!utilStore.isMobile()" class="container mx-auto">
    <base-f-navbar />
    <div id="overlay2"></div>

    <div class="flex flex-col-reverse lg:flex-row lg:items-start gap-4 mt-12 mx-4 lg:mx-0">
      <div class="w-full lg:w-1/4 p-4 bg-bgWhite dark:bg-gray-800 border dark:border-gray-700 dark:text-white sticky top-12 rounded-xl flex flex-col space-y-6">
        <div class="flex w-full justify-between items-end " v-if="!accountStore.initLoading">
          <div class="flex flex-col items-start">
            <strong class="text-lg">{{accountStore.currentUser.fullName}}</strong>
            <span class="font-light opacity-70">{{accountStore.currentUser.phoneNumber}}</span>
          </div>
          <NuxtLink class="text-gray-600 dark:text-gray-300" to="/profile/personal-info">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </div>
        <div class="animate-pulse w-full bg-gray-200 rounded-xl p-4" v-else></div>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
              <g id="Iconly/Curved/Wallet">
                <g id="Wallet">
                <path id="Stroke 1" d="M21.1711 14.6755H17.2845C15.8692 14.6755 14.7216 13.5279 14.7216 12.1117C14.7216 10.6964 15.8692 9.54883 17.2845 9.54883H21.1407" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 3" d="M17.722 12.0531H17.4249" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 5" d="M7.60619 8.14367H11.6662" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 7" fill-rule="evenodd" clip-rule="evenodd" d="M2.7141 12.2532C2.7141 5.8484 5.03886 3.71411 12.015 3.71411C18.9903 3.71411 21.315 5.8484 21.315 12.2532C21.315 18.657 18.9903 20.7922 12.015 20.7922C5.03886 20.7922 2.7141 18.657 2.7141 12.2532Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </g>
            </svg>
            <span class="mr-1">
              کیف پول
            </span>
          </div>
          <span class="text-sm font-light"><strong class="font-bold text-lg ml-2">{{accountStore.currentUser?.walletCash?.toLocaleString() ?? 0}}</strong> ریــال</span>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75 text-brandOrange">
              <g id="Iconly/Curved/Star">
                <g id="Star">
                  <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M12 3C9.96385 3 9.77134 6.54652 8.55911 7.79957C7.34689 9.05263 3.5782 7.61992 3.05459 9.84403C2.53207 12.0693 5.92235 12.8243 6.34036 14.7334C6.76057 16.6426 4.68922 19.3249 6.45916 20.6598C8.22911 21.9936 10.1343 18.9747 12 18.9747C13.8656 18.9747 15.7709 21.9936 17.5408 20.6598C19.3108 19.3249 17.2405 16.6426 17.6596 14.7334C18.0787 12.8243 21.4679 12.0693 20.9454 9.84403C20.4229 7.61992 16.6531 9.05263 15.442 7.79957C14.2297 6.54652 14.0361 3 12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </g>
            </svg>
            <span class="mr-1">
              جی پی کلاب
            </span>
          </div>
          <span class="text-sm font-light"><strong class="font-bold text-lg ml-2">{{accountStore.currentUser?.GPClubScore?.toLocaleString() ?? 0}}</strong> امتیاز</span>
        </div>
        <hr class="border-2 rounded-full">
        <ul>
          <li class="border-b py-3">
            <NuxtLink active-class="activeLink" to="/profile">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Home">
                    <g id="Home">
                      <path id="Stroke 1" d="M9.07869 16.1355H14.8937" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 2" fill-rule="evenodd" clip-rule="evenodd" d="M2.39999 13.713C2.39999 8.082 3.01399 8.475 6.31899 5.41C7.76499 4.246 10.015 2 11.958 2C13.9 2 16.195 4.235 17.654 5.41C20.959 8.475 21.572 8.082 21.572 13.713C21.572 22 19.613 22 11.986 22C4.35899 22 2.39999 22 2.39999 13.713Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>
                <span>
                  داشبورد
                </span>
              </div>
            </NuxtLink>
          </li>
          <li class="border-b py-3">
            <NuxtLink active-class="activeLink" to="/profile/orders">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Bag">
                    <g id="Bag">
                      <path id="Stroke 1" d="M16.3638 6.86985C16.3638 4.48385 14.4298 2.54985 12.0438 2.54985C9.65777 2.53885 7.71577 4.46485 7.70477 6.85085V6.86985" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 3" d="M14.9727 11.3738H14.9267" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 5" d="M9.14159 11.3738H9.09559" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 7" fill-rule="evenodd" clip-rule="evenodd" d="M12.0342 21.4894C5.52619 21.4894 4.77719 19.4394 3.31619 14.0224C1.85019 8.58842 4.79119 6.55542 12.0342 6.55542C19.2772 6.55542 22.2182 8.58842 20.7522 14.0224C19.2912 19.4394 18.5422 21.4894 12.0342 21.4894Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>
                <span>
                  سفارشات
                </span>
              </div>
            </NuxtLink>
          </li>
<!--          <li class="border-b py-3"> TODO Implement
            <NuxtLink active-class="activeLink" to="/profile/favorites">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Heart">
                    <g id="Heart">
                      <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M2.9219 12.4462C1.8489 9.09619 3.1039 4.93119 6.6209 3.79919C8.4709 3.20219 10.7539 3.70019 12.0509 5.48919C13.2739 3.63419 15.6229 3.20619 17.4709 3.79919C20.9869 4.93119 22.2489 9.09619 21.1769 12.4462C19.5069 17.7562 13.6799 20.5222 12.0509 20.5222C10.4229 20.5222 4.6479 17.8182 2.9219 12.4462Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 3" d="M15.7886 7.56396C16.9956 7.68796 17.7506 8.64496 17.7056 9.98596" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>

                <span>
                  علاقه مندی ها
                </span>
              </div>
            </NuxtLink>
          </li>-->
          <li class="border-b py-3">
            <NuxtLink active-class="activeLink" to="/profile/comments">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Chat">
                    <g id="Chat">
                      <path id="Stroke 11" d="M15.9394 12.4131H15.9484" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 13" d="M11.9304 12.4131H11.9394" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 15" d="M7.9214 12.4131H7.9304" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 4" fill-rule="evenodd" clip-rule="evenodd" d="M19.071 19.0698C16.0159 22.1264 11.4896 22.7867 7.78631 21.074C7.23961 20.8539 3.70113 21.8339 2.93334 21.067C2.16555 20.2991 3.14639 16.7601 2.92631 16.2134C1.21285 12.5106 1.87411 7.9826 4.9302 4.9271C8.83147 1.0243 15.1698 1.0243 19.071 4.9271C22.9803 8.83593 22.9723 15.1681 19.071 19.0698Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>

                <span>
                  دیدگاه ها
                </span>
              </div>
            </NuxtLink>
          </li>
          <li class="border-b py-3">
            <NuxtLink active-class="activeLink" to="/profile/addresses">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Location">
                    <g id="Location">
                      <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M14.5102 10.7105C14.5102 9.3292 13.391 8.20996 12.0097 8.20996C10.6294 8.20996 9.51021 9.3292 9.51021 10.7105C9.51021 12.0907 10.6294 13.21 12.0097 13.21C13.391 13.21 14.5102 12.0907 14.5102 10.7105Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C9.10148 21 4.5 15.9587 4.5 10.5986C4.5 6.40246 7.8571 3 11.9995 3C16.1419 3 19.5 6.40246 19.5 10.5986C19.5 15.9587 14.8985 21 11.9995 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>

                <span>
                  آدرس ها
                </span>
              </div>
            </NuxtLink>
          </li>
          <li class="border-b py-3">
            <NuxtLink active-class="activeLink" to="/profile/notification">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Notification">
                    <g id="Notification">
                      <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M11.9962 2.51416C7.5619 2.51416 5.63523 6.5294 5.63523 9.18368C5.63523 11.1675 5.92285 10.5837 4.82476 13.0037C3.4838 16.4523 8.87619 17.8618 11.9962 17.8618C15.1152 17.8618 20.5076 16.4523 19.1676 13.0037C18.0695 10.5837 18.3571 11.1675 18.3571 9.18368C18.3571 6.5294 16.4295 2.51416 11.9962 2.51416Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 3" d="M14.306 20.5122C13.0117 21.9579 10.9927 21.9751 9.68599 20.5122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>

                <span>
                  پیغام ها
                </span>
                <base-f-badge color="brandOrange" fore-color="white" size="xs" v-if="!loading && unseenNotifs > 0">
                  {{unseenNotifs}} پیام
                </base-f-badge>
              </div>
            </NuxtLink>
          </li>
<!--          <li class="border-b py-3"> TODO Implement
            <NuxtLink active-class="activeLink" to="/profile/user-history">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Time Circle">
                    <g id="Time Circle">
                      <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M21.2498 12C21.2498 17.108 17.1088 21.25 11.9998 21.25C6.8918 21.25 2.7498 17.108 2.7498 12C2.7498 6.891 6.8918 2.75 11.9998 2.75C17.1088 2.75 21.2498 6.891 21.2498 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 3" d="M16.1907 12.7672L11.6607 12.6932V7.84619" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>

                <span>
                  بازدید های اخیر
                </span>
              </div>
            </NuxtLink>
          </li>-->
          <li class="border-b py-3">
            <NuxtLink active-class="activeLink" to="/profile/personal-info">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Profile">
                    <g id="Profile">
                      <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M11.8373 11.1735C14.26 11.1735 16.2237 9.2099 16.2237 6.78718C16.2237 4.36445 14.26 2.3999 11.8373 2.3999C9.41458 2.3999 7.45004 4.36445 7.45004 6.78718C7.44186 9.20172 9.39186 11.1654 11.8064 11.1735C11.8173 11.1735 11.8273 11.1735 11.8373 11.1735Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>

                <span>
                  اطلاعات حساب کاربری
                </span>
              </div>
            </NuxtLink>
          </li>
          <li class="border-b py-3" v-if="accountStore.currentUser !== null && accountStore.isAdmin">
            <NuxtLink active-class="activeLink" to="/admin">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Profile">
                    <g id="Profile">
                      <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M11.8373 11.1735C14.26 11.1735 16.2237 9.2099 16.2237 6.78718C16.2237 4.36445 14.26 2.3999 11.8373 2.3999C9.41458 2.3999 7.45004 4.36445 7.45004 6.78718C7.44186 9.20172 9.39186 11.1654 11.8064 11.1735C11.8173 11.1735 11.8273 11.1735 11.8373 11.1735Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>

                <span>
                  ورود به پنل ادمین
                </span>
              </div>
            </NuxtLink>
          </li>
          <li class="py-3">
            <button @click.prevent="LogOut">
              <div class="flex items-center space-x-4 space-x-reverse py-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Iconly/Curved/Logout">
                    <g id="Logout">
                      <path id="Stroke 1" d="M21.791 12.1208H9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 3" d="M18.8643 9.20483L21.7923 12.1208L18.8643 15.0368" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path id="Stroke 4" d="M16.3598 7.63C16.0298 4.05 14.6898 2.75 9.3598 2.75C2.2588 2.75 2.2588 5.06 2.2588 12C2.2588 18.94 2.2588 21.25 9.3598 21.25C14.6898 21.25 16.0298 19.95 16.3598 16.37" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </g>
                </svg>

                <span>
                  خروج
                </span>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <div class="flex-1 p-4 border dark:border-gray-700 rounded-xl">
        <slot></slot>
      </div>
    </div>

    <base-f-footer class="mt-48"/>
  </div>
  <div v-else class="overflow-y-auto relative text-sm font-medium">
      <main class="mx-4 mb-[90px]">
        <slot></slot>
      </main>
      <footer class="fixed bg-white z-10 bottom-0 inset-x-0 h-[80x] py-2" style="box-shadow: 0 -10px 20px 0 #B0B0B08A;">
        <div class="flex items-center justify-around">
          <NuxtLink to="/"  exact-active-class="activePage" class="flex flex-col items-center space-y-1 p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-xs font-light">صفحه اصلی</span>
          </NuxtLink>
          <NuxtLink to="/market"  exact-active-class="activePage" class="flex flex-col items-center space-y-1 p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <g opacity="0.8">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>

            <span class="text-xs font-light">دسته بندی</span>
          </NuxtLink>
          <NuxtLink to="/checkout/cart"  exact-active-class="activePage" class="flex flex-col items-center space-y-1 p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <path d="M15.7729 9.30504V6.27304C15.7729 4.18904 14.0839 2.50004 12.0009 2.50004C9.91694 2.49104 8.21994 4.17204 8.21094 6.25604V6.27304V9.30504" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="nofill"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7422 21.0006H7.25778C4.90569 21.0006 3 19.0956 3 16.7456V11.2296C3 8.87961 4.90569 6.97461 7.25778 6.97461H16.7422C19.0943 6.97461 21 8.87961 21 11.2296V16.7456C21 19.0956 19.0943 21.0006 16.7422 21.0006Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>

            <span class="text-xs font-light">سبد خرید</span>
          </NuxtLink>
          <NuxtLink :to="!authStore.isLoggedIn ? '/auth/login' : '/profile'" exact-active-class="activePage" class="flex flex-col items-center space-y-1 p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.8">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.983 15.3457C8.11536 15.3457 4.8125 15.9305 4.8125 18.2724C4.8125 20.6143 8.0944 21.22 11.983 21.22C15.8506 21.22 19.1525 20.6343 19.1525 18.2933C19.1525 15.9524 15.8715 15.3457 11.983 15.3457Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9829 12.0059C14.521 12.0059 16.5782 9.94779 16.5782 7.40969C16.5782 4.8716 14.521 2.81445 11.9829 2.81445C9.44484 2.81445 7.38675 4.8716 7.38675 7.40969C7.37817 9.93922 9.42198 11.9973 11.9506 12.0059H11.9829Z" stroke="black" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <span class="text-xs font-light" >پروفایل</span>
          </NuxtLink>
        </div>
      </footer>
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
    unseenNotifs.value = result.data;
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
