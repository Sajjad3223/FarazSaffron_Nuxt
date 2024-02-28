import type {BaseDto} from "~/models/baseDto";
import type {Img} from "~/models/image";

export interface ProductImageDto extends BaseDto {
    productId: number;
    image: Img;
}