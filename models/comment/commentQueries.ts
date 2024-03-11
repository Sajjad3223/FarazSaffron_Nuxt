import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseDto} from "~/models/baseDto";
import type {Sender} from "~/models/sender";
import {EPostType} from "~/models/EPostType";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface CommentFilterParams extends BaseFilterParams{
    postId?:        number | null;
    postType?:      number | null;
    search?:        string | null;
    commentStatus?: ECommentStatus | null;
    startDate?:     Date | null;
    endDate?:       Date | null;
    userRequested?: number | null;
}

export interface CommentDto extends BaseDto{
    parentId:      number;
    postId:        number;
    score:        number;
    postType:      EPostType;
    text:          string;
    sender:        Sender;
    commentStatus: ECommentStatus;
    likesCount:    number;
    dislikesCount: number;
    userReaction:  string;
    isConsumer:  boolean;
    answers:       CommentDto[];
}

export interface CommentFilterResult extends BaseFilterResult<CommentDto>{}

export interface GetPostScoreParams{
    postType:EPostType;
    postId:number;
}

export enum ECommentStatus{
    Published,
    Pending,
    Rejected
}

