import type {DigikalaItemResult, DigikalaResult} from "~/models/digikala/digikalaServiceResult";
import type {FetchOptions} from "ofetch";

const DIGIKALA_TOKEN:string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJ0b2tlbl9pZCI6MTgwMDEsInBheWxvYWQiOm51bGx9.nYa4mI6o6nW0TyJlVW3vl5ahxv4Gx5yyWPe2FSfFIxxvj3CnLTqUssKIsoatwogT';

export const GetAllDigikalaItems = ():Promise<DigikalaResult> => {
    const config:FetchOptions = {
        baseURL:'https://seller.digikala.com',
        method:'GET'
    };
    if(!config.headers)
    {
        config.headers = {};
    }
    //@ts-ignore
    config.headers['Authorization'] = DIGIKALA_TOKEN;
    return $fetch(`/api/v1/variants/`,config);
}
export const GetDigikalaItem = (id:number):Promise<DigikalaItemResult> => {
    const config:FetchOptions = {
        baseURL:'https://seller.digikala.com',
        method:'GET'
    };
    if(!config.headers)
    {
        config.headers = {};
    }
    //@ts-ignore
    config.headers['Authorization'] = DIGIKALA_TOKEN;
    return $fetch(`/api/v1/variants/${id}/`,config);
}
