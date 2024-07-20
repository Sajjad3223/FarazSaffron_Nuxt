import {GetProducts, GetProductsForSelectTag} from "~/services/product.service";
import {EOrderBy} from "~/models/product/EOrderBy";

export const useProductUtils = ()=>{
    const GetPopularProducts = async (take:number = 7) => {
        const productResult = await GetProducts({pageId:1,take,minQuantity:5,orderBy:EOrderBy.محبوبیت});
        return productResult.data?.data;
    }
    const GetNewestProducts = async (take:number = 7) => {
        const productResult = await GetProducts({pageId:1,take,minQuantity:5,orderBy:EOrderBy.جدیدترین});
        return productResult.data?.data;
    }
    const GetForSelectTag = async (take:number = 50,search:string | undefined = undefined) => {
        return await GetProductsForSelectTag({pageId: 1, take, search});
    }

    return {
        GetPopularProducts,
        GetNewestProducts,
        GetForSelectTag
    };
}