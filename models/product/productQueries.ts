import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {EOrderBy} from "~/models/product/EOrderBy";
import type {Img} from "~/models/image";
import type {EPackingType} from "~/models/product/EPackingType";
import type {CategoryDto} from "~/models/categories/categoryQueries";
import type {SeoData} from "~/models/seoData";
import type {ProductImageDto} from "~/models/product/productImageDto";
import type {SpecificationDto} from "~/models/product/specificationDto";
import type {DimensionDto} from "~/models/product/dimensionDto";
import type {EPropertyType} from "~/models/certificate/authenticatorDto";

export interface ProductFilterParams extends BaseFilterParams{
    search?:             string | null | undefined;
    categoriesIncluded?: number[] | null | undefined;
    minQuantity?:        number | null | undefined;
    maxQuantity?:        number | null | undefined;
    fromDate?:           Date | null | undefined;
    toDate?:             Date | null | undefined;
    minPrice?:           number | null | undefined;
    maxPrice?:           number | null | undefined;
    orderBy?:            EOrderBy | null | undefined;
    justWithDiscount?:   boolean | null | undefined;
    minDiscount?:        number | null | undefined;
    maxDiscount?:        number | null | undefined;
    serialNumber?:       string | null | undefined;
    dgkalaData?:         DigikalaData | null | undefined;
    basalamData?:        BasalamData | null | undefined;
}

export interface DigikalaData {
    digikalaLink?:string;
    digikalaPrice?:number;
}
export interface BasalamData {
    basalamLink?:string;
    basalamPrice?:number;
}

export interface CatalogFilterParams extends BaseFilterParams{
    search? : string | null | undefined;
}
export interface CatalogDto extends BaseDto{
    title: string;
    description?: string;
    fileName: string;
}
export interface CatalogFilterResult extends BaseFilterResult<CatalogDto>{}
export interface ProductFilterData extends BaseDto{
    title:        string;
    slug:         string;
    price:        number;
    discount:     number;
    weight:         number;
    healthNumber:   string;
    totalPrice:   number;
    packingType:  EPackingType;
    mainImage:    Img;
    quantity:     number;
    score:        number;
    visits:       number;
    digiKalaData?:  DigikalaData | null | undefined;
    basalamData?: BasalamData | null | undefined;
}
export interface ProductDto extends BaseDto{
    title:          string;
    slug:           string;
    price:          number;
    discount:       number;
    weight:         number;
    healthNumber:   string;
    totalPrice:     number;
    packingType:    EPackingType;
    mainImage:      Img;
    productCode: string;
    barcodeNumber: string;
    category:       CategoryDto;
    subCategory?:   CategoryDto | null;
    dimensions:     DimensionDto;
    digiKalaData?:  DigikalaData | null;
    basalamData?: BasalamData | null;
    seoData:        SeoData;
    quantity:       number;
    score:          number;
    visits:         number;
    images:         ProductImageDto[];
    specifications: SpecificationDto[];
    properties: ProductPropertyDto[];
    catalog?:CatalogDto | null;
}

export interface ProductFilterResult extends BaseFilterResult<ProductFilterData>{}

export interface ProductPropertyDto extends BaseDto{
    productId:number;
    propertyId:number;
    propertyType:EPropertyType;
    title:string;
    value: string;
}

export interface PropertyDto extends BaseDto{
    title:string;
    hintValue?: string | null;
    propertyType:EPropertyType;
}
export interface PropertyFilterParams extends BaseFilterParams{
    search?: string | null | undefined;
}

export interface PropertyFilterResult extends BaseFilterResult<PropertyDto>{
}

export interface SelectFilterParams extends BaseFilterParams{
    search?:string | null | undefined;
}

export interface SelectTagDto{
    id:number;
    title:string;
    imageName?:string | null;
}