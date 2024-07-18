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

export interface SetAddressCommand{
    receiverFirstName: string;
    receiverLastName: string;
    receiverPhoneNumber: string;
    state: string;
    city: string;
    street: string;
    postCode: string;
    plaque: number;
    unit: number;
}