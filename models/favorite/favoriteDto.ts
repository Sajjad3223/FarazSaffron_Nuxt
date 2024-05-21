import type {BaseMongoDto} from "~/models/baseMongoDto";
import type {EPostType} from "~/models/EPostType";
import type {Img} from "~/models/image";

export interface FavoriteDto extends BaseMongoDto{
    userId:       number;
    postId:       number;
    postTitle:    string;
    postSlug:     string;
    postImage:    Img;
    postType:     EPostType;
}
export interface CreateFavoriteCommand{
    postId:       number;
    postTitle:    string;
    postSlug:     string;
    postType:     EPostType;
    postImage:    Img;
}
export interface IsUserFavoriteCommand{
    postId:       number;
    postType:     EPostType;
}