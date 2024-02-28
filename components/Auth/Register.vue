<template>
  <Form class="flex flex-col items-start space-y-2 m-4">
    <img src="~/assets/images/GP-filled.png" alt="GP" class=" max-h-16 self-center">
    <span class="font-light">سلام!</span>
    <base-f-input name="user" id="user" label="لطفا ایمیل یا شماره تلفن خود را وارد کنید" is-required place-holder="09121111111 | test@example.com" class="text-sm lg:text-base" :rtl="false" />
    <button class="bg-brandOrange rounded-xl text-white font-bold text-xl w-full py-2 mt-4" @click.prevent="login">ورود</button>
    <span class="text-xs text-center lg:text-sm font-thin mt-2 mx-auto">
      <NuxtLink to="/" class="text-primary hover:underline">شرایط جی پی</NuxtLink>
       و
      <NuxtLink to="/" class="text-primary hover:underline">قوانین حریم ‌خصوصی</NuxtLink>
      را میپذیرم
    </span>
  </Form>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';

const router = useRouter();

const emits = defineEmits(['loggedIn']);

const login = ()=>{
  router.push('/profile');
  emits('loggedIn',true);
}
</script>