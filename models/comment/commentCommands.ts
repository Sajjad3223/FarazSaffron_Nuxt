import type {EPostType} from "~/models/EPostType";

export interface SendCommentCommand{
    parentId?: number | null;
    postId: number;
    postType: EPostType;
    score: number;
    content: string;
}
export interface EditCommentCommand{
    commentId: number;
    content: string;
}