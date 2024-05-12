import {GetProducts} from "~/services/product.service";
import {EOrderBy} from "~/models/product/EOrderBy";

export const useProductUtils = ()=>{
    const GetPopularProducts = async (take:number) => {
        const productResult = await GetProducts({pageId:1,take,orderBy:EOrderBy.محبوبیت});
        return productResult.data?.data;
    }
    const GetNewestProducts = async (take:number) => {
        const productResult = await GetProducts({pageId:1,take,orderBy:EOrderBy.جدیدترین});
        return productResult.data?.data;
    }

    return {
        GetPopularProducts,
        GetNewestProducts
    };
}