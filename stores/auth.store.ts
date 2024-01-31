import { defineStore } from "pinia";


export const useAuthStore = defineStore("auth",()=>{
    const isLoginModalOpen = ref(false);

    return {
        isLoginModalOpen
    };
})