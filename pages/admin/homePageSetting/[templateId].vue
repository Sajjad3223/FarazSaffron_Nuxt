<template>
  <div class="w-full overflow-hidden">
    <Head>
      <Title>مدیریت محتوای صفحه اصلی</Title>
    </Head>
    <h4
        class="mb-4 text-lg font-semibold text-gray-600 "
    >
      مدیریت محتوای صفحه اصلی
    </h4>

    <base-g-modal title="تنظیم بنر بالا" v-model="showSetTopBannerModal">
      <admin-main-page-banners-set-top-banner @banner-updated="showSetTopBannerModal = false,getData()" :template-id="templateId"/>
    </base-g-modal>
    <base-g-modal title="ویرایش بنر بالا" v-model="showEditTopBannerModal">
      <admin-main-page-banners-edit-top-banner @banner-updated="showEditTopBannerModal = false,getData()" :top-banner="template.topBanner"/>
    </base-g-modal>

    <base-g-modal title="افزودن بنر" v-model="showAddMainBannerModal">
      <admin-main-page-banners-add-main-banner @banner-added="showAddMainBannerModal = false,getData()" :template-id="templateId"/>
    </base-g-modal>
    <base-g-modal title="ویرایش بنر" v-model="showEditMainBannerModal">
      <admin-main-page-banners-edit-main-banner @banner-edited="showEditMainBannerModal = false,getData()" :banner="selectedBanner"/>
    </base-g-modal>

    <base-g-modal title="افزودن افتخار" v-model="showAddHonorModal">
      <admin-main-page-honors-add-honor @honor-added="showAddHonorModal = false,getData()" :template-id="templateId"/>
    </base-g-modal>
    <base-g-modal title="ویرایش افتخار" v-model="showEditHonorModal">
      <admin-main-page-honors-edit-honor @honor-edited="showEditHonorModal = false,getData()" :honor="selectedHonor"/>
    </base-g-modal>

    <base-g-modal title="افزودن دیدگاه" v-model="showAddCommentModal">
      <admin-main-page-special-comment-add-comment @comment-added="showAddCommentModal = false,getData()" :template-id="templateId"/>
    </base-g-modal>
    <base-g-modal title="ویرایش دیدگاه" v-model="showEditCommentModal">
      <admin-main-page-special-comment-edit-comment @comment-edited="showEditCommentModal = false,getData()" :comment="selectedComment"/>
    </base-g-modal>

    <base-g-modal title="افزودن مقاله" v-model="showAddBlogModal">
      <admin-main-page-blog-previews-add-blog-preview @blog-added="showAddBlogModal = false,getData()" :template-id="templateId"/>
    </base-g-modal>
    <base-g-modal title="ویرایش مقاله" v-model="showEditBlogModal">
      <admin-main-page-blog-previews-edit-blog-preview @blog-edited="showEditBlogModal = false,getData()" :post="selectedBlog"/>
    </base-g-modal>

    <div class="flex flex-col space-y-5 mt-12" v-if="template">
      <div class=" grid grid-cols-4 gap-5">
        <div class="flex flex-col gap-2">
          <span class="opacity-50 text-sm">عنوان</span>
          <strong class="text-lg">{{template.title}}</strong>
        </div>
        <div class="flex flex-col gap-2">
          <span class="opacity-50 text-sm">دسته بندی اول</span>
          <strong class="hidden text-lg">{{EOrderBy[template.firstItemSection]}}</strong>
          <div class="relative w-max flex items-center text-black">
            <select name="" id="" class="text-black py-2 pr-4 w-max rounded-xl appearance-none pl-14 outline-none" v-model="firstOrderBy">
              <option :value="item" v-for="item in Object.values(EOrderBy).filter(i=>!isNaN(i))">{{EOrderBy[item].replaceAll('_',' ')}}</option>
            </select>
            <svg
                class="w-4 h-4 absolute left-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
              <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <span class="opacity-50 text-sm">دسته بندی دوم</span>
          <strong class="hidden text-lg">{{EOrderBy[template.secondItemSection]}}</strong>
          <div class="relative w-max flex items-center text-black">
            <select name="" id="" class="text-black py-2 pr-4 w-max rounded-xl appearance-none pl-14 outline-none" v-model="secondOrderBy">
              <option :value="item" v-for="item in Object.values(EOrderBy).filter(i=>!isNaN(i))">{{EOrderBy[item].replaceAll('_',' ')}}</option>
            </select>
            <svg
                class="w-4 h-4 absolute left-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
              <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <base-g-button class="self-end" color="info" @click="setOrderBySections">
          اعمال تغییرات
        </base-g-button>
        <div class="col-span-full mt-8">
          <div class="flex flex-col gap-2">
            <span class="opacity-50 text-sm">بنر بالای صفحه</span>
            <div class="relative overflow-hidden rounded-xl" v-if="template.topBanner">
              <img :src="`${SITE_URL}/banners/${template.topBanner.image.src}`"
                   :alt="template.topBanner.image.alt"
                   class="w-full bg-brandOrange">
              <button class="bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100 transition-all duration-300 bg-black absolute inset-0 grid place-items-center"
              @click="showEditTopBannerModal = true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scale-150">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3764 20.0279L18.1628 8.66544C18.6403 8.0527 18.8101 7.3443 18.6509 6.62299C18.513 5.96726 18.1097 5.34377 17.5049 4.87078L16.0299 3.69906C14.7459 2.67784 13.1541 2.78534 12.2415 3.95706L11.2546 5.23735C11.1273 5.39752 11.1591 5.63401 11.3183 5.76301C11.3183 5.76301 13.812 7.76246 13.8651 7.80546C14.0349 7.96671 14.1622 8.1817 14.1941 8.43969C14.2471 8.94493 13.8969 9.41792 13.377 9.48242C13.1329 9.51467 12.8994 9.43942 12.7297 9.29967L10.1086 7.21422C9.98126 7.11855 9.79025 7.13898 9.68413 7.26797L3.45514 15.3303C3.0519 15.8355 2.91395 16.4912 3.0519 17.1255L3.84777 20.5761C3.89021 20.7589 4.04939 20.8879 4.24039 20.8879L7.74222 20.8449C8.37891 20.8341 8.97316 20.5439 9.3764 20.0279ZM14.2797 18.9533H19.9898C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533Z" fill="white"/>
                </svg>
              </button>
              <div class="absolute top-4 left-4 flex gap-2">
                <!--  Delete Banner  -->
                <button class="bg-white/30 text-white text-xs hover:bg-danger transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="removeBanner(b.id)">
                  تغییر
                </button>
              </div>
            </div>
            <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
              <span>بنر بالای صفحه تنظیم نشده است</span>
              <base-g-button color="info" @click="showSetTopBannerModal = true">
                تنظیم بنر
              </base-g-button>
            </div>
          </div>
        </div>
        <div class="col-span-full mt-5">
          <div class="flex flex-col gap-2">
            <span class="opacity-50 text-sm">بنرهای اسلایدر</span>
            <div class="grid grid-cols-3 w-full gap-4" v-if="template.mainBanners.length > 0">
              <div class="relative" v-for="b in template.mainBanners" :key="b.id">
                <img :src="`${SITE_URL}/banners/${b.image.src}`"
                     :alt="b.image.alt"
                     class="w-full rounded-2xl h-full object-cover">
                <div class="absolute top-4 left-4 flex gap-2">
                  <!--  Edit Banner  -->
                  <button class="bg-warning/30 text-warning hover:bg-warning transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="selectedBanner = b,showEditMainBannerModal = true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.492 2.78906H7.753C4.678 2.78906 2.75 4.96606 2.75 8.04806V16.3621C2.75 19.4441 4.669 21.6211 7.753 21.6211H16.577C19.662 21.6211 21.581 19.4441 21.581 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82666 10.921L16.2997 3.44799C17.2307 2.51799 18.7397 2.51799 19.6707 3.44799L20.8877 4.66499C21.8187 5.59599 21.8187 7.10599 20.8877 8.03599L13.3787 15.545C12.9717 15.952 12.4197 16.181 11.8437 16.181H8.09766L8.19166 12.401C8.20566 11.845 8.43266 11.315 8.82666 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.1641 4.60254L19.7301 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <!--  Delete Banner  -->
                  <button class="bg-danger/30 text-danger hover:bg-danger transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="removeBanner(b.id)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.3238 9.46777C19.3238 9.46777 18.7808 16.2028 18.4658 19.0398C18.3158 20.3948 17.4788 21.1888 16.1078 21.2138C13.4988 21.2608 10.8868 21.2638 8.27881 21.2088C6.95981 21.1818 6.13681 20.3778 5.98981 19.0468C5.67281 16.1848 5.13281 9.46777 5.13281 9.46777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20.708 6.23926H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <button class="border min-h-40 border-white/20 rounded-2xl grid place-items-center"
                      @click="showAddMainBannerModal = true">
                <span class="text-xl opacity-50">
                  + افزودن بنر
                </span>
              </button>
            </div>
            <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
              <span>بنری اضافه نشده است</span>
              <base-g-button color="info" @click="showAddMainBannerModal = true">
                افزودن بنر
              </base-g-button>
            </div>
          </div>
        </div>
        <div class="flex flex-col col-span-full mt-5">
          <span class="opacity-50 text-sm">افتخارات</span>
          <div class="grid grid-cols-5 gap-4 mt-4" v-if="template.honors.length > 0">
            <div class="relative flex flex-col bg-white rounded-xl p-4"
                v-for="b in template.honors" :key="b.id">
              <img :src="`${SITE_URL}/honors/${b.image.src}`"
                   :alt="b.image.alt"
                   class="w-full">
              <div class="flex flex-col space-y-2 px-4 text-center text-black">
                <a :href="b.link" target="_blank">{{ b.description }}</a>
              </div>
              <div class="absolute top-4 left-4 flex gap-2">
                <!--  Edit Honor  -->
                <button class="bg-warning/30 text-warning hover:bg-warning transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="selectedHonor = b,showEditHonorModal = true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.492 2.78906H7.753C4.678 2.78906 2.75 4.96606 2.75 8.04806V16.3621C2.75 19.4441 4.669 21.6211 7.753 21.6211H16.577C19.662 21.6211 21.581 19.4441 21.581 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82666 10.921L16.2997 3.44799C17.2307 2.51799 18.7397 2.51799 19.6707 3.44799L20.8877 4.66499C21.8187 5.59599 21.8187 7.10599 20.8877 8.03599L13.3787 15.545C12.9717 15.952 12.4197 16.181 11.8437 16.181H8.09766L8.19166 12.401C8.20566 11.845 8.43266 11.315 8.82666 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.1641 4.60254L19.7301 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <!--  Delete Honor  -->
                <button class="bg-danger/30 text-danger hover:bg-danger transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="removeHonor(b.id)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3238 9.46777C19.3238 9.46777 18.7808 16.2028 18.4658 19.0398C18.3158 20.3948 17.4788 21.1888 16.1078 21.2138C13.4988 21.2608 10.8868 21.2638 8.27881 21.2088C6.95981 21.1818 6.13681 20.3778 5.98981 19.0468C5.67281 16.1848 5.13281 9.46777 5.13281 9.46777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.708 6.23926H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <button class="border min-h-40 border-white/20 rounded-2xl grid place-items-center"
                    @click="showAddHonorModal = true">
                <span class="text-xl opacity-50">
                  + افزودن افتخار
                </span>
            </button>
          </div>
          <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
            <span>افتخاراتی اضافه نشده است</span>
            <base-g-button color="info" @click="showAddHonorModal = true">
              افزودن افتخار
            </base-g-button>
          </div>
        </div>
        <div class="col-span-full mt-5">
          <span class="opacity-50 text-sm">دیدگاه های ویژه</span>
          <div v-if="template.specialComments.length > 0" class="grid grid-cols-2 gap-4 mt-4">
            <div v-for="b in template.specialComments" :key="b.id"
                 class="relative bg-white rounded-xl flex gap-4 p-4">
              <img :src="`${SITE_URL}/specialComments/${b.userAvatar}`"
                   :alt="b.userName"
                   class="max-w-[150px] rounded-full aspect-square object-cover">
              <div class="flex flex-col text-black p-5 space-y-3 flex-1">
                <span class="text-2xl">{{b.userName}}</span>
                <div class="flex items-center gap-4">
                  <span>{{b.userJob}}</span>
                  -
                  <span>{{b.userScore}} امتیاز</span>
                </div>
                <hr>
                <p>
                  {{b.content}}
                </p>
              </div>
              <div class="absolute top-4 left-4 flex gap-2">
                <!--  Edit Comment  -->
                <button class="bg-warning/30 text-warning hover:bg-warning transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="selectedComment = b,showEditCommentModal = true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.492 2.78906H7.753C4.678 2.78906 2.75 4.96606 2.75 8.04806V16.3621C2.75 19.4441 4.669 21.6211 7.753 21.6211H16.577C19.662 21.6211 21.581 19.4441 21.581 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82666 10.921L16.2997 3.44799C17.2307 2.51799 18.7397 2.51799 19.6707 3.44799L20.8877 4.66499C21.8187 5.59599 21.8187 7.10599 20.8877 8.03599L13.3787 15.545C12.9717 15.952 12.4197 16.181 11.8437 16.181H8.09766L8.19166 12.401C8.20566 11.845 8.43266 11.315 8.82666 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.1641 4.60254L19.7301 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <!--  Delete Comment  -->
                <button class="bg-danger/30 text-danger hover:bg-danger transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="removeComment(b.id)">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3238 9.46777C19.3238 9.46777 18.7808 16.2028 18.4658 19.0398C18.3158 20.3948 17.4788 21.1888 16.1078 21.2138C13.4988 21.2608 10.8868 21.2638 8.27881 21.2088C6.95981 21.1818 6.13681 20.3778 5.98981 19.0468C5.67281 16.1848 5.13281 9.46777 5.13281 9.46777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.708 6.23926H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <button class="border min-h-40 border-white/20 rounded-2xl grid place-items-center"
                    @click="showAddCommentModal = true">
                <span class="text-xl opacity-50">
                  + افزودن دیدگاه
                </span>
            </button>
          </div>
          <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
            <span>دیدگاهی اضافه نشده است</span>
            <base-g-button color="info" @click="showAddCommentModal = true">
              افزودن دیدگاه
            </base-g-button>
          </div>
        </div>
        <div class="col-span-full mt-5">
          <span class="opacity-50 text-sm">پیش نمایش های مقاله</span>
          <div v-if="template.blogPreviews.length > 0"
               class="grid grid-cols-3 gap-4 mt-4">
            <div v-for="b in template.blogPreviews" :key="b.id"
                class="relative rounded-2xl bg-white text-black overflow-hidden flex flex-col">
              <img :src="`${SITE_URL}/blogPreviews/${b.banner.src}`"
                   :alt="b.banner.alt"
                   class="w-full max-h-[300px] object-cover">
              <div class="flex flex-col space-y-4 p-5 relative">
                <a :href="b.url" class="font-bold text-xl">
                  {{b.title}}
                </a>
                <p>{{b.shortDescription}}</p>
                <div class="absolute top-0 left-4 flex gap-2">
                  <!--  Edit Post  -->
                  <button class="bg-warning/30 text-warning hover:bg-warning transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="selectedBlog = b,showEditBlogModal = true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.492 2.78906H7.753C4.678 2.78906 2.75 4.96606 2.75 8.04806V16.3621C2.75 19.4441 4.669 21.6211 7.753 21.6211H16.577C19.662 21.6211 21.581 19.4441 21.581 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82666 10.921L16.2997 3.44799C17.2307 2.51799 18.7397 2.51799 19.6707 3.44799L20.8877 4.66499C21.8187 5.59599 21.8187 7.10599 20.8877 8.03599L13.3787 15.545C12.9717 15.952 12.4197 16.181 11.8437 16.181H8.09766L8.19166 12.401C8.20566 11.845 8.43266 11.315 8.82666 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.1641 4.60254L19.7301 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  <!--  Delete Post  -->
                  <button class="bg-danger/30 text-danger hover:bg-danger transition-colors duration-300 hover:text-white px-2 py-1 rounded-md top-2 left-2" @click="removeBlog(b.id)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.3238 9.46777C19.3238 9.46777 18.7808 16.2028 18.4658 19.0398C18.3158 20.3948 17.4788 21.1888 16.1078 21.2138C13.4988 21.2608 10.8868 21.2638 8.27881 21.2088C6.95981 21.1818 6.13681 20.3778 5.98981 19.0468C5.67281 16.1848 5.13281 9.46777 5.13281 9.46777" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20.708 6.23926H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M17.4406 6.23949C16.6556 6.23949 15.9796 5.68449 15.8256 4.91549L15.5826 3.69949C15.4326 3.13849 14.9246 2.75049 14.3456 2.75049H10.1126C9.53358 2.75049 9.02558 3.13849 8.87558 3.69949L8.63258 4.91549C8.47858 5.68449 7.80258 6.23949 7.01758 6.23949" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <button class="border min-h-40 border-white/20 rounded-2xl grid place-items-center"
                    @click="showAddBlogModal = true">
                <span class="text-xl opacity-50">
                  + افزودن مقاله
                </span>
            </button>
          </div>
          <div class="w-full flex items-center justify-between rounded-lg p-6 text-lg bg-gray-100/10" v-else>
            <span>مقاله ای اضافه نشده است</span>
            <base-g-button color="info" @click="showAddBlogModal = true">
              افزودن پست
            </base-g-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Banner, BlogPreview, DataTemplateDto, Honor, SpecialComment} from "~/models/mainPage/dataTemplate";
