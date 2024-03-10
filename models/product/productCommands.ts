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
    serialNumber: string;
    categoryId: number;
    subCategoryId?: number | null;
    dimensions: DimensionDto;
    digiKalaLink?: string | null;
    seoData: SeoData;
    quantity: number;
}

export interface EditProductCommand {
    productId: number;
    title: string;
    slug: string;
    price: number;
    discount: number;
    packingType: number;
    serialNumber: string;
    categoryId: number;
    subCategoryId?: number | null;
    dimensions: DimensionDto;
    digiKalaLink?: string | null;
    seoData: SeoData;
    quantity: number;
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
    specifications:CreateSpecificationViewModel[];
}
export interface SetSeoDataCommand{
    productId:number;
    seoData:SeoData;
}

export interface CreateSpecificationViewModel{
    key:string;
    value:string;
}