import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface LogDto{
    id: number;
    message: string;
    level: LogLevel;
    messageTemplate: string;
    timeStamp: string;
    exception: string;
    properties: string;
    persianDate: string;
}

export enum LogLevel{
    Trace,
    Debug,
    Information,
    Warning,
    Error,
    Critical,
    None,
}

export interface LogsFilterParams extends BaseFilterParams{
    logLevel?: LogLevel | null | undefined;
}

export interface LogsFilterResult extends BaseFilterResult<LogDto>{

}