export interface CreateDiscountCommand{
    amountInPercent:   number;
    expireTime:        Date;
    availableQuantity: number;
    justForUser?:       number | null;
}
export interface EditDiscountCommand{
    discountId:   number;
    amountInPercent:   number;
    expireTime:        Date;
    availableQuantity: number;
    justForUser?:       number | null;
}