import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {VisitFilterParams, VisitFilterResult} from "~/models/visit/visitDto";
import type {AddVisitCommand} from "~/models/visit/addVisitCommand";

export const GetVisits = (filterParams:VisitFilterParams):Promise<ApiResponse<VisitFilterResult>> => {
    return FetchApi(`/admin/visit`,{
        method:'GET',
        params:filterParams
    });
}
export const CreateVisit = (command:AddVisitCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/visit`,{
        method:'POST',
        body:command
    });
}
