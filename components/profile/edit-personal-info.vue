<template>
<div>
  <p class="font-light text-xs  dark:text-white lg:text-sm mt-4">لطفا اطلاعات شناسایی خود را وارد کنید. نام و نام خانوادگی شما باید با اطلاعاتی که وارد می‌کنید همخوانی داشته باشند.</p>
  <form action="" class="mt-4 lg:p-4">
    <div class="grid grid-cols-2 gap-4">
      <base-f-input label="نام" name="name" id="name" is-required v-model="name"/>
      <base-f-input label="نام خانوادگی" name="lastName" id="lastName" is-required v-model="lastName" />
      <div class="col-span-full">
        <base-f-input label="کدملی" name="lastName" id="lastName" is-required :max-length="11" v-model="nationalCode"/>
      </div>
    </div>
    <div class="w-full md:w-2/3 lg:w-1/3 mr-auto mt-4">
      <base-f-button w-full color="primary">
        ثبت تغییرات
      </base-f-button>
    </div>
  </form>
</div>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';

const name=ref("سجاد");
const lastName=ref("میرشبی");
const nationalCode=ref("0691234567");
</script>