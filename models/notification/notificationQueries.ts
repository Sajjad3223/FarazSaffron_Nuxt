import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import {ESubjectType} from "~/models/notification/ESubjectType";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface NotificationFilterParams extends BaseFilterParams{
    search?:        string | null;
    subjectType?:   ESubjectType | null;
    userId?:        number | null;
    justAvailable?: boolean | null;
}

export interface NotificationDto extends BaseDto{
    userId?:           number | null;
    title:            string;
    content:          string;
    subjectType:      ESubjectType;
    isSeen:           boolean;
    availableTime:    Date;
    getAvailableText: string;
}

export interface NotificationFilterResult extends BaseFilterResult<NotificationDto>{}