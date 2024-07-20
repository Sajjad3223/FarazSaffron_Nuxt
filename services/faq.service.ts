import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {QuestionDto} from "~/models/faq/questionDto";
import type {CreateQuestionCommand, EditQuestionCommand} from "~/models/faq/questionCommands";

export const GetQuestions = ():Promise<ApiResponse<QuestionDto[]>> => {
    return FetchApi("/faq",{
        method:'GET'
    });
}

export const CreateQuestion = (command:CreateQuestionCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/faq",{
        method:'POST',
        body:command
    });
}
export const EditQuestion = (command:EditQuestionCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/faq",{
        method:'PUT',
        body:command
    });
}
export const DeleteQuestion = (questionId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/faq/${questionId}`,{
        method:'DELETE'
    });
}