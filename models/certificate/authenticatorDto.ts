import type {BaseDto} from "~/models/baseDto";
import type {ProductFilterData} from "~/models/product/productQueries";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface AuthenticatorDto extends BaseDto{
    serialNumber: string;
    title: string;
    certificateId: number;
    properties: CAPropertyDto[];
    certificate: CertificateDto;
}

export interface AuthenticatorFilterData extends BaseDto{
    serialNumber: string;
    title: string;
}
export interface AuthenticatorFilterParams extends BaseFilterParams{
    search?: string | null | undefined;
}
export interface AuthenticatorFilterResult extends BaseFilterResult<AuthenticatorFilterData>{}

export interface CAPropertyDto extends BaseDto{
    authenticatorId: number;
    certificateId: number;
    propertyId: number;
    title: string;
    hintValue: string;
    value: string;
    propertyType:EPropertyType;
}
export interface PropertyFilterParams extends BaseFilterParams{
    search?:string | null | undefined;
}
export interface PropertyFilterResult extends BaseFilterResult<CAPropertyDto>{
}

export interface CertificateDto extends BaseDto{
    productId: number;
    title: string;
    properties: CAPropertyDto[];
    product:ProductFilterData;
}
export interface CertificateFilterData extends BaseDto{
    title: string;
}
export interface CertificateFilterParams extends BaseFilterParams{
    search?: string | null | undefined;
}
export interface CertificateFilterResult extends BaseFilterResult<CertificateFilterData>{}

export enum EPropertyType
{
    متن,
    عدد,
    تصویر,
    ویدئو,
    فایل,
    تاریخ,
    زمان,
    لینک
}