import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {
    AuthenticatorDto,
    AuthenticatorFilterParams, AuthenticatorFilterResult, CertificateDto,
    CertificateFilterParams, CertificateFilterResult, PropertyFilterParams, PropertyFilterResult
} from "~/models/certificate/authenticatorDto";
import type {
    CreateAuthenticatorCommand,
    CreateCertificateCommand, CreatePropertyCommand, EditAuthenticatorCommand,
    EditCertificateCommand, EditPropertyCommand
} from "~/models/certificate/authenticatorCommands";
import type {SetPropertiesCommand} from "~/models/certificate/authenticatorCommands";

export const GetCertificate = (serial:string):Promise<ApiResponse<AuthenticatorDto | null>> => {
    return FetchApi(`/certificate/${serial}`,{
        method:'GET'
    });
}

//Admin
export const GetAllCertificates = (params:CertificateFilterParams):Promise<ApiResponse<CertificateFilterResult>> => {
    return FetchApi("/admin/certificate/certificate",{
        method:'GET',
        params
    });
}
export const GetAllAuthenticators = (params:AuthenticatorFilterParams):Promise<ApiResponse<AuthenticatorFilterResult>> => {
    return FetchApi(`/admin/certificate/authenticator`,{
        method:'GET',
        params
    });
}
export const GetCertificateById = (id:number):Promise<ApiResponse<CertificateDto>> => {
    return FetchApi(`/admin/certificate/certificate/${id}`,{
        method:'GET'
    });
}
export const GetAuthenticatorById = (id:number):Promise<ApiResponse<AuthenticatorDto>> => {
    return FetchApi(`/admin/certificate/authenticator/${id}`,{
        method:'GET'
    });
}
export const GetCProperties = (id:number,params:PropertyFilterParams):Promise<ApiResponse<PropertyFilterResult>> => {
    return FetchApi(`/admin/certificate/cproperties/${id}`,{
        method:'GET',
        params:params
    });
}
export const GetAProperties = (id:number,params:PropertyFilterParams):Promise<ApiResponse<PropertyFilterResult>> => {
    return FetchApi(`/admin/certificate/aproperties/${id}`,{
        method:'GET',
        params:params
    });
}


export const CreateCertificate = (command:CreateCertificateCommand):Promise<ApiResponse<number>> => {
    return FetchApi("/admin/certificate/certificate",{
        method:'POST',
        body:command
    });
}
export const CreateAuthenticator = (command:CreateAuthenticatorCommand):Promise<ApiResponse<number>> => {
    return FetchApi("/admin/certificate/authenticator",{
        method:'POST',
        body:command
    });
}
export const EditCertificate = (command:EditCertificateCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/certificate/certificate",{
        method:'PUT',
        body:command
    });
}
export const EditAuthenticator = (command:EditAuthenticatorCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/certificate/authenticator",{
        method:'PUT',
        body:command
    });
}
export const SetCProperties = (command:SetPropertiesCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/certificate/certificate/${command.entityId}`,{
        method:'PUT',
        body:command
    });
}
export const SetAProperties = (command:SetPropertiesCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/certificate/authenticator/${command.entityId}`,{
        method:'PUT',
        body:command
    });
}

export const DeleteCertificate = (id:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/certificate/certificate/${id}`,{
        method:'DELETE'
    });
}
export const DeleteAuthenticator = (id:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/certificate/authenticator/${id}`,{
        method:'DELETE'
    });
}

export const CreateCProperty = (command:CreatePropertyCommand):Promise<ApiResponse<number>> => {
    return FetchApi("/admin/certificate/property/certificate",{
        method:'POST',
        body:command
    });
}
export const CreateAProperty = (command:CreatePropertyCommand):Promise<ApiResponse<number>> => {
    return FetchApi("/admin/certificate/property/authenticator",{
        method:'POST',
        body:command
    });
}
export const EditCProperty = (command:EditPropertyCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/certificate/property/certificate",{
        method:'PUT',
        body:command
    });
}
export const EditAProperty = (command:EditPropertyCommand):Promise<ApiResponse<undefined>> => {
    return FetchApi("/admin/certificate/property/authenticator",{
        method:'PUT',
        body:command
    });
}
export const DeleteCProperty = (id:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/certificate/property/certificate/${id}`,{
        method:'DELETE'
    });
}
export const DeleteAProperty = (id:number):Promise<ApiResponse<undefined>> => {
    return FetchApi(`/admin/certificate/property/authenticator/${id}`,{
        method:'DELETE'
    });
}