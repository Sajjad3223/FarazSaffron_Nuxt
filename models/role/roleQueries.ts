import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface RoleFilterParams extends BaseFilterParams{
    search? : string | null;
}

export interface RoleDto extends BaseDto {
    title: string;
    permissions: EPermission[];
}

export interface RoleFilterData extends BaseDto{
    title:string;
}

export enum EPermission {
    مدیریت_کاربران,
    مدیریت_محصولات,
    مدیریت_مقالات,
    افزودن_ویرایش_مقالات,
    مدیریت_دسته_بندی_ها,
    مدیریت_نظرات,
    مدیریت_تیکت_ها,
    مدیریت_تماس_با_ما,
    مدیریت_تخفیفات,
    مدیریت_اطلاع_رسانی_ها,
    مدیریت_سفارشات,
    مدیریت_لقب_ها,
    مدیریت_مالی
}

export interface RoleFilterResult extends BaseFilterResult<RoleFilterData>{}