<template>
  <div class="flex flex-col items-center mt-16">

    <Head>
      <Title>ارتباط با چی پی</Title>
    </Head>

    <h2 class="text-5xl font-semibold">ارتباط با <span class="text-brandOrange">جی پی</span></h2>
    <div class="p-8">
      <div class="flex mt-12 items-center justify-between">
        <strong class="text-2xl opacity-70">جهت ارتباط با ما از فرم زیر استفاده کنید</strong>
        <NuxtLink to="/" class="text-brandOrange font-semibold">جهت رفتن به صفحه اول جی پی کلیک کنید</NuxtLink>
      </div>
      <hr class="my-8">
      <div class="grid grid-cols-2 gap-8">
        <div class="grid grid-cols-2 gap-4">
          <base-f-input place-holder="نام و نام خانوادگی*" />
          <base-f-input place-holder="ایمیل*" />
          <base-f-input place-holder="شماره تلفن*" />
          <base-f-input place-holder="موضوع*" />
          <base-f-input place-holder="متن پیام*" multi-line class="col-span-full"/>
          <base-f-button color="brand" text-color="white">ثبت و ارسال</base-f-button>
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/5e22/67ef/d2a2754d4b909e7809deb629a0b08e52?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wzh4ETglN8dXDEKO4EP5mW20FhUvj2YusQ828AlWZKsiFLRpjS41FD~X4IUR8QbrWkc6dXNrN24tXdqpY-w~~3OigB-H~zAIjag74JkC9aBNpBCRCOSN3dPXU5v7IPD-WnrXGENFC2uV~xUDyWsGkhIBHAKVviel7rsiKJ2bpE9hjFkNqnKy~lDKA7S5BLB8BGT6RcQkq76rE48M44DVtJCjrBPYpwM2FWGOvto9UDbgO53UfRZWuBHcwQQYYrOwYdxHicDDxLeAZB99agJn~-VMpAdiB8h5WLBuvA47UT1-Vb7iaQsiJzVRTcExQbN3QRneZjutw-XomLwDN9sCmw__" alt="location " class="rounded-2xl">
      </div>
      <div class="my-12 bg-[#F8F8F8] rounded-2xl p-8">
        <h3 class="pr-4 border-r-4 border-brandOrange text-3xl font-bold">اطلاعات <strong class="text-brandOrange">جی پی</strong></h3>
        <div class="bg-white flex flex-col items-start p-7 rounded-xl mt-8">
          <div class="flex flex-col items-start space-y-4">
            <div class="flex items-center gap-4">
              <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5012 28.8002C15.5012 28.8002 25.2056 19.8958 25.2056 13.2176C25.2056 7.68513 20.8608 3.2002 15.5012 3.2002C10.1417 3.2002 5.79688 7.68513 5.79688 13.2176C5.79688 19.8958 15.5012 28.8002 15.5012 28.8002Z" fill="#F14823"/>
                <path d="M18.6016 12.8004C18.6016 14.5677 17.2137 16.0004 15.5016 16.0004C13.7895 16.0004 12.4016 14.5677 12.4016 12.8004C12.4016 11.0331 13.7895 9.6004 15.5016 9.6004C17.2137 9.6004 18.6016 11.0331 18.6016 12.8004Z" fill="#F14823"/>
                <path d="M15.5012 28.8002C15.5012 28.8002 25.2056 19.8958 25.2056 13.2176C25.2056 7.68513 20.8608 3.2002 15.5012 3.2002C10.1417 3.2002 5.79688 7.68513 5.79688 13.2176C5.79688 19.8958 15.5012 28.8002 15.5012 28.8002Z" stroke="#FCFCFC" stroke-width="3"/>
                <path d="M18.6016 12.8004C18.6016 14.5677 17.2137 16.0004 15.5016 16.0004C13.7895 16.0004 12.4016 14.5677 12.4016 12.8004C12.4016 11.0331 13.7895 9.6004 15.5016 9.6004C17.2137 9.6004 18.6016 11.0331 18.6016 12.8004Z" stroke="#FCFCFC" stroke-width="3"/>
              </svg>
              <strong class="text-xl text-[#7E7E7E] ">دفتر مرکزی</strong>
            </div>
            <span class="text-[#8D8D8D]">استان خراسان رضوی - شهرستان تربت حیدریه - کیلومتر 2 جاده بایگ</span>
            <span class="text-[#8D8D8D]">ساعت کاری :   <strong class="text-[#6D6D6D] mr-2">شنبه تا پنج شنبه از ساعت 8:00 تا 14:00  </strong></span>
            <span class="text-[#8D8D8D]">شماره تماس :    <strong class="text-brandOrange mr-2">52223456-051</strong></span>
          </div>
          <div class="flex flex-col items-start space-y-4 mt-8">
            <strong class="text-xl text-[#7E7E7E] ">خدمات پس از فروش</strong>
            <p class="text-[#8D8D8D] leading-8">
              لطفاً کالا را برای بازگرداندن و ارسال آن به خدمات پس از فروش جی پی از طریق پست، تنها به صندوق پستی 1234-5678 ارسال کنید.(شما می‌توانید از طریق بخش سفارش‌های من اقدام به بازگردانی کالا کنید)
              <br>
              <span class="font-semibold text-[#727272]">توجه داشته باشید شما فقط می توانید برای کالا های پایین تر از 5 گرم بازگردانی را انجام دهید.</span>
            </p>
          </div>
        </div>

      </div>

      <div class="flex flex-col items-center space-y-6">
        <div class="flex items-center gap-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5588 15.1987C16.0827 15.3733 16.649 15.0902 16.8237 14.5662C16.9983 14.0423 16.7152 13.476 16.1912 13.3013L15.5588 15.1987ZM12.5 13.125H11.5C11.5 13.5554 11.7754 13.9376 12.1838 14.0737L12.5 13.125ZM13.5 8.42087C13.5 7.86858 13.0523 7.42087 12.5 7.42087C11.9477 7.42087 11.5 7.86858 11.5 8.42087H13.5ZM16.1912 13.3013L12.8162 12.1763L12.1838 14.0737L15.5588 15.1987L16.1912 13.3013ZM13.5 13.125V8.42087H11.5V13.125H13.5ZM20.5 12C20.5 16.4183 16.9183 20 12.5 20V22C18.0228 22 22.5 17.5228 22.5 12H20.5ZM12.5 20C8.08172 20 4.5 16.4183 4.5 12H2.5C2.5 17.5228 6.97715 22 12.5 22V20ZM4.5 12C4.5 7.58172 8.08172 4 12.5 4V2C6.97715 2 2.5 6.47715 2.5 12H4.5ZM12.5 4C16.9183 4 20.5 7.58172 20.5 12H22.5C22.5 6.47715 18.0228 2 12.5 2V4Z" fill="#747474"/>
          </svg>
          <strong class="text-xl opacity-60">پاسخگویی 24 ساعته و 7 روز هفته</strong>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div class="bg-[#F8F8F8] border rounded-3xl border-[#DFDFDF] p-4 flex items-center gap-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-150">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 8.5C11.285 8.5 10.5 9.285 10.5 10.251C10.5 11.216 11.285 12 12.25 12C13.215 12 14 11.216 14 10.251C14 9.285 13.215 8.5 12.25 8.5ZM12.25 13.5C10.458 13.5 9 12.043 9 10.251C9 8.458 10.458 7 12.25 7C14.042 7 15.5 8.458 15.5 10.251C15.5 12.043 14.042 13.5 12.25 13.5Z" fill="black"/>
              <mask id="mask0_572_2284" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="2" width="17" height="20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H20.4995V21.5H4V2Z" fill="white"/>
              </mask>
              <g mask="url(#mask0_572_2284)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 3.5C8.528 3.5 5.5 6.557 5.5 10.313C5.5 15.092 11.124 19.748 12.25 19.996C13.376 19.747 19 15.091 19 10.313C19 6.557 15.972 3.5 12.25 3.5ZM12.25 21.5C10.456 21.5 4 15.948 4 10.313C4 5.729 7.701 2 12.25 2C16.799 2 20.5 5.729 20.5 10.313C20.5 15.948 14.044 21.5 12.25 21.5Z" fill="black"/>
              </g>
            </svg>
            <div class="flex flex-col items-start">
              <strong class="text-xl opacity-70">آدرس</strong>
              <span class="opacity-60">خراسان رضوی - تربت حیدریه کیلومتر 2 جاده بایگ</span>
            </div>
          </div>
          <div class="bg-[#F8F8F8] border rounded-3xl border-[#DFDFDF] p-4 flex items-center gap-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 8.5C11.285 8.5 10.5 9.285 10.5 10.251C10.5 11.216 11.285 12 12.25 12C13.215 12 14 11.216 14 10.251C14 9.285 13.215 8.5 12.25 8.5ZM12.25 13.5C10.458 13.5 9 12.043 9 10.251C9 8.458 10.458 7 12.25 7C14.042 7 15.5 8.458 15.5 10.251C15.5 12.043 14.042 13.5 12.25 13.5Z" fill="black"/>
              <mask id="mask0_572_2284" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="2" width="17" height="20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H20.4995V21.5H4V2Z" fill="white"/>
              </mask>
              <g mask="url(#mask0_572_2284)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 3.5C8.528 3.5 5.5 6.557 5.5 10.313C5.5 15.092 11.124 19.748 12.25 19.996C13.376 19.747 19 15.091 19 10.313C19 6.557 15.972 3.5 12.25 3.5ZM12.25 21.5C10.456 21.5 4 15.948 4 10.313C4 5.729 7.701 2 12.25 2C16.799 2 20.5 5.729 20.5 10.313C20.5 15.948 14.044 21.5 12.25 21.5Z" fill="black"/>
              </g>
            </svg>
            <div class="flex flex-col items-start">
              <strong class="text-xl opacity-70">اینستاگرام</strong>
              <span class="opacity-60">GP_Saffron</span>
            </div>
          </div>
          <div class="bg-[#F8F8F8] border rounded-3xl border-[#DFDFDF] p-4 flex items-center gap-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 8.5C11.285 8.5 10.5 9.285 10.5 10.251C10.5 11.216 11.285 12 12.25 12C13.215 12 14 11.216 14 10.251C14 9.285 13.215 8.5 12.25 8.5ZM12.25 13.5C10.458 13.5 9 12.043 9 10.251C9 8.458 10.458 7 12.25 7C14.042 7 15.5 8.458 15.5 10.251C15.5 12.043 14.042 13.5 12.25 13.5Z" fill="black"/>
              <mask id="mask0_572_2284" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="2" width="17" height="20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H20.4995V21.5H4V2Z" fill="white"/>
              </mask>
              <g mask="url(#mask0_572_2284)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 3.5C8.528 3.5 5.5 6.557 5.5 10.313C5.5 15.092 11.124 19.748 12.25 19.996C13.376 19.747 19 15.091 19 10.313C19 6.557 15.972 3.5 12.25 3.5ZM12.25 21.5C10.456 21.5 4 15.948 4 10.313C4 5.729 7.701 2 12.25 2C16.799 2 20.5 5.729 20.5 10.313C20.5 15.948 14.044 21.5 12.25 21.5Z" fill="black"/>
              </g>
            </svg>
            <div class="flex flex-col items-start">
              <strong class="text-xl opacity-70">واتساپ</strong>
              <span dir="ltr" class="opacity-60">+98 9305876712</span>
            </div>
          </div>
          <div class="bg-[#F8F8F8] border rounded-3xl border-[#DFDFDF] p-4 flex items-center gap-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.28872 4.08785L3.36127 4.01204C5.28869 2.08444 6.54385 1.57351 7.88307 2.34362C8.2683 2.56515 8.62945 2.87523 9.12054 3.37401L10.6269 4.93603C11.4589 5.84393 11.6481 6.71478 11.3772 7.73465L11.3398 7.86967L11.2984 8.00392L11.097 8.59474C10.666 9.91972 10.846 10.6673 12.3795 12.2004C13.9742 13.7947 14.7186 13.9251 16.1457 13.4264L16.4001 13.338L16.7077 13.2381L16.8423 13.2007C17.9263 12.9115 18.842 13.1423 19.8132 14.1128L21.0269 15.2852L21.3842 15.6366C21.7803 16.0405 22.0421 16.3606 22.2355 16.6989C23.0008 18.0377 22.4893 19.2921 20.5063 21.2677L20.3177 21.4589C20.0216 21.7442 19.745 21.9486 19.3386 22.1416C18.6565 22.4655 17.8506 22.5876 16.9142 22.4573C14.6067 22.1364 11.6802 20.3158 7.97188 16.6085C7.67002 16.3067 7.3809 16.0107 7.10425 15.7205L6.56748 15.1476C1.53762 9.68285 1.09389 6.32588 3.15518 4.2205L3.28872 4.08785ZM7.90641 4.28093C7.58062 3.95973 7.34396 3.76394 7.13532 3.64396C6.67379 3.37856 6.1755 3.49074 5.25329 4.28448L4.96353 4.54334C4.91299 4.59 4.86129 4.63843 4.80838 4.68868L4.47611 5.01231L4.44617 5.04972L4.22091 5.27603C3.67656 5.83204 3.41871 6.51064 3.6409 7.67767C4.00551 9.59269 5.67442 12.1905 9.0324 15.5477C12.5313 19.0456 15.1972 20.7041 17.1208 20.9716C18.2422 21.1276 18.8142 20.856 19.3975 20.2584L19.8424 19.8095C20.051 19.5912 20.2292 19.3933 20.3797 19.2126L20.585 18.9539C21.1097 18.2551 21.1576 17.8358 20.9332 17.4433C20.8479 17.2939 20.7237 17.1302 20.5429 16.93L20.2977 16.671L20.1525 16.5258L18.6213 15.0472C18.1096 14.5753 17.7599 14.5084 17.229 14.65L17.0757 14.6941L16.4414 14.9094C14.6013 15.5037 13.2738 15.2155 11.3189 13.2612C9.29429 11.237 9.05685 9.88537 9.73522 7.93917L9.77874 7.81411L9.89908 7.45153L9.95823 7.22043C10.0631 6.71746 9.94337 6.36677 9.40269 5.82601C9.38043 5.80375 9.35555 5.77866 9.32847 5.7512L7.90641 4.28093Z" fill="black"/>
            </svg>
            <div class="flex flex-col items-start">
              <strong class="text-xl opacity-70">تلفن تماس</strong>
              <span dir="ltr" class="opacity-60">051 - 52329059</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

