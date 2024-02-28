import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {NotificationFilterParams, NotificationFilterResult} from "~/models/notification/notificationQueries";
import type {CreateNotificationCommand, EditNotificationCommand} from "~/models/notification/notificationCommands";

export const GetNotifications = (params:NotificationFilterParams):Promise<ApiResponse<NotificationFilterResult>> => {
    return FetchApi("/notification",{
        method:'GET',
        params
    });
}
export const GetUnseenNotificationsCount = ():Promise<ApiResponse<number>> => {
    return FetchApi("/notification/unseenCount",{
        method:'GET',
    });
}

export const Seen = (notifId:string):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/notification/seen/${notifId}`,{
        method:'PUT'
    });
}
export const SeenAll = ():Promise<ApiResponse<undefined>> => {
    return FetchApi(`/notification/seenAll}`,{
        method:'PUT',
    });
}

// Admin
export const GetNotificationsByAdmin = (params:NotificationFilterParams):Promise<ApiResponse<NotificationFilterResult>> => {
    return FetchApi("/admin/notification",{
        method:'GET',
        params
    });
}

export const CreateNotification = (command:CreateNotificationCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/notification",{
        method:'POST',
        body:command
    });
}
export const EditNotification = (command:EditNotificationCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/notification",{
        method:'PUT',
        body:command
    });
}
export const DeleteNotification = (notificationId:string):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/notification/${notificationId}`,{
        method:'DELETE',
    });
}