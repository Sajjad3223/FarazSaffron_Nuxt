import type {ESubjectType} from "~/models/notification/ESubjectType";

export interface CreateNotificationCommand {
    userId?: number | null;
    title: string;
    content: string;
    subjectType: ESubjectType;
    availableTime: Date;
}

export interface EditNotificationCommand {
    notificationId: number;
    title: string;
    content: string;
    subjectType: ESubjectType;
    availableTime: Date;
}