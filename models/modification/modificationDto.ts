import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {BaseDto} from "~/models/baseDto";

export interface ModificationFilterData extends BaseDto{
    itemId: number;
    userId: number;
    userName: string;
    itemTitle: string;
    modificationType:EModificationType;
}
export interface ModificationDto extends ModificationFilterData{
    oldValue: string;
    newValue: string;
}

export enum EModificationType{
    Create,
    Edit,
    Delete,
    SetActivity
}

export interface ModificationFilterParams extends BaseFilterParams{
    itemId?: number | undefined;
    userId?: number | undefined;
    userName?: string | undefined;
    search?: string | undefined;
    fromDate?: string | undefined;
    toDate?: string | undefined;
}

export interface ModificationFilterResult extends BaseFilterResult<ModificationFilterData>{

}