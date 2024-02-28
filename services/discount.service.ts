import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {DiscountDto, DiscountFilterParams, DiscountFilterResult} from "~/models/discount/discountQueries";
import type {CreateDiscountCommand, EditDiscountCommand} from "~/models/discount/discountCommands";

export const GetMyDiscounts = (params:DiscountFilterParams):Promise<ApiResponse<DiscountFilterResult>> => {
    return FetchApi("/discount",{
        method:'GET',
        params
    });
}
export const GetDiscount = (code:string):Promise<ApiResponse<DiscountDto>> => {
    return FetchApi(`/discount/${code}`,{
        method:'GET',
    });
}
export const UseDiscount = (code:string):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/contact/${code}`,{
        method:'POST',
    });
}

// Admin

export const GetDiscounts = (params:DiscountFilterParams):Promise<ApiResponse<DiscountFilterResult>> => {
    return FetchApi("/admin/discount",{
        method:'GET',
        params
    });
}
export const GetDiscountById = (discountId:number):Promise<ApiResponse<DiscountDto>> => {
    return FetchApi(`/admin/discount/${discountId}`,{
        method:'GET',
    });
}

export const CreateDiscount = (command:CreateDiscountCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/contact",{
        method:'POST',
        body:command
    });
}

export const EditDiscount = (command:EditDiscountCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/contact",{
        method:'PUT',
        body:command
    });
}
export const RemoveDiscount = (discountId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/contact/${discountId}`,{
        method:'DELETE'
    });
}