import {
  DeleteBanner,
  DeleteBlogPreview,
  DeleteHonor,
  DeleteSpecialComment,
  GetTemplateByAdmin, SetTemplateOrderBySections
} from "~/services/mainPage.service";
import {EOrderBy} from "~/models/product/EOrderBy";
import {SITE_URL} from "~/utilities/api.config";
import {ToastType} from "~/composables/useSwal";
import type {SetOrderBySectionsCommand} from "~/models/mainPage/mainPageCommands";

definePageMeta({
  layout:'admin'
})

const route = useRoute();
const templateId = parseInt(route.params.templateId[0] ?? '0');

const template:Ref<DataTemplateDto | null> = ref(null);

const loading = ref(true);

const firstOrderBy:Ref<EOrderBy | undefined> = ref();
const secondOrderBy:Ref<EOrderBy | undefined> = ref();

const showSetTopBannerModal = ref(false);
const showEditTopBannerModal = ref(false);

const showAddMainBannerModal = ref(false);
const showEditMainBannerModal = ref(false);
const selectedBanner:Ref<Banner | null> = ref(null);

const showAddHonorModal = ref(false);
const showEditHonorModal = ref(false);
const selectedHonor:Ref<Honor | null> = ref(null);

const showAddCommentModal = ref(false);
const showEditCommentModal = ref(false);
const selectedComment:Ref<SpecialComment | null> = ref(null);

