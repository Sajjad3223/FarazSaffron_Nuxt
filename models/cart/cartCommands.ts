import type {EOrderStatus} from "~/models/cart/cartQueries";

export interface SetOrderItemCountCommand{
    itemId:number;
    count:number;
}

export interface FinalizeOrderCommand{
    orderId:number;
    refCode:string;
}
export interface FollowUpCommand{
    orderId:number;
    followUpCode:string;
}
export interface SetOrderStatusCommand{
    orderId:number;
    orderStatus:EOrderStatus;
}
export interface AdminSetOrderDiscountCommand{
    userId:number;
    discountCode:string;
}