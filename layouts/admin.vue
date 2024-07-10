<template>
  <div class="hidden md:block mx-auto">
    <div class="flex flex-col container mx-auto mt-4 2xl:mt-[6rem]">
      <h2 class="hidden 2xl:block w-full text-center text-3xl font-bold">پنل مدیریت</h2>
      <NuxtLink class="flex items-center gap-4 w-max p-2" to="/">
        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.666016 1.33335L5.33268 6.00002L0.666016 10.6667" stroke="#070707" stroke-width="1.2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-xs">بازگشت به جی پی</span>
      </NuxtLink>
      <div class="w-full flex gap-5 items-start mt-4 2xl:mt-12">
        <aside class="w-1/6 text-sm flex flex-col items-start bg-white border py-6 rounded-xl">
          <div class="w-full flex flex-col">
            <ul>
              <li class="relative w-full flex">
                <NuxtLink to="/admin" class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200"
                          exact-active-class="activeLink">
                  <div class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 18V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path
                          d="M10.07 2.82L3.14002 8.37C2.36002 8.99 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99 20.86 8.37L13.93 2.83C12.86 1.97 11.13 1.97 10.07 2.82Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>داشبورد</span>
                  </div>
                </NuxtLink>
              </li>
              <li class="relative w-full flex">
                <NuxtLink exact-active-class="activeLink"
                          class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200"
                          to="/admin/homePageSetting">
                  <div class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20.8064 7.62361L20.184 6.54352C19.6574 5.6296 18.4905 5.31432 17.5753 5.83872V5.83872C17.1397 6.09534 16.6198 6.16815 16.1305 6.04109C15.6411 5.91402 15.2224 5.59752 14.9666 5.16137C14.8021 4.88415 14.7137 4.56839 14.7103 4.24604V4.24604C14.7251 3.72922 14.5302 3.2284 14.1698 2.85767C13.8094 2.48694 13.3143 2.27786 12.7973 2.27808H11.5433C11.0367 2.27807 10.5511 2.47991 10.1938 2.83895C9.83644 3.19798 9.63693 3.68459 9.63937 4.19112V4.19112C9.62435 5.23693 8.77224 6.07681 7.72632 6.0767C7.40397 6.07336 7.08821 5.98494 6.81099 5.82041V5.82041C5.89582 5.29601 4.72887 5.61129 4.20229 6.52522L3.5341 7.62361C3.00817 8.53639 3.31916 9.70261 4.22975 10.2323V10.2323C4.82166 10.574 5.18629 11.2056 5.18629 11.8891C5.18629 12.5725 4.82166 13.2041 4.22975 13.5458V13.5458C3.32031 14.0719 3.00898 15.2353 3.5341 16.1454V16.1454L4.16568 17.2346C4.4124 17.6798 4.82636 18.0083 5.31595 18.1474C5.80554 18.2866 6.3304 18.2249 6.77438 17.976V17.976C7.21084 17.7213 7.73094 17.6516 8.2191 17.7822C8.70725 17.9128 9.12299 18.233 9.37392 18.6717C9.53845 18.9489 9.62686 19.2646 9.63021 19.587V19.587C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973C13.8502 21.5001 14.7053 20.6491 14.7103 19.5962V19.5962C14.7079 19.088 14.9086 18.6 15.2679 18.2407C15.6272 17.8814 16.1152 17.6807 16.6233 17.6831C16.9449 17.6917 17.2594 17.7798 17.5387 17.9394V17.9394C18.4515 18.4653 19.6177 18.1544 20.1474 17.2438V17.2438L20.8064 16.1454C21.0615 15.7075 21.1315 15.186 21.001 14.6964C20.8704 14.2067 20.55 13.7894 20.1108 13.5367V13.5367C19.6715 13.284 19.3511 12.8666 19.2206 12.3769C19.09 11.8873 19.16 11.3658 19.4151 10.928C19.581 10.6383 19.8211 10.3982 20.1108 10.2323V10.2323C21.0159 9.70289 21.3262 8.54349 20.8064 7.63277V7.63277V7.62361Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <circle cx="12.1747" cy="11.8891" r="2.63616" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>مدیریت صفحه اصلی</span>
                  </div>
                </NuxtLink>
              </li>
              <li class="relative w-full flex flex-col">
                <button
                    class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200 flex justify-between"
                    @click="isProductMenuOpen = !isProductMenuOpen"
                    @keydown.esc="isProductMenuOpen = false"
                    aria-haspopup="true"
                >
                  <span class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.17004 7.44L12 12.55L20.77 7.46997" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 21.61V12.54" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path
                          d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17 13.24V9.58002L7.51001 4.09998" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>محصولات</span>
                  </span>
                  <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <Transition enter-active-class="transition-all ease-in-out duration-300"
                            enter-from-class="opacity-25 max-h-0"
                            enter-to-class="opacity-100 max-h-48"
                            leave-active-class="transition-all ease-in-out duration-300"
                            leave-from-class="opacity-100 max-h-48"
                            leave-to-class="opacity-0 max-h-0">
                  <template v-if="isProductMenuOpen">
                    <ul
                        class="py-3 m-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100"
                        aria-label="submenu"
                    >
                      <li
                          class="relative px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/products">
                          همه محصولات
                        </NuxtLink>
                      </li>
                      <li
                          class="relative px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/products/discounts">
                          تخفیف ها
                        </NuxtLink>
                      </li>
                      <li
                          class="relative px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/products/images">
                          تصاویر
                        </NuxtLink>
                      </li>
                      <li
                          class="relative px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/products/specifications">
                          ویژگی ها
                        </NuxtLink>
                      </li>
                    </ul>
                  </template>
                </Transition>
              </li>
              <li class="relative w-full flex flex-col">
                <button
                    class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200 flex justify-between"
                    @click="isUsersMenuOpen = !isUsersMenuOpen"
                    @keydown.esc="isUsersMenuOpen = false"
                    aria-haspopup="true"
                >
                <span class="flex items-center gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M16.9702 14.44C18.3402 14.67 19.8502 14.43 20.9102 13.72C22.3202 12.78 22.3202 11.24 20.9102 10.3C19.8402 9.59004 18.3102 9.35003 16.9402 9.59003"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>کاربران</span>
                </span>
                  <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <Transition enter-active-class="transition-all ease-in-out duration-300"
                            enter-from-class="opacity-25 max-h-0"
                            enter-to-class="opacity-100 max-h-48"
                            leave-active-class="transition-all ease-in-out duration-300"
                            leave-from-class="opacity-100 max-h-48"
                            leave-to-class="opacity-0 max-h-0">
                  <template v-if="isUsersMenuOpen">
                    <ul
                        class="py-3 m-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100  "
                        aria-label="submenu"
                    >
                      <li
                          class="relative px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/users">
                          همه کاربران
                        </NuxtLink>
                      </li>
                      <li
                          class="relative px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/users/roles">
                          لقب ها
                        </NuxtLink>
                      </li>
                      <li
                          class="relative  px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink class="flex items-center"
                                  exact-active-class="activeSubLink"
                                  to="/admin/users/comments">
                          <span>نظرات</span>
                          <span
                              class="aspect-square mr-1 px-2 grid place-items-center font-light w-max text-xs rounded-full bg-warning text-black"
                              v-if="pendingComments > 0">{{ pendingComments }}</span>
                        </NuxtLink>
                      </li>
                      <li
                          class="relative px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/users/wallets">
                          تراکنش ها
                        </NuxtLink>
                      </li>
                    </ul>
                  </template>
                </Transition>
              </li>
              <li class="relative w-full flex flex-col">
                <button
                    class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200 flex justify-between"
                    @click="isOrdersMenuOpen = !isOrdersMenuOpen"
                    @keydown.esc="isOrdersMenuOpen = false"
                    aria-haspopup="true"
                >
                <span class="flex items-center gap-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.81 2L5.19 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.19 2L18.81 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"
                          stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M2 7.85001C2 6.00001 2.99 5.85001 4.22 5.85001H19.78C21.01 5.85001 22 6.00001 22 7.85001C22 10 21.01 9.85001 19.78 9.85001H4.22C2.99 9.85001 2 10 2 7.85001Z"
                        stroke="currentColor" stroke-width="1.5"/>
                    <path d="M9.76001 14V17.55" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M14.36 14V17.55" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <span>سفارشات</span>
                </span>
                  <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <Transition enter-active-class="transition-all ease-in-out duration-300"
                            enter-from-class="opacity-25 max-h-0"
                            enter-to-class="opacity-100 max-h-48"
                            leave-active-class="transition-all ease-in-out duration-300"
                            leave-from-class="opacity-100 max-h-48"
                            leave-to-class="opacity-0 max-h-0">
                  <template v-if="isOrdersMenuOpen">
                    <ul
                        class="py-3 m-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100  "
                        aria-label="submenu"
                    >
                      <li
                          class="relative px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/orders">
                          همه سفارشات
                        </NuxtLink>
                      </li>
                      <li
                          class="relative px-4 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/orders/inProgress">
                          سفارشات در انتظار
                        </NuxtLink>
                      </li>
                    </ul>
                  </template>
                </Transition>
              </li>
              <li class="relative w-full flex" v-if="false">
                <button
                    class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                    @click="isBlogMenuOpen = !isBlogMenuOpen"
                    @keydown.esc="isBlogMenuOpen = false"
                    aria-haspopup="true"
                >
                <span class="inline-flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="currentColor"
                          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z"
                        stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round"/>
                    <path d="M14.91 4.15002C15.58 6.54002 17.45 8.41002 19.85 9.09002" stroke="currentColor"
                          stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>وبلاگ</span>
                </span>
                  <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <Transition enter-active-class="transition-all ease-in-out duration-300"
                            enter-from-class="opacity-25 max-h-0"
                            enter-to-class="opacity-100 max-h-48"
                            leave-active-class="transition-all ease-in-out duration-300"
                            leave-from-class="opacity-100 max-h-48"
                            leave-to-class="opacity-0 max-h-0">
                  <template v-if="isBlogMenuOpen">
                    <ul
                        class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100  "
                        aria-label="submenu"
                    >
                      <li
                          class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/blog">
                          همه پست ها
                        </NuxtLink>
                      </li>
                      <li
                          class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 "
                      >
                        <NuxtLink
                            exact-active-class="activeSubLink"
                            to="/admin/blog/drafts">
                          پیش نویس ها
                        </NuxtLink>
                      </li>
                    </ul>
                  </template>
                </Transition>
              </li>
              <li class="relative w-full flex">
                <NuxtLink exact-active-class="activeLink"
                          class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200"
                          to="/admin/categories">
                  <div class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path
                          d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path
                          d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14.5 17.5H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M17.5 20.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <span>دسته بندی ها</span>
                  </div>
                </NuxtLink>
              </li>
              <li class="relative w-full flex">
                <NuxtLink exact-active-class="activeLink"
                          class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200"
                          to="/admin/catalogs">
                  <div class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path
                          d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path
                          d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14.5 17.5H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                      <path d="M17.5 20.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <span>کاتالوگ ها</span>
                  </div>
                </NuxtLink>
              </li>
              <li class="relative w-full flex">
                <NuxtLink exact-active-class="activeLink"
                          class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200"
                          to="/admin/contactUs">
                  <div class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                          stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
                      <path d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5" stroke="currentColor"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M22 9C22 5.13 18.87 2 15 2" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>تماس با ما</span>
                  </div>
                </NuxtLink>
              </li>
              <li class="relative w-full flex">
                <NuxtLink exact-active-class="activeLink"
                          class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200"
                          to="/admin/tickets">
                  <div class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z"
                          stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                          stroke-linejoin="round"/>
                      <path
                          d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
                          stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    </svg>
                    <span>تیکت ها</span>
                    <span
                        class="aspect-square mr-1 px-2 grid place-items-center font-light text-xs rounded-full bg-warning text-black"
                        v-if="pendingTickets > 0">{{ pendingTickets }}</span>
                  </div>
                </NuxtLink>
              </li>
              <li class="relative w-full flex">
                <NuxtLink to="/admin/visits" exact-active-class="activeLink"
                          class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200">
                  <div class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C10.2534 15.2141 8.83838 13.7991 8.83838 12.0531C8.83838 10.3061 10.2534 8.89111 11.9994 8.89111C13.7454 8.89111 15.1614 10.3061 15.1614 12.0531Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.998 19.3549C15.806 19.3549 19.289 16.6169 21.25 12.0529C19.289 7.48885 15.806 4.75085 11.998 4.75085H12.002C8.194 4.75085 4.711 7.48885 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>بازدید ها</span>
                  </div>
                </NuxtLink>
              </li>
              <li class="relative w-full flex">
                <NuxtLink to="/admin/modifications" exact-active-class="activeLink"
                          class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200">
                  <div class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M11.4925 2.78894H7.75349C4.67849 2.78894 2.75049 4.96594 2.75049 8.04794V16.3619C2.75049 19.4439 4.66949 21.6209 7.75349 21.6209H16.5775C19.6625 21.6209 21.5815 19.4439 21.5815 16.3619V12.3339"
                          stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.82812 10.9209L16.3011 3.44787C17.2321 2.51787 18.7411 2.51787 19.6721 3.44787L20.8891 4.66487C21.8201 5.59587 21.8201 7.10587 20.8891 8.03587L13.3801 15.5449C12.9731 15.9519 12.4211 16.1809 11.8451 16.1809H8.09912L8.19312 12.4009C8.20712 11.8449 8.43412 11.3149 8.82812 10.9209Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.1655 4.60242L19.7315 9.16842" stroke="currentColor" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>ویرایش ها</span>
                  </div>
                </NuxtLink>
              </li>
              <li class="relative w-full flex">
                <NuxtLink to="/admin/log" exact-active-class="activeLink"
                          class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200">
                  <div class="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.7161 16.2234H8.49609" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path d="M15.7161 12.0369H8.49609" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path d="M11.2511 7.86011H8.49609" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.9085 2.74976C15.9085 2.74976 8.23149 2.75376 8.21949 2.75376C5.45949 2.77076 3.75049 4.58676 3.75049 7.35676V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.35676C20.4155 4.57276 18.6925 2.74976 15.9085 2.74976Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>گزارش ها</span>
                  </div>
                </NuxtLink>
              </li>
            </ul>
            <hr>
            <NuxtLink to="/profile/personal-info"
                      class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200"
                      exact-active-class="activeLink">
              <div class="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.983 15.3457C8.11536 15.3457 4.8125 15.9305 4.8125 18.2724C4.8125 20.6143 8.0944 21.22 11.983 21.22C15.8506 21.22 19.1525 20.6343 19.1525 18.2933C19.1525 15.9524 15.8715 15.3457 11.983 15.3457Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.9829 12.0059C14.521 12.0059 16.5782 9.94779 16.5782 7.40969C16.5782 4.8716 14.521 2.81445 11.9829 2.81445C9.44484 2.81445 7.38675 4.8716 7.38675 7.40969C7.37817 9.93922 9.42198 11.9973 11.9506 12.0059H11.9829Z"
                        stroke="currentColor" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>اطلاعات حساب کاربری</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/profile" class="py-4 px-6 w-full hover:bg-[#F8F8F8] transition-colors duration-200"
                      exact-active-class="bg-brandOrange/15 text-brandOrange border-l-4 border-brandOrange [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange">
              <div class="flex items-center gap-4">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="25" height="25" fill="url(#pattern0_438_2587)" fill-opacity="0.5"/>
                  <defs>
                    <pattern id="pattern0_438_2587" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_438_2587" transform="scale(0.01)"/>
                    </pattern>
                    <image id="image0_438_2587" width="100" height="100"
                           xlink:href="data:image/png;base64,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"/>
                  </defs>
                </svg>
                <span>پنل کاربری</span>
              </div>
            </NuxtLink>
            <button class="py-4 px-6 w-full hover:bg-[#F8F8F8] hover:text-danger transition-colors duration-200"
                    @click="LogOut">
            <span class="flex items-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8144 12.0225H3.77344" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M12.8867 9.10645L15.8147 12.0224L12.8867 14.9384" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M8.50781 7.38946V6.45646C8.50781 4.42146 10.1568 2.77246 12.1928 2.77246H17.0768C19.1068 2.77246 20.7518 4.41746 20.7518 6.44746V17.5875C20.7518 19.6225 19.1018 21.2725 17.0668 21.2725H12.1818C10.1528 21.2725 8.50781 19.6265 8.50781 17.5975V16.6555"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>خروج از حساب</span>
            </span>
            </button>
          </div>
        </aside>
        <main class="flex-1 flex flex-col gap-5">
          <!--  User Avatar  -->
          <div class="bg-white rounded-xl border p-6 flex items-center justify-between">
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
            <input type="text" class="px-4 py-2 w-1/5 bg-[#FAFAFA] rounded-lg" placeholder="جستجو">
          </div>
          <div class="bg-white border rounded-xl p-6 pt-2">
            <slot></slot>
          </div>
        </main>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import {GetPendingCommentsCount} from "~/services/comment.service";
import {CloseTicket, GetPendingTicketsCount} from "~/services/ticket.service";
import {ToastType} from "~/composables/useSwal";

const route = useRoute();
const isSideMenuOpen = ref(false);
const isProductMenuOpen = ref(false);
const isUsersMenuOpen = ref(false);
const isOrdersMenuOpen = ref(false);
const isBlogMenuOpen = ref(false);
const isProfileMenuOpen = ref(false);
const isNotificationsMenuOpen = ref(false);
const pendingComments = ref(0);
const pendingTickets = ref(0);
const dark = ref(false);
const accountStore = useAccountStore();

onMounted(async () => {
  const result = await GetPendingCommentsCount();
  if (result.isSuccess) {
    pendingComments.value = result.data ?? 0;
  }
  const ticketsResult = await GetPendingTicketsCount();
  if (ticketsResult.isSuccess) {
    pendingTickets.value = ticketsResult.data ?? 0;
  }
})

const toggleSideMenu = () => isSideMenuOpen.value = !isSideMenuOpen.value;
const closeSideMenu = () => isSideMenuOpen.value = false;

const toggleProfileMenu = () => isProfileMenuOpen.value = !isProfileMenuOpen.value;
const closeProfileMenu = () => isProfileMenuOpen.value = false;
const toggleNotificationsMenu = () => isNotificationsMenuOpen.value = !isNotificationsMenuOpen.value;
const closeNotificationsMenu = () => isNotificationsMenuOpen.value = false;
const toggleTheme = () => dark.value = !dark.value;


const page = ref(route.path.split('/').length > 2 ? route.path.split('/')[2] : 'dashboard');

const toggleMenues = () => {
  switch (page.value) {
    case 'dashboard': {
      isUsersMenuOpen.value = false;
      isOrdersMenuOpen.value = false;
      isProductMenuOpen.value = false;
      isBlogMenuOpen.value = false;
    }
      break;
    case 'products': {
      isUsersMenuOpen.value = false;
      isOrdersMenuOpen.value = false;
      isProductMenuOpen.value = true;
      isBlogMenuOpen.value = false;
    }
      break;
    case 'users': {
      isUsersMenuOpen.value = true;
      isOrdersMenuOpen.value = false;
      isProductMenuOpen.value = false;
      isBlogMenuOpen.value = false;
    }
      break;
    case 'orders': {
      isUsersMenuOpen.value = false;
      isOrdersMenuOpen.value = true;
      isProductMenuOpen.value = false;
      isBlogMenuOpen.value = false;
    }
      break;
    case 'blog': {
      isUsersMenuOpen.value = false;
      isOrdersMenuOpen.value = false;
      isProductMenuOpen.value = false;
      isBlogMenuOpen.value = true;
    }
      break;
  }
}

toggleMenues();

const toast = useToast();
const authStore = useAuthStore();
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
</script>

<style scoped>
.activeLink {
  @apply border-r-4 border-[#FB7511] [&>div>svg]:fill-brandOrange/50 [&>div>svg]:text-brandOrange;
}
.activeSubLink{
  @apply pr-2 text-gray-800  before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-[#FB7511] before:rounded-l-lg;
}
</style>