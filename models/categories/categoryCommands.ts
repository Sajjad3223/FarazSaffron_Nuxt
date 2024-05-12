export interface CreateCategoryCommand {
    parentId?:number | null;
    title:string;
    slug:string;
}
export interface EditCategoryCommand {
    categoryId:number;
    parentId?:number | null;
    title:string;
    slug:string;
}