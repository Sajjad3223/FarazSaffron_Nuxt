export interface CreateCategoryCommand {
    parentId?:number | null;
    title:string;
    slug:string;
}
export interface EditCategoryCommand {
    categoryId:number;
    title:string;
    slug:string;
}