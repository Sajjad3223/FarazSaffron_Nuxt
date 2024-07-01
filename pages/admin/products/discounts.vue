<template>
  <div>
    <Head>
      <Title>تخفیف ها</Title>
    </Head>


      <Form :validation-schema="discountSchema" @submit="defineCode" class="grid grid-cols-2 gap-4">
        <base-g-input v-model="createDiscountCommand.amountInPercent" typ="number" name="amountInPercent" id="amountInPercent" label="درصد تخفیف" required/>
        <base-g-input v-model="createDiscountCommand.availableQuantity" typ="number" name="availableQuantity" id="availableQuantity"  label="تعداد" required/>
        <div class="grid grid-cols-3 gap-2">
          <base-g-input v-model="createDiscountCommand.days" typ="number" name="days" id="days"  label="روز" required/>
          <base-g-input v-model="createDiscountCommand.hours" typ="number" name="hours" id="hours"  label="ساعت" required/>
          <base-g-input v-model="createDiscountCommand.minutes" typ="number" name="minutes" id="minutes"  label="دقیقه" required/>
        </div>
        <base-g-input v-model="createDiscountCommand.justForUser" typ="number" name="justForUser" id="justForUser"  label="مخصوص کاربر"/>
        <base-g-button type="submit" :is-loading="loading">
          ثبت کد تخفیف
        </base-g-button>
      </Form>

    <table class="dark:text-white mt-12 w-full" v-if="discounts.length > 0">
      <thead class="font-bold opacity-50">
      <tr>
        <th class="px-4 text-right pb-10">کد تخفیف</th>
        <th class="px-4 text-right pb-10">درصد تخفیف</th>
        <th class="px-4 text-right pb-10">تعداد</th>
        <th class="px-4 text-right pb-10">باقی مانده</th>
        <th class="px-4 text-right pb-10" width="30%">تاریخ انقضا</th>
        <th class="px-4 text-right pb-10">وضعیت</th>
        <th class="px-4 text-right pb-10">تاریخ ثبت</th>
        <th class="px-4 text-right pb-10">عملیات</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="d in discounts" :key="d.id">
        <td class="px-4 py-5">{{d.code}}</td>
        <td class="px-4 py-5">{{d.amountInPercent}}%</td>
        <td class="px-4 py-5">{{d.availableQuantity}}</td>
        <td class="px-4 py-5">{{d.getAvailableCount}}</td>
        <td class="truncate text-right px-4 py-5" dir="ltr">{{new Date(d.expireTime).toLocaleDateString('fa-Ir')}} - {{new Date(d.expireTime).toLocaleTimeString('fa-Ir')}}</td>
        <td class="px-4 py-5">{{d.isActive ? 'فعال' : 'غیر فعال'}}</td>
        <td class="px-4 py-5">{{d.persianDate}}</td>
        <td class="px-4 py-5">
          <button class="bg-danger/30 text-danger hover:bg-danger transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="removeDiscountCode(d.id)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3238 9.46777C19.3238 9.46777 18.7808 16.2028 18.4658 19.0398C18.3158 20.3948 17.4788 21.1888 16.1078 21.2138C13.4988 21.2608 10.8868 21.2638 8.27881 21.2088C6.95981 21.1818 6.13681 20.3778 5.98981 19.0468C5.67281 16.1848 5.13281 9.46777 5.13281 9.46777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.708 6.23926H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {CreateDiscount, GetDiscounts, RemoveDiscount} from "~/services/discount.service";
import type {CreateDiscountCommand} from "~/models/discount/discountCommands";
import type {DiscountDto} from "~/models/discount/discountQueries";
import type {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/fillPaginationData";
import * as Yup from 'yup';
import {ToastType} from "~/composables/useSwal";

definePageMeta({
  layout:'admin'
})

const loading = ref(false);
const toast = useToast();
const discounts:Ref<DiscountDto[]> = ref([]);
const paginationData:Ref<PaginationData | null> = ref(null);

const discountSchema = Yup.object().shape({
  amountInPercent:Yup.number().required().min(5,'کد تخفیف نباید کمتر از 5 درصد باشد').max(100,'کد تخفیف نباید بیشتر از 100 درصد باشد'),
  availableQuantity:Yup.number().required().min(1,'تعداد کد تخفیف باید حداقل یک عدد باشد'),
});

const createDiscountCommand:CreateDiscountCommand = reactive({
  amountInPercent:0,
  availableQuantity:0,
  days:0,
  minutes:0,
  hours:0,
  justForUser:undefined
});

const defineCode = async ()=>{
  loading.value = true;
  const result = await CreateDiscount(createDiscountCommand);
  if(result.isSuccess){
    toast.showToast();
    await getData();
  }
  else{
    toast.showError(result.metaData)
  }
  loading.value = false;
}

const pageId = ref(1);

onMounted(async ()=>{
  await getData();
})

watch(pageId,async () => await getData());

const getData = async ()=>{
  loading.value = true;

  const result = await GetDiscounts({pageId:pageId.value,take:10})
  if(result.isSuccess){
    discounts.value = result.data?.data ?? [];
    paginationData.value = FillPaginationData(result.data!);
  }

  loading.value = false;
}

const removeDiscountCode = async (id:number) => {
  toast.showToast('آیا از حذف مطمئنید؟',ToastType.warning,0)
      .then(async res=>{
        if(res.isConfirmed){
          const result = await RemoveDiscount(id);
          if(result.isSuccess){
            toast.showToast();
            await getData();
          }
          else{
            toast.showError(result.metaData);
          }
        }
      })

}

</script>