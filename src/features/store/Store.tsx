import React, { useEffect } from 'react'
import { StoreInterface } from '../../models/store'
import StoreItem  from './storeItem/StoreItem'

   const  Store =  ({storeId,storeName,
    quantity,
    lastUpdated,
    createdAt,
    imageUrl,
    storeItems}:StoreInterface)=> {

      const allItems = storeItems.map(storeItem => {
        return <StoreItem key={storeItem.itemId} {...storeItem} />
      })


    return (
      <>
        <p>{storeName}</p>
        <p>{quantity}</p>
        <p>{lastUpdated}</p>
        <p>{createdAt}</p>
        <img src={imageUrl} alt="" />
        {allItems}
      </>
    )

}
export default Store