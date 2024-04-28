<template>
  <div>
    <div class="flex items-center w-2/3 mb-12 mx-auto my-12">
      <div class="relative grid place-items-center w-8 h-8 rounded-full bg-brandOrange text-brandOrange">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5.65546L5.23224 9.8877L14.1199 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="absolute -bottom-full w-max">سبد خرید</span>
      </div>
      <div class="h-px bg-brandOrange opacity-40 flex-1"></div>
      <div class="relative grid place-items-center w-8 h-8 rounded-full bg-brandOrange text-brandOrange">
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 5.65546L5.23224 9.8877L14.1199 1" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="absolute -bottom-full w-max">افزودن آدرس</span>
      </div>
      <div class="h-px bg-danger opacity-40 flex-1"></div>
      <div class="relative grid place-items-center w-8 h-8 rounded-full bg-danger text-danger">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8L8 16M16 16L8 8" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span class="absolute -bottom-full w-max">تکمیل پرداخت</span>
      </div>
    </div>

    <div class="w-full mt-8 py-24 bg-[#F8F8F8] rounded-2xl flex flex-col items-center space-y-8 ">
      <svg width="212" height="213" viewBox="0 0 212 213" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="106" cy="106.5" rx="106" ry="106.5" fill="#FF0E38" fill-opacity="0.1" class="pulse delayed"/>
        <circle cx="106" cy="107" r="84" fill="#FF0E38" fill-opacity="0.15" class="pulse"/>
        <circle cx="107.5" cy="108.5" r="60.5" fill="#FF0E38"/>
        <path d="M128 90.6228L88 128.141" stroke="white" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
        <path d="M128 128.141L88 90.6228" stroke="white" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>

      <h3 class="text-4xl font-semibold">پرداخت ناموفق</h3>
      <div class="flex items-center gap-4">
        <span class="opacity-60">علت:</span>
        <span class="font-light">{{ errorTranslator() }}</span>
      </div>
      <hr class="w-2/3">
      <div class="text-danger flex items-center gap-4">
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_878_7768)">
            <path
                d="M13.5 24.75C7.28663 24.75 2.25 19.7134 2.25 13.5C2.25 7.28663 7.28663 2.25 13.5 2.25C19.7134 2.25 24.75 7.28663 24.75 13.5C24.75 19.7134 19.7134 24.75 13.5 24.75ZM13.5 22.5C15.8869 22.5 18.1761 21.5518 19.864 19.864C21.5518 18.1761 22.5 15.8869 22.5 13.5C22.5 11.1131 21.5518 8.82387 19.864 7.13604C18.1761 5.44821 15.8869 4.5 13.5 4.5C11.1131 4.5 8.82387 5.44821 7.13604 7.13604C5.44821 8.82387 4.5 11.1131 4.5 13.5C4.5 15.8869 5.44821 18.1761 7.13604 19.864C8.82387 21.5518 11.1131 22.5 13.5 22.5ZM12.375 16.875H14.625V19.125H12.375V16.875ZM12.375 7.875H14.625V14.625H12.375V7.875Z"
                fill="currentColor"/>
          </g>
        </svg>
        <span>
         در صورت کسر وجه ، تا 72 ساعت آینده به حساب شما باز می گردد.
      </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'new-layout'
})

const route = useRoute();

const errorTranslator = () => {
  switch (route.query.resCode) {
    case "0" :
      return "تراکنش با موفقیت انجام شد";
    case "11":
      return "شماره کارت نامعتبر است";
    case "12":
      return "موجودی کافی نیست";
    case "13":
      return "رمز نادرست است";
    case "14":
      return "تعداد دفعات وارد کردن رمز بیش از حد مجاز است";
    case "15":
      return "کارت نامعتبر است";
    case "16":
      return "دفعات برداشت وجه بیش از حد مجاز است";
    case "17":
      return "کاربر از انجام تراکنش منصرف شده است";
    case "18":
      return "تاریخ انقضای کارت گذشته است";
    case "19":
      return "مبلغ برداشت وجه بیش از حد مجاز است";
    case "111":
      return "صادر کننده کارت نامعتبر است";
    case "112":
      return "خطای سوییچ صادر کننده کارت";
    case "113":
      return "پاسخی از صادر کننده کارت دریافت نشد";
    case "114":
      return "دارنده کارت مجاز به انجام این تراکنش نیست";
    case "21":
      return "پذیرنده نامعتبر است";
    case "23":
      return "خطای امنیتی رخ داده است";
    case "24":
      return "اطلاعات کاربری پذیرنده نامعتبر است";
    case "25":
      return "مبلغ نامعتبر است";
    case "31":
      return "پاسخ نامعتبر است";
    case "32":
      return "فرمت اطلاعات وارد شده صحیح نمی باشد";
    case "33":
      return "حساب نامعتبر است";
    case "34":
      return "خطای سیستمی";
    case "35":
      return "تاریخ نامعتبر است";
    case "41":
      return "شماره درخواست تکراری است";
    case "42":
      return "تراکنش sale یافت نشد";
    case "43":
      return "قبلا درخواست verify داده شده است";
    case "44":
      return "درخواست verify یافت نشد";
    case "45":
      return "تراکنش settle شده است";
    case "46":
      return "تراکنش settle نشده است";
    case "47":
      return "تراکنش settle یافت نشد";
    case "48":
      return "تراکنش reverse شده است";
    case "49":
      return "تراکنش refund یافت نشد";
    case "412":
      return "شناسه قبض نادرست است";
    case "413":
      return "شناسه پرداخت نادرست است";
    case "414":
      return "سازمان صادر کننده قبض نامعتبر است";
    case "415":
      return "زمان جلسه کاری به پایان رسیده است";
    case "416":
      return "خطا در ثبت اطلاعات";
    case "417":
      return "شناسه پرداخت کننده نادرست است";
    case "418":
      return "اشکال در تعریف اطلاعات مشتری";
    case "419":
      return "تعداد دفعات ورود اطلاعات از حد مجاز گذشته است";
    case "421":
      return "IP نا معتبر است";
    case "51":
      return "تراکنش تکراری است";
    case "54":
      return "تراکنش مرجع موجود نیست";
    case "55":
      return "تراکنش نامعتبر است";
    case "61":
      return "خطا در واریز";
      //خطاهای سیستمی
    case "-900":
      return "خطا در  تطبیق اطلاعات پرداخت با به پرداخت رخ داد";
    case "-901":
      return "وضعیت خرید نامشخص می باشد";
    case "-902":
      return "وضعیت نا‌مشخص در‌اتصال به‌پرداخت رخ داده است، مجددا امتحان کنید";
    case "-999":
      return "خطای سیستمی رخ داد";
  }
}

</script>

<style scoped>
.pulse{
  animation: pulseAnim 0.5s infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;
}
.delayed{
  animation-delay: 0.2s;
}

@keyframes pulseAnim {
  0%{
    opacity:1;
  }
  100%{
    opacity:0.2;
  }
}
</style>