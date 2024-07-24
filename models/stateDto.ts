export interface StateDto{
    id:number;
    name:string;
    center:string;
    latitude:string;
    longitude:string;
    cities:CityDto[];
}

export interface CityDto{
    id:number;
    name:string;
    latitude:string;
    longitude:string;
}