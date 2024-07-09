<template>
  <div>
    <Head>
      <Title>اطلاعات کاربری</Title>
    </Head>
    <div class="hidden md:block">
      <div class="text-xl font-bold flex items-center gap-2 ">
        <span>اطلاعات کاربری</span>
      </div>
      <hr class="my-3  ">

      <base-f-modal v-model="editPersonalModal">
        <template #header>تغییر اطلاعات شناسایی</template>
        <template #default>
          <profile-edit-personal-info />
        </template>
      </base-f-modal>

      <base-g-modal title="تایید تلفن همراه" v-model="showVerifyNumberModal">
        <div class="flex flex-col space-y-4 mt-4">
          <span>کد تایید به شماره {{ accountStore.currentUser?.phoneNumber }} ارسال شد.</span>
          <base-g-verification-input label="کد را وارد کنید" ref="verifyInput"/>
          <button class="text-brandOrange underline underline-offset-4 underline-brandOrange">ارسال مجدد</button>
          <base-g-button w-full @click="VerifyPhone">
            ثبت
          </base-g-button>
        </div>
      </base-g-modal>

      <base-f-modal v-model="editPhoneModal">
        <template #header>تغییر تلفن همراه</template>
        <template #default>
          <div class="flex flex-col space-y-2">
            <base-f-input type="text" name="phone" id="phone" is-required place-holder="09121111111" :rtl="false" v-model="phoneNumber">
              <template #inputIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
              </template>
            </base-f-input>
  <!--          <base-f-alert color="warning">
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
            <base-f-input type="text" name="verify" id="verify" is-required place-holder="کد فعال سازی" label="کد فعالسازی"/>-->
            <base-f-button color="primary" @clicked="EditPhoneNumber" :loading="loading">
              ثبت تغییرات
            </base-f-button>
          </div>
        </template>
      </base-f-modal>

      <base-f-modal v-model="editEmailModal">
        <template #header>تغییر پست الکترونیکی</template>
        <template #default>
          <div class="flex flex-col space-y-2">
            <base-f-input type="email" name="email" id="email" is-required place-holder="test@example.com" :rtl="false" v-model="email">
              <template #inputIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </base-f-input>
            <base-f-button color="primary" @clicked="ChangeEmail" :loading="loading">
              ثبت تغییرات
            </base-f-button>
          </div>
        </template>
      </base-f-modal>

      <base-f-modal v-model="editPasswordModal">
        <template #header>تغییر رمز عبور</template>
        <template #default>
          <Form class="flex flex-col space-y-4" :validation-schema="changePasswordSchema" @submit.prevent="ChangeUserPassword">
            <base-f-input type="password" name="oldPassword" id="oldPassword" is-required label="رمز عبور فعلی" :rtl="false" place-holder="••••••••••" v-model="changePasswordCommand.oldPassword">
              <template #inputIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.79 14.9299C17.73 16.9799 14.78 17.6099 12.19 16.7999L7.48002 21.4999C7.14002 21.8499 6.47002 22.0599 5.99002 21.9899L3.81002 21.6899C3.09002 21.5899 2.42002 20.9099 2.31002 20.1899L2.01002 18.0099C1.94002 17.5299 2.17002 16.8599 2.50002 16.5199L7.20002 11.8199C6.40002 9.21995 7.02002 6.26995 9.08002 4.21995C12.03 1.26995 16.82 1.26995 19.78 4.21995C22.74 7.16995 22.74 11.9799 19.79 14.9299Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.89001 17.49L9.19001 19.79" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </base-f-input>
            <hr />
            <base-f-input type="password" name="newPassword" id="newPassword" is-required label="رمز عبور جدید" :rtl="false" place-holder="••••••••••" v-model="changePasswordCommand.newPassword">
              <template #inputIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.79 14.9299C17.73 16.9799 14.78 17.6099 12.19 16.7999L7.48002 21.4999C7.14002 21.8499 6.47002 22.0599 5.99002 21.9899L3.81002 21.6899C3.09002 21.5899 2.42002 20.9099 2.31002 20.1899L2.01002 18.0099C1.94002 17.5299 2.17002 16.8599 2.50002 16.5199L7.20002 11.8199C6.40002 9.21995 7.02002 6.26995 9.08002 4.21995C12.03 1.26995 16.82 1.26995 19.78 4.21995C22.74 7.16995 22.74 11.9799 19.79 14.9299Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.89001 17.49L9.19001 19.79" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </base-f-input>
            <base-f-input type="password" name="newPasswordConfirm" id="newPasswordConfirm" is-required label="تکرار رمز عبور جدید" :rtl="false" place-holder="••••••••••" v-model="newPasswordConfirm">
              <template #inputIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.79 14.9299C17.73 16.9799 14.78 17.6099 12.19 16.7999L7.48002 21.4999C7.14002 21.8499 6.47002 22.0599 5.99002 21.9899L3.81002 21.6899C3.09002 21.5899 2.42002 20.9099 2.31002 20.1899L2.01002 18.0099C1.94002 17.5299 2.17002 16.8599 2.50002 16.5199L7.20002 11.8199C6.40002 9.21995 7.02002 6.26995 9.08002 4.21995C12.03 1.26995 16.82 1.26995 19.78 4.21995C22.74 7.16995 22.74 11.9799 19.79 14.9299Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.89001 17.49L9.19001 19.79" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </base-f-input>
            <base-f-button type="submit" color="primary" :loading="loading">
              ثبت تغییرات
            </base-f-button>
          </Form>
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


      <div v-if="!accountStore.initLoading" class="grid grid-cols-1 lg:grid-cols-2 p-4 bg-bgWhite rounded-xl">
        <div class="flex justify-between p-4 border-b lg:odd:border-l ">
          <div class="flex flex-col space-y-4">
            <span class="font-light text-sm opacity-70">نام و نام خانوادگی</span>
            <strong>{{ accountStore.currentUser.fullName }}</strong>
          </div>
          <base-f-button color="transparent" @click="editPersonalModal = true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black ">
              <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </base-f-button>
        </div>
        <div class="flex justify-between p-4 border-b lg:odd:border-l ">
          <div class="flex flex-col space-y-4">
            <span class="font-light text-sm opacity-70">کد ملی</span>
            <strong>{{ accountStore.currentUser.nationalId }}</strong>
          </div>
          <base-f-button color="transparent" @click="editPersonalModal = true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black ">
              <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </base-f-button>
        </div>
        <div class="flex justify-between p-4 border-b lg:odd:border-l ">
          <div class="flex flex-col space-y-4">
            <div class="flex items-center space-x-2 space-x-reverse">
              <span class="font-light text-sm opacity-70">شماره موبایل</span>
              <base-g-badge color="danger" fore-color="black" size="sm" v-if="!accountStore.currentUser.isPhoneConfirmed">
                تایید نشده
              </base-g-badge>
              <base-g-badge color="info" fore-color="black" size="sm" v-else>
                تایید شده
              </base-g-badge>
              <button @click="SendConfirmCode" class="text-xs" v-if="!accountStore.currentUser.isPhoneConfirmed">
                برای تایید <u>کلیک کنید</u>
              </button>
            </div>
            <strong>{{ accountStore.currentUser.phoneNumber }}</strong>
          </div>
          <base-f-button color="transparent" @click="editPhoneModal = true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black ">
              <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </base-f-button>
        </div>
        <div class="flex justify-between p-4 border-b lg:odd:border-l ">
          <div class="flex flex-col space-y-4">
            <span class="font-light text-sm opacity-70">ایمیل</span>
            <strong>{{ accountStore.currentUser.email }}</strong>
          </div>
          <base-f-button color="transparent" @click="editEmailModal = true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black ">
              <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </base-f-button>
        </div>
        <div class="flex justify-between p-4 border-b lg:odd:border-l  lg:border-b-transparent dark:lg:border-b-transparent">
          <div class="flex flex-col space-y-4">
            <span class="font-light text-sm opacity-70">رمز عبور</span>
            <strong>•••••••</strong>
          </div>
          <base-f-button color="transparent" @click="editPasswordModal = true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black ">
              <path d="M13.3352 19.5078H19.7122" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0578 4.85901V4.85901C14.7138 3.85101 12.8078 4.12301 11.7998 5.46601C11.7998 5.46601 6.7868 12.144 5.0478 14.461C3.3088 16.779 4.9538 19.651 4.9538 19.651C4.9538 19.651 8.1978 20.397 9.9118 18.112C11.6268 15.828 16.6638 9.11701 16.6638 9.11701C17.6718 7.77401 17.4008 5.86701 16.0578 4.85901Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5041 7.21143L15.3681 10.8624" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </base-f-button>
        </div>
        <div class="flex justify-between p-4 lg:odd:border-l ">
          <div class="flex flex-col space-y-4">
            <span class="font-light text-sm opacity-70">تاریخ ثبت نام</span>
            <strong>{{ accountStore.currentUser.persianDate }}</strong>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 mt-6 gap-2" v-else>
        <div class="h-28 border rounded-2xl flex flex-col bg-white skeleton justify-center items-start space-y-4 px-6" v-for="i in 6">
          <div class="w-1/3 skeleton-el rounded-full animate-pulse h-3"></div>
          <div class="flex w-full items-center justify-between">
            <div class="w-1/2 skeleton-el rounded-full animate-pulse h-4"></div>
            <div class="w-8 skeleton-el rounded-full animate-pulse h-2"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden">
      <header class="w-full h-[80px] px-4 flex items-center justify-center relative">
        <NuxtLink to="/profile" class="absolute right-7">
          <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M1 13L6 7L1 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </NuxtLink>
        <span class="font-light">
          اطلاعات حساب کاربری
        </span>
      </header>

      <hr class="mb-4">
      <div class="flex w-full flex-col items-center space-y-4" v-if="!accountStore.initLoading">
        <div class="bg-[#D9D9D9] grid place-items-center px-4 aspect-square rounded-full relative">
          <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7792 10.0252C23.7792 14.0636 20.5413 17.3018 16.5 17.3018C12.4601 17.3018 9.22077 14.0636 9.22077 10.0252C9.22077 5.98678 12.4601 2.75 16.5 2.75C20.5413 2.75 23.7792 5.98678 23.7792 10.0252ZM16.5 30.25C10.5358 30.25 5.5 29.2806 5.5 25.5406C5.5 21.7992 10.5674 20.8642 16.5 20.8642C22.4656 20.8642 27.5 21.8335 27.5 25.5736C27.5 29.315 22.4326 30.25 16.5 30.25Z" fill="white"/>
          </svg>
        </div>
        <NuxtLink to="/profile/edit/personalInfo" class="flex flex-col space-y-2 pb-4 px-2 border-b w-full">
        <span class="font-light text-sm">
          نام و نام خانوادگی
        </span>
          <div class="flex items-center justify-between">
            <strong>{{accountStore.currentUser?.fullName}}</strong>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M5 1L1 5.5L5 10" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </NuxtLink>
        <NuxtLink to="/profile/edit/personalInfo" class="flex flex-col space-y-2 pb-4 px-2 border-b w-full">
        <span class="font-light text-sm">
          شماره تلفن
        </span>
          <div class="flex items-center justify-between">
            <strong>{{accountStore.currentUser?.phoneNumber}}</strong>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M5 1L1 5.5L5 10" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </NuxtLink>
        <NuxtLink to="/profile/edit/personalInfo" :class="['flex pb-4 px-2 border-b w-full',accountStore.currentUser?.nationalId == null ? 'items-center justify-between' : 'flex-col space-y-2' ]">
          <span class="font-light text-sm">
            کد ملی
          </span>
          <div class="flex items-center justify-between" v-if="accountStore.currentUser?.nationalId !== null">
            <strong>{{accountStore.currentUser?.nationalId}}</strong>
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M5 1L1 5.5L5 10" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
            <g opacity="0.5">
              <path d="M1 6.5H12" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M6.5 12L6.5 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round"/>
            </g>
          </svg>
        </NuxtLink>
        <NuxtLink class="flex items-center justify-between pb-4 px-2 border-b w-full">
        <span class="font-light text-sm">
          آدرس
        </span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d="M1 6.5H12" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M6.5 12L6.5 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round"/>
            </g>
          </svg>
        </NuxtLink>
        <NuxtLink class="flex items-center justify-between pb-4 px-2 border-b w-full">
        <span class="font-light text-sm">
          ایمیل
        </span>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d="M1 6.5H12" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M6.5 12L6.5 1" stroke="#0A0A0A" stroke-width="1.5" stroke-linecap="round"/>
            </g>
          </svg>
        </NuxtLink>
      </div>
      <div class="flex flex-col mt-6 gap-4 animate-pulse items-center" v-else>
        <div class="w-16 aspect-square rounded-full bg-gray-200"></div>
        <div class="h-16 border rounded-lg flex flex-col justify-center w-full items-start space-y-4 px-6" v-for="i in 4" :key="i">
          <div class="w-1/3 bg-gray-300 rounded-full animate-pulse h-2"></div>
          <div class="w-full bg-gray-300 rounded-full animate-pulse h-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {EditUserEmail, EditUserPhoneNumber, GenerateMobileCode, VerifyPhoneNumber} from "~/services/user.service";
