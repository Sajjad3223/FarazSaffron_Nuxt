<template>
  <div>
    <div>
      <div class="flex items-center justify-between px-2">
        <div class="text-2xl font-bold flex items-center gap-2">
          <NuxtLink to="/profile">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
          <strong>پیفام ها</strong>
        </div>
        <base-f-button color="primary" bordered >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.70711 11.2929C7.31658 10.9024 6.68342 10.9024 6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L7.70711 11.2929ZM11.9497 16.9497L11.2426 17.6569C11.6332 18.0474 12.2663 18.0474 12.6568 17.6569L11.9497 16.9497ZM23.2639 7.05026C23.6544 6.65975 23.6544 6.02658 23.2639 5.63605C22.8734 5.24552 22.2402 5.2455 21.8497 5.63602L23.2639 7.05026ZM2.75691 11.3432C2.36639 10.9527 1.73322 10.9527 1.3427 11.3432C0.952174 11.7337 0.952174 12.3669 1.3427 12.7574L2.75691 11.3432ZM6.29245 17.7071C6.68297 18.0977 7.31613 18.0977 7.70666 17.7071C8.09718 17.3166 8.09718 16.6835 7.70666 16.2929L6.29245 17.7071ZM18.3131 7.10054C18.7037 6.71002 18.7037 6.07685 18.3131 5.68633C17.9226 5.2958 17.2895 5.2958 16.8989 5.68633L18.3131 7.10054ZM11.5956 10.9896C11.2051 11.3802 11.2051 12.0133 11.5956 12.4038C11.9862 12.7944 12.6193 12.7944 13.0098 12.4038L11.5956 10.9896ZM6.29289 12.7071L11.2426 17.6569L12.6569 16.2426L7.70711 11.2929L6.29289 12.7071ZM12.6568 17.6569L23.2639 7.05026L21.8497 5.63602L11.2427 16.2426L12.6568 17.6569ZM1.3427 12.7574L6.29245 17.7071L7.70666 16.2929L2.75691 11.3432L1.3427 12.7574ZM16.8989 5.68633L11.5956 10.9896L13.0098 12.4038L18.3131 7.10054L16.8989 5.68633Z" fill="currentColor"/>
          </svg>
          <span>
                همه را خواندم
          </span>
        </base-f-button>
      </div>

      <hr class="my-3 border-2">
    </div>
    <ul class="flex flex-col space-y-4">
      <li class="flex flex-col space-y-3 p-4 rounded-lg bg-bgWhite drop-shadow border-r-primary opacity-60 hover:opacity-100 transition duration-200 first:opacity-100 first:border-r-4 cursor-pointer" v-for="i in 3" :key="i" @click="showNotifModal = true">
        <strong>عنوان پیغام</strong>
        <hr>
        <p class="mt-4 font-estedad font-light text-xs lg:text-sm text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارها.
        </p>
      </li>
    </ul>
    <base-f-modal v-model="showNotifModal" title="نمایش پیغام">
      <div class="flex flex-col p-2 space-y-3">
        <strong class="text-lg">عنوان پیغام</strong>
        <p class="mt-4 font-estedad font-light text-sm text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارها.
        </p>
        <img src="~/assets/images/blogBanner.jpg" alt="img" class="rounded-lg">
        <p class="mt-4 font-estedad font-light text-sm text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارها.
        </p>
        <base-f-button bordered color="primary" custom-class="w-full md:w-2/3 lg:w-1/3 mr-auto">
          <div class="flex items-center space-x-2 space-x-reverse text-primary">
            <span>تغییر به خوانده شده</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.70711 11.7782C8.31658 11.3877 7.68342 11.3877 7.29289 11.7782C6.90237 12.1688 6.90237 12.8019 7.29289 13.1925L8.70711 11.7782ZM12.2426 16.728L11.5355 17.4351C11.7231 17.6226 11.9774 17.728 12.2427 17.728C12.5079 17.728 12.7622 17.6226 12.9498 17.4351L12.2426 16.728ZM21.4346 8.94976C21.8251 8.55923 21.8251 7.92606 21.4346 7.53555C21.044 7.14504 20.4109 7.14505 20.0203 7.53559L21.4346 8.94976ZM3.70711 11.7782C3.31658 11.3877 2.68342 11.3877 2.29289 11.7782C1.90237 12.1688 1.90237 12.8019 2.29289 13.1925L3.70711 11.7782ZM6.53553 17.4351C6.92606 17.8256 7.55922 17.8256 7.94975 17.4351C8.34027 17.0446 8.34027 16.4114 7.94975 16.0209L6.53553 17.4351ZM16.4382 8.94656C16.827 8.55426 16.8241 7.92111 16.4318 7.53236C16.0395 7.14362 15.4064 7.1465 15.0176 7.53879L16.4382 8.94656ZM11.7897 10.7962C11.4009 11.1885 11.4038 11.8217 11.7961 12.2104C12.1884 12.5991 12.8216 12.5963 13.2103 12.204L11.7897 10.7962ZM7.29289 13.1925L11.5355 17.4351L12.9497 16.0209L8.70711 11.7782L7.29289 13.1925ZM12.9498 17.4351L21.4346 8.94976L20.0203 7.53559L11.5355 16.0209L12.9498 17.4351ZM2.29289 13.1925L6.53553 17.4351L7.94975 16.0209L3.70711 11.7782L2.29289 13.1925ZM15.0176 7.53879L11.7897 10.7962L13.2103 12.204L16.4382 8.94656L15.0176 7.53879Z" fill="currentColor"/>
            </svg>
          </div>
        </base-f-button>
      </div>
    </base-f-modal>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout:'profile'
})

const showNotifModal = ref(false);
</script>