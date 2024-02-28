import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {CreateReactionCommand} from "~/models/reaction/createReactionCommand";
import type {RemoveReactionCommand} from "~/models/reaction/removeReactionCommand";

export const CreateReaction = (command:CreateReactionCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/reaction",{
        method:'POST',
        body:command
    });
}
export const RemoveReaction = (command:RemoveReactionCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/reaction`,{
        method:'DELETE',
        body:command
    });
}