import type {BaseDto} from "~/models/baseDto";

export interface SpecificationDto extends BaseDto {
    productId: number;
    title: string;
    value: string;
}