import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {AdminSidePanelData, DashboardData} from "~/models/admin/dashboardData";

export const GetDashboardData = ():Promise<ApiResponse<DashboardData>> => {
    return FetchApi(`/admin/home`,{
        method:'GET',
    });
}

export const GetAdminSidePanelData = ():Promise<ApiResponse<AdminSidePanelData>> => {
    return FetchApi(`/admin/Home/sidePanelData`,{
        method:'GET',
    });
}