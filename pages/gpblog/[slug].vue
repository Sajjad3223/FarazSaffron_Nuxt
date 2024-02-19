<template>
  <div class="flex flex-col lg:flex-row items-start mt-12 lg:space-x-4 lg:space-x-reverse">
    <div class="flex-1 flex flex-col rounded-xl bg-bgWhite drop-shadow-lg border-b-brandOrange border-b-2 p-6">
      <div>
        <ul class="flex items-center space-x-2 space-x-reverse text-xs lg:text-base">
          <li class="opacity-50 font-light">
            <NuxtLink to="/">خانه</NuxtLink>
          </li>
          <li>/</li>
          <li class="opacity-50 font-light">
            <NuxtLink to="/gpblog">مقاله ها</NuxtLink>
          </li>
          <li>/</li>
          <li class="opacity-50 font-light">
            <NuxtLink to="/">زعفران</NuxtLink>
          </li>
          <li>/</li>
          <li class="font-bold">
            <NuxtLink>چگونه زعفران مرغوب را تشخیص دهیم؟</NuxtLink>
          </li>
        </ul>
      </div>
      <base-f-divider color="black" vertical-margin="8"/>
      <h1 class="text-xl lg:text-3xl font-estedad">
        چگونه زعفران مرغوب را تشخیص دهیم؟
      </h1>
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-4">
        <div class="flex items-center">
          <div class="flex items-center">
            <img src="~/assets/images/avatar.png" alt="avatar" class="rounded-full max-w-16">
            <span class="mx-4 text-xs lg:text-base">سجاد میرشبی</span>
          </div>
          <div class="flex items-center font-light text-xs lg:text-base space-x-1 space-x-reverse opacity-50 mr-4 lg:mr-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="w-3 h-3 lg:w-5 lg:h-5">
              <g id="Iconly/Curved/Time Circle">
                <g id="Time Circle">
                  <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.2498 12C21.2498 17.108 17.1088 21.25 11.9998 21.25C6.8918 21.25 2.7498 17.108 2.7498 12C2.7498 6.891 6.8918 2.75 11.9998 2.75C17.1088 2.75 21.2498 6.891 21.2498 12Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path id="Stroke 3" d="M16.1907 12.7672L11.6607 12.6932V7.84619" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </g>
            </svg>
            <time>15 بهمن 1402 | 10:00</time>
          </div>
        </div>
        <div class="w-max text-xs font-light opacity-70 flex items-center space-x-1 space-x-reverse mt-2 lg:mt-0">
          <span>زمان مورد نیاز برای مطالعه: 8 دقیقه</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
            <path d="M20.75 13.25C20.75 18.08 16.83 22 12 22C7.17 22 3.25 18.08 3.25 13.25C3.25 8.42 7.17 4.5 12 4.5C16.83 4.5 20.75 8.42 20.75 13.25Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 8V13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 2H15" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <img src="~/assets/images/blogBanner.jpg" alt="blog banner" class="rounded-lg mt-6 w-full object-cover">
      <div class="my-4 space-y-2">
        <strong>لورم لورم لورم لورم:</strong>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
          سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <strong>لورم لورم لورم لورم:</strong>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
          سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <strong>لورم لورم لورم لورم:</strong>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
          هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
          پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
          سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
          طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
      <div class="self-end mt-4">
        <ul class="flex flex-wrap">
          <li class="scale-50 saturate-0 hover:saturate-100 opacity-70 hover:opacity-100">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_17777)">
                <path
                    d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                    fill="url(#paint0_linear_2_17777)"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M10.8638 23.7466C17.8603 20.6984 22.5257 18.6888 24.86 17.7179C31.5251 14.9456 32.91 14.4641 33.8127 14.4482C34.0113 14.4447 34.4552 14.4939 34.7427 14.7272C34.9855 14.9242 35.0523 15.1904 35.0843 15.3771C35.1163 15.5639 35.1561 15.9895 35.1244 16.3219C34.7632 20.1169 33.2004 29.3263 32.4053 33.5767C32.0689 35.3752 31.4065 35.9783 30.7652 36.0373C29.3714 36.1655 28.3131 35.1162 26.9632 34.2313C24.8509 32.8467 23.6576 31.9847 21.6072 30.6336C19.2377 29.0721 20.7737 28.2139 22.1241 26.8113C22.4775 26.4442 28.6183 20.8587 28.7372 20.352C28.7521 20.2886 28.7658 20.0524 28.6255 19.9277C28.4852 19.803 28.2781 19.8456 28.1286 19.8795C27.9167 19.9276 24.5423 22.158 18.0053 26.5707C17.0474 27.2284 16.1799 27.5489 15.4026 27.5321C14.5456 27.5135 12.8973 27.0475 11.6719 26.6492C10.1689 26.1606 8.9743 25.9023 9.07832 25.0726C9.1325 24.6404 9.72765 24.1984 10.8638 23.7466Z"
                      fill="white"/>
              </g>
              <defs>
                <linearGradient id="paint0_linear_2_17777" x1="24" y1="0" x2="24" y2="47.644"
                                gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2AABEE" offset="0"/>
                  <stop offset="1" stop-color="#229ED9"/>
                </linearGradient>
                <clipPath id="clip0_2_17777">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>

          </li>
          <li class="scale-50 saturate-0 hover:saturate-100 opacity-70 hover:opacity-100">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_17711)">
                <path
                    d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z"
                    fill="#1877F2"/>
                <path
                    d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.602 28.68 15.75 31.6613 15.75H34.6875V9.84375C34.6875 9.84375 31.9411 9.375 29.3152 9.375C23.8331 9.375 20.25 12.6975 20.25 18.7125V24H14.1562V30.9375H20.25V47.7084C22.7349 48.0972 25.2651 48.0972 27.75 47.7084V30.9375H33.3422Z"
                    fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_2_17711">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </li>
          <li class="scale-50 saturate-0 hover:saturate-100 opacity-70 hover:opacity-100">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_17721)">
                <path
                    d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                    fill="#0A66C2"/>
              </g>
              <defs>
                <clipPath id="clip0_2_17721">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </li>
          <li class="scale-50 saturate-0 hover:saturate-100 opacity-70 hover:opacity-100">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_17723)">
                <path d="M47.5321 24.5528C47.5321 22.9214 47.3998 21.2811 47.1176 19.6761H24.48V28.9181H37.4435C36.9055 31.8988 35.1771 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.5321 31.8547 47.5321 24.5528Z" fill="#4285F4"/>
                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3889 42.2078L32.6549 36.2111C30.5031 37.675 27.7253 38.5039 24.4888 38.5039C18.2276 38.5039 12.9187 34.2798 11.0139 28.6006H3.03299V34.7825C7.10721 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853"/>
                <path d="M11.0051 28.6006C9.99976 25.6199 9.99976 22.3922 11.0051 19.4115V13.2296H3.03301C-0.37099 20.0112 -0.37099 28.0009 3.03301 34.7825L11.0051 28.6006Z" fill="#FBBC04"/>
                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6867 13.0973L40.5388 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4056 0.00161733 7.10721 5.11644 3.03299 13.2296L11.0051 19.4115C12.9011 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335"/>
              </g>
              <defs>
                <clipPath id="clip0_2_17723">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </li>
          <li class="scale-50 saturate-0 hover:saturate-100 opacity-70 hover:opacity-100">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_17716)">
                <path
                    d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                    fill="#000100"/>
                <path
                    d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                    fill="#000100"/>
                <path
                    d="M39.6937 11.1844C39.6937 12.7782 38.4 14.0625 36.8156 14.0625C35.2219 14.0625 33.9375 12.7688 33.9375 11.1844C33.9375 9.59065 35.2313 8.30627 36.8156 8.30627C38.4 8.30627 39.6937 9.60003 39.6937 11.1844Z"
                    fill="#000100"/>
              </g>
              <defs>
                <clipPath id="clip0_2_17716">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </li>
          <li class="scale-50 saturate-0 hover:saturate-100 opacity-70 hover:opacity-100">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937"
                  fill="#1DA1F2"/>
            </svg>

          </li>
        </ul>
      </div>
      <base-f-divider color="black" vertical-margin="8"/>

      <div class="flex flex-wrap gap-2">
        <span>برچسب ها:</span>
        <ul class="flex flex-wrap gap-2">
          <li class="bg-secondary/30 text-xs font-light px-2 py-1 rounded-md grid place-items-center">زعفران</li>
          <li class="bg-secondary/30 text-xs font-light px-2 py-1 rounded-md grid place-items-center">جی پی</li>
          <li class="bg-secondary/30 text-xs font-light px-2 py-1 rounded-md grid place-items-center">زعفران نگین</li>
          <li class="bg-secondary/30 text-xs font-light px-2 py-1 rounded-md grid place-items-center">فراز</li>
          <li class="bg-secondary/30 text-xs font-light px-2 py-1 rounded-md grid place-items-center">پسته</li>
          <li class="bg-secondary/30 text-xs font-light px-2 py-1 rounded-md grid place-items-center">مرغوب</li>
          <li class="bg-secondary/30 text-xs font-light px-2 py-1 rounded-md grid place-items-center">زعفران مرغوب</li>
        </ul>
      </div>

      <base-f-divider color="black" vertical-margin="8"/>

      <strong class="text-xl border-b-2 border-b-brandOrange w-max pb-2 pl-6 mt-6">نظرات کاربران</strong>
      <div class="w-full flex mt-8">
        <div class="flex-1 lg:pr-10 lg:border-r-4 border-brandOrange/50">
          <ul class="flex-flex-col space-y-6">
            <li class="w-full flex flex-col pb-6 border-b-2 last:border-none" v-for="i in 5" :key="i">
              <div class="flex justify-between items-start">
                <div class="flex items-center">
                  <strong class="lg:text-xl">سجاد میرشبی</strong>
                  <div class="bg-black w-px h-6 mx-6 opacity-30"></div>
                  <small class="opacity-70">8 بهمن 1402</small>
                </div>
                <div class="relative">
                  <button @click="showOptions = !showOptions">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <div class="flex flex-col absolute w-max min-w-32 max-w-48 bg-bgWhite drop-shadow rounded-lg p-2 space-y-2 left-5 top-5" v-if="showOptions">
                    <ul class="space-y-2 w-full">
                      <li class="hover:bg-gray-100 transition cursor-pointer p-1 rounded-lg px-2">ویرایش</li>
                      <li class="hover:bg-gray-100 transition cursor-pointer p-1 rounded-lg px-2">حذف</li>
                    </ul>
                    <hr>
                    <ul class="space-y-2 w-full">
                      <li class="hover:bg-gray-100 transition cursor-pointer p-1 rounded-lg px-2">گزارش نظر</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p class="mt-4 font-estedad font-normal leading-relaxed text-justify text-sm lg:text-base">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارها.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-3">
      <form class="flex flex-col space-y-2">
        <strong class="text-xl border-b-2 border-b-brandOrange w-max pb-2 pl-6 mt-6">ثبت نظر جدید</strong>
        <textarea name="" id="" cols="30" rows="4" class="border rounded-lg p-3" placeholder="نظر خود را بنویسید ..."></textarea>
        <div class="grid grid-cols-2 gap-4">
          <input type="text" placeholder="نام*" class="bg-bgWhite border rounded-lg py-2 px-4">
          <input type="email" placeholder="ایمیل*" class="bg-bgWhite border rounded-lg py-2 px-4">
        </div>
        <button class="bg-primary text-white px-4 py-2 rounded-lg">
          ارسال نظر
        </button>
      </form>
    </div>

    <div class="w-full lg:w-1/4 mt-8 lg:mt-0 flex flex-col space-y-4">
      <div class="w-full p-4 border rounded-xl flex flex-col">
        <h4 class="text-lg font-bold">
          مقالات اخیر
        </h4>
        <hr class="my-3">
        <ul class="space-y-4">
          <li class="flex flex-col items-center pb-4 border-b">
            <NuxtLink to="/gpblog/post" class="w-1/2">
              <img src="~/assets/images/blogBanner.jpg" alt="blog banner" class="w-full aspect-square object-cover rounded-xl">
            </NuxtLink>
            <div class="flex items-center space-x-1 space-x-reverse opacity-50 mt-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2498 12C21.2498 17.108 17.1088 21.25 11.9998 21.25C6.8918 21.25 2.7498 17.108 2.7498 12C2.7498 6.891 6.8918 2.75 11.9998 2.75C17.1088 2.75 21.2498 6.891 21.2498 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.1907 12.7672L11.6607 12.6932V7.84619" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <time class="text-sm">1402/08/01</time>
            </div>
            <NuxtLink to="/gpblog/post" class=" font-bold text-brandOrange hover:underline underline-offset-4">
              زعفران در چه محیطی به عمل می‌آید؟
            </NuxtLink>
          </li>
          <li class="flex items-center overflow-hidden " v-for="i in 3" :key="i">
            <NuxtLink to="/gpblog/post" class="w-1/5">
              <img src="~/assets/images/blogBanner.jpg" alt="blog banner" class="w-full aspect-square object-cover rounded-xl">
            </NuxtLink>
            <div class="flex-1 p-1 px-2 flex flex-col space-y-1 overflow-hidden">
              <NuxtLink to="/gpblog/post" class="text-sm font-bold text-brandOrange hover:underline underline-offset-4">
                زعفران در چه محیطی به عمل می‌آید؟
              </NuxtLink>
              <div class="flex items-center space-x-1 space-x-reverse opacity-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-75">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2498 12C21.2498 17.108 17.1088 21.25 11.9998 21.25C6.8918 21.25 2.7498 17.108 2.7498 12C2.7498 6.891 6.8918 2.75 11.9998 2.75C17.1088 2.75 21.2498 6.891 21.2498 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.1907 12.7672L11.6607 12.6932V7.84619" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <time class="text-xs">1402/08/01</time>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full p-4 border rounded-xl flex flex-col">
        <h4 class="text-lg font-bold">
          دسته بندی ها
        </h4>
        <hr class="my-3">
        <ul class="space-y-6 list-disc mr-6">
          <li class="font-light space-y-2" v-for="x in 3" :key="x">
            <span>زعفران (5)</span>
            <ul class="space-y-3 list-disc mr-6">
              <li class="font-light text-sm" v-for="i in 3" :key="i">
                زعفران (3)
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const showOptions = ref(false);
</script>