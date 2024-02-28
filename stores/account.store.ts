import type {UserDto} from "~/models/users/userDto";
import {ApiStatusCode} from "~/models/metaData";

export const useAccountStore = defineStore('account',()=> {
    const currentUser: Ref<UserDto | null> = ref(null);
    const initLoading = ref(true);

    const initData = async () => {
        initLoading.value = true;
        const promise = await Promise.all([
            //GetCurrentUserData(), TODO Implement
        ]);

        /*if (promise[0].isSuccess) {
            currentUser.value = promise[0].data!;
        } else if (
            promise[0].metaData.appStatusCode == ApiStatusCode.UnAuthorize
        ) {
            const cookie = useCookie("c-access-token");
            cookie.value = null;
            currentUser.value = null;
        }*/
        initLoading.value = false;
    };

    return{
        initData,
        currentUser,
        initLoading
    }
})