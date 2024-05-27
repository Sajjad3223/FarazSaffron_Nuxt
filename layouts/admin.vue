<template>
  <div
      class="flex h-screen bg-gray-50 dark:bg-gray-900"
      :class="{ 'overflow-hidden': isSideMenuOpen}"
  >
    <!-- Desktop sidebar -->
    <aside
        class="z-20 hidden w-64 overflow-y-auto bg-currentColor dark:bg-gray-800 md:block flex-shrink-0"
    >
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <NuxtLink
            class="mr-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            to="/" title="مشاهده وبسایت"
        >
          GP Saffron
        </NuxtLink>
        <ul class="mt-6">
          <li class="relative px-6 py-3">
            <NuxtLink exact-active-class="text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-2 before:bg-purple-600 before:rounded-l-lg"
                      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/admin">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.07 2.82L3.14002 8.37C2.36002 8.99 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99 20.86 8.37L13.93 2.83C12.86 1.97 11.13 1.97 10.07 2.82Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="mr-4">داشبورد</span>
            </NuxtLink>
          </li>
        </ul>
        <ul>
          <li class="relative px-6 py-3">
            <button
                class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                @click="isProductMenuOpen = !isProductMenuOpen"
                @keydown.esc="isProductMenuOpen = false"
                aria-haspopup="true"
            >
                <span class="inline-flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.17004 7.44L12 12.55L20.77 7.46997" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 21.61V12.54" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.92999 2.48L4.59 5.45003C3.38 6.12003 2.39001 7.80001 2.39001 9.18001V14.83C2.39001 16.21 3.38 17.89 4.59 18.56L9.92999 21.53C11.07 22.16 12.94 22.16 14.08 21.53L19.42 18.56C20.63 17.89 21.62 16.21 21.62 14.83V9.18001C21.62 7.80001 20.63 6.12003 19.42 5.45003L14.08 2.48C12.93 1.84 11.07 1.84 9.92999 2.48Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 13.24V9.58002L7.51001 4.09998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="mr-4">محصولات</span>
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
                    class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100 dark:text-gray-400 dark:bg-gray-900"
                    aria-label="submenu"
                >
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/products">
                      همه محصولات
                    </NuxtLink>
                  </li>
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/products/discounts">
                      تخفیف ها
                    </NuxtLink>
                  </li>
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/products/images">
                      تصاویر
                    </NuxtLink>
                  </li>
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/products/specifications">
                      ویژگی ها
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </Transition>
          </li>
          <li class="relative px-6 py-3">
            <button
                class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                @click="isUsersMenuOpen = !isUsersMenuOpen"
                @keydown.esc="isUsersMenuOpen = false"
                aria-haspopup="true"
            >
                <span class="inline-flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.9702 14.44C18.3402 14.67 19.8502 14.43 20.9102 13.72C22.3202 12.78 22.3202 11.24 20.9102 10.3C19.8402 9.59004 18.3102 9.35003 16.9402 9.59003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="mr-4">کاربران</span>
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
                    class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100 dark:text-gray-400 dark:bg-gray-900"
                    aria-label="submenu"
                >
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/users">
                      همه کاربران
                    </NuxtLink>
                  </li>
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/users/roles">
                      لقب ها
                    </NuxtLink>
                  </li>
                  <li
                      class="relative  px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/users/comments">
                      <span>نظرات</span>
                      <span class="aspect-square mr-1 px-2 text-xs rounded-full bg-warning text-black">{{ pendingComments }}</span>
                    </NuxtLink>
                  </li>
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/users/wallets">
                      تراکنش ها
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </Transition>
          </li>
          <li class="relative px-6 py-3">
            <button
                class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                @click="isOrdersMenuOpen = !isOrdersMenuOpen"
                @keydown.esc="isOrdersMenuOpen = false"
                aria-haspopup="true"
            >
                <span class="inline-flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.81 2L5.19 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.19 2L18.81 5.63" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 7.85001C2 6.00001 2.99 5.85001 4.22 5.85001H19.78C21.01 5.85001 22 6.00001 22 7.85001C22 10 21.01 9.85001 19.78 9.85001H4.22C2.99 9.85001 2 10 2 7.85001Z" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M9.76001 14V17.55" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M14.36 14V17.55" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <span class="mr-4">سفارشات</span>
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
                    class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100 dark:text-gray-400 dark:bg-gray-900"
                    aria-label="submenu"
                >
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/orders">
                      همه سفارشات
                    </NuxtLink>
                  </li>
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/orders/inProgress">
                      سفارشات در انتظار
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </Transition>
          </li>
          <li class="relative px-6 py-3">
            <button
                class="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                @click="isBlogMenuOpen = !isBlogMenuOpen"
                @keydown.esc="isBlogMenuOpen = false"
                aria-haspopup="true"
            >
                <span class="inline-flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.91 4.15002C15.58 6.54002 17.45 8.41002 19.85 9.09002" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="mr-4">وبلاگ</span>
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
                    class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-100 dark:text-gray-400 dark:bg-gray-900"
                    aria-label="submenu"
                >
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/blog">
                      همه پست ها
                    </NuxtLink>
                  </li>
                  <li
                      class="relative px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <NuxtLink exact-active-class="pr-2 text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-purple-600 before:rounded-l-lg" to="/admin/blog/drafts">
                      پیش نویس ها
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </Transition>
          </li>
          <li class="relative px-6 py-3">
            <NuxtLink exact-active-class="text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-2 before:bg-purple-600 before:rounded-l-lg"
                      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/admin/categories">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5 17.5H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M17.5 20.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="mr-4">دسته بندی ها</span>
            </NuxtLink>
          </li>
          <li class="relative px-6 py-3">
            <NuxtLink exact-active-class="text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-2 before:bg-purple-600 before:rounded-l-lg"
                      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/admin/catalogs">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5 17.5H20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M17.5 20.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="mr-4">کاتالوگ ها</span>
            </NuxtLink>
          </li>
          <li class="relative px-6 py-3">
            <NuxtLink exact-active-class="text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-2 before:bg-purple-600 before:rounded-l-lg"
                      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/admin/contactUs">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 9C22 5.13 18.87 2 15 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="mr-4">تماس با ما</span>
            </NuxtLink>
          </li>
          <li class="relative px-6 py-3">
            <NuxtLink exact-active-class="text-gray-800 dark:text-gray-100 before:absolute before:inset-y-0 before:right-0 before:w-2 before:bg-purple-600 before:rounded-l-lg"
                      class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200" to="/admin/tickets">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="mr-4">تیکت ها</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </aside>
    <!-- Mobile sidebar -->
    <!-- Backdrop -->
    <div
        v-show="isSideMenuOpen"
        class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
    ></div>
    <aside
        class="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-currentColor dark:bg-gray-800 md:hidden"
        v-show="isSideMenuOpen"
        @keydown.esc="closeSideMenu"
    >
      <div class="py-4 text-gray-500 dark:text-gray-400">
        <a
            class="mr-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            href="#"
        >
          Windmill
        </a>
        <ul class="mt-6">
          <li class="relative px-6 py-3">
            <!-- Active items have the snippet below -->
            <!-- <span
              class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span> -->

            <!-- Add this classes to an active anchor (a tag) -->
            <!-- text-gray-800 dark:text-gray-100 -->
            <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="../index.html"
            >
              <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span class="mr-4">Dashboard</span>
            </a>
          </li>
        </ul>
        <ul>
          <li class="relative px-6 py-3">
            <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="../forms.html"
            >
              <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
              <span class="mr-4">Forms</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="../cards.html"
            >
              <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
              <span class="mr-4">Cards</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="../charts.html"
            >
              <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                ></path>
                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </svg>
              <span class="mr-4">Charts</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="../buttons.html"
            >
              <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                ></path>
              </svg>
              <span class="mr-4">Buttons</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="../modals.html"
            >
              <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <span class="mr-4">Modals</span>
            </a>
          </li>
          <li class="relative px-6 py-3">
            <a
                class="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                href="../tables.html"
            >
              <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
              <span class="mr-4">Tables</span>
            </a>
          </li>
        </ul>
        <div class="px-6 my-6">
          <button
              class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-currentColor transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          >
            Create account
            <span class="mr-2" aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </aside>
    <div class="flex flex-col flex-1">
      <header class="z-10 py-4 bg-currentColor shadow-md dark:bg-gray-800">
        <div
            class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300"
        >
          <!-- Mobile hamburger -->
          <button
              class="p-1 -mr-1 ml-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
              @click="toggleSideMenu"
              aria-label="Menu"
          >
            <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
              <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <!-- Search input -->
          <div class="flex justify-center flex-1 lg:mr-32">
            <div
                class="relative w-full max-w-xl mr-6 focus-within:text-purple-500"
            >
              <div class="absolute inset-y-0 flex items-center pr-2">
                <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                  class="w-full pr-8 pl-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-currentColor focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  placeholder="جستجو"
                  aria-label="Search"
              />
            </div>
          </div>
          <ul class="flex items-center flex-shrink-0 space-x-reverse space-x-6">
            <!-- Theme toggler -->
            <li class="flex">
              <button
                  class="rounded-md focus:outline-none focus:shadow-outline-purple"
                  @click="toggleTheme"
                  aria-label="Toggle color mode"
              >
                <template v-if="!dark">
                  <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                  >
                    <path
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    ></path>
                  </svg>
                </template>
                <template v-if="dark">
                  <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"
                    ></path>
                  </svg>
                </template>
              </button>
            </li>
            <!-- Notifications menu -->
            <li class="relative" v-click-outside="closeNotificationsMenu">
              <button
                  class="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                  @click="toggleNotificationsMenu"
                  @keydown.esc="closeNotificationsMenu"
                  aria-label="Notifications"
                  aria-haspopup="true"
              >
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                  <path
                      d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                  ></path>
                </svg>
                <!-- Notification badge -->
                <span
                    aria-hidden="true"
                    class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-currentColor rounded-full dark:border-gray-800"
                ></span>
              </button>
              <Transition enter-active-class="transition ease-in-out duration-150"
                          enter-from-class="-translate-y-4 opacity-0" enter-to-class="translate-y-0 opacity-100"
                          leave-active-class="transition ease-in-out duration-150"
                          leave-to-class="-translate-y-4 opacity-0" leave-from-class="translate-y-0 opacity-100">
                <template v-if="isNotificationsMenuOpen">
                  <ul
                      @keydown.esc="closeNotificationsMenu"
                      class="absolute left-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-currentColor border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
                      aria-label="submenu"
                  >
                    <li class="flex">
                      <a
                          class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                          href="#"
                      >
                        <span>پیام ها</span>
                        <span
                            class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                        >
                          13
                        </span>
                      </a>
                    </li>
                    <li class="flex">
                      <a
                          class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                          href="#"
                      >
                        <span>فروش ها</span>
                        <span
                            class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600"
                        >
                          2
                        </span>
                      </a>
                    </li>
                    <li class="flex">
                      <a
                          class="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                          href="#"
                      >
                        <span>اخطار ها</span>
                      </a>
                    </li>
                  </ul>
                </template>
              </Transition>
            </li>
            <!-- Profile menu -->
            <li class="relative" v-click-outside="closeProfileMenu">
              <button
                  class="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                  @click="toggleProfileMenu"
                  @keydown.esc="closeProfileMenu"
                  aria-label="Account"
                  aria-haspopup="true"
              >
                <img
                    class="object-cover w-8 h-8 rounded-full"
                    src="~/assets/images/avatar.png"
                    alt=""
                    aria-hidden="true"
                />
              </button>
              <Transition enter-active-class="transition ease-in-out duration-150"
                          enter-from-class="-translate-y-4 opacity-0" enter-to-class="translate-y-0 opacity-100"
                          leave-active-class="transition ease-in-out duration-150"
                          leave-to-class="-translate-y-4 opacity-0" leave-from-class="translate-y-0 opacity-100">
                <template v-if="isProfileMenuOpen">
                  <ul
                      @keydown.esc="closeProfileMenu"
                      class="absolute left-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-currentColor  border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                      aria-label="submenu"
                  >
                    <li class="flex">
                      <a
                          class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                          href="#"
                      >
                        <svg
                            class="w-4 h-4 ml-3"
                            aria-hidden="true"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          ></path>
                        </svg>
                        <span>پروفایل</span>
                      </a>
                    </li>
                    <li class="flex">
                      <a
                          class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                          href="#"
                      >
                        <svg
                            class="w-4 h-4 ml-3"
                            aria-hidden="true"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          ></path>
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>تنظیمات</span>
                      </a>
                    </li>
                    <li class="flex">
                      <a
                          class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                          href="#"
                      >
                        <svg
                            class="w-4 h-4 ml-3"
                            aria-hidden="true"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                          <path
                              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          ></path>
                        </svg>
                        <span>خروج</span>
                      </a>
                    </li>
                  </ul>
                </template>
              </Transition>
            </li>
          </ul>
        </div>
      </header>
      <main class="h-full py-12 overflow-y-auto">
        <div class="container px-6 mx-auto grid">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">

