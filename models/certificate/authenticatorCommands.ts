import type {EPropertyType} from "~/models/certificate/authenticatorDto";

export interface CreateAuthenticatorCommand{
    serialNumber: string;
    title: string;
    certificateId: number;
}

export interface CreateCertificateCommand{
    title: string;
    productId: number;
}

export interface EditAuthenticatorCommand{
    authenticatorId: number;
    serialNumber: string;
    title: string;
    certificateId: number;
}

export interface EditCertificateCommand{
    certificateId: number;
    title: string;
    productId: number;
}

export interface AddPropertyCommand{
    propertyId: number;
    value?: string | null | undefined;
    file?: string | null | undefined;
    propertyType: EPropertyType;
}

export interface SetPropertiesCommand{
    entityId:number;
    properties:AddPropertyCommand[];
}

export interface AddCertificateProductCommand{
    productId:number;
    count:number;
}
export interface SetCertificateProductsCommand{
    authenticatorId:number;
    products:AddCertificateProductCommand[];
    persianDate:string;
}

export interface CreatePropertyCommand{
    title:string;
    placeHolder?:string | null | undefined;
    propertyType: EPropertyType;
}
export interface EditPropertyCommand{
    propertyId: number;
    title:string;
    placeHolder?:string | null | undefined;
    propertyType: EPropertyType;
}