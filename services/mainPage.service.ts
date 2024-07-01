import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {DataTemplateDto, DataTemplateFilterParams, DataTemplateFilterResult} from "~/models/mainPage/dataTemplate";
import type {EditTemplateCommand, SetOrderBySectionsCommand} from "~/models/mainPage/mainPageCommands";

export const GetActiveTemplate = ():Promise<ApiResponse<DataTemplateDto>> => {
    return FetchApi(`/MainPage`,{
        method:'GET',
    });
}
export const GetAllTemplates = (params:DataTemplateFilterParams):Promise<ApiResponse<DataTemplateFilterResult>> => {
    return FetchApi("/admin/MainPage",{
        method:'GET',
        params
    });
}
export const GetTemplateByAdmin = (templateId:number):Promise<ApiResponse<DataTemplateDto>> => {
    return FetchApi(`/admin/MainPage/${templateId}`,{
        method:'GET',
    });
}

// ---------- Commands ---------- //

export const CreateTemplate = (title:string):Promise<ApiResponse<number>> => {
    return FetchApi(`/admin/MainPage`,{
        method:'POST',
        body:{
            title
        }
    });
}
export const EditTemplate = (command:EditTemplateCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage`,{
        method:'PUT',
        body:command
    });
}
export const SetActiveTemplate = (templateId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/${templateId}`,{
        method:'PUT'
    });
}
export const SetTemplateOrderBySections = (command:SetOrderBySectionsCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/sections`,{
        method:'PUT',
        body:command
    });
}

export const AddToMainBanners = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/banners`,{
        method:'POST',
        body:command
    });
}
export const SetTopBanner = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/banners/top-banner`,{
        method:'PUT',
        body:command
    });
}
export const EditTopBanner = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/banners/top-banner/edit`,{
        method:'PUT',
        body:command
    });
}
export const EditBanner = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/banners`,{
        method:'PUT',
        body:command
    });
}
export const DeleteBanner = (templateId:number,bannerId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/banners`,{
        method:'DELETE',
        body:{
            templateId,
            bannerId
        }
    });
}

export const AddToHonors = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/honors`,{
        method:'POST',
        body:command
    });
}
export const EditHonor = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/honors`,{
        method:'PUT',
        body:command
    });
}
export const DeleteHonor = (templateId:number,honorId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/honors`,{
        method:'DELETE',
        body:{
            templateId,
            honorId
        }
    });
}

export const AddToBlogPreviews = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/blogs`,{
        method:'POST',
        body:command
    });
}
export const EditBlogPreview = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/blogs`,{
        method:'PUT',
        body:command
    });
}
export const DeleteBlogPreview = (templateId:number,blogPreviewId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/blogs`,{
        method:'DELETE',
        body:{
            templateId,
            blogPreviewId
        }
    });
}

export const AddToSpecialComments = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/comments`,{
        method:'POST',
        body:command
    });
}
export const EditSpecialComment = (command:FormData):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/comments`,{
        method:'PUT',
        body:command
    });
}
export const DeleteSpecialComment = (templateId:number,specialCommentId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/MainPage/comments`,{
        method:'DELETE',
        body:{
            templateId,
            specialCommentId
        }
    });
}