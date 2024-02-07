import { defineStore } from "pinia";


export const useAuthStore = defineStore("auth",()=>{
    const isLoginModalOpen = ref(false);
    const isLoggedIn = ref(false);

    return {
        isLoginModalOpen,
        isLoggedIn
    };
})