import {ToastType} from "~/composables/useSwal";
import {ChangePassword} from "~/services/auth.service";
import type {ChangePasswordCommand} from "~/models/users/userCommands";
import * as Yup from "yup";

definePageMeta({
  layout:'profile'
})

const accountStore = useAccountStore();
const utilStore = useUtilStore();

const loading = ref(false);
const editPersonalModal = ref(false);
const editPhoneModal = ref(false);
const showVerifyNumberModal = ref(false);
const editEmailModal = ref(false);
const editPasswordModal = ref(false);
const editBirthModal = ref(false);
const verifyInput = ref();
const toast = useToast();

const email = ref(accountStore?.currentUser?.email);
const phoneNumber = ref(accountStore?.currentUser?.phoneNumber);

const changePasswordSchema = Yup.object().shape({
  oldPassword:Yup.string().required('پسورد فعلی الزامی است'),
  newPassword:Yup.string().required('پسورد جدید الزامی است').min(6,'پسورد باید حداقل 6 حرف باشد!'),
  //@ts-ignore
  newPasswordConfirm:Yup.string().oneOf([Yup.ref('newPassword'), null], 'پسورد جدید و تکرار آن مطابقت ندارند')
});
const changePasswordCommand:ChangePasswordCommand = reactive({
  oldPassword:'',
  newPassword:''
});
const newPasswordConfirm = ref('');

