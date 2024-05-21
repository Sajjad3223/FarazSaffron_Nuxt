import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {CreateFavoriteCommand, FavoriteDto, IsUserFavoriteCommand} from "~/models/favorite/favoriteDto";
import type {EPostType} from "~/models/EPostType";

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
export const IsUserFavorite = (params:IsUserFavoriteCommand):Promise<ApiResponse<boolean>> => {
    return FetchApi(`/favorite/isUserFavorite`,{
        method:'GET',
        params:params
    });
}

export const CreateFavorite = (command:CreateFavoriteCommand):Promise<ApiResponse<undefined>> => {
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
export const DeleteFavoriteByPostId = (postId:number,postType:EPostType):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/favorite/postId?postId=${postId}&postType=${postType}`,{
        method:'DELETE',
    });
}