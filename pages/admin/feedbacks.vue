<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>بازخورد کاربران</Title>
    </Head>
    <base-f-divider :logo-divider="false" title="بازخورد ها" />

    <f-modal title="افزودن زمان بندی جدید" v-model="showAddModal">
      <admin-schedule-add @schedule-added="showAddModal = false,getData()"/>
    </f-modal>
    <f-modal title="ویرایش زمان بندی" v-model="showEditModal">
      <admin-schedule-edit @schedule-updated="showEditModal = false,getData()" :schedule="selectedSchedule"/>
    </f-modal>

    <div v-if="!isLoading" class=" w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
          <tr
              class="text-xs font-bold text-right text-gray-500 uppercase border-b  bg-gray-50  "
          >
            <th class="px-4 py-3">کاربر (آیدی | آیپی)</th>
            <th class="px-4 py-3">بازخورد</th>
            <th class="px-4 py-3">متن</th>
            <th class="px-4 py-3">تاریخ</th>
          </tr>
          </thead>
          <tbody
              class="bg-white divide-y dark:divide-gray-700 "
          >
          <template v-for="q in feedbacks">
            <tr class="text-gray-700 ">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold text-nowrap">{{ q.userId ?? q.ip }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm text-nowrap max-w-[200px] truncate">
                <img src="~/assets/images/emojies/very-happy.png" alt="very happy" v-if="q.feedbackType === EFeedbackType.VeryHappy">
                <img src="~/assets/images/emojies/happy.png" alt="happy" v-if="q.feedbackType === EFeedbackType.Happy">
                <img src="~/assets/images/emojies/indifferent.png" alt="indifferent" v-if="q.feedbackType === EFeedbackType.Indifferent">
                <img src="~/assets/images/emojies/sad.png" alt="sad" v-if="q.feedbackType === EFeedbackType.Unhappy">
                <img src="~/assets/images/emojies/sad.png" alt="angry" v-if="q.feedbackType === EFeedbackType.Angry">
              </td>
              <td class="px-4 py-3 text-sm text-nowrap max-w-[200px] truncate">
                  {{ q.description }}
              </td>
              <td class="px-4 py-3 text-sm text-nowrap max-w-[200px] truncate">
                {{ q.persianDate }}
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
import {ToastType} from "~/composables/useSwal";
import {DeleteSchedule, GetSchedules} from "~/services/schedule.service";
import type {ScheduleDto} from "~/models/schedules/scheduleData";
import {EFeedbackType, type FeedbackData} from "~/models/feedback/feedbackData";
import {GetAllFeedbacks} from "~/services/feedback.service";

definePageMeta({
  layout: 'admin'
})

const pageId = ref(1)
const isLoading = ref(true)
const showAddModal = ref(false)
const showEditModal = ref(false)
const toast = useToast();
const feedbacks: Ref<FeedbackData[]> = ref([]);
const selectedSchedule: Ref<FeedbackData | null> = ref(null);

onMounted(async () => {
  await getData();
})

const editQuestion = (question: ScheduleDto) => {
  selectedSchedule.value = question;
  showEditModal.value = true;
}

watch(
    pageId,
    async ()=>await getData()
)

const getData = async () => {
  isLoading.value = true;

  const result = await GetAllFeedbacks({pageId:pageId.value,take:20});
  if (result.isSuccess) {
    feedbacks.value = result.data?.data ?? [];
  }

  isLoading.value = false;
}

const deleteQuestion = (id: number) => {
  toast.showToast("آیا از حذف این زمان بندی اطمینان دارید؟", ToastType.warning, 0, false,
      async () => {
        const result = await DeleteSchedule(id);
        if (result.isSuccess) {
          toast.showToast();
          await getData();
        } else {
          await toast.showToast(result.metaData.message, ToastType.error, 0);
        }
      })
}

</script>