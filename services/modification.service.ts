import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {ModificationDto, ModificationFilterParams, ModificationFilterResult} from "~/models/modification/modificationDto";

export const GetAllModifications = (filterParams:ModificationFilterParams):Promise<ApiResponse<ModificationFilterResult>> => {
    return FetchApi(`/admin/Modification`,{
        method:'GET',
        params:filterParams
    });
}
export const GetModification = (id:number):Promise<ApiResponse<ModificationDto>> => {
    return FetchApi(`/admin/Modification/${id}`,{
        method:'GET',
    });
}
