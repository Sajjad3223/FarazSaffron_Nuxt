import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";

export const IsEligible = (amount:number):Promise<ApiResponse<any>> => {
    return FetchApi(`/torobPay/isEligible?amountInRial=${amount}`, {
        method:'GET'
    });
}

export const TorobPayRequest = ():Promise<ApiResponse<any>> => {
    return FetchApi(`/torobPay/payment`, {
        method:'GET'
    });
}

export const TorobPayVerify = (paymentToken:string):Promise<ApiResponse<any>> => {
    return FetchApi(`/torobPay/verify?paymentToken=${paymentToken}`, {
        method:'GET'
    });
}

export const TorobPaySettle = (paymentToken:string):Promise<ApiResponse<any>> => {
    return FetchApi(`/torobPay/settle?paymentToken=${paymentToken}`, {
        method:'GET'
    });
}