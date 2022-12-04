
export interface StoreInterface {
    storeId: number
    storeName:string 
    quantity: number | null;
    lastUpdated: number;
    createdAt:number;
    imageUrl:string 
    storeItems: StoreItemInterface[]
}  


export interface StoreItemInterface {
    itemId: number
    storeId: number
    itemName: string
    itemNotes: string
    itemQuantity: number | null
    addedAt: number
    imageUrl: string 
}  

