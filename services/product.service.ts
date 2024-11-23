import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {
    ProductDto,
    ProductFilterParams,
    ProductFilterResult, PropertyFilterParams,
    PropertyFilterResult, SelectFilterParams, SelectTagDto
} from "~/models/product/productQueries";
import type {
    CreatePropertyCommand,
    EditProductCommand, EditPropertyCommand, GroupEditDigikalaBasalamPriceData, SetMainImageFromImagesCommand,
    SetProductDiscountCommand, SetPropertiesCommand, SetSeoDataCommand, SetSpecificationsCommand
} from "~/models/product/productCommands";
import type {SetActivityCommand} from "~/models/setActivityCommand";
import {BASE_URL} from "~/utilities/api.config";

export const GetProducts = (params:ProductFilterParams):Promise<ApiResponse<ProductFilterResult>> => {
    return FetchApi("/product",{
        method:'GET',
        params,
        cache:'force-cache'
    });
}
export const GetProduct = (slug:string):Promise<ApiResponse<ProductDto>> => {
    return FetchApi(`/product/${slug}`,{
        method:'GET',
    });
}
export const GetProductById2 = (id:number):Promise<ApiResponse<ProductDto>> => {
    return FetchApi(`/product/id/${id}`,{
        method:'GET'
    });
}
export const GetRelativeProducts = (categoryId:number):Promise<ApiResponse<ProductFilterResult>> => {
    return FetchApi(`/product/relative/${categoryId}`,{
        method:'GET'
    });
}
export const GetProductsForSelectTag = (filterParams:SelectFilterParams):Promise<SelectTagDto[]> => {
    return $fetch(`/product/select`,{
        baseURL:BASE_URL,
        credentials:'include',
        retry:1,
        method:'GET',
        params:filterParams
    });
}

/// ---------------------------------------------------- Admin ---------------------------------------------------- ///

export const GetProductsByAdmin = (params:ProductFilterParams):Promise<ApiResponse<ProductFilterResult>> => {
    return FetchApi("/admin/product",{
        method:'GET',
        params
    });
}
export const GetProductById = (id:number):Promise<ApiResponse<ProductDto>> => {
    return FetchApi(`/admin/product/${id}`,{
        method:'GET'
    });
}
export const GetProperties = (filterParams:PropertyFilterParams):Promise<ApiResponse<PropertyFilterResult>> => {
    return FetchApi(`/admin/product/properties`,{
        method:'GET',
        params:filterParams
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
export const CreateProperty = (command:CreatePropertyCommand):Promise<ApiResponse<number>> => {
    return FetchApi(`/admin/Product/property`,{
        method:'POST',
        body:command
    });
}
export const EditProperty = (command:EditPropertyCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/property`,{
        method:'PUT',
        body:command
    });
}
export const DeleteProperty = (propertyId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/property/${propertyId}`,{
        method:'DELETE'
    });
}
export const SetProductActivity = (command:SetActivityCommand):Promise<ApiResponse<undefined>> => {
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
export const SetImages = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/images`,{
        method:'PUT',
        body:command,
    });
}
export const SetMainImage = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/mainImage`,{
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
export const RemoveImage = (productId:number,imageId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/images/${productId}/${imageId}`,{
        method:'DELETE',
    });
}
export const SetSpecifications = (command:SetSpecificationsCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/specification`,{
        method:'PUT',
        body:command
    });
}
export const SetProperties = (command:SetPropertiesCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/productProperties`,{
        method:'PUT',
        body:command
    });
}
export const SetSeoData = (command:SetSeoDataCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/seoData`,{
        method:'PUT',
        body:command
    });
}

export const GroupEditPrices = (command:Object):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/groupEdit/price`,{
        method:'PUT',
        body:{data:command}
    });
}

export const GroupEditDigikalaBasalamPrices = (command:GroupEditDigikalaBasalamPriceData[]):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/groupEdit/dgkala-basalam`,{
        method:'PUT',
        body:{data:command}
    });
}
export const GroupEditQuantities = (command:Object):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/Product/groupEdit/quantity`,{
        method:'PUT',
        body:{data:command}
    });
}