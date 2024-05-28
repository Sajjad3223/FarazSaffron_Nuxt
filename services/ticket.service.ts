import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {TicketDto, TicketFilterParams, TicketFilterResult} from "~/models/ticket/ticketQueries";
import type {
    CreateTicketByAdminCommand,
    CreateTicketCommand,
    SendTicketMessageCommand
} from "~/models/ticket/ticketCommands";

export const GetTickets = (params:TicketFilterParams):Promise<ApiResponse<TicketFilterResult>> => {
    return FetchApi("/ticket",{
        method:'GET',
        params
    });
}
export const GetTicket = (ticketId:number):Promise<ApiResponse<TicketDto>> => {
    return FetchApi(`/ticket/${ticketId}`,{
        method:'GET',
    });
}
export const CreateTicket = (command:CreateTicketCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/ticket`,{
        method:'POST',
        body:command
    });
}
export const SendTicketMessage = (command:SendTicketMessageCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/ticket`,{
        method:'PUT',
        body:command
    });
}
export const CloseTicket = (ticketId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/ticket/close/${ticketId}`,{
        method:'PUT',
    });
}

// Admin
export const GetTicketsByAdmin = (params:TicketFilterParams):Promise<ApiResponse<TicketFilterResult>> => {
    return FetchApi(`/admin/ticket`,{
        method:'GET',
    });
}
export const CreateTicketByAdmin = (command:CreateTicketByAdminCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/ticket`,{
        method:'POST',
        body:command
    });
}
export const GetPendingTicketsCount = ():Promise<ApiResponse<number>> => {
    return FetchApi(`/admin/ticket/count`,{
        method:'GET',
    });
}
export const SendTicketMessageByAdmin = (command:SendTicketMessageCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/ticket`,{
        method:'PUT',
        body:command
    });
}
export const CloseTicketByAdmin = (ticketId:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/ticket/close/${ticketId}`,{
        method:'PUT',
    });
}