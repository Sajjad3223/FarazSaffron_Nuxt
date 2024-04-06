import type {DimensionDto} from "~/models/product/dimensionDto";
import type {SeoData} from "~/models/seoData";
import type {EPackingType} from "~/models/product/EPackingType";

export interface CreateProductCommand {
    title: string;
    slug: string;
    price: number;
    discount: number;
    packingType: EPackingType;
    mainImage: File;
    mainImageAlt: string;
    productCode: string;
    barcodeNumber: string;
    categoryId: number;
    subCategoryId?: number | null;
    dimensions: DimensionDto;
    digiKalaLink?: string | null;
    seoData: SeoData;
    quantity: number;
    catalogId?:number | null;
}

export interface EditProductCommand {
    productId: number;
    title: string;
    slug: string;
    price: number;
    discount: number;
    packingType: number;
    productCode: string;
    barcodeNumber: string;
    categoryId: number;
    subCategoryId?: number | null;
    dimensions: DimensionDto;
    digiKalaLink?: string | null;
    seoData: SeoData;
    quantity: number;
    catalogId?:number | null;
}

export interface SetProductDiscountCommand{
    productId:number;
    discount:number;
}

export interface SetProductImagesCommand{
    productId:number;
    images:ImageUploadViewModel[];
}

export interface ImageUploadViewModel{
    image:Blob;
    imageAlt:string;
}

export interface SetMainImageCommand{
    productId:number;
    image:Blob;
    imageAlt:string;
}
export interface SetMainImageFromImagesCommand{
    productId:number;
    imageId:number;
}
export interface SetSpecificationsCommand{
    productId:number;
    specifications:[];
}
export interface SetSeoDataCommand{
    productId:number;
    seoData:SeoData;
}

export interface CreateSpecificationViewModel{
    key:string;
    value:string;
}
export interface EditCatalogCommand{
    title:string;
    description?:string | null;
}