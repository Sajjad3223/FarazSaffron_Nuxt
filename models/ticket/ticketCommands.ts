export interface CreateTicketCommand{
    title:string;
    text:string;
}

export interface SendTicketMessageCommand{
    ticketId:number;
    text:string;
}

export interface CreateTicketByAdminCommand{
    userId:number;
    fullName:string;
    title:string;
    text:string;
}