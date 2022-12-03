import React from 'react';
import {StoreItemInterface} from '../../../models/store';


export function StoreItem({itemId,storeId,itemName,itemNotes,quantity,addedAt,url}: StoreItemInterface) {
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "50%",
    },
    inputText: {
      padding: "10px",
      color: "red",
    },
  };
    return (
        <div style = { styles.main } className="storeItem"> 
         <p>{itemName}</p>
         <p>{quantity}</p>
         <p>{itemNotes}</p>
         <p>{addedAt}</p>
         <img src={url} alt="" />
        </div>
      )
}
