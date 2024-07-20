import type {BaseDto} from "~/models/baseDto";

export interface QuestionDto extends BaseDto{
    title:string;
    answer:string;
}