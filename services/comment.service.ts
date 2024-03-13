import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {CommentFilterParams, CommentFilterResult, GetPostScoreParams} from "~/models/comment/commentQueries";
import type {EditCommentCommand, SendCommentCommand} from "~/models/comment/commentCommands";

export const GetComments = (params:CommentFilterParams):Promise<ApiResponse<CommentFilterResult>> => {
    return FetchApi("/comment",{
        method:'GET',
        params
    });
}
export const GetUserComments = (params:CommentFilterParams):Promise<ApiResponse<CommentFilterResult>> => {
    return FetchApi("/comment/user",{
        method:'GET',
        params
    });
}
export const GetPostScore = (params:GetPostScoreParams):Promise<ApiResponse<number>> => {
    return FetchApi("/comment/score",{
        method:'GET',
        params
    });
}

export const SendComment = (command:SendCommentCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/comment",{
        method:'POST',
        body:command
    });
}
export const EditComment = (command:EditCommentCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/comment",{
        method:'PUT',
        body:command
    });
}
export const DeleteComment = (commentId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/comment/${commentId}`,{
        method:'DELETE'
    });
}

//TODO move to admin service

export const GetCommentsByAdmin = (params:CommentFilterParams):Promise<ApiResponse<CommentFilterResult>> => {
    return FetchApi("/admin/comment",{
        method:'GET',
        params
    });
}
export const GetPendingCommentsCount = ():Promise<ApiResponse<number>> => {
    return FetchApi("/admin/comment/pending",{
        method:'GET'
    });
}
export const VerifyComment = (commentId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/comment/verify/${commentId}`,{
        method:'PUT',
    });
}
export const RejectComment = (commentId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/comment/reject/${commentId}`,{
        method:'PUT',
    });
}