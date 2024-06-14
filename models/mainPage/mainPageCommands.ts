import type {EOrderBy} from "~/models/product/EOrderBy";

export interface EditTemplateCommand{
    templateId:number;
    title:string;
}
export interface SetOrderBySectionsCommand{
    templateId:number;
    firstSection:EOrderBy;
    secondSection:EOrderBy;
}