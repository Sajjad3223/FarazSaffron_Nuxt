import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {ProductImageDto} from "~/models/product/productImageDto";
import type {EItemType} from "~/models/EPostType";

export interface OrderFilterParams extends BaseFilterParams{
    search?:      string | null;
    orderStatus?: EOrderStatus | null;
    userId?:      number | null;
}

export enum EOrderStatus{
    Pending,
    Paid,
    Canceled,
    Returned,
}

export interface OrderFilterData extends BaseDto{
    userId:       number;
    fullName:     string;
    totalPrice:   number;
    discount:     DiscountData;
    finallyPrice: number;
    finallyDate?:  Date | null;
    isFinally:    boolean;
    referCode?:    string | null;
    orderStatus:  EOrderStatus;
    finalPrice:   number;
    itemsCount:   number;
}

export interface DiscountData {
    code:   string;
    amount: number;
}

export interface OrderDto extends BaseDto{
    userId:       number;
    fullName:     string;
    totalPrice:   number;
    discount:     DiscountData;
    finallyPrice: number;
    finallyDate?:  Date | null;
    isFinally:    boolean;
    referCode?:    string | null;
    orderStatus:  EOrderStatus;
    getFinalPrice: number;
    itemsCount:    number;
    orderItems:    OrderItem[];
}
export interface OrderItem extends BaseDto{
    orderId:      number;
    itemInfo:     ItemInfo;
    price:        number;
    count:        number;
    totalPrice:   number;
}

export interface ItemInfo {
    productId:    number;
    productName:  string;
    productSlug:  string;
    eItemType:    EItemType;
    productImage: ProductImageDto;
}

export interface OrderFilterResult extends BaseFilterResult<OrderFilterData>{}