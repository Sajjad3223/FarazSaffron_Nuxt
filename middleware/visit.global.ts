import {CreateVisit} from "~/services/visit.service";
import type {AddVisitCommand} from "~/models/visit/addVisitCommand";

export default defineNuxtRouteMiddleware((to, from) => {
    if(useAccountStore().isAdmin) return;
    if(process.client){
        const result = CreateVisit({
            address:window.location.href
        } as AddVisitCommand);
    }
})