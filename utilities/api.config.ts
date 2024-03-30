
//@ts-ignore
export const isProd = true; // process.env.NODE_ENV === "production";

export const apiProductionUrl:string = "https://api.gpsaffron.com/api";
export const apiDevelopmentUrl:string = "http://localhost:5000/api";
export const BASE_URL:string =  isProd ? apiProductionUrl : apiDevelopmentUrl;


export const productionUrl:string = "https://api.gpsaffron.com";
export const developmentUrl:string = "http://localhost:5000";
export const SITE_URL:string =  isProd ? productionUrl : developmentUrl;
