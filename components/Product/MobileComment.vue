<script setup lang="ts">
import {type CommentDto, ECommentStatus} from "~/models/comment/commentQueries";

const props = defineProps<{
  comment:CommentDto
}>();
</script>

<template>
  <div class="p-4 border rounded-xl">
    <div class="flex justify-between items-start w-full">
      <div class="flex items-center gap-1">
        <img src="~/assets/images/avatar.png" alt="avatar" class="w-10 rounded-full">
        <div class="flex flex-col items-start">
          <strong>{{ comment.sender.fullName }}</strong>
          <span class="text-xs font-light">کاربر</span>
        </div>
      </div>
      <span class="px-3 rounded-full bg-[#3EBE4B]/10 text-[#3EBE4B] text-xs" v-if="comment.isConsumer">
                           خریدار
                         </span>
    </div>
    <!--   Stars   -->
    <ul class="flex items-center gap-0.5 mt-4 origin-right scale-75">
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
    <div class="flex items-center gap-1 mt-2 origin-right scale-75" v-if="comment.score >= 3">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 scale-150">
        <path d="M7 5H9.382C9.55243 5.00001 9.72004 5.04357 9.8689 5.12656C10.0178 5.20955 10.1429 5.32921 10.2326 5.47418C10.3222 5.61915 10.3733 5.78462 10.3809 5.95488C10.3886 6.12514 10.3527 6.29454 10.2765 6.447L8.5265 9.947C8.44343 10.1132 8.31569 10.253 8.1576 10.3507C7.99951 10.4484 7.81733 10.5001 7.6315 10.5H5.623C5.5415 10.5 5.46 10.49 5.3805 10.47L3.5 10M7 5V2.5C7 2.23478 6.89464 1.98043 6.70711 1.79289C6.51957 1.60536 6.26522 1.5 6 1.5H5.9525C5.7025 1.5 5.5 1.7025 5.5 1.9525C5.5 2.3095 5.3945 2.6585 5.196 2.9555L3.5 5.5V10M7 5H6M3.5 10H2.5C2.23478 10 1.98043 9.89464 1.79289 9.70711C1.60536 9.51957 1.5 9.26522 1.5 9V6C1.5 5.73478 1.60536 5.48043 1.79289 5.29289C1.98043 5.10536 2.23478 5 2.5 5H3.75" stroke="#66AD55" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="text-[#66AD55] text-sm">پیشنهاد می‌کنم</span>
    </div>
    <div class="flex items-center text-danger gap-1 mt-2 origin-right scale-75" v-else>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 scale-150 rotate-180">
        <path d="M7 5H9.382C9.55243 5.00001 9.72004 5.04357 9.8689 5.12656C10.0178 5.20955 10.1429 5.32921 10.2326 5.47418C10.3222 5.61915 10.3733 5.78462 10.3809 5.95488C10.3886 6.12514 10.3527 6.29454 10.2765 6.447L8.5265 9.947C8.44343 10.1132 8.31569 10.253 8.1576 10.3507C7.99951 10.4484 7.81733 10.5001 7.6315 10.5H5.623C5.5415 10.5 5.46 10.49 5.3805 10.47L3.5 10M7 5V2.5C7 2.23478 6.89464 1.98043 6.70711 1.79289C6.51957 1.60536 6.26522 1.5 6 1.5H5.9525C5.7025 1.5 5.5 1.7025 5.5 1.9525C5.5 2.3095 5.3945 2.6585 5.196 2.9555L3.5 5.5V10M7 5H6M3.5 10H2.5C2.23478 10 1.98043 9.89464 1.79289 9.70711C1.60536 9.51957 1.5 9.26522 1.5 9V6C1.5 5.73478 1.60536 5.48043 1.79289 5.29289C1.98043 5.10536 2.23478 5 2.5 5H3.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="text-current text-sm">پیشنهاد نمی‌کنم</span>
    </div>
    <p class="max-w-[170x] mt-3 text-sm font-light">
      {{comment.text}}
    </p>

    <div class="mt-8 flex items-center justify-between">
      <small class="opacity-70">{{ comment.persianTime }}</small>
      <div class="flex items-center gap-2">
        <button class="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 5H9.382C9.55243 5.00001 9.72004 5.04357 9.8689 5.12656C10.0178 5.20955 10.1429 5.32921 10.2326 5.47418C10.3222 5.61915 10.3733 5.78462 10.3809 5.95488C10.3886 6.12514 10.3527 6.29454 10.2765 6.447L8.5265 9.947C8.44343 10.1132 8.31569 10.253 8.1576 10.3507C7.99951 10.4484 7.81733 10.5001 7.6315 10.5H5.623C5.5415 10.5 5.46 10.49 5.3805 10.47L3.5 10M7 5V2.5C7 2.23478 6.89464 1.98043 6.70711 1.79289C6.51957 1.60536 6.26522 1.5 6 1.5H5.9525C5.7025 1.5 5.5 1.7025 5.5 1.9525C5.5 2.3095 5.3945 2.6585 5.196 2.9555L3.5 5.5V10M7 5H6M3.5 10H2.5C2.23478 10 1.98043 9.89464 1.79289 9.70711C1.60536 9.51957 1.5 9.26522 1.5 9V6C1.5 5.73478 1.60536 5.48043 1.79289 5.29289C1.98043 5.10536 2.23478 5 2.5 5H3.75" stroke="#66AD55" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-xs">{{ comment.likesCount }}</span>
        </button>
        <button class="flex items-center gap-1 text-danger">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-180">
            <path d="M7 5H9.382C9.55243 5.00001 9.72004 5.04357 9.8689 5.12656C10.0178 5.20955 10.1429 5.32921 10.2326 5.47418C10.3222 5.61915 10.3733 5.78462 10.3809 5.95488C10.3886 6.12514 10.3527 6.29454 10.2765 6.447L8.5265 9.947C8.44343 10.1132 8.31569 10.253 8.1576 10.3507C7.99951 10.4484 7.81733 10.5001 7.6315 10.5H5.623C5.5415 10.5 5.46 10.49 5.3805 10.47L3.5 10M7 5V2.5C7 2.23478 6.89464 1.98043 6.70711 1.79289C6.51957 1.60536 6.26522 1.5 6 1.5H5.9525C5.7025 1.5 5.5 1.7025 5.5 1.9525C5.5 2.3095 5.3945 2.6585 5.196 2.9555L3.5 5.5V10M7 5H6M3.5 10H2.5C2.23478 10 1.98043 9.89464 1.79289 9.70711C1.60536 9.51957 1.5 9.26522 1.5 9V6C1.5 5.73478 1.60536 5.48043 1.79289 5.29289C1.98043 5.10536 2.23478 5 2.5 5H3.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-xs">{{ comment.dislikesCount }}</span>
        </button>
      </div>
    </div>
    <base-f-alert v-if="comment.commentStatus == ECommentStatus.Pending" color="warning" class="mt-2">
      <span class="text-[10px] ">( نظر شما ثبت شده است و پس از تایید منتشر خواهد شد )</span>
    </base-f-alert>
  </div>
</template>

<style scoped>

</style>