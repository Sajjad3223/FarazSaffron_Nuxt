import type {BaseDto} from "~/models/baseDto";
import type {Img} from "~/models/image";
import type {EOrderBy} from "~/models/product/EOrderBy";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface DataTemplateDto extends BaseDto{
    title: string
    firstItemSection: EOrderBy
    secondItemSection: EOrderBy
    topBanner: Banner
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

export interface Banner extends BaseDto{
    templateId: number
    image: Img
    isMain: boolean
    url: string
}

export interface Honor {
    templateId: number
    image: Img
    description: string
    link: string
}

export interface SpecialComment {
    templateId: number
    postId: number
    userName: string
    userJob: string
    userScore: string
    userAvatar: string
    content: string
    linkToDGKala?: string | null
}

export interface BlogPreview {
    templateId: number
    banner: Img
    title: string
    shortDescription: string
    url: string
}