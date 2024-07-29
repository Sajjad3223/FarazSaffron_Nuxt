import type {DimensionDto} from "~/models/product/dimensionDto";
import type {SeoData} from "~/models/seoData";
import type {EPackingType} from "~/models/product/EPackingType";
import type {BasalamData, DigikalaData} from "~/models/product/productQueries";
import type {AddPropertyCommand} from "~/models/certificate/authenticatorCommands";

export interface CreateProductCommand {
    title: string;
    slug: string;
    price: number;
    discount: number;
    weight: number;
    healthNumber?: string | null;
    packingType: EPackingType;
    mainImage: File;
    mainImageAlt: string;
    productCode: string;
    barcodeNumber: string;
    categoryId: number;
    subCategoryId?: number | null;
    dimensions: DimensionDto;
    digiKalaData?:  DigikalaData | null;
    basalamData?: BasalamData | null;
    seoData: SeoData;
    quantity: number;
    catalogId?: number | null;
}

export interface EditProductCommand {
    productId: number;
    title: string;
    slug: string;
    price: number;
    discount: number;
    weight: number;
    healthNumber?: string | null;
    packingType: number;
    productCode: string;
    barcodeNumber: string;
    categoryId: number;
    subCategoryId?: number | null;
    dimensions: DimensionDto;
    digiKalaData:  DigikalaData;
    basalamData: BasalamData;
    seoData: SeoData;
    quantity: number;
    catalogId?: number | null;
}

export interface SetProductDiscountCommand {
    productId: number;
    discount: number;
}

export interface SetProductImagesCommand {
    productId: number;
    images: ImageUploadViewModel[];
}

export interface ImageUploadViewModel {
    image: Blob;
    imageAlt: string;
}

export interface SetMainImageCommand {
    productId: number;
    image: Blob;
    imageAlt: string;
}

export interface SetMainImageFromImagesCommand {
    productId: number;
    imageId: number;
}

export interface SetSpecificationsCommand {
    productId: number;
    specifications: [];
}

export interface SetPropertiesCommand {
    entityId: number;
    properties: AddPropertyCommand[];
}
export interface ProductPropertyViewModel{
    propertyId:number;
    value:string;
}
export interface CreatePropertyCommand {
    title: string;
    hintValue?:string | null;
}
export interface EditPropertyCommand {
    propertyId: number;
    title: string;
    hintValue?:string | null;
}

export interface SetSeoDataCommand {
    productId: number;
    seoData: SeoData;
}

export interface CreateSpecificationViewModel {
    key: string;
    value: string;
}

export interface EditCatalogCommand {
    title: string;
    description?: string | null;
}