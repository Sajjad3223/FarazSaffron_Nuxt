<template>
  <li class="relative flex flex-col rounded-lg">
    <a :href="preview.url" class="w-full overflow-hidden rounded-2xl">
      <NuxtImg placeholder="/images/placeholder.jpeg" :src="`${SITE_URL}/blogPreviews/${preview.banner.src}`" :alt="preview.banner.alt" class="rounded-2xl w-full object-cover hover:scale-110 max-h-[250px] transition-transform duration-200" />
    </a>
    <div class="w-5/6 mx-auto -mt-5 z-10 bg-white rounded-2xl p-4">
      <a :href="preview.url"  class="text-[#6A6A6A]">
        <strong>{{ preview.title }}</strong>
      </a>
      <p class="my-4 w-full text-sm font-light text-[#070707]/50">
        {{preview.shortDescription.slice(0,100) + '...'}}
      </p>
      <a :href="preview.url" class="flex items-center gap-1 text-[#2195F3]">
        <span class="text-sm font-light">مطالعه</span>
      </a>
    </div>
  </li>
</template>

<script setup lang="ts">
import type {BlogPreview} from "~/models/mainPage/dataTemplate";

const props = defineProps<{
  preview:BlogPreview
}>()
</script>