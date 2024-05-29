<template>
  <div>
    <Head>
      <Title>تیکت {{ ticketId }}</Title>
    </Head>
    <div>
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold flex items-center gap-2 dark:text-white">
          <NuxtLink to="/admin/tickets">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
          <span class="font-light text-base">{{ticket.title}}</span>
        </div>
        <base-g-button button-type="white" is-icon @click="closeTicket" v-if="ticket.ticketStatus != ETicketStatus.Closed">
          بستن تیکت
        </base-g-button>
      </div>
      <hr class="my-3 border-[1px] dark:border-gray-600">
    </div>
    <div class="relative" v-if="!accountStore.initLoading">
      <ul ref="chatBox" class="w-full flex flex-col bg-gray-100 p-5 rounded-xl min-h-[50vh] max-h-[60vh] pb-[120px] overflow-y-auto space-y-4">
        <li class="mx-12 flex items-center gap-2">
          <div class="flex-1 h-px bg-black/20"></div>
          <span class="font-thin opacity-70 text-sm">{{ticket.persianDate}}</span>
          <div class="flex-1 h-px bg-black/20"></div>
        </li>
        <li class="bg-indigo-100 flex self-end flex-col w-max max-w-[50%] space-y-2 p-4 border text-sm font-light" style="border-radius: 2px 16px 16px 16px">
          <span class="font-normal">{{ticket.sender.fullName}}</span>
          <p>
            {{ticket.content}}
          </p>
          <span class="mr-auto text-xs opacity-70">{{ticket.persianTime}}</span>
        </li>
        <li :class="['flex flex-col space-y-2 p-4 w-max max-w-[50%] border text-sm font-light',message.sender.userId == ticket.sender.userId ? 'self-end bg-indigo-100' : 'bg-white']"
            :style="{borderRadius: message.sender.userId == accountStore.currentUser?.id ?'16px 2px 16px 16px' : '2px 16px 16px 16px' }"
            v-for="message in ticket.messages" :key="message.id">
          <template v-if="message.sender.userId == accountStore.currentUser?.id">
            <span class="font-normal">{{message.sender.fullName}}</span>
            <p>
              {{message.message}}
            </p>
            <span class="mr-auto text-xs opacity-70">{{ticket.persianTime}}</span>
          </template>
          <template v-else>
            <span class="font-normal">{{message.sender.fullName}}</span>
            <p>
              {{message.message}}
            </p>
            <span class="ml-auto text-xs opacity-70">{{ticket.persianTime}}</span>
          </template>
        </li>
      </ul>
      <div class="absolute inset-x-0 bottom-0 rounded-b-xl p-4 bg-white flex gap-2">
        <base-g-input label="پیام ..." required v-model="sendMessageData.text" @keydown.enter="send"/>
        <base-g-button is-icon :px="2" @click="send" :is-loading="loading">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.66864 16.9877C3.65932 17.7044 4.04755 18.3631 4.67801 18.7089L19.3699 26.781C20.0279 27.1529 20.8037 27.1072 21.4237 26.6838C22.0552 26.2532 22.3784 25.2283 22.2019 24.488L20.8303 18.7418C20.6895 18.1525 20.1622 17.7376 19.5555 17.7402L11.3795 17.7656C10.9608 17.774 10.6212 17.4344 10.6296 17.0158C10.6309 16.6042 10.9655 16.2696 11.3841 16.2612L19.5679 16.2422C20.1746 16.2411 20.7046 15.8243 20.849 15.2342L22.2691 9.46507C22.4415 8.78333 22.2449 8.10273 21.7639 7.6217C21.7073 7.56511 21.6436 7.50145 21.5799 7.45197C20.957 6.97138 20.1411 6.91005 19.4446 7.2812L4.70286 15.2744C4.07028 15.6098 3.67796 16.271 3.66864 16.9877" fill="white"/>
          </svg>
        </base-g-button>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import type {SendTicketMessageCommand} from "~/models/ticket/ticketCommands";
import {CloseTicketByAdmin, GetTicket, SendTicketMessageByAdmin} from "~/services/ticket.service";
import {ETicketStatus, type TicketDto} from "~/models/ticket/ticketQueries";
import {ApiStatusCode} from "~/models/metaData";
import {ToastType} from "~/composables/useSwal";

definePageMeta({
  layout:'admin'
})

const accountStore = useAccountStore();
const route = useRoute();
const router = useRouter();
const ticketId = Number(route.params.ticketId);
const toast = useToast();
const {data,pending,refresh} = await useAsyncData("ticket" + ticketId,()=>GetTicket(ticketId));
if(!data.value?.isSuccess){
  if(process.server)
    throw createError({statusCode:404,statusMessage:"تیکت یافت نشد"})
  else{
    router.push("/404")
    toast.showError({message:"تیکت یافت نشد",appStatusCode:ApiStatusCode.NotFound})
  }
}

const ticket:Ref<TicketDto> = ref(data.value?.data!);
const loading = ref(false);
const chatBox = ref();

const sendMessageData:SendTicketMessageCommand = reactive({
  ticketId,
  text:''
});

onMounted(async ()=>{
  setInterval(async ()=>{
    await refreshTicket();
  },5000)
  chatBox.value.scrollTop = chatBox.value.scrollHeight;
})

const send = async ()=>{
  if(loading.value) return;
  loading.value = true;

  const result = await SendTicketMessageByAdmin(sendMessageData);
  if(result.isSuccess){
    sendMessageData.text = "";
    await refreshTicket();
  }else{
    await toast.showError(result.metaData)
  }
  chatBox.value.scrollTop = chatBox.value.scrollHeight;

  loading.value = false;
}

const refreshTicket = async ()=>{
  const ticketRes = await GetTicket(ticketId);
  if(ticketRes.isSuccess){
    ticket.value = ticketRes.data!;
  }
}

const closeTicket = async ()=>{
  toast.showToast(
      "آیا از بستن این تیکت اطمینان دارید؟",
      ToastType.warning
  ).then(async (res)=>{
    if(res.isConfirmed){
      const result = await CloseTicketByAdmin(ticketId);
      if(result.isSuccess){
        toast.showToast();
        await router.push("/admin/tickets");
      }
    }
  })
}

</script>