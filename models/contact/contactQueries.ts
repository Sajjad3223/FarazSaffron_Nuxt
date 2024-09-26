import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface ContactFilterParams extends BaseFilterParams{
    search?:string | null;
}

export interface ContactFormDto extends BaseDto{
    fullName:    string;
    phoneNumber: string;
    email:       string;
    subject:       string;
    text:        string;
    isSeen:        boolean;
}

export interface ContactFilterResult extends BaseFilterResult<ContactFormDto>{}
export interface NewsletterFilterParams extends BaseFilterParams{
    search?:string | null;
}

export interface NewsletterDto extends BaseDto{
    fullName:    string;
    email:       string;
}

export interface NewsletterFilterResult extends BaseFilterResult<NewsletterDto>{}