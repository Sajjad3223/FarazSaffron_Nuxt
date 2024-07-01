import type {BaseDto} from "~/models/baseDto";
import type {Img} from "~/models/image";
import type {EOrderBy} from "~/models/product/EOrderBy";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface DataTemplateDto extends BaseDto{
    title: string
    firstItemSection: EOrderBy
    secondItemSection: EOrderBy
    topBanner: TopBanner
    mainBanners: Banner[]
    honors: Honor[]
    specialComments: SpecialComment[]
    blogPreviews: BlogPreview[]
}
export interface DataTemplateFilterData extends BaseDto{
    title: string
    firstItemSection: EOrderBy
    secondItemSection: EOrderBy
}

export interface DataTemplateFilterParams extends BaseFilterParams{
    search?: string | null | undefined
}

export interface DataTemplateFilterResult extends BaseFilterResult<DataTemplateFilterData>{}

export interface TopBanner extends BaseDto{
    templateId: number
    image: Img
    url: string
}
export interface Banner extends BaseDto{
    templateId: number
    image: Img
    order: number
    url: string
}

export interface Honor extends BaseDto{
    templateId: number
    image: Img
    description: string
    link: string
}

export interface SpecialComment extends BaseDto {
    templateId: number
    postId: number
    userName: string
    userJob: string
    userScore: string
    userAvatar: string
    content: string
    linkToDGKala?: string | null
}

export interface BlogPreview extends BaseDto {
    templateId: number
    banner: Img
    title: string
    shortDescription: string
    url: string
}