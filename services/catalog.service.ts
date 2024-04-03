import type {CatalogDto, CatalogFilterParams, CatalogFilterResult} from "~/models/product/productQueries";
import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {EditCatalogCommand} from "~/models/product/productCommands";


export const GetCatalogs = (params:CatalogFilterParams):Promise<ApiResponse<CatalogFilterResult>> => {
    return FetchApi("/admin/catalog",{
        method:'GET',
        params
    });
}
export const GetCatalog = (catalogId:number):Promise<ApiResponse<CatalogDto>> => {
    return FetchApi(`/catalog/${catalogId}`,{
        method:'GET'
    });
}
export const GetCatalogFile = (catalogId:number):Promise<any> => { // TODO Test
    return FetchApi(`/catalog/file/${catalogId}`,{
        method:'GET'
    });
}


export const CreateCatalog= (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/catalog",{
        method:'POST',
        body:command
    });
}
export const EditCatalog = (command:EditCatalogCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/catalog",{
        method:'PUT',
        body:command
    });
}
export const SetCatalogFile = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/catalog/set-file",{
        method:'PUT',
        body:command
    });
}
export const DeleteCatalog = (catalogId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/catalog/${catalogId}`,{
        method:'DELETE'
    });
}