<script setup lang="ts">
import type {SpecialComment} from "~/models/mainPage/dataTemplate";
import {SITE_URL} from "~/utilities/api.config";

const props = defineProps<{
  comment:SpecialComment
}>();
</script>

<template>
  <div class="border rounded-3xl py-6 px-10 flex flex-col justify-between" >
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-3">
        <NuxtImg placeholder="/images/placeholder.jpeg" :src="`${SITE_URL}//specialComments/${comment.userAvatar}`" :alt="comment.userName" class="max-w-[50px] rounded-full" />
        <div class="flex flex-col">
          <span class="text-lg opacity-70">{{ comment.userName }}</span>
          <span class="text-sm opacity-30">{{ comment.userJob }}</span>
        </div>
      </div>
      <div class="flex items-center">
        <img src="~/assets/images/star.png" alt="star" class="max-w-5 saturate-0 opacity-70" v-for="i in 5 - Math.floor(Number(comment.userScore))" :key="i">
        <img src="~/assets/images/star.png" alt="star" class="max-w-5" v-for="i in Math.floor(Number(comment.userScore))" :key="i">
      </div>
    </div>
    <p class="opacity-40 text-[#070707] text-center px-5 my-auto">
      {{comment.content}}
    </p>
  </div>
</template>

<style scoped>

</style>