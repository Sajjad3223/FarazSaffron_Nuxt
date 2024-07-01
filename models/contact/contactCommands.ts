export interface SendContactFormCommand{
    fullName:    string;
    phoneNumber: string;
    email:       string;
    subject:       string;
    text:        string;
}

export interface SubscribeNewsletterCommand{
    fullName?:    string | null;
    email:       string;
}
export interface UnSubscribeNewsletterCommand{
    email:       string;
}