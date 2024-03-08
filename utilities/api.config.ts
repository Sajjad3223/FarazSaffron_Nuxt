
//@ts-ignore
export const isProd = process.env.NODE_ENV === "production";

export const productionUrl:string = "https://aliakbarmokhtari.ir/api";
export const developmentUrl:string = "http://localhost:5003/api";
export const BASE_URL:string = "https://aliakbarmokhtari.ir/api"; // isProd ? productionUrl : developmentUrl;
