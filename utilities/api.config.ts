
//@ts-ignore
export const isProd = process.env.NODE_ENV === "production";

export const productionUrl:string = "https://gpsaffron.com/api";
export const developmentUrl:string = "https://localhost:5003/api";
export const BASE_URL:string = isProd ? productionUrl : developmentUrl;
