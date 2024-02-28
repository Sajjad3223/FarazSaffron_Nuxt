import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {FavoriteDto} from "~/models/favorite/favoriteDto";

export const GetFavorites = (params:BaseFilterParams):Promise<ApiResponse<FavoriteDto[]>> => {
    return FetchApi("/favorite",{
        method:'GET',
        params
    });
}
export const GetFavoritesCount = ():Promise<ApiResponse<number>> => {
    return FetchApi("/favorite/count",{
        method:'GET',
    });
}

export const CreateFavorite = (command:FavoriteDto):Promise<ApiResponse<undefined>> => {
    return FetchApi("/favorite",{
        method:'POST',
        body:command
    });
}
export const DeleteFavorite = (favoriteId:string):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/favorite?favoriteId=${favoriteId}`,{
        method:'DELETE',
    });
}