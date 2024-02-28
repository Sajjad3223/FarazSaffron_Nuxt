import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface DiscountFilterParams extends BaseFilterParams {
    search?: string | null;
    minAmount?: number | null;
    maxAmount?: number | null;
    fromDate?: Date | null;
    toDate?: Date | null;
    minAvailableCount?: number | null;
    maxAvailableCount?: number | null;
    userId?: number | null;
    justActives?: boolean | null;
}

export interface DiscountDto extends BaseDto {
    code: string;
    amountInPercent: number;
    expireTime: Date;
    availableQuantity: number;
    usedCount: number;
    justForUser: number;
    getAvailableCount: number;
}

export interface DiscountFilterResult extends BaseFilterResult<DiscountDto> {
}