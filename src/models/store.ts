

export interface getAllStoresResponse{
    type: string,
    message: string,
    status: number,
    success: boolean,
    data: StoreInterface[]

}
export interface StoreInterface {
    storeId: number
    storeName:string 
    quantity: number | null;
    lastUpdated: number;
    createdAt:number;
    url:string 
    storeItems: StoreItemInterface[]
}  


export interface StoreItemInterface {
    itemId: number
    storeId: number
    itemName: string
    itemNotes: string
    quantity: number | null
    addedAt: number
    url: string 
}  

