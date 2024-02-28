import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {PostFilterParams, PostFilterResult} from "~/models/blog/blogQueries";
import type {PostDto} from "~/models/blog/postDto";
import type {
    CreatePostCommand,
    EditPostCommand,
    SetPostActivityCommand,
    SetPostImageCommand, SetPostStatusCommand
} from "~/models/blog/blogCommands";

export const GetPosts = (params:PostFilterParams):Promise<ApiResponse<PostFilterResult>> => {
    return FetchApi("/blog",{
        method:'GET',
        params
    });
}
export const GetPost = (slug:string):Promise<ApiResponse<PostDto>> => {
    return FetchApi(`/blog/${slug}`,{
        method:'GET'
    });
}

export const CreatePost = (command:CreatePostCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/blog`,{
        method:'POST',
        body:command
    });
}
export const EditPost = (command:EditPostCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/blog`,{
        method:'PUT',
        body:command
    });
}
export const SetPostImage = (command:SetPostImageCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/blog/image`,{
        method:'PUT',
        body:command
    });
}
export const DeletePost = (postId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/blog/${postId}`,{
        method:'DELETE'
    });
}

// TODO move to admin service
export const GetPostsByAdmin = (params:PostFilterParams):Promise<ApiResponse<PostFilterResult>> => {
    return FetchApi("/admin/blog",{
        method:'GET',
        params
    });
}
export const GetPostByAdmin = (slug:string):Promise<ApiResponse<PostDto>> => {
    return FetchApi(`/admin/blog/${slug}`,{
        method:'GET'
    });
}

export const SetPostActivity = (command:SetPostActivityCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/blog/setActivity`,{
        method:'PUT',
        body:command
    });
}
export const SetPostStatus = (command:SetPostStatusCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/blog/setStatus`,{
        method:'PUT',
        body:command
    });
}