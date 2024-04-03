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

export interface ProductFilterParams extends BaseFilterParams{
    search?:             string | null;
    categoriesIncluded?: number[] | null;
    minQuantity?:        number | null;
    maxQuantity?:        number | null;
    fromDate?:           Date | null;
    toDate?:             Date | null;
    minPrice?:           number | null;
    maxPrice?:           number | null;
    orderBy?:            EOrderBy | null;
    justWithDiscount?:   boolean | null;
    minDiscount?:        number | null;
    maxDiscount?:        number | null;
    serialNumber?:       string | null;
    dgkalaLink?:         string | null;
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
    totalPrice:   number;
    packingType:  EPackingType;
    mainImage:    Img;
    quantity:     number;
    score:        number;
    visits:       number;
}
export interface ProductDto extends BaseDto{
    title:          string;
    slug:           string;
    price:          number;
    discount:       number;
    totalPrice:     number;
    packingType:    EPackingType;
    mainImage:      Img;
    productCode: string;
    barcodeNumber: string;
    category:       CategoryDto;
    subCategory?:   CategoryDto | null;
    dimensions:     DimensionDto;
    digiKalaLink?:   string | null;
    seoData:        SeoData;
    quantity:       number;
    score:          number;
    visits:         number;
    images:         ProductImageDto[];
    specifications: SpecificationDto[];
    catalog?:CatalogDto | null;
}

export interface ProductFilterResult extends BaseFilterResult<ProductFilterData>{}

