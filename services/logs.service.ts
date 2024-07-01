import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {LogDto, LogsFilterParams, LogsFilterResult} from "~/models/log/logDto";

export const GetAllLogs = (filterParams:LogsFilterParams):Promise<ApiResponse<LogsFilterResult>> => {
    return FetchApi(`/admin/Logs`,{
        method:'GET',
        params:filterParams
    });
}
export const GetLog = (id:number):Promise<ApiResponse<LogDto>> => {
    return FetchApi(`/admin/Logs/${id}`,{
        method:'GET',
    });
}
