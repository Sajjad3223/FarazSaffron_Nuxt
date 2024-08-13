import type {BaseMongoDto} from "~/models/baseMongoDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface FeedbackData extends BaseMongoDto{
    userId?:number | null;
    ip:string;
    feedbackType:EFeedbackType;
    description?:string | null;
    urlAddress?:string | null;
}

export enum EFeedbackType{
    Angry,
    Unhappy,
    Indifferent,
    Happy,
    VeryHappy
}

export interface FeedbackFilterParams extends BaseFilterParams{}

export interface FeedbackFilterResult extends BaseFilterResult<FeedbackData>{
    totalFeedbacksScore:number;
    feedbacksCount:number;
    feedbacksPercent:number;
}

export interface SendFeedbackData{
    feedbackType:EFeedbackType;
    description?:string | null;
}