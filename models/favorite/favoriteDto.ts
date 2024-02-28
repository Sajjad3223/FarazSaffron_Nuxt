import type {BaseMongoDto} from "~/models/baseMongoDto";
import type {EPostType} from "~/models/EPostType";

export interface FavoriteDto extends BaseMongoDto{
    userId:       number;
    postId:       number;
    postTitle:    string;
    postSlug:     string;
    postType:     EPostType;
}