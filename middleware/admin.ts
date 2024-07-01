import {GetCurrentUser} from "~/services/user.service";
import type {UserDto} from "~/models/users/userDto";

export default defineNuxtRouteMiddleware(async (to, from) => {
    //@ts-ignore
    if(process.client) {

        //@ts-ignore
        let user:UserDto = useAccountStore().currentUser;
        if(user == null){
            //@ts-ignore
            user = (await GetCurrentUser()).data;
        }

        if (!user?.roles.some(r => r.title === 'ادمین' || r.title === 'مدیر محصولات')) {
            return navigateTo('/profile');
        }
    }
})