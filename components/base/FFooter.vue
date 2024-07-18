<template>
  <footer class="w-full mt-24 border-t border-[#E8E8E8]" v-if="false">
    <div class="container px-24 3xl:px-0 mt-16 flex flex-col mx-auto">
      <div class="w-full grid lg:grid-cols-2 gap-16">
        <div class="flex flex-col items-start ">
          <div class="flex items-center gap-6 mb-14">
            <div class="flex flex-col items-center text-2xl leading-6">
              <span class="text-[#B0B0B0]">دربـــــــــاره</span>
              <strong class="font-black text-[#474747]">جـــی پــــی</strong>
            </div>
            <div class="bg-brandOrange rounded-lg w-14 h-14 grid place-items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7"
                   style="filter:drop-shadow(0 0 5px rgba(246, 246, 246, 0.5))">>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8.92574 16.39H14.3119C14.7178 16.39 15.0545 16.05 15.0545 15.64C15.0545 15.23 14.7178 14.9 14.3119 14.9H8.92574C8.5198 14.9 8.18317 15.23 8.18317 15.64C8.18317 16.05 8.5198 16.39 8.92574 16.39ZM12.2723 9.9H8.92574C8.5198 9.9 8.18317 10.24 8.18317 10.65C8.18317 11.06 8.5198 11.39 8.92574 11.39H12.2723C12.6782 11.39 13.0149 11.06 13.0149 10.65C13.0149 10.24 12.6782 9.9 12.2723 9.9ZM19.3381 9.02561C19.5708 9.02292 19.8242 9.02 20.0545 9.02C20.302 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5099 22 16.0545 22H8.17327C5.59901 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.96535 2H13.2525C13.5099 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.203 9.01 17.0149 9.02C17.4381 9.02 17.8112 9.02316 18.1377 9.02593C18.3917 9.02809 18.6175 9.03 18.8168 9.03C18.9578 9.03 19.1405 9.02789 19.3381 9.02561ZM19.6111 7.566C18.7972 7.569 17.8378 7.566 17.1477 7.559C16.0527 7.559 15.1507 6.648 15.1507 5.542V2.906C15.1507 2.475 15.6685 2.261 15.9646 2.572C16.5004 3.13476 17.2368 3.90834 17.9699 4.67837C18.7009 5.44632 19.4286 6.21074 19.9507 6.759C20.2398 7.062 20.0279 7.565 19.6111 7.566Z"
                      fill="#F6F6F6"/>
              </svg>
            </div>
          </div>
          <p class="text-sm text-justify 2xl:pl-24 text-[#666666]">
            سرآغاز ما با یک هدف و باور سهل و دست یافتنی شکل گرفت؛ تهیه و عرضه زعفران ناب به مصرف کنندگان(چهانیان، دنیا)!
            با این توصیف ما به یک شرکت بین المللی تبدیل شدیم و حال تعهد ما به کیفیت، امری ناگسستنی خواهد بود.
            داستان ما با یک اشتیاق ساده آغاز شد:
          </p>
          <NuxtLink to="/aboutUs" class="flex mt-2.5 text-sm items-center gap-2">
            <span class="text-brandOrange">مطالعه بیشتر</span>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M3 8.32048C1.66667 7.55068 1.66667 5.62618 3 4.85638L6.88249 2.61482C8.21583 1.84502 9.8825 2.80727 9.8825 4.34687V8.82998C9.8825 10.3696 8.21583 11.3318 6.8825 10.562L3 8.32048Z"
                  fill="#F14823"/>
              <path
                  d="M11.2969 6.58904C11.2969 6.40946 11.4298 6.25762 11.6078 6.23389L15.0695 5.77233C15.5634 5.70647 16.0023 6.09073 16.0023 6.58904C16.0023 7.08736 15.5634 7.47162 15.0695 7.40576L11.6078 6.9442C11.4298 6.92047 11.2969 6.76863 11.2969 6.58904Z"
                  fill="#F14823"/>
            </svg>
          </NuxtLink>
          <div class="w-3/5 mx-auto flex items-center justify-around mt-4">
            <!--  Telegram  -->
            <a href="https://t.me/gp_saffron" target="_blank"
               class="w-14 h-14 logo-rotate text-[#7A7A7A] hover:text-[#F6F6F6] rounded-full bg-[#F4F4F4] grid place-items-center hover:bg-[#2AABEE] transition-all duration-300 cursor-pointer">
              <svg class="w-5" width="48" height="48" viewBox="0 0 48 48" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.29975 20.6637C16.1846 13.8898 24.7766 9.42401 29.0756 7.26636C41.3501 1.10586 43.9006 0.0357136 45.563 0.00037677C45.9286 -0.00739518 46.7462 0.101946 47.2757 0.620448C47.7229 1.05826 47.8459 1.64969 47.9048 2.06478C47.9636 2.47988 48.0369 3.42548 47.9787 4.16434C47.3135 12.5976 44.4354 33.0629 42.9711 42.5083C42.3516 46.505 41.1316 47.8451 39.9506 47.9762C37.3838 48.2612 35.4348 45.9294 32.9488 43.963C29.0587 40.886 26.8611 38.9706 23.0851 35.968C18.7213 32.498 21.5502 30.5908 24.0371 27.474C24.6879 26.6583 35.9969 14.246 36.2158 13.12C36.2432 12.9792 36.2686 12.4543 36.0101 12.1771C35.7517 11.8999 35.3703 11.9947 35.095 12.0701C34.7049 12.177 28.4904 17.1334 16.4517 26.9393C14.6877 28.4009 13.09 29.1131 11.6585 29.0757C10.0804 29.0346 7.04466 27.999 4.78794 27.1139C2.01998 26.0282 -0.179935 25.4541 0.0116285 23.6103C0.111407 22.6499 1.20745 21.6677 3.29975 20.6637Z"
                      fill="currentColor"/>
              </svg>
            </a>
            <!--  Instagram  -->
            <a href="https://www.instagram.com/gp_saffron" target="_blank"
               class="w-14 h-14 relative logo-rotate text-[#7A7A7A] hover:text-[#F6F6F6] rounded-full bg-[#F4F4F4] grid place-items-center group transition-all duration-300 cursor-pointer">
              <svg class="relative z-10 w-5" width="48" height="48" viewBox="0 0 48 48" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_569_2177)">
                  <path
                      d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z"
                      fill="currentColor"/>
                  <path
                      d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z"
                      fill="currentColor"/>
                  <path
                      d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z"
                      fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_569_2177">
                    <rect width="48" height="48" fill="currentColor"/>
                  </clipPath>
                </defs>
              </svg>
              <span class="bg-gradient-to-r from-[#E63BB0] to-[#EFB243] absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"></span>
            </a>
            <!--  Youtube  -->
            <a href="https://www.youtube.com/@gpsaffron" target="_blank"
               class="w-14 h-14 logo-rotate text-[#7A7A7A] hover:text-[#F6F6F6] rounded-full bg-[#F4F4F4] grid place-items-center hover:bg-[#FF0302] transition-all duration-300 cursor-pointer">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25.741 7.8002C25.741 7.8002 25.4871 6.00762 24.7051 5.22051C23.7148 4.18457 22.6078 4.17949 22.1 4.11855C18.4641 3.85449 13.0051 3.85449 13.0051 3.85449H12.9949C12.9949 3.85449 7.53594 3.85449 3.9 4.11855C3.39219 4.17949 2.28516 4.18457 1.29492 5.22051C0.512891 6.00762 0.264062 7.8002 0.264062 7.8002C0.264062 7.8002 0 9.90762 0 12.01V13.9803C0 16.0826 0.258984 18.19 0.258984 18.19C0.258984 18.19 0.512891 19.9826 1.28984 20.7697C2.28008 21.8057 3.58008 21.7701 4.15898 21.8818C6.24102 22.0799 13 22.1408 13 22.1408C13 22.1408 18.4641 22.1307 22.1 21.8717C22.6078 21.8107 23.7148 21.8057 24.7051 20.7697C25.4871 19.9826 25.741 18.19 25.741 18.19C25.741 18.19 26 16.0877 26 13.9803V12.01C26 9.90762 25.741 7.8002 25.741 7.8002ZM10.3137 16.3721V9.06465L17.3367 12.7311L10.3137 16.3721Z"
                    fill="currentColor"/>
              </svg>
            </a>
            <!--  Whatsapp  -->
            <a href="https://wa.me/+989912937952" target="_blank"
               class="w-14 h-14 logo-rotate text-[#7A7A7A] hover:text-[#F6F6F6] rounded-full bg-[#F4F4F4] grid place-items-center hover:bg-[#00D95F] transition-all duration-300 cursor-pointer">
              <svg class="w-5" width="48" height="48" viewBox="0 0 48 48" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z"
                    fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col items-start ">
          <div class="flex items-center gap-6 mb-14">
            <div class="flex flex-col items-center text-2xl leading-6">
              <span class="text-[#B0B0B0]">تمــاس</span>
              <strong class="font-black text-[#474747]">با مـــــــا</strong>
            </div>
            <div class="bg-brandOrange rounded-lg w-14 h-14 grid place-items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7"
                   style="filter:drop-shadow(0 0 5px rgba(246, 246, 246, 0.5))">
                <path
                    d="M14.4183 5.48976C13.9422 5.40182 13.505 5.70561 13.4144 6.17029C13.3238 6.63497 13.6285 7.08866 14.0916 7.1796C15.4859 7.45141 16.5624 8.53067 16.8353 9.92971V9.93071C16.913 10.3334 17.2675 10.6262 17.6759 10.6262C17.7306 10.6262 17.7854 10.6212 17.8412 10.6112C18.3043 10.5183 18.609 10.0656 18.5184 9.59994C18.1111 7.51037 16.5027 5.89648 14.4183 5.48976Z"
                    fill="#F6F6F6"/>
                <path
                    d="M14.3558 2.00793C14.1328 1.97595 13.9087 2.04191 13.7304 2.18381C13.5472 2.32771 13.4326 2.53557 13.4078 2.76841C13.355 3.23908 13.6946 3.66479 14.1646 3.71776C17.4063 4.07951 19.9259 6.60477 20.2904 9.85654C20.3392 10.2922 20.7047 10.621 21.1409 10.621C21.1738 10.621 21.2057 10.619 21.2385 10.615C21.4666 10.59 21.6698 10.4771 21.8132 10.2972C21.9556 10.1174 22.0203 9.89351 21.9944 9.66467C21.5403 5.60746 18.4002 2.45862 14.3558 2.00793Z"
                    fill="#F6F6F6"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.0317 12.9724C15.0208 16.9604 15.9258 12.3467 18.4656 14.8848C20.9143 17.3328 22.3216 17.8232 19.2192 20.9247C18.8306 21.237 16.3616 24.9943 7.6846 16.3197C-0.993478 7.644 2.76158 5.17244 3.07397 4.78395C6.18387 1.67385 6.66586 3.08938 9.11449 5.53733C11.6544 8.0765 7.04266 8.98441 11.0317 12.9724Z"
                      fill="#F6F6F6"/>
              </svg>
            </div>
            <div class="flex flex-col 2xl:flex-row 2xl:items-center gap-1 2xl:gap-4 mr-12">
              <span dir="ltr" class="text-xl 2xl:text-2xl text-[#B0B0B0] font-medium"
                      style="font-family: 'Vazir FD',serif;">
                051 - 52329059
              </span>
              <span class="text-brandOrange text-2xl hidden 2xl:block">,</span>
              <span dir="ltr" class="text-xl 2xl:text-2xl text-[#B0B0B0] font-medium"
                      style="font-family: 'Vazir FD',serif;">
                0991 - 2937952
              </span>
            </div>
          </div>
          <div class="flex items-center gap-5">
            <div class="w-14 h-14 bg-[#F4F4F4] rounded-full grid place-items-center ">
              <img src="~/assets/images/icons/location.png" alt="location" class="w-7">
            </div>
            <span class="text-[#8D8D8D] font-light">استان خراسان رضوی - شهرستان تربت حیدریه - کیلومتر 2 جاده بایگ <br> ساختمان جی پی سافرون</span>
          </div>
          <div class="flex items-center gap-5 mt-8">
            <div class="w-14 h-14 bg-[#F4F4F4] rounded-full grid place-items-center ">
              <img src="~/assets/images/icons/email.png" alt="email" class="w-7">
            </div>
            <span class="text-[#8D8D8D] font-normal" style="font-family: Montserrat,serif"> info@gpsaffron.com </span>
          </div>
        </div>
      </div>
      <div
          class="w-full rounded-xl bg-[#F8F8F8] mt-9 px-16 pt-14 pb-3 mb-8 grid grid-cols-5 lg:grid-cols-7 2xl:grid-cols-8 gap-6 justify-items-center items-start">
        <img src="~/assets/images/gp-orange-cutted.png" alt="gp orange">
        <div class="col-span-4 lg:col-span-4 2xl:col-span-5 grid grid-cols-3 gap-6">
          <div class="flex flex-col items-start">
            <h4 class="font-bold text-sm 2xl:text-xl">بخش های سایت</h4>
            <ul class="flex flex-col items-start text-[#666666] text-xs 2xl:text-sm font-light pr-5 list-disc space-y-2 mt-3">
              <li>
                <NuxtLink to="/">صفحه اصلی</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/market">فروشگاه</NuxtLink>
              </li>
