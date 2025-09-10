import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {
    OrderDto,
    OrderFilterParams,
    OrderFilterResult,
    OrderGist,
    PayWithWalletResult
} from "~/models/cart/cartQueries";
import type {
    AdminSetOrderDiscountCommand,
    FinalizeOrderCommand, FollowUpCommand, SetAddressCommand, SetOrderDiscountCommand,
    SetOrderItemCountCommand,
    SetOrderStatusCommand
} from "~/models/cart/cartCommands";
import type {
    CreateTransmissionCommand,
    EditTransmissionCommand,
    SetTransmissionPriceCommand
} from "~/models/cart/transmissionCommands";
import type {
    GetSuitableTransmissionFilterParams, TransmissionDto,
    TransmissionFilterParams,
    TransmissionFilterResult
} from "~/models/cart/transmissionQueries";
import type {DiscountDto} from "~/models/discount/discountQueries";

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
export const SetDiscount = (command:SetOrderDiscountCommand):Promise<ApiResponse<DiscountDto>> => {
    return FetchApi(`/cart/setDiscount`,{
        method:'PUT',
        body:command
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
export const SetFollowUpCode = (command:FollowUpCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/cart/followUp`,{
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
export const PayWithWallet = (command:any):Promise<ApiResponse<PayWithWalletResult>> => {
    return FetchApi(`/payment/payWithWallet`,{
        method:'POST',
        body:command
    });
}

export const SetOrderAddress = (command:SetAddressCommand):Promise<ApiResponse<number>> => {
    return FetchApi(`/user/setAddress`,{
        method:'POST',
        body:command
    });
}

// Transmission
export const CreateTransmission = (command:CreateTransmissionCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/transmission`,{
        method:'POST',
        body:command
    });
}
export const EditTransmission = (command:EditTransmissionCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/transmission`,{
        method:'PUT',
        body:command
    });
}
export const SetOrderTransmissionPrice = (command:SetTransmissionPriceCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/transmissionPrice`,{
        method:'PUT',
        body:command
    });
}
export const DeleteTransmission = (transmissionId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/cart/transmission/${transmissionId}`,{
        method:'DELETE'
    });
}
export const GetAllTransmissions = (filterParams:TransmissionFilterParams):Promise<ApiResponse<TransmissionFilterResult>> => {
    return FetchApi(`/cart/transmission/`,{
        method:'GET',
        params:filterParams
    });
}
export const GetSuitableTransmission = (filterParams:GetSuitableTransmissionFilterParams):Promise<ApiResponse<TransmissionDto>> => {
    return FetchApi(`/cart/transmission/suitable`,{
        method:'GET',
        params:filterParams
    });
}