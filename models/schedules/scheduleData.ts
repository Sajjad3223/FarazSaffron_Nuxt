import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface ScheduleDto extends BaseDto{
    title:string;
    message:string;
    scheduleDate:Date;
    shouldMessage:boolean;
    messageSent:boolean;
}

export interface ScheduleFilterParams extends BaseFilterParams{
    date?:Date | undefined | null;
    justUnsent?:boolean | undefined;
}

export interface ScheduleFilterResult  extends BaseFilterResult<ScheduleDto>{}

export interface CreateScheduleCommand{
    title:string;
    message:string;
    scheduleDate:string;
    shouldMessage:boolean;
}

export interface EditScheduleCommand{
    scheduleId:number;
    title:string;
    message:string;
    scheduleDate:string;
    shouldMessage:boolean;
}