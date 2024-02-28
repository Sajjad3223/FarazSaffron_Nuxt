import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {CategoryDto, CategoryFilterParams, CategoryFilterResult} from "~/models/categories/categoryQueries";
import type {CreateCategoryCommand, EditCategoryCommand} from "~/models/categories/categoryCommands";

export const GetCategories = (params:CategoryFilterParams):Promise<ApiResponse<CategoryFilterResult>> => {
    return FetchApi("/auth/category",{
        method:'GET',
        params
    });
}
export const GetCategory = (categoryId:number):Promise<ApiResponse<CategoryDto>> => {
    return FetchApi(`/auth/category/${categoryId}`,{
        method:'GET'
    });
}

//TODO move to admin service

export const GetCategoriesByAdmin = (params:CategoryFilterParams):Promise<ApiResponse<CategoryFilterResult>> => {
    return FetchApi("/auth/admin/category",{
        method:'GET',
        params
    });
}
export const GetCategoryByAdmin = (categoryId:number):Promise<ApiResponse<CategoryDto>> => {
    return FetchApi(`/auth/admin/category/${categoryId}`,{
        method:'GET'
    });
}


export const CreateCategory = (command:CreateCategoryCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/auth/admin/category",{
        method:'POST',
        body:command
    });
}
export const EditCategory = (command:EditCategoryCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/auth/admin/category",{
        method:'PUT',
        body:command
    });
}
export const DeleteCategory = (categoryId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/auth/admin/category/${categoryId}`,{
        method:'DELETE'
    });
}