
<template >
  <div>
    <div class="flex items-center">
      <div class="logo flex items-center space-x-2 space-x-reverse">
        <img src="~/assets/images/logo.png" alt="faraz saffron logo" class="w-52">
      </div>
      <ul class="links text-white flex items-center space-x-4 space-x-reverse mr-8">
        <li>
          <NuxtLink to="/" >خانه</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/market" >محصولات</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs" >مقالات</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/aboutUs" >درباره ما</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contactus" >تماس با ما</NuxtLink>
        </li>
      </ul>
      <div class="mr-auto flex flex-row-reverse items-center space-x-4">
        <div class="user flex items-center flex-col space-y-2 text-white">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.18 20.295C18.15 20.295 18.105 20.295 18.075 20.295C18.03 20.295 17.97 20.295 17.925 20.295C14.52 20.19 11.97 17.535 11.97 14.265C11.97 10.935 14.685 8.22 18.015 8.22C21.345 8.22 24.06 10.935 24.06 14.265C24.045 17.55 21.48 20.19 18.225 20.295C18.195 20.295 18.195 20.295 18.18 20.295ZM18 10.455C15.9 10.455 14.205 12.165 14.205 14.25C14.205 16.305 15.81 17.97 17.85 18.045C17.895 18.03 18.045 18.03 18.195 18.045C20.205 17.94 21.78 16.29 21.795 14.25C21.795 12.165 20.1 10.455 18 10.455Z" fill="currentColor"/>
            <path d="M18 34.125C13.965 34.125 10.11 32.625 7.125 29.895C6.855 29.655 6.735 29.295 6.765 28.95C6.96 27.165 8.07 25.5 9.915 24.27C14.385 21.3 21.63 21.3 26.085 24.27C27.93 25.515 29.04 27.165 29.235 28.95C29.28 29.31 29.145 29.655 28.875 29.895C25.89 32.625 22.035 34.125 18 34.125ZM9.12 28.65C11.61 30.735 14.745 31.875 18 31.875C21.255 31.875 24.39 30.735 26.88 28.65C26.61 27.735 25.89 26.85 24.825 26.13C21.135 23.67 14.88 23.67 11.16 26.13C10.095 26.85 9.39 27.735 9.12 28.65Z" fill="currentColor"/>
            <path d="M18 34.125C9.105 34.125 1.875 26.895 1.875 18C1.875 9.105 9.105 1.875 18 1.875C26.895 1.875 34.125 9.105 34.125 18C34.125 26.895 26.895 34.125 18 34.125ZM18 4.125C10.35 4.125 4.125 10.35 4.125 18C4.125 25.65 10.35 31.875 18 31.875C25.65 31.875 31.875 25.65 31.875 18C31.875 10.35 25.65 4.125 18 4.125Z" fill="currentColor"/>
          </svg>

          <nuxt-link to="auth">
            ورود / ثبت نام
        </nuxt-link>
        </div>
        <div class="user flex items-center flex-col space-y-2 text-white">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H5.61001C7.23001 3 8.505 4.395 8.37 6L7.125 20.94C6.915 23.385 8.84999 25.485 11.31 25.485H27.285C29.445 25.485 31.335 23.715 31.5 21.57L32.31 10.32C32.49 7.83001 30.6 5.80499 28.095 5.80499H8.73001" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.375 33C25.4105 33 26.25 32.1605 26.25 31.125C26.25 30.0895 25.4105 29.25 24.375 29.25C23.3395 29.25 22.5 30.0895 22.5 31.125C22.5 32.1605 23.3395 33 24.375 33Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.375 33C13.4105 33 14.25 32.1605 14.25 31.125C14.25 30.0895 13.4105 29.25 12.375 29.25C11.3395 29.25 10.5 30.0895 10.5 31.125C10.5 32.1605 11.3395 33 12.375 33Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 12H31.5" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <NuxtLink to="cart">
            سبد خرید
          </NuxtLink>
        </div>
        <form class="search relative flex items-center">
          <input type="search" class="w-64 rounded-lg -ml-4 py-2 px-4 outline-none border-none" placeholder="دنبال چه محصولی هستید؟">
          <button class="bg-danger p-3 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 20.75C5.62 20.75 1.25 16.38 1.25 11C1.25 5.62 5.62 1.25 11 1.25C16.38 1.25 20.75 5.62 20.75 11C20.75 16.38 16.38 20.75 11 20.75ZM11 2.75C6.45 2.75 2.75 6.45 2.75 11C2.75 15.55 6.45 19.25 11 19.25C15.55 19.25 19.25 15.55 19.25 11C19.25 6.45 15.55 2.75 11 2.75Z" fill="white"/>
              <path d="M20.1601 22.79C20.0801 22.79 20.0001 22.78 19.9301 22.77C19.4601 22.71 18.6101 22.39 18.1301 20.96C17.8801 20.21 17.9701 19.46 18.3801 18.89C18.7901 18.32 19.4801 18 20.2701 18C21.2901 18 22.0901 18.39 22.4501 19.08C22.8101 19.77 22.7101 20.65 22.1401 21.5C21.4301 22.57 20.6601 22.79 20.1601 22.79ZM19.5601 20.49C19.7301 21.01 19.9701 21.27 20.1301 21.29C20.2901 21.31 20.5901 21.12 20.9001 20.67C21.1901 20.24 21.2101 19.93 21.1401 19.79C21.0701 19.65 20.7901 19.5 20.2701 19.5C19.9601 19.5 19.7301 19.6 19.6001 19.77C19.4801 19.94 19.4601 20.2 19.5601 20.49Z" fill="white"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>