
export interface CreateTransmissionCommand{
    state:string;
    city:string;
    weight:number;
    price:number;
}
export interface EditTransmissionCommand{
    transmissionId:number;
    state:string;
    city:string;
    weight:number;
    price:number;
}
export interface SetTransmissionPriceCommand{
    state:string;
    city:string;
    weight:number;
}