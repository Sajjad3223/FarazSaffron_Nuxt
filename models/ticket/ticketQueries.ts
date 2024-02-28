import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {Sender} from "~/models/sender";

export interface TicketFilterParams extends BaseFilterParams {
    search?: string | null;
    ticketStatus?: ETicketStatus | null;
    fromDate?: Date | null;
    toDate?: Date | null;
    userId?: number | null;
}

export enum ETicketStatus {
    Pending,
    Answered,
    Closed
}

export interface TicketDto extends BaseDto {
    title: string;
    sender: Sender;
    content: string;
    ticketStatus: ETicketStatus;
    messages: TicketMessageDto[];
}

export interface TicketMessageDto extends BaseDto {
    ticketId: number;
    sender: Sender;
    message: string;
}

export interface TicketFilterData extends BaseDto {
    title: string;
    sender: Sender;
    content: string;
    ticketStatus: ETicketStatus;
}

export interface TicketFilterResult extends BaseFilterResult<TicketFilterData> {
}