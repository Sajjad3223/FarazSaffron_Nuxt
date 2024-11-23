import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {
    CreateScheduleCommand,
    EditScheduleCommand,
    ScheduleFilterParams,
    ScheduleFilterResult
} from "~/models/schedules/scheduleData";

export const GetSchedules = (filterParams:ScheduleFilterParams):Promise<ApiResponse<ScheduleFilterResult>> => {
    return FetchApi("/admin/schedule",{
        method:'GET',
        params:filterParams
    });
}

export const CreateSchedule = (command:CreateScheduleCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/schedule",{
        method:'POST',
        body:command
    });
}
export const EditSchedule = (command:EditScheduleCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/schedule",{
        method:'PUT',
        body:command
    });
}
export const DeleteSchedule = (questionId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/schedule/${questionId}`,{
        method:'DELETE'
    });
}