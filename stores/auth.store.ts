import { defineStore } from "pinia";
import type {LoginResultDto} from "~/models/users/loginResultDto";


export const useAuthStore = defineStore("auth",()=>{
    const isLoginModalOpen = ref(false);
    const callBackFunctionAfterLogin: Ref<Function | null> = ref(null);
    const currentStep = ref('login');

    const isLoggedIn = computed(() => {
        const cookie = getAccessToken();
        return cookie != null && cookie != "";
    });
    const getAccessToken = () => {
        const cookie = useCookie("c-access-token", {
            watch: false,
            expires: new Date(new Date().setDate(new Date().getDate() + 30)),
        });
        return cookie.value;
    };
    const setToken = (tokenResult: LoginResultDto) => {
        const cookie = useCookie("c-access-token", {
            expires: new Date(new Date().setDate(new Date().getDate() + 30)),
        });
        cookie.value = tokenResult.token;
        setTimeout(() => {
            if (
                callBackFunctionAfterLogin.value != null &&
                callBackFunctionAfterLogin.value != undefined
            ) {
                callBackFunctionAfterLogin.value!();
            }
        }, 300);
    };
    const router = useRouter();
    const logOut = async () => {
        const cookie = useCookie("c-access-token");
        cookie.value = null;
        await router.push('/');
        location.reload();
    };

    const changeStep = (
        step:
            | "login"
            | "register"
            | "forgotPassword"
            | "activate"
            | "forgotPasswordByEmail"
    ) => {
        currentStep.value = step;
    };

    return {
        isLoginModalOpen,
        isLoggedIn,
        getAccessToken,
        setToken,
        logOut,
        changeStep,
        currentStep
    };
})