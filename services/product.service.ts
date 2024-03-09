import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {ProductDto, ProductFilterParams, ProductFilterResult} from "~/models/product/productQueries";
import type {
    CreateProductCommand,
    EditProductCommand, SetMainImageCommand, SetMainImageFromImagesCommand,
    SetProductDiscountCommand, SetProductImagesCommand, SetSpecificationsCommand
} from "~/models/product/productCommands";
import type {SetActivityCommand} from "~/models/setActivityCommand";

export const GetProducts = (params:ProductFilterParams):Promise<ApiResponse<ProductFilterResult>> => {
    return FetchApi("/product",{
        method:'GET',
    });
}
export const GetProduct = (slug:string):Promise<ApiResponse<ProductDto>> => {
    return FetchApi(`/product/${slug}`,{
        method:'GET'
    });
}

/// ---------------------------------------------------- Admin ---------------------------------------------------- ///

export const GetProductsByAdmin = (params:ProductFilterParams):Promise<ApiResponse<ProductFilterResult>> => {
    return FetchApi("/admin/product",{
        method:'GET',
    });
}
export const GetProductById = (id:number):Promise<ApiResponse<ProductDto>> => {
    return FetchApi(`/admin/product/${id}`,{
        method:'GET'
    });
}
export const CreateProduct = (command:FormData):Promise<ApiResponse<number>> => {
    return FetchApi(`/admin/Product`,{
        method:'POST',
        body:command
    });
}
export const EditProduct = (command:EditProductCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product`,{
        method:'PUT',
        body:command
    });
}
export const SetActivity = (command:SetActivityCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/setActivity`,{
        method:'PUT',
        body:command
    });
}
export const SetDiscount = (command:SetProductDiscountCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/discount`,{
        method:'PUT',
        body:command
    });
}
export const RemoveDiscount = (productId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/discount/${productId}`,{
        method:'DELETE',
    });
}
export const SetImages = (command:SetProductImagesCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/images`,{
        method:'PUT',
        body:command
    });
}
export const SetMainImage = (command:SetMainImageCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/mainImages`,{
        method:'PUT',
        body:command
    });
}
export const SetMainImageFromImages = (command:SetMainImageFromImagesCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/mainImagesFromImages`,{
        method:'PUT',
        body:command
    });
}
export const SetSpecifications = (command:SetSpecificationsCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/specification`,{
        method:'PUT',
        body:command
    });
}