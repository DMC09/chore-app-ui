import React, { useEffect } from 'react'
import { StoreInterface } from '../../models/store'
import { StoreItem } from './storeItem/StoreItem'


  export const  Store = ({storeId,storeName,
    quantity,
    lastUpdated,
    createdAt,
    url,
    storeItems}:StoreInterface)=> {

      const allItems = storeItems.map(storeItem =>{
        return <StoreItem {...storeItem}/>
      })


    return (
        <>
        <p>{storeName}</p>
        <p>{quantity}</p>
        <p>{lastUpdated}</p>
        <p>{createdAt}</p>
        <img src={url} alt="" />
        {allItems}
        </>
    )

}