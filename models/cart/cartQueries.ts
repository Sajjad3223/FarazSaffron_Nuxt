import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {EItemType} from "~/models/EPostType";
import type {Img} from "~/models/image";
import type {EPackingType} from "~/models/product/EPackingType";

export interface OrderFilterParams extends BaseFilterParams {
    search?: string | null;
    orderStatus?: EOrderStatus | null;
    userId?: number | null;
}

export enum EOrderStatus {
    Pending,
    Paid,
    Canceled,
    Returned,
    Delivered,
    Sending
}

export interface OrderFilterData extends BaseDto {
    userId: number;
    fullName: string;
    totalPrice: number;
    discount?: DiscountData | null;
    finallyPrice: number;
    finallyDate?: Date | null;
    isFinally: boolean;
    referCode?: string | null;
    orderStatus: EOrderStatus;
    finalPrice: number;
    itemsCount: number;
    orderItems: OrderItem[];
}

export interface DiscountData {
    code: string;
    amount: number;
}

export interface OrderDto extends BaseDto {
    userId: number;
    fullName: string;
    totalPrice: number;
    discount: DiscountData;
    finallyPrice: number;
    finallyDate?: Date | null;
    finallyPersianDate?: string | null;
    isFinally: boolean;
    referCode?: string | null;
    orderStatus: EOrderStatus;
    getFinalPrice: number;
    itemsCount: number;
    orderItems: OrderItem[];
    address?: OrderAddressDto | null;
    postFollowUpCode?: string | null;
    transmissionPrice?: number | null;
}

export interface OrderAddressDto {
    addressId: number;
    receiverName: string;
    receiverPhoneNumber: string;
    completeAddress: string;
}

export interface OrderItem extends BaseDto {
    orderId: number;
    itemInfo: ItemInfo;
    price: number;
    count: number;
    totalPrice: number;
}

export interface OrderGist {
    pending: number;
    paid: number;
    sent: number;
    delivered: number;
    returned: number;
    canceled: number;
}

export interface ItemInfo {
    productId: number;
    productName: string;
    productSlug: string;
    eItemType: EItemType;
    productImage: Img;
    weight: number;
    healthNumber?: string | null;
    packingType:EPackingType;
}
export interface PayWithWalletResult {
    orderId: number;
    refCode: string;
}

export interface OrderFilterResult extends BaseFilterResult<OrderFilterData> {
}