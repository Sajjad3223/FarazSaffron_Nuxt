
//@ts-ignore
export const isProd = process.env.NODE_ENV === "production";

export const productionUrl:string = "https://aliakbarmokhtari.ir/api";
//export const developmentUrl:string = "http://localhost:5003/api";
export const developmentUrl:string = "http://localhost:5000/api";
//export const BASE_URL:string =  isProd ? productionUrl : developmentUrl;
//export const BASE_URL:string =  "http://localhost:5000/api";
export const BASE_URL:string =  "http://localhost:5000/api";
export const SITE_URL:string =  "http://localhost:5000";
//export const BASE_URL:string = "http://aliakbarmokhtari.ir/api";