const showAddBlogModal = ref(false);
const showEditBlogModal = ref(false);
const selectedBlog:Ref<BlogPreview | null> = ref(null);

const toast = useToast();

onMounted(async ()=>{
  await getData();
})

const getData = async ()=>{
  loading.value = true;

  const result = await GetTemplateByAdmin(templateId);
  if(result.isSuccess){
    template.value = result.data ?? null;
    firstOrderBy.value = template.value?.firstItemSection
    secondOrderBy.value = template.value?.secondItemSection;
    console.log(firstOrderBy.value,secondOrderBy.value)
  }

  loading.value = false;
}

const setOrderBySections = async () => {
  const result = await SetTemplateOrderBySections({
    firstSection:firstOrderBy.value,
    secondSection:secondOrderBy.value,
    templateId:templateId
  } as SetOrderBySectionsCommand);
  if(result.isSuccess){
    toast.showToast();
    await getData();
  }
  else{
    toast.showError(result.metaData);
  }
}

const removeBanner = async (id:number) =>{
  toast.showToast('آیا از حذف این بنر مطمئن هستید؟',ToastType.warning,0)
      .then(async (res) => {
        if(res.isConfirmed){
          const result = await DeleteBanner(templateId,id);
          if(result.isSuccess){
            await getData();
            toast.showToast();
          }
          else{
            toast.showError(result.metaData);
          }
        }
      })
}
const removeHonor = async (id:number) =>{
  toast.showToast('آیا از حذف این افتخار مطمئن هستید؟',ToastType.warning,0)
      .then(async (res) => {
        if(res.isConfirmed){
          const result = await DeleteHonor(templateId,id);
          if(result.isSuccess){
            await getData();
            toast.showToast();
          }
          else{
            toast.showError(result.metaData);
          }
        }
      })
}
const removeBlog = async (id:number) =>{
  toast.showToast('آیا از حذف این مقاله مطمئن هستید؟',ToastType.warning,0)
      .then(async (res) => {
        if(res.isConfirmed){
          const result = await DeleteBlogPreview(templateId,id);
          if(result.isSuccess){
            await getData();
            toast.showToast();
          }
          else{
            toast.showError(result.metaData);
          }
        }
      })
}
const removeComment = async (id:number) =>{
  toast.showToast('آیا از حذف این دیدگاه مطمئن هستید؟',ToastType.warning,0)
      .then(async (res) => {
        if(res.isConfirmed){
          const result = await DeleteSpecialComment(templateId,id);
          if(result.isSuccess){
            await getData();
            toast.showToast();
          }
          else{
            toast.showError(result.metaData);
          }
        }
      })
}

</script>