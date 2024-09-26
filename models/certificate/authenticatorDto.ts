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
    products:CertificateProductDto[];
}

export interface CertificateProductDto{
    authenticatorId:number;
    serialNumber:string;
    productId:number;
    count:number;
}

export interface AuthenticatorFilterData extends BaseDto{
    certificateId:number;
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

export interface GetCertificateCommand{
    serial:string;
    year:number;
    month:number;
    day:number;
    productId:number;
}

export interface CertificateDto extends BaseDto{
    productId: number;
    title: string;
    properties: CAPropertyDto[];
    product:ProductFilterData;
}
export interface CertificateFilterData extends BaseDto{
    title: string;
    productId:number;
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
    تاریخ_زمان,
    تاریخ,
    زمان,
    لینک,
    کلید_مقدار,
    رنج,
    رنج_چند_تایی,
    متن_چند_خطی,
    موقعیت_مکانی,
    Html
}

export interface CertificateProductDto extends BaseDto{
    serialNumber:string;
    authenticatorId:number;
    productId:number;
    count:number;
    productionDate:Date;
    persianProductionDate:string;
    product:ProductFilterData;
}

export interface CertificateProductFilterParams extends BaseFilterParams{
    search?:string | undefined;
    fromDate?:Object | undefined;
    toDate?:Object | undefined;
}

export interface CertificateProductData{
    count:number;
    product:ProductFilterData;
}
export interface CertificateSerialData{
    count:number;
    serialNumber:string;
}

export interface CertificateProductFilterResult extends BaseFilterResult<CertificateProductDto>{
    productsData:CertificateProductData[];
    serialsData:CertificateSerialData[];
    totalProductionCount:number;
}