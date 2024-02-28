import type {SeoData} from "~/models/seoData";
import {EPostStatus} from "~/models/blog/EPostStatus";

export interface CreatePostCommand{
    title:string;
    slug:string;
    shortDescription:string;
    content:string;
    categoryId:number;
    subCategoryId:number;
    image:Blob;
    imageAlt:string;
    seoData:SeoData;
    tags?:string;
}
export interface EditPostCommand{
    postId:number;
    title:string;
    slug:string;
    shortDescription:string;
    content:string;
    categoryId:number;
    subCategoryId:number;
    seoData:SeoData;
    tags?:string;
}
export interface SetPostImageCommand {
    postId:number;
    image:Blob;
    alt:string;
}
export interface SetPostActivityCommand{
    postId:number;
    newActivity:boolean;
}
export interface SetPostStatusCommand{
    postId:number;
    newStatus:EPostStatus;
}