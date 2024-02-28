import type {BaseDto} from "~/models/baseDto";
import type {Img} from "~/models/image";
import type {SeoData} from "~/models/seoData";
import {EPostStatus} from "~/models/blog/EPostStatus";

export interface PostDto extends BaseDto {
    title: string;
    slug: string;
    shortDescription: string;
    content: string;
    writer: Writer;
    categoryId: number;
    subCategoryId: number;
    image: Img;
    seoData: SeoData;
    tags: string;
    postStatus: EPostStatus;
}

export interface Writer {
    userId: number;
    fullName: string;
}