<!--              <li>
                <a :href="BLOGS_URL" target="_blank">مقالات</a>
              </li>-->
              <li>
                <NuxtLink to="/contactus">تماس با ما</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/aboutus">درباره ما</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start">
            <h4 class="font-bold text-sm 2xl:text-xl">خدمات مشتریان</h4>
            <ul class="flex flex-col items-start text-[#666666] text-xs 2xl:text-sm font-light pr-5 list-disc space-y-2 mt-3">
              <li>
                <NuxtLink to="/">پرسش های متداول</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">رویه بازگرداندن کالا</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">حریم خصوصی</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start">
            <h4 class="font-bold text-sm 2xl:text-xl">راه های خرید از جی پی</h4>
            <ul class="flex flex-col items-start text-[#666666] text-xs 2xl:text-sm font-light pr-5 list-disc space-y-2 mt-3">
              <li>
                <NuxtLink to="/">نحوه ثبت سفارش</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">رویه ارسال سفارش</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">شیوه های پرداخت</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid col-span-full grid-cols-3 gap-4 lg:col-span-2">
          <!--   Salamat Logo   -->
          <div class="border rounded-full border-[#666666]/20 aspect-square grid place-items-center relative w-full">
            <img src="~/assets/images/salamat.png" alt="salamat" class="w-3/4 2xl:-translate-y-4">
            <span class="absolute bottom-4 text-xs font-light pointer-events-none hidden 2xl:block">
            57/1018-1
            </span>
          </div>
          <!--   ENamad   -->
          <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=481420&Code=cCu16exHbafArcoXSU1XBlvGhdU7Fkzn' class="relative border rounded-full border-[#666666]/20 aspect-square grid place-items-center w-full">
            <img referrerpolicy='origin'
                 src='https://trustseal.enamad.ir/logo.aspx?id=479170&Code=WVFCiesdEuQgDFJzHNFz2DyAJhkoExWQ'
                 alt='Enamad' style='cursor:pointer' Code='WVFCiesdEuQgDFJzHNFz2DyAJhkoExWQ'
                 class="w-3/4 opacity-0 absolute">
            <img src="~/assets/images/enamad.png" alt="enamad" class="w-3/4" Code='WVFCiesdEuQgDFJzHNFz2DyAJhkoExWQ'>
          </a>
          <!--   Standard  -->
          <div
              class="border rounded-full border-[#666666]/20 aspect-square grid place-items-center relative p-4 w-full overflow-hidden">
            <img src="~/assets/images/standard.png" alt="standard" class="w-1/2">
          </div>
        </div>
        <div class="col-span-full text-center text-xs 2xl:text-sm font-light 2xl:mt-7 pb-2">
            <span class="flex gap-2 justify-center">
              برای استفاده از مطالب جی پی، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت فراز زعفران تربت حیدریه <NuxtLink
                to="/"><strong class="font-black">(فروشگاه آنلاین جی پی)</strong></NuxtLink> است.
            </span>
        </div>
      </div>
    </div>
  </footer>

  <footer class="pt-[90px] bg-[#DCE4DB]/50" v-else>
    <div class="container mx-auto">
      <div class="flex items-start w-full justify-between">
        <div class="flex flex-col">
          <div class="flex items-center gap-5">
            <div class="w-[50px] h-[50px] bg-[#FB7511] rounded-full grid place-items-center">
              <img src="~/assets/images/gp-alone-white.png" alt="gp" class="w-2/3">
            </div>
            <span class="text-2xl">زعفران جی پی</span>
          </div>
          <hr class="mt-12 mb-4 border-[#818C92]/20">
          <div class="flex items-center gap-4">
            <!--  Telegram  -->
            <a href="https://t.me/gp_saffron" target="_blank">
              <svg class="w-5" opacity="0.5" width="48" height="48" viewBox="0 0 48 48" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.29975 20.6637C16.1846 13.8898 24.7766 9.42401 29.0756 7.26636C41.3501 1.10586 43.9006 0.0357136 45.563 0.00037677C45.9286 -0.00739518 46.7462 0.101946 47.2757 0.620448C47.7229 1.05826 47.8459 1.64969 47.9048 2.06478C47.9636 2.47988 48.0369 3.42548 47.9787 4.16434C47.3135 12.5976 44.4354 33.0629 42.9711 42.5083C42.3516 46.505 41.1316 47.8451 39.9506 47.9762C37.3838 48.2612 35.4348 45.9294 32.9488 43.963C29.0587 40.886 26.8611 38.9706 23.0851 35.968C18.7213 32.498 21.5502 30.5908 24.0371 27.474C24.6879 26.6583 35.9969 14.246 36.2158 13.12C36.2432 12.9792 36.2686 12.4543 36.0101 12.1771C35.7517 11.8999 35.3703 11.9947 35.095 12.0701C34.7049 12.177 28.4904 17.1334 16.4517 26.9393C14.6877 28.4009 13.09 29.1131 11.6585 29.0757C10.0804 29.0346 7.04466 27.999 4.78794 27.1139C2.01998 26.0282 -0.179935 25.4541 0.0116285 23.6103C0.111407 22.6499 1.20745 21.6677 3.29975 20.6637Z"
                      fill="currentColor"/>
              </svg>
            </a>
            <!--         Facebook
                    <a href="">
                      <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.5" clip-path="url(#clip0_2033_13841)">
                          <path d="M8 0C3.58176 0 0 3.58176 0 8C0 11.7517 2.58304 14.8998 6.06752 15.7645V10.4448H4.41792V8H6.06752V6.94656C6.06752 4.22368 7.29984 2.9616 9.97312 2.9616C10.48 2.9616 11.3546 3.06112 11.7123 3.16032V5.37632C11.5235 5.35648 11.1955 5.34656 10.7882 5.34656C9.47648 5.34656 8.9696 5.84352 8.9696 7.13536V8H11.5827L11.1338 10.4448H8.9696V15.9414C12.9309 15.463 16.0003 12.0902 16.0003 8C16 3.58176 12.4182 0 8 0Z" fill="#18110A"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_2033_13841">
                            <rect class="w-5" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>-->
            <!-- Whatsapp  -->
            <a href="https://wa.me/+989912937952">
              <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M0 16L1.12466 11.8913C0.430666 10.6886 0.0659999 9.32531 0.0666665 7.92732C0.0686665 3.55666 3.62533 0 7.99532 0C10.116 0.000666665 12.1066 0.826665 13.604 2.32533C15.1006 3.82399 15.9246 5.81599 15.924 7.93465C15.922 12.306 12.3653 15.8626 7.99532 15.8626C6.66865 15.862 5.36132 15.5293 4.20332 14.8973L0 16ZM4.39799 13.462C5.51532 14.1253 6.58198 14.5226 7.99265 14.5233C11.6246 14.5233 14.5833 11.5673 14.5853 7.93332C14.5866 4.29199 11.642 1.34 7.99798 1.33866C4.36332 1.33866 1.40666 4.29466 1.40533 7.92798C1.40466 9.41131 1.83933 10.522 2.56933 11.684L1.90333 14.116L4.39799 13.462ZM11.9893 9.81931C11.94 9.73665 11.808 9.68731 11.6093 9.58798C11.4113 9.48865 10.4373 9.00931 10.2553 8.94331C10.074 8.87731 9.94198 8.84398 9.80931 9.04265C9.67731 9.24065 9.29731 9.68731 9.18198 9.81931C9.06665 9.95131 8.95065 9.96798 8.75265 9.86865C8.55465 9.76931 7.91598 9.56065 7.15932 8.88531C6.57065 8.35998 6.17265 7.71132 6.05732 7.51265C5.94199 7.31465 6.04532 7.20732 6.14399 7.10865C6.23332 7.01998 6.34199 6.87732 6.44132 6.76132C6.54199 6.64665 6.57465 6.56399 6.64132 6.43132C6.70732 6.29932 6.67465 6.18332 6.62465 6.08399C6.57465 5.98532 6.17865 5.00999 6.01399 4.61332C5.85265 4.22732 5.68932 4.27932 5.56799 4.27332L5.18799 4.26666C5.05599 4.26666 4.84132 4.31599 4.65999 4.51466C4.47866 4.71332 3.96666 5.19199 3.96666 6.16732C3.96666 7.14265 4.67666 8.08465 4.77532 8.21665C4.87466 8.34865 6.17199 10.35 8.15932 11.208C8.63198 11.412 9.00131 11.534 9.28865 11.6253C9.76331 11.776 10.1953 11.7546 10.5366 11.704C10.9173 11.6473 11.7086 11.2246 11.874 10.762C12.0393 10.2986 12.0393 9.90198 11.9893 9.81931Z" fill="#18110A"/>
                </g>
              </svg>
            </a>
            <!-- Instagram  -->
            <a href="https://www.instagram.com/gp_saffron">
              <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5" clip-path="url(#clip0_2033_13839)">
                  <path d="M8 1.44062C10.1375 1.44062 10.3906 1.45 11.2313 1.4875C12.0125 1.52187 12.4344 1.65313 12.7156 1.7625C13.0875 1.90625 13.3563 2.08125 13.6344 2.35938C13.9156 2.64062 14.0875 2.90625 14.2313 3.27813C14.3406 3.55938 14.4719 3.98438 14.5063 4.7625C14.5438 5.60625 14.5531 5.85938 14.5531 7.99375C14.5531 10.1313 14.5438 10.3844 14.5063 11.225C14.4719 12.0063 14.3406 12.4281 14.2313 12.7094C14.0875 13.0813 13.9125 13.35 13.6344 13.6281C13.3531 13.9094 13.0875 14.0813 12.7156 14.225C12.4344 14.3344 12.0094 14.4656 11.2313 14.5C10.3875 14.5375 10.1344 14.5469 8 14.5469C5.8625 14.5469 5.60938 14.5375 4.76875 14.5C3.9875 14.4656 3.56563 14.3344 3.28438 14.225C2.9125 14.0813 2.64375 13.9063 2.36563 13.6281C2.08438 13.3469 1.9125 13.0813 1.76875 12.7094C1.65938 12.4281 1.52813 12.0031 1.49375 11.225C1.45625 10.3813 1.44688 10.1281 1.44688 7.99375C1.44688 5.85625 1.45625 5.60313 1.49375 4.7625C1.52813 3.98125 1.65938 3.55938 1.76875 3.27813C1.9125 2.90625 2.0875 2.6375 2.36563 2.35938C2.64688 2.07812 2.9125 1.90625 3.28438 1.7625C3.56563 1.65313 3.99063 1.52187 4.76875 1.4875C5.60938 1.45 5.8625 1.44062 8 1.44062ZM8 0C5.82813 0 5.55625 0.009375 4.70313 0.046875C3.85313 0.084375 3.26875 0.221875 2.7625 0.41875C2.23438 0.625 1.7875 0.896875 1.34375 1.34375C0.896875 1.7875 0.625 2.23438 0.41875 2.75938C0.221875 3.26875 0.084375 3.85 0.046875 4.7C0.009375 5.55625 0 5.82812 0 8C0 10.1719 0.009375 10.4438 0.046875 11.2969C0.084375 12.1469 0.221875 12.7313 0.41875 13.2375C0.625 13.7656 0.896875 14.2125 1.34375 14.6562C1.7875 15.1 2.23438 15.375 2.75938 15.5781C3.26875 15.775 3.85 15.9125 4.7 15.95C5.55313 15.9875 5.825 15.9969 7.99688 15.9969C10.1688 15.9969 10.4406 15.9875 11.2938 15.95C12.1438 15.9125 12.7281 15.775 13.2344 15.5781C13.7594 15.375 14.2063 15.1 14.65 14.6562C15.0938 14.2125 15.3688 13.7656 15.5719 13.2406C15.7688 12.7313 15.9063 12.15 15.9438 11.3C15.9813 10.4469 15.9906 10.175 15.9906 8.00313C15.9906 5.83125 15.9813 5.55938 15.9438 4.70625C15.9063 3.85625 15.7688 3.27188 15.5719 2.76562C15.375 2.23438 15.1031 1.7875 14.6563 1.34375C14.2125 0.9 13.7656 0.625 13.2406 0.421875C12.7313 0.225 12.15 0.0875 11.3 0.05C10.4438 0.009375 10.1719 0 8 0Z" fill="#18110A"/>
                  <path d="M8 3.89062C5.73125 3.89062 3.89062 5.73125 3.89062 8C3.89062 10.2688 5.73125 12.1094 8 12.1094C10.2688 12.1094 12.1094 10.2688 12.1094 8C12.1094 5.73125 10.2688 3.89062 8 3.89062ZM8 10.6656C6.52813 10.6656 5.33437 9.47188 5.33437 8C5.33437 6.52813 6.52813 5.33437 8 5.33437C9.47188 5.33437 10.6656 6.52813 10.6656 8C10.6656 9.47188 9.47188 10.6656 8 10.6656Z" fill="#18110A"/>
                  <path d="M13.2312 3.72811C13.2312 4.25936 12.8 4.68749 12.2719 4.68749C11.7406 4.68749 11.3125 4.25624 11.3125 3.72811C11.3125 3.19686 11.7438 2.76874 12.2719 2.76874C12.8 2.76874 13.2312 3.19999 13.2312 3.72811Z" fill="#18110A"/>
                </g>
                <defs>
                  <clipPath id="clip0_2033_13839">
                    <rect class="w-5" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <!-- X  -->
            <a href="https://twitter.com/gpsaffron">
              <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M12.2174 1.26929H14.4663L9.55298 6.88495L15.3332 14.5266H10.8073L7.26253 9.89198L3.20647 14.5266H0.956125L6.21146 8.52002L0.666504 1.26929H5.30724L8.51143 5.50551L12.2174 1.26929ZM11.428 13.1805H12.6742L4.6301 2.54471H3.29281L11.428 13.1805Z" fill="#18110A"/>
                </g>
              </svg>
            </a>
            <!-- Youtube  -->
            <a href="https://www.youtube.com/@gpsaffron">
              <svg class="w-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M15.8406 4.80001C15.8406 4.80001 15.6844 3.69689 15.2031 3.21251C14.5938 2.57501 13.9125 2.57189 13.6 2.53439C11.3625 2.37189 8.00313 2.37189 8.00313 2.37189H7.99687C7.99687 2.37189 4.6375 2.37189 2.4 2.53439C2.0875 2.57189 1.40625 2.57501 0.796875 3.21251C0.315625 3.69689 0.1625 4.80001 0.1625 4.80001C0.1625 4.80001 0 6.09689 0 7.39064V8.60314C0 9.89689 0.159375 11.1938 0.159375 11.1938C0.159375 11.1938 0.315625 12.2969 0.79375 12.7813C1.40313 13.4188 2.20313 13.3969 2.55938 13.4656C3.84063 13.5875 8 13.625 8 13.625C8 13.625 11.3625 13.6188 13.6 13.4594C13.9125 13.4219 14.5938 13.4188 15.2031 12.7813C15.6844 12.2969 15.8406 11.1938 15.8406 11.1938C15.8406 11.1938 16 9.90001 16 8.60314V7.39064C16 6.09689 15.8406 4.80001 15.8406 4.80001ZM6.34688 10.075V5.57814L10.6687 7.83439L6.34688 10.075Z" fill="#18110A"/>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col space-y-7">
          <strong class="text-xl">صفحات سایت</strong>
          <ul class="flex flex-col space-y-5">
            <li>
              <NuxtLink to="/" class="opacity-60">
                صفحه اصلی
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market" class="opacity-60">
                محصولات
              </NuxtLink>
            </li>
            <li>
              <a :href="BLOGS_URL" class="opacity-60">
                مقالات
              </a>
            </li>
            <li>
              <NuxtLink to="/aboutus" class="opacity-60">
                درباره ما
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contactus" class="opacity-60">
                تماس با ما
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="opacity-60">
                سوالات متداول
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col space-y-7">
          <strong class="text-xl">محصولات</strong>
          <ul class="flex flex-col space-y-5">
            <li>
              <NuxtLink to="/market" class="opacity-60">
                زعفران
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market" class="opacity-60">
                پسته
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market" class="opacity-60">
                ادویه
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market" class="opacity-60">
                میوه خشک
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/market" class="opacity-60">
                آجیل
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col space-y-7">
          <strong class="text-xl">ارتباط با ما</strong>
          <div class="flex flex-col space-y-6">
            <div class="flex items-center gap-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0834 8.75026C12.0834 7.5992 11.1507 6.6665 10.0005 6.6665C8.84944 6.6665 7.91675 7.5992 7.91675 8.75026C7.91675 9.90047 8.84944 10.8332 10.0005 10.8332C11.1507 10.8332 12.0834 9.90047 12.0834 8.75026Z" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99959 17.5C9.00086 17.5 3.75 13.2486 3.75 8.80274C3.75 5.3222 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.3222 16.25 8.80274C16.25 13.2486 10.9983 17.5 9.99959 17.5Z" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="opacity-60 font-light">تربت حیدریه - کیلومتر 2 جاده بایگ</span>
            </div>
            <div class="flex items-center gap-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M11.9609 2.0835C15.0451 2.426 17.4818 4.85933 17.8276 7.9435" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.9609 5.03613C13.4368 5.3228 14.5901 6.47697 14.8776 7.9528" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19302 10.3938C12.5172 13.7171 13.2713 9.87243 15.3878 11.9875C17.4283 14.0275 18.6019 14.4362 16.0158 17.0208C15.6919 17.281 13.6345 20.412 6.4038 13.1832C-0.827757 5.9535 2.30139 3.89387 2.5617 3.57012C5.15322 0.978368 5.55577 2.15798 7.59624 4.19794C9.71186 6.31391 5.86886 7.07051 9.19302 10.3938Z" stroke="#070707" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="opacity-60 font-light" dir="ltr">051 - 52329059</span>
              <span class="opacity-60 font-light">,</span>
              <span class="opacity-60 font-light" dir="ltr">09912937952</span>
            </div>
            <div class="flex items-center gap-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path d="M14.919 7.37598L11.2163 10.3868C10.5167 10.9418 9.53244 10.9418 8.83286 10.3868L5.09888 7.37598" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0908 17.5C16.6253 17.507 18.3334 15.4246 18.3334 12.8653V7.14168C18.3334 4.58235 16.6253 2.5 14.0908 2.5H5.90936C3.3749 2.5 1.66675 4.58235 1.66675 7.14168V12.8653C1.66675 15.4246 3.3749 17.507 5.90936 17.5H14.0908Z" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="opacity-60 font-light">info@gpsaffron.com</span>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="h-[75px] w-[75px] rounded-xl grid place-items-center border border-[#818c92]/20">
              <img src="~/assets/images/salamat.png" alt="salamat" class="w-2/3">
            </div>
            <div class="h-[75px] w-[75px] rounded-xl grid place-items-center border border-[#818c92]/20">
              <img src="~/assets/images/enamad.png" alt="enamad" class="w-2/3">
            </div>
            <div class="h-[75px] w-[75px] rounded-xl grid place-items-center border border-[#818c92]/20">
              <img src="~/assets/images/standard.png" alt="standard" class="w-1/3">
            </div>
          </div>
        </div>
      </div>
      <hr class="my-8 border-[#818C92]/20">
      <div class="w-full flex flex-col items-center">
        <span class="mx-auto text-sm w-full text-center font-light mb-4">
        برای استفاده از مطالب جی پی، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت فراز زعفران تربت حیدریه(فروشگاه آنلاین جی پی)است.
      </span>
      </div>
    </div>
  </footer>

</template>


<script setup lang="ts">
import {BLOGS_URL} from "~/utilities/api.config.js";
</script>