import {GetPendingCommentsCount} from "~/services/comment.service";

const route = useRoute();
const isSideMenuOpen = ref(false);
const isProductMenuOpen = ref(false);
const isUsersMenuOpen = ref(false);
const isOrdersMenuOpen = ref(false);
const isBlogMenuOpen = ref(false);
const isProfileMenuOpen = ref(false);
const isNotificationsMenuOpen = ref(false);
const pendingComments = ref(0);
const dark = ref(false);

onMounted(async ()=>{
  const result = await GetPendingCommentsCount();
  if(result.isSuccess){
    pendingComments.value = result.data ?? 0;
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

const toggleMenues = ()=>{
  switch (page.value) {
    case 'dashboard':{
      isUsersMenuOpen.value = false;
      isOrdersMenuOpen.value = false;
      isProductMenuOpen.value = false;
      isBlogMenuOpen.value = false;
    }break;
    case 'products':{
      isUsersMenuOpen.value = false;
      isOrdersMenuOpen.value = false;
      isProductMenuOpen.value = true;
      isBlogMenuOpen.value = false;
    }break;
    case 'users':{
      isUsersMenuOpen.value = true;
      isOrdersMenuOpen.value = false;
      isProductMenuOpen.value = false;
      isBlogMenuOpen.value = false;
    }break;
    case 'orders':{
      isUsersMenuOpen.value = false;
      isOrdersMenuOpen.value = true;
      isProductMenuOpen.value = false;
      isBlogMenuOpen.value = false;
    }break;
    case 'blog':{
      isUsersMenuOpen.value = false;
      isOrdersMenuOpen.value = false;
      isProductMenuOpen.value = false;
      isBlogMenuOpen.value = true;
    }break;
  }
}

toggleMenues();
</script>