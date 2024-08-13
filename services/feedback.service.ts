import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {FeedbackFilterParams, FeedbackFilterResult, SendFeedbackData} from "~/models/feedback/feedbackData";

export const CreateFeedback = (command:SendFeedbackData):Promise<ApiResponse<undefined>> => {
    return FetchApi("/feedback",{
        method:'POST',
        body:command
    });
}
export const DoesFeedbackExist = ():Promise<ApiResponse<undefined>> => {
    return FetchApi(`/feedback`,{
        method:'GET'
    });
}

// -------- Admin ---------- //


export const GetAllFeedbacks = (params:FeedbackFilterParams):Promise<ApiResponse<FeedbackFilterResult>> => {
    return FetchApi(`/admin/feedback`,{
        method:'GET',
        params
    });
}