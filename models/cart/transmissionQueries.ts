import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface TransmissionDto extends BaseDto{
    state:string;
    city:string;
    weight:number;
    price:number;
}

export interface TransmissionFilterParams extends BaseFilterParams{
    search?: string | null | undefined;
    minPrice?:number | null | undefined;
    maxPrice?:number | null | undefined;
    minWeight?:number | null | undefined;
    maxWeight?:number | null | undefined;
    orderBy?:ETransmissionOrderBy | null | undefined;
}
export interface GetSuitableTransmissionFilterParams extends BaseFilterParams{
    state: string;
    city: string;
    weight:number;
}

export enum ETransmissionOrderBy{
    CreationDate,
    Alphabet,
    CheapFirst,
    ExpensiveFirst
}

export interface TransmissionFilterResult extends BaseFilterResult<TransmissionDto>{

}