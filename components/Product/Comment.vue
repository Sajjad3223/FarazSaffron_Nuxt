<script setup lang="ts">
import type {CommentDto} from "~/models/comment/commentQueries";

const props = defineProps<{
  comment:CommentDto
}>()

const showOptions = ref(false);

</script>

<template>
  <li class="py-4 mt-4 border-b last:border-none flex flex-col" >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-6">
        <span class="text-sm opacity-70">{{ comment.sender.fullName ?? 'کاربر' }}</span>
        <span class="text-[#3EBE4B] bg-[#3EBE4B]/10 px-2 py-1 text-sm rounded-lg" v-if="comment.isConsumer">خریدار</span>
        <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-[200%] w-6">
          <circle cx="1" cy="1" r="1" fill="#DFDFDF"/>
        </svg>
        <small class="text-[#B3B3B3]">{{ comment.persianTime }}</small>
      </div>
      <!--   Options   -->
      <div class="relative">
        <button @click="showOptions = !showOptions" class="w-8 h-8 grid place-items-center rounded-lg hover:shadow-md transition-shadow duration-200">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-150">
            <g opacity="0.5" clip-path="url(#clip0_602_4442)">
              <path d="M5.0013 1.25C4.54297 1.25 4.16797 1.625 4.16797 2.08333C4.16797 2.54167 4.54297 2.91667 5.0013 2.91667C5.45964 2.91667 5.83464 2.54167 5.83464 2.08333C5.83464 1.625 5.45964 1.25 5.0013 1.25ZM5.0013 7.08333C4.54297 7.08333 4.16797 7.45833 4.16797 7.91667C4.16797 8.375 4.54297 8.75 5.0013 8.75C5.45964 8.75 5.83464 8.375 5.83464 7.91667C5.83464 7.45833 5.45964 7.08333 5.0013 7.08333ZM5.0013 4.16667C4.54297 4.16667 4.16797 4.54167 4.16797 5C4.16797 5.45833 4.54297 5.83333 5.0013 5.83333C5.45964 5.83333 5.83464 5.45833 5.83464 5C5.83464 4.54167 5.45964 4.16667 5.0013 4.16667Z" fill="#09121F"/>
            </g>
            <defs>
              <clipPath id="clip0_602_4442">
                <rect width="10" height="10" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
        <Transition name="slide-fade">
          <div v-if="showOptions" class="border p-2 min-w-28 rounded-lg left-0 top-10 absolute shadow-lg flex flex-col space-y-1">
            <button class="text-xs w-full text-right p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200">ویرایش</button>
            <button class="text-xs w-full text-right p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200">حذف</button>
            <hr>
            <button class="text-xs w-full text-right p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200">گزارش</button>
          </div>
        </Transition>
      </div>
    </div>
    <!--   Stars   -->
    <ul class="flex items-center gap-0.5 mt-4">
      <li v-for="i in comment.score" :key="i" >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4936 2.71381C11.7002 2.29527 12.297 2.29527 12.5036 2.71381L15.1776 8.13194C15.2596 8.29814 15.4182 8.41334 15.6016 8.43999L21.5809 9.30883C22.0427 9.37595 22.2272 9.94357 21.893 10.2694L17.5663 14.4868C17.4336 14.6162 17.373 14.8026 17.4044 14.9852L18.4257 20.9403C18.5046 21.4004 18.0218 21.7512 17.6087 21.534L12.2607 18.7224C12.0966 18.6361 11.9006 18.6361 11.7366 18.7224L6.38855 21.534C5.97542 21.7512 5.49257 21.4004 5.57147 20.9403L6.59285 14.9852C6.62419 14.8026 6.56362 14.6162 6.4309 14.4868L2.10427 10.2694C1.77004 9.94357 1.95447 9.37595 2.41636 9.30883L8.39562 8.43999C8.57904 8.41334 8.7376 8.29814 8.81962 8.13194L11.4936 2.71381Z" fill="#F9A824"/>
        </svg>
      </li>
      <li v-for="i in 5 - comment.score" :key="i" >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-500">
          <path d="M11.4936 2.71381C11.7002 2.29527 12.297 2.29527 12.5036 2.71381L15.1776 8.13194C15.2596 8.29814 15.4182 8.41334 15.6016 8.43999L21.5809 9.30883C22.0427 9.37595 22.2272 9.94357 21.893 10.2694L17.5663 14.4868C17.4336 14.6162 17.373 14.8026 17.4044 14.9852L18.4257 20.9403C18.5046 21.4004 18.0218 21.7512 17.6087 21.534L12.2607 18.7224C12.0966 18.6361 11.9006 18.6361 11.7366 18.7224L6.38855 21.534C5.97542 21.7512 5.49257 21.4004 5.57147 20.9403L6.59285 14.9852C6.62419 14.8026 6.56362 14.6162 6.4309 14.4868L2.10427 10.2694C1.77004 9.94357 1.95447 9.37595 2.41636 9.30883L8.39562 8.43999C8.57904 8.41334 8.7376 8.29814 8.81962 8.13194L11.4936 2.71381Z" fill="currentColor"/>
        </svg>
      </li>
    </ul>
    <!--   Recommended | Not   -->
    <div class="flex items-center gap-1 mt-2" v-if="comment.score >= 3">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 scale-150">
        <path d="M7 5H9.382C9.55243 5.00001 9.72004 5.04357 9.8689 5.12656C10.0178 5.20955 10.1429 5.32921 10.2326 5.47418C10.3222 5.61915 10.3733 5.78462 10.3809 5.95488C10.3886 6.12514 10.3527 6.29454 10.2765 6.447L8.5265 9.947C8.44343 10.1132 8.31569 10.253 8.1576 10.3507C7.99951 10.4484 7.81733 10.5001 7.6315 10.5H5.623C5.5415 10.5 5.46 10.49 5.3805 10.47L3.5 10M7 5V2.5C7 2.23478 6.89464 1.98043 6.70711 1.79289C6.51957 1.60536 6.26522 1.5 6 1.5H5.9525C5.7025 1.5 5.5 1.7025 5.5 1.9525C5.5 2.3095 5.3945 2.6585 5.196 2.9555L3.5 5.5V10M7 5H6M3.5 10H2.5C2.23478 10 1.98043 9.89464 1.79289 9.70711C1.60536 9.51957 1.5 9.26522 1.5 9V6C1.5 5.73478 1.60536 5.48043 1.79289 5.29289C1.98043 5.10536 2.23478 5 2.5 5H3.75" stroke="#66AD55" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="text-[#66AD55] text-sm">پیشنهاد می‌کنم</span>
    </div>
    <div class="flex items-center text-danger gap-1 mt-2" v-else>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 scale-150 rotate-180">
        <path d="M7 5H9.382C9.55243 5.00001 9.72004 5.04357 9.8689 5.12656C10.0178 5.20955 10.1429 5.32921 10.2326 5.47418C10.3222 5.61915 10.3733 5.78462 10.3809 5.95488C10.3886 6.12514 10.3527 6.29454 10.2765 6.447L8.5265 9.947C8.44343 10.1132 8.31569 10.253 8.1576 10.3507C7.99951 10.4484 7.81733 10.5001 7.6315 10.5H5.623C5.5415 10.5 5.46 10.49 5.3805 10.47L3.5 10M7 5V2.5C7 2.23478 6.89464 1.98043 6.70711 1.79289C6.51957 1.60536 6.26522 1.5 6 1.5H5.9525C5.7025 1.5 5.5 1.7025 5.5 1.9525C5.5 2.3095 5.3945 2.6585 5.196 2.9555L3.5 5.5V10M7 5H6M3.5 10H2.5C2.23478 10 1.98043 9.89464 1.79289 9.70711C1.60536 9.51957 1.5 9.26522 1.5 9V6C1.5 5.73478 1.60536 5.48043 1.79289 5.29289C1.98043 5.10536 2.23478 5 2.5 5H3.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="text-current text-sm">پیشنهاد نمی‌کنم</span>
    </div>
    <!--   Comment Text   -->
    <p class="mt-8 text-lg">
      {{ comment.text }}
    </p>
    <!--   Reaction   -->
    <div class="flex items-center gap-2 mr-auto">
      <button class="px-2 py-1 rounded-lg hover:shadow-md transition-shadow duration-200 flex gap-1 items-center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 scale-150">
          <path d="M7 5H9.382C9.55243 5.00001 9.72004 5.04357 9.8689 5.12656C10.0178 5.20955 10.1429 5.32921 10.2326 5.47418C10.3222 5.61915 10.3733 5.78462 10.3809 5.95488C10.3886 6.12514 10.3527 6.29454 10.2765 6.447L8.5265 9.947C8.44343 10.1132 8.31569 10.253 8.1576 10.3507C7.99951 10.4484 7.81733 10.5001 7.6315 10.5H5.623C5.5415 10.5 5.46 10.49 5.3805 10.47L3.5 10M7 5V2.5C7 2.23478 6.89464 1.98043 6.70711 1.79289C6.51957 1.60536 6.26522 1.5 6 1.5H5.9525C5.7025 1.5 5.5 1.7025 5.5 1.9525C5.5 2.3095 5.3945 2.6585 5.196 2.9555L3.5 5.5V10M7 5H6M3.5 10H2.5C2.23478 10 1.98043 9.89464 1.79289 9.70711C1.60536 9.51957 1.5 9.26522 1.5 9V6C1.5 5.73478 1.60536 5.48043 1.79289 5.29289C1.98043 5.10536 2.23478 5 2.5 5H3.75" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{ comment.likesCount }}</span>
      </button>
      <button class="px-2 py-1 rounded-lg hover:shadow-md transition-shadow duration-200 flex gap-1 items-center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 scale-150">
          <path d="M5 7H2.618C2.44757 6.99999 2.27996 6.95643 2.1311 6.87344C1.98224 6.79045 1.85705 6.67079 1.76744 6.52582C1.67782 6.38085 1.62674 6.21538 1.61905 6.04512C1.61136 5.87486 1.64732 5.70546 1.7235 5.553L3.4735 2.053C3.55657 1.88677 3.68431 1.74697 3.8424 1.64929C4.00049 1.55161 4.18267 1.49991 4.3685 1.5H6.377C6.4585 1.5 6.54 1.51 6.6195 1.53L8.5 2M5 7V9.5C5 9.76522 5.10536 10.0196 5.29289 10.2071C5.48043 10.3946 5.73478 10.5 6 10.5H6.0475C6.2975 10.5 6.5 10.2975 6.5 10.0475C6.5 9.6905 6.6055 9.3415 6.804 9.0445L8.5 6.5L8.5 2M5 7L6 7M8.5 2H9.5C9.76522 2 10.0196 2.10536 10.2071 2.29289C10.3946 2.48043 10.5 2.73478 10.5 3L10.5 6C10.5 6.26522 10.3946 6.51957 10.2071 6.70711C10.0196 6.89464 9.76522 7 9.5 7H8.25" stroke="#9D9D9D" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{ comment.dislikesCount }}</span>
      </button>
    </div>
  </li>
</template>

<style scoped>

</style>