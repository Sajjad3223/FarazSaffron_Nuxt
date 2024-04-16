<template>
  <div>
    <header>
      <div class="h-[60px] bg-white w-full border-b-2 border-[#DCDCDC] relative flex items-center">
        <img src="~/assets/images/img.png" alt="" class="h-[60px] w-[85vw]">
        <span class="absolute text-white font-bold text-2xl left-1/2 -translate-x-1/2">با جی پی به دنیای زعفران قدم بزار</span>
      </div>
    </header>
    <nav class="w-full border-b border-[#ECECEC] pt-2 bg-white relative">
      <div class="container h-[125px] mx-auto mt-5">
        <div class="w-full flex items-center justify-between">
          <div class="flex items-center flex-1 gap-12">
            <div class="flex items-center gap-4">
              <div class="w-max logo-rotate relative">
                <div class="w-[50px] h-[50px] rounded-full bg-brandOrange grid place-items-center logo-style"
                >
                  <img src="~/assets/images/gp-alone-white.png" alt="gp alone white" class="w-8">
                </div>
                <div class="w-[50px] h-[50px] rounded-full bg-brandOrange grid place-items-center logo-style" style="transform: rotateY(180deg)"
                >
                  <img src="~/assets/images/GP-filled-white.png" alt="gp alone white" class="w-8">
                </div>
              </div>
              <div class="flex flex-col items-start">
                <strong>زعفران جی پی</strong>
                <span class="uppercase text-xs"><strong class="text-brandOrange">GP</strong> Saffron</span>
              </div>
            </div>
            <div class="flex w-[20vw] items-center relative">
              <input type="text" class="form-input w-full h-12 p-4 border-none focus:ring-[#9b9a9a] bg-[#F4F4F4] rounded-lg peer" required>
              <strong class="absolute opacity-50 right-4 pointer-events-none transition-all duration-200 peer-focus:opacity-0 peer-checked:opacity-0 peer-valid:opacity-0">جستجوی محصول...</strong>
              <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute opacity-50 left-4">
                <circle cx="6.38251" cy="6.38251" r="5.63251" stroke="currentColor" stroke-width="1.5"/>
                <path d="M10.7957 13.4585C10.6083 12.6246 11.4856 11.9552 12.2404 12.356L13.689 13.1252C14.3329 13.4672 14.4063 14.3611 13.8267 14.8034L12.7377 15.6344C12.1581 16.0767 11.3153 15.7701 11.1554 15.0587L10.7957 13.4585Z" fill="currentColor"/>
              </svg>
            </div>
            <ul class="flex items-center gap-9 font-bold">
              <li>
                <NuxtLink to="/gpblog">مقالات</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/aboutus">درباره ما</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contactus">ارتباط با ما</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex items-stretch gap-2">
            <div class="flex items-end flex-col">
              <a href="tel:05152329059" dir="ltr" class="text-brandOrange font-bold text-sm" style="text-shadow: 0 0 10px rgba(240, 70, 35, 0.5); font-family: 'Vazir FD',serif;">051 - 52329059</a>
              <div class="flex items-center gap-1.5">
                <strong class="text-sm">پشتیبانــی</strong>
                <span class="text-xs" style="font-family: 'Vazir FD',serif">24 ساعته</span>
              </div>
            </div>
            <a href="tel:05152329059" class="h-9 bg-[#FFF3F0] rounded-lg rounded-b-xl grid place-items-center">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g filter="url(#filter0_d_306_3621)">
                  <rect x="10" y="10" width="14" height="14" fill="url(#pattern0_306_3621)" shape-rendering="crispEdges"/>
                </g>
                <defs>
                  <filter id="filter0_d_306_3621" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.27451 0 0 0 0 0.137255 0 0 0 0.5 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_3621"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_3621" result="shape"/>
                  </filter>
                  <pattern id="pattern0_306_3621" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_306_3621" transform="scale(0.01)"/>
                  </pattern>
                  <image id="image0_306_3621" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div class="mt-5 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="bg-[#F6F6F6] rounded-lg w-7 h-8 relative flex items-center">
              <span class="bg-[#C3C3C3] absolute h-0.5 rounded-full inset-x-1 right-1/2 top-1/3"></span>
              <span class="bg-[#939393] absolute h-0.5 rounded-full inset-x-1"></span>
              <span class="bg-[#C3C3C3] absolute h-0.5 rounded-full inset-x-1 left-1/2 bottom-1/3"></span>
            </div>
            <div class="flex items-center gap-10">
              <div class="relative">
                <button class="flex items-center gap-2" @click="showCategories = !showCategories,showAccountOptions=false,showCart=false" type="button">
                  <strong>دسته بندی</strong>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" :class="['transition-all duration-200',{'rotate-180':showCategories}]">
                    <path d="M1 1L5.00065 4.664L9 1" stroke="#3E3E3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <Transition name="slide-fade">
                  <div v-if="showCategories" class="absolute top-12 z-20 w-[300px] bg-white p-4 flex rounded-xl" style="box-shadow: 0 2px 5px 0 #B7B7B740;">
                    <ul class="w-3/5 flex flex-col space-y-1">
                      <li class="w-full py-1.5 pl-4 pr-8 rounded-lg hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer relative flex items-center before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:right-3 before:bg-[#D9D9D9]">
                        <div class="w-full flex items-center justify-between">
                          <span class="text-brandOrange">زعفران</span>
                          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                            <path d="M6 11L1 6L6 1" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </li>
                      <li class="w-full py-1.5 pl-4 pr-8 rounded-lg text-[#9E9E9E] hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer relative flex items-center before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:right-3 before:bg-[#D9D9D9]">
                        <div class="w-full flex items-center justify-between">
                          <span>پسته</span>
                          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                            <path d="M6 11L1 6L6 1" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </li>
                      <li class="w-full py-1.5 pl-4 pr-8 rounded-lg text-[#9E9E9E] hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer relative flex items-center before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:right-3 before:bg-[#D9D9D9]">
                        <div class="w-full flex items-center justify-between">
                          <span>ادویه</span>
                          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                            <path d="M6 11L1 6L6 1" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </li>
                      <li class="w-full py-1.5 pl-4 pr-8 rounded-lg text-[#9E9E9E] hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer relative flex items-center before:absolute before:w-1.5 before:h-1.5 before:rounded-full before:right-3 before:bg-[#D9D9D9]">
                        <div class="w-full flex items-center justify-between">
                          <span>آجیل</span>
                          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.5">
                            <path d="M6 11L1 6L6 1" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </div>
                      </li>
                    </ul>
                    <ul class="flex-1 border-r pr-2 mr-2 space-y-2">
                      <li class="w-full py-1 px-2 rounded-lg text-[#9E9E9E] hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer">
                        <span>سرگل</span>
                      </li>
                      <li class="w-full py-1 px-2 rounded-lg text-[#9E9E9E] hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer">
                        <span>سرگل 2</span>
                      </li>
                      <li class="w-full py-1 px-2 rounded-lg text-[#9E9E9E] hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer">
                        <span>سرگل 3</span>
                      </li>
                      <li class="w-full py-1 px-2 rounded-lg text-[#9E9E9E] hover:text-black hover:bg-[#F2F2F2] transition-colors duration-200 cursor-pointer">
                        <span>سرگل 4</span>
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
              <NuxtLink to="/market" class="font-bold">پرفروش ها</NuxtLink>
              <NuxtLink to="/market" class="font-bold">تخفیف ها</NuxtLink>
              <NuxtLink to="/market" class="font-bold">محصولات جدید</NuxtLink>
            </div>
          </div>
          <div class="flex items-stretch gap-4">
            <!-- User Account -->
            <div class="relative">
              <button type="button" class="h-10 px-3 rounded-lg text-brandOrange flex items-center gap-2 border border-brandOrange" @click="showAccountOptions = !showAccountOptions,showCategories=false,showCart=false">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="14" height="14" fill="url(#pattern0_306_3622)"/>
                  <defs>
                    <pattern id="pattern0_306_3622" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_306_3622" transform="scale(0.01)"/>
                    </pattern>
                    <image id="image0_306_3622" width="100" height="100" xlink:href="data:image/png;base64,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"/>
                  </defs>
                </svg>
                <strong>حساب کاربری</strong>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" :class="['transition-all duration-200',{'rotate-180':showAccountOptions}]">
                  <path d="M1 1L5.00065 4.664L9 1" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <Transition name="slide-fade">
                <div v-if="showAccountOptions" class="absolute z-20 bg-white top-12 w-[150px] p-2 rounded-lg flex flex-col space-y-2" style="box-shadow: 0 0 5px 0 #69696940;">
                  <button class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <rect width="12" height="12" fill="url(#pattern0_461_1998)" fill-opacity="0.5"/>
                      <defs>
                        <pattern id="pattern0_461_1998" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlink:href="#image0_461_1998" transform="scale(0.01)"/>
                        </pattern>
                        <image id="image0_461_1998" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAACURJREFUeAHtnWXINUUUx/926wcLWwQL9VVEXxPzi2K3WIitYGB3i4WBBb6CgYnd3YqFioUtdmN3uz/YyzvcZ2d2Zndn7t7n7oHLs8/euTMnJs6cc+aM1EHHgY4DHQc6DnQcGC4OTC1pFUkHSZqUPd8n6TlJz0t6WtLdki6QtI+kCZKmGC7yhgfbtSVdIelHSf8FfL6QdK6kZYeH1HZjunHe+0OEYCt7TzaCJrab3PZit5CkuwJGgk0I/e//kXSxpNnaS3r7MNtM0ncRhGEK5z1JK7SP9PZhtL8kerHJvFjPv0vasn0saA9GxwUI4tdcw7ok06ROyBb7AyWdIulySY9L+tuzrr8kbd0eFrQHE9TUspHwb6bK3ixpU0kzlqA+u6SdJD3pUe8fmRDXKalvpL5eVdKfJYx7VNJKFbmySTYKXi+p/2tJ81esf1z9bBZJHzqYxag4voEN3gySrna0w+h8uIF2hl44ZzmYxKjZqkEK2bUf42gPoTDNjSwsXDJV7RGJM5hWbOvVJ5Kmi9Ru66u9yMGY8yNijz3sIUfbe0Vsu7VVz5QZCH+yMOUzSXwfExaRhHZVNFJei9lwW+tmri5iBu/2TIS0a+paLhEOrWnmOotAGB1MKSlgXodV4KgUCLSlDbSdLy0CwfCXEp6y4PFgSiQG3RY90zZdrZ8YucMsuHyTGI+BNoezySaQORJjhpWgLbgkJn1yc9tamIDWk9rlOrcFF4S01GSUx/fT7hYmfDAAstkE2kYIvvuRAJtAsGmlhk4gkropK3W3K2mvTYv6ao4pK7WCUcK2eF+71N4N4jVbWPMRFoGMlNoLZ4iXKlpMCX5LCd3GMOe2zXTyeULTyXwO08mRKXtFG9ra0TJCGDWpzN8XOnAYuUhHl/kdOxeu3ZiwmMM5NpLmd5jt6qE4r2LBNJIecYyOVOb/WPRVrpdwUVe0Saypy+Wp/HiUXbhI8kxHT0VYbCKbAuxkZcF42zfV2LDWM7Ok9x1CIQzoJElT1iSQwDqbZtdTv/GBpDZu1iQrzs9XLpm6YNgT+UGdKhhsLukth9Cp/ytJqMEd5Bxgvej1VNffWyXB4LIgCMweO0uybfzMNgi6XquTxFgOHOspFJj5m6T7JZ2dPeP121fS4ZJYsInnDQm2bjIYbyxVQ/5mP8fu2ezVTTwzMrYYcn4lQX+jrMdj3GuC6bY63pG0fBJqxkkjC2YMuz2CUDgMxLQ26zjhU3IyiEJ5tgHBoD7f0Y2K5uS3pqRLJX0fKJxP84V/meZQ6WoyOTBVfnDngPw07b35CCJxACouJ3fPyy3GIxM1YjKoe+440HGg40DHgY4DHQeqc2DOPAHBOZJQMt6W9K0kzsBjDWCTyylg7HCnZkoIqjxW7g4a5ADGzV0lPSaJPY7NImB7Txxzz1Ca6jxMg+S3pyp8/UdL4ly7jdmh78m7wgHXTjCBcsYqzCndUIb7ln9ZEpGUUQFPHecJ8daxcWMD19YPgQ+sB/3AfH9lREGYAsPWdmLmJWUD3DhgtSVowGywrc/4TzYs4ABGzrK0HDFowtfTaCgUc2KqNEtNMIQcjv2wZI0O9UKeZWgXSR9V7JTMJI0EfK+Rq3xNMCpFHZj5+4GRUXV0o+rOZVS4ekWBQDuW7jJ3tdHU2EeiNl6qgUAKAZht/JLl2CLFhwmsGXWmqTfMyvL1wGwz9JkOUzkaZt0hEgaMwQ/fD1fVpKEoFDVUCP3lD+lH0vd/W3YfNk946lhb2vLhaB1hpSag2vYzI/T/GAIhaHBpE1Hf5zstBN3kW8EAy6HVNLHPiCEQOgVWgeCp6xmLQIqmhgHyvrBpduCho6GofCyB0BZbiSAg7XcRkpXnwKDWqxdGkyF6sQj30HcxBYLWFQTDKpDdGhIGwospEOpfMUQitgiRQ0MqGUBZkmyGjgRb+dgCCUruRgR5EaInD4DJvk1iv6piQi+ik3exBYLi4Q03WgSS+nStN8K5c8nG3CrvYwsEnBb3JRCvWRERL/pWMIByNpyL6PB5l0Ig2Mi8YAeLQLCmFpm2vSqNXIhrLHwY7VsmhUA4eeYFizqIO9irhvSF3nXgjKv1lUAfzvUFJIT6gLCHuY5U3FLQhvWVzbjIYlTLcmltsd4Xtkh7TOim1bZeK+G/XsKR8YJduzfY0uYx5E/3riVdQdtJ4DbcmsDND0VTZdCazM0EP1gqwmlV5JlLx/6xLeG/KCLae+EcW2VjbzghVoQbU2AQcHK2qCLekUAZJ1ZbwBZBgqePoIMo/u0S4qfNz1LiryniI/7/IOBAjOu4888tOk7GAlpEdNV3KbSsIsWhVECc6XD51dkdc6XdoBf624ZQIJUtH7YEYWbvI/nlNg0kByjtIZYChHea+NR9TjFCtrPQ4vXalWPdJP7VPDyz7Dojr0YDChFra+JR9zmFQGrdBkRajBDzBMfWrpXErr+RMBhDOPMUJAkgqMF2U0IV4cQWyJsGPbUeOYNORHgIkexWiXjsHVNDO0OtLgNcnTAfLYkLx8gpzwikbbS86fsqIPA5BC9X2dgCIbKxMeBir7K8Iy5ie9+hDpK3kfPm6OSogfwlPhZ11bbZ6/2+P9km6Tp639X9G1MgKEIkX2sUWCPYsZMeoy7xVX/PiV4TiDwnCr1qfebvYgqEo93RgAA1LoJscv42GeN65mLKfusz4Umu3/h+F1MgVa8ODBIiaZFOk8SZcl+imyhHshsTGCVMeXXrjiWQa0xkUzxjolgvv7i+ifgoF2NZ4Nkj9QNKgGsz66qz910MgaB5oqQMFMi+QELKyyRh3bTZdXqMsP3l5mkWfQx1pKctS1SGFmOry+d9DIG08hJlVFmi0rmEhetUCQXlUmLM/b3P3ln0ISE9WJQneKrI/b2Okcr5DB/mF5Xh0KcJrhsYin7f/46ONPJAWClqdD9zfP5n74RzqQd1VGqMiHXzTfbwGPq/WAlscWZlgmGPhHOJ3l11qkUYI3vrqK33YImOkberTKAIshsZFqmwdhGbXLb7L2Oyz/doU61cwC28GehrTBYPVFxXfITBLnyBgVI4hI0zWjgSYDt24cN4swy2KQSRZAc+hPwOQnliboWusonFhM5+p3FDYRAF47gwai65T86QhEuYaHrUZj5cFX5DljoDtyuevlrOpXHMw460jgMdBzoOdBwYEAf+BwKagOUJ2f7dAAAAAElFTkSuQmCC"/>
                      </defs>
                    </svg>
                    <span>ثبت نام</span>
                  </button>
                  <hr>
                  <button class="flex items-center gap-2 px-2 rounded-md py-1 transition-colors duration-200 hover:bg-[#F2F2F2]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <rect width="12" height="12" fill="url(#pattern0_461_1999)" fill-opacity="0.5"/>
                      <defs>
                        <pattern id="pattern0_461_1999" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlink:href="#image0_461_1999" transform="scale(0.01)"/>
                        </pattern>
                        <image id="image0_461_1999" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABNFJREFUeAHtnc3rFVUch5+MUEmKFhnqpoKyTSpWS3e+VNALhoG1ycSFL4EkGIVvoEGIFeQfoIS2qL2VBdGiTe1rV4K9WViom7TX+4XfwHCZ89K993fOfIfPhWHuvefcOec8z5yXuTNzBvQSAREQAREQAREQAREQAREQAREQAREQAREQARGYhMDtwOPADuCVni4vA88DDwELJimkh99sBD4GrgP/Olp+AN4G7vIAOSePK4DzjgSEdpZrwD7gppxC9zXOI6OmyfawUCE9fv8esKivwGP5ugf4dWAymh3oA281ZTHwzUBlNFKs+XLzstFTk/HQ+jvgc+CTHi5fjvoL6zNCebfvr3rp6JcAv0cKYx38gw52rYXAC8DlSFneclAOnokU4Cxws4dCtPK4MiLlew99yemAkJ+BW1sF9fR2W6BM1nTZwWOvX18EMv9mr3Mdz5w1X6E+ZWv8p/VDvw0IsfbY8+urQLl6P9r6JZDxLZ5tAJ8FynWk7+WSkJ4ZkhAJKUJATVYRzPmJSEg+qyIxJaQI5vxEJCSfVZGYElIEc34iEpLPqkhMCRnDbH/iHQeOAWvGwkp8lJAW5WeBv1p/XdwAdrbCS7x1K+THFrj2GbenJ6RmV3l0bfOf0Tn73RNuc5KfuRXyUYcQg3fvJBSAOzu214guKcWtkLXAlTGI05wLsTOMP41trxFi61JS3AqximCXAB0FTgKTNlXtCmWXdRr4toj2+xJSXAtpw5zVe7sWOCXlpVkl1rEdCemAUlOKhHQIsa9qSZGQgJBaUiQkIqSGFAlJCCktpRdC7BjA7u+wg7qSi90cc0fmciAyHJ7lcUp1IU8Cdqlke7zv9b0Nl3dl1LhYlKpC7gf+GIiMZif6E3g4RjwRVlXIawOT0UiZ5mr1qkJeHaiQdxK1IBZcVch9A2yyrB9ZFyOeCKsqxPL2BHBxQDXlYAJ4Kri6EMug3TRfY9j7f4bYqWGv9R+zuCC6F0JSe03tcDu1a6OnptPuWh+eUSYlJAGypAzLioREhJSWISE9kyEhASE1akaTFTVZDYm5dU0ZlgXXQmyobEf7J4ANY2An+Wh/dLYvlOsaTc1iaBvLm1shq4Dfxoair8dKmgizY6HUv87zLcOy6FbIuTEZtjf/DdydAB8KXtaxvXYNKSHDtZDQ/FhPhYgnvr8lMndKKRmuhczHXbh7OmrJoYTIWQe7bbLmQ4jBfWx0GvnduWXTrGlnbE9CMiCVjCIhJWlnpCUhGZBKRpGQkrQz0pKQDEglo0hISdoZaUlIBqSSUSSkJO2MtCQkA1LJKBJSknZGWm6FaBLMDLslo4SmiZ3mutqS+e9Ky/U0sac6/pm18xeXRmcQbRpyj68XA2WycvV+IuXNkczbsze8TTX+gPepxm068fFTuO0zfJ8Cqx1UE2umrGbEyjLNDBVFEeyP1JJGzoUeP67CZrEOTS3e5N8eV7G0KNUpErNHAn2dIaUpnMf13in4VPnpkB959L6Hx1R0Wbd7+lKX8HirHWe8PhSsEbQc+HAAzZf1Ge6aqUZC13r9nBhvD5a0Gm6jKTcdeBf82He3AY+ObpfbPqo1djPNGz1c7NGrzwE2GZvrB0nGRChMBERABERABERABERABERABERABERABERABFIE/gNUOiA0KlQmiAAAAABJRU5ErkJggg=="/>
                      </defs>
                    </svg>
                    <span>ورود</span>
                  </button>
                </div>
              </Transition>
            </div>
            <!-- Cart -->
            <div class="flex h-auto w-max items-stretch relative gap-2">
              <button class=" h-auto grid place-items-center bg-brandOrange rounded-md rounded-b-xl" style="box-shadow: 0 0 10px 0 #F0462380;" @click="showCart = !showCart,showAccountOptions=false,showCategories=false">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[34px]">
                  <path d="M9.09844 4.86654C9.09844 6.02634 8.15824 6.96654 6.99844 6.96654C5.83864 6.96654 4.89844 6.02634 4.89844 4.86654M2.75601 12.2165H11.2409C11.9906 12.2165 12.5984 11.62 12.5984 10.8842L11.7287 3.11652C11.7287 2.38069 11.1209 1.78418 10.3712 1.78418H3.45601C2.70624 1.78418 2.09844 2.38069 2.09844 3.11652L1.39844 10.8842C1.39844 11.62 2.00624 12.2165 2.75601 12.2165Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="flex flex-col items-start">
                <button class="flex items-center gap-2" @click="showCart = !showCart,showAccountOptions=false,showCategories=false">
                  <strong class="text-sm">سبد خرید</strong>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" :class="['transition-transform duration-200',{'rotate-180':showCart}]">
                    <path d="M1 1L5.00065 4.664L9 1" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <small>خالی</small>
              </div>
              <Transition name="slide-fade">
                <div v-if="showCart" class="absolute top-16 left-0 z-20 w-max bg-white rounded-lg rounded-b-3xl flex flex-col items-center py-6 px-5 space-y-4" style="box-shadow: 0 2px 5px 0 #B7B7B740;">
                  <img src="~/assets/images/empty-cart.png" alt="empty cart">
                  <strong class="text-2xl">خالی!</strong>
                  <span class="text-sm text-[#9F9F9F]">هیچ محصولی وجود ندارد</span>
                  <NuxtLink to="/market" class="text-brandOrange flex items-center gap-1 px-6 py-2 rounded-md hover:bg-brandOrange/10 transition-colors duration-200">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00043 4.85742V9.13113" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.14106 6.99431H4.86328" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.73464 1.1665H4.26797C2.36241 1.1665 1.16797 2.51522 1.16797 4.42451V9.57516C1.16797 11.4845 2.35686 12.8332 4.26797 12.8332H9.73464C11.6457 12.8332 12.8346 11.4845 12.8346 9.57516V4.42451C12.8346 2.51522 11.6457 1.1665 9.73464 1.1665Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>مشاهده محصولات</span>
                  </NuxtLink>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!--  Body  -->
    <main class="container mx-auto z-0 mt-5">

      <slot />

    </main>

    <footer class="w-full mt-24 border-t border-[#E8E8E8]">
      <div class="container mt-16 flex flex-col mx-auto">
        <div class="w-full grid grid-cols-2 gap-16">
          <div class="flex flex-col items-start ">
            <div class="flex items-center gap-6 mb-14">
              <div class="flex flex-col items-center text-2xl leading-6">
                <span class="text-[#B0B0B0]">دربـــــــــاره</span>
                <strong class="font-black text-[#474747]">جـــی پــــی</strong>
              </div>
              <div class="bg-brandOrange rounded-lg w-14 h-14 grid place-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7" style="filter:drop-shadow(0 0 5px rgba(246, 246, 246, 0.5))">>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.92574 16.39H14.3119C14.7178 16.39 15.0545 16.05 15.0545 15.64C15.0545 15.23 14.7178 14.9 14.3119 14.9H8.92574C8.5198 14.9 8.18317 15.23 8.18317 15.64C8.18317 16.05 8.5198 16.39 8.92574 16.39ZM12.2723 9.9H8.92574C8.5198 9.9 8.18317 10.24 8.18317 10.65C8.18317 11.06 8.5198 11.39 8.92574 11.39H12.2723C12.6782 11.39 13.0149 11.06 13.0149 10.65C13.0149 10.24 12.6782 9.9 12.2723 9.9ZM19.3381 9.02561C19.5708 9.02292 19.8242 9.02 20.0545 9.02C20.302 9.02 20.5 9.22 20.5 9.47V17.51C20.5 19.99 18.5099 22 16.0545 22H8.17327C5.59901 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.96535 2H13.2525C13.5099 2 13.7079 2.21 13.7079 2.46V5.68C13.7079 7.51 15.203 9.01 17.0149 9.02C17.4381 9.02 17.8112 9.02316 18.1377 9.02593C18.3917 9.02809 18.6175 9.03 18.8168 9.03C18.9578 9.03 19.1405 9.02789 19.3381 9.02561ZM19.6111 7.566C18.7972 7.569 17.8378 7.566 17.1477 7.559C16.0527 7.559 15.1507 6.648 15.1507 5.542V2.906C15.1507 2.475 15.6685 2.261 15.9646 2.572C16.5004 3.13476 17.2368 3.90834 17.9699 4.67837C18.7009 5.44632 19.4286 6.21074 19.9507 6.759C20.2398 7.062 20.0279 7.565 19.6111 7.566Z" fill="#F6F6F6"/>
                </svg>
              </div>
            </div>
            <p class="text-sm pl-24 text-[#666666]">
              سرآغاز ما با یک هدف و باور سهل و دست یافتنی شکل گرفت؛ تهیه و عرضه زعفران ناب به مصرف کنندگان(چهانیان، دنیا)!
              با این توصیف ما به یک شرکت بین المللی تبدیل شدیم و حال تعهد ما به کیفیت، امری ناگسستنی خواهد بود.
              داستان ما با یک اشتیاق ساده آغاز شد:
            </p>
            <NuxtLink to="/aboutUs" class="flex mt-2.5 text-sm items-center gap-2">
              <span class="text-brandOrange">مطالعه بیشتر</span>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8.32048C1.66667 7.55068 1.66667 5.62618 3 4.85638L6.88249 2.61482C8.21583 1.84502 9.8825 2.80727 9.8825 4.34687V8.82998C9.8825 10.3696 8.21583 11.3318 6.8825 10.562L3 8.32048Z" fill="#F14823"/>
                <path d="M11.2969 6.58904C11.2969 6.40946 11.4298 6.25762 11.6078 6.23389L15.0695 5.77233C15.5634 5.70647 16.0023 6.09073 16.0023 6.58904C16.0023 7.08736 15.5634 7.47162 15.0695 7.40576L11.6078 6.9442C11.4298 6.92047 11.2969 6.76863 11.2969 6.58904Z" fill="#F14823"/>
              </svg>
            </NuxtLink>
            <ul class="w-3/5 mx-auto flex items-center justify-around mt-4">
              <li class="w-14 h-14 text-[#7A7A7A] hover:text-[#F6F6F6] rounded-full bg-[#F4F4F4] grid place-items-center hover:bg-[#2AABEE] transition-all duration-300 cursor-pointer">
                <svg class="w-5" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29975 20.6637C16.1846 13.8898 24.7766 9.42401 29.0756 7.26636C41.3501 1.10586 43.9006 0.0357136 45.563 0.00037677C45.9286 -0.00739518 46.7462 0.101946 47.2757 0.620448C47.7229 1.05826 47.8459 1.64969 47.9048 2.06478C47.9636 2.47988 48.0369 3.42548 47.9787 4.16434C47.3135 12.5976 44.4354 33.0629 42.9711 42.5083C42.3516 46.505 41.1316 47.8451 39.9506 47.9762C37.3838 48.2612 35.4348 45.9294 32.9488 43.963C29.0587 40.886 26.8611 38.9706 23.0851 35.968C18.7213 32.498 21.5502 30.5908 24.0371 27.474C24.6879 26.6583 35.9969 14.246 36.2158 13.12C36.2432 12.9792 36.2686 12.4543 36.0101 12.1771C35.7517 11.8999 35.3703 11.9947 35.095 12.0701C34.7049 12.177 28.4904 17.1334 16.4517 26.9393C14.6877 28.4009 13.09 29.1131 11.6585 29.0757C10.0804 29.0346 7.04466 27.999 4.78794 27.1139C2.01998 26.0282 -0.179935 25.4541 0.0116285 23.6103C0.111407 22.6499 1.20745 21.6677 3.29975 20.6637Z" fill="currentColor"/>
                </svg>
              </li>
              <li class="w-14 h-14 text-[#7A7A7A] hover:text-[#F6F6F6] rounded-full bg-[#F4F4F4] grid place-items-center hover:bg-[#000100] transition-all duration-300 cursor-pointer">
                <svg class="w-5" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_569_2177)">
                    <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="currentColor"/>
                    <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="currentColor"/>
                    <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="currentColor"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_569_2177">
                      <rect width="48" height="48" fill="currentColor"/>
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <li class="w-14 h-14 text-[#7A7A7A] hover:text-[#F6F6F6] rounded-full bg-[#F4F4F4] grid place-items-center hover:bg-[#FF0302] transition-all duration-300 cursor-pointer">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.741 7.8002C25.741 7.8002 25.4871 6.00762 24.7051 5.22051C23.7148 4.18457 22.6078 4.17949 22.1 4.11855C18.4641 3.85449 13.0051 3.85449 13.0051 3.85449H12.9949C12.9949 3.85449 7.53594 3.85449 3.9 4.11855C3.39219 4.17949 2.28516 4.18457 1.29492 5.22051C0.512891 6.00762 0.264062 7.8002 0.264062 7.8002C0.264062 7.8002 0 9.90762 0 12.01V13.9803C0 16.0826 0.258984 18.19 0.258984 18.19C0.258984 18.19 0.512891 19.9826 1.28984 20.7697C2.28008 21.8057 3.58008 21.7701 4.15898 21.8818C6.24102 22.0799 13 22.1408 13 22.1408C13 22.1408 18.4641 22.1307 22.1 21.8717C22.6078 21.8107 23.7148 21.8057 24.7051 20.7697C25.4871 19.9826 25.741 18.19 25.741 18.19C25.741 18.19 26 16.0877 26 13.9803V12.01C26 9.90762 25.741 7.8002 25.741 7.8002ZM10.3137 16.3721V9.06465L17.3367 12.7311L10.3137 16.3721Z" fill="currentColor"/>
                </svg>
              </li>
              <li class="w-14 h-14 text-[#7A7A7A] hover:text-[#F6F6F6] rounded-full bg-[#F4F4F4] grid place-items-center hover:bg-[#00D95F] transition-all duration-300 cursor-pointer">
                <svg class="w-5" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z" fill="currentColor"/>
                </svg>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start ">
            <div class="flex items-center gap-6 mb-14">
              <div class="flex flex-col items-center text-2xl leading-6">
                <span class="text-[#B0B0B0]">تمــاس</span>
                <strong class="font-black text-[#474747]">با مـــــــا</strong>
              </div>
              <div class="bg-brandOrange rounded-lg w-14 h-14 grid place-items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7" style="filter:drop-shadow(0 0 5px rgba(246, 246, 246, 0.5))">
                  <path d="M14.4183 5.48976C13.9422 5.40182 13.505 5.70561 13.4144 6.17029C13.3238 6.63497 13.6285 7.08866 14.0916 7.1796C15.4859 7.45141 16.5624 8.53067 16.8353 9.92971V9.93071C16.913 10.3334 17.2675 10.6262 17.6759 10.6262C17.7306 10.6262 17.7854 10.6212 17.8412 10.6112C18.3043 10.5183 18.609 10.0656 18.5184 9.59994C18.1111 7.51037 16.5027 5.89648 14.4183 5.48976Z" fill="#F6F6F6" />
                  <path d="M14.3558 2.00793C14.1328 1.97595 13.9087 2.04191 13.7304 2.18381C13.5472 2.32771 13.4326 2.53557 13.4078 2.76841C13.355 3.23908 13.6946 3.66479 14.1646 3.71776C17.4063 4.07951 19.9259 6.60477 20.2904 9.85654C20.3392 10.2922 20.7047 10.621 21.1409 10.621C21.1738 10.621 21.2057 10.619 21.2385 10.615C21.4666 10.59 21.6698 10.4771 21.8132 10.2972C21.9556 10.1174 22.0203 9.89351 21.9944 9.66467C21.5403 5.60746 18.4002 2.45862 14.3558 2.00793Z" fill="#F6F6F6" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0317 12.9724C15.0208 16.9604 15.9258 12.3467 18.4656 14.8848C20.9143 17.3328 22.3216 17.8232 19.2192 20.9247C18.8306 21.237 16.3616 24.9943 7.6846 16.3197C-0.993478 7.644 2.76158 5.17244 3.07397 4.78395C6.18387 1.67385 6.66586 3.08938 9.11449 5.53733C11.6544 8.0765 7.04266 8.98441 11.0317 12.9724Z" fill="#F6F6F6" />
                </svg>
              </div>
              <strong dir="ltr" class="text-brandOrange text-3xl mr-12" style="text-shadow: 0 0 10px rgba(240, 70, 35, 0.5); font-family: 'Vazir FD',serif;">
                051 - 52329059
              </strong>
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
        <div class="w-full rounded-xl bg-[#F8F8F8] mt-9 px-16 pt-14 pb-3 mb-8 grid grid-cols-6 gap-6 justify-items-center">
          <img src="~/assets/images/gp-orange-cutted.png" alt="gp orange" class="justify-self-center self-center">
          <div class="flex flex-col items-start">
            <h4 class="font-bold text-xl">بخش های سایت</h4>
            <ul class="flex flex-col items-start text-[#666666] text-sm font-light pr-5 list-disc space-y-2 mt-3">
              <li>
                <NuxtLink to="/">صفحه اصلی</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">فروشگاه</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">مقالات</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">تماس با ما</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">درباره ما</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start">
            <h4 class="font-bold text-xl">خدمات مشتریان</h4>
            <ul class="flex flex-col items-start text-[#666666] text-sm font-light pr-5 list-disc space-y-2 mt-3">
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
            <h4 class="font-bold text-xl">راه های خرید از جی پی</h4>
            <ul class="flex flex-col items-start text-[#666666] text-sm font-light pr-5 list-disc space-y-2 mt-3">
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
          <div class="border rounded-full border-[#666666] aspect-square grid place-items-center">
            <img src="~/assets/images/salamat.png" alt="salamat" class="w-2/3">
          </div>
          <div class="border rounded-full border-[#666666] aspect-square grid place-items-center">
            <img src="~/assets/images/enamad.png" alt="enamad" class="w-2/3">
          </div>
          <div class="col-span-full text-center text-sm font-light mt-7">
            <span class="flex gap-2 justify-center">
              برای استفاده از مطالب جی پی، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت فراز زعفران تربت حیدریه <NuxtLink to="/"><strong class="font-black">(فروشگاه آنلاین جی پی)</strong></NuxtLink> است.
            </span>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">

const showCategories = ref(false);
const showAccountOptions = ref(false);
const showCart = ref(false);
</script>

<style scoped>
*{
  font-family: 'Epic Ravi',serif;
}

.logo-style{
  position: absolute;
  box-shadow: 0 0 15px 0 #F0462380;
  backface-visibility: hidden;
}
.logo-rotate{
  width: 50px;
  height: 50px;
  transform-origin: center;
  transform-style: preserve-3d;
  animation: rotate-logo 4s linear infinite;
}

@keyframes rotate-logo {
  100%{
    transform: rotateY(360deg);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active{
  @apply transition-all duration-300;
}

.slide-fade-enter-from,
.slide-fade-leave-to{
  @apply opacity-0 -translate-y-4;
}
.slide-fade-enter-to,
.slide-fade-leave-from{
  @apply opacity-100 translate-y-0;
}

.hover-brand:hover{
  box-shadow: 0 5px 5px 0 #F1482380;
}

</style>