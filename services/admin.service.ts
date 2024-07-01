import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {DashboardData} from "~/models/admin/dashboardData";

export const GetDashboardData = ():Promise<ApiResponse<DashboardData>> => {
    return FetchApi(`/admin/home`,{
        method:'GET',
    });
}