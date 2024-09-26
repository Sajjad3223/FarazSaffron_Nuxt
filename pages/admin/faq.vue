<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>سوالات متداول</Title>
    </Head>
    <base-f-divider :logo-divider="false" title="سوالات متداول">
      <template #left>
        <base-f-button color="primary" @clicked="showAddModal = true" text-color="white">
          افزودن سوال جدید
        </base-f-button>
      </template>
    </base-f-divider>

    <f-modal title="افزودن سوال جدید" v-model="showAddModal">
      <admin-faq-add @question-added="showAddModal = false,getData()"/>
    </f-modal>
    <f-modal title="ویرایش سوال" v-model="showEditModal">
      <admin-faq-edit @question-updated="showEditModal = false,getData()" :question="selectedQuestion"/>
    </f-modal>

    <div v-if="!isLoading" class=" w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  "
          >
            <th class="px-4 py-3">عنوان</th>
            <th class="px-4 py-3" width="50%">پاسخ</th>
            <th class="px-4 py-3" width="10%">عملیات</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 "
          >
          <template v-for="q in questions">
            <tr class="text-gray-700 ">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold text-nowrap">{{ q.title }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm text-nowrap max-w-[200px] truncate">
                {{ q.answer }}
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-4 text-sm">
                  <button @click="editQuestion(q)"
                          class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                          aria-label="Edit"
                  >
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                      <path
                          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      ></path>
                    </svg>
                  </button>
                  <button @click="deleteQuestion(q.id)"
                          class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                          aria-label="Delete"
                  >
                    <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                      <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </template>
          </tbody>
        </table>
      </div>
    </div>
    <div class="p-8 bg-gray-200  rounded-xl text-black  grid place-items-center" v-else>
      <span class="animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="60px"
               viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"
               style="display:block;background-color:transparent;"><circle
              cx="50" cy="50" fill="none" stroke="currentColor" stroke-width="10" r="35"
              stroke-dasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"
              style="transform:matrix(1, 0, 0, 1, 0, 0);"></circle>
          </svg>
        </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import FModal from "~/components/base/FModal.vue";
import type {CategoryDto, CategoryFilterParams} from "~/models/categories/categoryQueries";
import {DeleteCategory, GetCategoriesByAdmin} from "~/services/category.service";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import {ToastType} from "~/composables/useSwal";
import {SITE_URL} from "~/utilities/api.config";
import type {QuestionDto} from "~/models/faq/questionDto";
import {DeleteQuestion, GetQuestions} from "~/services/faq.service";

definePageMeta({
  layout: 'admin'
})

const isLoading = ref(true)
const showAddModal = ref(false)
const showEditModal = ref(false)
const toast = useToast();
const questions: Ref<QuestionDto[]> = ref([]);
const selectedQuestion: Ref<QuestionDto | null> = ref(null);

onMounted(async () => {
  await getData();
})

const editQuestion = (question: QuestionDto) => {
  selectedQuestion.value = question;
  showEditModal.value = true;
}

const getData = async () => {
  isLoading.value = true;

  const result = await GetQuestions();
  if (result.isSuccess) {
    questions.value = result.data ?? [];
  }

  isLoading.value = false;
}

const deleteQuestion = (id: number) => {
  toast.showToast("آیا از حذف این سوال اطمینان دارید؟", ToastType.warning, 0, false,
      async () => {
        const result = await DeleteQuestion(id);
        if (result.isSuccess) {
          toast.showToast();
          await getData();
        } else {
          await toast.showToast(result.metaData.message, ToastType.error, 0);
        }
      })
}

</script>