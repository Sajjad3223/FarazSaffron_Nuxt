import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {OrderDto, OrderFilterParams, OrderFilterResult, OrderGist} from "~/models/cart/cartQueries";
import type {
    AdminSetOrderDiscountCommand,
    FinalizeOrderCommand,
    SetOrderItemCountCommand,
    SetOrderStatusCommand
} from "~/models/cart/cartCommands";

export const GetOrders = (params:OrderFilterParams):Promise<ApiResponse<OrderFilterResult>> => {
    return FetchApi("/cart",{
        method:'GET',
        params
    });
}
export const GetOrderById = (orderId:number):Promise<ApiResponse<OrderDto>> => {
    return FetchApi(`/cart/${orderId}`,{
        method:'GET',
    });
}
export const GetPendingOrder = ():Promise<ApiResponse<OrderDto>> => {
    return FetchApi(`/cart/pending`,{
        method:'GET',
    });
}
export const GetOrdersGist = ():Promise<ApiResponse<OrderGist>> => {
    return FetchApi(`/cart/gist`,{
        method:'GET',
    });
}
export const AddToCart = (productId:number,count:number = 1):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart`,{
        method:'POST',
        body:{
            productId,
            count
        }
    });
}
export const IncreaseCount = (itemId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/increase/${itemId}`,{
        method:'PUT',
    });
}
export const DecreaseCount = (itemId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/decrease/${itemId}`,{
        method:'PUT',
    });
}
export const SetItemCount = (command:SetOrderItemCountCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/setCount`,{
        method:'PUT',
        body:command
    });
}
export const RemoveItem = (itemId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/remove/${itemId}`,{
        method:'DELETE',
    });
}
export const RemoveAllItems = ():Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/clear`,{
        method:'DELETE',
    });
}
export const SetDiscount = (discountCode:string):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/setDiscount/${discountCode}`,{
        method:'PUT',
    });
}
export const RemoveDiscount = ():Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/removeDiscount`,{
        method:'DELETE',
    });
}
export const FinalizeOrder = (command:FinalizeOrderCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/finalize`,{
        method:'PUT',
        body:command
    });
}
export const SetOrderStatus = (command:SetOrderStatusCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/status`,{
        method:'PUT',
        body:command
    });
}

export const GetOrdersByAdmin = (params:OrderFilterParams):Promise<ApiResponse<OrderFilterResult>> => {
    return FetchApi("/admin/cart",{
        method:'GET',
        params
    });
}
export const GetOrderByAdminById = (orderId:number):Promise<ApiResponse<OrderDto>> => {
    return FetchApi(`/admin/cart/${orderId}`,{
        method:'GET',
    });
}

export const SetDiscountByAdmin = (command:AdminSetOrderDiscountCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/cart/setDiscount`,{
        method:'PUT',
        body:command
    });
}
export const RemoveDiscountByAdmin = (userId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/removeDiscount/${userId}`,{
        method:'DELETE',
    });
}
export const FinalizeOrderByAdmin = (command:FinalizeOrderCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/cart/finalize`,{
        method:'PUT',
        body:command
    });
}
export const SetOrderStatusByAdmin = (command:SetOrderStatusCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/cart/status`,{
        method:'PUT',
        body:command
    });
}