import React, { useEffect } from 'react'
import { StoreInterface } from '../../models/store'


  export const  Store = ({storeId,storeName,
    quantity,
    lastUpdated,
    createdAt,
    url,
    storeItems}:StoreInterface)=> {

    useEffect(() =>{
          },[])
    return (
        <>
        <p>{storeName}</p>
        </>
    )

}