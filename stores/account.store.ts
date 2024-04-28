import type {UserDto} from "~/models/users/userDto";
import {ApiStatusCode} from "~/models/metaData";
import {GetCurrentUser} from "~/services/user.service";
import {GetUnseenNotificationsCount} from "~/services/notification.service";

export const useAccountStore = defineStore('account',()=> {
    const currentUser: Ref<UserDto | null> = ref(null);
    const initLoading = ref(true);
    const unseenNotifs: Ref<number | null> = ref(0);

    const isAdmin = ()=>{
        return currentUser.value?.roles.some(r=>r.title === 'ادمین');
    }
    const initData = async () => {
        initLoading.value = true;

        const userData = await GetCurrentUser();
        if (userData.isSuccess) {
            currentUser.value = userData.data!;
            const notifsResult = await GetUnseenNotificationsCount();
            if(notifsResult.isSuccess){
                unseenNotifs.value = notifsResult.data ?? 0;
            }
        } else if ( userData.metaData.appStatusCode == ApiStatusCode.UnAuthorize) {
            const cookie = useCookie("c-access-token");
            cookie.value = null;
            currentUser.value = null;
        }

        initLoading.value = false;
    };

    return{
        initData,
        currentUser,
        initLoading,
        isAdmin,
        unseenNotifs
    }
})