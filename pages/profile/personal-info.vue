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
        <strong>اطلاعات حساب کاربری</strong>
      </div>
      <hr class="my-3 border-2 rounded-full dark:border-gray-600">
    </div>

    <base-f-modal v-model="editPersonalModal">
      <template #header>تغییر اطلاعات شناسایی</template>
      <template #default>
        <profile-edit-personal-info />
      </template>
    </base-f-modal>

    <base-f-modal v-model="editPhoneModal">
      <template #header>تغییر تلفن همراه</template>
      <template #default>
        <div class="flex flex-col space-y-2">
          <base-f-input type="text" name="phone" id="phone" is-required place-holder="09121111111" :rtl="false">
            <template #inputIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"/>
              </svg>
            </template>
          </base-f-input>
          <base-f-alert color="warning">
            <template #icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8V13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.9945 16H12.0035" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            برای ثبت این شماره باید آن را تایید کنید.
          </base-f-alert>
          <base-f-button color="primary" bordered>
            ارسال کد فعال سازی
          </base-f-button>
          <base-f-input type="text" name="verify" id="verify" is-required place-holder="کد فعال سازی" label="کد فعالسازی"/>
          <base-f-button color="primary">
            ثبت تغییرات
          </base-f-button>
        </div>
      </template>
    </base-f-modal>

    <base-f-modal v-model="editEmailModal">
      <template #header>تغییر پست الکترونیکی</template>
      <template #default>
        <div class="flex flex-col space-y-2">
          <base-f-input type="email" name="email" id="email" is-required place-holder="test@example.com" :rtl="false">
            <template #inputIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </base-f-input>
          <base-f-button color="primary">
            ثبت تغییرات
          </base-f-button>
        </div>
      </template>
    </base-f-modal>

    <base-f-modal v-model="editPasswordModal">
      <template #header>تغییر رمز عبور</template>
      <template #default>
        <div class="flex flex-col space-y-4">
          <base-f-input type="password" name="current" id="current" is-required label="رمز عبور فعلی" place-holder="••••••••••">
            <template #inputIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 14.9299C17.73 16.9799 14.78 17.6099 12.19 16.7999L7.48002 21.4999C7.14002 21.8499 6.47002 22.0599 5.99002 21.9899L3.81002 21.6899C3.09002 21.5899 2.42002 20.9099 2.31002 20.1899L2.01002 18.0099C1.94002 17.5299 2.17002 16.8599 2.50002 16.5199L7.20002 11.8199C6.40002 9.21995 7.02002 6.26995 9.08002 4.21995C12.03 1.26995 16.82 1.26995 19.78 4.21995C22.74 7.16995 22.74 11.9799 19.79 14.9299Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.89001 17.49L9.19001 19.79" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </base-f-input>
          <hr />
          <base-f-input type="password" name="current" id="current" is-required label="رمز عبور جدید" place-holder="••••••••••">
            <template #inputIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 14.9299C17.73 16.9799 14.78 17.6099 12.19 16.7999L7.48002 21.4999C7.14002 21.8499 6.47002 22.0599 5.99002 21.9899L3.81002 21.6899C3.09002 21.5899 2.42002 20.9099 2.31002 20.1899L2.01002 18.0099C1.94002 17.5299 2.17002 16.8599 2.50002 16.5199L7.20002 11.8199C6.40002 9.21995 7.02002 6.26995 9.08002 4.21995C12.03 1.26995 16.82 1.26995 19.78 4.21995C22.74 7.16995 22.74 11.9799 19.79 14.9299Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.89001 17.49L9.19001 19.79" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </base-f-input>
          <base-f-input type="password" name="current" id="current" is-required label="تکرار رمز عبور جدید" place-holder="••••••••••">
            <template #inputIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.79 14.9299C17.73 16.9799 14.78 17.6099 12.19 16.7999L7.48002 21.4999C7.14002 21.8499 6.47002 22.0599 5.99002 21.9899L3.81002 21.6899C3.09002 21.5899 2.42002 20.9099 2.31002 20.1899L2.01002 18.0099C1.94002 17.5299 2.17002 16.8599 2.50002 16.5199L7.20002 11.8199C6.40002 9.21995 7.02002 6.26995 9.08002 4.21995C12.03 1.26995 16.82 1.26995 19.78 4.21995C22.74 7.16995 22.74 11.9799 19.79 14.9299Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.89001 17.49L9.19001 19.79" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </base-f-input>
          <base-f-button color="primary">
            ثبت تغییرات
          </base-f-button>
        </div>
      </template>
    </base-f-modal>

    <base-f-modal v-model="editBirthModal">
      <template #header>تغییر تاریخ تولد</template>
      <template #default>
        <div class="flex flex-col space-y-4">
          <div class="grid grid-cols-3 gap-4">
            <base-f-input type="number" name="day" id="day" is-required label="روز" >
            </base-f-input>
            <div class="flex flex-col space-y-2 w-full">
              <label for="month" class="flex items-center space-x-1 space-x-reverse font-light text-sm">ماه</label>
              <select name="month" id="month" class="h-full px-4 outline-none border rounded-lg">
                <option value="فروردین">فروردین</option>
                <option value="اردیبهشت">اردیبهشت</option>
                <option value="خرداد">خرداد</option>
                <option value="تیر">تیر</option>
                <option value="مرداد">مرداد</option>
                <option value="شهریور">شهریور</option>
                <option value="مهر">مهر</option>
                <option value="آبان">آبان</option>
                <option value="آذر">آذر</option>
                <option value="دی">دی</option>
                <option value="بهمن">بهمن</option>
                <option value="اسفند">اسفند</option>
              </select>
            </div>
            <base-f-input type="number" name="year" id="year" is-required label="سال" >
            </base-f-input>
          </div>
          <base-f-button color="primary">
            ثبت تغییرات
          </base-f-button>
        </div>
      </template>
    </base-f-modal>

    <div class="grid grid-cols-1 lg:grid-cols-2 p-4 bg-bgWhite dark:bg-gray-800 dark:text-white dark:border-gray-600 border rounded-xl lg:m-4">
      <div class="flex justify-between p-4 border-b lg:odd:border-l dark:border-gray-600">
        <div class="flex flex-col space-y-4">
          <span class="font-light text-sm opacity-70">نام و نام خانوادگی</span>
          <strong>سجاد میرشبی</strong>
        </div>
        <base-f-button color="transparent" @click="editPersonalModal = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </base-f-button>
      </div>
      <div class="flex justify-between p-4 border-b lg:odd:border-l dark:border-gray-600">
        <div class="flex flex-col space-y-4">
          <span class="font-light text-sm opacity-70">کد ملی</span>
          <strong>0691234567</strong>
        </div>
        <base-f-button color="transparent" @click="editPersonalModal = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </base-f-button>
      </div>
      <div class="flex justify-between p-4 border-b lg:odd:border-l dark:border-gray-600">
        <div class="flex flex-col space-y-4">
          <div class="flex items-center space-x-2 space-x-reverse">
            <span class="font-light text-sm opacity-70">شماره موبایل</span>
            <base-f-badge color="warning" fore-color="black" size="sm">
              تایید نشده
            </base-f-badge>
          </div>
          <strong>09154222478</strong>
        </div>
        <base-f-button color="transparent" @click="editPhoneModal = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </base-f-button>
      </div>
      <div class="flex justify-between p-4 border-b lg:odd:border-l dark:border-gray-600">
        <div class="flex flex-col space-y-4">
          <span class="font-light text-sm opacity-70">ایمیل</span>
          <strong>m.sajjad1378@gmail.com</strong>
        </div>
        <base-f-button color="transparent" @click="editEmailModal = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </base-f-button>
      </div>
      <div class="flex justify-between p-4 border-b lg:odd:border-l dark:border-gray-600 lg:border-b-transparent dark:lg:border-b-transparent">
        <div class="flex flex-col space-y-4">
          <span class="font-light text-sm opacity-70">رمز عبور</span>
          <strong>•••••••</strong>
        </div>
        <base-f-button color="transparent" @click="editPasswordModal = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </base-f-button>
      </div>
      <div class="flex justify-between p-4 lg:odd:border-l ">
        <div class="flex flex-col space-y-4">
          <span class="font-light text-sm opacity-70">تاریخ تولد</span>
          <strong>1378/08/23</strong>
        </div>
        <base-f-button color="transparent" @click="editBirthModal = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </base-f-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout:'profile'
})

const editPersonalModal = ref(false);
const editPhoneModal = ref(false);
const editEmailModal = ref(false);
const editPasswordModal = ref(false);
const editBirthModal = ref(false);

</script>