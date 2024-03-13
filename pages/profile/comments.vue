<template>
  <div>
    <div>
      <div class="text-2xl font-bold flex items-center gap-2 dark:text-white">
        <NuxtLink to="/profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <strong>نظرات من</strong>
      </div>
      <hr class="my-3 border-2 dark:border-gray-600">
    </div>
    <ul class="flex-flex-col space-y-4 mt-8 p-4">
      <li class="w-full flex flex-col bg-bgWhite dark:bg-gray-800 dark:text-white p-4 drop-shadow rounded-lg last:border-none" v-for="c in comments" :key="c.id">
        <div class="flex justify-between items-start">

            <div class="flex items-center flex-wrap gap-2 lg:gap-4">
              <NuxtLink to="/product/thing#comments">
                <strong class="text-sm lg:text-base">زعفران نگین شیشه ای</strong>
              </NuxtLink>

              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg" class="hidden lg:block">
                <rect opacity="0.4" width="5" height="5" rx="3" fill="currentColor"/>
              </svg>
              <div class="flex items-center gap-2 lg:gap-4">
                <small class="opacity-70 text-xs lg:text-sm">{{ c.persianDate }}</small>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg" class="hidden lg:block">
                  <rect opacity="0.4" width="5" height="5" rx="3" fill="currentColor"/>
                </svg>
                <div class="rounded-lg border-2 border-brandOrange flex space-x-2 space-x-reverse px-2 py-1 items-center opacity-80 scale-75">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.01559 0C5.7652 0 5.5783 0.136397 5.47225 0.232513C5.35559 0.338243 5.25283 0.472053 5.16409 0.605823C4.98494 0.875902 4.8092 1.22876 4.64994 1.588C4.32899 2.31197 4.0392 3.14439 3.88773 3.59882C3.88551 3.60549 3.87896 3.61073 3.87104 3.611C3.39649 3.62704 2.52678 3.6696 1.76875 3.78077C1.39426 3.83569 1.0171 3.91141 0.722635 4.02106C0.577641 4.07506 0.419517 4.14912 0.28909 4.25656C0.157087 4.3653 0 4.55589 0 4.83072C0 5.0208 0.0719142 5.18905 0.137011 5.30913C0.206785 5.43783 0.298998 5.56538 0.397633 5.68583C0.59533 5.92724 0.856738 6.18566 1.12701 6.43145C1.67013 6.92535 2.29909 7.41308 2.65694 7.68273C2.66259 7.68698 2.66522 7.69408 2.66288 7.70175C2.52546 8.15293 2.28678 8.97847 2.13495 9.74415C2.05953 10.1245 2.00129 10.5105 1.99255 10.8366C1.9882 10.9988 1.99534 11.1667 2.02777 11.3206C2.05798 11.464 2.12435 11.6653 2.29422 11.8154C2.48487 11.9839 2.71433 12.0062 2.87321 11.9964C3.03568 11.9864 3.19839 11.9393 3.3434 11.8846C3.63622 11.7741 3.96676 11.5892 4.28371 11.3895C4.92398 10.9861 5.60196 10.4626 5.98752 10.1547C5.9945 10.1492 6.00475 10.149 6.01207 10.1549C6.39754 10.463 7.07608 10.9868 7.72114 11.3905C8.04063 11.5904 8.37459 11.7754 8.67245 11.8857C8.82034 11.9405 8.98472 11.9867 9.14865 11.9965C9.30958 12.0061 9.5327 11.9835 9.72311 11.8272C9.9015 11.6808 9.97562 11.4796 10.01 11.3304C10.0462 11.1733 10.0546 11.0026 10.0506 10.8392C10.0426 10.5108 9.98131 10.1232 9.90194 9.74301C9.74206 8.97718 9.48912 8.15142 9.34278 7.69834C9.34018 7.69031 9.34293 7.68282 9.34878 7.67841C9.70843 7.40725 10.336 6.92021 10.8773 6.42751C11.1467 6.18234 11.4071 5.92464 11.604 5.68388C11.7022 5.56376 11.7941 5.43652 11.8636 5.30808C11.9284 5.18821 12 5.02035 12 4.83072C12 4.55618 11.8432 4.36569 11.7113 4.25691C11.5811 4.14947 11.4231 4.0754 11.2783 4.02142C10.9842 3.91178 10.6076 3.83605 10.2336 3.78111C9.47655 3.66991 8.60754 3.62723 8.13192 3.6111C8.1239 3.61083 8.11747 3.6056 8.11529 3.59888C7.96725 3.1431 7.68472 2.31139 7.37026 1.58843C7.21424 1.22972 7.04161 0.877205 6.86471 0.607238C6.7771 0.473536 6.67524 0.339464 6.559 0.233391C6.45303 0.136691 6.26634 0 6.01559 0Z" fill="#F0AA23"/>
                  </svg>
                  <span class="font-bold text-xs text-brandOrange dark:text-white">{{ c.score }}</span>
                </div>
              </div>
            </div>

        </div>
        <hr class="my-2">
        <p class="mt-2 font-estedad font-light text-xs lg:text-sm leading-relaxed text-justify">
          {{c.text}}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {CommentDto, CommentFilterParams} from "~/models/comment/commentQueries";
import {GetUserComments} from "~/services/comment.service";
import type {Ref} from "vue";

definePageMeta({
  layout:'profile'
})

const accountStore = useAccountStore();
const comments:Ref<CommentDto[]> = ref([]);

onMounted(async ()=>{
  await accountStore.initData();

  const result = await GetUserComments({
  } as CommentFilterParams);
  if(result.isSuccess){
    comments.value = result.data?.data!;
  }
})

</script>