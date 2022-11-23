import StoreItemInterface from "./storeItem";

export interface StoreInterface {
    name:string | null 
    quantity: number | null;
    url:string | null
    storeItems: StoreItemInterface[]
}  


export interface allStoresResponseModel {
    type: string,
    message: string,
    status: number,
    success: boolean,
    data?: StoreInterface[]
}  

