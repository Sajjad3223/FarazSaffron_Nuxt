import type {
    SendContactFormCommand,
    SubscribeNewsletterCommand,
    UnSubscribeNewsletterCommand
} from "~/models/contact/contactCommands";
import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {
    ContactFilterParams,
    ContactFilterResult,
    NewsletterFilterParams,
    NewsletterFilterResult
} from "~/models/contact/contactQueries";

export const SendContactForm = (command:SendContactFormCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/Contact",{
        method:'POST',
        body:command
    });
}

export const SubscribeNewsletter = (command:SubscribeNewsletterCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/contact/newsletter",{
        method:'POST',
        body:command
    });
}
export const UnSubscribeNewsletter = (command:UnSubscribeNewsletterCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/contact/unsubscribe",{
        method:'DELETE',
        body:command
    });
}

//TODO move to admin service
export const GetContactForms = (params:ContactFilterParams):Promise<ApiResponse<ContactFilterResult>> => {
    return FetchApi("/admin/contact",{
        method:'GET',
        params
    });
}
export const GetNewsletters = (params:NewsletterFilterParams):Promise<ApiResponse<NewsletterFilterResult>> => {
    return FetchApi("/admin/contact/newsletters",{
        method:'GET',
        params
    });
}