onMounted(async ()=>{
  await accountStore.initData();
})

const ChangeEmail = async ()=>{
  loading.value = true;
  if(email.value === "") return;
  const res = await EditUserEmail(email.value!);
  if(res.isSuccess){
    editEmailModal.value = false;
    await toast.showToast();
  }else{
    await toast.showToast(res.metaData.message,ToastType.error,0);
  }
 loading.value = false;
}
const EditPhoneNumber = async ()=>{
  loading.value = true;
  if(phoneNumber.value === "") return;
  const res = await EditUserPhoneNumber(phoneNumber.value!);
  if(res.isSuccess){
    editPhoneModal.value = false;
    await toast.showToast();
  }else{
    await toast.showToast(res.metaData.message,ToastType.error,0);
  }
 loading.value = false;
}

const ChangeUserPassword = async ()=>{
  loading.value = true;

  if(changePasswordCommand.newPassword != newPasswordConfirm.value) {
    await toast.showToast('پسورد جدید و تکرار آن مطابقت ندارند', ToastType.error, 3000);
    loading.value = false;
    return;
  }

  const res = await ChangePassword(changePasswordCommand);
  if(res.isSuccess){
    editPasswordModal.value = false;
    await toast.showToast();
  }else{
    await toast.showToast(res.metaData.message,ToastType.error,0);
  }
 loading.value = false;
}

const SendConfirmCode = async ()=>{
  const result = await GenerateMobileCode();
  if(result.isSuccess){
    showVerifyNumberModal.value = true;
  }else{
    await toast.showError(result.metaData,false);
  }
}

const VerifyPhone = async ()=>{
  const code = verifyInput.value.getValue;
  const result = await VerifyPhoneNumber(code);
  if(result.isSuccess){
    showVerifyNumberModal.value = false;
    await toast.showToast();
  }else{
    await toast.showError(result.metaData,false);
  }
}

</script>