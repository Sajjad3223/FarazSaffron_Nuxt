import type {EDiscountType} from "~/models/discount/discountQueries";

export interface CreateDiscountCommand{
    amountInPercent:   number;
    days:        number;
    hours:        number;
    minutes:        number;
    availableQuantity: number;
    justForUser?:       number | null;
    customCode?:       string | null;
    discountType:       EDiscountType;
}
export interface EditDiscountCommand{
    discountId:   number;
    amountInPercent:   number;
    days:        number;
    hours:        number;
    minutes:        number;
    availableQuantity: number;
    justForUser?:       number | null;
    discountType:       EDiscountType;
}