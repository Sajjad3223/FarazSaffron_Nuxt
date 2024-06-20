import type {BaseMongoDto} from "~/models/baseMongoDto";
import type {EPostType} from "~/models/EPostType";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface VisitDto extends BaseMongoDto{
    ip: string;
    entityId:number;
    address: string;
    device: string;
    postType: EPostType;
}

export interface VisitFilterParams extends BaseFilterParams{
    search?:string | undefined | null;
}

export interface VisitFilterResult extends BaseFilterResult<VisitDto>{}