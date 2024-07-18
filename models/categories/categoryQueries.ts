import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import exp from "node:constants";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface CategoryFilterParams extends BaseFilterParams{
    search?:string | null;
}

export interface CategoryDto extends BaseDto{
    parentId:     number;
    title:        string;
    slug:         string;
    imageName?:   string;
    children:     CategoryDto[];
}

export interface CategoryFilterResult extends BaseFilterResult<CategoryDto>{}