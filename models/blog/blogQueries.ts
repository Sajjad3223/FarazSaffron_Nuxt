import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {Writer} from "~/models/blog/postDto";
import type {Img} from "~/models/image";
import {EPostStatus} from "~/models/blog/EPostStatus";

export interface PostFilterParams extends BaseFilterParams {
    search?: string | null;
    category?: number | null;
    postStatus?: number | null;
    fromDate?: Date | null;
    toDate?: Date | null;
}

export interface PostCardData extends BaseDto {
    title: string;
    slug: string;
    shortDescription: string;
    writer: Writer;
    image: Img;
    postStatus: EPostStatus;
}

export interface PostFilterResult extends BaseFilterResult<PostCardData> {
}

